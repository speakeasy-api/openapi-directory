# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/circleci.com/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteProjectUsernameProjectBuildCacheRequest(
    project="corrupti",
    username="Larue_Rau85",
)
    
res = s.delete_project_username_project_build_cache(req)

if res.delete_project_username_project_build_cache_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_project_username_project_build_cache` - Clears the cache for a project.

* `delete_project_username_project_checkout_key_fingerprint_` - Delete a checkout key.

* `delete_project_username_project_envvar_name_` - Deletes the environment variable named ':name'

* `get_me` - Provides information about the signed in user.

* `get_project_username_project_` - Build summary for each of the last 30 builds for a single git repo.

* `get_project_username_project_checkout_key` - Lists checkout keys.

* `get_project_username_project_checkout_key_fingerprint_` - Get a checkout key.

* `get_project_username_project_envvar` - Lists the environment variables for :project

* `get_project_username_project_envvar_name_` - Gets the hidden value of environment variable :name

* `get_project_username_project_build_num_` - Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.

* `get_project_username_project_build_num_artifacts` - List the artifacts produced by a given build.

* `get_project_username_project_build_num_tests` - Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)

* `get_projects` - List of all the projects you're following on CircleCI, with build information organized by branch.

* `get_recent_builds` - Build summary for each of the last 30 recent builds, ordered by build_num.

* `post_project_username_project_` - Triggers a new build, returns a summary of the build.

* `post_project_username_project_checkout_key` - Creates a new checkout key.
Only usable with a user API token.

* `post_project_username_project_envvar` - Creates a new environment variable

* `post_project_username_project_ssh_key` - Create an ssh key used to access external systems that require SSH key-based authentication

* `post_project_username_project_tree_branch_` - Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)

* `post_project_username_project_build_num_cancel` - Cancels the build, returns a summary of the build.

* `post_project_username_project_build_num_retry` - Retries the build, returns a summary of the new build.

* `post_user_heroku_key` - Adds your Heroku API key to CircleCI, takes apikey as form param name.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
