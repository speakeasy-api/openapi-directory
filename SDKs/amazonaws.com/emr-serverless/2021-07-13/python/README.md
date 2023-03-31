# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/emr-serverless/2021-07-13/python
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


req = operations.CancelJobRunRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    application_id="illum",
    job_run_id="vel",
)
    
res = s.cancel_job_run(req)

if res.cancel_job_run_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `cancel_job_run` - Cancels a job run.
* `create_application` - Creates an application.
* `delete_application` - Deletes an application. An application has to be in a stopped or created state in order to be deleted.
* `get_application` - Displays detailed information about a specified application.
* `get_dashboard_for_job_run` - Returns a URL to access the job run dashboard.
* `get_job_run` - Displays detailed information about a job run.
* `list_applications` - Lists applications based on a set of parameters.
* `list_job_runs` - Lists job runs based on a set of parameters.
* `list_tags_for_resource` - Lists the tags assigned to the resources.
* `start_application` - Starts a specified application and initializes initial capacity if configured.
* `start_job_run` - Starts a job run.
* `stop_application` - Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
* `tag_resource` - Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your AWS resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 
* `untag_resource` - Removes tags from resources.
* `update_application` - Updates a specified application. An application has to be in a stopped or created state in order to be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
