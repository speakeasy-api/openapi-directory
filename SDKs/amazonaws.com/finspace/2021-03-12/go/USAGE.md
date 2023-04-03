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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateEnvironmentRequest{
        RequestBody: operations.CreateEnvironmentRequestBody{
            DataBundles: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Description: "unde",
            FederationMode: "LOCAL",
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: "corrupti",
                AttributeMap: map[string]string{
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                FederationProviderName: "delectus",
                FederationURN: "tempora",
                SamlMetadataDocument: "suscipit",
                SamlMetadataURL: "molestiae",
            },
            KmsKeyID: "minus",
            Name: "placeat",
            SuperuserParameters: &operations.CreateEnvironmentRequestBodySuperuserParameters{
                EmailAddress: "voluptatum",
                FirstName: "Jaycee",
                LastName: "Mante",
            },
            Tags: map[string]string{
                "recusandae": "temporibus",
                "ab": "quis",
            },
        },
        XAmzAlgorithm: "veritatis",
        XAmzContentSha256: "deserunt",
        XAmzCredential: "perferendis",
        XAmzDate: "ipsam",
        XAmzSecurityToken: "repellendus",
        XAmzSignature: "sapiente",
        XAmzSignedHeaders: "quo",
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