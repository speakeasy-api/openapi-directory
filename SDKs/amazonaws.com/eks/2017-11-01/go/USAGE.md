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
    
    req := operations.AssociateEncryptionConfigRequest{
        PathParams: operations.AssociateEncryptionConfigPathParams{
            Name: "sit",
        },
        Headers: operations.AssociateEncryptionConfigHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: "fugit",
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "nihil",
                    },
                    Resources: []string{
                        "dicta",
                        "debitis",
                        "voluptatum",
                    },
                },
            },
        },
    }
    
    res, err := s.AssociateEncryptionConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEncryptionConfigResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->