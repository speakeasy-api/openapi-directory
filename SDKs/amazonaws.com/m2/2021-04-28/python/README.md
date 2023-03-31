# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/m2/2021-04-28/python
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


req = operations.CancelBatchJobExecutionRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    application_id="illum",
    execution_id="vel",
)
    
res = s.cancel_batch_job_execution(req)

if res.cancel_batch_job_execution_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `cancel_batch_job_execution` - Cancels the running of a specific batch job execution.
* `create_application` - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* `create_data_set_import_task` - Starts a data set import task for a specific application.
* `create_deployment` - Creates and starts a deployment to deploy an application into a runtime environment.
* `create_environment` - Creates a runtime environment for a given runtime engine.
* `delete_application` - Deletes a specific application. You cannot delete a running application.
* `delete_application_from_environment` - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* `delete_environment` - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* `get_application` - Describes the details of a specific application.
* `get_application_version` - Returns details about a specific version of a specific application.
* `get_batch_job_execution` - Gets the details of a specific batch job execution for a specific application.
* `get_data_set_details` - Gets the details of a specific data set.
* `get_data_set_import_task` - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* `get_deployment` - Gets details of a specific deployment with a given deployment identifier.
* `get_environment` - Describes a specific runtime environment.
* `list_application_versions` - Returns a list of the application versions for a specific application.
* `list_applications` - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* `list_batch_job_definitions` - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* `list_batch_job_executions` - Lists historical, current, and scheduled batch job executions for a specific application.
* `list_data_set_import_history` - Lists the data set imports for the specified application.
* `list_data_sets` - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* `list_deployments` - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* `list_engine_versions` - Lists the available engine versions.
* `list_environments` - Lists the runtime environments.
* `list_tags_for_resource` - Lists the tags for the specified resource.
* `start_application` - Starts an application that is currently stopped.
* `start_batch_job` - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* `stop_application` - Stops a running application.
* `tag_resource` - Adds one or more tags to the specified resource.
* `untag_resource` - Removes one or more tags from the specified resource.
* `update_application` - Updates an application and creates a new version.
* `update_environment` - Updates the configuration details for a specific runtime environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
