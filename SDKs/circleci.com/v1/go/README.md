# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/circleci.com/v1/go
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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DeleteProjectUsernameProjectBuildCache(ctx, operations.DeleteProjectUsernameProjectBuildCacheRequest{
        Project: "corrupti",
        Username: "Larue_Rau85",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectUsernameProjectBuildCache200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteProjectUsernameProjectBuildCache](docs/sdk/README.md#deleteprojectusernameprojectbuildcache) - Clears the cache for a project.

* [DeleteProjectUsernameProjectCheckoutKeyFingerprint](docs/sdk/README.md#deleteprojectusernameprojectcheckoutkeyfingerprint) - Delete a checkout key.

* [DeleteProjectUsernameProjectEnvvarName](docs/sdk/README.md#deleteprojectusernameprojectenvvarname) - Deletes the environment variable named ':name'

* [GetMe](docs/sdk/README.md#getme) - Provides information about the signed in user.

* [GetProjectUsernameProject](docs/sdk/README.md#getprojectusernameproject) - Build summary for each of the last 30 builds for a single git repo.

* [GetProjectUsernameProjectCheckoutKey](docs/sdk/README.md#getprojectusernameprojectcheckoutkey) - Lists checkout keys.

* [GetProjectUsernameProjectCheckoutKeyFingerprint](docs/sdk/README.md#getprojectusernameprojectcheckoutkeyfingerprint) - Get a checkout key.

* [GetProjectUsernameProjectEnvvar](docs/sdk/README.md#getprojectusernameprojectenvvar) - Lists the environment variables for :project

* [GetProjectUsernameProjectEnvvarName](docs/sdk/README.md#getprojectusernameprojectenvvarname) - Gets the hidden value of environment variable :name

* [GetProjectUsernameProjectBuildNum](docs/sdk/README.md#getprojectusernameprojectbuildnum) - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

* [GetProjectUsernameProjectBuildNumArtifacts](docs/sdk/README.md#getprojectusernameprojectbuildnumartifacts) - List the artifacts produced by a given build.

* [GetProjectUsernameProjectBuildNumTests](docs/sdk/README.md#getprojectusernameprojectbuildnumtests) - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

* [GetProjects](docs/sdk/README.md#getprojects) - List of all the projects you're following on CircleCI, with build information organized by branch.

* [GetRecentBuilds](docs/sdk/README.md#getrecentbuilds) - Build summary for each of the last 30 recent builds, ordered by build_num.

* [PostProjectUsernameProject](docs/sdk/README.md#postprojectusernameproject) - Triggers a new build, returns a summary of the build.

* [PostProjectUsernameProjectCheckoutKey](docs/sdk/README.md#postprojectusernameprojectcheckoutkey) - Creates a new checkout key.
Only usable with a user API token.

* [PostProjectUsernameProjectEnvvar](docs/sdk/README.md#postprojectusernameprojectenvvar) - Creates a new environment variable

* [PostProjectUsernameProjectSSHKey](docs/sdk/README.md#postprojectusernameprojectsshkey) - Create an ssh key used to access external systems that require SSH key-based authentication

* [PostProjectUsernameProjectTreeBranch](docs/sdk/README.md#postprojectusernameprojecttreebranch) - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

* [PostProjectUsernameProjectBuildNumCancel](docs/sdk/README.md#postprojectusernameprojectbuildnumcancel) - Cancels the build, returns a summary of the build.

* [PostProjectUsernameProjectBuildNumRetry](docs/sdk/README.md#postprojectusernameprojectbuildnumretry) - Retries the build, returns a summary of the new build.

* [PostUserHerokuKey](docs/sdk/README.md#postuserherokukey) - Adds your Heroku API key to CircleCI, takes apikey as form param name.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
