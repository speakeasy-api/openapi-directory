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
            Name: "unde",
        },
        Headers: operations.AssociateEncryptionConfigHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: "nihil",
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "facilis",
                    },
                    Resources: []string{
                        "iusto",
                        "ullam",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "saepe",
                    },
                    Resources: []string{
                        "sapiente",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "enim",
                    },
                    Resources: []string{
                        "voluptatum",
                        "autem",
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