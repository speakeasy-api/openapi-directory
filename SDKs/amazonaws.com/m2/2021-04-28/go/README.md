# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/m2/2021-04-28/go
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
    res, err := s.CancelBatchJobExecution(ctx, operations.CancelBatchJobExecutionRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        ApplicationID: "illum",
        ExecutionID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelBatchJobExecutionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CancelBatchJobExecution](docs/sdk/README.md#cancelbatchjobexecution) - Cancels the running of a specific batch job execution.
* [CreateApplication](docs/sdk/README.md#createapplication) - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* [CreateDataSetImportTask](docs/sdk/README.md#createdatasetimporttask) - Starts a data set import task for a specific application.
* [CreateDeployment](docs/sdk/README.md#createdeployment) - Creates and starts a deployment to deploy an application into a runtime environment.
* [CreateEnvironment](docs/sdk/README.md#createenvironment) - Creates a runtime environment for a given runtime engine.
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Deletes a specific application. You cannot delete a running application.
* [DeleteApplicationFromEnvironment](docs/sdk/README.md#deleteapplicationfromenvironment) - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* [DeleteEnvironment](docs/sdk/README.md#deleteenvironment) - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* [GetApplication](docs/sdk/README.md#getapplication) - Describes the details of a specific application.
* [GetApplicationVersion](docs/sdk/README.md#getapplicationversion) - Returns details about a specific version of a specific application.
* [GetBatchJobExecution](docs/sdk/README.md#getbatchjobexecution) - Gets the details of a specific batch job execution for a specific application.
* [GetDataSetDetails](docs/sdk/README.md#getdatasetdetails) - Gets the details of a specific data set.
* [GetDataSetImportTask](docs/sdk/README.md#getdatasetimporttask) - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* [GetDeployment](docs/sdk/README.md#getdeployment) - Gets details of a specific deployment with a given deployment identifier.
* [GetEnvironment](docs/sdk/README.md#getenvironment) - Describes a specific runtime environment.
* [ListApplicationVersions](docs/sdk/README.md#listapplicationversions) - Returns a list of the application versions for a specific application.
* [ListApplications](docs/sdk/README.md#listapplications) - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* [ListBatchJobDefinitions](docs/sdk/README.md#listbatchjobdefinitions) - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* [ListBatchJobExecutions](docs/sdk/README.md#listbatchjobexecutions) - Lists historical, current, and scheduled batch job executions for a specific application.
* [ListDataSetImportHistory](docs/sdk/README.md#listdatasetimporthistory) - Lists the data set imports for the specified application.
* [ListDataSets](docs/sdk/README.md#listdatasets) - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* [ListDeployments](docs/sdk/README.md#listdeployments) - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* [ListEngineVersions](docs/sdk/README.md#listengineversions) - Lists the available engine versions.
* [ListEnvironments](docs/sdk/README.md#listenvironments) - Lists the runtime environments.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [StartApplication](docs/sdk/README.md#startapplication) - Starts an application that is currently stopped.
* [StartBatchJob](docs/sdk/README.md#startbatchjob) - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* [StopApplication](docs/sdk/README.md#stopapplication) - Stops a running application.
* [TagResource](docs/sdk/README.md#tagresource) - Adds one or more tags to the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified resource.
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Updates an application and creates a new version.
* [UpdateEnvironment](docs/sdk/README.md#updateenvironment) - Updates the configuration details for a specific runtime environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
