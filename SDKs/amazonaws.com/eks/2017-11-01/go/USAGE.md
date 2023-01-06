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
            Name: "dolore",
        },
        Headers: operations.AssociateEncryptionConfigHeaders{
            XAmzAlgorithm: "repellat",
            XAmzContentSha256: "velit",
            XAmzCredential: "officia",
            XAmzDate: "modi",
            XAmzSecurityToken: "sunt",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "amet",
        },
        Request: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: "et",
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.EncryptionConfigProvider{
                        KeyArn: "qui",
                    },
                    Resources: []string{
                        "autem",
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