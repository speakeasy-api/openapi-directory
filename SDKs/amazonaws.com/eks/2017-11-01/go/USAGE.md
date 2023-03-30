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

    req := operations.AssociateEncryptionConfigRequest{
        PathParams: operations.AssociateEncryptionConfigPathParams{
            Name: "corrupti",
        },
        Headers: operations.AssociateEncryptionConfigHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: "vel",
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "deserunt",
                    },
                    Resources: []string{
                        "iure",
                        "magnam",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "debitis",
                    },
                    Resources: []string{
                        "delectus",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "tempora",
                    },
                    Resources: []string{
                        "molestiae",
                        "minus",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AssociateEncryptionConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEncryptionConfigResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->