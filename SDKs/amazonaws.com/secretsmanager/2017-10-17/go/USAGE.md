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
    
    req := operations.CancelRotateSecretRequest{
        Headers: operations.CancelRotateSecretHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "secretsmanager.CancelRotateSecret",
        },
        Request: shared.CancelRotateSecretRequest{
            SecretID: "fugit",
        },
    }
    
    res, err := s.CancelRotateSecret(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelRotateSecretResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->