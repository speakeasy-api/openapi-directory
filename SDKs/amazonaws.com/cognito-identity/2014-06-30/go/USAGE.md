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

    req := operations.CreateIdentityPoolRequest{
        CreateIdentityPoolInput: shared.CreateIdentityPoolInput{
            AllowClassicFlow: false,
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: "provident",
                    ProviderName: "distinctio",
                    ServerSideTokenCheck: false,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "quibusdam",
                    ProviderName: "unde",
                    ServerSideTokenCheck: false,
                },
                shared.CognitoIdentityProvider{
                    ClientID: "nulla",
                    ProviderName: "corrupti",
                    ServerSideTokenCheck: false,
                },
            },
            DeveloperProviderName: "illum",
            IdentityPoolName: "vel",
            IdentityPoolTags: map[string]string{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            OpenIDConnectProviderARNs: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
            SamlProviderARNs: []string{
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            },
            SupportedLoginProviders: map[string]string{
                "temporibus": "ab",
                "quis": "veritatis",
                "deserunt": "perferendis",
                "ipsam": "repellendus",
            },
        },
        XAmzAlgorithm: "sapiente",
        XAmzContentSha256: "quo",
        XAmzCredential: "odit",
        XAmzDate: "at",
        XAmzSecurityToken: "at",
        XAmzSignature: "maiores",
        XAmzSignedHeaders: "molestiae",
        XAmzTarget: "AWSCognitoIdentityService.CreateIdentityPool",
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