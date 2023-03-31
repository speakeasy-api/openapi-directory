# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/batch/2016-08-10/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CancelJobRequest(
    request_body=operations.CancelJobRequestBody(
        job_id="corrupti",
        reason="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.cancel_job(req)

if res.cancel_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `cancel_job` - <p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>
* `create_compute_environment` - <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code> or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>
* `create_job_queue` - <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>
* `create_scheduling_policy` - Creates an Batch scheduling policy.
* `delete_compute_environment` - <p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>
* `delete_job_queue` - <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>
* `delete_scheduling_policy` - <p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>
* `deregister_job_definition` - Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.
* `describe_compute_environments` - <p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>
* `describe_job_definitions` - Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.
* `describe_job_queues` - Describes one or more of your job queues.
* `describe_jobs` - Describes a list of Batch jobs.
* `describe_scheduling_policies` - Describes one or more of your scheduling policies.
* `list_jobs` - <p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>
* `list_scheduling_policies` - Returns a list of Batch scheduling policies.
* `list_tags_for_resource` - Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
* `register_job_definition` - Registers an Batch job definition.
* `submit_job` - <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>
* `tag_resource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
* `terminate_job` - Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.
* `untag_resource` - Deletes specified tags from an Batch resource.
* `update_compute_environment` - Updates an Batch compute environment.
* `update_job_queue` - Updates a job queue.
* `update_scheduling_policy` - Updates a scheduling policy.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
