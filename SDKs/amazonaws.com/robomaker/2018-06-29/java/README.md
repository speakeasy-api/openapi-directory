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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteWorldsRequest;
import org.openapis.openapi.models.operations.BatchDeleteWorldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteWorldsRequest req = new BatchDeleteWorldsRequest() {{
                requestBody = new BatchDeleteWorldsRequestBody() {{
                    worlds = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }}            

            BatchDeleteWorldsResponse res = sdk.batchDeleteWorlds(req);

            if (res.batchDeleteWorldsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchDeleteWorlds` - Deletes one or more worlds in a batch operation.
* `batchDescribeSimulationJob` - Describes one or more simulation jobs.
* `cancelDeploymentJob` - <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `cancelSimulationJob` - Cancels the specified simulation job.
* `cancelSimulationJobBatch` - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch. 
* `cancelWorldExportJob` - Cancels the specified export job.
* `cancelWorldGenerationJob` - Cancels the specified world generator job.
* `createDeploymentJob` - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `createFleet` - <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
* `createRobot` - <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
* `createRobotApplication` - Creates a robot application. 
* `createRobotApplicationVersion` - Creates a version of a robot application.
* `createSimulationApplication` - Creates a simulation application.
* `createSimulationApplicationVersion` - Creates a simulation application with a specific revision id.
* `createSimulationJob` - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
* `createWorldExportJob` - Creates a world export job.
* `createWorldGenerationJob` - Creates worlds using the specified template.
* `createWorldTemplate` - Creates a world template.
* `deleteFleet` - <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `deleteRobot` - <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `deleteRobotApplication` - Deletes a robot application.
* `deleteSimulationApplication` - Deletes a simulation application.
* `deleteWorldTemplate` - Deletes a world template.
* `deregisterRobot` - <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `describeDeploymentJob` - <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `describeFleet` - <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `describeRobot` - <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `describeRobotApplication` - Describes a robot application.
* `describeSimulationApplication` - Describes a simulation application.
* `describeSimulationJob` - Describes a simulation job.
* `describeSimulationJobBatch` - Describes a simulation job batch.
* `describeWorld` - Describes a world.
* `describeWorldExportJob` - Describes a world export job.
* `describeWorldGenerationJob` - Describes a world generation job.
* `describeWorldTemplate` - Describes a world template.
* `getWorldTemplateBody` - Gets the world template body.
* `listDeploymentJobs` - <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `listFleets` - <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `listRobotApplications` - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
* `listRobots` - <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `listSimulationApplications` - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. 
* `listSimulationJobBatches` - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs. 
* `listSimulationJobs` - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. 
* `listTagsForResource` - Lists all tags on a AWS RoboMaker resource.
* `listWorldExportJobs` - Lists world export jobs.
* `listWorldGenerationJobs` - Lists world generator jobs.
* `listWorldTemplates` - Lists world templates.
* `listWorlds` - Lists worlds.
* `registerRobot` - <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
* `restartSimulationJob` - Restarts a running simulation job.
* `startSimulationJobBatch` - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects. 
* `syncDeploymentJob` - <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
* `tagResource` - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
* `untagResource` - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
* `updateRobotApplication` - Updates a robot application.
* `updateSimulationApplication` - Updates a simulation application.
* `updateWorldTemplate` - Updates a world template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
