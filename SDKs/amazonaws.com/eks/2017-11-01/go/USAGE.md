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
            Name: "sint",
        },
        Headers: operations.AssociateEncryptionConfigHeaders{
            XAmzAlgorithm: "ratione",
            XAmzContentSha256: "sed",
            XAmzCredential: "placeat",
            XAmzDate: "ut",
            XAmzSecurityToken: "ipsam",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "cum",
        },
        Request: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: "aut",
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "dolore",
                    },
                    Resources: []string{
                        "quis",
                        "in",
                        "velit",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "eligendi",
                    },
                    Resources: []string{
                        "quaerat",
                        "dolorem",
                        "deserunt",
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