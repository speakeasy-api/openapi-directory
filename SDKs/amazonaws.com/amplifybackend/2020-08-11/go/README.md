# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amplifybackend/2020-08-11/go
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
    res, err := s.CloneBackend(ctx, operations.CloneBackendRequest{
        RequestBody: operations.CloneBackendRequestBody{
            TargetEnvironmentName: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        AppID: "vel",
        BackendEnvironmentName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneBackendResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CloneBackend](docs/sdk/README.md#clonebackend) - This operation clones an existing backend.
* [CreateBackend](docs/sdk/README.md#createbackend) - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
* [CreateBackendAPI](docs/sdk/README.md#createbackendapi) - Creates a new backend API resource.
* [CreateBackendAuth](docs/sdk/README.md#createbackendauth) - Creates a new backend authentication resource.
* [CreateBackendConfig](docs/sdk/README.md#createbackendconfig) - Creates a config object for a backend.
* [CreateBackendStorage](docs/sdk/README.md#createbackendstorage) - Creates a backend storage resource.
* [CreateToken](docs/sdk/README.md#createtoken) - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
* [DeleteBackend](docs/sdk/README.md#deletebackend) - Removes an existing environment from your Amplify project.
* [DeleteBackendAPI](docs/sdk/README.md#deletebackendapi) - Deletes an existing backend API resource.
* [DeleteBackendAuth](docs/sdk/README.md#deletebackendauth) - Deletes an existing backend authentication resource.
* [DeleteBackendStorage](docs/sdk/README.md#deletebackendstorage) - Removes the specified backend storage resource.
* [DeleteToken](docs/sdk/README.md#deletetoken) - Deletes the challenge token based on the given appId and sessionId.
* [GenerateBackendAPIModels](docs/sdk/README.md#generatebackendapimodels) - Generates a model schema for an existing backend API resource.
* [GetBackend](docs/sdk/README.md#getbackend) - Provides project-level details for your Amplify UI project.
* [GetBackendAPI](docs/sdk/README.md#getbackendapi) - Gets the details for a backend API.
* [GetBackendAPIModels](docs/sdk/README.md#getbackendapimodels) - Gets a model introspection schema for an existing backend API resource.
* [GetBackendAuth](docs/sdk/README.md#getbackendauth) - Gets a backend auth details.
* [GetBackendJob](docs/sdk/README.md#getbackendjob) - Returns information about a specific job.
* [GetBackendStorage](docs/sdk/README.md#getbackendstorage) - Gets details for a backend storage resource.
* [GetToken](docs/sdk/README.md#gettoken) - Gets the challenge token based on the given appId and sessionId.
* [ImportBackendAuth](docs/sdk/README.md#importbackendauth) - Imports an existing backend authentication resource.
* [ImportBackendStorage](docs/sdk/README.md#importbackendstorage) - Imports an existing backend storage resource.
* [ListBackendJobs](docs/sdk/README.md#listbackendjobs) - Lists the jobs for the backend of an Amplify app.
* [ListS3Buckets](docs/sdk/README.md#lists3buckets) - The list of S3 buckets in your account.
* [RemoveAllBackends](docs/sdk/README.md#removeallbackends) - Removes all backend environments from your Amplify project.
* [RemoveBackendConfig](docs/sdk/README.md#removebackendconfig) - Removes the AWS resources required to access the Amplify Admin UI.
* [UpdateBackendAPI](docs/sdk/README.md#updatebackendapi) - Updates an existing backend API resource.
* [UpdateBackendAuth](docs/sdk/README.md#updatebackendauth) - Updates an existing backend authentication resource.
* [UpdateBackendConfig](docs/sdk/README.md#updatebackendconfig) - Updates the AWS resources required to access the Amplify Admin UI.
* [UpdateBackendJob](docs/sdk/README.md#updatebackendjob) - Updates a specific job.
* [UpdateBackendStorage](docs/sdk/README.md#updatebackendstorage) - Updates an existing backend storage resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
