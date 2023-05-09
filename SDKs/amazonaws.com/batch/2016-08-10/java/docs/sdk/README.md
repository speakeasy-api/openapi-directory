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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelJobRequest;
import org.openapis.openapi.models.operations.CancelJobRequestBody;
import org.openapis.openapi.models.operations.CancelJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRequest req = new CancelJobRequest(                new CancelJobRequestBody("suscipit", "iure");) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CancelJobResponse res = sdk.sdk.cancelJob(req);

            if (res.cancelJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createComputeEnvironment

<p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code> or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComputeEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateComputeEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateComputeEnvironmentRequestBodyComputeResources;
import org.openapis.openapi.models.operations.CreateComputeEnvironmentRequestBodyEksConfiguration;
import org.openapis.openapi.models.operations.CreateComputeEnvironmentRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateComputeEnvironmentRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateComputeEnvironmentResponse;
import org.openapis.openapi.models.shared.CRAllocationStrategyEnum;
import org.openapis.openapi.models.shared.CRTypeEnum;
import org.openapis.openapi.models.shared.Ec2Configuration;
import org.openapis.openapi.models.shared.LaunchTemplateSpecification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComputeEnvironmentRequest req = new CreateComputeEnvironmentRequest(                new CreateComputeEnvironmentRequestBody("placeat", CreateComputeEnvironmentRequestBodyTypeEnum.UNMANAGED) {{
                                computeResources = new CreateComputeEnvironmentRequestBodyComputeResources() {{
                                    allocationStrategy = CRAllocationStrategyEnum.BEST_FIT_PROGRESSIVE;
                                    bidPercentage = 568045L;
                                    desiredvCpus = 392785L;
                                    ec2Configuration = new org.openapis.openapi.models.shared.Ec2Configuration[]{{
                                        add(new Ec2Configuration("veritatis") {{
                                            imageIdOverride = "temporibus";
                                            imageKubernetesVersion = "ab";
                                            imageType = "quis";
                                        }}),
                                        add(new Ec2Configuration("repellendus") {{
                                            imageIdOverride = "deserunt";
                                            imageKubernetesVersion = "perferendis";
                                            imageType = "ipsam";
                                        }}),
                                        add(new Ec2Configuration("at") {{
                                            imageIdOverride = "sapiente";
                                            imageKubernetesVersion = "quo";
                                            imageType = "odit";
                                        }}),
                                        add(new Ec2Configuration("quod") {{
                                            imageIdOverride = "at";
                                            imageKubernetesVersion = "maiores";
                                            imageType = "molestiae";
                                        }}),
                                    }};
                                    ec2KeyPair = "quod";
                                    imageId = "esse";
                                    instanceRole = "totam";
                                    instanceTypes = new String[]{{
                                        add("dolorum"),
                                        add("dicta"),
                                        add("nam"),
                                        add("officia"),
                                    }};
                                    launchTemplate = new LaunchTemplateSpecification() {{
                                        launchTemplateId = "occaecati";
                                        launchTemplateName = "fugit";
                                        version = "deleniti";
                                    }};;
                                    maxvCpus = 944669L;
                                    minvCpus = 758616L;
                                    placementGroup = "totam";
                                    securityGroupIds = new String[]{{
                                        add("commodi"),
                                    }};
                                    spotIamFleetRole = "molestiae";
                                    subnets = new String[]{{
                                        add("qui"),
                                        add("impedit"),
                                    }};
                                    tags = new java.util.HashMap<String, String>() {{
                                        put("esse", "ipsum");
                                        put("excepturi", "aspernatur");
                                        put("perferendis", "ad");
                                    }};
                                    type = CRTypeEnum.FARGATE;
                                }};;
                                eksConfiguration = new CreateComputeEnvironmentRequestBodyEksConfiguration() {{
                                    eksClusterArn = "sed";
                                    kubernetesNamespace = "iste";
                                }};;
                                serviceRole = "dolor";
                                state = CreateComputeEnvironmentRequestBodyStateEnum.DISABLED;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("hic", "saepe");
                                    put("fuga", "in");
                                }};
                                unmanagedvCpus = 359508L;
                            }};) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            CreateComputeEnvironmentResponse res = sdk.sdk.createComputeEnvironment(req);

            if (res.createComputeEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createJobQueue

<p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateJobQueueRequest;
import org.openapis.openapi.models.operations.CreateJobQueueRequestBody;
import org.openapis.openapi.models.operations.CreateJobQueueRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateJobQueueResponse;
import org.openapis.openapi.models.shared.ComputeEnvironmentOrder;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateJobQueueRequest req = new CreateJobQueueRequest(                new CreateJobQueueRequestBody(                new org.openapis.openapi.models.shared.ComputeEnvironmentOrder[]{{
                                                add(new ComputeEnvironmentOrder("dolorem", 358152L) {{
                                                    computeEnvironment = "laborum";
                                                    order = 170909L;
                                                }}),
                                                add(new ComputeEnvironmentOrder("enim", 607831L) {{
                                                    computeEnvironment = "explicabo";
                                                    order = 750686L;
                                                }}),
                                                add(new ComputeEnvironmentOrder("excepturi", 38425L) {{
                                                    computeEnvironment = "nemo";
                                                    order = 325047L;
                                                }}),
                                            }}, "iure", 634274L) {{
                                schedulingPolicyArn = "doloribus";
                                state = CreateJobQueueRequestBodyStateEnum.DISABLED;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("mollitia", "dolorem");
                                }};
                            }};) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            CreateJobQueueResponse res = sdk.sdk.createJobQueue(req);

            if (res.createJobQueueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSchedulingPolicy

Creates an Batch scheduling policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSchedulingPolicyRequest;
import org.openapis.openapi.models.operations.CreateSchedulingPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateSchedulingPolicyRequestBodyFairsharePolicy;
import org.openapis.openapi.models.operations.CreateSchedulingPolicyResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShareAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSchedulingPolicyRequest req = new CreateSchedulingPolicyRequest(                new CreateSchedulingPolicyRequestBody("molestiae") {{
                                fairsharePolicy = new CreateSchedulingPolicyRequestBodyFairsharePolicy() {{
                                    computeReservation = 244425L;
                                    shareDecaySeconds = 623510L;
                                    shareDistribution = new org.openapis.openapi.models.shared.ShareAttributes[]{{
                                        add(new ShareAttributes("laborum") {{
                                            shareIdentifier = "quis";
                                            weightFactor = 1103.75;
                                        }}),
                                    }};
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("enim", "odit");
                                    put("quo", "sequi");
                                    put("tenetur", "ipsam");
                                }};
                            }};) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            CreateSchedulingPolicyResponse res = sdk.sdk.createSchedulingPolicy(req);

            if (res.createSchedulingPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteComputeEnvironment

<p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteComputeEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteComputeEnvironmentRequestBody;
import org.openapis.openapi.models.operations.DeleteComputeEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteComputeEnvironmentRequest req = new DeleteComputeEnvironmentRequest(                new DeleteComputeEnvironmentRequestBody("reiciendis");) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteComputeEnvironmentResponse res = sdk.sdk.deleteComputeEnvironment(req);

            if (res.deleteComputeEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteJobQueue

<p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJobQueueRequest;
import org.openapis.openapi.models.operations.DeleteJobQueueRequestBody;
import org.openapis.openapi.models.operations.DeleteJobQueueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteJobQueueRequest req = new DeleteJobQueueRequest(                new DeleteJobQueueRequestBody("cum");) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            DeleteJobQueueResponse res = sdk.sdk.deleteJobQueue(req);

            if (res.deleteJobQueueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSchedulingPolicy

<p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSchedulingPolicyRequest;
import org.openapis.openapi.models.operations.DeleteSchedulingPolicyRequestBody;
import org.openapis.openapi.models.operations.DeleteSchedulingPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSchedulingPolicyRequest req = new DeleteSchedulingPolicyRequest(                new DeleteSchedulingPolicyRequestBody("iusto");) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            DeleteSchedulingPolicyResponse res = sdk.sdk.deleteSchedulingPolicy(req);

            if (res.deleteSchedulingPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterJobDefinition

Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterJobDefinitionRequest;
import org.openapis.openapi.models.operations.DeregisterJobDefinitionRequestBody;
import org.openapis.openapi.models.operations.DeregisterJobDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterJobDefinitionRequest req = new DeregisterJobDefinitionRequest(                new DeregisterJobDefinitionRequestBody("quidem");) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
            }};            

            DeregisterJobDefinitionResponse res = sdk.sdk.deregisterJobDefinition(req);

            if (res.deregisterJobDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeComputeEnvironments

<p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComputeEnvironmentsRequest;
import org.openapis.openapi.models.operations.DescribeComputeEnvironmentsRequestBody;
import org.openapis.openapi.models.operations.DescribeComputeEnvironmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComputeEnvironmentsRequest req = new DescribeComputeEnvironmentsRequest(                new DescribeComputeEnvironmentsRequestBody() {{
                                computeEnvironments = new String[]{{
                                    add("sint"),
                                    add("veritatis"),
                                    add("itaque"),
                                    add("incidunt"),
                                }};
                                maxResults = 318569L;
                                nextToken = "consequatur";
                            }};) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
                maxResults = "modi";
                nextToken = "qui";
            }};            

            DescribeComputeEnvironmentsResponse res = sdk.sdk.describeComputeEnvironments(req);

            if (res.describeComputeEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobDefinitions

Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobDefinitionsRequest;
import org.openapis.openapi.models.operations.DescribeJobDefinitionsRequestBody;
import org.openapis.openapi.models.operations.DescribeJobDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobDefinitionsRequest req = new DescribeJobDefinitionsRequest(                new DescribeJobDefinitionsRequestBody() {{
                                jobDefinitionName = "cupiditate";
                                jobDefinitions = new String[]{{
                                    add("perferendis"),
                                    add("magni"),
                                    add("assumenda"),
                                }};
                                maxResults = 369808L;
                                nextToken = "alias";
                                status = "fugit";
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
                maxResults = "eum";
                nextToken = "non";
            }};            

            DescribeJobDefinitionsResponse res = sdk.sdk.describeJobDefinitions(req);

            if (res.describeJobDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobQueues

Describes one or more of your job queues.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobQueuesRequest;
import org.openapis.openapi.models.operations.DescribeJobQueuesRequestBody;
import org.openapis.openapi.models.operations.DescribeJobQueuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobQueuesRequest req = new DescribeJobQueuesRequest(                new DescribeJobQueuesRequestBody() {{
                                jobQueues = new String[]{{
                                    add("aliquid"),
                                    add("provident"),
                                    add("necessitatibus"),
                                }};
                                maxResults = 572252L;
                                nextToken = "officia";
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
                maxResults = "maiores";
                nextToken = "rerum";
            }};            

            DescribeJobQueuesResponse res = sdk.sdk.describeJobQueues(req);

            if (res.describeJobQueuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeJobs

Describes a list of Batch jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobsRequest;
import org.openapis.openapi.models.operations.DescribeJobsRequestBody;
import org.openapis.openapi.models.operations.DescribeJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobsRequest req = new DescribeJobsRequest(                new DescribeJobsRequestBody(                new String[]{{
                                                add("cumque"),
                                                add("facere"),
                                            }});) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            DescribeJobsResponse res = sdk.sdk.describeJobs(req);

            if (res.describeJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSchedulingPolicies

Describes one or more of your scheduling policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSchedulingPoliciesRequest;
import org.openapis.openapi.models.operations.DescribeSchedulingPoliciesRequestBody;
import org.openapis.openapi.models.operations.DescribeSchedulingPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSchedulingPoliciesRequest req = new DescribeSchedulingPoliciesRequest(                new DescribeSchedulingPoliciesRequestBody(                new String[]{{
                                                add("quidem"),
                                                add("provident"),
                                                add("nam"),
                                                add("id"),
                                            }});) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            DescribeSchedulingPoliciesResponse res = sdk.sdk.describeSchedulingPolicies(req);

            if (res.describeSchedulingPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobs

<p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobsRequest;
import org.openapis.openapi.models.operations.ListJobsRequestBody;
import org.openapis.openapi.models.operations.ListJobsRequestBodyJobStatusEnum;
import org.openapis.openapi.models.operations.ListJobsResponse;
import org.openapis.openapi.models.shared.KeyValuesPair;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobsRequest req = new ListJobsRequest(                new ListJobsRequestBody() {{
                                arrayJobId = "omnis";
                                filters = new org.openapis.openapi.models.shared.KeyValuesPair[]{{
                                    add(new KeyValuesPair() {{
                                        name = "Marcia Gutkowski";
                                        values = new String[]{{
                                            add("labore"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new KeyValuesPair() {{
                                        name = "Robin Keebler";
                                        values = new String[]{{
                                            add("magnam"),
                                        }};
                                    }}),
                                }};
                                jobQueue = "et";
                                jobStatus = ListJobsRequestBodyJobStatusEnum.STARTING;
                                maxResults = 354047L;
                                multiNodeJobId = "provident";
                                nextToken = "quos";
                            }};) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
                maxResults = "dolor";
                nextToken = "necessitatibus";
            }};            

            ListJobsResponse res = sdk.sdk.listJobs(req);

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSchedulingPolicies

Returns a list of Batch scheduling policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSchedulingPoliciesRequest;
import org.openapis.openapi.models.operations.ListSchedulingPoliciesRequestBody;
import org.openapis.openapi.models.operations.ListSchedulingPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSchedulingPoliciesRequest req = new ListSchedulingPoliciesRequest(                new ListSchedulingPoliciesRequestBody() {{
                                maxResults = 367562L;
                                nextToken = "quasi";
                            }};) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
                maxResults = "in";
                nextToken = "architecto";
            }};            

            ListSchedulingPoliciesResponse res = sdk.sdk.listSchedulingPolicies(req);

            if (res.listSchedulingPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("repudiandae") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerJobDefinition

Registers an Batch job definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequest;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequestBody;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequestBodyContainerProperties;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequestBodyEksProperties;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequestBodyNodeProperties;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequestBodyRetryStrategy;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequestBodyTimeout;
import org.openapis.openapi.models.operations.RegisterJobDefinitionRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.RegisterJobDefinitionResponse;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.ContainerProperties;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum;
import org.openapis.openapi.models.shared.EFSAuthorizationConfig;
import org.openapis.openapi.models.shared.EFSAuthorizationConfigIAMEnum;
import org.openapis.openapi.models.shared.EFSTransitEncryptionEnum;
import org.openapis.openapi.models.shared.EFSVolumeConfiguration;
import org.openapis.openapi.models.shared.EksContainer;
import org.openapis.openapi.models.shared.EksContainerEnvironmentVariable;
import org.openapis.openapi.models.shared.EksContainerResourceRequirements;
import org.openapis.openapi.models.shared.EksContainerSecurityContext;
import org.openapis.openapi.models.shared.EksContainerVolumeMount;
import org.openapis.openapi.models.shared.EksEmptyDir;
import org.openapis.openapi.models.shared.EksHostPath;
import org.openapis.openapi.models.shared.EksMetadata;
import org.openapis.openapi.models.shared.EksPodProperties;
import org.openapis.openapi.models.shared.EksSecret;
import org.openapis.openapi.models.shared.EksVolume;
import org.openapis.openapi.models.shared.EphemeralStorage;
import org.openapis.openapi.models.shared.EvaluateOnExit;
import org.openapis.openapi.models.shared.FargatePlatformConfiguration;
import org.openapis.openapi.models.shared.Host;
import org.openapis.openapi.models.shared.KeyValuePair;
import org.openapis.openapi.models.shared.LinuxParameters;
import org.openapis.openapi.models.shared.LogConfiguration;
import org.openapis.openapi.models.shared.LogDriverEnum;
import org.openapis.openapi.models.shared.MountPoint;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.NodeRangeProperty;
import org.openapis.openapi.models.shared.PlatformCapabilityEnum;
import org.openapis.openapi.models.shared.ResourceRequirement;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.RetryActionEnum;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tmpfs;
import org.openapis.openapi.models.shared.Ulimit;
import org.openapis.openapi.models.shared.Volume;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterJobDefinitionRequest req = new RegisterJobDefinitionRequest(                new RegisterJobDefinitionRequestBody("accusantium", RegisterJobDefinitionRequestBodyTypeEnum.CONTAINER) {{
                                containerProperties = new RegisterJobDefinitionRequestBodyContainerProperties() {{
                                    command = new String[]{{
                                        add("natus"),
                                        add("magni"),
                                        add("sunt"),
                                    }};
                                    environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                        add(new KeyValuePair() {{
                                            name = "Ervin Schoen";
                                            value = "odit";
                                        }}),
                                        add(new KeyValuePair() {{
                                            name = "Donna Bernhard";
                                            value = "ipsam";
                                        }}),
                                        add(new KeyValuePair() {{
                                            name = "Dr. Stacey Reichert";
                                            value = "voluptatibus";
                                        }}),
                                        add(new KeyValuePair() {{
                                            name = "Miss Ginger Feeney";
                                            value = "hic";
                                        }}),
                                    }};
                                    ephemeralStorage = new EphemeralStorage(729991L);;
                                    executionRoleArn = "nobis";
                                    fargatePlatformConfiguration = new FargatePlatformConfiguration() {{
                                        platformVersion = "dolores";
                                    }};;
                                    image = "quis";
                                    instanceType = "totam";
                                    jobRoleArn = "dignissimos";
                                    linuxParameters = new LinuxParameters() {{
                                        devices = new org.openapis.openapi.models.shared.Device[]{{
                                            add(new Device("dolores") {{
                                                containerPath = "quis";
                                                hostPath = "nesciunt";
                                                permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                    add(DeviceCgroupPermissionEnum.READ),
                                                }};
                                            }}),
                                        }};
                                        initProcessEnabled = false;
                                        maxSwap = 793698L;
                                        sharedMemorySize = 463451L;
                                        swappiness = 223924L;
                                        tmpfs = new org.openapis.openapi.models.shared.Tmpfs[]{{
                                            add(new Tmpfs("porro", 164694L) {{
                                                containerPath = "nostrum";
                                                mountOptions = new String[]{{
                                                    add("recusandae"),
                                                    add("omnis"),
                                                    add("facilis"),
                                                    add("perspiciatis"),
                                                }};
                                                size = 31838L;
                                            }}),
                                            add(new Tmpfs("asperiores", 934214L) {{
                                                containerPath = "blanditiis";
                                                mountOptions = new String[]{{
                                                    add("eaque"),
                                                    add("occaecati"),
                                                    add("rerum"),
                                                }};
                                                size = 237893L;
                                            }}),
                                            add(new Tmpfs("nobis", 730122L) {{
                                                containerPath = "modi";
                                                mountOptions = new String[]{{
                                                    add("dolorum"),
                                                    add("deleniti"),
                                                    add("pariatur"),
                                                }};
                                                size = 589910L;
                                            }}),
                                            add(new Tmpfs("dolorem", 222443L) {{
                                                containerPath = "delectus";
                                                mountOptions = new String[]{{
                                                    add("quos"),
                                                    add("aliquid"),
                                                }};
                                                size = 212390L;
                                            }}),
                                        }};
                                    }};;
                                    logConfiguration = new LogConfiguration(LogDriverEnum.SYSLOG) {{
                                        options = new java.util.HashMap<String, String>() {{
                                            put("hic", "excepturi");
                                        }};
                                        secretOptions = new org.openapis.openapi.models.shared.Secret[]{{
                                            add(new Secret("veritatis", "ipsa") {{
                                                name = "Marian Wisozk";
                                                valueFrom = "numquam";
                                            }}),
                                            add(new Secret("voluptatibus", "voluptas") {{
                                                name = "Vera Kuhlman";
                                                valueFrom = "quidem";
                                            }}),
                                            add(new Secret("iusto", "voluptate") {{
                                                name = "Dr. Craig Littel DDS";
                                                valueFrom = "dolorum";
                                            }}),
                                        }};
                                    }};;
                                    memory = 677082L;
                                    mountPoints = new org.openapis.openapi.models.shared.MountPoint[]{{
                                        add(new MountPoint() {{
                                            containerPath = "omnis";
                                            readOnly = false;
                                            sourceVolume = "necessitatibus";
                                        }}),
                                        add(new MountPoint() {{
                                            containerPath = "distinctio";
                                            readOnly = false;
                                            sourceVolume = "asperiores";
                                        }}),
                                        add(new MountPoint() {{
                                            containerPath = "nihil";
                                            readOnly = false;
                                            sourceVolume = "ipsum";
                                        }}),
                                    }};
                                    networkConfiguration = new NetworkConfiguration() {{
                                        assignPublicIp = AssignPublicIpEnum.ENABLED;
                                    }};;
                                    privileged = false;
                                    readonlyRootFilesystem = false;
                                    resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                        add(new ResourceRequirement(ResourceTypeEnum.GPU, "perferendis") {{
                                            type = ResourceTypeEnum.MEMORY;
                                            value = "eius";
                                        }}),
                                        add(new ResourceRequirement(ResourceTypeEnum.MEMORY, "ad") {{
                                            type = ResourceTypeEnum.GPU;
                                            value = "optio";
                                        }}),
                                        add(new ResourceRequirement(ResourceTypeEnum.VCPU, "provident") {{
                                            type = ResourceTypeEnum.MEMORY;
                                            value = "suscipit";
                                        }}),
                                    }};
                                    secrets = new org.openapis.openapi.models.shared.Secret[]{{
                                        add(new Secret("vel", "quod") {{
                                            name = "Dr. Jimmie Murphy";
                                            valueFrom = "tempora";
                                        }}),
                                        add(new Secret("iusto", "ipsum") {{
                                            name = "Clarence Parisian";
                                            valueFrom = "harum";
                                        }}),
                                    }};
                                    ulimits = new org.openapis.openapi.models.shared.Ulimit[]{{
                                        add(new Ulimit(957451L, "totam", 471752L) {{
                                            hardLimit = 947371L;
                                            name = "Kelli Thompson";
                                            softLimit = 213312L;
                                        }}),
                                        add(new Ulimit(646265L, "quam", 214880L) {{
                                            hardLimit = 25662L;
                                            name = "Luis Cremin";
                                            softLimit = 374170L;
                                        }}),
                                        add(new Ulimit(674848L, "totam", 276894L) {{
                                            hardLimit = 277628L;
                                            name = "Shelly Schoen";
                                            softLimit = 117531L;
                                        }}),
                                        add(new Ulimit(840429L, "qui", 204865L) {{
                                            hardLimit = 132068L;
                                            name = "Verna Purdy";
                                            softLimit = 565421L;
                                        }}),
                                    }};
                                    user = "fugit";
                                    vcpus = 164959L;
                                    volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                        add(new Volume() {{
                                            efsVolumeConfiguration = new EFSVolumeConfiguration("soluta") {{
                                                authorizationConfig = new EFSAuthorizationConfig() {{
                                                    accessPointId = "sunt";
                                                    iam = EFSAuthorizationConfigIAMEnum.ENABLED;
                                                }};
                                                fileSystemId = "nam";
                                                rootDirectory = "hic";
                                                transitEncryption = EFSTransitEncryptionEnum.ENABLED;
                                                transitEncryptionPort = 765326L;
                                            }};
                                            host = new Host() {{
                                                sourcePath = "nobis";
                                            }};
                                            name = "Miss Kerry Emmerich";
                                        }}),
                                        add(new Volume() {{
                                            efsVolumeConfiguration = new EFSVolumeConfiguration("labore") {{
                                                authorizationConfig = new EFSAuthorizationConfig() {{
                                                    accessPointId = "tempore";
                                                    iam = EFSAuthorizationConfigIAMEnum.DISABLED;
                                                }};
                                                fileSystemId = "aperiam";
                                                rootDirectory = "delectus";
                                                transitEncryption = EFSTransitEncryptionEnum.ENABLED;
                                                transitEncryptionPort = 292147L;
                                            }};
                                            host = new Host() {{
                                                sourcePath = "adipisci";
                                            }};
                                            name = "Ms. Joe Berge";
                                        }}),
                                    }};
                                }};;
                                eksProperties = new RegisterJobDefinitionRequestBodyEksProperties() {{
                                    podProperties = new EksPodProperties() {{
                                        containers = new org.openapis.openapi.models.shared.EksContainer[]{{
                                            add(new EksContainer("doloribus") {{
                                                args = new String[]{{
                                                    add("repellendus"),
                                                    add("porro"),
                                                    add("doloribus"),
                                                }};
                                                command = new String[]{{
                                                    add("facilis"),
                                                    add("cupiditate"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EksContainerEnvironmentVariable[]{{
                                                    add(new EksContainerEnvironmentVariable("vero") {{
                                                        name = "Marsha Kuhic";
                                                        value = "quisquam";
                                                    }}),
                                                }};
                                                image = "omnis";
                                                imagePullPolicy = "quis";
                                                name = "Dixie Klocko";
                                                resources = new EksContainerResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("dignissimos", "hic");
                                                        put("distinctio", "quod");
                                                        put("odio", "similique");
                                                        put("facilis", "vero");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("dolore", "quibusdam");
                                                        put("illum", "sequi");
                                                    }};
                                                }};
                                                securityContext = new EksContainerSecurityContext() {{
                                                    privileged = false;
                                                    readOnlyRootFilesystem = false;
                                                    runAsGroup = 617877L;
                                                    runAsNonRoot = false;
                                                    runAsUser = 773326L;
                                                }};
                                                volumeMounts = new org.openapis.openapi.models.shared.EksContainerVolumeMount[]{{
                                                    add(new EksContainerVolumeMount() {{
                                                        mountPath = "voluptatibus";
                                                        name = "Freda Cormier";
                                                        readOnly = false;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        dnsPolicy = "iusto";
                                        hostNetwork = false;
                                        metadata = new EksMetadata() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("ducimus", "alias");
                                                put("officia", "tempora");
                                                put("ipsam", "ea");
                                                put("aspernatur", "vel");
                                            }};
                                        }};;
                                        serviceAccountName = "possimus";
                                        volumes = new org.openapis.openapi.models.shared.EksVolume[]{{
                                            add(new EksVolume("nostrum") {{
                                                emptyDir = new EksEmptyDir() {{
                                                    medium = "ratione";
                                                    sizeLimit = "ex";
                                                }};
                                                hostPath = new EksHostPath() {{
                                                    path = "laudantium";
                                                }};
                                                name = "Ms. Cindy Wuckert";
                                                secret = new EksSecret("voluptatibus") {{
                                                    optional = false;
                                                    secretName = "excepturi";
                                                }};
                                            }}),
                                            add(new EksVolume("ea") {{
                                                emptyDir = new EksEmptyDir() {{
                                                    medium = "sapiente";
                                                    sizeLimit = "quisquam";
                                                }};
                                                hostPath = new EksHostPath() {{
                                                    path = "saepe";
                                                }};
                                                name = "Krista Herzog";
                                                secret = new EksSecret("magnam") {{
                                                    optional = false;
                                                    secretName = "inventore";
                                                }};
                                            }}),
                                        }};
                                    }};;
                                }};;
                                nodeProperties = new RegisterJobDefinitionRequestBodyNodeProperties() {{
                                    mainNode = 775220L;
                                    nodeRangeProperties = new org.openapis.openapi.models.shared.NodeRangeProperty[]{{
                                        add(new NodeRangeProperty("quod") {{
                                            container = new ContainerProperties() {{
                                                command = new String[]{{
                                                    add("aspernatur"),
                                                    add("minima"),
                                                    add("eaque"),
                                                    add("a"),
                                                }};
                                                environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                    add(new KeyValuePair() {{
                                                        name = "Jennifer Lesch";
                                                        value = "fugit";
                                                    }}),
                                                    add(new KeyValuePair() {{
                                                        name = "Miss Dennis Friesen";
                                                        value = "placeat";
                                                    }}),
                                                    add(new KeyValuePair() {{
                                                        name = "Agnes Johnston";
                                                        value = "assumenda";
                                                    }}),
                                                }};
                                                ephemeralStorage = new EphemeralStorage(379034L) {{
                                                    sizeInGiB = 860552L;
                                                }};
                                                executionRoleArn = "libero";
                                                fargatePlatformConfiguration = new FargatePlatformConfiguration() {{
                                                    platformVersion = "quasi";
                                                }};
                                                image = "tempora";
                                                instanceType = "numquam";
                                                jobRoleArn = "explicabo";
                                                linuxParameters = new LinuxParameters() {{
                                                    devices = new org.openapis.openapi.models.shared.Device[]{{
                                                        add(new Device("esse") {{
                                                            containerPath = "ipsa";
                                                            hostPath = "molestiae";
                                                            permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                add(DeviceCgroupPermissionEnum.WRITE),
                                                                add(DeviceCgroupPermissionEnum.READ),
                                                            }};
                                                        }}),
                                                        add(new Device("ut") {{
                                                            containerPath = "esse";
                                                            hostPath = "rem";
                                                            permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                add(DeviceCgroupPermissionEnum.WRITE),
                                                                add(DeviceCgroupPermissionEnum.MKNOD),
                                                                add(DeviceCgroupPermissionEnum.MKNOD),
                                                            }};
                                                        }}),
                                                        add(new Device("ipsa") {{
                                                            containerPath = "eum";
                                                            hostPath = "suscipit";
                                                            permissions = new org.openapis.openapi.models.shared.DeviceCgroupPermissionEnum[]{{
                                                                add(DeviceCgroupPermissionEnum.READ),
                                                                add(DeviceCgroupPermissionEnum.WRITE),
                                                                add(DeviceCgroupPermissionEnum.MKNOD),
                                                                add(DeviceCgroupPermissionEnum.READ),
                                                            }};
                                                        }}),
                                                    }};
                                                    initProcessEnabled = false;
                                                    maxSwap = 660040L;
                                                    sharedMemorySize = 696997L;
                                                    swappiness = 206594L;
                                                    tmpfs = new org.openapis.openapi.models.shared.Tmpfs[]{{
                                                        add(new Tmpfs("cupiditate", 9688L) {{
                                                            containerPath = "illum";
                                                            mountOptions = new String[]{{
                                                                add("fuga"),
                                                                add("eius"),
                                                                add("eos"),
                                                                add("voluptas"),
                                                            }};
                                                            size = 69859L;
                                                        }}),
                                                        add(new Tmpfs("recusandae", 44612L) {{
                                                            containerPath = "tempora";
                                                            mountOptions = new String[]{{
                                                                add("ipsam"),
                                                                add("aspernatur"),
                                                                add("sequi"),
                                                                add("quo"),
                                                            }};
                                                            size = 459856L;
                                                        }}),
                                                        add(new Tmpfs("aliquam", 488410L) {{
                                                            containerPath = "distinctio";
                                                            mountOptions = new String[]{{
                                                                add("dignissimos"),
                                                                add("inventore"),
                                                                add("nihil"),
                                                                add("totam"),
                                                            }};
                                                            size = 882710L;
                                                        }}),
                                                        add(new Tmpfs("molestiae", 35362L) {{
                                                            containerPath = "occaecati";
                                                            mountOptions = new String[]{{
                                                                add("sapiente"),
                                                                add("dolores"),
                                                            }};
                                                            size = 645570L;
                                                        }}),
                                                    }};
                                                }};
                                                logConfiguration = new LogConfiguration(LogDriverEnum.SPLUNK) {{
                                                    logDriver = LogDriverEnum.AWSLOGS;
                                                    options = new java.util.HashMap<String, String>() {{
                                                        put("quas", "praesentium");
                                                        put("consequuntur", "deleniti");
                                                    }};
                                                    secretOptions = new org.openapis.openapi.models.shared.Secret[]{{
                                                        add(new Secret("nisi", "fugit") {{
                                                            name = "Hubert Gottlieb";
                                                            valueFrom = "minima";
                                                        }}),
                                                    }};
                                                }};
                                                memory = 159870L;
                                                mountPoints = new org.openapis.openapi.models.shared.MountPoint[]{{
                                                    add(new MountPoint() {{
                                                        containerPath = "explicabo";
                                                        readOnly = false;
                                                        sourceVolume = "saepe";
                                                    }}),
                                                }};
                                                networkConfiguration = new NetworkConfiguration() {{
                                                    assignPublicIp = AssignPublicIpEnum.DISABLED;
                                                }};
                                                privileged = false;
                                                readonlyRootFilesystem = false;
                                                resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                    add(new ResourceRequirement(ResourceTypeEnum.MEMORY, "accusamus") {{
                                                        type = ResourceTypeEnum.GPU;
                                                        value = "esse";
                                                    }}),
                                                    add(new ResourceRequirement(ResourceTypeEnum.MEMORY, "nam") {{
                                                        type = ResourceTypeEnum.GPU;
                                                        value = "esse";
                                                    }}),
                                                    add(new ResourceRequirement(ResourceTypeEnum.GPU, "saepe") {{
                                                        type = ResourceTypeEnum.MEMORY;
                                                        value = "aliquid";
                                                    }}),
                                                }};
                                                secrets = new org.openapis.openapi.models.shared.Secret[]{{
                                                    add(new Secret("eligendi", "sit") {{
                                                        name = "Javier Price";
                                                        valueFrom = "distinctio";
                                                    }}),
                                                    add(new Secret("minus", "quaerat") {{
                                                        name = "Randolph Fisher";
                                                        valueFrom = "consequatur";
                                                    }}),
                                                }};
                                                ulimits = new org.openapis.openapi.models.shared.Ulimit[]{{
                                                    add(new Ulimit(457223L, "quasi", 951875L) {{
                                                        hardLimit = 232865L;
                                                        name = "Mattie McLaughlin";
                                                        softLimit = 557811L;
                                                    }}),
                                                    add(new Ulimit(815524L, "veritatis", 159414L) {{
                                                        hardLimit = 621679L;
                                                        name = "Jody Schuster";
                                                        softLimit = 992430L;
                                                    }}),
                                                    add(new Ulimit(447378L, "eius", 727697L) {{
                                                        hardLimit = 94458L;
                                                        name = "Shannon Jacobi DVM";
                                                        softLimit = 424032L;
                                                    }}),
                                                    add(new Ulimit(356707L, "nisi", 16328L) {{
                                                        hardLimit = 849039L;
                                                        name = "Kenneth Hackett II";
                                                        softLimit = 443879L;
                                                    }}),
                                                }};
                                                user = "voluptatum";
                                                vcpus = 185232L;
                                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                                    add(new Volume() {{
                                                        efsVolumeConfiguration = new EFSVolumeConfiguration("tenetur") {{
                                                            authorizationConfig = new EFSAuthorizationConfig() {{
                                                                accessPointId = "ex";
                                                                iam = EFSAuthorizationConfigIAMEnum.DISABLED;
                                                            }};
                                                            fileSystemId = "itaque";
                                                            rootDirectory = "dolorum";
                                                            transitEncryption = EFSTransitEncryptionEnum.ENABLED;
                                                            transitEncryptionPort = 609178L;
                                                        }};
                                                        host = new Host() {{
                                                            sourcePath = "quasi";
                                                        }};
                                                        name = "Mrs. Carl Kling I";
                                                    }}),
                                                    add(new Volume() {{
                                                        efsVolumeConfiguration = new EFSVolumeConfiguration("laudantium") {{
                                                            authorizationConfig = new EFSAuthorizationConfig() {{
                                                                accessPointId = "adipisci";
                                                                iam = EFSAuthorizationConfigIAMEnum.DISABLED;
                                                            }};
                                                            fileSystemId = "temporibus";
                                                            rootDirectory = "accusantium";
                                                            transitEncryption = EFSTransitEncryptionEnum.DISABLED;
                                                            transitEncryptionPort = 15606L;
                                                        }};
                                                        host = new Host() {{
                                                            sourcePath = "eum";
                                                        }};
                                                        name = "Andrew Little I";
                                                    }}),
                                                    add(new Volume() {{
                                                        efsVolumeConfiguration = new EFSVolumeConfiguration("dignissimos") {{
                                                            authorizationConfig = new EFSAuthorizationConfig() {{
                                                                accessPointId = "occaecati";
                                                                iam = EFSAuthorizationConfigIAMEnum.ENABLED;
                                                            }};
                                                            fileSystemId = "impedit";
                                                            rootDirectory = "explicabo";
                                                            transitEncryption = EFSTransitEncryptionEnum.ENABLED;
                                                            transitEncryptionPort = 12036L;
                                                        }};
                                                        host = new Host() {{
                                                            sourcePath = "dicta";
                                                        }};
                                                        name = "Wendell Frami";
                                                    }}),
                                                    add(new Volume() {{
                                                        efsVolumeConfiguration = new EFSVolumeConfiguration("officia") {{
                                                            authorizationConfig = new EFSAuthorizationConfig() {{
                                                                accessPointId = "asperiores";
                                                                iam = EFSAuthorizationConfigIAMEnum.ENABLED;
                                                            }};
                                                            fileSystemId = "ea";
                                                            rootDirectory = "quaerat";
                                                            transitEncryption = EFSTransitEncryptionEnum.ENABLED;
                                                            transitEncryptionPort = 831520L;
                                                        }};
                                                        host = new Host() {{
                                                            sourcePath = "maxime";
                                                        }};
                                                        name = "Blanche Yundt II";
                                                    }}),
                                                }};
                                            }};
                                            targetNodes = "porro";
                                        }}),
                                    }};
                                    numNodes = 288398L;
                                }};;
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("adipisci", "fuga");
                                }};
                                platformCapabilities = new org.openapis.openapi.models.shared.PlatformCapabilityEnum[]{{
                                    add(PlatformCapabilityEnum.EC2),
                                    add(PlatformCapabilityEnum.EC2),
                                    add(PlatformCapabilityEnum.FARGATE),
                                }};
                                propagateTags = false;
                                retryStrategy = new RegisterJobDefinitionRequestBodyRetryStrategy() {{
                                    attempts = 665859L;
                                    evaluateOnExit = new org.openapis.openapi.models.shared.EvaluateOnExit[]{{
                                        add(new EvaluateOnExit(RetryActionEnum.EXIT) {{
                                            action = RetryActionEnum.EXIT;
                                            onExitCode = "fugiat";
                                            onReason = "vel";
                                            onStatusReason = "ducimus";
                                        }}),
                                        add(new EvaluateOnExit(RetryActionEnum.EXIT) {{
                                            action = RetryActionEnum.RETRY;
                                            onExitCode = "labore";
                                            onReason = "possimus";
                                            onStatusReason = "facilis";
                                        }}),
                                        add(new EvaluateOnExit(RetryActionEnum.EXIT) {{
                                            action = RetryActionEnum.RETRY;
                                            onExitCode = "in";
                                            onReason = "corporis";
                                            onStatusReason = "reiciendis";
                                        }}),
                                        add(new EvaluateOnExit(RetryActionEnum.EXIT) {{
                                            action = RetryActionEnum.RETRY;
                                            onExitCode = "recusandae";
                                            onReason = "aliquid";
                                            onStatusReason = "aperiam";
                                        }}),
                                    }};
                                }};;
                                schedulingPriority = 232627L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("exercitationem", "earum");
                                    put("facere", "numquam");
                                }};
                                timeout = new RegisterJobDefinitionRequestBodyTimeout() {{
                                    attemptDurationSeconds = 985492L;
                                }};;
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "quidem";
                xAmzDate = "saepe";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "sunt";
            }};            

            RegisterJobDefinitionResponse res = sdk.sdk.registerJobDefinition(req);

            if (res.registerJobDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitJob

<p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitJobRequest;
import org.openapis.openapi.models.operations.SubmitJobRequestBody;
import org.openapis.openapi.models.operations.SubmitJobRequestBodyArrayProperties;
import org.openapis.openapi.models.operations.SubmitJobRequestBodyContainerOverrides;
import org.openapis.openapi.models.operations.SubmitJobRequestBodyEksPropertiesOverride;
import org.openapis.openapi.models.operations.SubmitJobRequestBodyNodeOverrides;
import org.openapis.openapi.models.operations.SubmitJobRequestBodyRetryStrategy;
import org.openapis.openapi.models.operations.SubmitJobRequestBodyTimeout;
import org.openapis.openapi.models.operations.SubmitJobResponse;
import org.openapis.openapi.models.shared.ArrayJobDependencyEnum;
import org.openapis.openapi.models.shared.ContainerOverrides;
import org.openapis.openapi.models.shared.EksContainerEnvironmentVariable;
import org.openapis.openapi.models.shared.EksContainerOverride;
import org.openapis.openapi.models.shared.EksContainerResourceRequirements;
import org.openapis.openapi.models.shared.EksMetadata;
import org.openapis.openapi.models.shared.EksPodPropertiesOverride;
import org.openapis.openapi.models.shared.EvaluateOnExit;
import org.openapis.openapi.models.shared.JobDependency;
import org.openapis.openapi.models.shared.KeyValuePair;
import org.openapis.openapi.models.shared.NodePropertyOverride;
import org.openapis.openapi.models.shared.ResourceRequirement;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.RetryActionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubmitJobRequest req = new SubmitJobRequest(                new SubmitJobRequestBody("adipisci", "non", "amet") {{
                                arrayProperties = new SubmitJobRequestBodyArrayProperties() {{
                                    size = 105906L;
                                }};;
                                containerOverrides = new SubmitJobRequestBodyContainerOverrides() {{
                                    command = new String[]{{
                                        add("a"),
                                        add("debitis"),
                                    }};
                                    environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                        add(new KeyValuePair() {{
                                            name = "Dr. Maryann Howe";
                                            value = "vitae";
                                        }}),
                                    }};
                                    instanceType = "accusamus";
                                    memory = 631126L;
                                    resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                        add(new ResourceRequirement(ResourceTypeEnum.VCPU, "voluptas") {{
                                            type = ResourceTypeEnum.GPU;
                                            value = "voluptas";
                                        }}),
                                        add(new ResourceRequirement(ResourceTypeEnum.MEMORY, "adipisci") {{
                                            type = ResourceTypeEnum.GPU;
                                            value = "nobis";
                                        }}),
                                    }};
                                    vcpus = 795535L;
                                }};;
                                dependsOn = new org.openapis.openapi.models.shared.JobDependency[]{{
                                    add(new JobDependency() {{
                                        jobId = "blanditiis";
                                        type = ArrayJobDependencyEnum.N_TO_N;
                                    }}),
                                }};
                                eksPropertiesOverride = new SubmitJobRequestBodyEksPropertiesOverride() {{
                                    podProperties = new EksPodPropertiesOverride() {{
                                        containers = new org.openapis.openapi.models.shared.EksContainerOverride[]{{
                                            add(new EksContainerOverride() {{
                                                args = new String[]{{
                                                    add("officiis"),
                                                    add("temporibus"),
                                                }};
                                                command = new String[]{{
                                                    add("adipisci"),
                                                    add("cum"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EksContainerEnvironmentVariable[]{{
                                                    add(new EksContainerEnvironmentVariable("totam") {{
                                                        name = "Moses Douglas";
                                                        value = "pariatur";
                                                    }}),
                                                    add(new EksContainerEnvironmentVariable("explicabo") {{
                                                        name = "Miss Jorge Rolfson";
                                                        value = "reiciendis";
                                                    }}),
                                                    add(new EksContainerEnvironmentVariable("laborum") {{
                                                        name = "Johnathan Klein V";
                                                        value = "dolore";
                                                    }}),
                                                }};
                                                image = "sed";
                                                resources = new EksContainerResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("commodi", "quidem");
                                                        put("explicabo", "voluptas");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("architecto", "suscipit");
                                                        put("sapiente", "debitis");
                                                        put("illo", "reiciendis");
                                                    }};
                                                }};
                                            }}),
                                            add(new EksContainerOverride() {{
                                                args = new String[]{{
                                                    add("corrupti"),
                                                }};
                                                command = new String[]{{
                                                    add("incidunt"),
                                                    add("sed"),
                                                    add("provident"),
                                                    add("eius"),
                                                }};
                                                env = new org.openapis.openapi.models.shared.EksContainerEnvironmentVariable[]{{
                                                    add(new EksContainerEnvironmentVariable("tempora") {{
                                                        name = "Rosemary McClure";
                                                        value = "tempora";
                                                    }}),
                                                    add(new EksContainerEnvironmentVariable("facilis") {{
                                                        name = "Mrs. Johanna Jacobson";
                                                        value = "praesentium";
                                                    }}),
                                                    add(new EksContainerEnvironmentVariable("nobis") {{
                                                        name = "Amber Hintz";
                                                        value = "sit";
                                                    }}),
                                                    add(new EksContainerEnvironmentVariable("magni") {{
                                                        name = "Floyd Harber";
                                                        value = "nulla";
                                                    }}),
                                                }};
                                                image = "aperiam";
                                                resources = new EksContainerResourceRequirements() {{
                                                    limits = new java.util.HashMap<String, String>() {{
                                                        put("numquam", "veniam");
                                                        put("in", "officiis");
                                                        put("beatae", "laudantium");
                                                        put("exercitationem", "praesentium");
                                                    }};
                                                    requests = new java.util.HashMap<String, String>() {{
                                                        put("laboriosam", "dolorum");
                                                        put("voluptatum", "error");
                                                        put("hic", "expedita");
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        metadata = new EksMetadata() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("neque", "dolorum");
                                                put("nostrum", "officia");
                                                put("dolorum", "corrupti");
                                                put("accusamus", "tempora");
                                            }};
                                        }};;
                                    }};;
                                }};;
                                nodeOverrides = new SubmitJobRequestBodyNodeOverrides() {{
                                    nodePropertyOverrides = new org.openapis.openapi.models.shared.NodePropertyOverride[]{{
                                        add(new NodePropertyOverride("repellendus") {{
                                            containerOverrides = new ContainerOverrides() {{
                                                command = new String[]{{
                                                    add("ut"),
                                                }};
                                                environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                    add(new KeyValuePair() {{
                                                        name = "Cecilia Quitzon IV";
                                                        value = "ipsam";
                                                    }}),
                                                    add(new KeyValuePair() {{
                                                        name = "Nora Lynch";
                                                        value = "et";
                                                    }}),
                                                    add(new KeyValuePair() {{
                                                        name = "Ms. Ruben Cremin";
                                                        value = "saepe";
                                                    }}),
                                                    add(new KeyValuePair() {{
                                                        name = "William Gottlieb";
                                                        value = "harum";
                                                    }}),
                                                }};
                                                instanceType = "dicta";
                                                memory = 99416L;
                                                resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                    add(new ResourceRequirement(ResourceTypeEnum.VCPU, "laborum") {{
                                                        type = ResourceTypeEnum.GPU;
                                                        value = "quidem";
                                                    }}),
                                                    add(new ResourceRequirement(ResourceTypeEnum.VCPU, "alias") {{
                                                        type = ResourceTypeEnum.MEMORY;
                                                        value = "tenetur";
                                                    }}),
                                                    add(new ResourceRequirement(ResourceTypeEnum.VCPU, "unde") {{
                                                        type = ResourceTypeEnum.GPU;
                                                        value = "deserunt";
                                                    }}),
                                                }};
                                                vcpus = 972083L;
                                            }};
                                            targetNodes = "provident";
                                        }}),
                                        add(new NodePropertyOverride("ex") {{
                                            containerOverrides = new ContainerOverrides() {{
                                                command = new String[]{{
                                                    add("voluptates"),
                                                    add("perferendis"),
                                                    add("est"),
                                                    add("quidem"),
                                                }};
                                                environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                    add(new KeyValuePair() {{
                                                        name = "Grant Langosh";
                                                        value = "voluptatem";
                                                    }}),
                                                    add(new KeyValuePair() {{
                                                        name = "Phil Boyer";
                                                        value = "asperiores";
                                                    }}),
                                                }};
                                                instanceType = "totam";
                                                memory = 383103L;
                                                resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                    add(new ResourceRequirement(ResourceTypeEnum.VCPU, "amet") {{
                                                        type = ResourceTypeEnum.MEMORY;
                                                        value = "et";
                                                    }}),
                                                    add(new ResourceRequirement(ResourceTypeEnum.VCPU, "error") {{
                                                        type = ResourceTypeEnum.MEMORY;
                                                        value = "ea";
                                                    }}),
                                                    add(new ResourceRequirement(ResourceTypeEnum.MEMORY, "natus") {{
                                                        type = ResourceTypeEnum.MEMORY;
                                                        value = "officiis";
                                                    }}),
                                                }};
                                                vcpus = 328303L;
                                            }};
                                            targetNodes = "aspernatur";
                                        }}),
                                        add(new NodePropertyOverride("adipisci") {{
                                            containerOverrides = new ContainerOverrides() {{
                                                command = new String[]{{
                                                    add("corrupti"),
                                                    add("at"),
                                                    add("error"),
                                                    add("blanditiis"),
                                                }};
                                                environment = new org.openapis.openapi.models.shared.KeyValuePair[]{{
                                                    add(new KeyValuePair() {{
                                                        name = "Dr. Ivan Littel";
                                                        value = "repellendus";
                                                    }}),
                                                    add(new KeyValuePair() {{
                                                        name = "Lela Baumbach Jr.";
                                                        value = "beatae";
                                                    }}),
                                                }};
                                                instanceType = "dolores";
                                                memory = 316488L;
                                                resourceRequirements = new org.openapis.openapi.models.shared.ResourceRequirement[]{{
                                                    add(new ResourceRequirement(ResourceTypeEnum.VCPU, "magnam") {{
                                                        type = ResourceTypeEnum.GPU;
                                                        value = "a";
                                                    }}),
                                                    add(new ResourceRequirement(ResourceTypeEnum.VCPU, "officiis") {{
                                                        type = ResourceTypeEnum.MEMORY;
                                                        value = "consequuntur";
                                                    }}),
                                                }};
                                                vcpus = 597937L;
                                            }};
                                            targetNodes = "in";
                                        }}),
                                    }};
                                    numNodes = 907876L;
                                }};;
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("consequuntur", "fugit");
                                    put("id", "quis");
                                    put("reprehenderit", "error");
                                }};
                                propagateTags = false;
                                retryStrategy = new SubmitJobRequestBodyRetryStrategy() {{
                                    attempts = 76486L;
                                    evaluateOnExit = new org.openapis.openapi.models.shared.EvaluateOnExit[]{{
                                        add(new EvaluateOnExit(RetryActionEnum.RETRY) {{
                                            action = RetryActionEnum.EXIT;
                                            onExitCode = "eveniet";
                                            onReason = "non";
                                            onStatusReason = "vero";
                                        }}),
                                        add(new EvaluateOnExit(RetryActionEnum.RETRY) {{
                                            action = RetryActionEnum.RETRY;
                                            onExitCode = "ipsa";
                                            onReason = "totam";
                                            onStatusReason = "quae";
                                        }}),
                                    }};
                                }};;
                                schedulingPriorityOverride = 907733L;
                                shareIdentifier = "qui";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("iure", "necessitatibus");
                                    put("ratione", "laborum");
                                    put("distinctio", "voluptatum");
                                }};
                                timeout = new SubmitJobRequestBodyTimeout() {{
                                    attemptDurationSeconds = 523006L;
                                }};;
                            }};) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "ad";
                xAmzCredential = "repellat";
                xAmzDate = "alias";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "nihil";
            }};            

            SubmitJobResponse res = sdk.sdk.submitJob(req);

            if (res.submitJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("alias", "maiores");
                                                put("reiciendis", "dolores");
                                            }});, "id") {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "dolorum";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "quae";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateJob

Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateJobRequest;
import org.openapis.openapi.models.operations.TerminateJobRequestBody;
import org.openapis.openapi.models.operations.TerminateJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateJobRequest req = new TerminateJobRequest(                new TerminateJobRequestBody("molestiae", "ex");) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "adipisci";
                xAmzDate = "debitis";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "nemo";
            }};            

            TerminateJobResponse res = sdk.sdk.terminateJob(req);

            if (res.terminateJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes specified tags from an Batch resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("esse",                 new String[]{{
                                add("quis"),
                                add("eum"),
                                add("reiciendis"),
                            }}) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ullam";
                xAmzDate = "quasi";
                xAmzSecurityToken = "animi";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "mollitia";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateComputeEnvironment

Updates an Batch compute environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateComputeEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateComputeEnvironmentRequestBody;
import org.openapis.openapi.models.operations.UpdateComputeEnvironmentRequestBodyComputeResources;
import org.openapis.openapi.models.operations.UpdateComputeEnvironmentRequestBodyStateEnum;
import org.openapis.openapi.models.operations.UpdateComputeEnvironmentRequestBodyUpdatePolicy;
import org.openapis.openapi.models.operations.UpdateComputeEnvironmentResponse;
import org.openapis.openapi.models.shared.CRTypeEnum;
import org.openapis.openapi.models.shared.CRUpdateAllocationStrategyEnum;
import org.openapis.openapi.models.shared.Ec2Configuration;
import org.openapis.openapi.models.shared.LaunchTemplateSpecification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateComputeEnvironmentRequest req = new UpdateComputeEnvironmentRequest(                new UpdateComputeEnvironmentRequestBody("possimus") {{
                                computeResources = new UpdateComputeEnvironmentRequestBodyComputeResources() {{
                                    allocationStrategy = CRUpdateAllocationStrategyEnum.SPOT_CAPACITY_OPTIMIZED;
                                    bidPercentage = 402767L;
                                    desiredvCpus = 397257L;
                                    ec2Configuration = new org.openapis.openapi.models.shared.Ec2Configuration[]{{
                                        add(new Ec2Configuration("in") {{
                                            imageIdOverride = "repellat";
                                            imageKubernetesVersion = "doloribus";
                                            imageType = "ullam";
                                        }}),
                                    }};
                                    ec2KeyPair = "nam";
                                    imageId = "earum";
                                    instanceRole = "officia";
                                    instanceTypes = new String[]{{
                                        add("placeat"),
                                        add("modi"),
                                        add("voluptatibus"),
                                    }};
                                    launchTemplate = new LaunchTemplateSpecification() {{
                                        launchTemplateId = "molestias";
                                        launchTemplateName = "officiis";
                                        version = "sapiente";
                                    }};;
                                    maxvCpus = 764562L;
                                    minvCpus = 113486L;
                                    placementGroup = "rerum";
                                    securityGroupIds = new String[]{{
                                        add("quis"),
                                        add("inventore"),
                                    }};
                                    subnets = new String[]{{
                                        add("cumque"),
                                    }};
                                    tags = new java.util.HashMap<String, String>() {{
                                        put("perferendis", "velit");
                                    }};
                                    type = CRTypeEnum.EC2;
                                    updateToLatestImageVersion = false;
                                }};;
                                serviceRole = "eum";
                                state = UpdateComputeEnvironmentRequestBodyStateEnum.ENABLED;
                                unmanagedvCpus = 521996L;
                                updatePolicy = new UpdateComputeEnvironmentRequestBodyUpdatePolicy() {{
                                    jobExecutionTimeoutMinutes = 871083L;
                                    terminateJobsOnUpdate = false;
                                }};;
                            }};) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "eos";
                xAmzCredential = "sapiente";
                xAmzDate = "eum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "beatae";
            }};            

            UpdateComputeEnvironmentResponse res = sdk.sdk.updateComputeEnvironment(req);

            if (res.updateComputeEnvironmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateJobQueue

Updates a job queue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateJobQueueRequest;
import org.openapis.openapi.models.operations.UpdateJobQueueRequestBody;
import org.openapis.openapi.models.operations.UpdateJobQueueRequestBodyStateEnum;
import org.openapis.openapi.models.operations.UpdateJobQueueResponse;
import org.openapis.openapi.models.shared.ComputeEnvironmentOrder;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateJobQueueRequest req = new UpdateJobQueueRequest(                new UpdateJobQueueRequestBody("provident") {{
                                computeEnvironmentOrder = new org.openapis.openapi.models.shared.ComputeEnvironmentOrder[]{{
                                    add(new ComputeEnvironmentOrder("illum", 52508L) {{
                                        computeEnvironment = "soluta";
                                        order = 940782L;
                                    }}),
                                    add(new ComputeEnvironmentOrder("maiores", 891801L) {{
                                        computeEnvironment = "earum";
                                        order = 596211L;
                                    }}),
                                    add(new ComputeEnvironmentOrder("suscipit", 211534L) {{
                                        computeEnvironment = "aliquid";
                                        order = 780931L;
                                    }}),
                                    add(new ComputeEnvironmentOrder("fuga", 189062L) {{
                                        computeEnvironment = "fugit";
                                        order = 764995L;
                                    }}),
                                }};
                                priority = 656762L;
                                schedulingPolicyArn = "necessitatibus";
                                state = UpdateJobQueueRequestBodyStateEnum.DISABLED;
                            }};) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "et";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "natus";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "suscipit";
            }};            

            UpdateJobQueueResponse res = sdk.sdk.updateJobQueue(req);

            if (res.updateJobQueueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSchedulingPolicy

Updates a scheduling policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSchedulingPolicyRequest;
import org.openapis.openapi.models.operations.UpdateSchedulingPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateSchedulingPolicyRequestBodyFairsharePolicy;
import org.openapis.openapi.models.operations.UpdateSchedulingPolicyResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShareAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSchedulingPolicyRequest req = new UpdateSchedulingPolicyRequest(                new UpdateSchedulingPolicyRequestBody("quasi") {{
                                fairsharePolicy = new UpdateSchedulingPolicyRequestBodyFairsharePolicy() {{
                                    computeReservation = 169025L;
                                    shareDecaySeconds = 984934L;
                                    shareDistribution = new org.openapis.openapi.models.shared.ShareAttributes[]{{
                                        add(new ShareAttributes("tempora") {{
                                            shareIdentifier = "necessitatibus";
                                            weightFactor = 585.34;
                                        }}),
                                        add(new ShareAttributes("dicta") {{
                                            shareIdentifier = "nihil";
                                            weightFactor = 4731.9;
                                        }}),
                                        add(new ShareAttributes("praesentium") {{
                                            shareIdentifier = "iusto";
                                            weightFactor = 4570.59;
                                        }}),
                                        add(new ShareAttributes("vel") {{
                                            shareIdentifier = "maiores";
                                            weightFactor = 9672.6;
                                        }}),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "doloremque";
                xAmzDate = "dicta";
                xAmzSecurityToken = "odio";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "esse";
            }};            

            UpdateSchedulingPolicyResponse res = sdk.sdk.updateSchedulingPolicy(req);

            if (res.updateSchedulingPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
