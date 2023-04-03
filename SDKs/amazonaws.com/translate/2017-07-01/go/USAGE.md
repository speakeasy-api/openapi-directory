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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateParallelDataRequest{
        CreateParallelDataRequest: shared.CreateParallelDataRequest{
            ClientToken: "corrupti",
            Description: "provident",
            EncryptionKey: &shared.EncryptionKey{
                ID: "distinctio",
                Type: "KMS",
            },
            Name: "quibusdam",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: "CSV",
                S3URI: "nulla",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
        XAmzTarget: "AWSShineFrontendService_20170701.CreateParallelData",
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