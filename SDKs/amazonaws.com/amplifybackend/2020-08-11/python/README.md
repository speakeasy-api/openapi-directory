# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/amplifybackend/2020-08-11/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CloneBackendRequest(
    request_body=operations.CloneBackendRequestBody(
        target_environment_name="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    app_id="vel",
    backend_environment_name="error",
)
    
res = s.clone_backend(req)

if res.clone_backend_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `clone_backend` - This operation clones an existing backend.
* `create_backend` - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
* `create_backend_api` - Creates a new backend API resource.
* `create_backend_auth` - Creates a new backend authentication resource.
* `create_backend_config` - Creates a config object for a backend.
* `create_backend_storage` - Creates a backend storage resource.
* `create_token` - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
* `delete_backend` - Removes an existing environment from your Amplify project.
* `delete_backend_api` - Deletes an existing backend API resource.
* `delete_backend_auth` - Deletes an existing backend authentication resource.
* `delete_backend_storage` - Removes the specified backend storage resource.
* `delete_token` - Deletes the challenge token based on the given appId and sessionId.
* `generate_backend_api_models` - Generates a model schema for an existing backend API resource.
* `get_backend` - Provides project-level details for your Amplify UI project.
* `get_backend_api` - Gets the details for a backend API.
* `get_backend_api_models` - Gets a model introspection schema for an existing backend API resource.
* `get_backend_auth` - Gets a backend auth details.
* `get_backend_job` - Returns information about a specific job.
* `get_backend_storage` - Gets details for a backend storage resource.
* `get_token` - Gets the challenge token based on the given appId and sessionId.
* `import_backend_auth` - Imports an existing backend authentication resource.
* `import_backend_storage` - Imports an existing backend storage resource.
* `list_backend_jobs` - Lists the jobs for the backend of an Amplify app.
* `list_s3_buckets` - The list of S3 buckets in your account.
* `remove_all_backends` - Removes all backend environments from your Amplify project.
* `remove_backend_config` - Removes the AWS resources required to access the Amplify Admin UI.
* `update_backend_api` - Updates an existing backend API resource.
* `update_backend_auth` - Updates an existing backend authentication resource.
* `update_backend_config` - Updates the AWS resources required to access the Amplify Admin UI.
* `update_backend_job` - Updates a specific job.
* `update_backend_storage` - Updates an existing backend storage resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
