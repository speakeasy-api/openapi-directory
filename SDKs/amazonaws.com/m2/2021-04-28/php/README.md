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

* `cancelBatchJobExecution` - Cancels the running of a specific batch job execution.
* `createApplication` - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* `createDataSetImportTask` - Starts a data set import task for a specific application.
* `createDeployment` - Creates and starts a deployment to deploy an application into a runtime environment.
* `createEnvironment` - Creates a runtime environment for a given runtime engine.
* `deleteApplication` - Deletes a specific application. You cannot delete a running application.
* `deleteApplicationFromEnvironment` - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* `deleteEnvironment` - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* `getApplication` - Describes the details of a specific application.
* `getApplicationVersion` - Returns details about a specific version of a specific application.
* `getBatchJobExecution` - Gets the details of a specific batch job execution for a specific application.
* `getDataSetDetails` - Gets the details of a specific data set.
* `getDataSetImportTask` - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* `getDeployment` - Gets details of a specific deployment with a given deployment identifier.
* `getEnvironment` - Describes a specific runtime environment.
* `listApplicationVersions` - Returns a list of the application versions for a specific application.
* `listApplications` - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* `listBatchJobDefinitions` - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* `listBatchJobExecutions` - Lists historical, current, and scheduled batch job executions for a specific application.
* `listDataSetImportHistory` - Lists the data set imports for the specified application.
* `listDataSets` - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* `listDeployments` - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* `listEngineVersions` - Lists the available engine versions.
* `listEnvironments` - Lists the runtime environments.
* `listTagsForResource` - Lists the tags for the specified resource.
* `startApplication` - Starts an application that is currently stopped.
* `startBatchJob` - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* `stopApplication` - Stops a running application.
* `tagResource` - Adds one or more tags to the specified resource.
* `untagResource` - Removes one or more tags from the specified resource.
* `updateApplication` - Updates an application and creates a new version.
* `updateEnvironment` - Updates the configuration details for a specific runtime environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
