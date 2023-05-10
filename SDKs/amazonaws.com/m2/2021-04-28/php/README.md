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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelBatchJobExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBatchJobExecutionRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->applicationId = 'illum';
    $request->executionId = 'vel';

    $response = $sdk->cancelBatchJobExecution($request);

    if ($response->cancelBatchJobExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [cancelBatchJobExecution](docs/sdk/README.md#cancelbatchjobexecution) - Cancels the running of a specific batch job execution.
* [createApplication](docs/sdk/README.md#createapplication) - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* [createDataSetImportTask](docs/sdk/README.md#createdatasetimporttask) - Starts a data set import task for a specific application.
* [createDeployment](docs/sdk/README.md#createdeployment) - Creates and starts a deployment to deploy an application into a runtime environment.
* [createEnvironment](docs/sdk/README.md#createenvironment) - Creates a runtime environment for a given runtime engine.
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Deletes a specific application. You cannot delete a running application.
* [deleteApplicationFromEnvironment](docs/sdk/README.md#deleteapplicationfromenvironment) - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* [deleteEnvironment](docs/sdk/README.md#deleteenvironment) - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* [getApplication](docs/sdk/README.md#getapplication) - Describes the details of a specific application.
* [getApplicationVersion](docs/sdk/README.md#getapplicationversion) - Returns details about a specific version of a specific application.
* [getBatchJobExecution](docs/sdk/README.md#getbatchjobexecution) - Gets the details of a specific batch job execution for a specific application.
* [getDataSetDetails](docs/sdk/README.md#getdatasetdetails) - Gets the details of a specific data set.
* [getDataSetImportTask](docs/sdk/README.md#getdatasetimporttask) - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* [getDeployment](docs/sdk/README.md#getdeployment) - Gets details of a specific deployment with a given deployment identifier.
* [getEnvironment](docs/sdk/README.md#getenvironment) - Describes a specific runtime environment.
* [listApplicationVersions](docs/sdk/README.md#listapplicationversions) - Returns a list of the application versions for a specific application.
* [listApplications](docs/sdk/README.md#listapplications) - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* [listBatchJobDefinitions](docs/sdk/README.md#listbatchjobdefinitions) - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* [listBatchJobExecutions](docs/sdk/README.md#listbatchjobexecutions) - Lists historical, current, and scheduled batch job executions for a specific application.
* [listDataSetImportHistory](docs/sdk/README.md#listdatasetimporthistory) - Lists the data set imports for the specified application.
* [listDataSets](docs/sdk/README.md#listdatasets) - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* [listDeployments](docs/sdk/README.md#listdeployments) - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* [listEngineVersions](docs/sdk/README.md#listengineversions) - Lists the available engine versions.
* [listEnvironments](docs/sdk/README.md#listenvironments) - Lists the runtime environments.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [startApplication](docs/sdk/README.md#startapplication) - Starts an application that is currently stopped.
* [startBatchJob](docs/sdk/README.md#startbatchjob) - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* [stopApplication](docs/sdk/README.md#stopapplication) - Stops a running application.
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified resource.
* [updateApplication](docs/sdk/README.md#updateapplication) - Updates an application and creates a new version.
* [updateEnvironment](docs/sdk/README.md#updateenvironment) - Updates the configuration details for a specific runtime environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
