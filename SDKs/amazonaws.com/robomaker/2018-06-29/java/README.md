# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequest;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteWorldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteWorldsRequest req = new BatchDeleteWorldsRequest(                new BatchDeleteWorldsRequestBody(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }});) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            BatchDeleteWorldsResponse res = sdk.batchDeleteWorlds(req);

            if (res.batchDeleteWorldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchDeleteWorlds](docs/sdk/README.md#batchdeleteworlds) - Deletes one or more worlds in a batch operation.
* [batchDescribeSimulationJob](docs/sdk/README.md#batchdescribesimulationjob) - Describes one or more simulation jobs.
* [~~cancelDeploymentJob~~](docs/sdk/README.md#canceldeploymentjob) - <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [cancelSimulationJob](docs/sdk/README.md#cancelsimulationjob) - Cancels the specified simulation job.
* [cancelSimulationJobBatch](docs/sdk/README.md#cancelsimulationjobbatch) - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* [cancelWorldExportJob](docs/sdk/README.md#cancelworldexportjob) - Cancels the specified export job.
* [cancelWorldGenerationJob](docs/sdk/README.md#cancelworldgenerationjob) - Cancels the specified world generator job.
* [~~createDeploymentJob~~](docs/sdk/README.md#createdeploymentjob) - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note> :warning: **Deprecated**
* [~~createFleet~~](docs/sdk/README.md#createfleet) - <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [~~createRobot~~](docs/sdk/README.md#createrobot) - <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [createRobotApplication](docs/sdk/README.md#createrobotapplication) - Creates a robot application. 
* [createRobotApplicationVersion](docs/sdk/README.md#createrobotapplicationversion) - Creates a version of a robot application.
* [createSimulationApplication](docs/sdk/README.md#createsimulationapplication) - Creates a simulation application.
* [createSimulationApplicationVersion](docs/sdk/README.md#createsimulationapplicationversion) - Creates a simulation application with a specific revision id.
* [createSimulationJob](docs/sdk/README.md#createsimulationjob) - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* [createWorldExportJob](docs/sdk/README.md#createworldexportjob) - Creates a world export job.
* [createWorldGenerationJob](docs/sdk/README.md#createworldgenerationjob) - Creates worlds using the specified template.
* [createWorldTemplate](docs/sdk/README.md#createworldtemplate) - Creates a world template.
* [~~deleteFleet~~](docs/sdk/README.md#deletefleet) - <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~deleteRobot~~](docs/sdk/README.md#deleterobot) - <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [deleteRobotApplication](docs/sdk/README.md#deleterobotapplication) - Deletes a robot application.
* [deleteSimulationApplication](docs/sdk/README.md#deletesimulationapplication) - Deletes a simulation application.
* [deleteWorldTemplate](docs/sdk/README.md#deleteworldtemplate) - Deletes a world template.
* [~~deregisterRobot~~](docs/sdk/README.md#deregisterrobot) - <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeDeploymentJob~~](docs/sdk/README.md#describedeploymentjob) - <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeFleet~~](docs/sdk/README.md#describefleet) - <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~describeRobot~~](docs/sdk/README.md#describerobot) - <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [describeRobotApplication](docs/sdk/README.md#describerobotapplication) - Describes a robot application.
* [describeSimulationApplication](docs/sdk/README.md#describesimulationapplication) - Describes a simulation application.
* [describeSimulationJob](docs/sdk/README.md#describesimulationjob) - Describes a simulation job.
* [describeSimulationJobBatch](docs/sdk/README.md#describesimulationjobbatch) - Describes a simulation job batch.
* [describeWorld](docs/sdk/README.md#describeworld) - Describes a world.
* [describeWorldExportJob](docs/sdk/README.md#describeworldexportjob) - Describes a world export job.
* [describeWorldGenerationJob](docs/sdk/README.md#describeworldgenerationjob) - Describes a world generation job.
* [describeWorldTemplate](docs/sdk/README.md#describeworldtemplate) - Describes a world template.
* [getWorldTemplateBody](docs/sdk/README.md#getworldtemplatebody) - Gets the world template body.
* [~~listDeploymentJobs~~](docs/sdk/README.md#listdeploymentjobs) - <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [~~listFleets~~](docs/sdk/README.md#listfleets) - <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [listRobotApplications](docs/sdk/README.md#listrobotapplications) - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* [~~listRobots~~](docs/sdk/README.md#listrobots) - <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [listSimulationApplications](docs/sdk/README.md#listsimulationapplications) - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* [listSimulationJobBatches](docs/sdk/README.md#listsimulationjobbatches) - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* [listSimulationJobs](docs/sdk/README.md#listsimulationjobs) - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags on a AWS RoboMaker resource.
* [listWorldExportJobs](docs/sdk/README.md#listworldexportjobs) - Lists world export jobs.
* [listWorldGenerationJobs](docs/sdk/README.md#listworldgenerationjobs) - Lists world generator jobs.
* [listWorldTemplates](docs/sdk/README.md#listworldtemplates) - Lists world templates.
* [listWorlds](docs/sdk/README.md#listworlds) - Lists worlds.
* [~~registerRobot~~](docs/sdk/README.md#registerrobot) - <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> :warning: **Deprecated**
* [restartSimulationJob](docs/sdk/README.md#restartsimulationjob) - Restarts a running simulation job.
* [startSimulationJobBatch](docs/sdk/README.md#startsimulationjobbatch) - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* [~~syncDeploymentJob~~](docs/sdk/README.md#syncdeploymentjob) - <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important> :warning: **Deprecated**
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* [untagResource](docs/sdk/README.md#untagresource) - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* [updateRobotApplication](docs/sdk/README.md#updaterobotapplication) - Updates a robot application.
* [updateSimulationApplication](docs/sdk/README.md#updatesimulationapplication) - Updates a simulation application.
* [updateWorldTemplate](docs/sdk/README.md#updateworldtemplate) - Updates a world template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
