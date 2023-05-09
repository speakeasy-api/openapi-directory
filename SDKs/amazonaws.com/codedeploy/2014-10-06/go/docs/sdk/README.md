# SDK

## Overview

<p>CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless Lambda functions, or applications in an Amazon ECS service.</p> <p>You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use CodeDeploy.</p> <p>CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.</p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content—source code, webpages, executable files, and deployment scripts—along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.</p> <p> <b>CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codedeploy/>
### Available Operations

* [AddTagsToOnPremisesInstances](#addtagstoonpremisesinstances) - Adds tags to on-premises instances.
* [BatchGetApplicationRevisions](#batchgetapplicationrevisions) - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
* [BatchGetApplications](#batchgetapplications) - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
* [BatchGetDeploymentGroups](#batchgetdeploymentgroups) - Gets information about one or more deployment groups.
* [~~BatchGetDeploymentInstances~~](#batchgetdeploymentinstances) - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p> :warning: **Deprecated**
* [BatchGetDeploymentTargets](#batchgetdeploymenttargets) - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
* [BatchGetDeployments](#batchgetdeployments) - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
* [BatchGetOnPremisesInstances](#batchgetonpremisesinstances) - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
* [ContinueDeployment](#continuedeployment) - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
* [CreateApplication](#createapplication) - Creates an application.
* [CreateDeployment](#createdeployment) - Deploys an application revision through the specified deployment group.
* [CreateDeploymentConfig](#createdeploymentconfig) -  Creates a deployment configuration. 
* [CreateDeploymentGroup](#createdeploymentgroup) - Creates a deployment group to which application revisions are deployed.
* [DeleteApplication](#deleteapplication) - Deletes an application.
* [DeleteDeploymentConfig](#deletedeploymentconfig) - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
* [DeleteDeploymentGroup](#deletedeploymentgroup) - Deletes a deployment group.
* [DeleteGitHubAccountToken](#deletegithubaccounttoken) - Deletes a GitHub account connection.
* [DeleteResourcesByExternalID](#deleteresourcesbyexternalid) - Deletes resources linked to an external ID.
* [DeregisterOnPremisesInstance](#deregisteronpremisesinstance) - Deregisters an on-premises instance.
* [GetApplication](#getapplication) - Gets information about an application.
* [GetApplicationRevision](#getapplicationrevision) - Gets information about an application revision.
* [GetDeployment](#getdeployment) - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
* [GetDeploymentConfig](#getdeploymentconfig) - Gets information about a deployment configuration.
* [GetDeploymentGroup](#getdeploymentgroup) - Gets information about a deployment group.
* [~~GetDeploymentInstance~~](#getdeploymentinstance) - Gets information about an instance as part of a deployment. :warning: **Deprecated**
* [GetDeploymentTarget](#getdeploymenttarget) -  Returns information about a deployment target. 
* [GetOnPremisesInstance](#getonpremisesinstance) -  Gets information about an on-premises instance. 
* [ListApplicationRevisions](#listapplicationrevisions) - Lists information about revisions for an application.
* [ListApplications](#listapplications) - Lists the applications registered with the IAM user or Amazon Web Services account.
* [ListDeploymentConfigs](#listdeploymentconfigs) - Lists the deployment configurations with the IAM user or Amazon Web Services account.
* [ListDeploymentGroups](#listdeploymentgroups) - Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.
* [~~ListDeploymentInstances~~](#listdeploymentinstances) - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p> :warning: **Deprecated**
* [ListDeploymentTargets](#listdeploymenttargets) -  Returns an array of target IDs that are associated a deployment. 
* [ListDeployments](#listdeployments) - Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.
* [ListGitHubAccountTokenNames](#listgithubaccounttokennames) - Lists the names of stored connections to GitHub accounts.
* [ListOnPremisesInstances](#listonpremisesinstances) - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
* [ListTagsForResource](#listtagsforresource) -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 
* [PutLifecycleEventHookExecutionStatus](#putlifecycleeventhookexecutionstatus) -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
* [RegisterApplicationRevision](#registerapplicationrevision) - Registers with CodeDeploy a revision for the specified application.
* [RegisterOnPremisesInstance](#registeronpremisesinstance) - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
* [RemoveTagsFromOnPremisesInstances](#removetagsfromonpremisesinstances) - Removes one or more tags from one or more on-premises instances.
* [~~SkipWaitTimeForInstanceTermination~~](#skipwaittimeforinstancetermination) - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete. :warning: **Deprecated**
* [StopDeployment](#stopdeployment) - Attempts to stop an ongoing deployment.
* [TagResource](#tagresource) -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 
* [UntagResource](#untagresource) -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 
* [UpdateApplication](#updateapplication) - Changes the name of an application.
* [UpdateDeploymentGroup](#updatedeploymentgroup) - Changes information about a deployment group.

## AddTagsToOnPremisesInstances

Adds tags to on-premises instances.

### Example Usage

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
    res, err := s.SDK.AddTagsToOnPremisesInstances(ctx, operations.AddTagsToOnPremisesInstancesRequest{
        AddTagsToOnPremisesInstancesInput: shared.AddTagsToOnPremisesInstancesInput{
            InstanceNames: []string{
                "molestiae",
                "minus",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("voluptatum"),
                    Value: sdk.String("iusto"),
                },
                shared.Tag{
                    Key: sdk.String("excepturi"),
                    Value: sdk.String("nisi"),
                },
                shared.Tag{
                    Key: sdk.String("recusandae"),
                    Value: sdk.String("temporibus"),
                },
                shared.Tag{
                    Key: sdk.String("ab"),
                    Value: sdk.String("quis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
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

## BatchGetApplicationRevisions

Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.

### Example Usage

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
    res, err := s.SDK.BatchGetApplicationRevisions(ctx, operations.BatchGetApplicationRevisionsRequest{
        BatchGetApplicationRevisionsInput: shared.BatchGetApplicationRevisionsInput{
            ApplicationName: "odit",
            Revisions: []shared.RevisionLocation{
                shared.RevisionLocation{
                    AppSpecContent: &shared.AppSpecContent{
                        Content: sdk.String("at"),
                        Sha256: sdk.String("maiores"),
                    },
                    GitHubLocation: &shared.GitHubLocation{
                        CommitID: sdk.String("molestiae"),
                        Repository: sdk.String("quod"),
                    },
                    RevisionType: shared.RevisionLocationTypeEnumAppSpecContent.ToPointer(),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("esse"),
                        BundleType: shared.BundleTypeEnumZip.ToPointer(),
                        ETag: sdk.String("porro"),
                        Key: sdk.String("dolorum"),
                        Version: sdk.String("dicta"),
                    },
                    String: &shared.RawString{
                        Content: sdk.String("nam"),
                        Sha256: sdk.String("officia"),
                    },
                },
                shared.RevisionLocation{
                    AppSpecContent: &shared.AppSpecContent{
                        Content: sdk.String("occaecati"),
                        Sha256: sdk.String("fugit"),
                    },
                    GitHubLocation: &shared.GitHubLocation{
                        CommitID: sdk.String("deleniti"),
                        Repository: sdk.String("hic"),
                    },
                    RevisionType: shared.RevisionLocationTypeEnumAppSpecContent.ToPointer(),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("totam"),
                        BundleType: shared.BundleTypeEnumTar.ToPointer(),
                        ETag: sdk.String("commodi"),
                        Key: sdk.String("molestiae"),
                        Version: sdk.String("modi"),
                    },
                    String: &shared.RawString{
                        Content: sdk.String("qui"),
                        Sha256: sdk.String("impedit"),
                    },
                },
                shared.RevisionLocation{
                    AppSpecContent: &shared.AppSpecContent{
                        Content: sdk.String("cum"),
                        Sha256: sdk.String("esse"),
                    },
                    GitHubLocation: &shared.GitHubLocation{
                        CommitID: sdk.String("ipsum"),
                        Repository: sdk.String("excepturi"),
                    },
                    RevisionType: shared.RevisionLocationTypeEnumS3.ToPointer(),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("perferendis"),
                        BundleType: shared.BundleTypeEnumTgz.ToPointer(),
                        ETag: sdk.String("natus"),
                        Key: sdk.String("sed"),
                        Version: sdk.String("iste"),
                    },
                    String: &shared.RawString{
                        Content: sdk.String("dolor"),
                        Sha256: sdk.String("natus"),
                    },
                },
                shared.RevisionLocation{
                    AppSpecContent: &shared.AppSpecContent{
                        Content: sdk.String("laboriosam"),
                        Sha256: sdk.String("hic"),
                    },
                    GitHubLocation: &shared.GitHubLocation{
                        CommitID: sdk.String("saepe"),
                        Repository: sdk.String("fuga"),
                    },
                    RevisionType: shared.RevisionLocationTypeEnumGitHub.ToPointer(),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("corporis"),
                        BundleType: shared.BundleTypeEnumYaml.ToPointer(),
                        ETag: sdk.String("iure"),
                        Key: sdk.String("saepe"),
                        Version: sdk.String("quidem"),
                    },
                    String: &shared.RawString{
                        Content: sdk.String("architecto"),
                        Sha256: sdk.String("ipsa"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.BatchGetApplicationRevisionsXAmzTargetEnumCodeDeploy20141006BatchGetApplicationRevisions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetApplicationRevisionsOutput != nil {
        // handle response
    }
}
```

## BatchGetApplications

Gets information about one or more applications. The maximum number of applications that can be returned is 100.

### Example Usage

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
    res, err := s.SDK.BatchGetApplications(ctx, operations.BatchGetApplicationsRequest{
        BatchGetApplicationsInput: shared.BatchGetApplicationsInput{
            ApplicationNames: []string{
                "nobis",
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.BatchGetApplicationsXAmzTargetEnumCodeDeploy20141006BatchGetApplications,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetApplicationsOutput != nil {
        // handle response
    }
}
```

## BatchGetDeploymentGroups

Gets information about one or more deployment groups.

### Example Usage

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
    res, err := s.SDK.BatchGetDeploymentGroups(ctx, operations.BatchGetDeploymentGroupsRequest{
        BatchGetDeploymentGroupsInput: shared.BatchGetDeploymentGroupsInput{
            ApplicationName: "culpa",
            DeploymentGroupNames: []string{
                "sapiente",
                "architecto",
                "mollitia",
                "dolorem",
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.BatchGetDeploymentGroupsXAmzTargetEnumCodeDeploy20141006BatchGetDeploymentGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDeploymentGroupsOutput != nil {
        // handle response
    }
}
```

## ~~BatchGetDeploymentInstances~~

<note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

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
    res, err := s.SDK.BatchGetDeploymentInstances(ctx, operations.BatchGetDeploymentInstancesRequest{
        BatchGetDeploymentInstancesInput: shared.BatchGetDeploymentInstancesInput{
            DeploymentID: "quam",
            InstanceIds: []string{
                "velit",
                "error",
            },
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.BatchGetDeploymentInstancesXAmzTargetEnumCodeDeploy20141006BatchGetDeploymentInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDeploymentInstancesOutput != nil {
        // handle response
    }
}
```

## BatchGetDeploymentTargets

<p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>

### Example Usage

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
    res, err := s.SDK.BatchGetDeploymentTargets(ctx, operations.BatchGetDeploymentTargetsRequest{
        BatchGetDeploymentTargetsInput: shared.BatchGetDeploymentTargetsInput{
            DeploymentID: sdk.String("quo"),
            TargetIds: []string{
                "tenetur",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.BatchGetDeploymentTargetsXAmzTargetEnumCodeDeploy20141006BatchGetDeploymentTargets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDeploymentTargetsOutput != nil {
        // handle response
    }
}
```

## BatchGetDeployments

Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.

### Example Usage

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
    res, err := s.SDK.BatchGetDeployments(ctx, operations.BatchGetDeploymentsRequest{
        BatchGetDeploymentsInput: shared.BatchGetDeploymentsInput{
            DeploymentIds: []string{
                "quasi",
                "reiciendis",
                "voluptatibus",
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.BatchGetDeploymentsXAmzTargetEnumCodeDeploy20141006BatchGetDeployments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDeploymentsOutput != nil {
        // handle response
    }
}
```

## BatchGetOnPremisesInstances

Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.

### Example Usage

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
    res, err := s.SDK.BatchGetOnPremisesInstances(ctx, operations.BatchGetOnPremisesInstancesRequest{
        BatchGetOnPremisesInstancesInput: shared.BatchGetOnPremisesInstancesInput{
            InstanceNames: []string{
                "perferendis",
                "doloremque",
                "reprehenderit",
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.BatchGetOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006BatchGetOnPremisesInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetOnPremisesInstancesOutput != nil {
        // handle response
    }
}
```

## ContinueDeployment

For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 

### Example Usage

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
    res, err := s.SDK.ContinueDeployment(ctx, operations.ContinueDeploymentRequest{
        ContinueDeploymentInput: shared.ContinueDeploymentInput{
            DeploymentID: sdk.String("harum"),
            DeploymentWaitType: shared.DeploymentWaitTypeEnumReadyWait.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.ContinueDeploymentXAmzTargetEnumCodeDeploy20141006ContinueDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateApplication

Creates an application.

### Example Usage

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        CreateApplicationInput: shared.CreateApplicationInput{
            ApplicationName: "excepturi",
            ComputePlatform: shared.ComputePlatformEnumEcs.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("praesentium"),
                    Value: sdk.String("rem"),
                },
                shared.Tag{
                    Key: sdk.String("voluptates"),
                    Value: sdk.String("quasi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumCodeDeploy20141006CreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationOutput != nil {
        // handle response
    }
}
```

## CreateDeployment

Deploys an application revision through the specified deployment group.

### Example Usage

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
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        CreateDeploymentInput: shared.CreateDeploymentInput{
            ApplicationName: "est",
            AutoRollbackConfiguration: &shared.AutoRollbackConfiguration{
                Enabled: sdk.Bool(false),
                Events: []shared.AutoRollbackEventEnum{
                    shared.AutoRollbackEventEnumDeploymentFailure,
                    shared.AutoRollbackEventEnumDeploymentStopOnAlarm,
                    shared.AutoRollbackEventEnumDeploymentStopOnRequest,
                    shared.AutoRollbackEventEnumDeploymentStopOnRequest,
                },
            },
            DeploymentConfigName: sdk.String("labore"),
            DeploymentGroupName: sdk.String("modi"),
            Description: sdk.String("qui"),
            FileExistsBehavior: shared.FileExistsBehaviorEnumOverwrite.ToPointer(),
            IgnoreApplicationStopFailures: sdk.Bool(false),
            OverrideAlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: sdk.String("Christopher Cummerata"),
                    },
                    shared.Alarm{
                        Name: sdk.String("Denise Pagac"),
                    },
                    shared.Alarm{
                        Name: sdk.String("Geoffrey Green"),
                    },
                },
                Enabled: sdk.Bool(false),
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            Revision: &shared.RevisionLocation{
                AppSpecContent: &shared.AppSpecContent{
                    Content: sdk.String("non"),
                    Sha256: sdk.String("eligendi"),
                },
                GitHubLocation: &shared.GitHubLocation{
                    CommitID: sdk.String("sint"),
                    Repository: sdk.String("aliquid"),
                },
                RevisionType: shared.RevisionLocationTypeEnumString.ToPointer(),
                S3Location: &shared.S3Location{
                    Bucket: sdk.String("necessitatibus"),
                    BundleType: shared.BundleTypeEnumZip.ToPointer(),
                    ETag: sdk.String("officia"),
                    Key: sdk.String("dolor"),
                    Version: sdk.String("debitis"),
                },
                String: &shared.RawString{
                    Content: sdk.String("a"),
                    Sha256: sdk.String("dolorum"),
                },
            },
            TargetInstances: &shared.TargetInstances{
                AutoScalingGroups: []string{
                    "in",
                    "illum",
                },
                Ec2TagSet: &shared.Ec2TagSet{
                    Ec2TagSetList: [][]shared.Ec2TagFilter{
                        []shared.Ec2TagFilter{
                            shared.Ec2TagFilter{
                                Key: sdk.String("dicta"),
                                Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                                Value: sdk.String("cumque"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("facere"),
                                Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                                Value: sdk.String("aliquid"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("laborum"),
                                Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                                Value: sdk.String("non"),
                            },
                        },
                        []shared.Ec2TagFilter{
                            shared.Ec2TagFilter{
                                Key: sdk.String("enim"),
                                Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                                Value: sdk.String("delectus"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("quidem"),
                                Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                                Value: sdk.String("nam"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("id"),
                                Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                                Value: sdk.String("deleniti"),
                            },
                        },
                        []shared.Ec2TagFilter{
                            shared.Ec2TagFilter{
                                Key: sdk.String("amet"),
                                Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                                Value: sdk.String("nisi"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("vel"),
                                Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                                Value: sdk.String("omnis"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("molestiae"),
                                Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                                Value: sdk.String("nihil"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("magnam"),
                                Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                                Value: sdk.String("id"),
                            },
                        },
                        []shared.Ec2TagFilter{
                            shared.Ec2TagFilter{
                                Key: sdk.String("labore"),
                                Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                                Value: sdk.String("natus"),
                            },
                            shared.Ec2TagFilter{
                                Key: sdk.String("nobis"),
                                Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                                Value: sdk.String("vero"),
                            },
                        },
                    },
                },
                TagFilters: []shared.Ec2TagFilter{
                    shared.Ec2TagFilter{
                        Key: sdk.String("architecto"),
                        Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                        Value: sdk.String("et"),
                    },
                },
            },
            UpdateOutdatedInstancesOnly: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.CreateDeploymentXAmzTargetEnumCodeDeploy20141006CreateDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentOutput != nil {
        // handle response
    }
}
```

## CreateDeploymentConfig

 Creates a deployment configuration. 

### Example Usage

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
    res, err := s.SDK.CreateDeploymentConfig(ctx, operations.CreateDeploymentConfigRequest{
        CreateDeploymentConfigInput: shared.CreateDeploymentConfigInput{
            ComputePlatform: shared.ComputePlatformEnumEcs.ToPointer(),
            DeploymentConfigName: "mollitia",
            MinimumHealthyHosts: &shared.MinimumHealthyHosts{
                Type: shared.MinimumHealthyHostsTypeEnumHostCount.ToPointer(),
                Value: sdk.Int64(431418),
            },
            TrafficRoutingConfig: &shared.TrafficRoutingConfig{
                TimeBasedCanary: &shared.TimeBasedCanary{
                    CanaryInterval: sdk.Int64(221262),
                    CanaryPercentage: sdk.Int64(896547),
                },
                TimeBasedLinear: &shared.TimeBasedLinear{
                    LinearInterval: sdk.Int64(141264),
                    LinearPercentage: sdk.Int64(367562),
                },
                Type: shared.TrafficRoutingTypeEnumTimeBasedCanary.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.CreateDeploymentConfigXAmzTargetEnumCodeDeploy20141006CreateDeploymentConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentConfigOutput != nil {
        // handle response
    }
}
```

## CreateDeploymentGroup

Creates a deployment group to which application revisions are deployed.

### Example Usage

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
    res, err := s.SDK.CreateDeploymentGroup(ctx, operations.CreateDeploymentGroupRequest{
        CreateDeploymentGroupInput: shared.CreateDeploymentGroupInput{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: sdk.String("Diane VonRueden"),
                    },
                    shared.Alarm{
                        Name: sdk.String("Kristie Spencer"),
                    },
                },
                Enabled: sdk.Bool(false),
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            ApplicationName: "pariatur",
            AutoRollbackConfiguration: &shared.AutoRollbackConfiguration{
                Enabled: sdk.Bool(false),
                Events: []shared.AutoRollbackEventEnum{
                    shared.AutoRollbackEventEnumDeploymentFailure,
                },
            },
            AutoScalingGroups: []string{
                "natus",
                "magni",
                "sunt",
            },
            BlueGreenDeploymentConfiguration: &shared.BlueGreenDeploymentConfiguration{
                DeploymentReadyOption: &shared.DeploymentReadyOption{
                    ActionOnTimeout: shared.DeploymentReadyActionEnumStopDeployment.ToPointer(),
                    WaitTimeInMinutes: sdk.Int64(848009),
                },
                GreenFleetProvisioningOption: &shared.GreenFleetProvisioningOption{
                    Action: shared.GreenFleetProvisioningActionEnumCopyAutoScalingGroup.ToPointer(),
                },
                TerminateBlueInstancesOnDeploymentSuccess: &shared.BlueInstanceTerminationOption{
                    Action: shared.InstanceActionEnumKeepAlive.ToPointer(),
                    TerminationWaitTimeInMinutes: sdk.Int64(411397),
                },
            },
            DeploymentConfigName: sdk.String("excepturi"),
            DeploymentGroupName: "odit",
            DeploymentStyle: &shared.DeploymentStyle{
                DeploymentOption: shared.DeploymentOptionEnumWithTrafficControl.ToPointer(),
                DeploymentType: shared.DeploymentTypeEnumInPlace.ToPointer(),
            },
            Ec2TagFilters: []shared.Ec2TagFilter{
                shared.Ec2TagFilter{
                    Key: sdk.String("maiores"),
                    Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                    Value: sdk.String("ipsam"),
                },
            },
            Ec2TagSet: &shared.Ec2TagSet{
                Ec2TagSetList: [][]shared.Ec2TagFilter{
                    []shared.Ec2TagFilter{
                        shared.Ec2TagFilter{
                            Key: sdk.String("nam"),
                            Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("pariatur"),
                        },
                        shared.Ec2TagFilter{
                            Key: sdk.String("nemo"),
                            Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("perferendis"),
                        },
                    },
                    []shared.Ec2TagFilter{
                        shared.Ec2TagFilter{
                            Key: sdk.String("amet"),
                            Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("cumque"),
                        },
                        shared.Ec2TagFilter{
                            Key: sdk.String("corporis"),
                            Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("libero"),
                        },
                        shared.Ec2TagFilter{
                            Key: sdk.String("nobis"),
                            Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("quis"),
                        },
                        shared.Ec2TagFilter{
                            Key: sdk.String("totam"),
                            Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                            Value: sdk.String("eaque"),
                        },
                    },
                },
            },
            EcsServices: []shared.ECSService{
                shared.ECSService{
                    ClusterName: sdk.String("nesciunt"),
                    ServiceName: sdk.String("eos"),
                },
                shared.ECSService{
                    ClusterName: sdk.String("perferendis"),
                    ServiceName: sdk.String("dolores"),
                },
            },
            LoadBalancerInfo: &shared.LoadBalancerInfo{
                ElbInfoList: []shared.ELBInfo{
                    shared.ELBInfo{
                        Name: sdk.String("Rosa Swift"),
                    },
                    shared.ELBInfo{
                        Name: sdk.String("Alejandro Purdy DDS"),
                    },
                    shared.ELBInfo{
                        Name: sdk.String("Ms. Vickie Mraz"),
                    },
                    shared.ELBInfo{
                        Name: sdk.String("Ollie Watsica"),
                    },
                },
                TargetGroupInfoList: []shared.TargetGroupInfo{
                    shared.TargetGroupInfo{
                        Name: sdk.String("Ervin McLaughlin"),
                    },
                    shared.TargetGroupInfo{
                        Name: sdk.String("Alex Luettgen"),
                    },
                    shared.TargetGroupInfo{
                        Name: sdk.String("Rosa Dibbert"),
                    },
                },
                TargetGroupPairInfoList: []shared.TargetGroupPairInfo{
                    shared.TargetGroupPairInfo{
                        ProdTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "voluptate",
                                "dignissimos",
                                "reiciendis",
                            },
                        },
                        TargetGroups: []shared.TargetGroupInfo{
                            shared.TargetGroupInfo{
                                Name: sdk.String("Mr. Bradley Bogan"),
                            },
                        },
                        TestTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "quaerat",
                                "accusamus",
                            },
                        },
                    },
                    shared.TargetGroupPairInfo{
                        ProdTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "voluptatibus",
                                "voluptas",
                                "natus",
                            },
                        },
                        TargetGroups: []shared.TargetGroupInfo{
                            shared.TargetGroupInfo{
                                Name: sdk.String("Miss Paul Steuber"),
                            },
                        },
                        TestTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "voluptate",
                                "dolorum",
                            },
                        },
                    },
                    shared.TargetGroupPairInfo{
                        ProdTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "omnis",
                                "necessitatibus",
                                "distinctio",
                            },
                        },
                        TargetGroups: []shared.TargetGroupInfo{
                            shared.TargetGroupInfo{
                                Name: sdk.String("Edna Klocko"),
                            },
                            shared.TargetGroupInfo{
                                Name: sdk.String("Judy Aufderhar"),
                            },
                            shared.TargetGroupInfo{
                                Name: sdk.String("Tommy Turner"),
                            },
                            shared.TargetGroupInfo{
                                Name: sdk.String("Derek Sipes"),
                            },
                        },
                        TestTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "at",
                            },
                        },
                    },
                },
            },
            OnPremisesInstanceTagFilters: []shared.TagFilter{
                shared.TagFilter{
                    Key: sdk.String("tempora"),
                    Type: shared.TagFilterTypeEnumValueOnly.ToPointer(),
                    Value: sdk.String("quod"),
                },
                shared.TagFilter{
                    Key: sdk.String("officiis"),
                    Type: shared.TagFilterTypeEnumKeyOnly.ToPointer(),
                    Value: sdk.String("dolorum"),
                },
            },
            OnPremisesTagSet: &shared.OnPremisesTagSet{
                OnPremisesTagSetList: [][]shared.TagFilter{
                    []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("harum"),
                            Type: shared.TagFilterTypeEnumValueOnly.ToPointer(),
                            Value: sdk.String("ipsum"),
                        },
                        shared.TagFilter{
                            Key: sdk.String("quisquam"),
                            Type: shared.TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("amet"),
                        },
                    },
                    []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("accusamus"),
                            Type: shared.TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("enim"),
                        },
                        shared.TagFilter{
                            Key: sdk.String("dolorem"),
                            Type: shared.TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("totam"),
                        },
                        shared.TagFilter{
                            Key: sdk.String("nihil"),
                            Type: shared.TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("expedita"),
                        },
                    },
                    []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("sed"),
                            Type: shared.TagFilterTypeEnumValueOnly.ToPointer(),
                            Value: sdk.String("libero"),
                        },
                    },
                    []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("deserunt"),
                            Type: shared.TagFilterTypeEnumValueOnly.ToPointer(),
                            Value: sdk.String("ipsum"),
                        },
                        shared.TagFilter{
                            Key: sdk.String("incidunt"),
                            Type: shared.TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("cupiditate"),
                        },
                    },
                },
            },
            OutdatedInstancesStrategy: shared.OutdatedInstancesStrategyEnumIgnore.ToPointer(),
            ServiceRoleArn: "pariatur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("dicta"),
                    Value: sdk.String("laborum"),
                },
                shared.Tag{
                    Key: sdk.String("totam"),
                    Value: sdk.String("incidunt"),
                },
                shared.Tag{
                    Key: sdk.String("aspernatur"),
                    Value: sdk.String("dolores"),
                },
            },
            TriggerConfigurations: []shared.TriggerConfig{
                shared.TriggerConfig{
                    TriggerEvents: []shared.TriggerEventTypeEnum{
                        shared.TriggerEventTypeEnumDeploymentStop,
                        shared.TriggerEventTypeEnumDeploymentRollback,
                        shared.TriggerEventTypeEnumDeploymentReady,
                    },
                    TriggerName: sdk.String("temporibus"),
                    TriggerTargetArn: sdk.String("qui"),
                },
                shared.TriggerConfig{
                    TriggerEvents: []shared.TriggerEventTypeEnum{
                        shared.TriggerEventTypeEnumDeploymentSuccess,
                    },
                    TriggerName: sdk.String("magni"),
                    TriggerTargetArn: sdk.String("odio"),
                },
                shared.TriggerConfig{
                    TriggerEvents: []shared.TriggerEventTypeEnum{
                        shared.TriggerEventTypeEnumDeploymentStop,
                    },
                    TriggerName: sdk.String("nam"),
                    TriggerTargetArn: sdk.String("hic"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.CreateDeploymentGroupXAmzTargetEnumCodeDeploy20141006CreateDeploymentGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentGroupOutput != nil {
        // handle response
    }
}
```

## DeleteApplication

Deletes an application.

### Example Usage

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        DeleteApplicationInput: shared.DeleteApplicationInput{
            ApplicationName: "veritatis",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DeleteApplicationXAmzTargetEnumCodeDeploy20141006DeleteApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeploymentConfig

<p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>

### Example Usage

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
    res, err := s.SDK.DeleteDeploymentConfig(ctx, operations.DeleteDeploymentConfigRequest{
        DeleteDeploymentConfigInput: shared.DeleteDeploymentConfigInput{
            DeploymentConfigName: "dolore",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.DeleteDeploymentConfigXAmzTargetEnumCodeDeploy20141006DeleteDeploymentConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeploymentGroup

Deletes a deployment group.

### Example Usage

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
    res, err := s.SDK.DeleteDeploymentGroup(ctx, operations.DeleteDeploymentGroupRequest{
        DeleteDeploymentGroupInput: shared.DeleteDeploymentGroupInput{
            ApplicationName: "itaque",
            DeploymentGroupName: "consequatur",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.DeleteDeploymentGroupXAmzTargetEnumCodeDeploy20141006DeleteDeploymentGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDeploymentGroupOutput != nil {
        // handle response
    }
}
```

## DeleteGitHubAccountToken

Deletes a GitHub account connection.

### Example Usage

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
    res, err := s.SDK.DeleteGitHubAccountToken(ctx, operations.DeleteGitHubAccountTokenRequest{
        DeleteGitHubAccountTokenInput: shared.DeleteGitHubAccountTokenInput{
            TokenName: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeleteGitHubAccountTokenXAmzTargetEnumCodeDeploy20141006DeleteGitHubAccountToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGitHubAccountTokenOutput != nil {
        // handle response
    }
}
```

## DeleteResourcesByExternalID

Deletes resources linked to an external ID.

### Example Usage

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
    res, err := s.SDK.DeleteResourcesByExternalID(ctx, operations.DeleteResourcesByExternalIDRequest{
        DeleteResourcesByExternalIDInput: shared.DeleteResourcesByExternalIDInput{
            ExternalID: sdk.String("omnis"),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.DeleteResourcesByExternalIDXAmzTargetEnumCodeDeploy20141006DeleteResourcesByExternalID,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcesByExternalIDOutput != nil {
        // handle response
    }
}
```

## DeregisterOnPremisesInstance

Deregisters an on-premises instance.

### Example Usage

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
    res, err := s.SDK.DeregisterOnPremisesInstance(ctx, operations.DeregisterOnPremisesInstanceRequest{
        DeregisterOnPremisesInstanceInput: shared.DeregisterOnPremisesInstanceInput{
            InstanceName: "dignissimos",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeregisterOnPremisesInstanceXAmzTargetEnumCodeDeploy20141006DeregisterOnPremisesInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetApplication

Gets information about an application.

### Example Usage

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
    res, err := s.SDK.GetApplication(ctx, operations.GetApplicationRequest{
        GetApplicationInput: shared.GetApplicationInput{
            ApplicationName: "ducimus",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.GetApplicationXAmzTargetEnumCodeDeploy20141006GetApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationOutput != nil {
        // handle response
    }
}
```

## GetApplicationRevision

Gets information about an application revision.

### Example Usage

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
    res, err := s.SDK.GetApplicationRevision(ctx, operations.GetApplicationRevisionRequest{
        GetApplicationRevisionInput: shared.GetApplicationRevisionInput{
            ApplicationName: "voluptatibus",
            Revision: shared.RevisionLocation{
                AppSpecContent: &shared.AppSpecContent{
                    Content: sdk.String("exercitationem"),
                    Sha256: sdk.String("nulla"),
                },
                GitHubLocation: &shared.GitHubLocation{
                    CommitID: sdk.String("fugit"),
                    Repository: sdk.String("porro"),
                },
                RevisionType: shared.RevisionLocationTypeEnumAppSpecContent.ToPointer(),
                S3Location: &shared.S3Location{
                    Bucket: sdk.String("doloribus"),
                    BundleType: shared.BundleTypeEnumZip.ToPointer(),
                    ETag: sdk.String("eligendi"),
                    Key: sdk.String("ducimus"),
                    Version: sdk.String("alias"),
                },
                String: &shared.RawString{
                    Content: sdk.String("officia"),
                    Sha256: sdk.String("tempora"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("ratione"),
        XAmzTarget: operations.GetApplicationRevisionXAmzTargetEnumCodeDeploy20141006GetApplicationRevision,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationRevisionOutput != nil {
        // handle response
    }
}
```

## GetDeployment

<p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>

### Example Usage

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
    res, err := s.SDK.GetDeployment(ctx, operations.GetDeploymentRequest{
        GetDeploymentInput: shared.GetDeploymentInput{
            DeploymentID: "ex",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.GetDeploymentXAmzTargetEnumCodeDeploy20141006GetDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentOutput != nil {
        // handle response
    }
}
```

## GetDeploymentConfig

Gets information about a deployment configuration.

### Example Usage

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
    res, err := s.SDK.GetDeploymentConfig(ctx, operations.GetDeploymentConfigRequest{
        GetDeploymentConfigInput: shared.GetDeploymentConfigInput{
            DeploymentConfigName: "excepturi",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.GetDeploymentConfigXAmzTargetEnumCodeDeploy20141006GetDeploymentConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentConfigOutput != nil {
        // handle response
    }
}
```

## GetDeploymentGroup

Gets information about a deployment group.

### Example Usage

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
    res, err := s.SDK.GetDeploymentGroup(ctx, operations.GetDeploymentGroupRequest{
        GetDeploymentGroupInput: shared.GetDeploymentGroupInput{
            ApplicationName: "corporis",
            DeploymentGroupName: "veniam",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.GetDeploymentGroupXAmzTargetEnumCodeDeploy20141006GetDeploymentGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentGroupOutput != nil {
        // handle response
    }
}
```

## ~~GetDeploymentInstance~~

Gets information about an instance as part of a deployment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

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
    res, err := s.SDK.GetDeploymentInstance(ctx, operations.GetDeploymentInstanceRequest{
        GetDeploymentInstanceInput: shared.GetDeploymentInstanceInput{
            DeploymentID: "aspernatur",
            InstanceID: "minima",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.GetDeploymentInstanceXAmzTargetEnumCodeDeploy20141006GetDeploymentInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentInstanceOutput != nil {
        // handle response
    }
}
```

## GetDeploymentTarget

 Returns information about a deployment target. 

### Example Usage

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
    res, err := s.SDK.GetDeploymentTarget(ctx, operations.GetDeploymentTargetRequest{
        GetDeploymentTargetInput: shared.GetDeploymentTargetInput{
            DeploymentID: sdk.String("aliquam"),
            TargetID: sdk.String("fugit"),
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.GetDeploymentTargetXAmzTargetEnumCodeDeploy20141006GetDeploymentTarget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentTargetOutput != nil {
        // handle response
    }
}
```

## GetOnPremisesInstance

 Gets information about an on-premises instance. 

### Example Usage

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
    res, err := s.SDK.GetOnPremisesInstance(ctx, operations.GetOnPremisesInstanceRequest{
        GetOnPremisesInstanceInput: shared.GetOnPremisesInstanceInput{
            InstanceName: "velit",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.GetOnPremisesInstanceXAmzTargetEnumCodeDeploy20141006GetOnPremisesInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOnPremisesInstanceOutput != nil {
        // handle response
    }
}
```

## ListApplicationRevisions

Lists information about revisions for an application.

### Example Usage

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
    res, err := s.SDK.ListApplicationRevisions(ctx, operations.ListApplicationRevisionsRequest{
        ListApplicationRevisionsInput: shared.ListApplicationRevisionsInput{
            ApplicationName: "libero",
            Deployed: shared.ListStateFilterActionEnumInclude.ToPointer(),
            NextToken: sdk.String("tempora"),
            S3Bucket: sdk.String("numquam"),
            S3KeyPrefix: sdk.String("explicabo"),
            SortBy: shared.ApplicationRevisionSortByEnumFirstUsedTime.ToPointer(),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.ListApplicationRevisionsXAmzTargetEnumCodeDeploy20141006ListApplicationRevisions,
        NextToken: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationRevisionsOutput != nil {
        // handle response
    }
}
```

## ListApplications

Lists the applications registered with the IAM user or Amazon Web Services account.

### Example Usage

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
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        ListApplicationsInput: shared.ListApplicationsInput{
            NextToken: sdk.String("reprehenderit"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.ListApplicationsXAmzTargetEnumCodeDeploy20141006ListApplications,
        NextToken: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsOutput != nil {
        // handle response
    }
}
```

## ListDeploymentConfigs

Lists the deployment configurations with the IAM user or Amazon Web Services account.

### Example Usage

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
    res, err := s.SDK.ListDeploymentConfigs(ctx, operations.ListDeploymentConfigsRequest{
        ListDeploymentConfigsInput: shared.ListDeploymentConfigsInput{
            NextToken: sdk.String("quisquam"),
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.ListDeploymentConfigsXAmzTargetEnumCodeDeploy20141006ListDeploymentConfigs,
        NextToken: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentConfigsOutput != nil {
        // handle response
    }
}
```

## ListDeploymentGroups

Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.

### Example Usage

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
    res, err := s.SDK.ListDeploymentGroups(ctx, operations.ListDeploymentGroupsRequest{
        ListDeploymentGroupsInput: shared.ListDeploymentGroupsInput{
            ApplicationName: "fuga",
            NextToken: sdk.String("eius"),
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.ListDeploymentGroupsXAmzTargetEnumCodeDeploy20141006ListDeploymentGroups,
        NextToken: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentGroupsOutput != nil {
        // handle response
    }
}
```

## ~~ListDeploymentInstances~~

<note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

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
    res, err := s.SDK.ListDeploymentInstances(ctx, operations.ListDeploymentInstancesRequest{
        ListDeploymentInstancesInput: shared.ListDeploymentInstancesInput{
            DeploymentID: "aspernatur",
            InstanceStatusFilter: []shared.InstanceStatusEnum{
                shared.InstanceStatusEnumUnknown,
            },
            InstanceTypeFilter: []shared.InstanceTypeEnum{
                shared.InstanceTypeEnumGreen,
                shared.InstanceTypeEnumBlue,
            },
            NextToken: sdk.String("distinctio"),
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.ListDeploymentInstancesXAmzTargetEnumCodeDeploy20141006ListDeploymentInstances,
        NextToken: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentInstancesOutput != nil {
        // handle response
    }
}
```

## ListDeploymentTargets

 Returns an array of target IDs that are associated a deployment. 

### Example Usage

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
    res, err := s.SDK.ListDeploymentTargets(ctx, operations.ListDeploymentTargetsRequest{
        ListDeploymentTargetsInput: shared.ListDeploymentTargetsInput{
            DeploymentID: sdk.String("occaecati"),
            NextToken: sdk.String("commodi"),
            TargetFilters: map[string][]string{
                "dolores": []string{
                    "molestiae",
                    "accusantium",
                    "porro",
                },
                "eum": []string{
                    "praesentium",
                    "consequuntur",
                    "deleniti",
                },
                "fugit": []string{
                    "mollitia",
                    "incidunt",
                    "atque",
                },
                "explicabo": []string{
                    "nisi",
                    "fugit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.ListDeploymentTargetsXAmzTargetEnumCodeDeploy20141006ListDeploymentTargets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentTargetsOutput != nil {
        // handle response
    }
}
```

## ListDeployments

Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDeployments(ctx, operations.ListDeploymentsRequest{
        ListDeploymentsInput: shared.ListDeploymentsInput{
            ApplicationName: sdk.String("et"),
            CreateTimeRange: &shared.TimeRange{
                End: types.MustTimeFromString("2022-02-02T15:37:41.657Z"),
                Start: types.MustTimeFromString("2022-10-02T03:30:08.260Z"),
            },
            DeploymentGroupName: sdk.String("esse"),
            ExternalID: sdk.String("quod"),
            IncludeOnlyStatuses: []shared.DeploymentStatusEnum{
                shared.DeploymentStatusEnumReady,
                shared.DeploymentStatusEnumBaking,
                shared.DeploymentStatusEnumCreated,
            },
            NextToken: sdk.String("saepe"),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListDeploymentsXAmzTargetEnumCodeDeploy20141006ListDeployments,
        NextToken: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentsOutput != nil {
        // handle response
    }
}
```

## ListGitHubAccountTokenNames

Lists the names of stored connections to GitHub accounts.

### Example Usage

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
    res, err := s.SDK.ListGitHubAccountTokenNames(ctx, operations.ListGitHubAccountTokenNamesRequest{
        ListGitHubAccountTokenNamesInput: shared.ListGitHubAccountTokenNamesInput{
            NextToken: sdk.String("sit"),
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.ListGitHubAccountTokenNamesXAmzTargetEnumCodeDeploy20141006ListGitHubAccountTokenNames,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGitHubAccountTokenNamesOutput != nil {
        // handle response
    }
}
```

## ListOnPremisesInstances

<p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>

### Example Usage

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
    res, err := s.SDK.ListOnPremisesInstances(ctx, operations.ListOnPremisesInstancesRequest{
        ListOnPremisesInstancesInput: shared.ListOnPremisesInstancesInput{
            NextToken: sdk.String("quaerat"),
            RegistrationStatus: shared.RegistrationStatusEnumDeregistered.ToPointer(),
            TagFilters: []shared.TagFilter{
                shared.TagFilter{
                    Key: sdk.String("esse"),
                    Type: shared.TagFilterTypeEnumValueOnly.ToPointer(),
                    Value: sdk.String("provident"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ListOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006ListOnPremisesInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOnPremisesInstancesOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

 Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            NextToken: sdk.String("sint"),
            ResourceArn: "pariatur",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumCodeDeploy20141006ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## PutLifecycleEventHookExecutionStatus

 Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.

### Example Usage

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
    res, err := s.SDK.PutLifecycleEventHookExecutionStatus(ctx, operations.PutLifecycleEventHookExecutionStatusRequest{
        PutLifecycleEventHookExecutionStatusInput: shared.PutLifecycleEventHookExecutionStatusInput{
            DeploymentID: sdk.String("quasi"),
            LifecycleEventHookExecutionID: sdk.String("similique"),
            Status: shared.LifecycleEventStatusEnumFailed.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.PutLifecycleEventHookExecutionStatusXAmzTargetEnumCodeDeploy20141006PutLifecycleEventHookExecutionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutLifecycleEventHookExecutionStatusOutput != nil {
        // handle response
    }
}
```

## RegisterApplicationRevision

Registers with CodeDeploy a revision for the specified application.

### Example Usage

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
    res, err := s.SDK.RegisterApplicationRevision(ctx, operations.RegisterApplicationRevisionRequest{
        RegisterApplicationRevisionInput: shared.RegisterApplicationRevisionInput{
            ApplicationName: "libero",
            Description: sdk.String("illum"),
            Revision: shared.RevisionLocation{
                AppSpecContent: &shared.AppSpecContent{
                    Content: sdk.String("soluta"),
                    Sha256: sdk.String("accusantium"),
                },
                GitHubLocation: &shared.GitHubLocation{
                    CommitID: sdk.String("aliquam"),
                    Repository: sdk.String("sapiente"),
                },
                RevisionType: shared.RevisionLocationTypeEnumS3.ToPointer(),
                S3Location: &shared.S3Location{
                    Bucket: sdk.String("ullam"),
                    BundleType: shared.BundleTypeEnumZip.ToPointer(),
                    ETag: sdk.String("ullam"),
                    Key: sdk.String("nisi"),
                    Version: sdk.String("aut"),
                },
                String: &shared.RawString{
                    Content: sdk.String("voluptatum"),
                    Sha256: sdk.String("qui"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.RegisterApplicationRevisionXAmzTargetEnumCodeDeploy20141006RegisterApplicationRevision,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegisterOnPremisesInstance

<p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>

### Example Usage

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
    res, err := s.SDK.RegisterOnPremisesInstance(ctx, operations.RegisterOnPremisesInstanceRequest{
        RegisterOnPremisesInstanceInput: shared.RegisterOnPremisesInstanceInput{
            IamSessionArn: sdk.String("tenetur"),
            IamUserArn: sdk.String("quasi"),
            InstanceName: "at",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.RegisterOnPremisesInstanceXAmzTargetEnumCodeDeploy20141006RegisterOnPremisesInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveTagsFromOnPremisesInstances

Removes one or more tags from one or more on-premises instances.

### Example Usage

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
    res, err := s.SDK.RemoveTagsFromOnPremisesInstances(ctx, operations.RemoveTagsFromOnPremisesInstancesRequest{
        RemoveTagsFromOnPremisesInstancesInput: shared.RemoveTagsFromOnPremisesInstancesInput{
            InstanceNames: []string{
                "temporibus",
                "accusantium",
                "rem",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("laudantium"),
                    Value: sdk.String("eum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.RemoveTagsFromOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006RemoveTagsFromOnPremisesInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~SkipWaitTimeForInstanceTermination~~

In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

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
    res, err := s.SDK.SkipWaitTimeForInstanceTermination(ctx, operations.SkipWaitTimeForInstanceTerminationRequest{
        SkipWaitTimeForInstanceTerminationInput: shared.SkipWaitTimeForInstanceTerminationInput{
            DeploymentID: sdk.String("numquam"),
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.SkipWaitTimeForInstanceTerminationXAmzTargetEnumCodeDeploy20141006SkipWaitTimeForInstanceTermination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopDeployment

Attempts to stop an ongoing deployment.

### Example Usage

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
    res, err := s.SDK.StopDeployment(ctx, operations.StopDeploymentRequest{
        StopDeploymentInput: shared.StopDeploymentInput{
            AutoRollbackEnabled: sdk.Bool(false),
            DeploymentID: "natus",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.StopDeploymentXAmzTargetEnumCodeDeploy20141006StopDeployment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopDeploymentOutput != nil {
        // handle response
    }
}
```

## TagResource

 Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceArn: "consequuntur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("officia"),
                    Value: sdk.String("maxime"),
                },
                shared.Tag{
                    Key: sdk.String("dignissimos"),
                    Value: sdk.String("officia"),
                },
                shared.Tag{
                    Key: sdk.String("asperiores"),
                    Value: sdk.String("nemo"),
                },
                shared.Tag{
                    Key: sdk.String("quae"),
                    Value: sdk.String("quaerat"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumCodeDeploy20141006TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## UntagResource

 Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceArn: "suscipit",
            TagKeys: []string{
                "culpa",
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumCodeDeploy20141006UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateApplication

Changes the name of an application.

### Example Usage

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        UpdateApplicationInput: shared.UpdateApplicationInput{
            ApplicationName: sdk.String("vel"),
            NewApplicationName: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateApplicationXAmzTargetEnumCodeDeploy20141006UpdateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDeploymentGroup

Changes information about a deployment group.

### Example Usage

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
    res, err := s.SDK.UpdateDeploymentGroup(ctx, operations.UpdateDeploymentGroupRequest{
        UpdateDeploymentGroupInput: shared.UpdateDeploymentGroupInput{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: sdk.String("Miss Sophie Jacobi"),
                    },
                    shared.Alarm{
                        Name: sdk.String("Annette Wehner"),
                    },
                    shared.Alarm{
                        Name: sdk.String("Ricardo Wisozk"),
                    },
                    shared.Alarm{
                        Name: sdk.String("Clifford Cartwright"),
                    },
                },
                Enabled: sdk.Bool(false),
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            ApplicationName: "non",
            AutoRollbackConfiguration: &shared.AutoRollbackConfiguration{
                Enabled: sdk.Bool(false),
                Events: []shared.AutoRollbackEventEnum{
                    shared.AutoRollbackEventEnumDeploymentFailure,
                },
            },
            AutoScalingGroups: []string{
                "a",
                "debitis",
            },
            BlueGreenDeploymentConfiguration: &shared.BlueGreenDeploymentConfiguration{
                DeploymentReadyOption: &shared.DeploymentReadyOption{
                    ActionOnTimeout: shared.DeploymentReadyActionEnumContinueDeployment.ToPointer(),
                    WaitTimeInMinutes: sdk.Int64(358107),
                },
                GreenFleetProvisioningOption: &shared.GreenFleetProvisioningOption{
                    Action: shared.GreenFleetProvisioningActionEnumCopyAutoScalingGroup.ToPointer(),
                },
                TerminateBlueInstancesOnDeploymentSuccess: &shared.BlueInstanceTerminationOption{
                    Action: shared.InstanceActionEnumTerminate.ToPointer(),
                    TerminationWaitTimeInMinutes: sdk.Int64(58356),
                },
            },
            CurrentDeploymentGroupName: "voluptates",
            DeploymentConfigName: sdk.String("libero"),
            DeploymentStyle: &shared.DeploymentStyle{
                DeploymentOption: shared.DeploymentOptionEnumWithTrafficControl.ToPointer(),
                DeploymentType: shared.DeploymentTypeEnumBlueGreen.ToPointer(),
            },
            Ec2TagFilters: []shared.Ec2TagFilter{
                shared.Ec2TagFilter{
                    Key: sdk.String("tempora"),
                    Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                    Value: sdk.String("voluptas"),
                },
                shared.Ec2TagFilter{
                    Key: sdk.String("voluptas"),
                    Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                    Value: sdk.String("minima"),
                },
                shared.Ec2TagFilter{
                    Key: sdk.String("nobis"),
                    Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                    Value: sdk.String("adipisci"),
                },
            },
            Ec2TagSet: &shared.Ec2TagSet{
                Ec2TagSetList: [][]shared.Ec2TagFilter{
                    []shared.Ec2TagFilter{
                        shared.Ec2TagFilter{
                            Key: sdk.String("blanditiis"),
                            Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                            Value: sdk.String("dolore"),
                        },
                    },
                    []shared.Ec2TagFilter{
                        shared.Ec2TagFilter{
                            Key: sdk.String("officiis"),
                            Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("ullam"),
                        },
                        shared.Ec2TagFilter{
                            Key: sdk.String("adipisci"),
                            Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("blanditiis"),
                        },
                    },
                    []shared.Ec2TagFilter{
                        shared.Ec2TagFilter{
                            Key: sdk.String("hic"),
                            Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("culpa"),
                        },
                        shared.Ec2TagFilter{
                            Key: sdk.String("corrupti"),
                            Type: shared.Ec2TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("totam"),
                        },
                        shared.Ec2TagFilter{
                            Key: sdk.String("hic"),
                            Type: shared.Ec2TagFilterTypeEnumValueOnly.ToPointer(),
                            Value: sdk.String("nobis"),
                        },
                    },
                    []shared.Ec2TagFilter{
                        shared.Ec2TagFilter{
                            Key: sdk.String("rerum"),
                            Type: shared.Ec2TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("reiciendis"),
                        },
                    },
                },
            },
            EcsServices: []shared.ECSService{
                shared.ECSService{
                    ClusterName: sdk.String("asperiores"),
                    ServiceName: sdk.String("facilis"),
                },
            },
            LoadBalancerInfo: &shared.LoadBalancerInfo{
                ElbInfoList: []shared.ELBInfo{
                    shared.ELBInfo{
                        Name: sdk.String("Raymond Moore"),
                    },
                    shared.ELBInfo{
                        Name: sdk.String("Pearl Johnson"),
                    },
                },
                TargetGroupInfoList: []shared.TargetGroupInfo{
                    shared.TargetGroupInfo{
                        Name: sdk.String("Joe Hoppe"),
                    },
                    shared.TargetGroupInfo{
                        Name: sdk.String("Faith Aufderhar"),
                    },
                },
                TargetGroupPairInfoList: []shared.TargetGroupPairInfo{
                    shared.TargetGroupPairInfo{
                        ProdTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "provident",
                            },
                        },
                        TargetGroups: []shared.TargetGroupInfo{
                            shared.TargetGroupInfo{
                                Name: sdk.String("Nathan Jaskolski"),
                            },
                            shared.TargetGroupInfo{
                                Name: sdk.String("Eddie Goodwin"),
                            },
                        },
                        TestTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "sit",
                                "non",
                            },
                        },
                    },
                    shared.TargetGroupPairInfo{
                        ProdTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "praesentium",
                                "facilis",
                                "quaerat",
                                "incidunt",
                            },
                        },
                        TargetGroups: []shared.TargetGroupInfo{
                            shared.TargetGroupInfo{
                                Name: sdk.String("Ian Balistreri"),
                            },
                            shared.TargetGroupInfo{
                                Name: sdk.String("Lorraine Walsh"),
                            },
                        },
                        TestTrafficRoute: &shared.TrafficRoute{
                            ListenerArns: []string{
                                "aperiam",
                            },
                        },
                    },
                },
            },
            NewDeploymentGroupName: sdk.String("saepe"),
            OnPremisesInstanceTagFilters: []shared.TagFilter{
                shared.TagFilter{
                    Key: sdk.String("veniam"),
                    Type: shared.TagFilterTypeEnumValueOnly.ToPointer(),
                    Value: sdk.String("officiis"),
                },
                shared.TagFilter{
                    Key: sdk.String("beatae"),
                    Type: shared.TagFilterTypeEnumValueOnly.ToPointer(),
                    Value: sdk.String("exercitationem"),
                },
            },
            OnPremisesTagSet: &shared.OnPremisesTagSet{
                OnPremisesTagSetList: [][]shared.TagFilter{
                    []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("laboriosam"),
                            Type: shared.TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("voluptatum"),
                        },
                        shared.TagFilter{
                            Key: sdk.String("error"),
                            Type: shared.TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("expedita"),
                        },
                        shared.TagFilter{
                            Key: sdk.String("debitis"),
                            Type: shared.TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("dolorum"),
                        },
                    },
                    []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("officia"),
                            Type: shared.TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("corrupti"),
                        },
                        shared.TagFilter{
                            Key: sdk.String("accusamus"),
                            Type: shared.TagFilterTypeEnumKeyOnly.ToPointer(),
                            Value: sdk.String("atque"),
                        },
                    },
                    []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("ut"),
                            Type: shared.TagFilterTypeEnumKeyAndValue.ToPointer(),
                            Value: sdk.String("voluptatem"),
                        },
                    },
                },
            },
            OutdatedInstancesStrategy: shared.OutdatedInstancesStrategyEnumIgnore.ToPointer(),
            ServiceRoleArn: sdk.String("expedita"),
            TriggerConfigurations: []shared.TriggerConfig{
                shared.TriggerConfig{
                    TriggerEvents: []shared.TriggerEventTypeEnum{
                        shared.TriggerEventTypeEnumDeploymentRollback,
                    },
                    TriggerName: sdk.String("ipsam"),
                    TriggerTargetArn: sdk.String("sit"),
                },
                shared.TriggerConfig{
                    TriggerEvents: []shared.TriggerEventTypeEnum{
                        shared.TriggerEventTypeEnumDeploymentReady,
                        shared.TriggerEventTypeEnumInstanceReady,
                        shared.TriggerEventTypeEnumDeploymentStop,
                    },
                    TriggerName: sdk.String("et"),
                    TriggerTargetArn: sdk.String("blanditiis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.UpdateDeploymentGroupXAmzTargetEnumCodeDeploy20141006UpdateDeploymentGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeploymentGroupOutput != nil {
        // handle response
    }
}
```
