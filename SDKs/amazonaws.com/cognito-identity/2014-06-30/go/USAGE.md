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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSCognitoIdentityService.CreateIdentityPool",
        },
        Request: shared.CreateIdentityPoolInput{
            AllowClassicFlow: false,
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: "vel",
                    ProviderName: "error",
                    ServerSideTokenCheck: false,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "deserunt",
                    ProviderName: "suscipit",
                    ServerSideTokenCheck: false,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "iure",
                    ProviderName: "magnam",
                    ServerSideTokenCheck: false,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "debitis",
                    ProviderName: "ipsa",
                    ServerSideTokenCheck: false,
                },
            },
            DeveloperProviderName: "delectus",
            IdentityPoolName: "tempora",
            IdentityPoolTags: map[string]string{
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            OpenIDConnectProviderARNs: []string{
                "excepturi",
                "nisi",
            },
            SamlProviderARNs: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            SupportedLoginProviders: map[string]string{
                "perferendis": "ipsam",
                "repellendus": "sapiente",
                "quo": "odit",
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