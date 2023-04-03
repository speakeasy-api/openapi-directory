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
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesRequest;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesResponse;
import org.openapis.openapi.models.shared.AddTagsToOnPremisesInstancesInput;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToOnPremisesInstancesRequest req = new AddTagsToOnPremisesInstancesRequest() {{
                addTagsToOnPremisesInstancesInput = new AddTagsToOnPremisesInstancesInput() {{
                    instanceNames = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "nulla";
                            value = "corrupti";
                        }}),
                        add(new Tag() {{
                            key = "illum";
                            value = "vel";
                        }}),
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
                xAmzTarget = "CodeDeploy_20141006.AddTagsToOnPremisesInstances";
            }}            

            AddTagsToOnPremisesInstancesResponse res = sdk.addTagsToOnPremisesInstances(req);

            if (res.statusCode == 200) {
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

* `addTagsToOnPremisesInstances` - Adds tags to on-premises instances.
* `batchGetApplicationRevisions` - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
* `batchGetApplications` - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
* `batchGetDeploymentGroups` - Gets information about one or more deployment groups.
* `batchGetDeploymentInstances` - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
* `batchGetDeploymentTargets` - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
* `batchGetDeployments` - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
* `batchGetOnPremisesInstances` - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
* `continueDeployment` - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
* `createApplication` - Creates an application.
* `createDeployment` - Deploys an application revision through the specified deployment group.
* `createDeploymentConfig` -  Creates a deployment configuration. 
* `createDeploymentGroup` - Creates a deployment group to which application revisions are deployed.
* `deleteApplication` - Deletes an application.
* `deleteDeploymentConfig` - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
* `deleteDeploymentGroup` - Deletes a deployment group.
* `deleteGitHubAccountToken` - Deletes a GitHub account connection.
* `deleteResourcesByExternalId` - Deletes resources linked to an external ID.
* `deregisterOnPremisesInstance` - Deregisters an on-premises instance.
* `getApplication` - Gets information about an application.
* `getApplicationRevision` - Gets information about an application revision.
* `getDeployment` - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
* `getDeploymentConfig` - Gets information about a deployment configuration.
* `getDeploymentGroup` - Gets information about a deployment group.
* `getDeploymentInstance` - Gets information about an instance as part of a deployment.
* `getDeploymentTarget` -  Returns information about a deployment target. 
* `getOnPremisesInstance` -  Gets information about an on-premises instance. 
* `listApplicationRevisions` - Lists information about revisions for an application.
* `listApplications` - Lists the applications registered with the IAM user or Amazon Web Services account.
* `listDeploymentConfigs` - Lists the deployment configurations with the IAM user or Amazon Web Services account.
* `listDeploymentGroups` - Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.
* `listDeploymentInstances` - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>
* `listDeploymentTargets` -  Returns an array of target IDs that are associated a deployment. 
* `listDeployments` - Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.
* `listGitHubAccountTokenNames` - Lists the names of stored connections to GitHub accounts.
* `listOnPremisesInstances` - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
* `listTagsForResource` -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 
* `putLifecycleEventHookExecutionStatus` -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
* `registerApplicationRevision` - Registers with CodeDeploy a revision for the specified application.
* `registerOnPremisesInstance` - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
* `removeTagsFromOnPremisesInstances` - Removes one or more tags from one or more on-premises instances.
* `skipWaitTimeForInstanceTermination` - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
* `stopDeployment` - Attempts to stop an ongoing deployment.
* `tagResource` -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 
* `untagResource` -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 
* `updateApplication` - Changes the name of an application.
* `updateDeploymentGroup` - Changes information about a deployment group.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
