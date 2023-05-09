# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/finspace/2021-03-12/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateEnvironment](docs/sdk/README.md#createenvironment) - Create a new FinSpace environment.
* [DeleteEnvironment](docs/sdk/README.md#deleteenvironment) - Delete an FinSpace environment.
* [GetEnvironment](docs/sdk/README.md#getenvironment) - Returns the FinSpace environment object.
* [ListEnvironments](docs/sdk/README.md#listenvironments) - A list of all of your FinSpace environments.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - A list of all tags for a resource.
* [TagResource](docs/sdk/README.md#tagresource) - Adds metadata tags to a FinSpace resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes metadata tags from a FinSpace resource.
* [UpdateEnvironment](docs/sdk/README.md#updateenvironment) - Update your FinSpace environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
