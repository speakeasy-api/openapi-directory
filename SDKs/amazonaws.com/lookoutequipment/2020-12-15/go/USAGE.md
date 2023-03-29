<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateDatasetRequest{
        Headers: operations.CreateDatasetHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSLookoutEquipmentFrontendService.CreateDataset",
        },
        Request: shared.CreateDatasetRequest{
            ClientToken: "nihil",
            DatasetName: "fuga",
            DatasetSchema: &shared.DatasetSchema{
                InlineDataSchema: "facilis",
            },
            ServerSideKmsKeyID: "eum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ullam",
                    Value: "saepe",
                },
                shared.Tag{
                    Key: "inventore",
                    Value: "sapiente",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateDataset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->