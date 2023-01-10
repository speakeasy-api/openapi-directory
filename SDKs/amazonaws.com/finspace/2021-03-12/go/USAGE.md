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
            XAmzAlgorithm: "vitae",
            XAmzContentSha256: "nulla",
            XAmzCredential: "voluptatem",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "iure",
        },
        Request: operations.CreateEnvironmentRequestBody{
            Description: "ratione",
            FederationMode: "FEDERATED",
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: "sed",
                AttributeMap: map[string]string{
                    "quae": "officia",
                    "aperiam": "molestiae",
                },
                FederationProviderName: "voluptatem",
                FederationURN: "impedit",
                SamlMetadataDocument: "debitis",
                SamlMetadataURL: "quae",
            },
            KmsKeyID: "rerum",
            Name: "ut",
            Tags: map[string]string{
                "excepturi": "et",
                "asperiores": "fugit",
                "perspiciatis": "ratione",
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