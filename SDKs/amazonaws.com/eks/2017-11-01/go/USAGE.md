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
    res, err := s.AssociateEncryptionConfig(ctx, operations.AssociateEncryptionConfigRequest{
        RequestBody: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: sdk.String("corrupti"),
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: sdk.String("distinctio"),
                    },
                    Resources: []string{
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: sdk.String("vel"),
                    },
                    Resources: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: sdk.String("magnam"),
                    },
                    Resources: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
        Name: "Jake Bernier MD",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEncryptionConfigResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->