# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codedeploy/2014-10-06/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddTagsToOnPremisesInstances(ctx, operations.AddTagsToOnPremisesInstancesRequest{
        AddTagsToOnPremisesInstancesInput: shared.AddTagsToOnPremisesInstancesInput{
            InstanceNames: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("nulla"),
                    Value: sdk.String("corrupti"),
                },
                shared.Tag{
                    Key: sdk.String("illum"),
                    Value: sdk.String("vel"),
                },
                shared.Tag{
                    Key: sdk.String("error"),
                    Value: sdk.String("deserunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AddTagsToOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006AddTagsToOnPremisesInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AddTagsToOnPremisesInstances](docs/sdk/README.md#addtagstoonpremisesinstances) - Adds tags to on-premises instances.
* [BatchGetApplicationRevisions](docs/sdk/README.md#batchgetapplicationrevisions) - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
* [BatchGetApplications](docs/sdk/README.md#batchgetapplications) - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
* [BatchGetDeploymentGroups](docs/sdk/README.md#batchgetdeploymentgroups) - Gets information about one or more deployment groups.
* [~~BatchGetDeploymentInstances~~](docs/sdk/README.md#batchgetdeploymentinstances) - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p> :warning: **Deprecated**
* [BatchGetDeploymentTargets](docs/sdk/README.md#batchgetdeploymenttargets) - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
* [BatchGetDeployments](docs/sdk/README.md#batchgetdeployments) - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
* [BatchGetOnPremisesInstances](docs/sdk/README.md#batchgetonpremisesinstances) - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
* [ContinueDeployment](docs/sdk/README.md#continuedeployment) - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
* [CreateApplication](docs/sdk/README.md#createapplication) - Creates an application.
* [CreateDeployment](docs/sdk/README.md#createdeployment) - Deploys an application revision through the specified deployment group.
* [CreateDeploymentConfig](docs/sdk/README.md#createdeploymentconfig) -  Creates a deployment configuration. 
* [CreateDeploymentGroup](docs/sdk/README.md#createdeploymentgroup) - Creates a deployment group to which application revisions are deployed.
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Deletes an application.
* [DeleteDeploymentConfig](docs/sdk/README.md#deletedeploymentconfig) - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
* [DeleteDeploymentGroup](docs/sdk/README.md#deletedeploymentgroup) - Deletes a deployment group.
* [DeleteGitHubAccountToken](docs/sdk/README.md#deletegithubaccounttoken) - Deletes a GitHub account connection.
* [DeleteResourcesByExternalID](docs/sdk/README.md#deleteresourcesbyexternalid) - Deletes resources linked to an external ID.
* [DeregisterOnPremisesInstance](docs/sdk/README.md#deregisteronpremisesinstance) - Deregisters an on-premises instance.
* [GetApplication](docs/sdk/README.md#getapplication) - Gets information about an application.
* [GetApplicationRevision](docs/sdk/README.md#getapplicationrevision) - Gets information about an application revision.
* [GetDeployment](docs/sdk/README.md#getdeployment) - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
* [GetDeploymentConfig](docs/sdk/README.md#getdeploymentconfig) - Gets information about a deployment configuration.
* [GetDeploymentGroup](docs/sdk/README.md#getdeploymentgroup) - Gets information about a deployment group.
* [~~GetDeploymentInstance~~](docs/sdk/README.md#getdeploymentinstance) - Gets information about an instance as part of a deployment. :warning: **Deprecated**
* [GetDeploymentTarget](docs/sdk/README.md#getdeploymenttarget) -  Returns information about a deployment target. 
* [GetOnPremisesInstance](docs/sdk/README.md#getonpremisesinstance) -  Gets information about an on-premises instance. 
* [ListApplicationRevisions](docs/sdk/README.md#listapplicationrevisions) - Lists information about revisions for an application.
* [ListApplications](docs/sdk/README.md#listapplications) - Lists the applications registered with the IAM user or Amazon Web Services account.
* [ListDeploymentConfigs](docs/sdk/README.md#listdeploymentconfigs) - Lists the deployment configurations with the IAM user or Amazon Web Services account.
* [ListDeploymentGroups](docs/sdk/README.md#listdeploymentgroups) - Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.
* [~~ListDeploymentInstances~~](docs/sdk/README.md#listdeploymentinstances) - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p> :warning: **Deprecated**
* [ListDeploymentTargets](docs/sdk/README.md#listdeploymenttargets) -  Returns an array of target IDs that are associated a deployment. 
* [ListDeployments](docs/sdk/README.md#listdeployments) - Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.
* [ListGitHubAccountTokenNames](docs/sdk/README.md#listgithubaccounttokennames) - Lists the names of stored connections to GitHub accounts.
* [ListOnPremisesInstances](docs/sdk/README.md#listonpremisesinstances) - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 
* [PutLifecycleEventHookExecutionStatus](docs/sdk/README.md#putlifecycleeventhookexecutionstatus) -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
* [RegisterApplicationRevision](docs/sdk/README.md#registerapplicationrevision) - Registers with CodeDeploy a revision for the specified application.
* [RegisterOnPremisesInstance](docs/sdk/README.md#registeronpremisesinstance) - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
* [RemoveTagsFromOnPremisesInstances](docs/sdk/README.md#removetagsfromonpremisesinstances) - Removes one or more tags from one or more on-premises instances.
* [~~SkipWaitTimeForInstanceTermination~~](docs/sdk/README.md#skipwaittimeforinstancetermination) - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete. :warning: **Deprecated**
* [StopDeployment](docs/sdk/README.md#stopdeployment) - Attempts to stop an ongoing deployment.
* [TagResource](docs/sdk/README.md#tagresource) -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 
* [UntagResource](docs/sdk/README.md#untagresource) -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Changes the name of an application.
* [UpdateDeploymentGroup](docs/sdk/README.md#updatedeploymentgroup) - Changes information about a deployment group.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
