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
            XAmzAlgorithm: "possimus",
            XAmzContentSha256: "hic",
            XAmzCredential: "quis",
            XAmzDate: "sunt",
            XAmzSecurityToken: "quo",
            XAmzSignature: "eveniet",
            XAmzSignedHeaders: "veniam",
        },
        Request: operations.CreateTokenRequestBody{
            ClientID: "reiciendis",
            ClientSecret: "non",
            Code: "dolor",
            DeviceCode: "maiores",
            GrantType: "itaque",
            RedirectURI: "pariatur",
            RefreshToken: "ad",
            Scope: []string{
                "earum",
                "ea",
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