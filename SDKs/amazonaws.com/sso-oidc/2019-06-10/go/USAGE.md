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

    req := operations.CreateTokenRequest{
        RequestBody: operations.CreateTokenRequestBody{
            ClientID: "corrupti",
            ClientSecret: "provident",
            Code: "distinctio",
            DeviceCode: "quibusdam",
            GrantType: "unde",
            RedirectURI: "nulla",
            RefreshToken: "corrupti",
            Scope: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
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