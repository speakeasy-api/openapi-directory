# SDK

## Overview

<p>CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless Lambda functions, or applications in an Amazon ECS service.</p> <p>You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use CodeDeploy.</p> <p>CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.</p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content—source code, webpages, executable files, and deployment scripts—along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.</p> <p> <b>CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codedeploy/>
### Available Operations

* [addTagsToOnPremisesInstances](#addtagstoonpremisesinstances) - Adds tags to on-premises instances.
* [batchGetApplicationRevisions](#batchgetapplicationrevisions) - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
* [batchGetApplications](#batchgetapplications) - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
* [batchGetDeploymentGroups](#batchgetdeploymentgroups) - Gets information about one or more deployment groups.
* [~~batchGetDeploymentInstances~~](#batchgetdeploymentinstances) - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p> :warning: **Deprecated**
* [batchGetDeploymentTargets](#batchgetdeploymenttargets) - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
* [batchGetDeployments](#batchgetdeployments) - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
* [batchGetOnPremisesInstances](#batchgetonpremisesinstances) - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
* [continueDeployment](#continuedeployment) - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
* [createApplication](#createapplication) - Creates an application.
* [createDeployment](#createdeployment) - Deploys an application revision through the specified deployment group.
* [createDeploymentConfig](#createdeploymentconfig) -  Creates a deployment configuration. 
* [createDeploymentGroup](#createdeploymentgroup) - Creates a deployment group to which application revisions are deployed.
* [deleteApplication](#deleteapplication) - Deletes an application.
* [deleteDeploymentConfig](#deletedeploymentconfig) - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
* [deleteDeploymentGroup](#deletedeploymentgroup) - Deletes a deployment group.
* [deleteGitHubAccountToken](#deletegithubaccounttoken) - Deletes a GitHub account connection.
* [deleteResourcesByExternalId](#deleteresourcesbyexternalid) - Deletes resources linked to an external ID.
* [deregisterOnPremisesInstance](#deregisteronpremisesinstance) - Deregisters an on-premises instance.
* [getApplication](#getapplication) - Gets information about an application.
* [getApplicationRevision](#getapplicationrevision) - Gets information about an application revision.
* [getDeployment](#getdeployment) - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
* [getDeploymentConfig](#getdeploymentconfig) - Gets information about a deployment configuration.
* [getDeploymentGroup](#getdeploymentgroup) - Gets information about a deployment group.
* [~~getDeploymentInstance~~](#getdeploymentinstance) - Gets information about an instance as part of a deployment. :warning: **Deprecated**
* [getDeploymentTarget](#getdeploymenttarget) -  Returns information about a deployment target. 
* [getOnPremisesInstance](#getonpremisesinstance) -  Gets information about an on-premises instance. 
* [listApplicationRevisions](#listapplicationrevisions) - Lists information about revisions for an application.
* [listApplications](#listapplications) - Lists the applications registered with the IAM user or Amazon Web Services account.
* [listDeploymentConfigs](#listdeploymentconfigs) - Lists the deployment configurations with the IAM user or Amazon Web Services account.
* [listDeploymentGroups](#listdeploymentgroups) - Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.
* [~~listDeploymentInstances~~](#listdeploymentinstances) - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p> :warning: **Deprecated**
* [listDeploymentTargets](#listdeploymenttargets) -  Returns an array of target IDs that are associated a deployment. 
* [listDeployments](#listdeployments) - Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.
* [listGitHubAccountTokenNames](#listgithubaccounttokennames) - Lists the names of stored connections to GitHub accounts.
* [listOnPremisesInstances](#listonpremisesinstances) - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
* [listTagsForResource](#listtagsforresource) -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 
* [putLifecycleEventHookExecutionStatus](#putlifecycleeventhookexecutionstatus) -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
* [registerApplicationRevision](#registerapplicationrevision) - Registers with CodeDeploy a revision for the specified application.
* [registerOnPremisesInstance](#registeronpremisesinstance) - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
* [removeTagsFromOnPremisesInstances](#removetagsfromonpremisesinstances) - Removes one or more tags from one or more on-premises instances.
* [~~skipWaitTimeForInstanceTermination~~](#skipwaittimeforinstancetermination) - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete. :warning: **Deprecated**
* [stopDeployment](#stopdeployment) - Attempts to stop an ongoing deployment.
* [tagResource](#tagresource) -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 
* [untagResource](#untagresource) -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 
* [updateApplication](#updateapplication) - Changes the name of an application.
* [updateDeploymentGroup](#updatedeploymentgroup) - Changes information about a deployment group.

## addTagsToOnPremisesInstances

Adds tags to on-premises instances.

### Example Usage

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
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToOnPremisesInstancesRequest req = new AddTagsToOnPremisesInstancesRequest(                new AddTagsToOnPremisesInstancesInput(                new String[]{{
                                                add("iusto"),
                                                add("excepturi"),
                                                add("nisi"),
                                            }},                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "temporibus";
                                                    value = "ab";
                                                }}),
                                                add(new Tag() {{
                                                    key = "quis";
                                                    value = "veritatis";
                                                }}),
                                                add(new Tag() {{
                                                    key = "deserunt";
                                                    value = "perferendis";
                                                }}),
                                                add(new Tag() {{
                                                    key = "ipsam";
                                                    value = "repellendus";
                                                }}),
                                            }});, AddTagsToOnPremisesInstancesXAmzTargetEnum.CODE_DEPLOY20141006_ADD_TAGS_TO_ON_PREMISES_INSTANCES) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            AddTagsToOnPremisesInstancesResponse res = sdk.sdk.addTagsToOnPremisesInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetApplicationRevisions

Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetApplicationRevisionsRequest;
import org.openapis.openapi.models.operations.BatchGetApplicationRevisionsResponse;
import org.openapis.openapi.models.operations.BatchGetApplicationRevisionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppSpecContent;
import org.openapis.openapi.models.shared.BatchGetApplicationRevisionsInput;
import org.openapis.openapi.models.shared.BundleTypeEnum;
import org.openapis.openapi.models.shared.GitHubLocation;
import org.openapis.openapi.models.shared.RawString;
import org.openapis.openapi.models.shared.RevisionLocation;
import org.openapis.openapi.models.shared.RevisionLocationTypeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetApplicationRevisionsRequest req = new BatchGetApplicationRevisionsRequest(                new BatchGetApplicationRevisionsInput("quod",                 new org.openapis.openapi.models.shared.RevisionLocation[]{{
                                                add(new RevisionLocation() {{
                                                    appSpecContent = new AppSpecContent() {{
                                                        content = "totam";
                                                        sha256 = "porro";
                                                    }};
                                                    gitHubLocation = new GitHubLocation() {{
                                                        commitId = "dolorum";
                                                        repository = "dicta";
                                                    }};
                                                    revisionType = RevisionLocationTypeEnum.STRING;
                                                    s3Location = new S3Location() {{
                                                        bucket = "officia";
                                                        bundleType = BundleTypeEnum.ZIP;
                                                        eTag = "fugit";
                                                        key = "deleniti";
                                                        version = "hic";
                                                    }};
                                                    string = new RawString() {{
                                                        content = "optio";
                                                        sha256 = "totam";
                                                    }};
                                                }}),
                                                add(new RevisionLocation() {{
                                                    appSpecContent = new AppSpecContent() {{
                                                        content = "beatae";
                                                        sha256 = "commodi";
                                                    }};
                                                    gitHubLocation = new GitHubLocation() {{
                                                        commitId = "molestiae";
                                                        repository = "modi";
                                                    }};
                                                    revisionType = RevisionLocationTypeEnum.S3;
                                                    s3Location = new S3Location() {{
                                                        bucket = "impedit";
                                                        bundleType = BundleTypeEnum.YAML;
                                                        eTag = "esse";
                                                        key = "ipsum";
                                                        version = "excepturi";
                                                    }};
                                                    string = new RawString() {{
                                                        content = "aspernatur";
                                                        sha256 = "perferendis";
                                                    }};
                                                }}),
                                            }});, BatchGetApplicationRevisionsXAmzTargetEnum.CODE_DEPLOY20141006_BATCH_GET_APPLICATION_REVISIONS) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            BatchGetApplicationRevisionsResponse res = sdk.sdk.batchGetApplicationRevisions(req);

            if (res.batchGetApplicationRevisionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetApplications

Gets information about one or more applications. The maximum number of applications that can be returned is 100.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetApplicationsRequest;
import org.openapis.openapi.models.operations.BatchGetApplicationsResponse;
import org.openapis.openapi.models.operations.BatchGetApplicationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetApplicationsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetApplicationsRequest req = new BatchGetApplicationsRequest(                new BatchGetApplicationsInput(                new String[]{{
                                                add("fuga"),
                                                add("in"),
                                                add("corporis"),
                                                add("iste"),
                                            }});, BatchGetApplicationsXAmzTargetEnum.CODE_DEPLOY20141006_BATCH_GET_APPLICATIONS) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            BatchGetApplicationsResponse res = sdk.sdk.batchGetApplications(req);

            if (res.batchGetApplicationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetDeploymentGroups

Gets information about one or more deployment groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetDeploymentGroupsRequest;
import org.openapis.openapi.models.operations.BatchGetDeploymentGroupsResponse;
import org.openapis.openapi.models.operations.BatchGetDeploymentGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetDeploymentGroupsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetDeploymentGroupsRequest req = new BatchGetDeploymentGroupsRequest(                new BatchGetDeploymentGroupsInput("laborum",                 new String[]{{
                                                add("dolorem"),
                                            }});, BatchGetDeploymentGroupsXAmzTargetEnum.CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENT_GROUPS) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            BatchGetDeploymentGroupsResponse res = sdk.sdk.batchGetDeploymentGroups(req);

            if (res.batchGetDeploymentGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~batchGetDeploymentInstances~~

<note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetDeploymentInstancesRequest;
import org.openapis.openapi.models.operations.BatchGetDeploymentInstancesResponse;
import org.openapis.openapi.models.operations.BatchGetDeploymentInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetDeploymentInstancesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetDeploymentInstancesRequest req = new BatchGetDeploymentInstancesRequest(                new BatchGetDeploymentInstancesInput("accusantium",                 new String[]{{
                                                add("culpa"),
                                                add("doloribus"),
                                            }});, BatchGetDeploymentInstancesXAmzTargetEnum.CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENT_INSTANCES) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            BatchGetDeploymentInstancesResponse res = sdk.sdk.batchGetDeploymentInstances(req);

            if (res.batchGetDeploymentInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetDeploymentTargets

<p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetDeploymentTargetsRequest;
import org.openapis.openapi.models.operations.BatchGetDeploymentTargetsResponse;
import org.openapis.openapi.models.operations.BatchGetDeploymentTargetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetDeploymentTargetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetDeploymentTargetsRequest req = new BatchGetDeploymentTargetsRequest(                new BatchGetDeploymentTargetsInput() {{
                                deploymentId = "occaecati";
                                targetIds = new String[]{{
                                    add("commodi"),
                                    add("quam"),
                                }};
                            }};, BatchGetDeploymentTargetsXAmzTargetEnum.CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENT_TARGETS) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            BatchGetDeploymentTargetsResponse res = sdk.sdk.batchGetDeploymentTargets(req);

            if (res.batchGetDeploymentTargetsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetDeployments

Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetDeploymentsRequest;
import org.openapis.openapi.models.operations.BatchGetDeploymentsResponse;
import org.openapis.openapi.models.operations.BatchGetDeploymentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetDeploymentsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetDeploymentsRequest req = new BatchGetDeploymentsRequest(                new BatchGetDeploymentsInput(                new String[]{{
                                                add("odit"),
                                                add("quo"),
                                            }});, BatchGetDeploymentsXAmzTargetEnum.CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENTS) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
            }};            

            BatchGetDeploymentsResponse res = sdk.sdk.batchGetDeployments(req);

            if (res.batchGetDeploymentsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetOnPremisesInstances

Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetOnPremisesInstancesRequest;
import org.openapis.openapi.models.operations.BatchGetOnPremisesInstancesResponse;
import org.openapis.openapi.models.operations.BatchGetOnPremisesInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetOnPremisesInstancesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetOnPremisesInstancesRequest req = new BatchGetOnPremisesInstancesRequest(                new BatchGetOnPremisesInstancesInput(                new String[]{{
                                                add("laborum"),
                                                add("quasi"),
                                                add("reiciendis"),
                                                add("voluptatibus"),
                                            }});, BatchGetOnPremisesInstancesXAmzTargetEnum.CODE_DEPLOY20141006_BATCH_GET_ON_PREMISES_INSTANCES) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            BatchGetOnPremisesInstancesResponse res = sdk.sdk.batchGetOnPremisesInstances(req);

            if (res.batchGetOnPremisesInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## continueDeployment

For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContinueDeploymentRequest;
import org.openapis.openapi.models.operations.ContinueDeploymentResponse;
import org.openapis.openapi.models.operations.ContinueDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContinueDeploymentInput;
import org.openapis.openapi.models.shared.DeploymentWaitTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ContinueDeploymentRequest req = new ContinueDeploymentRequest(                new ContinueDeploymentInput() {{
                                deploymentId = "perferendis";
                                deploymentWaitType = DeploymentWaitTypeEnum.READY_WAIT;
                            }};, ContinueDeploymentXAmzTargetEnum.CODE_DEPLOY20141006_CONTINUE_DEPLOYMENT) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            ContinueDeploymentResponse res = sdk.sdk.continueDeployment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Creates an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputePlatformEnum;
import org.openapis.openapi.models.shared.CreateApplicationInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationInput("harum") {{
                                computePlatform = ComputePlatformEnum.SERVER;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "commodi";
                                        value = "repudiandae";
                                    }}),
                                    add(new Tag() {{
                                        key = "quae";
                                        value = "ipsum";
                                    }}),
                                    add(new Tag() {{
                                        key = "quidem";
                                        value = "molestias";
                                    }}),
                                    add(new Tag() {{
                                        key = "excepturi";
                                        value = "pariatur";
                                    }}),
                                }};
                            }};, CreateApplicationXAmzTargetEnum.CODE_DEPLOY20141006_CREATE_APPLICATION) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

Deploys an application revision through the specified deployment group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.operations.CreateDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.AppSpecContent;
import org.openapis.openapi.models.shared.AutoRollbackConfiguration;
import org.openapis.openapi.models.shared.AutoRollbackEventEnum;
import org.openapis.openapi.models.shared.BundleTypeEnum;
import org.openapis.openapi.models.shared.CreateDeploymentInput;
import org.openapis.openapi.models.shared.Ec2TagFilter;
import org.openapis.openapi.models.shared.Ec2TagFilterTypeEnum;
import org.openapis.openapi.models.shared.Ec2TagSet;
import org.openapis.openapi.models.shared.FileExistsBehaviorEnum;
import org.openapis.openapi.models.shared.GitHubLocation;
import org.openapis.openapi.models.shared.RawString;
import org.openapis.openapi.models.shared.RevisionLocation;
import org.openapis.openapi.models.shared.RevisionLocationTypeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetInstances;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest(                new CreateDeploymentInput("itaque") {{
                                autoRollbackConfiguration = new AutoRollbackConfiguration() {{
                                    enabled = false;
                                    events = new org.openapis.openapi.models.shared.AutoRollbackEventEnum[]{{
                                        add(AutoRollbackEventEnum.DEPLOYMENT_FAILURE),
                                        add(AutoRollbackEventEnum.DEPLOYMENT_FAILURE),
                                    }};
                                }};;
                                deploymentConfigName = "est";
                                deploymentGroupName = "quibusdam";
                                description = "explicabo";
                                fileExistsBehavior = FileExistsBehaviorEnum.OVERWRITE;
                                ignoreApplicationStopFailures = false;
                                overrideAlarmConfiguration = new AlarmConfiguration() {{
                                    alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                        add(new Alarm() {{
                                            name = "Francisco Gleason";
                                        }}),
                                        add(new Alarm() {{
                                            name = "Isaac Aufderhar";
                                        }}),
                                        add(new Alarm() {{
                                            name = "Linda Corkery";
                                        }}),
                                    }};
                                    enabled = false;
                                    ignorePollAlarmFailure = false;
                                }};;
                                revision = new RevisionLocation() {{
                                    appSpecContent = new AppSpecContent() {{
                                        content = "tempora";
                                        sha256 = "facilis";
                                    }};;
                                    gitHubLocation = new GitHubLocation() {{
                                        commitId = "tempore";
                                        repository = "labore";
                                    }};;
                                    revisionType = RevisionLocationTypeEnum.APP_SPEC_CONTENT;
                                    s3Location = new S3Location() {{
                                        bucket = "eum";
                                        bundleType = BundleTypeEnum.TGZ;
                                        eTag = "eligendi";
                                        key = "sint";
                                        version = "aliquid";
                                    }};;
                                    string = new RawString() {{
                                        content = "provident";
                                        sha256 = "necessitatibus";
                                    }};;
                                }};;
                                targetInstances = new TargetInstances() {{
                                    autoScalingGroups = new String[]{{
                                        add("officia"),
                                        add("dolor"),
                                        add("debitis"),
                                    }};
                                    ec2TagSet = new Ec2TagSet() {{
                                        ec2TagSetList = new org.openapis.openapi.models.shared.Ec2TagFilter[][]{{
                                            add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                                add(new Ec2TagFilter() {{
                                                    key = "in";
                                                    type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                    value = "illum";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "maiores";
                                                    type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                    value = "dicta";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "magnam";
                                                    type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                    value = "facere";
                                                }}),
                                            }}),
                                            add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                                add(new Ec2TagFilter() {{
                                                    key = "aliquid";
                                                    type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                    value = "accusamus";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "non";
                                                    type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                    value = "enim";
                                                }}),
                                            }}),
                                            add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                                add(new Ec2TagFilter() {{
                                                    key = "delectus";
                                                    type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                    value = "provident";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "nam";
                                                    type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                    value = "blanditiis";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "deleniti";
                                                    type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                    value = "amet";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "deserunt";
                                                    type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                    value = "vel";
                                                }}),
                                            }}),
                                            add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                                add(new Ec2TagFilter() {{
                                                    key = "omnis";
                                                    type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                    value = "perferendis";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "nihil";
                                                    type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                                    value = "distinctio";
                                                }}),
                                                add(new Ec2TagFilter() {{
                                                    key = "id";
                                                    type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                                    value = "labore";
                                                }}),
                                            }}),
                                        }};
                                    }};;
                                    tagFilters = new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                        add(new Ec2TagFilter() {{
                                            key = "natus";
                                            type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                            value = "eum";
                                        }}),
                                        add(new Ec2TagFilter() {{
                                            key = "vero";
                                            type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                            value = "architecto";
                                        }}),
                                    }};
                                }};;
                                updateOutdatedInstancesOnly = false;
                            }};, CreateDeploymentXAmzTargetEnum.CODE_DEPLOY20141006_CREATE_DEPLOYMENT) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
            }};            

            CreateDeploymentResponse res = sdk.sdk.createDeployment(req);

            if (res.createDeploymentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeploymentConfig

 Creates a deployment configuration. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentConfigRequest;
import org.openapis.openapi.models.operations.CreateDeploymentConfigResponse;
import org.openapis.openapi.models.operations.CreateDeploymentConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputePlatformEnum;
import org.openapis.openapi.models.shared.CreateDeploymentConfigInput;
import org.openapis.openapi.models.shared.MinimumHealthyHosts;
import org.openapis.openapi.models.shared.MinimumHealthyHostsTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeBasedCanary;
import org.openapis.openapi.models.shared.TimeBasedLinear;
import org.openapis.openapi.models.shared.TrafficRoutingConfig;
import org.openapis.openapi.models.shared.TrafficRoutingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentConfigRequest req = new CreateDeploymentConfigRequest(                new CreateDeploymentConfigInput("mollitia") {{
                                computePlatform = ComputePlatformEnum.ECS;
                                minimumHealthyHosts = new MinimumHealthyHosts() {{
                                    type = MinimumHealthyHostsTypeEnum.FLEET_PERCENT;
                                    value = 320997L;
                                }};;
                                trafficRoutingConfig = new TrafficRoutingConfig() {{
                                    timeBasedCanary = new TimeBasedCanary() {{
                                        canaryInterval = 431418L;
                                        canaryPercentage = 221262L;
                                    }};;
                                    timeBasedLinear = new TimeBasedLinear() {{
                                        linearInterval = 896547L;
                                        linearPercentage = 141264L;
                                    }};;
                                    type = TrafficRoutingTypeEnum.TIME_BASED_LINEAR;
                                }};;
                            }};, CreateDeploymentConfigXAmzTargetEnum.CODE_DEPLOY20141006_CREATE_DEPLOYMENT_CONFIG) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateDeploymentConfigResponse res = sdk.sdk.createDeploymentConfig(req);

            if (res.createDeploymentConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeploymentGroup

Creates a deployment group to which application revisions are deployed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentGroupRequest;
import org.openapis.openapi.models.operations.CreateDeploymentGroupResponse;
import org.openapis.openapi.models.operations.CreateDeploymentGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.AutoRollbackConfiguration;
import org.openapis.openapi.models.shared.AutoRollbackEventEnum;
import org.openapis.openapi.models.shared.BlueGreenDeploymentConfiguration;
import org.openapis.openapi.models.shared.BlueInstanceTerminationOption;
import org.openapis.openapi.models.shared.CreateDeploymentGroupInput;
import org.openapis.openapi.models.shared.DeploymentOptionEnum;
import org.openapis.openapi.models.shared.DeploymentReadyActionEnum;
import org.openapis.openapi.models.shared.DeploymentReadyOption;
import org.openapis.openapi.models.shared.DeploymentStyle;
import org.openapis.openapi.models.shared.DeploymentTypeEnum;
import org.openapis.openapi.models.shared.ECSService;
import org.openapis.openapi.models.shared.ELBInfo;
import org.openapis.openapi.models.shared.Ec2TagFilter;
import org.openapis.openapi.models.shared.Ec2TagFilterTypeEnum;
import org.openapis.openapi.models.shared.Ec2TagSet;
import org.openapis.openapi.models.shared.GreenFleetProvisioningActionEnum;
import org.openapis.openapi.models.shared.GreenFleetProvisioningOption;
import org.openapis.openapi.models.shared.InstanceActionEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfo;
import org.openapis.openapi.models.shared.OnPremisesTagSet;
import org.openapis.openapi.models.shared.OutdatedInstancesStrategyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.TagFilterTypeEnum;
import org.openapis.openapi.models.shared.TargetGroupInfo;
import org.openapis.openapi.models.shared.TargetGroupPairInfo;
import org.openapis.openapi.models.shared.TrafficRoute;
import org.openapis.openapi.models.shared.TriggerConfig;
import org.openapis.openapi.models.shared.TriggerEventTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentGroupRequest req = new CreateDeploymentGroupRequest(                new CreateDeploymentGroupInput("in", "architecto", "architecto") {{
                                alarmConfiguration = new AlarmConfiguration() {{
                                    alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                        add(new Alarm() {{
                                            name = "Lola Koss";
                                        }}),
                                        add(new Alarm() {{
                                            name = "Mr. Jenna Stroman";
                                        }}),
                                        add(new Alarm() {{
                                            name = "Victor Casper";
                                        }}),
                                        add(new Alarm() {{
                                            name = "Simon Jenkins";
                                        }}),
                                    }};
                                    enabled = false;
                                    ignorePollAlarmFailure = false;
                                }};;
                                autoRollbackConfiguration = new AutoRollbackConfiguration() {{
                                    enabled = false;
                                    events = new org.openapis.openapi.models.shared.AutoRollbackEventEnum[]{{
                                        add(AutoRollbackEventEnum.DEPLOYMENT_FAILURE),
                                        add(AutoRollbackEventEnum.DEPLOYMENT_FAILURE),
                                    }};
                                }};;
                                autoScalingGroups = new String[]{{
                                    add("quidem"),
                                    add("ipsam"),
                                    add("voluptate"),
                                    add("autem"),
                                }};
                                blueGreenDeploymentConfiguration = new BlueGreenDeploymentConfiguration() {{
                                    deploymentReadyOption = new DeploymentReadyOption() {{
                                        actionOnTimeout = DeploymentReadyActionEnum.STOP_DEPLOYMENT;
                                        waitTimeInMinutes = 50588L;
                                    }};;
                                    greenFleetProvisioningOption = new GreenFleetProvisioningOption() {{
                                        action = GreenFleetProvisioningActionEnum.COPY_AUTO_SCALING_GROUP;
                                    }};;
                                    terminateBlueInstancesOnDeploymentSuccess = new BlueInstanceTerminationOption() {{
                                        action = InstanceActionEnum.TERMINATE;
                                        terminationWaitTimeInMinutes = 975522L;
                                    }};;
                                }};;
                                deploymentConfigName = "perferendis";
                                deploymentStyle = new DeploymentStyle() {{
                                    deploymentOption = DeploymentOptionEnum.WITHOUT_TRAFFIC_CONTROL;
                                    deploymentType = DeploymentTypeEnum.IN_PLACE;
                                }};;
                                ec2TagFilters = new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                    add(new Ec2TagFilter() {{
                                        key = "cumque";
                                        type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                        value = "hic";
                                    }}),
                                }};
                                ec2TagSet = new Ec2TagSet() {{
                                    ec2TagSetList = new org.openapis.openapi.models.shared.Ec2TagFilter[][]{{
                                        add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                            add(new Ec2TagFilter() {{
                                                key = "dolores";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "totam";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "dignissimos";
                                                type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                                value = "quis";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "nesciunt";
                                                type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                                value = "perferendis";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                            add(new Ec2TagFilter() {{
                                                key = "minus";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "dolor";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                            add(new Ec2TagFilter() {{
                                                key = "nostrum";
                                                type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "recusandae";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "omnis";
                                                type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "perspiciatis";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "voluptatem";
                                                type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "consequuntur";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "blanditiis";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "eaque";
                                            }}),
                                        }}),
                                    }};
                                }};;
                                ecsServices = new org.openapis.openapi.models.shared.ECSService[]{{
                                    add(new ECSService() {{
                                        clusterName = "rerum";
                                        serviceName = "adipisci";
                                    }}),
                                    add(new ECSService() {{
                                        clusterName = "asperiores";
                                        serviceName = "earum";
                                    }}),
                                    add(new ECSService() {{
                                        clusterName = "modi";
                                        serviceName = "iste";
                                    }}),
                                }};
                                loadBalancerInfo = new LoadBalancerInfo() {{
                                    elbInfoList = new org.openapis.openapi.models.shared.ELBInfo[]{{
                                        add(new ELBInfo() {{
                                            name = "Ervin McLaughlin";
                                        }}),
                                        add(new ELBInfo() {{
                                            name = "Alex Luettgen";
                                        }}),
                                        add(new ELBInfo() {{
                                            name = "Rosa Dibbert";
                                        }}),
                                    }};
                                    targetGroupInfoList = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                        add(new TargetGroupInfo() {{
                                            name = "Adrian Kuhn";
                                        }}),
                                        add(new TargetGroupInfo() {{
                                            name = "Mr. Bradley Bogan";
                                        }}),
                                        add(new TargetGroupInfo() {{
                                            name = "Bertha Thompson";
                                        }}),
                                    }};
                                    targetGroupPairInfoList = new org.openapis.openapi.models.shared.TargetGroupPairInfo[]{{
                                        add(new TargetGroupPairInfo() {{
                                            prodTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("eos"),
                                                    add("atque"),
                                                    add("sit"),
                                                }};
                                            }};
                                            targetGroups = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                                add(new TargetGroupInfo() {{
                                                    name = "Latoya Parisian";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Alfredo Mohr";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Jessie Emmerich";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Mrs. Ray Collins";
                                                }}),
                                            }};
                                            testTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("ad"),
                                                    add("saepe"),
                                                    add("suscipit"),
                                                    add("deserunt"),
                                                }};
                                            }};
                                        }}),
                                        add(new TargetGroupPairInfo() {{
                                            prodTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("minima"),
                                                    add("repellendus"),
                                                    add("totam"),
                                                }};
                                            }};
                                            targetGroups = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                                add(new TargetGroupInfo() {{
                                                    name = "Cristina Hahn";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Erick Denesik";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Fannie Kub";
                                                }}),
                                            }};
                                            testTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("amet"),
                                                    add("tempore"),
                                                    add("accusamus"),
                                                    add("numquam"),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};;
                                onPremisesInstanceTagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                    add(new TagFilter() {{
                                        key = "dolorem";
                                        type = TagFilterTypeEnum.KEY_AND_VALUE;
                                        value = "totam";
                                    }}),
                                    add(new TagFilter() {{
                                        key = "nihil";
                                        type = TagFilterTypeEnum.KEY_ONLY;
                                        value = "expedita";
                                    }}),
                                }};
                                onPremisesTagSet = new OnPremisesTagSet() {{
                                    onPremisesTagSetList = new org.openapis.openapi.models.shared.TagFilter[][]{{
                                        add(new org.openapis.openapi.models.shared.TagFilter[]{{
                                            add(new TagFilter() {{
                                                key = "vel";
                                                type = TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "voluptas";
                                            }}),
                                        }}),
                                    }};
                                }};;
                                outdatedInstancesStrategy = OutdatedInstancesStrategyEnum.IGNORE;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ipsum";
                                        value = "incidunt";
                                    }}),
                                    add(new Tag() {{
                                        key = "qui";
                                        value = "cupiditate";
                                    }}),
                                }};
                                triggerConfigurations = new org.openapis.openapi.models.shared.TriggerConfig[]{{
                                    add(new TriggerConfig() {{
                                        triggerEvents = new org.openapis.openapi.models.shared.TriggerEventTypeEnum[]{{
                                            add(TriggerEventTypeEnum.INSTANCE_SUCCESS),
                                            add(TriggerEventTypeEnum.DEPLOYMENT_SUCCESS),
                                            add(TriggerEventTypeEnum.INSTANCE_START),
                                            add(TriggerEventTypeEnum.DEPLOYMENT_READY),
                                        }};
                                        triggerName = "incidunt";
                                        triggerTargetArn = "aspernatur";
                                    }}),
                                    add(new TriggerConfig() {{
                                        triggerEvents = new org.openapis.openapi.models.shared.TriggerEventTypeEnum[]{{
                                            add(TriggerEventTypeEnum.INSTANCE_SUCCESS),
                                        }};
                                        triggerName = "facilis";
                                        triggerTargetArn = "aliquid";
                                    }}),
                                    add(new TriggerConfig() {{
                                        triggerEvents = new org.openapis.openapi.models.shared.TriggerEventTypeEnum[]{{
                                            add(TriggerEventTypeEnum.DEPLOYMENT_READY),
                                            add(TriggerEventTypeEnum.INSTANCE_FAILURE),
                                        }};
                                        triggerName = "qui";
                                        triggerTargetArn = "neque";
                                    }}),
                                    add(new TriggerConfig() {{
                                        triggerEvents = new org.openapis.openapi.models.shared.TriggerEventTypeEnum[]{{
                                            add(TriggerEventTypeEnum.DEPLOYMENT_SUCCESS),
                                        }};
                                        triggerName = "odio";
                                        triggerTargetArn = "sunt";
                                    }}),
                                }};
                            }};, CreateDeploymentGroupXAmzTargetEnum.CODE_DEPLOY20141006_CREATE_DEPLOYMENT_GROUP) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            CreateDeploymentGroupResponse res = sdk.sdk.createDeploymentGroup(req);

            if (res.createDeploymentGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Deletes an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest(                new DeleteApplicationInput("saepe");, DeleteApplicationXAmzTargetEnum.CODE_DEPLOY20141006_DELETE_APPLICATION) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeploymentConfig

<p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeploymentConfigRequest;
import org.openapis.openapi.models.operations.DeleteDeploymentConfigResponse;
import org.openapis.openapi.models.operations.DeleteDeploymentConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDeploymentConfigInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeploymentConfigRequest req = new DeleteDeploymentConfigRequest(                new DeleteDeploymentConfigInput("dolorem");, DeleteDeploymentConfigXAmzTargetEnum.CODE_DEPLOY20141006_DELETE_DEPLOYMENT_CONFIG) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "adipisci";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "aut";
            }};            

            DeleteDeploymentConfigResponse res = sdk.sdk.deleteDeploymentConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeploymentGroup

Deletes a deployment group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeploymentGroupRequest;
import org.openapis.openapi.models.operations.DeleteDeploymentGroupResponse;
import org.openapis.openapi.models.operations.DeleteDeploymentGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDeploymentGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeploymentGroupRequest req = new DeleteDeploymentGroupRequest(                new DeleteDeploymentGroupInput("itaque", "consequatur");, DeleteDeploymentGroupXAmzTargetEnum.CODE_DEPLOY20141006_DELETE_DEPLOYMENT_GROUP) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "porro";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ut";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DeleteDeploymentGroupResponse res = sdk.sdk.deleteDeploymentGroup(req);

            if (res.deleteDeploymentGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGitHubAccountToken

Deletes a GitHub account connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGitHubAccountTokenRequest;
import org.openapis.openapi.models.operations.DeleteGitHubAccountTokenResponse;
import org.openapis.openapi.models.operations.DeleteGitHubAccountTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGitHubAccountTokenInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGitHubAccountTokenRequest req = new DeleteGitHubAccountTokenRequest(                new DeleteGitHubAccountTokenInput() {{
                                tokenName = "quae";
                            }};, DeleteGitHubAccountTokenXAmzTargetEnum.CODE_DEPLOY20141006_DELETE_GIT_HUB_ACCOUNT_TOKEN) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteGitHubAccountTokenResponse res = sdk.sdk.deleteGitHubAccountToken(req);

            if (res.deleteGitHubAccountTokenOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcesByExternalId

Deletes resources linked to an external ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcesByExternalIdRequest;
import org.openapis.openapi.models.operations.DeleteResourcesByExternalIdResponse;
import org.openapis.openapi.models.operations.DeleteResourcesByExternalIdXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcesByExternalIdInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcesByExternalIdRequest req = new DeleteResourcesByExternalIdRequest(                new DeleteResourcesByExternalIdInput() {{
                                externalId = "ipsum";
                            }};, DeleteResourcesByExternalIdXAmzTargetEnum.CODE_DEPLOY20141006_DELETE_RESOURCES_BY_EXTERNAL_ID) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteResourcesByExternalIdResponse res = sdk.sdk.deleteResourcesByExternalId(req);

            if (res.deleteResourcesByExternalIdOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterOnPremisesInstance

Deregisters an on-premises instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterOnPremisesInstanceRequest;
import org.openapis.openapi.models.operations.DeregisterOnPremisesInstanceResponse;
import org.openapis.openapi.models.operations.DeregisterOnPremisesInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterOnPremisesInstanceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterOnPremisesInstanceRequest req = new DeregisterOnPremisesInstanceRequest(                new DeregisterOnPremisesInstanceInput("quod");, DeregisterOnPremisesInstanceXAmzTargetEnum.CODE_DEPLOY20141006_DEREGISTER_ON_PREMISES_INSTANCE) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DeregisterOnPremisesInstanceResponse res = sdk.sdk.deregisterOnPremisesInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplication

Gets information about an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationRequest;
import org.openapis.openapi.models.operations.GetApplicationResponse;
import org.openapis.openapi.models.operations.GetApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetApplicationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationRequest req = new GetApplicationRequest(                new GetApplicationInput("sequi");, GetApplicationXAmzTargetEnum.CODE_DEPLOY20141006_GET_APPLICATION) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
            }};            

            GetApplicationResponse res = sdk.sdk.getApplication(req);

            if (res.getApplicationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplicationRevision

Gets information about an application revision.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationRevisionRequest;
import org.openapis.openapi.models.operations.GetApplicationRevisionResponse;
import org.openapis.openapi.models.operations.GetApplicationRevisionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppSpecContent;
import org.openapis.openapi.models.shared.BundleTypeEnum;
import org.openapis.openapi.models.shared.GetApplicationRevisionInput;
import org.openapis.openapi.models.shared.GitHubLocation;
import org.openapis.openapi.models.shared.RawString;
import org.openapis.openapi.models.shared.RevisionLocation;
import org.openapis.openapi.models.shared.RevisionLocationTypeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationRevisionRequest req = new GetApplicationRevisionRequest(                new GetApplicationRevisionInput("maiores",                 new RevisionLocation() {{
                                                appSpecContent = new AppSpecContent() {{
                                                    content = "doloribus";
                                                    sha256 = "iusto";
                                                }};;
                                                gitHubLocation = new GitHubLocation() {{
                                                    commitId = "eligendi";
                                                    repository = "ducimus";
                                                }};;
                                                revisionType = RevisionLocationTypeEnum.S3;
                                                s3Location = new S3Location() {{
                                                    bucket = "officia";
                                                    bundleType = BundleTypeEnum.TGZ;
                                                    eTag = "ipsam";
                                                    key = "ea";
                                                    version = "aspernatur";
                                                }};;
                                                string = new RawString() {{
                                                    content = "vel";
                                                    sha256 = "possimus";
                                                }};;
                                            }};);, GetApplicationRevisionXAmzTargetEnum.CODE_DEPLOY20141006_GET_APPLICATION_REVISION) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            GetApplicationRevisionResponse res = sdk.sdk.getApplicationRevision(req);

            if (res.getApplicationRevisionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeployment

<p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentRequest;
import org.openapis.openapi.models.operations.GetDeploymentResponse;
import org.openapis.openapi.models.operations.GetDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeploymentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentRequest req = new GetDeploymentRequest(                new GetDeploymentInput("ex");, GetDeploymentXAmzTargetEnum.CODE_DEPLOY20141006_GET_DEPLOYMENT) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            GetDeploymentResponse res = sdk.sdk.getDeployment(req);

            if (res.getDeploymentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeploymentConfig

Gets information about a deployment configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentConfigRequest;
import org.openapis.openapi.models.operations.GetDeploymentConfigResponse;
import org.openapis.openapi.models.operations.GetDeploymentConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeploymentConfigInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentConfigRequest req = new GetDeploymentConfigRequest(                new GetDeploymentConfigInput("impedit");, GetDeploymentConfigXAmzTargetEnum.CODE_DEPLOY20141006_GET_DEPLOYMENT_CONFIG) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            GetDeploymentConfigResponse res = sdk.sdk.getDeploymentConfig(req);

            if (res.getDeploymentConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeploymentGroup

Gets information about a deployment group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentGroupRequest;
import org.openapis.openapi.models.operations.GetDeploymentGroupResponse;
import org.openapis.openapi.models.operations.GetDeploymentGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeploymentGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentGroupRequest req = new GetDeploymentGroupRequest(                new GetDeploymentGroupInput("recusandae", "aspernatur");, GetDeploymentGroupXAmzTargetEnum.CODE_DEPLOY20141006_GET_DEPLOYMENT_GROUP) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "a";
                xAmzDate = "libero";
                xAmzSecurityToken = "aut";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "deleniti";
            }};            

            GetDeploymentGroupResponse res = sdk.sdk.getDeploymentGroup(req);

            if (res.getDeploymentGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getDeploymentInstance~~

Gets information about an instance as part of a deployment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentInstanceRequest;
import org.openapis.openapi.models.operations.GetDeploymentInstanceResponse;
import org.openapis.openapi.models.operations.GetDeploymentInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeploymentInstanceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentInstanceRequest req = new GetDeploymentInstanceRequest(                new GetDeploymentInstanceInput("aliquam", "fugit");, GetDeploymentInstanceXAmzTargetEnum.CODE_DEPLOY20141006_GET_DEPLOYMENT_INSTANCE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "non";
                xAmzDate = "et";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "placeat";
            }};            

            GetDeploymentInstanceResponse res = sdk.sdk.getDeploymentInstance(req);

            if (res.getDeploymentInstanceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeploymentTarget

 Returns information about a deployment target. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentTargetRequest;
import org.openapis.openapi.models.operations.GetDeploymentTargetResponse;
import org.openapis.openapi.models.operations.GetDeploymentTargetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeploymentTargetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentTargetRequest req = new GetDeploymentTargetRequest(                new GetDeploymentTargetInput() {{
                                deploymentId = "eum";
                                targetId = "autem";
                            }};, GetDeploymentTargetXAmzTargetEnum.CODE_DEPLOY20141006_GET_DEPLOYMENT_TARGET) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "assumenda";
                xAmzDate = "nulla";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "quasi";
            }};            

            GetDeploymentTargetResponse res = sdk.sdk.getDeploymentTarget(req);

            if (res.getDeploymentTargetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOnPremisesInstance

 Gets information about an on-premises instance. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOnPremisesInstanceRequest;
import org.openapis.openapi.models.operations.GetOnPremisesInstanceResponse;
import org.openapis.openapi.models.operations.GetOnPremisesInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOnPremisesInstanceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOnPremisesInstanceRequest req = new GetOnPremisesInstanceRequest(                new GetOnPremisesInstanceInput("numquam");, GetOnPremisesInstanceXAmzTargetEnum.CODE_DEPLOY20141006_GET_ON_PREMISES_INSTANCE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "provident";
                xAmzCredential = "ipsa";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "eius";
            }};            

            GetOnPremisesInstanceResponse res = sdk.sdk.getOnPremisesInstance(req);

            if (res.getOnPremisesInstanceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplicationRevisions

Lists information about revisions for an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationRevisionsRequest;
import org.openapis.openapi.models.operations.ListApplicationRevisionsResponse;
import org.openapis.openapi.models.operations.ListApplicationRevisionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationRevisionSortByEnum;
import org.openapis.openapi.models.shared.ListApplicationRevisionsInput;
import org.openapis.openapi.models.shared.ListStateFilterActionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationRevisionsRequest req = new ListApplicationRevisionsRequest(                new ListApplicationRevisionsInput("esse") {{
                                deployed = ListStateFilterActionEnum.EXCLUDE;
                                nextToken = "fuga";
                                s3Bucket = "reprehenderit";
                                s3KeyPrefix = "quidem";
                                sortBy = ApplicationRevisionSortByEnum.LAST_USED_TIME;
                                sortOrder = SortOrderEnum.ASCENDING;
                            }};, ListApplicationRevisionsXAmzTargetEnum.CODE_DEPLOY20141006_LIST_APPLICATION_REVISIONS) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "assumenda";
                xAmzDate = "eos";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "veritatis";
                nextToken = "ipsa";
            }};            

            ListApplicationRevisionsResponse res = sdk.sdk.listApplicationRevisions(req);

            if (res.listApplicationRevisionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

Lists the applications registered with the IAM user or Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.operations.ListApplicationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApplicationsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest(                new ListApplicationsInput() {{
                                nextToken = "quidem";
                            }};, ListApplicationsXAmzTargetEnum.CODE_DEPLOY20141006_LIST_APPLICATIONS) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "quo";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "eos";
                nextToken = "voluptas";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeploymentConfigs

Lists the deployment configurations with the IAM user or Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentConfigsRequest;
import org.openapis.openapi.models.operations.ListDeploymentConfigsResponse;
import org.openapis.openapi.models.operations.ListDeploymentConfigsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDeploymentConfigsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentConfigsRequest req = new ListDeploymentConfigsRequest(                new ListDeploymentConfigsInput() {{
                                nextToken = "cupiditate";
                            }};, ListDeploymentConfigsXAmzTargetEnum.CODE_DEPLOY20141006_LIST_DEPLOYMENT_CONFIGS) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "debitis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "quo";
                nextToken = "esse";
            }};            

            ListDeploymentConfigsResponse res = sdk.sdk.listDeploymentConfigs(req);

            if (res.listDeploymentConfigsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeploymentGroups

Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentGroupsRequest;
import org.openapis.openapi.models.operations.ListDeploymentGroupsResponse;
import org.openapis.openapi.models.operations.ListDeploymentGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDeploymentGroupsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentGroupsRequest req = new ListDeploymentGroupsRequest(                new ListDeploymentGroupsInput("aperiam") {{
                                nextToken = "distinctio";
                            }};, ListDeploymentGroupsXAmzTargetEnum.CODE_DEPLOY20141006_LIST_DEPLOYMENT_GROUPS) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
                nextToken = "odio";
            }};            

            ListDeploymentGroupsResponse res = sdk.sdk.listDeploymentGroups(req);

            if (res.listDeploymentGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listDeploymentInstances~~

<note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentInstancesRequest;
import org.openapis.openapi.models.operations.ListDeploymentInstancesResponse;
import org.openapis.openapi.models.operations.ListDeploymentInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.InstanceStatusEnum;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.ListDeploymentInstancesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentInstancesRequest req = new ListDeploymentInstancesRequest(                new ListDeploymentInstancesInput("commodi") {{
                                instanceStatusFilter = new org.openapis.openapi.models.shared.InstanceStatusEnum[]{{
                                    add(InstanceStatusEnum.IN_PROGRESS),
                                    add(InstanceStatusEnum.SKIPPED),
                                    add(InstanceStatusEnum.FAILED),
                                    add(InstanceStatusEnum.PENDING),
                                }};
                                instanceTypeFilter = new org.openapis.openapi.models.shared.InstanceTypeEnum[]{{
                                    add(InstanceTypeEnum.BLUE),
                                    add(InstanceTypeEnum.GREEN),
                                    add(InstanceTypeEnum.GREEN),
                                    add(InstanceTypeEnum.BLUE),
                                }};
                                nextToken = "deleniti";
                            }};, ListDeploymentInstancesXAmzTargetEnum.CODE_DEPLOY20141006_LIST_DEPLOYMENT_INSTANCES) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
                nextToken = "nisi";
            }};            

            ListDeploymentInstancesResponse res = sdk.sdk.listDeploymentInstances(req);

            if (res.listDeploymentInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeploymentTargets

 Returns an array of target IDs that are associated a deployment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentTargetsRequest;
import org.openapis.openapi.models.operations.ListDeploymentTargetsResponse;
import org.openapis.openapi.models.operations.ListDeploymentTargetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDeploymentTargetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentTargetsRequest req = new ListDeploymentTargetsRequest(                new ListDeploymentTargetsInput() {{
                                deploymentId = "sapiente";
                                nextToken = "consequuntur";
                                targetFilters = new java.util.HashMap<String, String[]>() {{
                                    put("explicabo", new String[]{{
                                        add("occaecati"),
                                        add("atque"),
                                        add("et"),
                                        add("esse"),
                                    }});
                                }};
                            }};, ListDeploymentTargetsXAmzTargetEnum.CODE_DEPLOY20141006_LIST_DEPLOYMENT_TARGETS) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "veritatis";
                xAmzDate = "esse";
                xAmzSecurityToken = "quod";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "vero";
            }};            

            ListDeploymentTargetsResponse res = sdk.sdk.listDeploymentTargets(req);

            if (res.listDeploymentTargetsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployments

Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentsRequest;
import org.openapis.openapi.models.operations.ListDeploymentsResponse;
import org.openapis.openapi.models.operations.ListDeploymentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeploymentStatusEnum;
import org.openapis.openapi.models.shared.ListDeploymentsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentsRequest req = new ListDeploymentsRequest(                new ListDeploymentsInput() {{
                                applicationName = "quasi";
                                createTimeRange = new TimeRange() {{
                                    end = OffsetDateTime.parse("2021-09-21T04:40:52.923Z");
                                    start = OffsetDateTime.parse("2022-01-20T13:10:25.426Z");
                                }};;
                                deploymentGroupName = "rerum";
                                externalId = "occaecati";
                                includeOnlyStatuses = new org.openapis.openapi.models.shared.DeploymentStatusEnum[]{{
                                    add(DeploymentStatusEnum.FAILED),
                                    add(DeploymentStatusEnum.STOPPED),
                                }};
                                nextToken = "sit";
                            }};, ListDeploymentsXAmzTargetEnum.CODE_DEPLOY20141006_LIST_DEPLOYMENTS) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "adipisci";
                xAmzDate = "cumque";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "minus";
                nextToken = "quaerat";
            }};            

            ListDeploymentsResponse res = sdk.sdk.listDeployments(req);

            if (res.listDeploymentsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGitHubAccountTokenNames

Lists the names of stored connections to GitHub accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGitHubAccountTokenNamesRequest;
import org.openapis.openapi.models.operations.ListGitHubAccountTokenNamesResponse;
import org.openapis.openapi.models.operations.ListGitHubAccountTokenNamesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGitHubAccountTokenNamesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGitHubAccountTokenNamesRequest req = new ListGitHubAccountTokenNamesRequest(                new ListGitHubAccountTokenNamesInput() {{
                                nextToken = "consectetur";
                            }};, ListGitHubAccountTokenNamesXAmzTargetEnum.CODE_DEPLOY20141006_LIST_GIT_HUB_ACCOUNT_TOKEN_NAMES) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "provident";
                xAmzDate = "a";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "esse";
            }};            

            ListGitHubAccountTokenNamesResponse res = sdk.sdk.listGitHubAccountTokenNames(req);

            if (res.listGitHubAccountTokenNamesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOnPremisesInstances

<p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOnPremisesInstancesRequest;
import org.openapis.openapi.models.operations.ListOnPremisesInstancesResponse;
import org.openapis.openapi.models.operations.ListOnPremisesInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOnPremisesInstancesInput;
import org.openapis.openapi.models.shared.RegistrationStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.TagFilterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOnPremisesInstancesRequest req = new ListOnPremisesInstancesRequest(                new ListOnPremisesInstancesInput() {{
                                nextToken = "a";
                                registrationStatus = RegistrationStatusEnum.DEREGISTERED;
                                tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                    add(new TagFilter() {{
                                        key = "pariatur";
                                        type = TagFilterTypeEnum.KEY_AND_VALUE;
                                        value = "quia";
                                    }}),
                                    add(new TagFilter() {{
                                        key = "eveniet";
                                        type = TagFilterTypeEnum.KEY_AND_VALUE;
                                        value = "facere";
                                    }}),
                                    add(new TagFilter() {{
                                        key = "veritatis";
                                        type = TagFilterTypeEnum.KEY_ONLY;
                                        value = "quasi";
                                    }}),
                                }};
                            }};, ListOnPremisesInstancesXAmzTargetEnum.CODE_DEPLOY20141006_LIST_ON_PREMISES_INSTANCES) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "aliquid";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quae";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "vel";
            }};            

            ListOnPremisesInstancesResponse res = sdk.sdk.listOnPremisesInstances(req);

            if (res.listOnPremisesInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("eius") {{
                                nextToken = "libero";
                            }};, ListTagsForResourceXAmzTargetEnum.CODE_DEPLOY20141006_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "accusantium";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "ullam";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLifecycleEventHookExecutionStatus

 Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLifecycleEventHookExecutionStatusRequest;
import org.openapis.openapi.models.operations.PutLifecycleEventHookExecutionStatusResponse;
import org.openapis.openapi.models.operations.PutLifecycleEventHookExecutionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.LifecycleEventStatusEnum;
import org.openapis.openapi.models.shared.PutLifecycleEventHookExecutionStatusInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLifecycleEventHookExecutionStatusRequest req = new PutLifecycleEventHookExecutionStatusRequest(                new PutLifecycleEventHookExecutionStatusInput() {{
                                deploymentId = "ullam";
                                lifecycleEventHookExecutionId = "nisi";
                                status = LifecycleEventStatusEnum.PENDING;
                            }};, PutLifecycleEventHookExecutionStatusXAmzTargetEnum.CODE_DEPLOY20141006_PUT_LIFECYCLE_EVENT_HOOK_EXECUTION_STATUS) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quibusdam";
                xAmzDate = "ex";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "dolorum";
            }};            

            PutLifecycleEventHookExecutionStatusResponse res = sdk.sdk.putLifecycleEventHookExecutionStatus(req);

            if (res.putLifecycleEventHookExecutionStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerApplicationRevision

Registers with CodeDeploy a revision for the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterApplicationRevisionRequest;
import org.openapis.openapi.models.operations.RegisterApplicationRevisionResponse;
import org.openapis.openapi.models.operations.RegisterApplicationRevisionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppSpecContent;
import org.openapis.openapi.models.shared.BundleTypeEnum;
import org.openapis.openapi.models.shared.GitHubLocation;
import org.openapis.openapi.models.shared.RawString;
import org.openapis.openapi.models.shared.RegisterApplicationRevisionInput;
import org.openapis.openapi.models.shared.RevisionLocation;
import org.openapis.openapi.models.shared.RevisionLocationTypeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterApplicationRevisionRequest req = new RegisterApplicationRevisionRequest(                new RegisterApplicationRevisionInput("omnis",                 new RevisionLocation() {{
                                                appSpecContent = new AppSpecContent() {{
                                                    content = "tenetur";
                                                    sha256 = "quasi";
                                                }};;
                                                gitHubLocation = new GitHubLocation() {{
                                                    commitId = "at";
                                                    repository = "et";
                                                }};;
                                                revisionType = RevisionLocationTypeEnum.GIT_HUB;
                                                s3Location = new S3Location() {{
                                                    bucket = "ipsa";
                                                    bundleType = BundleTypeEnum.TGZ;
                                                    eTag = "veritatis";
                                                    key = "consectetur";
                                                    version = "adipisci";
                                                }};;
                                                string = new RawString() {{
                                                    content = "iste";
                                                    sha256 = "temporibus";
                                                }};;
                                            }};) {{
                                description = "accusantium";
                            }};, RegisterApplicationRevisionXAmzTargetEnum.CODE_DEPLOY20141006_REGISTER_APPLICATION_REVISION) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aut";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "corrupti";
            }};            

            RegisterApplicationRevisionResponse res = sdk.sdk.registerApplicationRevision(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerOnPremisesInstance

<p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterOnPremisesInstanceRequest;
import org.openapis.openapi.models.operations.RegisterOnPremisesInstanceResponse;
import org.openapis.openapi.models.operations.RegisterOnPremisesInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterOnPremisesInstanceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterOnPremisesInstanceRequest req = new RegisterOnPremisesInstanceRequest(                new RegisterOnPremisesInstanceInput("voluptatem") {{
                                iamSessionArn = "dolor";
                                iamUserArn = "occaecati";
                            }};, RegisterOnPremisesInstanceXAmzTargetEnum.CODE_DEPLOY20141006_REGISTER_ON_PREMISES_INSTANCE) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "aut";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "dicta";
            }};            

            RegisterOnPremisesInstanceResponse res = sdk.sdk.registerOnPremisesInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTagsFromOnPremisesInstances

Removes one or more tags from one or more on-premises instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagsFromOnPremisesInstancesRequest;
import org.openapis.openapi.models.operations.RemoveTagsFromOnPremisesInstancesResponse;
import org.openapis.openapi.models.operations.RemoveTagsFromOnPremisesInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTagsFromOnPremisesInstancesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsFromOnPremisesInstancesRequest req = new RemoveTagsFromOnPremisesInstancesRequest(                new RemoveTagsFromOnPremisesInstancesInput(                new String[]{{
                                                add("velit"),
                                                add("voluptatibus"),
                                                add("voluptas"),
                                            }},                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "aperiam";
                                                    value = "ea";
                                                }}),
                                                add(new Tag() {{
                                                    key = "quaerat";
                                                    value = "consequuntur";
                                                }}),
                                                add(new Tag() {{
                                                    key = "repellendus";
                                                    value = "officia";
                                                }}),
                                                add(new Tag() {{
                                                    key = "maxime";
                                                    value = "dignissimos";
                                                }}),
                                            }});, RemoveTagsFromOnPremisesInstancesXAmzTargetEnum.CODE_DEPLOY20141006_REMOVE_TAGS_FROM_ON_PREMISES_INSTANCES) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nemo";
                xAmzDate = "quae";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "quod";
            }};            

            RemoveTagsFromOnPremisesInstancesResponse res = sdk.sdk.removeTagsFromOnPremisesInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~skipWaitTimeForInstanceTermination~~

In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SkipWaitTimeForInstanceTerminationRequest;
import org.openapis.openapi.models.operations.SkipWaitTimeForInstanceTerminationResponse;
import org.openapis.openapi.models.operations.SkipWaitTimeForInstanceTerminationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SkipWaitTimeForInstanceTerminationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SkipWaitTimeForInstanceTerminationRequest req = new SkipWaitTimeForInstanceTerminationRequest(                new SkipWaitTimeForInstanceTerminationInput() {{
                                deploymentId = "ab";
                            }};, SkipWaitTimeForInstanceTerminationXAmzTargetEnum.CODE_DEPLOY20141006_SKIP_WAIT_TIME_FOR_INSTANCE_TERMINATION) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "id";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "velit";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "est";
            }};            

            SkipWaitTimeForInstanceTerminationResponse res = sdk.sdk.skipWaitTimeForInstanceTermination(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDeployment

Attempts to stop an ongoing deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDeploymentRequest;
import org.openapis.openapi.models.operations.StopDeploymentResponse;
import org.openapis.openapi.models.operations.StopDeploymentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDeploymentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDeploymentRequest req = new StopDeploymentRequest(                new StopDeploymentInput("totam") {{
                                autoRollbackEnabled = false;
                            }};, StopDeploymentXAmzTargetEnum.CODE_DEPLOY20141006_STOP_DEPLOYMENT) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "vel";
                xAmzCredential = "ducimus";
                xAmzDate = "quos";
                xAmzSecurityToken = "vel";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "possimus";
            }};            

            StopDeploymentResponse res = sdk.sdk.stopDeployment(req);

            if (res.stopDeploymentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("cum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "in";
                                                    value = "corporis";
                                                }}),
                                                add(new Tag() {{
                                                    key = "reiciendis";
                                                    value = "assumenda";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.CODE_DEPLOY20141006_TAG_RESOURCE) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aliquid";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "in";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("earum",                 new String[]{{
                                                add("numquam"),
                                                add("doloribus"),
                                                add("suscipit"),
                                                add("reiciendis"),
                                            }});, UntagResourceXAmzTargetEnum.CODE_DEPLOY20141006_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "necessitatibus";
                xAmzDate = "dolore";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "adipisci";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplication

Changes the name of an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationInput() {{
                                applicationName = "amet";
                                newApplicationName = "beatae";
                            }};, UpdateApplicationXAmzTargetEnum.CODE_DEPLOY20141006_UPDATE_APPLICATION) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "a";
                xAmzCredential = "debitis";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "laboriosam";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeploymentGroup

Changes information about a deployment group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeploymentGroupRequest;
import org.openapis.openapi.models.operations.UpdateDeploymentGroupResponse;
import org.openapis.openapi.models.operations.UpdateDeploymentGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.AutoRollbackConfiguration;
import org.openapis.openapi.models.shared.AutoRollbackEventEnum;
import org.openapis.openapi.models.shared.BlueGreenDeploymentConfiguration;
import org.openapis.openapi.models.shared.BlueInstanceTerminationOption;
import org.openapis.openapi.models.shared.DeploymentOptionEnum;
import org.openapis.openapi.models.shared.DeploymentReadyActionEnum;
import org.openapis.openapi.models.shared.DeploymentReadyOption;
import org.openapis.openapi.models.shared.DeploymentStyle;
import org.openapis.openapi.models.shared.DeploymentTypeEnum;
import org.openapis.openapi.models.shared.ECSService;
import org.openapis.openapi.models.shared.ELBInfo;
import org.openapis.openapi.models.shared.Ec2TagFilter;
import org.openapis.openapi.models.shared.Ec2TagFilterTypeEnum;
import org.openapis.openapi.models.shared.Ec2TagSet;
import org.openapis.openapi.models.shared.GreenFleetProvisioningActionEnum;
import org.openapis.openapi.models.shared.GreenFleetProvisioningOption;
import org.openapis.openapi.models.shared.InstanceActionEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfo;
import org.openapis.openapi.models.shared.OnPremisesTagSet;
import org.openapis.openapi.models.shared.OutdatedInstancesStrategyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.TagFilterTypeEnum;
import org.openapis.openapi.models.shared.TargetGroupInfo;
import org.openapis.openapi.models.shared.TargetGroupPairInfo;
import org.openapis.openapi.models.shared.TrafficRoute;
import org.openapis.openapi.models.shared.TriggerConfig;
import org.openapis.openapi.models.shared.TriggerEventTypeEnum;
import org.openapis.openapi.models.shared.UpdateDeploymentGroupInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeploymentGroupRequest req = new UpdateDeploymentGroupRequest(                new UpdateDeploymentGroupInput("voluptates", "libero") {{
                                alarmConfiguration = new AlarmConfiguration() {{
                                    alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                        add(new Alarm() {{
                                            name = "Otis Goldner";
                                        }}),
                                    }};
                                    enabled = false;
                                    ignorePollAlarmFailure = false;
                                }};;
                                autoRollbackConfiguration = new AutoRollbackConfiguration() {{
                                    enabled = false;
                                    events = new org.openapis.openapi.models.shared.AutoRollbackEventEnum[]{{
                                        add(AutoRollbackEventEnum.DEPLOYMENT_STOP_ON_ALARM),
                                        add(AutoRollbackEventEnum.DEPLOYMENT_FAILURE),
                                    }};
                                }};;
                                autoScalingGroups = new String[]{{
                                    add("dolorum"),
                                    add("adipisci"),
                                    add("minus"),
                                }};
                                blueGreenDeploymentConfiguration = new BlueGreenDeploymentConfiguration() {{
                                    deploymentReadyOption = new DeploymentReadyOption() {{
                                        actionOnTimeout = DeploymentReadyActionEnum.CONTINUE_DEPLOYMENT;
                                        waitTimeInMinutes = 503934L;
                                    }};;
                                    greenFleetProvisioningOption = new GreenFleetProvisioningOption() {{
                                        action = GreenFleetProvisioningActionEnum.DISCOVER_EXISTING;
                                    }};;
                                    terminateBlueInstancesOnDeploymentSuccess = new BlueInstanceTerminationOption() {{
                                        action = InstanceActionEnum.TERMINATE;
                                        terminationWaitTimeInMinutes = 304468L;
                                    }};;
                                }};;
                                deploymentConfigName = "officiis";
                                deploymentStyle = new DeploymentStyle() {{
                                    deploymentOption = DeploymentOptionEnum.WITHOUT_TRAFFIC_CONTROL;
                                    deploymentType = DeploymentTypeEnum.IN_PLACE;
                                }};;
                                ec2TagFilters = new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                    add(new Ec2TagFilter() {{
                                        key = "cum";
                                        type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                        value = "quas";
                                    }}),
                                }};
                                ec2TagSet = new Ec2TagSet() {{
                                    ec2TagSetList = new org.openapis.openapi.models.shared.Ec2TagFilter[][]{{
                                        add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                            add(new Ec2TagFilter() {{
                                                key = "culpa";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "pariatur";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                            add(new Ec2TagFilter() {{
                                                key = "hic";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "nobis";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "sit";
                                                type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "sed";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "reiciendis";
                                                type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                                value = "asperiores";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                            add(new Ec2TagFilter() {{
                                                key = "voluptate";
                                                type = Ec2TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "ab";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "iste";
                                                type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                                value = "laborum";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "sed";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "commodi";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.Ec2TagFilter[]{{
                                            add(new Ec2TagFilter() {{
                                                key = "explicabo";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "unde";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "architecto";
                                                type = Ec2TagFilterTypeEnum.VALUE_ONLY;
                                                value = "sapiente";
                                            }}),
                                            add(new Ec2TagFilter() {{
                                                key = "debitis";
                                                type = Ec2TagFilterTypeEnum.KEY_ONLY;
                                                value = "reiciendis";
                                            }}),
                                        }}),
                                    }};
                                }};;
                                ecsServices = new org.openapis.openapi.models.shared.ECSService[]{{
                                    add(new ECSService() {{
                                        clusterName = "corrupti";
                                        serviceName = "maiores";
                                    }}),
                                }};
                                loadBalancerInfo = new LoadBalancerInfo() {{
                                    elbInfoList = new org.openapis.openapi.models.shared.ELBInfo[]{{
                                        add(new ELBInfo() {{
                                            name = "Sherri Gerlach";
                                        }}),
                                        add(new ELBInfo() {{
                                            name = "Kristina Lueilwitz";
                                        }}),
                                    }};
                                    targetGroupInfoList = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                        add(new TargetGroupInfo() {{
                                            name = "Mrs. Johanna Jacobson";
                                        }}),
                                        add(new TargetGroupInfo() {{
                                            name = "Malcolm Hagenes";
                                        }}),
                                    }};
                                    targetGroupPairInfoList = new org.openapis.openapi.models.shared.TargetGroupPairInfo[]{{
                                        add(new TargetGroupPairInfo() {{
                                            prodTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("sit"),
                                                    add("nobis"),
                                                    add("error"),
                                                }};
                                            }};
                                            targetGroups = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                                add(new TargetGroupInfo() {{
                                                    name = "Sophie Wisoky";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Gwen Fritsch";
                                                }}),
                                            }};
                                            testTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("beatae"),
                                                    add("laudantium"),
                                                    add("exercitationem"),
                                                    add("praesentium"),
                                                }};
                                            }};
                                        }}),
                                        add(new TargetGroupPairInfo() {{
                                            prodTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("laboriosam"),
                                                    add("dolorum"),
                                                    add("voluptatum"),
                                                }};
                                            }};
                                            targetGroups = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                                add(new TargetGroupInfo() {{
                                                    name = "Rudolph Trantow";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Brandi Padberg";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Kay Cormier";
                                                }}),
                                            }};
                                            testTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("culpa"),
                                                }};
                                            }};
                                        }}),
                                        add(new TargetGroupPairInfo() {{
                                            prodTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("magnam"),
                                                    add("consequatur"),
                                                    add("esse"),
                                                }};
                                            }};
                                            targetGroups = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                                add(new TargetGroupInfo() {{
                                                    name = "Nora Lynch";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Mattie Jaskolski III";
                                                }}),
                                            }};
                                            testTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("saepe"),
                                                    add("error"),
                                                }};
                                            }};
                                        }}),
                                        add(new TargetGroupPairInfo() {{
                                            prodTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("incidunt"),
                                                }};
                                            }};
                                            targetGroups = new org.openapis.openapi.models.shared.TargetGroupInfo[]{{
                                                add(new TargetGroupInfo() {{
                                                    name = "Ms. Opal Buckridge";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Alberto Osinski";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Patricia Farrell";
                                                }}),
                                                add(new TargetGroupInfo() {{
                                                    name = "Boyd McKenzie";
                                                }}),
                                            }};
                                            testTrafficRoute = new TrafficRoute() {{
                                                listenerArns = new String[]{{
                                                    add("perferendis"),
                                                    add("est"),
                                                    add("quidem"),
                                                    add("reprehenderit"),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};;
                                newDeploymentGroupName = "facere";
                                onPremisesInstanceTagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                    add(new TagFilter() {{
                                        key = "praesentium";
                                        type = TagFilterTypeEnum.VALUE_ONLY;
                                        value = "veniam";
                                    }}),
                                    add(new TagFilter() {{
                                        key = "voluptatem";
                                        type = TagFilterTypeEnum.KEY_AND_VALUE;
                                        value = "repudiandae";
                                    }}),
                                    add(new TagFilter() {{
                                        key = "quasi";
                                        type = TagFilterTypeEnum.VALUE_ONLY;
                                        value = "reprehenderit";
                                    }}),
                                }};
                                onPremisesTagSet = new OnPremisesTagSet() {{
                                    onPremisesTagSetList = new org.openapis.openapi.models.shared.TagFilter[][]{{
                                        add(new org.openapis.openapi.models.shared.TagFilter[]{{
                                            add(new TagFilter() {{
                                                key = "suscipit";
                                                type = TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "maxime";
                                            }}),
                                            add(new TagFilter() {{
                                                key = "et";
                                                type = TagFilterTypeEnum.VALUE_ONLY;
                                                value = "amet";
                                            }}),
                                            add(new TagFilter() {{
                                                key = "assumenda";
                                                type = TagFilterTypeEnum.VALUE_ONLY;
                                                value = "atque";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.TagFilter[]{{
                                            add(new TagFilter() {{
                                                key = "officiis";
                                                type = TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "accusamus";
                                            }}),
                                            add(new TagFilter() {{
                                                key = "natus";
                                                type = TagFilterTypeEnum.KEY_ONLY;
                                                value = "aspernatur";
                                            }}),
                                            add(new TagFilter() {{
                                                key = "ex";
                                                type = TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "corrupti";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.TagFilter[]{{
                                            add(new TagFilter() {{
                                                key = "error";
                                                type = TagFilterTypeEnum.VALUE_ONLY;
                                                value = "suscipit";
                                            }}),
                                            add(new TagFilter() {{
                                                key = "repudiandae";
                                                type = TagFilterTypeEnum.VALUE_ONLY;
                                                value = "atque";
                                            }}),
                                            add(new TagFilter() {{
                                                key = "sunt";
                                                type = TagFilterTypeEnum.KEY_AND_VALUE;
                                                value = "dolorum";
                                            }}),
                                            add(new TagFilter() {{
                                                key = "repellendus";
                                                type = TagFilterTypeEnum.KEY_ONLY;
                                                value = "reiciendis";
                                            }}),
                                        }}),
                                        add(new org.openapis.openapi.models.shared.TagFilter[]{{
                                            add(new TagFilter() {{
                                                key = "repudiandae";
                                                type = TagFilterTypeEnum.KEY_ONLY;
                                                value = "accusantium";
                                            }}),
                                        }}),
                                    }};
                                }};;
                                outdatedInstancesStrategy = OutdatedInstancesStrategyEnum.UPDATE;
                                serviceRoleArn = "dolores";
                                triggerConfigurations = new org.openapis.openapi.models.shared.TriggerConfig[]{{
                                    add(new TriggerConfig() {{
                                        triggerEvents = new org.openapis.openapi.models.shared.TriggerEventTypeEnum[]{{
                                            add(TriggerEventTypeEnum.DEPLOYMENT_FAILURE),
                                            add(TriggerEventTypeEnum.INSTANCE_READY),
                                        }};
                                        triggerName = "molestias";
                                        triggerTargetArn = "magnam";
                                    }}),
                                    add(new TriggerConfig() {{
                                        triggerEvents = new org.openapis.openapi.models.shared.TriggerEventTypeEnum[]{{
                                            add(TriggerEventTypeEnum.DEPLOYMENT_SUCCESS),
                                            add(TriggerEventTypeEnum.DEPLOYMENT_READY),
                                            add(TriggerEventTypeEnum.INSTANCE_FAILURE),
                                            add(TriggerEventTypeEnum.DEPLOYMENT_READY),
                                        }};
                                        triggerName = "in";
                                        triggerTargetArn = "adipisci";
                                    }}),
                                }};
                            }};, UpdateDeploymentGroupXAmzTargetEnum.CODE_DEPLOY20141006_UPDATE_DEPLOYMENT_GROUP) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "consequuntur";
                xAmzDate = "fugit";
                xAmzSecurityToken = "id";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            UpdateDeploymentGroupResponse res = sdk.sdk.updateDeploymentGroup(req);

            if (res.updateDeploymentGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
