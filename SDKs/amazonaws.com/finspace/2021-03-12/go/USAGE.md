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
    
    req := operations.CreateEnvironmentRequest{
        Headers: operations.CreateEnvironmentHeaders{
            XAmzAlgorithm: "non",
            XAmzContentSha256: "sit",
            XAmzCredential: "repellat",
            XAmzDate: "quo",
            XAmzSecurityToken: "dolorum",
            XAmzSignature: "laboriosam",
            XAmzSignedHeaders: "velit",
        },
        Request: operations.CreateEnvironmentRequestBody{
            Description: "ea",
            FederationMode: "LOCAL",
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: "fugit",
                AttributeMap: map[string]string{
                    "tempora": "aliquid",
                    "mollitia": "non",
                    "magni": "recusandae",
                },
                FederationProviderName: "illum",
                FederationURN: "consequatur",
                SamlMetadataDocument: "dolores",
                SamlMetadataURL: "hic",
            },
            KmsKeyID: "nihil",
            Name: "explicabo",
            Tags: map[string]string{
                "iure": "et",
            },
        },
    }
    
    res, err := s.CreateEnvironment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->