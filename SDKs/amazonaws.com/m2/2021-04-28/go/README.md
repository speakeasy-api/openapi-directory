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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CancelBatchJobExecutionRequest{
        PathParams: operations.CancelBatchJobExecutionPathParams{
            ApplicationID: "unde",
            ExecutionID: "deserunt",
        },
        Headers: operations.CancelBatchJobExecutionHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.CancelBatchJobExecution(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `CancelBatchJobExecution` - Cancels the running of a specific batch job execution.
* `CreateApplication` - Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
* `CreateDataSetImportTask` - Starts a data set import task for a specific application.
* `CreateDeployment` - Creates and starts a deployment to deploy an application into a runtime environment.
* `CreateEnvironment` - Creates a runtime environment for a given runtime engine.
* `DeleteApplication` - Deletes a specific application. You cannot delete a running application.
* `DeleteApplicationFromEnvironment` - Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
* `DeleteEnvironment` - Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
* `GetApplication` - Describes the details of a specific application.
* `GetApplicationVersion` - Returns details about a specific version of a specific application.
* `GetBatchJobExecution` - Gets the details of a specific batch job execution for a specific application.
* `GetDataSetDetails` - Gets the details of a specific data set.
* `GetDataSetImportTask` - Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
* `GetDeployment` - Gets details of a specific deployment with a given deployment identifier.
* `GetEnvironment` - Describes a specific runtime environment.
* `ListApplicationVersions` - Returns a list of the application versions for a specific application.
* `ListApplications` - Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
* `ListBatchJobDefinitions` - Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
* `ListBatchJobExecutions` - Lists historical, current, and scheduled batch job executions for a specific application.
* `ListDataSetImportHistory` - Lists the data set imports for the specified application.
* `ListDataSets` - Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
* `ListDeployments` - Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
* `ListEngineVersions` - Lists the available engine versions.
* `ListEnvironments` - Lists the runtime environments.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `StartApplication` - Starts an application that is currently stopped.
* `StartBatchJob` - Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
* `StopApplication` - Stops a running application.
* `TagResource` - Adds one or more tags to the specified resource.
* `UntagResource` - Removes one or more tags from the specified resource.
* `UpdateApplication` - Updates an application and creates a new version.
* `UpdateEnvironment` - Updates the configuration details for a specific runtime environment.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
