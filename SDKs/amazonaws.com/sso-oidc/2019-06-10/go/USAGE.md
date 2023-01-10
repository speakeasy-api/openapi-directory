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
    
    req := operations.CreateTokenRequest{
        Headers: operations.CreateTokenHeaders{
            XAmzAlgorithm: "enim",
            XAmzContentSha256: "quia",
            XAmzCredential: "voluptatem",
            XAmzDate: "suscipit",
            XAmzSecurityToken: "dolorem",
            XAmzSignature: "beatae",
            XAmzSignedHeaders: "at",
        },
        Request: operations.CreateTokenRequestBody{
            ClientID: "debitis",
            ClientSecret: "optio",
            Code: "ut",
            DeviceCode: "at",
            GrantType: "sed",
            RedirectURI: "ut",
            RefreshToken: "cumque",
            Scope: []string{
                "quibusdam",
            },
        },
    }
    
    res, err := s.CreateToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->