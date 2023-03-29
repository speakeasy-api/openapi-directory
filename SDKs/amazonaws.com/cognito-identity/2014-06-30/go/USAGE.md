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

    req := operations.CreateIdentityPoolRequest{
        Headers: operations.CreateIdentityPoolHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSCognitoIdentityService.CreateIdentityPool",
        },
        Request: shared.CreateIdentityPoolInput{
            AllowClassicFlow: false,
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: "fuga",
                    ProviderName: "facilis",
                    ServerSideTokenCheck: false,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "eum",
                    ProviderName: "iusto",
                    ServerSideTokenCheck: false,
                },
            },
            DeveloperProviderName: "ullam",
            IdentityPoolName: "saepe",
            IdentityPoolTags: map[string]string{
                "sapiente": "enim",
            },
            OpenIDConnectProviderARNs: []string{
                "voluptatum",
                "autem",
            },
            SamlProviderARNs: []string{
                "non",
                "deleniti",
                "similique",
                "reprehenderit",
            },
            SupportedLoginProviders: map[string]string{
                "quo": "quasi",
                "laboriosam": "dicta",
                "est": "voluptatem",
                "consequatur": "fugiat",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateIdentityPool(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityPool != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->