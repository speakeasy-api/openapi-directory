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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateEnvironmentRequestBody{
            DataBundles: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Description: "iure",
            FederationMode: "FEDERATED",
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: "debitis",
                AttributeMap: map[string]string{
                    "delectus": "tempora",
                },
                FederationProviderName: "suscipit",
                FederationURN: "molestiae",
                SamlMetadataDocument: "minus",
                SamlMetadataURL: "placeat",
            },
            KmsKeyID: "voluptatum",
            Name: "iusto",
            SuperuserParameters: &operations.CreateEnvironmentRequestBodySuperuserParameters{
                EmailAddress: "excepturi",
                FirstName: "Glen",
                LastName: "Walsh",
            },
            Tags: map[string]string{
                "ab": "quis",
                "veritatis": "deserunt",
                "perferendis": "ipsam",
                "repellendus": "sapiente",
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