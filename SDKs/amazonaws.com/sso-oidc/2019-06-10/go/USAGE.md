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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateTokenRequestBody{
            ClientID: "voluptas",
            ClientSecret: "fugit",
            Code: "et",
            DeviceCode: "nihil",
            GrantType: "rerum",
            RedirectURI: "dicta",
            RefreshToken: "debitis",
            Scope: []string{
                "et",
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