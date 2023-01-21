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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSLookoutEquipmentFrontendService.CreateDataset",
        },
        Request: shared.CreateDatasetRequest{
            ClientToken: "fugit",
            DatasetName: "et",
            DatasetSchema: shared.DatasetSchema{
                InlineDataSchema: "nihil",
            },
            ServerSideKmsKeyID: "rerum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "debitis",
                    Value: "voluptatum",
                },
                shared.Tag{
                    Key: "et",
                    Value: "ut",
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: "et",
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