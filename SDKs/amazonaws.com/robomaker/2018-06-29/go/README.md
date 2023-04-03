# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/robomaker/2018-06-29/go
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchDeleteWorldsRequest{
        RequestBody: operations.BatchDeleteWorldsRequestBody{
            Worlds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
    }

    ctx := context.Background()
    res, err := s.BatchDeleteWorlds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteWorldsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchDeleteWorlds` - Deletes one or more worlds in a batch operation.
* `BatchDescribeSimulationJob` - Describes one or more simulation jobs.
* `CancelDeploymentJob` - <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `CancelSimulationJob` - Cancels the specified simulation job.
* `CancelSimulationJobBatch` - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* `CancelWorldExportJob` - Cancels the specified export job.
* `CancelWorldGenerationJob` - Cancels the specified world generator job.
* `CreateDeploymentJob` - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `CreateFleet` - <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
* `CreateRobot` - <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
* `CreateRobotApplication` - Creates a robot application. 
* `CreateRobotApplicationVersion` - Creates a version of a robot application.
* `CreateSimulationApplication` - Creates a simulation application.
* `CreateSimulationApplicationVersion` - Creates a simulation application with a specific revision id.
* `CreateSimulationJob` - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `CreateWorldExportJob` - Creates a world export job.
* `CreateWorldGenerationJob` - Creates worlds using the specified template.
* `CreateWorldTemplate` - Creates a world template.
* `DeleteFleet` - <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `DeleteRobot` - <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `DeleteRobotApplication` - Deletes a robot application.
* `DeleteSimulationApplication` - Deletes a simulation application.
* `DeleteWorldTemplate` - Deletes a world template.
* `DeregisterRobot` - <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `DescribeDeploymentJob` - <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `DescribeFleet` - <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `DescribeRobot` - <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `DescribeRobotApplication` - Describes a robot application.
* `DescribeSimulationApplication` - Describes a simulation application.
* `DescribeSimulationJob` - Describes a simulation job.
* `DescribeSimulationJobBatch` - Describes a simulation job batch.
* `DescribeWorld` - Describes a world.
* `DescribeWorldExportJob` - Describes a world export job.
* `DescribeWorldGenerationJob` - Describes a world generation job.
* `DescribeWorldTemplate` - Describes a world template.
* `GetWorldTemplateBody` - Gets the world template body.
* `ListDeploymentJobs` - <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `ListFleets` - <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `ListRobotApplications` - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* `ListRobots` - <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `ListSimulationApplications` - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* `ListSimulationJobBatches` - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* `ListSimulationJobs` - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* `ListTagsForResource` - Lists all tags on a AWS RoboMaker resource.
* `ListWorldExportJobs` - Lists world export jobs.
* `ListWorldGenerationJobs` - Lists world generator jobs.
* `ListWorldTemplates` - Lists world templates.
* `ListWorlds` - Lists worlds.
* `RegisterRobot` - <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
* `RestartSimulationJob` - Restarts a running simulation job.
* `StartSimulationJobBatch` - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* `SyncDeploymentJob` - <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `TagResource` - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* `UntagResource` - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* `UpdateRobotApplication` - Updates a robot application.
* `UpdateSimulationApplication` - Updates a simulation application.
* `UpdateWorldTemplate` - Updates a world template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
