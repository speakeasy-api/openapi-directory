# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteProjectUsernameProjectBuildCache` - Clears the cache for a project.

* `deleteProjectUsernameProjectCheckoutKeyFingerprint` - Delete a checkout key.

* `deleteProjectUsernameProjectEnvvarName` - Deletes the environment variable named ':name'

* `getMe` - Provides information about the signed in user.

* `getProjectUsernameProject` - Build summary for each of the last 30 builds for a single git repo.

* `getProjectUsernameProjectCheckoutKey` - Lists checkout keys.

* `getProjectUsernameProjectCheckoutKeyFingerprint` - Get a checkout key.

* `getProjectUsernameProjectEnvvar` - Lists the environment variables for :project

* `getProjectUsernameProjectEnvvarName` - Gets the hidden value of environment variable :name

* `getProjectUsernameProjectBuildNum` - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

* `getProjectUsernameProjectBuildNumArtifacts` - List the artifacts produced by a given build.

* `getProjectUsernameProjectBuildNumTests` - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

* `getProjects` - List of all the projects you're following on CircleCI, with build information organized by branch.

* `getRecentBuilds` - Build summary for each of the last 30 recent builds, ordered by build_num.

* `postProjectUsernameProject` - Triggers a new build, returns a summary of the build.

* `postProjectUsernameProjectCheckoutKey` - Creates a new checkout key.
Only usable with a user API token.

* `postProjectUsernameProjectEnvvar` - Creates a new environment variable

* `postProjectUsernameProjectSshKey` - Create an ssh key used to access external systems that require SSH key-based authentication

* `postProjectUsernameProjectTreeBranch` - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

* `postProjectUsernameProjectBuildNumCancel` - Cancels the build, returns a summary of the build.

* `postProjectUsernameProjectBuildNumRetry` - Retries the build, returns a summary of the new build.

* `postUserHerokuKey` - Adds your Heroku API key to CircleCI, takes apikey as form param name.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
