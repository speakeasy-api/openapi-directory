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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToOnPremisesInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToOnPremisesInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToOnPremisesInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToOnPremisesInstancesRequest();
    $request->addTagsToOnPremisesInstancesInput = new AddTagsToOnPremisesInstancesInput();
    $request->addTagsToOnPremisesInstancesInput->instanceNames = [
        'magnam',
        'debitis',
    ];
    $request->addTagsToOnPremisesInstancesInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = AddTagsToOnPremisesInstancesXAmzTargetEnum::CODE_DEPLOY20141006_ADD_TAGS_TO_ON_PREMISES_INSTANCES;

    $response = $sdk->sdk->addTagsToOnPremisesInstances($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetApplicationRevisions

Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetApplicationRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetApplicationRevisionsInput;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocation;
use \OpenAPI\OpenAPI\Models\Shared\AppSpecContent;
use \OpenAPI\OpenAPI\Models\Shared\GitHubLocation;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\BundleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RawString;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetApplicationRevisionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetApplicationRevisionsRequest();
    $request->batchGetApplicationRevisionsInput = new BatchGetApplicationRevisionsInput();
    $request->batchGetApplicationRevisionsInput->applicationName = 'iusto';
    $request->batchGetApplicationRevisionsInput->revisions = [
        new RevisionLocation(),
        new RevisionLocation(),
        new RevisionLocation(),
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = BatchGetApplicationRevisionsXAmzTargetEnum::CODE_DEPLOY20141006_BATCH_GET_APPLICATION_REVISIONS;

    $response = $sdk->sdk->batchGetApplicationRevisions($request);

    if ($response->batchGetApplicationRevisionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetApplications

Gets information about one or more applications. The maximum number of applications that can be returned is 100.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetApplicationsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetApplicationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetApplicationsRequest();
    $request->batchGetApplicationsInput = new BatchGetApplicationsInput();
    $request->batchGetApplicationsInput->applicationNames = [
        'ipsam',
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = BatchGetApplicationsXAmzTargetEnum::CODE_DEPLOY20141006_BATCH_GET_APPLICATIONS;

    $response = $sdk->sdk->batchGetApplications($request);

    if ($response->batchGetApplicationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetDeploymentGroups

Gets information about one or more deployment groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDeploymentGroupsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDeploymentGroupsRequest();
    $request->batchGetDeploymentGroupsInput = new BatchGetDeploymentGroupsInput();
    $request->batchGetDeploymentGroupsInput->applicationName = 'molestiae';
    $request->batchGetDeploymentGroupsInput->deploymentGroupNames = [
        'quod',
        'esse',
        'totam',
        'porro',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = BatchGetDeploymentGroupsXAmzTargetEnum::CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENT_GROUPS;

    $response = $sdk->sdk->batchGetDeploymentGroups($request);

    if ($response->batchGetDeploymentGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~batchGetDeploymentInstances~~

<note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDeploymentInstancesInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDeploymentInstancesRequest();
    $request->batchGetDeploymentInstancesInput = new BatchGetDeploymentInstancesInput();
    $request->batchGetDeploymentInstancesInput->deploymentId = 'hic';
    $request->batchGetDeploymentInstancesInput->instanceIds = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = BatchGetDeploymentInstancesXAmzTargetEnum::CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENT_INSTANCES;

    $response = $sdk->sdk->batchGetDeploymentInstances($request);

    if ($response->batchGetDeploymentInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetDeploymentTargets

<p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDeploymentTargetsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentTargetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDeploymentTargetsRequest();
    $request->batchGetDeploymentTargetsInput = new BatchGetDeploymentTargetsInput();
    $request->batchGetDeploymentTargetsInput->deploymentId = 'aspernatur';
    $request->batchGetDeploymentTargetsInput->targetIds = [
        'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = BatchGetDeploymentTargetsXAmzTargetEnum::CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENT_TARGETS;

    $response = $sdk->sdk->batchGetDeploymentTargets($request);

    if ($response->batchGetDeploymentTargetsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetDeployments

Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDeploymentsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDeploymentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDeploymentsRequest();
    $request->batchGetDeploymentsInput = new BatchGetDeploymentsInput();
    $request->batchGetDeploymentsInput->deploymentIds = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = BatchGetDeploymentsXAmzTargetEnum::CODE_DEPLOY20141006_BATCH_GET_DEPLOYMENTS;

    $response = $sdk->sdk->batchGetDeployments($request);

    if ($response->batchGetDeploymentsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetOnPremisesInstances

Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetOnPremisesInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetOnPremisesInstancesInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetOnPremisesInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetOnPremisesInstancesRequest();
    $request->batchGetOnPremisesInstancesInput = new BatchGetOnPremisesInstancesInput();
    $request->batchGetOnPremisesInstancesInput->instanceNames = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = BatchGetOnPremisesInstancesXAmzTargetEnum::CODE_DEPLOY20141006_BATCH_GET_ON_PREMISES_INSTANCES;

    $response = $sdk->sdk->batchGetOnPremisesInstances($request);

    if ($response->batchGetOnPremisesInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## continueDeployment

For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ContinueDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContinueDeploymentInput;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentWaitTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContinueDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContinueDeploymentRequest();
    $request->continueDeploymentInput = new ContinueDeploymentInput();
    $request->continueDeploymentInput->deploymentId = 'excepturi';
    $request->continueDeploymentInput->deploymentWaitType = DeploymentWaitTypeEnum::READY_WAIT;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ContinueDeploymentXAmzTargetEnum::CODE_DEPLOY20141006_CONTINUE_DEPLOYMENT;

    $response = $sdk->sdk->continueDeployment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

Creates an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\ComputePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->createApplicationInput = new CreateApplicationInput();
    $request->createApplicationInput->applicationName = 'culpa';
    $request->createApplicationInput->computePlatform = ComputePlatformEnum::SERVER;
    $request->createApplicationInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = CreateApplicationXAmzTargetEnum::CODE_DEPLOY20141006_CREATE_APPLICATION;

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

Deploys an application revision through the specified deployment group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeploymentInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileExistsBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocation;
use \OpenAPI\OpenAPI\Models\Shared\AppSpecContent;
use \OpenAPI\OpenAPI\Models\Shared\GitHubLocation;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\BundleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RawString;
use \OpenAPI\OpenAPI\Models\Shared\TargetInstances;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagSet;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->createDeploymentInput = new CreateDeploymentInput();
    $request->createDeploymentInput->applicationName = 'error';
    $request->createDeploymentInput->autoRollbackConfiguration = new AutoRollbackConfiguration();
    $request->createDeploymentInput->autoRollbackConfiguration->enabled = false;
    $request->createDeploymentInput->autoRollbackConfiguration->events = [
        AutoRollbackEventEnum::DEPLOYMENT_STOP_ON_ALARM,
    ];
    $request->createDeploymentInput->deploymentConfigName = 'vitae';
    $request->createDeploymentInput->deploymentGroupName = 'laborum';
    $request->createDeploymentInput->description = 'animi';
    $request->createDeploymentInput->fileExistsBehavior = FileExistsBehaviorEnum::DISALLOW;
    $request->createDeploymentInput->ignoreApplicationStopFailures = false;
    $request->createDeploymentInput->overrideAlarmConfiguration = new AlarmConfiguration();
    $request->createDeploymentInput->overrideAlarmConfiguration->alarms = [
        new Alarm(),
    ];
    $request->createDeploymentInput->overrideAlarmConfiguration->enabled = false;
    $request->createDeploymentInput->overrideAlarmConfiguration->ignorePollAlarmFailure = false;
    $request->createDeploymentInput->revision = new RevisionLocation();
    $request->createDeploymentInput->revision->appSpecContent = new AppSpecContent();
    $request->createDeploymentInput->revision->appSpecContent->content = 'quo';
    $request->createDeploymentInput->revision->appSpecContent->sha256 = 'sequi';
    $request->createDeploymentInput->revision->gitHubLocation = new GitHubLocation();
    $request->createDeploymentInput->revision->gitHubLocation->commitId = 'tenetur';
    $request->createDeploymentInput->revision->gitHubLocation->repository = 'ipsam';
    $request->createDeploymentInput->revision->revisionType = RevisionLocationTypeEnum::STRING;
    $request->createDeploymentInput->revision->s3Location = new S3Location();
    $request->createDeploymentInput->revision->s3Location->bucket = 'possimus';
    $request->createDeploymentInput->revision->s3Location->bundleType = BundleTypeEnum::TAR;
    $request->createDeploymentInput->revision->s3Location->eTag = 'quasi';
    $request->createDeploymentInput->revision->s3Location->key = 'error';
    $request->createDeploymentInput->revision->s3Location->version = 'temporibus';
    $request->createDeploymentInput->revision->string = new RawString();
    $request->createDeploymentInput->revision->string->content = 'laborum';
    $request->createDeploymentInput->revision->string->sha256 = 'quasi';
    $request->createDeploymentInput->targetInstances = new TargetInstances();
    $request->createDeploymentInput->targetInstances->autoScalingGroups = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->createDeploymentInput->targetInstances->ec2TagSet = new Ec2TagSet();
    $request->createDeploymentInput->targetInstances->ec2TagSet->ec2TagSetList = [
        [
            new Ec2TagFilter(),
        ],
        [
            new Ec2TagFilter(),
            new Ec2TagFilter(),
            new Ec2TagFilter(),
        ],
        [
            new Ec2TagFilter(),
            new Ec2TagFilter(),
        ],
        [
            new Ec2TagFilter(),
            new Ec2TagFilter(),
            new Ec2TagFilter(),
        ],
    ];
    $request->createDeploymentInput->targetInstances->tagFilters = [
        new Ec2TagFilter(),
    ];
    $request->createDeploymentInput->updateOutdatedInstancesOnly = false;
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = CreateDeploymentXAmzTargetEnum::CODE_DEPLOY20141006_CREATE_DEPLOYMENT;

    $response = $sdk->sdk->createDeployment($request);

    if ($response->createDeploymentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeploymentConfig

 Creates a deployment configuration. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeploymentConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ComputePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\MinimumHealthyHosts;
use \OpenAPI\OpenAPI\Models\Shared\MinimumHealthyHostsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoutingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TimeBasedCanary;
use \OpenAPI\OpenAPI\Models\Shared\TimeBasedLinear;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoutingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentConfigRequest();
    $request->createDeploymentConfigInput = new CreateDeploymentConfigInput();
    $request->createDeploymentConfigInput->computePlatform = ComputePlatformEnum::LAMBDA;
    $request->createDeploymentConfigInput->deploymentConfigName = 'dicta';
    $request->createDeploymentConfigInput->minimumHealthyHosts = new MinimumHealthyHosts();
    $request->createDeploymentConfigInput->minimumHealthyHosts->type = MinimumHealthyHostsTypeEnum::FLEET_PERCENT;
    $request->createDeploymentConfigInput->minimumHealthyHosts->value = 317983;
    $request->createDeploymentConfigInput->trafficRoutingConfig = new TrafficRoutingConfig();
    $request->createDeploymentConfigInput->trafficRoutingConfig->timeBasedCanary = new TimeBasedCanary();
    $request->createDeploymentConfigInput->trafficRoutingConfig->timeBasedCanary->canaryInterval = 880476;
    $request->createDeploymentConfigInput->trafficRoutingConfig->timeBasedCanary->canaryPercentage = 414263;
    $request->createDeploymentConfigInput->trafficRoutingConfig->timeBasedLinear = new TimeBasedLinear();
    $request->createDeploymentConfigInput->trafficRoutingConfig->timeBasedLinear->linearInterval = 918236;
    $request->createDeploymentConfigInput->trafficRoutingConfig->timeBasedLinear->linearPercentage = 64147;
    $request->createDeploymentConfigInput->trafficRoutingConfig->type = TrafficRoutingTypeEnum::TIME_BASED_CANARY;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = CreateDeploymentConfigXAmzTargetEnum::CODE_DEPLOY20141006_CREATE_DEPLOYMENT_CONFIG;

    $response = $sdk->sdk->createDeploymentConfig($request);

    if ($response->createDeploymentConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeploymentGroup

Creates a deployment group to which application revisions are deployed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeploymentGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenDeploymentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentReadyOption;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentReadyActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GreenFleetProvisioningOption;
use \OpenAPI\OpenAPI\Models\Shared\GreenFleetProvisioningActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlueInstanceTerminationOption;
use \OpenAPI\OpenAPI\Models\Shared\InstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentStyle;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagSet;
use \OpenAPI\OpenAPI\Models\Shared\ECSService;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerInfo;
use \OpenAPI\OpenAPI\Models\Shared\ELBInfo;
use \OpenAPI\OpenAPI\Models\Shared\TargetGroupInfo;
use \OpenAPI\OpenAPI\Models\Shared\TargetGroupPairInfo;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoute;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnPremisesTagSet;
use \OpenAPI\OpenAPI\Models\Shared\OutdatedInstancesStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\TriggerEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentGroupRequest();
    $request->createDeploymentGroupInput = new CreateDeploymentGroupInput();
    $request->createDeploymentGroupInput->alarmConfiguration = new AlarmConfiguration();
    $request->createDeploymentGroupInput->alarmConfiguration->alarms = [
        new Alarm(),
        new Alarm(),
        new Alarm(),
        new Alarm(),
    ];
    $request->createDeploymentGroupInput->alarmConfiguration->enabled = false;
    $request->createDeploymentGroupInput->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->createDeploymentGroupInput->applicationName = 'quasi';
    $request->createDeploymentGroupInput->autoRollbackConfiguration = new AutoRollbackConfiguration();
    $request->createDeploymentGroupInput->autoRollbackConfiguration->enabled = false;
    $request->createDeploymentGroupInput->autoRollbackConfiguration->events = [
        AutoRollbackEventEnum::DEPLOYMENT_STOP_ON_ALARM,
        AutoRollbackEventEnum::DEPLOYMENT_FAILURE,
        AutoRollbackEventEnum::DEPLOYMENT_STOP_ON_REQUEST,
        AutoRollbackEventEnum::DEPLOYMENT_FAILURE,
    ];
    $request->createDeploymentGroupInput->autoScalingGroups = [
        'consequatur',
        'est',
    ];
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration = new BlueGreenDeploymentConfiguration();
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->deploymentReadyOption = new DeploymentReadyOption();
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->deploymentReadyOption->actionOnTimeout = DeploymentReadyActionEnum::STOP_DEPLOYMENT;
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->deploymentReadyOption->waitTimeInMinutes = 131797;
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->greenFleetProvisioningOption = new GreenFleetProvisioningOption();
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->greenFleetProvisioningOption->action = GreenFleetProvisioningActionEnum::COPY_AUTO_SCALING_GROUP;
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->terminateBlueInstancesOnDeploymentSuccess = new BlueInstanceTerminationOption();
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->terminateBlueInstancesOnDeploymentSuccess->action = InstanceActionEnum::KEEP_ALIVE;
    $request->createDeploymentGroupInput->blueGreenDeploymentConfiguration->terminateBlueInstancesOnDeploymentSuccess->terminationWaitTimeInMinutes = 841386;
    $request->createDeploymentGroupInput->deploymentConfigName = 'labore';
    $request->createDeploymentGroupInput->deploymentGroupName = 'modi';
    $request->createDeploymentGroupInput->deploymentStyle = new DeploymentStyle();
    $request->createDeploymentGroupInput->deploymentStyle->deploymentOption = DeploymentOptionEnum::WITH_TRAFFIC_CONTROL;
    $request->createDeploymentGroupInput->deploymentStyle->deploymentType = DeploymentTypeEnum::IN_PLACE;
    $request->createDeploymentGroupInput->ec2TagFilters = [
        new Ec2TagFilter(),
        new Ec2TagFilter(),
        new Ec2TagFilter(),
    ];
    $request->createDeploymentGroupInput->ec2TagSet = new Ec2TagSet();
    $request->createDeploymentGroupInput->ec2TagSet->ec2TagSetList = [
        [
            new Ec2TagFilter(),
        ],
        [
            new Ec2TagFilter(),
        ],
        [
            new Ec2TagFilter(),
            new Ec2TagFilter(),
            new Ec2TagFilter(),
            new Ec2TagFilter(),
        ],
    ];
    $request->createDeploymentGroupInput->ecsServices = [
        new ECSService(),
        new ECSService(),
    ];
    $request->createDeploymentGroupInput->loadBalancerInfo = new LoadBalancerInfo();
    $request->createDeploymentGroupInput->loadBalancerInfo->elbInfoList = [
        new ELBInfo(),
    ];
    $request->createDeploymentGroupInput->loadBalancerInfo->targetGroupInfoList = [
        new TargetGroupInfo(),
    ];
    $request->createDeploymentGroupInput->loadBalancerInfo->targetGroupPairInfoList = [
        new TargetGroupPairInfo(),
        new TargetGroupPairInfo(),
        new TargetGroupPairInfo(),
    ];
    $request->createDeploymentGroupInput->onPremisesInstanceTagFilters = [
        new TagFilter(),
        new TagFilter(),
        new TagFilter(),
    ];
    $request->createDeploymentGroupInput->onPremisesTagSet = new OnPremisesTagSet();
    $request->createDeploymentGroupInput->onPremisesTagSet->onPremisesTagSetList = [
        [
            new TagFilter(),
            new TagFilter(),
            new TagFilter(),
        ],
        [
            new TagFilter(),
            new TagFilter(),
            new TagFilter(),
        ],
    ];
    $request->createDeploymentGroupInput->outdatedInstancesStrategy = OutdatedInstancesStrategyEnum::UPDATE;
    $request->createDeploymentGroupInput->serviceRoleArn = 'delectus';
    $request->createDeploymentGroupInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createDeploymentGroupInput->triggerConfigurations = [
        new TriggerConfig(),
    ];
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = CreateDeploymentGroupXAmzTargetEnum::CODE_DEPLOY20141006_CREATE_DEPLOYMENT_GROUP;

    $response = $sdk->sdk->createDeploymentGroup($request);

    if ($response->createDeploymentGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Deletes an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->deleteApplicationInput = new DeleteApplicationInput();
    $request->deleteApplicationInput->applicationName = 'dolor';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DeleteApplicationXAmzTargetEnum::CODE_DEPLOY20141006_DELETE_APPLICATION;

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeploymentConfig

<p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeploymentConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDeploymentConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeploymentConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeploymentConfigRequest();
    $request->deleteDeploymentConfigInput = new DeleteDeploymentConfigInput();
    $request->deleteDeploymentConfigInput->deploymentConfigName = 'rerum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteDeploymentConfigXAmzTargetEnum::CODE_DEPLOY20141006_DELETE_DEPLOYMENT_CONFIG;

    $response = $sdk->sdk->deleteDeploymentConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeploymentGroup

Deletes a deployment group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeploymentGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDeploymentGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeploymentGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeploymentGroupRequest();
    $request->deleteDeploymentGroupInput = new DeleteDeploymentGroupInput();
    $request->deleteDeploymentGroupInput->applicationName = 'accusamus';
    $request->deleteDeploymentGroupInput->deploymentGroupName = 'non';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = DeleteDeploymentGroupXAmzTargetEnum::CODE_DEPLOY20141006_DELETE_DEPLOYMENT_GROUP;

    $response = $sdk->sdk->deleteDeploymentGroup($request);

    if ($response->deleteDeploymentGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGitHubAccountToken

Deletes a GitHub account connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGitHubAccountTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGitHubAccountTokenInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGitHubAccountTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGitHubAccountTokenRequest();
    $request->deleteGitHubAccountTokenInput = new DeleteGitHubAccountTokenInput();
    $request->deleteGitHubAccountTokenInput->tokenName = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteGitHubAccountTokenXAmzTargetEnum::CODE_DEPLOY20141006_DELETE_GIT_HUB_ACCOUNT_TOKEN;

    $response = $sdk->sdk->deleteGitHubAccountToken($request);

    if ($response->deleteGitHubAccountTokenOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcesByExternalId

Deletes resources linked to an external ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcesByExternalIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcesByExternalIdInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcesByExternalIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcesByExternalIdRequest();
    $request->deleteResourcesByExternalIdInput = new DeleteResourcesByExternalIdInput();
    $request->deleteResourcesByExternalIdInput->externalId = 'natus';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DeleteResourcesByExternalIdXAmzTargetEnum::CODE_DEPLOY20141006_DELETE_RESOURCES_BY_EXTERNAL_ID;

    $response = $sdk->sdk->deleteResourcesByExternalId($request);

    if ($response->deleteResourcesByExternalIdOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterOnPremisesInstance

Deregisters an on-premises instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterOnPremisesInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterOnPremisesInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterOnPremisesInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterOnPremisesInstanceRequest();
    $request->deregisterOnPremisesInstanceInput = new DeregisterOnPremisesInstanceInput();
    $request->deregisterOnPremisesInstanceInput->instanceName = 'labore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = DeregisterOnPremisesInstanceXAmzTargetEnum::CODE_DEPLOY20141006_DEREGISTER_ON_PREMISES_INSTANCE;

    $response = $sdk->sdk->deregisterOnPremisesInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplication

Gets information about an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetApplicationInput;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationRequest();
    $request->getApplicationInput = new GetApplicationInput();
    $request->getApplicationInput->applicationName = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = GetApplicationXAmzTargetEnum::CODE_DEPLOY20141006_GET_APPLICATION;

    $response = $sdk->sdk->getApplication($request);

    if ($response->getApplicationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationRevision

Gets information about an application revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetApplicationRevisionInput;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocation;
use \OpenAPI\OpenAPI\Models\Shared\AppSpecContent;
use \OpenAPI\OpenAPI\Models\Shared\GitHubLocation;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\BundleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RawString;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRevisionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationRevisionRequest();
    $request->getApplicationRevisionInput = new GetApplicationRevisionInput();
    $request->getApplicationRevisionInput->applicationName = 'accusantium';
    $request->getApplicationRevisionInput->revision = new RevisionLocation();
    $request->getApplicationRevisionInput->revision->appSpecContent = new AppSpecContent();
    $request->getApplicationRevisionInput->revision->appSpecContent->content = 'mollitia';
    $request->getApplicationRevisionInput->revision->appSpecContent->sha256 = 'reiciendis';
    $request->getApplicationRevisionInput->revision->gitHubLocation = new GitHubLocation();
    $request->getApplicationRevisionInput->revision->gitHubLocation->commitId = 'mollitia';
    $request->getApplicationRevisionInput->revision->gitHubLocation->repository = 'ad';
    $request->getApplicationRevisionInput->revision->revisionType = RevisionLocationTypeEnum::GIT_HUB;
    $request->getApplicationRevisionInput->revision->s3Location = new S3Location();
    $request->getApplicationRevisionInput->revision->s3Location->bucket = 'dolor';
    $request->getApplicationRevisionInput->revision->s3Location->bundleType = BundleTypeEnum::JSON;
    $request->getApplicationRevisionInput->revision->s3Location->eTag = 'odit';
    $request->getApplicationRevisionInput->revision->s3Location->key = 'nemo';
    $request->getApplicationRevisionInput->revision->s3Location->version = 'quasi';
    $request->getApplicationRevisionInput->revision->string = new RawString();
    $request->getApplicationRevisionInput->revision->string->content = 'iure';
    $request->getApplicationRevisionInput->revision->string->sha256 = 'doloribus';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = GetApplicationRevisionXAmzTargetEnum::CODE_DEPLOY20141006_GET_APPLICATION_REVISION;

    $response = $sdk->sdk->getApplicationRevision($request);

    if ($response->getApplicationRevisionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeployment

<p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeploymentInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentRequest();
    $request->getDeploymentInput = new GetDeploymentInput();
    $request->getDeploymentInput->deploymentId = 'architecto';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = GetDeploymentXAmzTargetEnum::CODE_DEPLOY20141006_GET_DEPLOYMENT;

    $response = $sdk->sdk->getDeployment($request);

    if ($response->getDeploymentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeploymentConfig

Gets information about a deployment configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeploymentConfigInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentConfigRequest();
    $request->getDeploymentConfigInput = new GetDeploymentConfigInput();
    $request->getDeploymentConfigInput->deploymentConfigName = 'saepe';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = GetDeploymentConfigXAmzTargetEnum::CODE_DEPLOY20141006_GET_DEPLOYMENT_CONFIG;

    $response = $sdk->sdk->getDeploymentConfig($request);

    if ($response->getDeploymentConfigOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeploymentGroup

Gets information about a deployment group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeploymentGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentGroupRequest();
    $request->getDeploymentGroupInput = new GetDeploymentGroupInput();
    $request->getDeploymentGroupInput->applicationName = 'quo';
    $request->getDeploymentGroupInput->deploymentGroupName = 'illum';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = GetDeploymentGroupXAmzTargetEnum::CODE_DEPLOY20141006_GET_DEPLOYMENT_GROUP;

    $response = $sdk->sdk->getDeploymentGroup($request);

    if ($response->getDeploymentGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getDeploymentInstance~~

Gets information about an instance as part of a deployment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeploymentInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentInstanceRequest();
    $request->getDeploymentInstanceInput = new GetDeploymentInstanceInput();
    $request->getDeploymentInstanceInput->deploymentId = 'ab';
    $request->getDeploymentInstanceInput->instanceId = 'maiores';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetDeploymentInstanceXAmzTargetEnum::CODE_DEPLOY20141006_GET_DEPLOYMENT_INSTANCE;

    $response = $sdk->sdk->getDeploymentInstance($request);

    if ($response->getDeploymentInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeploymentTarget

 Returns information about a deployment target. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeploymentTargetInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentTargetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentTargetRequest();
    $request->getDeploymentTargetInput = new GetDeploymentTargetInput();
    $request->getDeploymentTargetInput->deploymentId = 'nemo';
    $request->getDeploymentTargetInput->targetId = 'voluptatibus';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = GetDeploymentTargetXAmzTargetEnum::CODE_DEPLOY20141006_GET_DEPLOYMENT_TARGET;

    $response = $sdk->sdk->getDeploymentTarget($request);

    if ($response->getDeploymentTargetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOnPremisesInstance

 Gets information about an on-premises instance. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOnPremisesInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOnPremisesInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\GetOnPremisesInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOnPremisesInstanceRequest();
    $request->getOnPremisesInstanceInput = new GetOnPremisesInstanceInput();
    $request->getOnPremisesInstanceInput->instanceName = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = GetOnPremisesInstanceXAmzTargetEnum::CODE_DEPLOY20141006_GET_ON_PREMISES_INSTANCE;

    $response = $sdk->sdk->getOnPremisesInstance($request);

    if ($response->getOnPremisesInstanceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationRevisions

Lists information about revisions for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationRevisionsInput;
use \OpenAPI\OpenAPI\Models\Shared\ListStateFilterActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationRevisionSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationRevisionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationRevisionsRequest();
    $request->listApplicationRevisionsInput = new ListApplicationRevisionsInput();
    $request->listApplicationRevisionsInput->applicationName = 'nesciunt';
    $request->listApplicationRevisionsInput->deployed = ListStateFilterActionEnum::INCLUDE;
    $request->listApplicationRevisionsInput->nextToken = 'perferendis';
    $request->listApplicationRevisionsInput->s3Bucket = 'dolores';
    $request->listApplicationRevisionsInput->s3KeyPrefix = 'minus';
    $request->listApplicationRevisionsInput->sortBy = ApplicationRevisionSortByEnum::FIRST_USED_TIME;
    $request->listApplicationRevisionsInput->sortOrder = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = ListApplicationRevisionsXAmzTargetEnum::CODE_DEPLOY20141006_LIST_APPLICATION_REVISIONS;
    $request->nextToken = 'voluptatem';

    $response = $sdk->sdk->listApplicationRevisions($request);

    if ($response->listApplicationRevisionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

Lists the applications registered with the IAM user or Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->listApplicationsInput = new ListApplicationsInput();
    $request->listApplicationsInput->nextToken = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = ListApplicationsXAmzTargetEnum::CODE_DEPLOY20141006_LIST_APPLICATIONS;
    $request->nextToken = 'asperiores';

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeploymentConfigs

Lists the deployment configurations with the IAM user or Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeploymentConfigsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentConfigsRequest();
    $request->listDeploymentConfigsInput = new ListDeploymentConfigsInput();
    $request->listDeploymentConfigsInput->nextToken = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListDeploymentConfigsXAmzTargetEnum::CODE_DEPLOY20141006_LIST_DEPLOYMENT_CONFIGS;
    $request->nextToken = 'libero';

    $response = $sdk->sdk->listDeploymentConfigs($request);

    if ($response->listDeploymentConfigsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeploymentGroups

Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeploymentGroupsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentGroupsRequest();
    $request->listDeploymentGroupsInput = new ListDeploymentGroupsInput();
    $request->listDeploymentGroupsInput->applicationName = 'delectus';
    $request->listDeploymentGroupsInput->nextToken = 'quaerat';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = ListDeploymentGroupsXAmzTargetEnum::CODE_DEPLOY20141006_LIST_DEPLOYMENT_GROUPS;
    $request->nextToken = 'hic';

    $response = $sdk->sdk->listDeploymentGroups($request);

    if ($response->listDeploymentGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listDeploymentInstances~~

<note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeploymentInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentInstancesRequest();
    $request->listDeploymentInstancesInput = new ListDeploymentInstancesInput();
    $request->listDeploymentInstancesInput->deploymentId = 'excepturi';
    $request->listDeploymentInstancesInput->instanceStatusFilter = [
        InstanceStatusEnum::FAILED,
        InstanceStatusEnum::FAILED,
        InstanceStatusEnum::READY,
    ];
    $request->listDeploymentInstancesInput->instanceTypeFilter = [
        InstanceTypeEnum::GREEN,
    ];
    $request->listDeploymentInstancesInput->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ListDeploymentInstancesXAmzTargetEnum::CODE_DEPLOY20141006_LIST_DEPLOYMENT_INSTANCES;
    $request->nextToken = 'quidem';

    $response = $sdk->sdk->listDeploymentInstances($request);

    if ($response->listDeploymentInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeploymentTargets

 Returns an array of target IDs that are associated a deployment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeploymentTargetsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentTargetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentTargetsRequest();
    $request->listDeploymentTargetsInput = new ListDeploymentTargetsInput();
    $request->listDeploymentTargetsInput->deploymentId = 'voluptatibus';
    $request->listDeploymentTargetsInput->nextToken = 'voluptas';
    $request->listDeploymentTargetsInput->targetFilters = [
        'eos' => [
            'sit',
            'fugiat',
            'ab',
        ],
        'soluta' => [
            'iusto',
            'voluptate',
            'dolorum',
        ],
        'deleniti' => [
            'necessitatibus',
            'distinctio',
            'asperiores',
        ],
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = ListDeploymentTargetsXAmzTargetEnum::CODE_DEPLOY20141006_LIST_DEPLOYMENT_TARGETS;

    $response = $sdk->sdk->listDeploymentTargets($request);

    if ($response->listDeploymentTargetsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployments

Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeploymentsInput;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentsRequest();
    $request->listDeploymentsInput = new ListDeploymentsInput();
    $request->listDeploymentsInput->applicationName = 'perferendis';
    $request->listDeploymentsInput->createTimeRange = new TimeRange();
    $request->listDeploymentsInput->createTimeRange->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T04:36:10.591Z');
    $request->listDeploymentsInput->createTimeRange->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T13:56:57.287Z');
    $request->listDeploymentsInput->deploymentGroupName = 'saepe';
    $request->listDeploymentsInput->externalId = 'suscipit';
    $request->listDeploymentsInput->includeOnlyStatuses = [
        DeploymentStatusEnum::SUCCEEDED,
        DeploymentStatusEnum::IN_PROGRESS,
        DeploymentStatusEnum::STOPPED,
    ];
    $request->listDeploymentsInput->nextToken = 'totam';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ListDeploymentsXAmzTargetEnum::CODE_DEPLOY20141006_LIST_DEPLOYMENTS;
    $request->nextToken = 'officiis';

    $response = $sdk->sdk->listDeployments($request);

    if ($response->listDeploymentsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGitHubAccountTokenNames

Lists the names of stored connections to GitHub accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGitHubAccountTokenNamesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGitHubAccountTokenNamesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListGitHubAccountTokenNamesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGitHubAccountTokenNamesRequest();
    $request->listGitHubAccountTokenNamesInput = new ListGitHubAccountTokenNamesInput();
    $request->listGitHubAccountTokenNamesInput->nextToken = 'qui';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = ListGitHubAccountTokenNamesXAmzTargetEnum::CODE_DEPLOY20141006_LIST_GIT_HUB_ACCOUNT_TOKEN_NAMES;

    $response = $sdk->sdk->listGitHubAccountTokenNames($request);

    if ($response->listGitHubAccountTokenNamesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOnPremisesInstances

<p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOnPremisesInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOnPremisesInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\RegistrationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOnPremisesInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOnPremisesInstancesRequest();
    $request->listOnPremisesInstancesInput = new ListOnPremisesInstancesInput();
    $request->listOnPremisesInstancesInput->nextToken = 'tenetur';
    $request->listOnPremisesInstancesInput->registrationStatus = RegistrationStatusEnum::REGISTERED;
    $request->listOnPremisesInstancesInput->tagFilters = [
        new TagFilter(),
        new TagFilter(),
        new TagFilter(),
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = ListOnPremisesInstancesXAmzTargetEnum::CODE_DEPLOY20141006_LIST_ON_PREMISES_INSTANCES;

    $response = $sdk->sdk->listOnPremisesInstances($request);

    if ($response->listOnPremisesInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->nextToken = 'sit';
    $request->listTagsForResourceInput->resourceArn = 'expedita';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::CODE_DEPLOY20141006_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLifecycleEventHookExecutionStatus

 Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLifecycleEventHookExecutionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutLifecycleEventHookExecutionStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\LifecycleEventStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutLifecycleEventHookExecutionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLifecycleEventHookExecutionStatusRequest();
    $request->putLifecycleEventHookExecutionStatusInput = new PutLifecycleEventHookExecutionStatusInput();
    $request->putLifecycleEventHookExecutionStatusInput->deploymentId = 'ipsum';
    $request->putLifecycleEventHookExecutionStatusInput->lifecycleEventHookExecutionId = 'incidunt';
    $request->putLifecycleEventHookExecutionStatusInput->status = LifecycleEventStatusEnum::IN_PROGRESS;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = PutLifecycleEventHookExecutionStatusXAmzTargetEnum::CODE_DEPLOY20141006_PUT_LIFECYCLE_EVENT_HOOK_EXECUTION_STATUS;

    $response = $sdk->sdk->putLifecycleEventHookExecutionStatus($request);

    if ($response->putLifecycleEventHookExecutionStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerApplicationRevision

Registers with CodeDeploy a revision for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterApplicationRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterApplicationRevisionInput;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocation;
use \OpenAPI\OpenAPI\Models\Shared\AppSpecContent;
use \OpenAPI\OpenAPI\Models\Shared\GitHubLocation;
use \OpenAPI\OpenAPI\Models\Shared\RevisionLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\BundleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RawString;
use \OpenAPI\OpenAPI\Models\Operations\RegisterApplicationRevisionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterApplicationRevisionRequest();
    $request->registerApplicationRevisionInput = new RegisterApplicationRevisionInput();
    $request->registerApplicationRevisionInput->applicationName = 'incidunt';
    $request->registerApplicationRevisionInput->description = 'aspernatur';
    $request->registerApplicationRevisionInput->revision = new RevisionLocation();
    $request->registerApplicationRevisionInput->revision->appSpecContent = new AppSpecContent();
    $request->registerApplicationRevisionInput->revision->appSpecContent->content = 'dolores';
    $request->registerApplicationRevisionInput->revision->appSpecContent->sha256 = 'distinctio';
    $request->registerApplicationRevisionInput->revision->gitHubLocation = new GitHubLocation();
    $request->registerApplicationRevisionInput->revision->gitHubLocation->commitId = 'facilis';
    $request->registerApplicationRevisionInput->revision->gitHubLocation->repository = 'aliquid';
    $request->registerApplicationRevisionInput->revision->revisionType = RevisionLocationTypeEnum::GIT_HUB;
    $request->registerApplicationRevisionInput->revision->s3Location = new S3Location();
    $request->registerApplicationRevisionInput->revision->s3Location->bucket = 'molestias';
    $request->registerApplicationRevisionInput->revision->s3Location->bundleType = BundleTypeEnum::JSON;
    $request->registerApplicationRevisionInput->revision->s3Location->eTag = 'qui';
    $request->registerApplicationRevisionInput->revision->s3Location->key = 'neque';
    $request->registerApplicationRevisionInput->revision->s3Location->version = 'fugit';
    $request->registerApplicationRevisionInput->revision->string = new RawString();
    $request->registerApplicationRevisionInput->revision->string->content = 'magni';
    $request->registerApplicationRevisionInput->revision->string->sha256 = 'odio';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = RegisterApplicationRevisionXAmzTargetEnum::CODE_DEPLOY20141006_REGISTER_APPLICATION_REVISION;

    $response = $sdk->sdk->registerApplicationRevision($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerOnPremisesInstance

<p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterOnPremisesInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterOnPremisesInstanceInput;
use \OpenAPI\OpenAPI\Models\Operations\RegisterOnPremisesInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterOnPremisesInstanceRequest();
    $request->registerOnPremisesInstanceInput = new RegisterOnPremisesInstanceInput();
    $request->registerOnPremisesInstanceInput->iamSessionArn = 'nobis';
    $request->registerOnPremisesInstanceInput->iamUserArn = 'et';
    $request->registerOnPremisesInstanceInput->instanceName = 'saepe';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = RegisterOnPremisesInstanceXAmzTargetEnum::CODE_DEPLOY20141006_REGISTER_ON_PREMISES_INSTANCE;

    $response = $sdk->sdk->registerOnPremisesInstance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTagsFromOnPremisesInstances

Removes one or more tags from one or more on-premises instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromOnPremisesInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsFromOnPremisesInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromOnPremisesInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsFromOnPremisesInstancesRequest();
    $request->removeTagsFromOnPremisesInstancesInput = new RemoveTagsFromOnPremisesInstancesInput();
    $request->removeTagsFromOnPremisesInstancesInput->instanceNames = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->removeTagsFromOnPremisesInstancesInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = RemoveTagsFromOnPremisesInstancesXAmzTargetEnum::CODE_DEPLOY20141006_REMOVE_TAGS_FROM_ON_PREMISES_INSTANCES;

    $response = $sdk->sdk->removeTagsFromOnPremisesInstances($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~skipWaitTimeForInstanceTermination~~

In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SkipWaitTimeForInstanceTerminationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SkipWaitTimeForInstanceTerminationInput;
use \OpenAPI\OpenAPI\Models\Operations\SkipWaitTimeForInstanceTerminationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SkipWaitTimeForInstanceTerminationRequest();
    $request->skipWaitTimeForInstanceTerminationInput = new SkipWaitTimeForInstanceTerminationInput();
    $request->skipWaitTimeForInstanceTerminationInput->deploymentId = 'repellendus';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = SkipWaitTimeForInstanceTerminationXAmzTargetEnum::CODE_DEPLOY20141006_SKIP_WAIT_TIME_FOR_INSTANCE_TERMINATION;

    $response = $sdk->sdk->skipWaitTimeForInstanceTermination($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDeployment

Attempts to stop an ongoing deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopDeploymentInput;
use \OpenAPI\OpenAPI\Models\Operations\StopDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDeploymentRequest();
    $request->stopDeploymentInput = new StopDeploymentInput();
    $request->stopDeploymentInput->autoRollbackEnabled = false;
    $request->stopDeploymentInput->deploymentId = 'laudantium';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = StopDeploymentXAmzTargetEnum::CODE_DEPLOY20141006_STOP_DEPLOYMENT;

    $response = $sdk->sdk->stopDeployment($request);

    if ($response->stopDeploymentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceArn = 'ipsum';
    $request->tagResourceInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::CODE_DEPLOY20141006_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceArn = 'quod';
    $request->untagResourceInput->tagKeys = [
        'similique',
        'facilis',
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::CODE_DEPLOY20141006_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Changes the name of an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->updateApplicationInput = new UpdateApplicationInput();
    $request->updateApplicationInput->applicationName = 'impedit';
    $request->updateApplicationInput->newApplicationName = 'aut';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = UpdateApplicationXAmzTargetEnum::CODE_DEPLOY20141006_UPDATE_APPLICATION;

    $response = $sdk->sdk->updateApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeploymentGroup

Changes information about a deployment group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeploymentGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeploymentGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutoRollbackEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenDeploymentConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentReadyOption;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentReadyActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GreenFleetProvisioningOption;
use \OpenAPI\OpenAPI\Models\Shared\GreenFleetProvisioningActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlueInstanceTerminationOption;
use \OpenAPI\OpenAPI\Models\Shared\InstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentStyle;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2TagSet;
use \OpenAPI\OpenAPI\Models\Shared\ECSService;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerInfo;
use \OpenAPI\OpenAPI\Models\Shared\ELBInfo;
use \OpenAPI\OpenAPI\Models\Shared\TargetGroupInfo;
use \OpenAPI\OpenAPI\Models\Shared\TargetGroupPairInfo;
use \OpenAPI\OpenAPI\Models\Shared\TrafficRoute;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnPremisesTagSet;
use \OpenAPI\OpenAPI\Models\Shared\OutdatedInstancesStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\TriggerEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeploymentGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeploymentGroupRequest();
    $request->updateDeploymentGroupInput = new UpdateDeploymentGroupInput();
    $request->updateDeploymentGroupInput->alarmConfiguration = new AlarmConfiguration();
    $request->updateDeploymentGroupInput->alarmConfiguration->alarms = [
        new Alarm(),
        new Alarm(),
    ];
    $request->updateDeploymentGroupInput->alarmConfiguration->enabled = false;
    $request->updateDeploymentGroupInput->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->updateDeploymentGroupInput->applicationName = 'eligendi';
    $request->updateDeploymentGroupInput->autoRollbackConfiguration = new AutoRollbackConfiguration();
    $request->updateDeploymentGroupInput->autoRollbackConfiguration->enabled = false;
    $request->updateDeploymentGroupInput->autoRollbackConfiguration->events = [
        AutoRollbackEventEnum::DEPLOYMENT_FAILURE,
        AutoRollbackEventEnum::DEPLOYMENT_STOP_ON_ALARM,
    ];
    $request->updateDeploymentGroupInput->autoScalingGroups = [
        'ipsam',
        'ea',
    ];
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration = new BlueGreenDeploymentConfiguration();
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->deploymentReadyOption = new DeploymentReadyOption();
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->deploymentReadyOption->actionOnTimeout = DeploymentReadyActionEnum::CONTINUE_DEPLOYMENT;
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->deploymentReadyOption->waitTimeInMinutes = 428224;
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->greenFleetProvisioningOption = new GreenFleetProvisioningOption();
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->greenFleetProvisioningOption->action = GreenFleetProvisioningActionEnum::COPY_AUTO_SCALING_GROUP;
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->terminateBlueInstancesOnDeploymentSuccess = new BlueInstanceTerminationOption();
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->terminateBlueInstancesOnDeploymentSuccess->action = InstanceActionEnum::TERMINATE;
    $request->updateDeploymentGroupInput->blueGreenDeploymentConfiguration->terminateBlueInstancesOnDeploymentSuccess->terminationWaitTimeInMinutes = 189848;
    $request->updateDeploymentGroupInput->currentDeploymentGroupName = 'ex';
    $request->updateDeploymentGroupInput->deploymentConfigName = 'laudantium';
    $request->updateDeploymentGroupInput->deploymentStyle = new DeploymentStyle();
    $request->updateDeploymentGroupInput->deploymentStyle->deploymentOption = DeploymentOptionEnum::WITH_TRAFFIC_CONTROL;
    $request->updateDeploymentGroupInput->deploymentStyle->deploymentType = DeploymentTypeEnum::IN_PLACE;
    $request->updateDeploymentGroupInput->ec2TagFilters = [
        new Ec2TagFilter(),
        new Ec2TagFilter(),
        new Ec2TagFilter(),
        new Ec2TagFilter(),
    ];
    $request->updateDeploymentGroupInput->ec2TagSet = new Ec2TagSet();
    $request->updateDeploymentGroupInput->ec2TagSet->ec2TagSetList = [
        [
            new Ec2TagFilter(),
            new Ec2TagFilter(),
        ],
    ];
    $request->updateDeploymentGroupInput->ecsServices = [
        new ECSService(),
        new ECSService(),
        new ECSService(),
        new ECSService(),
    ];
    $request->updateDeploymentGroupInput->loadBalancerInfo = new LoadBalancerInfo();
    $request->updateDeploymentGroupInput->loadBalancerInfo->elbInfoList = [
        new ELBInfo(),
        new ELBInfo(),
        new ELBInfo(),
    ];
    $request->updateDeploymentGroupInput->loadBalancerInfo->targetGroupInfoList = [
        new TargetGroupInfo(),
        new TargetGroupInfo(),
        new TargetGroupInfo(),
        new TargetGroupInfo(),
    ];
    $request->updateDeploymentGroupInput->loadBalancerInfo->targetGroupPairInfoList = [
        new TargetGroupPairInfo(),
        new TargetGroupPairInfo(),
    ];
    $request->updateDeploymentGroupInput->newDeploymentGroupName = 'sapiente';
    $request->updateDeploymentGroupInput->onPremisesInstanceTagFilters = [
        new TagFilter(),
        new TagFilter(),
        new TagFilter(),
        new TagFilter(),
    ];
    $request->updateDeploymentGroupInput->onPremisesTagSet = new OnPremisesTagSet();
    $request->updateDeploymentGroupInput->onPremisesTagSet->onPremisesTagSetList = [
        [
            new TagFilter(),
            new TagFilter(),
        ],
        [
            new TagFilter(),
            new TagFilter(),
            new TagFilter(),
            new TagFilter(),
        ],
        [
            new TagFilter(),
            new TagFilter(),
        ],
        [
            new TagFilter(),
            new TagFilter(),
        ],
    ];
    $request->updateDeploymentGroupInput->outdatedInstancesStrategy = OutdatedInstancesStrategyEnum::UPDATE;
    $request->updateDeploymentGroupInput->serviceRoleArn = 'inventore';
    $request->updateDeploymentGroupInput->triggerConfigurations = [
        new TriggerConfig(),
        new TriggerConfig(),
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = UpdateDeploymentGroupXAmzTargetEnum::CODE_DEPLOY20141006_UPDATE_DEPLOYMENT_GROUP;

    $response = $sdk->sdk->updateDeploymentGroup($request);

    if ($response->updateDeploymentGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
