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
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesRequest;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesResponse;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToOnPremisesInstancesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToOnPremisesInstancesRequest req = new AddTagsToOnPremisesInstancesRequest(                new AddTagsToOnPremisesInstancesInput(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }},                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "corrupti";
                                                    value = "illum";
                                                }}),
                                                add(new Tag() {{
                                                    key = "vel";
                                                    value = "error";
                                                }}),
                                                add(new Tag() {{
                                                    key = "deserunt";
                                                    value = "suscipit";
                                                }}),
                                                add(new Tag() {{
                                                    key = "iure";
                                                    value = "magnam";
                                                }}),
                                            }});, AddTagsToOnPremisesInstancesXAmzTargetEnum.CODE_DEPLOY20141006_ADD_TAGS_TO_ON_PREMISES_INSTANCES) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            AddTagsToOnPremisesInstancesResponse res = sdk.addTagsToOnPremisesInstances(req);

            if (res.statusCode == 200) {
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

* [addTagsToOnPremisesInstances](docs/sdk/README.md#addtagstoonpremisesinstances) - Adds tags to on-premises instances.
* [batchGetApplicationRevisions](docs/sdk/README.md#batchgetapplicationrevisions) - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
* [batchGetApplications](docs/sdk/README.md#batchgetapplications) - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
* [batchGetDeploymentGroups](docs/sdk/README.md#batchgetdeploymentgroups) - Gets information about one or more deployment groups.
* [~~batchGetDeploymentInstances~~](docs/sdk/README.md#batchgetdeploymentinstances) - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p> :warning: **Deprecated**
* [batchGetDeploymentTargets](docs/sdk/README.md#batchgetdeploymenttargets) - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
* [batchGetDeployments](docs/sdk/README.md#batchgetdeployments) - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
* [batchGetOnPremisesInstances](docs/sdk/README.md#batchgetonpremisesinstances) - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
* [continueDeployment](docs/sdk/README.md#continuedeployment) - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
* [createApplication](docs/sdk/README.md#createapplication) - Creates an application.
* [createDeployment](docs/sdk/README.md#createdeployment) - Deploys an application revision through the specified deployment group.
* [createDeploymentConfig](docs/sdk/README.md#createdeploymentconfig) -  Creates a deployment configuration. 
* [createDeploymentGroup](docs/sdk/README.md#createdeploymentgroup) - Creates a deployment group to which application revisions are deployed.
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Deletes an application.
* [deleteDeploymentConfig](docs/sdk/README.md#deletedeploymentconfig) - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
* [deleteDeploymentGroup](docs/sdk/README.md#deletedeploymentgroup) - Deletes a deployment group.
* [deleteGitHubAccountToken](docs/sdk/README.md#deletegithubaccounttoken) - Deletes a GitHub account connection.
* [deleteResourcesByExternalId](docs/sdk/README.md#deleteresourcesbyexternalid) - Deletes resources linked to an external ID.
* [deregisterOnPremisesInstance](docs/sdk/README.md#deregisteronpremisesinstance) - Deregisters an on-premises instance.
* [getApplication](docs/sdk/README.md#getapplication) - Gets information about an application.
* [getApplicationRevision](docs/sdk/README.md#getapplicationrevision) - Gets information about an application revision.
* [getDeployment](docs/sdk/README.md#getdeployment) - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
* [getDeploymentConfig](docs/sdk/README.md#getdeploymentconfig) - Gets information about a deployment configuration.
* [getDeploymentGroup](docs/sdk/README.md#getdeploymentgroup) - Gets information about a deployment group.
* [~~getDeploymentInstance~~](docs/sdk/README.md#getdeploymentinstance) - Gets information about an instance as part of a deployment. :warning: **Deprecated**
* [getDeploymentTarget](docs/sdk/README.md#getdeploymenttarget) -  Returns information about a deployment target. 
* [getOnPremisesInstance](docs/sdk/README.md#getonpremisesinstance) -  Gets information about an on-premises instance. 
* [listApplicationRevisions](docs/sdk/README.md#listapplicationrevisions) - Lists information about revisions for an application.
* [listApplications](docs/sdk/README.md#listapplications) - Lists the applications registered with the IAM user or Amazon Web Services account.
* [listDeploymentConfigs](docs/sdk/README.md#listdeploymentconfigs) - Lists the deployment configurations with the IAM user or Amazon Web Services account.
* [listDeploymentGroups](docs/sdk/README.md#listdeploymentgroups) - Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.
* [~~listDeploymentInstances~~](docs/sdk/README.md#listdeploymentinstances) - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p> :warning: **Deprecated**
* [listDeploymentTargets](docs/sdk/README.md#listdeploymenttargets) -  Returns an array of target IDs that are associated a deployment. 
* [listDeployments](docs/sdk/README.md#listdeployments) - Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.
* [listGitHubAccountTokenNames](docs/sdk/README.md#listgithubaccounttokennames) - Lists the names of stored connections to GitHub accounts.
* [listOnPremisesInstances](docs/sdk/README.md#listonpremisesinstances) - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 
* [putLifecycleEventHookExecutionStatus](docs/sdk/README.md#putlifecycleeventhookexecutionstatus) -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
* [registerApplicationRevision](docs/sdk/README.md#registerapplicationrevision) - Registers with CodeDeploy a revision for the specified application.
* [registerOnPremisesInstance](docs/sdk/README.md#registeronpremisesinstance) - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
* [removeTagsFromOnPremisesInstances](docs/sdk/README.md#removetagsfromonpremisesinstances) - Removes one or more tags from one or more on-premises instances.
* [~~skipWaitTimeForInstanceTermination~~](docs/sdk/README.md#skipwaittimeforinstancetermination) - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete. :warning: **Deprecated**
* [stopDeployment](docs/sdk/README.md#stopdeployment) - Attempts to stop an ongoing deployment.
* [tagResource](docs/sdk/README.md#tagresource) -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 
* [untagResource](docs/sdk/README.md#untagresource) -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 
* [updateApplication](docs/sdk/README.md#updateapplication) - Changes the name of an application.
* [updateDeploymentGroup](docs/sdk/README.md#updatedeploymentgroup) - Changes information about a deployment group.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
