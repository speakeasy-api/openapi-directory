# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectBuildCacheRequest;
import org.openapis.openapi.models.operations.DeleteProjectUsernameProjectBuildCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectUsernameProjectBuildCacheRequest req = new DeleteProjectUsernameProjectBuildCacheRequest("provident", "distinctio");            

            DeleteProjectUsernameProjectBuildCacheResponse res = sdk.deleteProjectUsernameProjectBuildCache(req);

            if (res.deleteProjectUsernameProjectBuildCache200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteProjectUsernameProjectBuildCache](docs/sdk/README.md#deleteprojectusernameprojectbuildcache) - Clears the cache for a project.

* [deleteProjectUsernameProjectCheckoutKeyFingerprint](docs/sdk/README.md#deleteprojectusernameprojectcheckoutkeyfingerprint) - Delete a checkout key.

* [deleteProjectUsernameProjectEnvvarName](docs/sdk/README.md#deleteprojectusernameprojectenvvarname) - Deletes the environment variable named ':name'

* [getMe](docs/sdk/README.md#getme) - Provides information about the signed in user.

* [getProjectUsernameProject](docs/sdk/README.md#getprojectusernameproject) - Build summary for each of the last 30 builds for a single git repo.

* [getProjectUsernameProjectCheckoutKey](docs/sdk/README.md#getprojectusernameprojectcheckoutkey) - Lists checkout keys.

* [getProjectUsernameProjectCheckoutKeyFingerprint](docs/sdk/README.md#getprojectusernameprojectcheckoutkeyfingerprint) - Get a checkout key.

* [getProjectUsernameProjectEnvvar](docs/sdk/README.md#getprojectusernameprojectenvvar) - Lists the environment variables for :project

* [getProjectUsernameProjectEnvvarName](docs/sdk/README.md#getprojectusernameprojectenvvarname) - Gets the hidden value of environment variable :name

* [getProjectUsernameProjectBuildNum](docs/sdk/README.md#getprojectusernameprojectbuildnum) - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

* [getProjectUsernameProjectBuildNumArtifacts](docs/sdk/README.md#getprojectusernameprojectbuildnumartifacts) - List the artifacts produced by a given build.

* [getProjectUsernameProjectBuildNumTests](docs/sdk/README.md#getprojectusernameprojectbuildnumtests) - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

* [getProjects](docs/sdk/README.md#getprojects) - List of all the projects you're following on CircleCI, with build information organized by branch.

* [getRecentBuilds](docs/sdk/README.md#getrecentbuilds) - Build summary for each of the last 30 recent builds, ordered by build_num.

* [postProjectUsernameProject](docs/sdk/README.md#postprojectusernameproject) - Triggers a new build, returns a summary of the build.

* [postProjectUsernameProjectCheckoutKey](docs/sdk/README.md#postprojectusernameprojectcheckoutkey) - Creates a new checkout key.
Only usable with a user API token.

* [postProjectUsernameProjectEnvvar](docs/sdk/README.md#postprojectusernameprojectenvvar) - Creates a new environment variable

* [postProjectUsernameProjectSshKey](docs/sdk/README.md#postprojectusernameprojectsshkey) - Create an ssh key used to access external systems that require SSH key-based authentication

* [postProjectUsernameProjectTreeBranch](docs/sdk/README.md#postprojectusernameprojecttreebranch) - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

* [postProjectUsernameProjectBuildNumCancel](docs/sdk/README.md#postprojectusernameprojectbuildnumcancel) - Cancels the build, returns a summary of the build.

* [postProjectUsernameProjectBuildNumRetry](docs/sdk/README.md#postprojectusernameprojectbuildnumretry) - Retries the build, returns a summary of the new build.

* [postUserHerokuKey](docs/sdk/README.md#postuserherokukey) - Adds your Heroku API key to CircleCI, takes apikey as form param name.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
