<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateEnvironment(ctx, operations.CreateEnvironmentRequest{
        RequestBody: operations.CreateEnvironmentRequestBody{
            DataBundles: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Description: sdk.String("unde"),
            FederationMode: operations.CreateEnvironmentRequestBodyFederationModeEnumLocal.ToPointer(),
            FederationParameters: &operations.CreateEnvironmentRequestBodyFederationParameters{
                ApplicationCallBackURL: sdk.String("corrupti"),
                AttributeMap: map[string]string{
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                FederationProviderName: sdk.String("delectus"),
                FederationURN: sdk.String("tempora"),
                SamlMetadataDocument: sdk.String("suscipit"),
                SamlMetadataURL: sdk.String("molestiae"),
            },
            KmsKeyID: sdk.String("minus"),
            Name: "Ken Kshlerin",
            SuperuserParameters: &operations.CreateEnvironmentRequestBodySuperuserParameters{
                EmailAddress: sdk.String("recusandae"),
                FirstName: sdk.String("Rocky"),
                LastName: sdk.String("Bernier"),
            },
            Tags: map[string]string{
                "veritatis": "deserunt",
                "perferendis": "ipsam",
            },
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->