<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateToken(ctx, operations.CreateTokenRequest{
        RequestBody: operations.CreateTokenRequestBody{
            ClientID: "corrupti",
            ClientSecret: "provident",
            Code: sdk.String("distinctio"),
            DeviceCode: sdk.String("quibusdam"),
            GrantType: "unde",
            RedirectURI: sdk.String("nulla"),
            RefreshToken: sdk.String("corrupti"),
            Scope: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->