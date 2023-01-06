<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateDatasetRequest{
        Headers: operations.CreateDatasetHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "aut",
            XAmzCredential: "minima",
            XAmzDate: "at",
            XAmzSecurityToken: "maiores",
            XAmzSignature: "rem",
            XAmzSignedHeaders: "aperiam",
            XAmzTarget: "AWSLookoutEquipmentFrontendService.CreateDataset",
        },
        Request: shared.CreateDatasetRequest{
            ClientToken: "iste",
            DatasetName: "at",
            DatasetSchema: shared.DatasetSchema{
                InlineDataSchema: "accusantium",
            },
            ServerSideKmsKeyID: "qui",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "illo",
                    Value: "voluptas",
                },
            },
        },
    }
    
    res, err := s.CreateDataset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->