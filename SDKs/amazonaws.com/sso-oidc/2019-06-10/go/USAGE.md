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

    req := operations.CreateTokenRequest{
        Headers: operations.CreateTokenHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateTokenRequestBody{
            ClientID: "illum",
            ClientSecret: "vel",
            Code: "error",
            DeviceCode: "deserunt",
            GrantType: "suscipit",
            RedirectURI: "iure",
            RefreshToken: "magnam",
            Scope: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->