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
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "est",
            XAmzCredential: "voluptates",
            XAmzDate: "repellat",
            XAmzSecurityToken: "eligendi",
            XAmzSignature: "adipisci",
            XAmzSignedHeaders: "sit",
            XAmzTarget: "AWSLookoutEquipmentFrontendService.CreateDataset",
        },
        Request: shared.CreateDatasetRequest{
            ClientToken: "atque",
            DatasetName: "odio",
            DatasetSchema: shared.DatasetSchema{
                InlineDataSchema: "quam",
            },
            ServerSideKmsKeyID: "ut",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptas",
                    Value: "in",
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