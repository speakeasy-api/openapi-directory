# SDK

## Overview

<fullname>Batch</fullname> <p>Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure. At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently provision resources d, and work toward eliminating capacity constraints, reducing your overall compute costs, and delivering results more quickly.</p> <p>As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus on analyzing results and solving your specific problems instead.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/batch/>
### Available Operations

* [CancelJob](#canceljob) - <p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>
* [CreateComputeEnvironment](#createcomputeenvironment) - <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code> or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>
* [CreateJobQueue](#createjobqueue) - <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>
* [CreateSchedulingPolicy](#createschedulingpolicy) - Creates an Batch scheduling policy.
* [DeleteComputeEnvironment](#deletecomputeenvironment) - <p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>
* [DeleteJobQueue](#deletejobqueue) - <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>
* [DeleteSchedulingPolicy](#deleteschedulingpolicy) - <p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>
* [DeregisterJobDefinition](#deregisterjobdefinition) - Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.
* [DescribeComputeEnvironments](#describecomputeenvironments) - <p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>
* [DescribeJobDefinitions](#describejobdefinitions) - Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.
* [DescribeJobQueues](#describejobqueues) - Describes one or more of your job queues.
* [DescribeJobs](#describejobs) - Describes a list of Batch jobs.
* [DescribeSchedulingPolicies](#describeschedulingpolicies) - Describes one or more of your scheduling policies.
* [ListJobs](#listjobs) - <p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>
* [ListSchedulingPolicies](#listschedulingpolicies) - Returns a list of Batch scheduling policies.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
* [RegisterJobDefinition](#registerjobdefinition) - Registers an Batch job definition.
* [SubmitJob](#submitjob) - <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
* [TerminateJob](#terminatejob) - Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.
* [UntagResource](#untagresource) - Deletes specified tags from an Batch resource.
* [UpdateComputeEnvironment](#updatecomputeenvironment) - Updates an Batch compute environment.
* [UpdateJobQueue](#updatejobqueue) - Updates a job queue.
* [UpdateSchedulingPolicy](#updateschedulingpolicy) - Updates a scheduling policy.

## CancelJob

<p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelJob(ctx, operations.CancelJobRequest{
        RequestBody: operations.CancelJobRequestBody{
            JobID: "error",
            Reason: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResponse != nil {
        // handle response
    }
}
```

## CreateComputeEnvironment

<p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code> or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>

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
    res, err := s.SDK.CreateComputeEnvironment(ctx, operations.CreateComputeEnvironmentRequest{
        RequestBody: operations.CreateComputeEnvironmentRequestBody{
            ComputeEnvironmentName: "suscipit",
            ComputeResources: &operations.CreateComputeEnvironmentRequestBodyComputeResources{
                AllocationStrategy: shared.CRAllocationStrategyEnumBestFitProgressive.ToPointer(),
                BidPercentage: sdk.Int64(791725),
                DesiredvCpus: sdk.Int64(812169),
                Ec2Configuration: []shared.Ec2Configuration{
                    shared.Ec2Configuration{
                        ImageIDOverride: sdk.String("iusto"),
                        ImageKubernetesVersion: sdk.String("excepturi"),
                        ImageType: "nisi",
                    },
                    shared.Ec2Configuration{
                        ImageIDOverride: sdk.String("recusandae"),
                        ImageKubernetesVersion: sdk.String("temporibus"),
                        ImageType: "ab",
                    },
                    shared.Ec2Configuration{
                        ImageIDOverride: sdk.String("quis"),
                        ImageKubernetesVersion: sdk.String("veritatis"),
                        ImageType: "deserunt",
                    },
                },
                Ec2KeyPair: sdk.String("perferendis"),
                ImageID: sdk.String("ipsam"),
                InstanceRole: sdk.String("repellendus"),
                InstanceTypes: []string{
                    "quo",
                    "odit",
                    "at",
                    "at",
                },
                LaunchTemplate: &shared.LaunchTemplateSpecification{
                    LaunchTemplateID: sdk.String("maiores"),
                    LaunchTemplateName: sdk.String("molestiae"),
                    Version: sdk.String("quod"),
                },
                MaxvCpus: sdk.Int64(800911),
                MinvCpus: sdk.Int64(461479),
                PlacementGroup: sdk.String("totam"),
                SecurityGroupIds: []string{
                    "dolorum",
                    "dicta",
                    "nam",
                    "officia",
                },
                SpotIamFleetRole: sdk.String("occaecati"),
                Subnets: []string{
                    "deleniti",
                },
                Tags: map[string]string{
                    "optio": "totam",
                    "beatae": "commodi",
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                Type: shared.CRTypeEnumFargate.ToPointer(),
            },
            EksConfiguration: &operations.CreateComputeEnvironmentRequestBodyEksConfiguration{
                EksClusterArn: sdk.String("esse"),
                KubernetesNamespace: sdk.String("ipsum"),
            },
            ServiceRole: sdk.String("excepturi"),
            State: operations.CreateComputeEnvironmentRequestBodyStateEnumEnabled.ToPointer(),
            Tags: map[string]string{
                "ad": "natus",
            },
            Type: operations.CreateComputeEnvironmentRequestBodyTypeEnumManaged,
            UnmanagedvCpus: sdk.Int64(612096),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComputeEnvironmentResponse != nil {
        // handle response
    }
}
```

## CreateJobQueue

<p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>

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
    res, err := s.SDK.CreateJobQueue(ctx, operations.CreateJobQueueRequest{
        RequestBody: operations.CreateJobQueueRequestBody{
            ComputeEnvironmentOrder: []shared.ComputeEnvironmentOrder{
                shared.ComputeEnvironmentOrder{
                    ComputeEnvironment: "iste",
                    Order: 437032,
                },
                shared.ComputeEnvironmentOrder{
                    ComputeEnvironment: "saepe",
                    Order: 697631,
                },
            },
            JobQueueName: "architecto",
            Priority: 60225,
            SchedulingPolicyArn: sdk.String("reiciendis"),
            State: operations.CreateJobQueueRequestBodyStateEnumDisabled.ToPointer(),
            Tags: map[string]string{
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJobQueueResponse != nil {
        // handle response
    }
}
```

## CreateSchedulingPolicy

Creates an Batch scheduling policy.

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
    res, err := s.SDK.CreateSchedulingPolicy(ctx, operations.CreateSchedulingPolicyRequest{
        RequestBody: operations.CreateSchedulingPolicyRequestBody{
            FairsharePolicy: &operations.CreateSchedulingPolicyRequestBodyFairsharePolicy{
                ComputeReservation: sdk.Int64(634274),
                ShareDecaySeconds: sdk.Int64(988374),
                ShareDistribution: []shared.ShareAttributes{
                    shared.ShareAttributes{
                        ShareIdentifier: "architecto",
                        WeightFactor: sdk.Float32(6527.9),
                    },
                    shared.ShareAttributes{
                        ShareIdentifier: "dolorem",
                        WeightFactor: sdk.Float32(6350.59),
                    },
                    shared.ShareAttributes{
                        ShareIdentifier: "consequuntur",
                        WeightFactor: sdk.Float32(9953),
                    },
                    shared.ShareAttributes{
                        ShareIdentifier: "mollitia",
                        WeightFactor: sdk.Float32(5818.5),
                    },
                },
            },
            Name: "Lucy Konopelski",
            Tags: map[string]string{
                "quia": "quis",
                "vitae": "laborum",
                "animi": "enim",
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSchedulingPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteComputeEnvironment

<p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteComputeEnvironment(ctx, operations.DeleteComputeEnvironmentRequest{
        RequestBody: operations.DeleteComputeEnvironmentRequestBody{
            ComputeEnvironment: "aut",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteComputeEnvironmentResponse != nil {
        // handle response
    }
}
```

## DeleteJobQueue

<p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteJobQueue(ctx, operations.DeleteJobQueueRequest{
        RequestBody: operations.DeleteJobQueueRequestBody{
            JobQueue: "vero",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJobQueueResponse != nil {
        // handle response
    }
}
```

## DeleteSchedulingPolicy

<p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSchedulingPolicy(ctx, operations.DeleteSchedulingPolicyRequest{
        RequestBody: operations.DeleteSchedulingPolicyRequestBody{
            Arn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSchedulingPolicyResponse != nil {
        // handle response
    }
}
```

## DeregisterJobDefinition

Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterJobDefinition(ctx, operations.DeregisterJobDefinitionRequest{
        RequestBody: operations.DeregisterJobDefinitionRequestBody{
            JobDefinition: "iusto",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterJobDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeComputeEnvironments

<p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeComputeEnvironments(ctx, operations.DescribeComputeEnvironmentsRequest{
        RequestBody: operations.DescribeComputeEnvironmentsRequestBody{
            ComputeEnvironments: []string{
                "quidem",
            },
            MaxResults: sdk.Int64(565189),
            NextToken: sdk.String("excepturi"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComputeEnvironmentsResponse != nil {
        // handle response
    }
}
```

## DescribeJobDefinitions

Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeJobDefinitions(ctx, operations.DescribeJobDefinitionsRequest{
        RequestBody: operations.DescribeJobDefinitionsRequestBody{
            JobDefinitionName: sdk.String("itaque"),
            JobDefinitions: []string{
                "enim",
                "consequatur",
            },
            MaxResults: sdk.Int64(667411),
            NextToken: sdk.String("quibusdam"),
            Status: sdk.String("explicabo"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        MaxResults: sdk.String("cupiditate"),
        NextToken: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobDefinitionsResponse != nil {
        // handle response
    }
}
```

## DescribeJobQueues

Describes one or more of your job queues.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeJobQueues(ctx, operations.DescribeJobQueuesRequest{
        RequestBody: operations.DescribeJobQueuesRequestBody{
            JobQueues: []string{
                "magni",
            },
            MaxResults: sdk.Int64(828940),
            NextToken: sdk.String("ipsam"),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
        MaxResults: sdk.String("labore"),
        NextToken: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobQueuesResponse != nil {
        // handle response
    }
}
```

## DescribeJobs

Describes a list of Batch jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeJobs(ctx, operations.DescribeJobsRequest{
        RequestBody: operations.DescribeJobsRequestBody{
            Jobs: []string{
                "non",
                "eligendi",
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobsResponse != nil {
        // handle response
    }
}
```

## DescribeSchedulingPolicies

Describes one or more of your scheduling policies.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSchedulingPolicies(ctx, operations.DescribeSchedulingPoliciesRequest{
        RequestBody: operations.DescribeSchedulingPoliciesRequestBody{
            Arns: []string{
                "a",
                "dolorum",
                "in",
                "in",
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSchedulingPoliciesResponse != nil {
        // handle response
    }
}
```

## ListJobs

<p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>

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
    res, err := s.SDK.ListJobs(ctx, operations.ListJobsRequest{
        RequestBody: operations.ListJobsRequestBody{
            ArrayJobID: sdk.String("ea"),
            Filters: []shared.KeyValuesPair{
                shared.KeyValuesPair{
                    Name: sdk.String("Tomas Friesen"),
                    Values: []string{
                        "delectus",
                        "quidem",
                        "provident",
                        "nam",
                    },
                },
                shared.KeyValuesPair{
                    Name: sdk.String("Nelson Lesch"),
                    Values: []string{
                        "nisi",
                        "vel",
                        "natus",
                    },
                },
            },
            JobQueue: sdk.String("omnis"),
            JobStatus: operations.ListJobsRequestBodyJobStatusEnumStarting.ToPointer(),
            MaxResults: sdk.Int64(19193),
            MultiNodeJobID: sdk.String("nihil"),
            NextToken: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## ListSchedulingPolicies

Returns a list of Batch scheduling policies.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSchedulingPolicies(ctx, operations.ListSchedulingPoliciesRequest{
        RequestBody: operations.ListSchedulingPoliciesRequestBody{
            MaxResults: sdk.Int64(135474),
            NextToken: sdk.String("architecto"),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchedulingPoliciesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        ResourceArn: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RegisterJobDefinition

Registers an Batch job definition.

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
    res, err := s.SDK.RegisterJobDefinition(ctx, operations.RegisterJobDefinitionRequest{
        RequestBody: operations.RegisterJobDefinitionRequestBody{
            ContainerProperties: &operations.RegisterJobDefinitionRequestBodyContainerProperties{
                Command: []string{
                    "iure",
                },
                Environment: []shared.KeyValuePair{
                    shared.KeyValuePair{
                        Name: sdk.String("Frederick Schoen"),
                        Value: sdk.String("in"),
                    },
                    shared.KeyValuePair{
                        Name: sdk.String("Diane VonRueden"),
                        Value: sdk.String("nihil"),
                    },
                    shared.KeyValuePair{
                        Name: sdk.String("Marty Cormier"),
                        Value: sdk.String("accusantium"),
                    },
                    shared.KeyValuePair{
                        Name: sdk.String("Irma Morissette DDS"),
                        Value: sdk.String("illum"),
                    },
                },
                EphemeralStorage: &shared.EphemeralStorage{
                    SizeInGiB: 864934,
                },
                ExecutionRoleArn: sdk.String("maxime"),
                FargatePlatformConfiguration: &shared.FargatePlatformConfiguration{
                    PlatformVersion: sdk.String("ea"),
                },
                Image: sdk.String("excepturi"),
                InstanceType: sdk.String("odit"),
                JobRoleArn: sdk.String("ea"),
                LinuxParameters: &shared.LinuxParameters{
                    Devices: []shared.Device{
                        shared.Device{
                            ContainerPath: sdk.String("ab"),
                            HostPath: "maiores",
                            Permissions: []shared.DeviceCgroupPermissionEnum{
                                shared.DeviceCgroupPermissionEnumWrite,
                                shared.DeviceCgroupPermissionEnumWrite,
                                shared.DeviceCgroupPermissionEnumWrite,
                            },
                        },
                    },
                    InitProcessEnabled: sdk.Bool(false),
                    MaxSwap: sdk.Int64(722056),
                    SharedMemorySize: sdk.Int64(50588),
                    Swappiness: sdk.Int64(866383),
                    Tmpfs: []shared.Tmpfs{
                        shared.Tmpfs{
                            ContainerPath: "voluptatibus",
                            MountOptions: []string{
                                "fugiat",
                            },
                            Size: 230742,
                        },
                        shared.Tmpfs{
                            ContainerPath: "aut",
                            MountOptions: []string{
                                "corporis",
                                "hic",
                                "libero",
                                "nobis",
                            },
                            Size: 171629,
                        },
                    },
                },
                LogConfiguration: &shared.LogConfiguration{
                    LogDriver: shared.LogDriverEnumJournald,
                    Options: map[string]string{
                        "dignissimos": "eaque",
                        "quis": "nesciunt",
                        "eos": "perferendis",
                    },
                    SecretOptions: []shared.Secret{
                        shared.Secret{
                            Name: "Darryl Fadel",
                            ValueFrom: "hic",
                        },
                    },
                },
                Memory: sdk.Int64(928082),
                MountPoints: []shared.MountPoint{
                    shared.MountPoint{
                        ContainerPath: sdk.String("facilis"),
                        ReadOnly: sdk.Bool(false),
                        SourceVolume: sdk.String("perspiciatis"),
                    },
                    shared.MountPoint{
                        ContainerPath: sdk.String("voluptatem"),
                        ReadOnly: sdk.Bool(false),
                        SourceVolume: sdk.String("porro"),
                    },
                    shared.MountPoint{
                        ContainerPath: sdk.String("consequuntur"),
                        ReadOnly: sdk.Bool(false),
                        SourceVolume: sdk.String("blanditiis"),
                    },
                },
                NetworkConfiguration: &shared.NetworkConfiguration{
                    AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                },
                Privileged: sdk.Bool(false),
                ReadonlyRootFilesystem: sdk.Bool(false),
                ResourceRequirements: []shared.ResourceRequirement{
                    shared.ResourceRequirement{
                        Type: shared.ResourceTypeEnumVcpu,
                        Value: "rerum",
                    },
                },
                Secrets: []shared.Secret{
                    shared.Secret{
                        Name: "Merle Gleichner",
                        ValueFrom: "deleniti",
                    },
                },
                Ulimits: []shared.Ulimit{
                    shared.Ulimit{
                        HardLimit: 589910,
                        Name: "Randolph Wintheiser",
                        SoftLimit: 398221,
                    },
                    shared.Ulimit{
                        HardLimit: 212390,
                        Name: "Rosa Dibbert",
                        SoftLimit: 569574,
                    },
                    shared.Ulimit{
                        HardLimit: 739551,
                        Name: "Marian Wisozk",
                        SoftLimit: 254356,
                    },
                    shared.Ulimit{
                        HardLimit: 85295,
                        Name: "Angela Kerluke",
                        SoftLimit: 881005,
                    },
                },
                User: sdk.String("quidem"),
                Vcpus: sdk.Int64(976405),
                Volumes: []shared.Volume{
                    shared.Volume{
                        EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                            AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                AccessPointID: sdk.String("natus"),
                                Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                            },
                            FileSystemID: "atque",
                            RootDirectory: sdk.String("sit"),
                            TransitEncryption: shared.EFSTransitEncryptionEnumDisabled.ToPointer(),
                            TransitEncryptionPort: sdk.Int64(67249),
                        },
                        Host: &shared.Host{
                            SourcePath: sdk.String("soluta"),
                        },
                        Name: sdk.String("Ted Kling"),
                    },
                    shared.Volume{
                        EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                            AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                AccessPointID: sdk.String("omnis"),
                                Iam: shared.EFSAuthorizationConfigIAMEnumDisabled.ToPointer(),
                            },
                            FileSystemID: "distinctio",
                            RootDirectory: sdk.String("asperiores"),
                            TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                            TransitEncryptionPort: sdk.Int64(216897),
                        },
                        Host: &shared.Host{
                            SourcePath: sdk.String("voluptate"),
                        },
                        Name: sdk.String("Elbert Gislason I"),
                    },
                },
            },
            EksProperties: &operations.RegisterJobDefinitionRequestBodyEksProperties{
                PodProperties: &shared.EksPodProperties{
                    Containers: []shared.EksContainer{
                        shared.EksContainer{
                            Args: []string{
                                "ad",
                                "saepe",
                                "suscipit",
                                "deserunt",
                            },
                            Command: []string{
                                "minima",
                                "repellendus",
                                "totam",
                            },
                            Env: []shared.EksContainerEnvironmentVariable{
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Cristina Hahn",
                                    Value: sdk.String("quod"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Clarence Parisian",
                                    Value: sdk.String("harum"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Tracy Schamberger",
                                    Value: sdk.String("tempore"),
                                },
                            },
                            Image: "accusamus",
                            ImagePullPolicy: sdk.String("numquam"),
                            Name: sdk.String("Florence Will"),
                            Resources: &shared.EksContainerResourceRequirements{
                                Limits: map[string]string{
                                    "expedita": "neque",
                                },
                                Requests: map[string]string{
                                    "vel": "libero",
                                },
                            },
                            SecurityContext: &shared.EksContainerSecurityContext{
                                Privileged: sdk.Bool(false),
                                ReadOnlyRootFilesystem: sdk.Bool(false),
                                RunAsGroup: sdk.Int64(374170),
                                RunAsNonRoot: sdk.Bool(false),
                                RunAsUser: sdk.Int64(646265),
                            },
                            VolumeMounts: []shared.EksContainerVolumeMount{
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("ipsum"),
                                    Name: sdk.String("Norma McGlynn"),
                                    ReadOnly: sdk.Bool(false),
                                },
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("soluta"),
                                    Name: sdk.String("Kayla Larson"),
                                    ReadOnly: sdk.Bool(false),
                                },
                            },
                        },
                        shared.EksContainer{
                            Args: []string{
                                "distinctio",
                            },
                            Command: []string{
                                "aliquid",
                                "quam",
                                "molestias",
                            },
                            Env: []shared.EksContainerEnvironmentVariable{
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Gladys Considine",
                                    Value: sdk.String("sunt"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Miss Candice Weimann",
                                    Value: sdk.String("nobis"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Miss Kerry Emmerich",
                                    Value: sdk.String("tempore"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Kevin Willms",
                                    Value: sdk.String("labore"),
                                },
                            },
                            Image: "adipisci",
                            ImagePullPolicy: sdk.String("dolorum"),
                            Name: sdk.String("Amy Armstrong"),
                            Resources: &shared.EksContainerResourceRequirements{
                                Limits: map[string]string{
                                    "est": "repellendus",
                                },
                                Requests: map[string]string{
                                    "doloribus": "ut",
                                    "facilis": "cupiditate",
                                    "qui": "quae",
                                    "laudantium": "odio",
                                },
                            },
                            SecurityContext: &shared.EksContainerSecurityContext{
                                Privileged: sdk.Bool(false),
                                ReadOnlyRootFilesystem: sdk.Bool(false),
                                RunAsGroup: sdk.Int64(580447),
                                RunAsNonRoot: sdk.Bool(false),
                                RunAsUser: sdk.Int64(977496),
                            },
                            VolumeMounts: []shared.EksContainerVolumeMount{
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("vero"),
                                    Name: sdk.String("Tim Erdman"),
                                    ReadOnly: sdk.Bool(false),
                                },
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("consectetur"),
                                    Name: sdk.String("Roman Kulas"),
                                    ReadOnly: sdk.Bool(false),
                                },
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("quod"),
                                    Name: sdk.String("Harriet Quitzon"),
                                    ReadOnly: sdk.Bool(false),
                                },
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("dolore"),
                                    Name: sdk.String("Gilberto Dickinson"),
                                    ReadOnly: sdk.Bool(false),
                                },
                            },
                        },
                        shared.EksContainer{
                            Args: []string{
                                "voluptatibus",
                            },
                            Command: []string{
                                "nulla",
                                "fugit",
                            },
                            Env: []shared.EksContainerEnvironmentVariable{
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Domingo Kris",
                                    Value: sdk.String("alias"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Don Hills",
                                    Value: sdk.String("vel"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Clifford Dickens",
                                    Value: sdk.String("dicta"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Elisa Boyle",
                                    Value: sdk.String("excepturi"),
                                },
                            },
                            Image: "voluptatibus",
                            ImagePullPolicy: sdk.String("nostrum"),
                            Name: sdk.String("Devin Ullrich"),
                            Resources: &shared.EksContainerResourceRequirements{
                                Limits: map[string]string{
                                    "veniam": "aliquid",
                                    "inventore": "magnam",
                                },
                                Requests: map[string]string{
                                    "quo": "consectetur",
                                    "recusandae": "aspernatur",
                                },
                            },
                            SecurityContext: &shared.EksContainerSecurityContext{
                                Privileged: sdk.Bool(false),
                                ReadOnlyRootFilesystem: sdk.Bool(false),
                                RunAsGroup: sdk.Int64(325310),
                                RunAsNonRoot: sdk.Bool(false),
                                RunAsUser: sdk.Int64(53427),
                            },
                            VolumeMounts: []shared.EksContainerVolumeMount{
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("libero"),
                                    Name: sdk.String("Jennifer Lesch"),
                                    ReadOnly: sdk.Bool(false),
                                },
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("fugit"),
                                    Name: sdk.String("Miss Dennis Friesen"),
                                    ReadOnly: sdk.Bool(false),
                                },
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("placeat"),
                                    Name: sdk.String("Agnes Johnston"),
                                    ReadOnly: sdk.Bool(false),
                                },
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("assumenda"),
                                    Name: sdk.String("Mrs. Shane Reinger"),
                                    ReadOnly: sdk.Bool(false),
                                },
                            },
                        },
                        shared.EksContainer{
                            Args: []string{
                                "provident",
                            },
                            Command: []string{
                                "molestiae",
                            },
                            Env: []shared.EksContainerEnvironmentVariable{
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Esther Koch",
                                    Value: sdk.String("fuga"),
                                },
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Yvette Stehr",
                                    Value: sdk.String("suscipit"),
                                },
                            },
                            Image: "assumenda",
                            ImagePullPolicy: sdk.String("eos"),
                            Name: sdk.String("Miss Devin Bogan"),
                            Resources: &shared.EksContainerResourceRequirements{
                                Limits: map[string]string{
                                    "quo": "illum",
                                },
                                Requests: map[string]string{
                                    "fuga": "eius",
                                    "eos": "voluptas",
                                    "ab": "cupiditate",
                                    "consequatur": "tempora",
                                },
                            },
                            SecurityContext: &shared.EksContainerSecurityContext{
                                Privileged: sdk.Bool(false),
                                ReadOnlyRootFilesystem: sdk.Bool(false),
                                RunAsGroup: sdk.Int64(892050),
                                RunAsNonRoot: sdk.Bool(false),
                                RunAsUser: sdk.Int64(370853),
                            },
                            VolumeMounts: []shared.EksContainerVolumeMount{
                                shared.EksContainerVolumeMount{
                                    MountPath: sdk.String("sequi"),
                                    Name: sdk.String("Miss Claude Walsh"),
                                    ReadOnly: sdk.Bool(false),
                                },
                            },
                        },
                    },
                    DNSPolicy: sdk.String("dignissimos"),
                    HostNetwork: sdk.Bool(false),
                    Metadata: &shared.EksMetadata{
                        Labels: map[string]string{
                            "nihil": "totam",
                        },
                    },
                    ServiceAccountName: sdk.String("accusamus"),
                    Volumes: []shared.EksVolume{
                        shared.EksVolume{
                            EmptyDir: &shared.EksEmptyDir{
                                Medium: sdk.String("odio"),
                                SizeLimit: sdk.String("occaecati"),
                            },
                            HostPath: &shared.EksHostPath{
                                Path: sdk.String("commodi"),
                            },
                            Name: "Todd Oberbrunner DDS",
                            Secret: &shared.EksSecret{
                                Optional: sdk.Bool(false),
                                SecretName: "eum",
                            },
                        },
                        shared.EksVolume{
                            EmptyDir: &shared.EksEmptyDir{
                                Medium: sdk.String("quas"),
                                SizeLimit: sdk.String("praesentium"),
                            },
                            HostPath: &shared.EksHostPath{
                                Path: sdk.String("consequuntur"),
                            },
                            Name: "Wayne Parker",
                            Secret: &shared.EksSecret{
                                Optional: sdk.Bool(false),
                                SecretName: "atque",
                            },
                        },
                    },
                },
            },
            JobDefinitionName: "explicabo",
            NodeProperties: &operations.RegisterJobDefinitionRequestBodyNodeProperties{
                MainNode: sdk.Int64(325685),
                NodeRangeProperties: []shared.NodeRangeProperty{
                    shared.NodeRangeProperty{
                        Container: &shared.ContainerProperties{
                            Command: []string{
                                "sapiente",
                            },
                            Environment: []shared.KeyValuePair{
                                shared.KeyValuePair{
                                    Name: sdk.String("Rose Turner"),
                                    Value: sdk.String("et"),
                                },
                            },
                            EphemeralStorage: &shared.EphemeralStorage{
                                SizeInGiB: 456911,
                            },
                            ExecutionRoleArn: sdk.String("eveniet"),
                            FargatePlatformConfiguration: &shared.FargatePlatformConfiguration{
                                PlatformVersion: sdk.String("accusamus"),
                            },
                            Image: sdk.String("veritatis"),
                            InstanceType: sdk.String("esse"),
                            JobRoleArn: sdk.String("quod"),
                            LinuxParameters: &shared.LinuxParameters{
                                Devices: []shared.Device{
                                    shared.Device{
                                        ContainerPath: sdk.String("vero"),
                                        HostPath: "aliquid",
                                        Permissions: []shared.DeviceCgroupPermissionEnum{
                                            shared.DeviceCgroupPermissionEnumMknod,
                                        },
                                    },
                                    shared.Device{
                                        ContainerPath: sdk.String("vel"),
                                        HostPath: "harum",
                                        Permissions: []shared.DeviceCgroupPermissionEnum{
                                            shared.DeviceCgroupPermissionEnumMknod,
                                            shared.DeviceCgroupPermissionEnumWrite,
                                        },
                                    },
                                    shared.Device{
                                        ContainerPath: sdk.String("minima"),
                                        HostPath: "distinctio",
                                        Permissions: []shared.DeviceCgroupPermissionEnum{
                                            shared.DeviceCgroupPermissionEnumRead,
                                            shared.DeviceCgroupPermissionEnumWrite,
                                            shared.DeviceCgroupPermissionEnumMknod,
                                            shared.DeviceCgroupPermissionEnumRead,
                                        },
                                    },
                                },
                                InitProcessEnabled: sdk.Bool(false),
                                MaxSwap: sdk.Int64(766964),
                                SharedMemorySize: sdk.Int64(160538),
                                Swappiness: sdk.Int64(9766),
                                Tmpfs: []shared.Tmpfs{
                                    shared.Tmpfs{
                                        ContainerPath: "quaerat",
                                        MountOptions: []string{
                                            "consectetur",
                                            "esse",
                                            "blanditiis",
                                            "provident",
                                        },
                                        Size: 953722,
                                    },
                                    shared.Tmpfs{
                                        ContainerPath: "nulla",
                                        MountOptions: []string{
                                            "esse",
                                            "quasi",
                                            "a",
                                        },
                                        Size: 621679,
                                    },
                                    shared.Tmpfs{
                                        ContainerPath: "sint",
                                        MountOptions: []string{
                                            "possimus",
                                            "quia",
                                            "eveniet",
                                            "asperiores",
                                        },
                                        Size: 815524,
                                    },
                                    shared.Tmpfs{
                                        ContainerPath: "veritatis",
                                        MountOptions: []string{
                                            "quasi",
                                        },
                                        Size: 628899,
                                    },
                                },
                            },
                            LogConfiguration: &shared.LogConfiguration{
                                LogDriver: shared.LogDriverEnumFluentd,
                                Options: map[string]string{
                                    "tenetur": "quae",
                                    "earum": "vel",
                                },
                                SecretOptions: []shared.Secret{
                                    shared.Secret{
                                        Name: "Jeannette Stanton II",
                                        ValueFrom: "sapiente",
                                    },
                                    shared.Secret{
                                        Name: "Marion Kihn",
                                        ValueFrom: "aut",
                                    },
                                },
                            },
                            Memory: sdk.Int64(531849),
                            MountPoints: []shared.MountPoint{
                                shared.MountPoint{
                                    ContainerPath: sdk.String("quibusdam"),
                                    ReadOnly: sdk.Bool(false),
                                    SourceVolume: sdk.String("ex"),
                                },
                            },
                            NetworkConfiguration: &shared.NetworkConfiguration{
                                AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                            },
                            Privileged: sdk.Bool(false),
                            ReadonlyRootFilesystem: sdk.Bool(false),
                            ResourceRequirements: []shared.ResourceRequirement{
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumMemory,
                                    Value: "architecto",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumVcpu,
                                    Value: "tenetur",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumGpu,
                                    Value: "at",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumGpu,
                                    Value: "voluptate",
                                },
                            },
                            Secrets: []shared.Secret{
                                shared.Secret{
                                    Name: "Marie Feest",
                                    ValueFrom: "temporibus",
                                },
                            },
                            Ulimits: []shared.Ulimit{
                                shared.Ulimit{
                                    HardLimit: 522371,
                                    Name: "Marsha Keebler IV",
                                    SoftLimit: 251941,
                                },
                            },
                            User: sdk.String("voluptatem"),
                            Vcpus: sdk.Int64(221161),
                            Volumes: []shared.Volume{
                                shared.Volume{
                                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                            AccessPointID: sdk.String("numquam"),
                                            Iam: shared.EFSAuthorizationConfigIAMEnumDisabled.ToPointer(),
                                        },
                                        FileSystemID: "explicabo",
                                        RootDirectory: sdk.String("voluptas"),
                                        TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                                        TransitEncryptionPort: sdk.Int64(491025),
                                    },
                                    Host: &shared.Host{
                                        SourcePath: sdk.String("dicta"),
                                    },
                                    Name: sdk.String("Wendell Frami"),
                                },
                                shared.Volume{
                                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                            AccessPointID: sdk.String("asperiores"),
                                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                                        },
                                        FileSystemID: "ea",
                                        RootDirectory: sdk.String("quaerat"),
                                        TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                                        TransitEncryptionPort: sdk.Int64(831520),
                                    },
                                    Host: &shared.Host{
                                        SourcePath: sdk.String("officia"),
                                    },
                                    Name: sdk.String("Cody Nikolaus"),
                                },
                                shared.Volume{
                                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                            AccessPointID: sdk.String("quae"),
                                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                                        },
                                        FileSystemID: "porro",
                                        RootDirectory: sdk.String("quod"),
                                        TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                                        TransitEncryptionPort: sdk.Int64(70447),
                                    },
                                    Host: &shared.Host{
                                        SourcePath: sdk.String("adipisci"),
                                    },
                                    Name: sdk.String("Orlando Homenick"),
                                },
                            },
                        },
                        TargetNodes: "est",
                    },
                    shared.NodeRangeProperty{
                        Container: &shared.ContainerProperties{
                            Command: []string{
                                "totam",
                                "fugiat",
                                "vel",
                                "ducimus",
                            },
                            Environment: []shared.KeyValuePair{
                                shared.KeyValuePair{
                                    Name: sdk.String("Clara Senger"),
                                    Value: sdk.String("commodi"),
                                },
                                shared.KeyValuePair{
                                    Name: sdk.String("Ana Wisozk"),
                                    Value: sdk.String("recusandae"),
                                },
                                shared.KeyValuePair{
                                    Name: sdk.String("Kimberly Ritchie"),
                                    Value: sdk.String("exercitationem"),
                                },
                            },
                            EphemeralStorage: &shared.EphemeralStorage{
                                SizeInGiB: 937285,
                            },
                            ExecutionRoleArn: sdk.String("facere"),
                            FargatePlatformConfiguration: &shared.FargatePlatformConfiguration{
                                PlatformVersion: sdk.String("numquam"),
                            },
                            Image: sdk.String("doloribus"),
                            InstanceType: sdk.String("suscipit"),
                            JobRoleArn: sdk.String("reiciendis"),
                            LinuxParameters: &shared.LinuxParameters{
                                Devices: []shared.Device{
                                    shared.Device{
                                        ContainerPath: sdk.String("saepe"),
                                        HostPath: "necessitatibus",
                                        Permissions: []shared.DeviceCgroupPermissionEnum{
                                            shared.DeviceCgroupPermissionEnumRead,
                                            shared.DeviceCgroupPermissionEnumMknod,
                                        },
                                    },
                                    shared.Device{
                                        ContainerPath: sdk.String("adipisci"),
                                        HostPath: "non",
                                        Permissions: []shared.DeviceCgroupPermissionEnum{
                                            shared.DeviceCgroupPermissionEnumRead,
                                        },
                                    },
                                    shared.Device{
                                        ContainerPath: sdk.String("dignissimos"),
                                        HostPath: "a",
                                        Permissions: []shared.DeviceCgroupPermissionEnum{
                                            shared.DeviceCgroupPermissionEnumRead,
                                            shared.DeviceCgroupPermissionEnumWrite,
                                            shared.DeviceCgroupPermissionEnumMknod,
                                            shared.DeviceCgroupPermissionEnumWrite,
                                        },
                                    },
                                },
                                InitProcessEnabled: sdk.Bool(false),
                                MaxSwap: sdk.Int64(58356),
                                SharedMemorySize: sdk.Int64(916727),
                                Swappiness: sdk.Int64(730709),
                                Tmpfs: []shared.Tmpfs{
                                    shared.Tmpfs{
                                        ContainerPath: "accusamus",
                                        MountOptions: []string{
                                            "tempora",
                                            "aspernatur",
                                            "voluptas",
                                        },
                                        Size: 374244,
                                    },
                                },
                            },
                            LogConfiguration: &shared.LogConfiguration{
                                LogDriver: shared.LogDriverEnumJournald,
                                Options: map[string]string{
                                    "nobis": "dolorum",
                                    "adipisci": "minus",
                                },
                                SecretOptions: []shared.Secret{
                                    shared.Secret{
                                        Name: "Harvey Gulgowski",
                                        ValueFrom: "temporibus",
                                    },
                                },
                            },
                            Memory: sdk.Int64(351870),
                            MountPoints: []shared.MountPoint{
                                shared.MountPoint{
                                    ContainerPath: sdk.String("cum"),
                                    ReadOnly: sdk.Bool(false),
                                    SourceVolume: sdk.String("blanditiis"),
                                },
                            },
                            NetworkConfiguration: &shared.NetworkConfiguration{
                                AssignPublicIP: shared.AssignPublicIPEnumDisabled.ToPointer(),
                            },
                            Privileged: sdk.Bool(false),
                            ReadonlyRootFilesystem: sdk.Bool(false),
                            ResourceRequirements: []shared.ResourceRequirement{
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumGpu,
                                    Value: "culpa",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumVcpu,
                                    Value: "pariatur",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumVcpu,
                                    Value: "hic",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumVcpu,
                                    Value: "nobis",
                                },
                            },
                            Secrets: []shared.Secret{
                                shared.Secret{
                                    Name: "Louis Wisoky",
                                    ValueFrom: "facilis",
                                },
                            },
                            Ulimits: []shared.Ulimit{
                                shared.Ulimit{
                                    HardLimit: 709072,
                                    Name: "Margarita Greenholt",
                                    SoftLimit: 447516,
                                },
                                shared.Ulimit{
                                    HardLimit: 417486,
                                    Name: "Benjamin Hodkiewicz III",
                                    SoftLimit: 960257,
                                },
                            },
                            User: sdk.String("debitis"),
                            Vcpus: sdk.Int64(72434),
                            Volumes: []shared.Volume{
                                shared.Volume{
                                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                            AccessPointID: sdk.String("perferendis"),
                                            Iam: shared.EFSAuthorizationConfigIAMEnumDisabled.ToPointer(),
                                        },
                                        FileSystemID: "maiores",
                                        RootDirectory: sdk.String("incidunt"),
                                        TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                                        TransitEncryptionPort: sdk.Int64(592231),
                                    },
                                    Host: &shared.Host{
                                        SourcePath: sdk.String("eius"),
                                    },
                                    Name: sdk.String("Nathan Jaskolski"),
                                },
                                shared.Volume{
                                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                            AccessPointID: sdk.String("voluptatibus"),
                                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                                        },
                                        FileSystemID: "tempora",
                                        RootDirectory: sdk.String("voluptate"),
                                        TransitEncryption: shared.EFSTransitEncryptionEnumDisabled.ToPointer(),
                                        TransitEncryptionPort: sdk.Int64(401713),
                                    },
                                    Host: &shared.Host{
                                        SourcePath: sdk.String("sit"),
                                    },
                                    Name: sdk.String("Cecelia Lakin"),
                                },
                                shared.Volume{
                                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                            AccessPointID: sdk.String("incidunt"),
                                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                                        },
                                        FileSystemID: "debitis",
                                        RootDirectory: sdk.String("rem"),
                                        TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                                        TransitEncryptionPort: sdk.Int64(750595),
                                    },
                                    Host: &shared.Host{
                                        SourcePath: sdk.String("error"),
                                    },
                                    Name: sdk.String("Lorraine Walsh"),
                                },
                                shared.Volume{
                                    EfsVolumeConfiguration: &shared.EFSVolumeConfiguration{
                                        AuthorizationConfig: &shared.EFSAuthorizationConfig{
                                            AccessPointID: sdk.String("magni"),
                                            Iam: shared.EFSAuthorizationConfigIAMEnumEnabled.ToPointer(),
                                        },
                                        FileSystemID: "saepe",
                                        RootDirectory: sdk.String("numquam"),
                                        TransitEncryption: shared.EFSTransitEncryptionEnumEnabled.ToPointer(),
                                        TransitEncryptionPort: sdk.Int64(446135),
                                    },
                                    Host: &shared.Host{
                                        SourcePath: sdk.String("officiis"),
                                    },
                                    Name: sdk.String("Marsha Heidenreich"),
                                },
                            },
                        },
                        TargetNodes: "laboriosam",
                    },
                },
                NumNodes: sdk.Int64(680515),
            },
            Parameters: map[string]string{
                "error": "hic",
                "expedita": "debitis",
                "neque": "dolorum",
            },
            PlatformCapabilities: []shared.PlatformCapabilityEnum{
                shared.PlatformCapabilityEnumFargate,
                shared.PlatformCapabilityEnumFargate,
            },
            PropagateTags: sdk.Bool(false),
            RetryStrategy: &operations.RegisterJobDefinitionRequestBodyRetryStrategy{
                Attempts: sdk.Int64(548361),
                EvaluateOnExit: []shared.EvaluateOnExit{
                    shared.EvaluateOnExit{
                        Action: shared.RetryActionEnumRetry,
                        OnExitCode: sdk.String("atque"),
                        OnReason: sdk.String("fugit"),
                        OnStatusReason: sdk.String("ut"),
                    },
                    shared.EvaluateOnExit{
                        Action: shared.RetryActionEnumExit,
                        OnExitCode: sdk.String("voluptatem"),
                        OnReason: sdk.String("culpa"),
                        OnStatusReason: sdk.String("expedita"),
                    },
                    shared.EvaluateOnExit{
                        Action: shared.RetryActionEnumRetry,
                        OnExitCode: sdk.String("consequatur"),
                        OnReason: sdk.String("esse"),
                        OnStatusReason: sdk.String("ipsam"),
                    },
                    shared.EvaluateOnExit{
                        Action: shared.RetryActionEnumRetry,
                        OnExitCode: sdk.String("voluptatum"),
                        OnReason: sdk.String("quas"),
                        OnStatusReason: sdk.String("repudiandae"),
                    },
                },
            },
            SchedulingPriority: sdk.Int64(361151),
            Tags: map[string]string{
                "blanditiis": "ex",
            },
            Timeout: &operations.RegisterJobDefinitionRequestBodyTimeout{
                AttemptDurationSeconds: sdk.Int64(153627),
            },
            Type: operations.RegisterJobDefinitionRequestBodyTypeEnumContainer,
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterJobDefinitionResponse != nil {
        // handle response
    }
}
```

## SubmitJob

<p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>

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
    res, err := s.SDK.SubmitJob(ctx, operations.SubmitJobRequest{
        RequestBody: operations.SubmitJobRequestBody{
            ArrayProperties: &operations.SubmitJobRequestBodyArrayProperties{
                Size: sdk.Int64(209750),
            },
            ContainerOverrides: &operations.SubmitJobRequestBodyContainerOverrides{
                Command: []string{
                    "dicta",
                    "architecto",
                    "occaecati",
                },
                Environment: []shared.KeyValuePair{
                    shared.KeyValuePair{
                        Name: sdk.String("Alberto Osinski"),
                        Value: sdk.String("laboriosam"),
                    },
                    shared.KeyValuePair{
                        Name: sdk.String("Grace O'Connell"),
                        Value: sdk.String("reiciendis"),
                    },
                },
                InstanceType: sdk.String("provident"),
                Memory: sdk.Int64(833819),
                ResourceRequirements: []shared.ResourceRequirement{
                    shared.ResourceRequirement{
                        Type: shared.ResourceTypeEnumMemory,
                        Value: "perferendis",
                    },
                    shared.ResourceRequirement{
                        Type: shared.ResourceTypeEnumMemory,
                        Value: "quidem",
                    },
                    shared.ResourceRequirement{
                        Type: shared.ResourceTypeEnumVcpu,
                        Value: "facere",
                    },
                    shared.ResourceRequirement{
                        Type: shared.ResourceTypeEnumMemory,
                        Value: "praesentium",
                    },
                },
                Vcpus: sdk.Int64(648598),
            },
            DependsOn: []shared.JobDependency{
                shared.JobDependency{
                    JobID: sdk.String("voluptatem"),
                    Type: shared.ArrayJobDependencyEnumSequential.ToPointer(),
                },
                shared.JobDependency{
                    JobID: sdk.String("repudiandae"),
                    Type: shared.ArrayJobDependencyEnumNToN.ToPointer(),
                },
            },
            EksPropertiesOverride: &operations.SubmitJobRequestBodyEksPropertiesOverride{
                PodProperties: &shared.EksPodPropertiesOverride{
                    Containers: []shared.EksContainerOverride{
                        shared.EksContainerOverride{
                            Args: []string{
                                "asperiores",
                                "totam",
                            },
                            Command: []string{
                                "quidem",
                                "maxime",
                            },
                            Env: []shared.EksContainerEnvironmentVariable{
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Grace Shields",
                                    Value: sdk.String("error"),
                                },
                            },
                            Image: sdk.String("officiis"),
                            Resources: &shared.EksContainerResourceRequirements{
                                Limits: map[string]string{
                                    "accusamus": "natus",
                                    "minima": "aspernatur",
                                    "ex": "maiores",
                                    "corrupti": "at",
                                },
                                Requests: map[string]string{
                                    "blanditiis": "suscipit",
                                    "repudiandae": "atque",
                                    "atque": "sunt",
                                },
                            },
                        },
                        shared.EksContainerOverride{
                            Args: []string{
                                "dolorum",
                                "repellendus",
                                "labore",
                                "reiciendis",
                            },
                            Command: []string{
                                "repudiandae",
                            },
                            Env: []shared.EksContainerEnvironmentVariable{
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Teresa Daniel",
                                    Value: sdk.String("velit"),
                                },
                            },
                            Image: sdk.String("a"),
                            Resources: &shared.EksContainerResourceRequirements{
                                Limits: map[string]string{
                                    "magnam": "saepe",
                                    "consequuntur": "occaecati",
                                    "officiis": "perspiciatis",
                                },
                                Requests: map[string]string{
                                    "adipisci": "eveniet",
                                    "occaecati": "consequuntur",
                                },
                            },
                        },
                        shared.EksContainerOverride{
                            Args: []string{
                                "id",
                            },
                            Command: []string{
                                "reprehenderit",
                                "error",
                            },
                            Env: []shared.EksContainerEnvironmentVariable{
                                shared.EksContainerEnvironmentVariable{
                                    Name: "Melody Vandervort",
                                    Value: sdk.String("doloremque"),
                                },
                            },
                            Image: sdk.String("iure"),
                            Resources: &shared.EksContainerResourceRequirements{
                                Limits: map[string]string{
                                    "totam": "quae",
                                },
                                Requests: map[string]string{
                                    "eveniet": "qui",
                                    "cum": "iure",
                                },
                            },
                        },
                    },
                    Metadata: &shared.EksMetadata{
                        Labels: map[string]string{
                            "ratione": "laborum",
                            "distinctio": "voluptatum",
                            "rem": "aliquam",
                            "ad": "repellat",
                        },
                    },
                },
            },
            JobDefinition: "alias",
            JobName: "corporis",
            JobQueue: "perspiciatis",
            NodeOverrides: &operations.SubmitJobRequestBodyNodeOverrides{
                NodePropertyOverrides: []shared.NodePropertyOverride{
                    shared.NodePropertyOverride{
                        ContainerOverrides: &shared.ContainerOverrides{
                            Command: []string{
                                "voluptas",
                                "alias",
                                "maiores",
                            },
                            Environment: []shared.KeyValuePair{
                                shared.KeyValuePair{
                                    Name: sdk.String("Alberta Harber"),
                                    Value: sdk.String("nesciunt"),
                                },
                                shared.KeyValuePair{
                                    Name: sdk.String("Sophie Mohr"),
                                    Value: sdk.String("ex"),
                                },
                                shared.KeyValuePair{
                                    Name: sdk.String("Molly Ferry"),
                                    Value: sdk.String("eum"),
                                },
                                shared.KeyValuePair{
                                    Name: sdk.String("Patti Klocko"),
                                    Value: sdk.String("eum"),
                                },
                            },
                            InstanceType: sdk.String("reiciendis"),
                            Memory: sdk.Int64(592780),
                            ResourceRequirements: []shared.ResourceRequirement{
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumVcpu,
                                    Value: "quasi",
                                },
                            },
                            Vcpus: sdk.Int64(657020),
                        },
                        TargetNodes: "nostrum",
                    },
                    shared.NodePropertyOverride{
                        ContainerOverrides: &shared.ContainerOverrides{
                            Command: []string{
                                "provident",
                                "possimus",
                                "animi",
                            },
                            Environment: []shared.KeyValuePair{
                                shared.KeyValuePair{
                                    Name: sdk.String("Ruth Zulauf"),
                                    Value: sdk.String("in"),
                                },
                                shared.KeyValuePair{
                                    Name: sdk.String("Darin Nienow"),
                                    Value: sdk.String("modi"),
                                },
                            },
                            InstanceType: sdk.String("voluptatibus"),
                            Memory: sdk.Int64(564064),
                            ResourceRequirements: []shared.ResourceRequirement{
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumMemory,
                                    Value: "cumque",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumGpu,
                                    Value: "rerum",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumGpu,
                                    Value: "quis",
                                },
                                shared.ResourceRequirement{
                                    Type: shared.ResourceTypeEnumGpu,
                                    Value: "fugit",
                                },
                            },
                            Vcpus: sdk.Int64(765271),
                        },
                        TargetNodes: "quae",
                    },
                },
                NumNodes: sdk.Int64(21688),
            },
            Parameters: map[string]string{
                "aspernatur": "eum",
            },
            PropagateTags: sdk.Bool(false),
            RetryStrategy: &operations.SubmitJobRequestBodyRetryStrategy{
                Attempts: sdk.Int64(260628),
                EvaluateOnExit: []shared.EvaluateOnExit{
                    shared.EvaluateOnExit{
                        Action: shared.RetryActionEnumExit,
                        OnExitCode: sdk.String("impedit"),
                        OnReason: sdk.String("eos"),
                        OnStatusReason: sdk.String("sapiente"),
                    },
                    shared.EvaluateOnExit{
                        Action: shared.RetryActionEnumRetry,
                        OnExitCode: sdk.String("dicta"),
                        OnReason: sdk.String("minima"),
                        OnStatusReason: sdk.String("beatae"),
                    },
                    shared.EvaluateOnExit{
                        Action: shared.RetryActionEnumExit,
                        OnExitCode: sdk.String("provident"),
                        OnReason: sdk.String("earum"),
                        OnStatusReason: sdk.String("soluta"),
                    },
                },
            },
            SchedulingPriorityOverride: sdk.Int64(940782),
            ShareIdentifier: sdk.String("illum"),
            Tags: map[string]string{
                "earum": "perspiciatis",
            },
            Timeout: &operations.SubmitJobRequestBodyTimeout{
                AttemptDurationSeconds: sdk.Int64(983427),
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitJobResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "ratione": "animi",
                "necessitatibus": "nulla",
                "consequatur": "quasi",
            },
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("quasi"),
        ResourceArn: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TerminateJob

Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TerminateJob(ctx, operations.TerminateJobRequest{
        RequestBody: operations.TerminateJobRequestBody{
            JobID: "doloribus",
            Reason: "nulla",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateJobResponse != nil {
        // handle response
    }
}
```

## UntagResource

Deletes specified tags from an Batch resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        ResourceArn: "doloremque",
        TagKeys: []string{
            "odio",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateComputeEnvironment

Updates an Batch compute environment.

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
    res, err := s.SDK.UpdateComputeEnvironment(ctx, operations.UpdateComputeEnvironmentRequest{
        RequestBody: operations.UpdateComputeEnvironmentRequestBody{
            ComputeEnvironment: "tempora",
            ComputeResources: &operations.UpdateComputeEnvironmentRequestBodyComputeResources{
                AllocationStrategy: shared.CRUpdateAllocationStrategyEnumBestFitProgressive.ToPointer(),
                BidPercentage: sdk.Int64(403793),
                DesiredvCpus: sdk.Int64(235263),
                Ec2Configuration: []shared.Ec2Configuration{
                    shared.Ec2Configuration{
                        ImageIDOverride: sdk.String("ipsa"),
                        ImageKubernetesVersion: sdk.String("laborum"),
                        ImageType: "sunt",
                    },
                    shared.Ec2Configuration{
                        ImageIDOverride: sdk.String("nostrum"),
                        ImageKubernetesVersion: sdk.String("fugiat"),
                        ImageType: "expedita",
                    },
                },
                Ec2KeyPair: sdk.String("aliquid"),
                ImageID: sdk.String("officia"),
                InstanceRole: sdk.String("suscipit"),
                InstanceTypes: []string{
                    "perferendis",
                    "eum",
                },
                LaunchTemplate: &shared.LaunchTemplateSpecification{
                    LaunchTemplateID: sdk.String("voluptas"),
                    LaunchTemplateName: sdk.String("iste"),
                    Version: sdk.String("id"),
                },
                MaxvCpus: sdk.Int64(70042),
                MinvCpus: sdk.Int64(625358),
                PlacementGroup: sdk.String("possimus"),
                SecurityGroupIds: []string{
                    "mollitia",
                    "laborum",
                    "libero",
                    "ad",
                },
                Subnets: []string{
                    "enim",
                    "vitae",
                    "repellendus",
                },
                Tags: map[string]string{
                    "quo": "ex",
                    "ut": "ad",
                },
                Type: shared.CRTypeEnumFargate.ToPointer(),
                UpdateToLatestImageVersion: sdk.Bool(false),
            },
            ServiceRole: sdk.String("voluptatem"),
            State: operations.UpdateComputeEnvironmentRequestBodyStateEnumDisabled.ToPointer(),
            UnmanagedvCpus: sdk.Int64(737254),
            UpdatePolicy: &operations.UpdateComputeEnvironmentRequestBodyUpdatePolicy{
                JobExecutionTimeoutMinutes: sdk.Int64(399660),
                TerminateJobsOnUpdate: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateComputeEnvironmentResponse != nil {
        // handle response
    }
}
```

## UpdateJobQueue

Updates a job queue.

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
    res, err := s.SDK.UpdateJobQueue(ctx, operations.UpdateJobQueueRequest{
        RequestBody: operations.UpdateJobQueueRequestBody{
            ComputeEnvironmentOrder: []shared.ComputeEnvironmentOrder{
                shared.ComputeEnvironmentOrder{
                    ComputeEnvironment: "sapiente",
                    Order: 889288,
                },
            },
            JobQueue: "architecto",
            Priority: sdk.Int64(682119),
            SchedulingPolicyArn: sdk.String("pariatur"),
            State: operations.UpdateJobQueueRequestBodyStateEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateJobQueueResponse != nil {
        // handle response
    }
}
```

## UpdateSchedulingPolicy

Updates a scheduling policy.

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
    res, err := s.SDK.UpdateSchedulingPolicy(ctx, operations.UpdateSchedulingPolicyRequest{
        RequestBody: operations.UpdateSchedulingPolicyRequestBody{
            Arn: "minus",
            FairsharePolicy: &operations.UpdateSchedulingPolicyRequestBodyFairsharePolicy{
                ComputeReservation: sdk.Int64(365100),
                ShareDecaySeconds: sdk.Int64(992074),
                ShareDistribution: []shared.ShareAttributes{
                    shared.ShareAttributes{
                        ShareIdentifier: "ullam",
                        WeightFactor: sdk.Float32(191.22),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSchedulingPolicyResponse != nil {
        // handle response
    }
}
```
