<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateIdentityPool(ctx, operations.CreateIdentityPoolRequest{
        CreateIdentityPoolInput: shared.CreateIdentityPoolInput{
            AllowClassicFlow: sdk.Bool(false),
            AllowUnauthenticatedIdentities: false,
            CognitoIdentityProviders: []shared.CognitoIdentityProvider{
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("provident"),
                    ProviderName: sdk.String("distinctio"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("quibusdam"),
                    ProviderName: sdk.String("unde"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
                shared.CognitoIdentityProvider{
                    ClientID: sdk.String("nulla"),
                    ProviderName: sdk.String("corrupti"),
                    ServerSideTokenCheck: sdk.Bool(false),
                },
            },
            DeveloperProviderName: sdk.String("illum"),
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
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceCreateIdentityPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityPool != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->