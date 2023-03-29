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

    req := operations.CreateParallelDataRequest{
        Headers: operations.CreateParallelDataHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSShineFrontendService_20170701.CreateParallelData",
        },
        Request: shared.CreateParallelDataRequest{
            ClientToken: "nihil",
            Description: "fuga",
            EncryptionKey: &shared.EncryptionKey{
                ID: "facilis",
                Type: "KMS",
            },
            Name: "iusto",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: "TSV",
                S3URI: "saepe",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sapiente",
                    Value: "enim",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateParallelData(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParallelDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->