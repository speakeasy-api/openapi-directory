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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSCognitoIdentityService.CreateIdentityPool",
        },
        Request: shared.CreateIdentityPoolInput{
            AllowClassicFlow: true,
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: "rerum",
                    ProviderName: "dicta",
                    ServerSideTokenCheck: true,
                },
            },
            DeveloperProviderName: "voluptatum",
            IdentityPoolName: "et",
            IdentityPoolTags: map[string]string{
                "dolorem": "et",
                "voluptate": "iste",
                "vitae": "totam",
            },
            OpenIDConnectProviderARNs: []string{
                "illum",
            },
            SamlProviderARNs: []string{
                "vel",
            },
            SupportedLoginProviders: map[string]string{
                "dolore": "id",
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