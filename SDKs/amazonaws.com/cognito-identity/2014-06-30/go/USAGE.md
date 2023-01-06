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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "sit",
            XAmzCredential: "quo",
            XAmzDate: "omnis",
            XAmzSecurityToken: "reprehenderit",
            XAmzSignature: "quod",
            XAmzSignedHeaders: "et",
            XAmzTarget: "AWSCognitoIdentityService.CreateIdentityPool",
        },
        Request: shared.CreateIdentityPoolInput{
            AllowClassicFlow: true,
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: "cupiditate",
                    ProviderName: "sunt",
                    ServerSideTokenCheck: false,
                },
            },
            DeveloperProviderName: "sed",
            IdentityPoolName: "repellendus",
            IdentityPoolTags: map[string]string{
                "nostrum": "non",
            },
            OpenIDConnectProviderARNs: []string{
                "ipsa",
            },
            SamlProviderARNs: []string{
                "sed",
                "autem",
            },
            SupportedLoginProviders: map[string]string{
                "vitae": "vel",
                "assumenda": "corrupti",
                "ad": "eum",
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