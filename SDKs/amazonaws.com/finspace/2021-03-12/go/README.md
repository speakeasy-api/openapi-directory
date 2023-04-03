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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateEnvironment` - Create a new FinSpace environment.
* `DeleteEnvironment` - Delete an FinSpace environment.
* `GetEnvironment` - Returns the FinSpace environment object.
* `ListEnvironments` - A list of all of your FinSpace environments.
* `ListTagsForResource` - A list of all tags for a resource.
* `TagResource` - Adds metadata tags to a FinSpace resource.
* `UntagResource` - Removes metadata tags from a FinSpace resource.
* `UpdateEnvironment` - Update your FinSpace environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
