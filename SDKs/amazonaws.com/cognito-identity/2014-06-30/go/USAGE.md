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
    
    req := operations.CreateIdentityPoolRequest{
        Headers: operations.CreateIdentityPoolHeaders{
            XAmzAlgorithm: "vitae",
            XAmzContentSha256: "vel",
            XAmzCredential: "assumenda",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "ad",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "voluptatem",
            XAmzTarget: "AWSCognitoIdentityService.CreateIdentityPool",
        },
        Request: shared.CreateIdentityPoolInput{
            AllowClassicFlow: false,
            AllowUnauthenticatedIdentities: true,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: "consequatur",
                    ProviderName: "non",
                    ServerSideTokenCheck: true,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "cum",
                    ProviderName: "eius",
                    ServerSideTokenCheck: false,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "nisi",
                    ProviderName: "sit",
                    ServerSideTokenCheck: true,
                },
            },
            DeveloperProviderName: "rerum",
            IdentityPoolName: "quisquam",
            IdentityPoolTags: map[string]string{
                "itaque": "reiciendis",
                "expedita": "itaque",
            },
            OpenIDConnectProviderARNs: []string{
                "voluptatum",
            },
            SamlProviderARNs: []string{
                "modi",
                "adipisci",
            },
            SupportedLoginProviders: map[string]string{
                "tempora": "illum",
                "quae": "aut",
            },
        },
    }
    
    res, err := s.CreateIdentityPool(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityPool != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->