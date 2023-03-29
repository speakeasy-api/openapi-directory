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

    req := operations.CreateEnvironmentRequest{
        Headers: operations.CreateEnvironmentHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateEnvironmentRequestBody{
            DataBundles: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            Description: "iusto",
            FederationMode: "FEDERATED",
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: "saepe",
                AttributeMap: map[string]string{
                    "sapiente": "enim",
                },
                FederationProviderName: "eum",
                FederationURN: "voluptatum",
                SamlMetadataDocument: "autem",
                SamlMetadataURL: "vel",
            },
            KmsKeyID: "non",
            Name: "deleniti",
            SuperuserParameters: &operations.CreateEnvironmentRequestBodySuperuserParameters{
                EmailAddress: "similique",
                FirstName: "Gladys",
                LastName: "Walsh",
            },
            Tags: map[string]string{
                "quasi": "laboriosam",
                "dicta": "est",
                "voluptatem": "consequatur",
                "fugiat": "a",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateEnvironment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->