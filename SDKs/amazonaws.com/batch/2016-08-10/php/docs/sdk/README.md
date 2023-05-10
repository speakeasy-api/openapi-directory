# SDK

## Overview

<fullname>Batch</fullname> <p>Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure. At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently provision resources d, and work toward eliminating capacity constraints, reducing your overall compute costs, and delivering results more quickly.</p> <p>As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus on analyzing results and solving your specific problems instead.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/batch/>
### Available Operations

* [cancelJob](#canceljob) - <p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>
* [createComputeEnvironment](#createcomputeenvironment) - <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code> or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>
* [createJobQueue](#createjobqueue) - <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>
* [createSchedulingPolicy](#createschedulingpolicy) - Creates an Batch scheduling policy.
* [deleteComputeEnvironment](#deletecomputeenvironment) - <p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>
* [deleteJobQueue](#deletejobqueue) - <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>
* [deleteSchedulingPolicy](#deleteschedulingpolicy) - <p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>
* [deregisterJobDefinition](#deregisterjobdefinition) - Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.
* [describeComputeEnvironments](#describecomputeenvironments) - <p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>
* [describeJobDefinitions](#describejobdefinitions) - Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.
* [describeJobQueues](#describejobqueues) - Describes one or more of your job queues.
* [describeJobs](#describejobs) - Describes a list of Batch jobs.
* [describeSchedulingPolicies](#describeschedulingpolicies) - Describes one or more of your scheduling policies.
* [listJobs](#listjobs) - <p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>
* [listSchedulingPolicies](#listschedulingpolicies) - Returns a list of Batch scheduling policies.
* [listTagsForResource](#listtagsforresource) - Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
* [registerJobDefinition](#registerjobdefinition) - Registers an Batch job definition.
* [submitJob](#submitjob) - <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
* [terminateJob](#terminatejob) - Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.
* [untagResource](#untagresource) - Deletes specified tags from an Batch resource.
* [updateComputeEnvironment](#updatecomputeenvironment) - Updates an Batch compute environment.
* [updateJobQueue](#updatejobqueue) - Updates a job queue.
* [updateSchedulingPolicy](#updateschedulingpolicy) - Updates a scheduling policy.

## cancelJob

<p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRequest();
    $request->requestBody = new CancelJobRequestBody();
    $request->requestBody->jobId = 'error';
    $request->requestBody->reason = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->cancelJob($request);

    if ($response->cancelJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createComputeEnvironment

<p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code> or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputeEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputeEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputeEnvironmentRequestBodyComputeResources;
use \OpenAPI\OpenAPI\Models\Shared\CRAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2Configuration;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTemplateSpecification;
use \OpenAPI\OpenAPI\Models\Shared\CRTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputeEnvironmentRequestBodyEksConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputeEnvironmentRequestBodyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputeEnvironmentRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComputeEnvironmentRequest();
    $request->requestBody = new CreateComputeEnvironmentRequestBody();
    $request->requestBody->computeEnvironmentName = 'suscipit';
    $request->requestBody->computeResources = new CreateComputeEnvironmentRequestBodyComputeResources();
    $request->requestBody->computeResources->allocationStrategy = CRAllocationStrategyEnum::BEST_FIT_PROGRESSIVE;
    $request->requestBody->computeResources->bidPercentage = 791725;
    $request->requestBody->computeResources->desiredvCpus = 812169;
    $request->requestBody->computeResources->ec2Configuration = [
        new Ec2Configuration(),
        new Ec2Configuration(),
        new Ec2Configuration(),
    ];
    $request->requestBody->computeResources->ec2KeyPair = 'iusto';
    $request->requestBody->computeResources->imageId = 'excepturi';
    $request->requestBody->computeResources->instanceRole = 'nisi';
    $request->requestBody->computeResources->instanceTypes = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->requestBody->computeResources->launchTemplate = new LaunchTemplateSpecification();
    $request->requestBody->computeResources->launchTemplate->launchTemplateId = 'deserunt';
    $request->requestBody->computeResources->launchTemplate->launchTemplateName = 'perferendis';
    $request->requestBody->computeResources->launchTemplate->version = 'ipsam';
    $request->requestBody->computeResources->maxvCpus = 832620;
    $request->requestBody->computeResources->minvCpus = 957156;
    $request->requestBody->computeResources->placementGroup = 'quo';
    $request->requestBody->computeResources->securityGroupIds = [
        'at',
    ];
    $request->requestBody->computeResources->spotIamFleetRole = 'at';
    $request->requestBody->computeResources->subnets = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->requestBody->computeResources->tags = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->requestBody->computeResources->type = CRTypeEnum::EC2;
    $request->requestBody->eksConfiguration = new CreateComputeEnvironmentRequestBodyEksConfiguration();
    $request->requestBody->eksConfiguration->eksClusterArn = 'deleniti';
    $request->requestBody->eksConfiguration->kubernetesNamespace = 'hic';
    $request->requestBody->serviceRole = 'optio';
    $request->requestBody->state = CreateComputeEnvironmentRequestBodyStateEnum::DISABLED;
    $request->requestBody->tags = [
        'commodi' => 'molestiae',
    ];
    $request->requestBody->type = CreateComputeEnvironmentRequestBodyTypeEnum::MANAGED;
    $request->requestBody->unmanagedvCpus = 186332;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->createComputeEnvironment($request);

    if ($response->createComputeEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJobQueue

<p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobQueueRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnvironmentOrder;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobQueueRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobQueueRequest();
    $request->requestBody = new CreateJobQueueRequestBody();
    $request->requestBody->computeEnvironmentOrder = [
        new ComputeEnvironmentOrder(),
        new ComputeEnvironmentOrder(),
    ];
    $request->requestBody->jobQueueName = 'natus';
    $request->requestBody->priority = 149675;
    $request->requestBody->schedulingPolicyArn = 'iste';
    $request->requestBody->state = CreateJobQueueRequestBodyStateEnum::ENABLED;
    $request->requestBody->tags = [
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
        'in' => 'corporis',
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->createJobQueue($request);

    if ($response->createJobQueueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSchedulingPolicy

Creates an Batch scheduling policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchedulingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchedulingPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchedulingPolicyRequestBodyFairsharePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ShareAttributes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSchedulingPolicyRequest();
    $request->requestBody = new CreateSchedulingPolicyRequestBody();
    $request->requestBody->fairsharePolicy = new CreateSchedulingPolicyRequestBodyFairsharePolicy();
    $request->requestBody->fairsharePolicy->computeReservation = 666767;
    $request->requestBody->fairsharePolicy->shareDecaySeconds = 653140;
    $request->requestBody->fairsharePolicy->shareDistribution = [
        new ShareAttributes(),
        new ShareAttributes(),
        new ShareAttributes(),
    ];
    $request->requestBody->name = 'Connie Herzog';
    $request->requestBody->tags = [
        'omnis' => 'nemo',
        'minima' => 'excepturi',
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->createSchedulingPolicy($request);

    if ($response->createSchedulingPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComputeEnvironment

<p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComputeEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComputeEnvironmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteComputeEnvironmentRequest();
    $request->requestBody = new DeleteComputeEnvironmentRequestBody();
    $request->requestBody->computeEnvironment = 'dolorem';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->deleteComputeEnvironment($request);

    if ($response->deleteComputeEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJobQueue

<p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobQueueRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobQueueRequest();
    $request->requestBody = new DeleteJobQueueRequestBody();
    $request->requestBody->jobQueue = 'quam';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->deleteJobQueue($request);

    if ($response->deleteJobQueueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSchedulingPolicy

<p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchedulingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchedulingPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSchedulingPolicyRequest();
    $request->requestBody = new DeleteSchedulingPolicyRequestBody();
    $request->requestBody->arn = 'animi';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->deleteSchedulingPolicy($request);

    if ($response->deleteSchedulingPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterJobDefinition

Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterJobDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterJobDefinitionRequest();
    $request->requestBody = new DeregisterJobDefinitionRequestBody();
    $request->requestBody->jobDefinition = 'possimus';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->deregisterJobDefinition($request);

    if ($response->deregisterJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeComputeEnvironments

<p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComputeEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComputeEnvironmentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComputeEnvironmentsRequest();
    $request->requestBody = new DescribeComputeEnvironmentsRequestBody();
    $request->requestBody->computeEnvironments = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->requestBody->maxResults = 55714;
    $request->requestBody->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->maxResults = 'dicta';
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->describeComputeEnvironments($request);

    if ($response->describeComputeEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobDefinitions

Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobDefinitionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobDefinitionsRequest();
    $request->requestBody = new DescribeJobDefinitionsRequestBody();
    $request->requestBody->jobDefinitionName = 'dolore';
    $request->requestBody->jobDefinitions = [
        'dicta',
        'harum',
    ];
    $request->requestBody->maxResults = 317983;
    $request->requestBody->nextToken = 'accusamus';
    $request->requestBody->status = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->maxResults = 'modi';
    $request->nextToken = 'praesentium';

    $response = $sdk->sdk->describeJobDefinitions($request);

    if ($response->describeJobDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobQueues

Describes one or more of your job queues.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobQueuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobQueuesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobQueuesRequest();
    $request->requestBody = new DescribeJobQueuesRequestBody();
    $request->requestBody->jobQueues = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->requestBody->maxResults = 575947;
    $request->requestBody->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->maxResults = 'deserunt';
    $request->nextToken = 'distinctio';

    $response = $sdk->sdk->describeJobQueues($request);

    if ($response->describeJobQueuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobs

Describes a list of Batch jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobsRequest();
    $request->requestBody = new DescribeJobsRequestBody();
    $request->requestBody->jobs = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->describeJobs($request);

    if ($response->describeJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSchedulingPolicies

Describes one or more of your scheduling policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSchedulingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSchedulingPoliciesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSchedulingPoliciesRequest();
    $request->requestBody = new DescribeSchedulingPoliciesRequestBody();
    $request->requestBody->arns = [
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->describeSchedulingPolicies($request);

    if ($response->describeSchedulingPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobs

<p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuesPair;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequestBodyJobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsRequest();
    $request->requestBody = new ListJobsRequestBody();
    $request->requestBody->arrayJobId = 'non';
    $request->requestBody->filters = [
        new KeyValuesPair(),
        new KeyValuesPair(),
        new KeyValuesPair(),
        new KeyValuesPair(),
    ];
    $request->requestBody->jobQueue = 'sint';
    $request->requestBody->jobStatus = ListJobsRequestBodyJobStatusEnum::RUNNABLE;
    $request->requestBody->maxResults = 592042;
    $request->requestBody->multiNodeJobId = 'necessitatibus';
    $request->requestBody->nextToken = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->maxResults = 'illum';
    $request->nextToken = 'maiores';

    $response = $sdk->sdk->listJobs($request);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchedulingPolicies

Returns a list of Batch scheduling policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSchedulingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSchedulingPoliciesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchedulingPoliciesRequest();
    $request->requestBody = new ListSchedulingPoliciesRequestBody();
    $request->requestBody->maxResults = 699479;
    $request->requestBody->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->maxResults = 'non';
    $request->nextToken = 'occaecati';

    $response = $sdk->sdk->listSchedulingPolicies($request);

    if ($response->listSchedulingPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->resourceArn = 'blanditiis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerJobDefinition

Registers an Batch job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequestBodyContainerProperties;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\FargatePlatformConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LinuxParameters;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCgroupPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tmpfs;
use \OpenAPI\OpenAPI\Models\Shared\LogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogDriverEnum;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\MountPoint;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ulimit;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\EFSVolumeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EFSAuthorizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\EFSAuthorizationConfigIAMEnum;
use \OpenAPI\OpenAPI\Models\Shared\EFSTransitEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Host;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequestBodyEksProperties;
use \OpenAPI\OpenAPI\Models\Shared\EksPodProperties;
use \OpenAPI\OpenAPI\Models\Shared\EksContainer;
use \OpenAPI\OpenAPI\Models\Shared\EksContainerEnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EksContainerResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\EksContainerSecurityContext;
use \OpenAPI\OpenAPI\Models\Shared\EksContainerVolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\EksMetadata;
use \OpenAPI\OpenAPI\Models\Shared\EksVolume;
use \OpenAPI\OpenAPI\Models\Shared\EksEmptyDir;
use \OpenAPI\OpenAPI\Models\Shared\EksHostPath;
use \OpenAPI\OpenAPI\Models\Shared\EksSecret;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequestBodyNodeProperties;
use \OpenAPI\OpenAPI\Models\Shared\NodeRangeProperty;
use \OpenAPI\OpenAPI\Models\Shared\ContainerProperties;
use \OpenAPI\OpenAPI\Models\Shared\PlatformCapabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequestBodyRetryStrategy;
use \OpenAPI\OpenAPI\Models\Shared\EvaluateOnExit;
use \OpenAPI\OpenAPI\Models\Shared\RetryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequestBodyTimeout;
use \OpenAPI\OpenAPI\Models\Operations\RegisterJobDefinitionRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterJobDefinitionRequest();
    $request->requestBody = new RegisterJobDefinitionRequestBody();
    $request->requestBody->containerProperties = new RegisterJobDefinitionRequestBodyContainerProperties();
    $request->requestBody->containerProperties->command = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->requestBody->containerProperties->environment = [
        new KeyValuePair(),
        new KeyValuePair(),
    ];
    $request->requestBody->containerProperties->ephemeralStorage = new EphemeralStorage();
    $request->requestBody->containerProperties->ephemeralStorage->sizeInGiB = 423855;
    $request->requestBody->containerProperties->executionRoleArn = 'natus';
    $request->requestBody->containerProperties->fargatePlatformConfiguration = new FargatePlatformConfiguration();
    $request->requestBody->containerProperties->fargatePlatformConfiguration->platformVersion = 'omnis';
    $request->requestBody->containerProperties->image = 'molestiae';
    $request->requestBody->containerProperties->instanceType = 'perferendis';
    $request->requestBody->containerProperties->jobRoleArn = 'nihil';
    $request->requestBody->containerProperties->linuxParameters = new LinuxParameters();
    $request->requestBody->containerProperties->linuxParameters->devices = [
        new Device(),
        new Device(),
    ];
    $request->requestBody->containerProperties->linuxParameters->initProcessEnabled = false;
    $request->requestBody->containerProperties->linuxParameters->maxSwap = 716075;
    $request->requestBody->containerProperties->linuxParameters->sharedMemorySize = 660174;
    $request->requestBody->containerProperties->linuxParameters->swappiness = 287991;
    $request->requestBody->containerProperties->linuxParameters->tmpfs = [
        new Tmpfs(),
        new Tmpfs(),
    ];
    $request->requestBody->containerProperties->logConfiguration = new LogConfiguration();
    $request->requestBody->containerProperties->logConfiguration->logDriver = LogDriverEnum::JOURNALD;
    $request->requestBody->containerProperties->logConfiguration->options = [
        'nobis' => 'eum',
        'vero' => 'aspernatur',
        'architecto' => 'magnam',
    ];
    $request->requestBody->containerProperties->logConfiguration->secretOptions = [
        new Secret(),
    ];
    $request->requestBody->containerProperties->memory = 569965;
    $request->requestBody->containerProperties->mountPoints = [
        new MountPoint(),
        new MountPoint(),
    ];
    $request->requestBody->containerProperties->networkConfiguration = new NetworkConfiguration();
    $request->requestBody->containerProperties->networkConfiguration->assignPublicIp = AssignPublicIpEnum::DISABLED;
    $request->requestBody->containerProperties->privileged = false;
    $request->requestBody->containerProperties->readonlyRootFilesystem = false;
    $request->requestBody->containerProperties->resourceRequirements = [
        new ResourceRequirement(),
        new ResourceRequirement(),
        new ResourceRequirement(),
    ];
    $request->requestBody->containerProperties->secrets = [
        new Secret(),
        new Secret(),
        new Secret(),
    ];
    $request->requestBody->containerProperties->ulimits = [
        new Ulimit(),
    ];
    $request->requestBody->containerProperties->user = 'mollitia';
    $request->requestBody->containerProperties->vcpus = 968962;
    $request->requestBody->containerProperties->volumes = [
        new Volume(),
        new Volume(),
        new Volume(),
    ];
    $request->requestBody->eksProperties = new RegisterJobDefinitionRequestBodyEksProperties();
    $request->requestBody->eksProperties->podProperties = new EksPodProperties();
    $request->requestBody->eksProperties->podProperties->containers = [
        new EksContainer(),
        new EksContainer(),
    ];
    $request->requestBody->eksProperties->podProperties->dnsPolicy = 'eum';
    $request->requestBody->eksProperties->podProperties->hostNetwork = false;
    $request->requestBody->eksProperties->podProperties->metadata = new EksMetadata();
    $request->requestBody->eksProperties->podProperties->metadata->labels = [
        'necessitatibus' => 'odit',
    ];
    $request->requestBody->eksProperties->podProperties->serviceAccountName = 'nemo';
    $request->requestBody->eksProperties->podProperties->volumes = [
        new EksVolume(),
    ];
    $request->requestBody->jobDefinitionName = 'iure';
    $request->requestBody->nodeProperties = new RegisterJobDefinitionRequestBodyNodeProperties();
    $request->requestBody->nodeProperties->mainNode = 984043;
    $request->requestBody->nodeProperties->nodeRangeProperties = [
        new NodeRangeProperty(),
        new NodeRangeProperty(),
        new NodeRangeProperty(),
        new NodeRangeProperty(),
    ];
    $request->requestBody->nodeProperties->numNodes = 260341;
    $request->requestBody->parameters = [
        'deleniti' => 'facilis',
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->requestBody->platformCapabilities = [
        PlatformCapabilityEnum::FARGATE,
        PlatformCapabilityEnum::FARGATE,
    ];
    $request->requestBody->propagateTags = false;
    $request->requestBody->retryStrategy = new RegisterJobDefinitionRequestBodyRetryStrategy();
    $request->requestBody->retryStrategy->attempts = 149448;
    $request->requestBody->retryStrategy->evaluateOnExit = [
        new EvaluateOnExit(),
        new EvaluateOnExit(),
        new EvaluateOnExit(),
        new EvaluateOnExit(),
    ];
    $request->requestBody->schedulingPriority = 868126;
    $request->requestBody->tags = [
        'consequuntur' => 'praesentium',
    ];
    $request->requestBody->timeout = new RegisterJobDefinitionRequestBodyTimeout();
    $request->requestBody->timeout->attemptDurationSeconds = 615560;
    $request->requestBody->type = RegisterJobDefinitionRequestBodyTypeEnum::CONTAINER;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->registerJobDefinition($request);

    if ($response->registerJobDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitJob

<p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequestBodyArrayProperties;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequestBodyContainerOverrides;
use \OpenAPI\OpenAPI\Models\Shared\KeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobDependency;
use \OpenAPI\OpenAPI\Models\Shared\ArrayJobDependencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequestBodyEksPropertiesOverride;
use \OpenAPI\OpenAPI\Models\Shared\EksPodPropertiesOverride;
use \OpenAPI\OpenAPI\Models\Shared\EksContainerOverride;
use \OpenAPI\OpenAPI\Models\Shared\EksContainerEnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EksContainerResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\EksMetadata;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequestBodyNodeOverrides;
use \OpenAPI\OpenAPI\Models\Shared\NodePropertyOverride;
use \OpenAPI\OpenAPI\Models\Shared\ContainerOverrides;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequestBodyRetryStrategy;
use \OpenAPI\OpenAPI\Models\Shared\EvaluateOnExit;
use \OpenAPI\OpenAPI\Models\Shared\RetryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SubmitJobRequestBodyTimeout;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitJobRequest();
    $request->requestBody = new SubmitJobRequestBody();
    $request->requestBody->arrayProperties = new SubmitJobRequestBodyArrayProperties();
    $request->requestBody->arrayProperties->size = 139972;
    $request->requestBody->containerOverrides = new SubmitJobRequestBodyContainerOverrides();
    $request->requestBody->containerOverrides->command = [
        'accusantium',
        'ab',
    ];
    $request->requestBody->containerOverrides->environment = [
        new KeyValuePair(),
        new KeyValuePair(),
        new KeyValuePair(),
        new KeyValuePair(),
    ];
    $request->requestBody->containerOverrides->instanceType = 'quidem';
    $request->requestBody->containerOverrides->memory = 373291;
    $request->requestBody->containerOverrides->resourceRequirements = [
        new ResourceRequirement(),
        new ResourceRequirement(),
    ];
    $request->requestBody->containerOverrides->vcpus = 420075;
    $request->requestBody->dependsOn = [
        new JobDependency(),
        new JobDependency(),
        new JobDependency(),
    ];
    $request->requestBody->eksPropertiesOverride = new SubmitJobRequestBodyEksPropertiesOverride();
    $request->requestBody->eksPropertiesOverride->podProperties = new EksPodPropertiesOverride();
    $request->requestBody->eksPropertiesOverride->podProperties->containers = [
        new EksContainerOverride(),
    ];
    $request->requestBody->eksPropertiesOverride->podProperties->metadata = new EksMetadata();
    $request->requestBody->eksPropertiesOverride->podProperties->metadata->labels = [
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
    ];
    $request->requestBody->jobDefinition = 'hic';
    $request->requestBody->jobName = 'libero';
    $request->requestBody->jobQueue = 'nobis';
    $request->requestBody->nodeOverrides = new SubmitJobRequestBodyNodeOverrides();
    $request->requestBody->nodeOverrides->nodePropertyOverrides = [
        new NodePropertyOverride(),
    ];
    $request->requestBody->nodeOverrides->numNodes = 339404;
    $request->requestBody->parameters = [
        'dignissimos' => 'eaque',
        'quis' => 'nesciunt',
        'eos' => 'perferendis',
    ];
    $request->requestBody->propagateTags = false;
    $request->requestBody->retryStrategy = new SubmitJobRequestBodyRetryStrategy();
    $request->requestBody->retryStrategy->attempts = 170986;
    $request->requestBody->retryStrategy->evaluateOnExit = [
        new EvaluateOnExit(),
        new EvaluateOnExit(),
        new EvaluateOnExit(),
        new EvaluateOnExit(),
    ];
    $request->requestBody->schedulingPriorityOverride = 463451;
    $request->requestBody->shareIdentifier = 'dolor';
    $request->requestBody->tags = [
        'nostrum' => 'hic',
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
    ];
    $request->requestBody->timeout = new SubmitJobRequestBodyTimeout();
    $request->requestBody->timeout->attemptDurationSeconds = 164694;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->submitJob($request);

    if ($response->submitJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'modi' => 'iste',
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->resourceArn = 'qui';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateJob

Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\TerminateJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateJobRequest();
    $request->requestBody = new TerminateJobRequestBody();
    $request->requestBody->jobId = 'ipsum';
    $request->requestBody->reason = 'hic';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->terminateJob($request);

    if ($response->terminateJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes specified tags from an Batch resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->resourceArn = 'accusamus';
    $request->tagKeys = [
        'voluptatibus',
        'voluptas',
        'natus',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComputeEnvironment

Updates an Batch compute environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComputeEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComputeEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComputeEnvironmentRequestBodyComputeResources;
use \OpenAPI\OpenAPI\Models\Shared\CRUpdateAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2Configuration;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTemplateSpecification;
use \OpenAPI\OpenAPI\Models\Shared\CRTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComputeEnvironmentRequestBodyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComputeEnvironmentRequestBodyUpdatePolicy;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateComputeEnvironmentRequest();
    $request->requestBody = new UpdateComputeEnvironmentRequestBody();
    $request->requestBody->computeEnvironment = 'eos';
    $request->requestBody->computeResources = new UpdateComputeEnvironmentRequestBodyComputeResources();
    $request->requestBody->computeResources->allocationStrategy = CRUpdateAllocationStrategyEnum::SPOT_CAPACITY_OPTIMIZED;
    $request->requestBody->computeResources->bidPercentage = 24678;
    $request->requestBody->computeResources->desiredvCpus = 854614;
    $request->requestBody->computeResources->ec2Configuration = [
        new Ec2Configuration(),
    ];
    $request->requestBody->computeResources->ec2KeyPair = 'soluta';
    $request->requestBody->computeResources->imageId = 'dolorum';
    $request->requestBody->computeResources->instanceRole = 'iusto';
    $request->requestBody->computeResources->instanceTypes = [
        'dolorum',
        'deleniti',
    ];
    $request->requestBody->computeResources->launchTemplate = new LaunchTemplateSpecification();
    $request->requestBody->computeResources->launchTemplate->launchTemplateId = 'omnis';
    $request->requestBody->computeResources->launchTemplate->launchTemplateName = 'necessitatibus';
    $request->requestBody->computeResources->launchTemplate->version = 'distinctio';
    $request->requestBody->computeResources->maxvCpus = 990339;
    $request->requestBody->computeResources->minvCpus = 469497;
    $request->requestBody->computeResources->placementGroup = 'ipsum';
    $request->requestBody->computeResources->securityGroupIds = [
        'id',
        'saepe',
    ];
    $request->requestBody->computeResources->subnets = [
        'aspernatur',
        'perferendis',
    ];
    $request->requestBody->computeResources->tags = [
        'optio' => 'accusamus',
    ];
    $request->requestBody->computeResources->type = CRTypeEnum::SPOT;
    $request->requestBody->computeResources->updateToLatestImageVersion = false;
    $request->requestBody->serviceRole = 'saepe';
    $request->requestBody->state = UpdateComputeEnvironmentRequestBodyStateEnum::ENABLED;
    $request->requestBody->unmanagedvCpus = 645785;
    $request->requestBody->updatePolicy = new UpdateComputeEnvironmentRequestBodyUpdatePolicy();
    $request->requestBody->updatePolicy->jobExecutionTimeoutMinutes = 588317;
    $request->requestBody->updatePolicy->terminateJobsOnUpdate = false;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->updateComputeEnvironment($request);

    if ($response->updateComputeEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJobQueue

Updates a job queue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobQueueRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnvironmentOrder;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobQueueRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJobQueueRequest();
    $request->requestBody = new UpdateJobQueueRequestBody();
    $request->requestBody->computeEnvironmentOrder = [
        new ComputeEnvironmentOrder(),
        new ComputeEnvironmentOrder(),
    ];
    $request->requestBody->jobQueue = 'vel';
    $request->requestBody->priority = 798047;
    $request->requestBody->schedulingPolicyArn = 'officiis';
    $request->requestBody->state = UpdateJobQueueRequestBodyStateEnum::ENABLED;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->updateJobQueue($request);

    if ($response->updateJobQueueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSchedulingPolicy

Updates a scheduling policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchedulingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchedulingPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchedulingPolicyRequestBodyFairsharePolicy;
use \OpenAPI\OpenAPI\Models\Shared\ShareAttributes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSchedulingPolicyRequest();
    $request->requestBody = new UpdateSchedulingPolicyRequestBody();
    $request->requestBody->arn = 'tenetur';
    $request->requestBody->fairsharePolicy = new UpdateSchedulingPolicyRequestBodyFairsharePolicy();
    $request->requestBody->fairsharePolicy->computeReservation = 229442;
    $request->requestBody->fairsharePolicy->shareDecaySeconds = 730856;
    $request->requestBody->fairsharePolicy->shareDistribution = [
        new ShareAttributes(),
        new ShareAttributes(),
        new ShareAttributes(),
        new ShareAttributes(),
    ];
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->updateSchedulingPolicy($request);

    if ($response->updateSchedulingPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
