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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSShineFrontendService_20170701.CreateParallelData",
        },
        Request: shared.CreateParallelDataRequest{
            ClientToken: "illum",
            Description: "vel",
            EncryptionKey: &shared.EncryptionKey{
                ID: "error",
                Type: "KMS",
            },
            Name: "deserunt",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: "CSV",
                S3URI: "iure",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
                shared.Tag{
                    Key: "delectus",
                    Value: "tempora",
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