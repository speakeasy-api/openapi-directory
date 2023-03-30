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

    req := operations.CancelRotateSecretRequest{
        Headers: operations.CancelRotateSecretHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "secretsmanager.CancelRotateSecret",
        },
        Request: shared.CancelRotateSecretRequest{
            SecretID: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.CancelRotateSecret(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelRotateSecretResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->