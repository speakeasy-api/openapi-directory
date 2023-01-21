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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateEnvironmentRequestBody{
            Description: "voluptas",
            FederationMode: "FEDERATED",
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: "et",
                AttributeMap: map[string]string{
                    "rerum": "dicta",
                },
                FederationProviderName: "debitis",
                FederationURN: "voluptatum",
                SamlMetadataDocument: "et",
                SamlMetadataURL: "ut",
            },
            KmsKeyID: "dolorem",
            Name: "et",
            Tags: map[string]string{
                "iste": "vitae",
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