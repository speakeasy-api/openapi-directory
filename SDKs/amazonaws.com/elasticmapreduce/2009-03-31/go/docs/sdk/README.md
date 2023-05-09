# SDK

## Overview

Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management.

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticmapreduce/>
### Available Operations

* [AddInstanceFleet](#addinstancefleet) - <p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>
* [AddInstanceGroups](#addinstancegroups) - Adds one or more instance groups to a running cluster.
* [AddJobFlowSteps](#addjobflowsteps) - <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>
* [AddTags](#addtags) - Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 
* [CancelSteps](#cancelsteps) - Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. 
* [CreateSecurityConfiguration](#createsecurityconfiguration) - Creates a security configuration, which is stored in the service and can be specified when a cluster is created.
* [CreateStudio](#createstudio) - Creates a new Amazon EMR Studio.
* [CreateStudioSessionMapping](#createstudiosessionmapping) - Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.
* [DeleteSecurityConfiguration](#deletesecurityconfiguration) - Deletes a security configuration.
* [DeleteStudio](#deletestudio) - Removes an Amazon EMR Studio from the Studio metadata store.
* [DeleteStudioSessionMapping](#deletestudiosessionmapping) - Removes a user or group from an Amazon EMR Studio.
* [DescribeCluster](#describecluster) - Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.
* [~~DescribeJobFlows~~](#describejobflows) - <p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p> :warning: **Deprecated**
* [DescribeNotebookExecution](#describenotebookexecution) - Provides details of a notebook execution.
* [DescribeReleaseLabel](#describereleaselabel) - Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.
* [DescribeSecurityConfiguration](#describesecurityconfiguration) - Provides the details of a security configuration by returning the configuration JSON.
* [DescribeStep](#describestep) - Provides more detail about the cluster step.
* [DescribeStudio](#describestudio) - Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.
* [GetAutoTerminationPolicy](#getautoterminationpolicy) - Returns the auto-termination policy for an Amazon EMR cluster.
* [GetBlockPublicAccessConfiguration](#getblockpublicaccessconfiguration) - Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
* [GetClusterSessionCredentials](#getclustersessioncredentials) - Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.
* [GetManagedScalingPolicy](#getmanagedscalingpolicy) - Fetches the attached managed scaling policy for an Amazon EMR cluster. 
* [GetStudioSessionMapping](#getstudiosessionmapping) - Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).
* [ListBootstrapActions](#listbootstrapactions) - Provides information about the bootstrap actions associated with a cluster.
* [ListClusters](#listclusters) - Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.
* [ListInstanceFleets](#listinstancefleets) - <p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
* [ListInstanceGroups](#listinstancegroups) - Provides all available details about the instance groups in a cluster.
* [ListInstances](#listinstances) - Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.
* [ListNotebookExecutions](#listnotebookexecutions) - Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.
* [ListReleaseLabels](#listreleaselabels) - Retrieves release labels of EMR services in the region where the API is called.
* [ListSecurityConfigurations](#listsecurityconfigurations) - Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.
* [ListSteps](#liststeps) - Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.
* [ListStudioSessionMappings](#liststudiosessionmappings) - Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.
* [ListStudios](#liststudios) - Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.
* [ModifyCluster](#modifycluster) - Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.
* [ModifyInstanceFleet](#modifyinstancefleet) - <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
* [ModifyInstanceGroups](#modifyinstancegroups) - ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.
* [PutAutoScalingPolicy](#putautoscalingpolicy) - Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
* [PutAutoTerminationPolicy](#putautoterminationpolicy) - <note> <p>Auto-termination is supported in Amazon EMR versions 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>
* [PutBlockPublicAccessConfiguration](#putblockpublicaccessconfiguration) - Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
* [PutManagedScalingPolicy](#putmanagedscalingpolicy) - Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
* [RemoveAutoScalingPolicy](#removeautoscalingpolicy) - Removes an automatic scaling policy from a specified instance group within an EMR cluster.
* [RemoveAutoTerminationPolicy](#removeautoterminationpolicy) - Removes an auto-termination policy from an Amazon EMR cluster.
* [RemoveManagedScalingPolicy](#removemanagedscalingpolicy) -  Removes a managed scaling policy from a specified EMR cluster. 
* [RemoveTags](#removetags) - <p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>
* [RunJobFlow](#runjobflow) - <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>
* [SetTerminationProtection](#setterminationprotection) - <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
* [SetVisibleToAllUsers](#setvisibletoallusers) - <important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access Management for EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>
* [StartNotebookExecution](#startnotebookexecution) - Starts a notebook execution.
* [StopNotebookExecution](#stopnotebookexecution) - Stops a notebook execution.
* [TerminateJobFlows](#terminatejobflows) - <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>
* [UpdateStudio](#updatestudio) - Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.
* [UpdateStudioSessionMapping](#updatestudiosessionmapping) - Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

## AddInstanceFleet

<p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>

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
    res, err := s.SDK.AddInstanceFleet(ctx, operations.AddInstanceFleetRequest{
        AddInstanceFleetInput: shared.AddInstanceFleetInput{
            ClusterID: "praesentium",
            InstanceFleet: shared.InstanceFleetConfig{
                InstanceFleetType: shared.InstanceFleetTypeEnumCore,
                InstanceTypeConfigs: []shared.InstanceTypeConfig{
                    shared.InstanceTypeConfig{
                        BidPrice: sdk.String("quasi"),
                        BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(9211.58),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("veritatis"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "enim": "consequatur",
                                    "est": "quibusdam",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("explicabo"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "quibusdam": "labore",
                                    "modi": "qui",
                                    "aliquid": "cupiditate",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("quos"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "assumenda": "ipsam",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("alias"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(677817),
                                        SizeInGB: 569618,
                                        Throughput: sdk.Int64(270008),
                                        VolumeType: "facilis",
                                    },
                                    VolumesPerInstance: sdk.Int64(735194),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceType: "labore",
                        WeightedCapacity: sdk.Int64(962189),
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: sdk.String("eum"),
                        BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(2487.53),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("sint"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "necessitatibus": "sint",
                                    "officia": "dolor",
                                    "debitis": "a",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("dolorum"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "illum": "maiores",
                                    "rerum": "dicta",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("magnam"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "ea": "aliquid",
                                    "laborum": "accusamus",
                                    "non": "occaecati",
                                    "enim": "accusamus",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("delectus"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "nam": "id",
                                    "blanditiis": "deleniti",
                                    "sapiente": "amet",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("deserunt"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(423855),
                                        SizeInGB: 618809,
                                        Throughput: sdk.Int64(606393),
                                        VolumeType: "molestiae",
                                    },
                                    VolumesPerInstance: sdk.Int64(19193),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(470132),
                                        SizeInGB: 301575,
                                        Throughput: sdk.Int64(716075),
                                        VolumeType: "id",
                                    },
                                    VolumesPerInstance: sdk.Int64(287991),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceType: "labore",
                        WeightedCapacity: sdk.Int64(383462),
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: sdk.String("natus"),
                        BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(7491.7),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("vero"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "magnam": "et",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("excepturi"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "quos": "sint",
                                    "accusantium": "mollitia",
                                    "reiciendis": "mollitia",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("ad"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(221262),
                                        SizeInGB: 896547,
                                        Throughput: sdk.Int64(141264),
                                        VolumeType: "nemo",
                                    },
                                    VolumesPerInstance: sdk.Int64(97260),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(435865),
                                        SizeInGB: 984043,
                                        Throughput: sdk.Int64(891924),
                                        VolumeType: "eius",
                                    },
                                    VolumesPerInstance: sdk.Int64(806194),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceType: "deleniti",
                        WeightedCapacity: sdk.Int64(703889),
                    },
                    shared.InstanceTypeConfig{
                        BidPrice: sdk.String("in"),
                        BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(1002.26),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("repudiandae"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "nihil": "repellat",
                                    "quibusdam": "sed",
                                    "saepe": "pariatur",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("accusantium"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(508315),
                                        SizeInGB: 615560,
                                        Throughput: sdk.Int64(166847),
                                        VolumeType: "sunt",
                                    },
                                    VolumesPerInstance: sdk.Int64(779051),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceType: "illum",
                        WeightedCapacity: sdk.Int64(864934),
                    },
                },
                LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                    OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                        AllocationStrategy: shared.OnDemandProvisioningAllocationStrategyEnumLowestPrice,
                        CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                            CapacityReservationPreference: shared.OnDemandCapacityReservationPreferenceEnumNone.ToPointer(),
                            CapacityReservationResourceGroupArn: sdk.String("ea"),
                            UsageStrategy: shared.OnDemandCapacityReservationUsageStrategyEnumUseCapacityReservationsFirst.ToPointer(),
                        },
                    },
                    SpotSpecification: &shared.SpotProvisioningSpecification{
                        AllocationStrategy: shared.SpotProvisioningAllocationStrategyEnumCapacityOptimized.ToPointer(),
                        BlockDurationMinutes: sdk.Int64(569101),
                        TimeoutAction: shared.SpotProvisioningTimeoutActionEnumSwitchToOnDemand,
                        TimeoutDurationMinutes: 407183,
                    },
                },
                Name: sdk.String("Virginia Wunsch"),
                ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                    OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                        TimeoutDurationMinutes: 453543,
                    },
                    SpotResizeSpecification: &shared.SpotResizingSpecification{
                        TimeoutDurationMinutes: 420075,
                    },
                },
                TargetOnDemandCapacity: sdk.Int64(722056),
                TargetSpotCapacity: sdk.Int64(50588),
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.AddInstanceFleetXAmzTargetEnumElasticMapReduceAddInstanceFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddInstanceFleetOutput != nil {
        // handle response
    }
}
```

## AddInstanceGroups

Adds one or more instance groups to a running cluster.

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
    res, err := s.SDK.AddInstanceGroups(ctx, operations.AddInstanceGroupsRequest{
        AddInstanceGroupsInput: shared.AddInstanceGroupsInput{
            InstanceGroups: []shared.InstanceGroupConfig{
                shared.InstanceGroupConfig{
                    AutoScalingPolicy: &shared.AutoScalingPolicy{
                        Constraints: shared.ScalingConstraints{
                            MaxCapacity: 359978,
                            MinCapacity: 944124,
                        },
                        Rules: []shared.ScalingRule{
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumChangeInCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(339404),
                                        ScalingAdjustment: 521037,
                                    },
                                },
                                Description: sdk.String("dignissimos"),
                                Name: "Beatrice Dooley Sr.",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumLessThanOrEqual,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("dolor"),
                                                Value: sdk.String("vero"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("nostrum"),
                                                Value: sdk.String("hic"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(928082),
                                        MetricName: "omnis",
                                        Namespace: sdk.String("facilis"),
                                        Period: 596656,
                                        Statistic: shared.StatisticEnumSampleCount.ToPointer(),
                                        Threshold: 7836.45,
                                        Unit: shared.UnitEnumBytes.ToPointer(),
                                    },
                                },
                            },
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(50370),
                                        ScalingAdjustment: 577229,
                                    },
                                },
                                Description: sdk.String("rerum"),
                                Name: "Ollie Watsica",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumLessThan,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("pariatur"),
                                                Value: sdk.String("provident"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("nobis"),
                                                Value: sdk.String("libero"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("delectus"),
                                                Value: sdk.String("quaerat"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(554242),
                                        MetricName: "aliquid",
                                        Namespace: sdk.String("dolorem"),
                                        Period: 209843,
                                        Statistic: shared.StatisticEnumAverage.ToPointer(),
                                        Threshold: 1861.93,
                                        Unit: shared.UnitEnumKiloBytes.ToPointer(),
                                    },
                                },
                            },
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(739551),
                                        ScalingAdjustment: 452109,
                                    },
                                },
                                Description: sdk.String("dignissimos"),
                                Name: "Allen Parisian Jr.",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThanOrEqual,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("odio"),
                                                Value: sdk.String("quaerat"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("accusamus"),
                                                Value: sdk.String("quidem"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(976405),
                                        MetricName: "voluptas",
                                        Namespace: sdk.String("natus"),
                                        Period: 179603,
                                        Statistic: shared.StatisticEnumSum.ToPointer(),
                                        Threshold: 246.78,
                                        Unit: shared.UnitEnumMegaBitsPerSecond.ToPointer(),
                                    },
                                },
                            },
                        },
                    },
                    BidPrice: sdk.String("ab"),
                    Configurations: []shared.Configuration{
                        shared.Configuration{
                            Classification: sdk.String("dolorum"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "dolorum": "deleniti",
                                "omnis": "necessitatibus",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("distinctio"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "ipsum": "voluptate",
                                "id": "saepe",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("eius"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "amet": "optio",
                            },
                        },
                    },
                    CustomAmiID: sdk.String("accusamus"),
                    EbsConfiguration: &shared.EbsConfiguration{
                        EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(904425),
                                    SizeInGB: 383464,
                                    Throughput: sdk.Int64(645785),
                                    VolumeType: "provident",
                                },
                                VolumesPerInstance: sdk.Int64(324683),
                            },
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(831049),
                                    SizeInGB: 519711,
                                    Throughput: sdk.Int64(628982),
                                    VolumeType: "alias",
                                },
                                VolumesPerInstance: sdk.Int64(872651),
                            },
                        },
                        EbsOptimized: sdk.Bool(false),
                    },
                    InstanceCount: 311860,
                    InstanceRole: shared.InstanceRoleTypeEnumMaster,
                    InstanceType: "vel",
                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                    Name: sdk.String("Clarence Parisian"),
                },
                shared.InstanceGroupConfig{
                    AutoScalingPolicy: &shared.AutoScalingPolicy{
                        Constraints: shared.ScalingConstraints{
                            MaxCapacity: 687488,
                            MinCapacity: 483409,
                        },
                        Rules: []shared.ScalingRule{
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(229442),
                                        ScalingAdjustment: 730856,
                                    },
                                },
                                Description: sdk.String("accusamus"),
                                Name: "Darlene Effertz",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("expedita"),
                                                Value: sdk.String("neque"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(153694),
                                        MetricName: "vel",
                                        Namespace: sdk.String("libero"),
                                        Period: 374170,
                                        Statistic: shared.StatisticEnumMinimum.ToPointer(),
                                        Threshold: 4635.75,
                                        Unit: shared.UnitEnumKiloBytes.ToPointer(),
                                    },
                                },
                            },
                        },
                    },
                    BidPrice: sdk.String("incidunt"),
                    Configurations: []shared.Configuration{
                        shared.Configuration{
                            Classification: sdk.String("cupiditate"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "soluta": "dicta",
                                "laborum": "totam",
                                "incidunt": "aspernatur",
                                "dolores": "distinctio",
                            },
                        },
                    },
                    CustomAmiID: sdk.String("facilis"),
                    EbsConfiguration: &shared.EbsConfiguration{
                        EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(463150),
                                    SizeInGB: 565421,
                                    Throughput: sdk.Int64(840429),
                                    VolumeType: "qui",
                                },
                                VolumesPerInstance: sdk.Int64(204865),
                            },
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(144847),
                                    SizeInGB: 164959,
                                    Throughput: sdk.Int64(488056),
                                    VolumeType: "sunt",
                                },
                                VolumesPerInstance: sdk.Int64(355613),
                            },
                        },
                        EbsOptimized: sdk.Bool(false),
                    },
                    InstanceCount: 722081,
                    InstanceRole: shared.InstanceRoleTypeEnumTask,
                    InstanceType: "voluptatem",
                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                    Name: sdk.String("Robin Bosco"),
                },
                shared.InstanceGroupConfig{
                    AutoScalingPolicy: &shared.AutoScalingPolicy{
                        Constraints: shared.ScalingConstraints{
                            MaxCapacity: 83422,
                            MinCapacity: 749255,
                        },
                        Rules: []shared.ScalingRule{
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(45614),
                                        ScalingAdjustment: 961937,
                                    },
                                },
                                Description: sdk.String("dolorem"),
                                Name: "Clara Fisher Jr.",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThanOrEqual,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("itaque"),
                                                Value: sdk.String("consequatur"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("est"),
                                                Value: sdk.String("repellendus"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("porro"),
                                                Value: sdk.String("doloribus"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(281730),
                                        MetricName: "facilis",
                                        Namespace: sdk.String("cupiditate"),
                                        Period: 181631,
                                        Statistic: shared.StatisticEnumSampleCount.ToPointer(),
                                        Threshold: 5123.93,
                                        Unit: shared.UnitEnumTeraBits.ToPointer(),
                                    },
                                },
                            },
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(787542),
                                        ScalingAdjustment: 876506,
                                    },
                                },
                                Description: sdk.String("omnis"),
                                Name: "Tiffany Willms",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumLessThanOrEqual,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("dignissimos"),
                                                Value: sdk.String("hic"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("distinctio"),
                                                Value: sdk.String("quod"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("odio"),
                                                Value: sdk.String("similique"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("facilis"),
                                                Value: sdk.String("vero"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(498140),
                                        MetricName: "dolore",
                                        Namespace: sdk.String("quibusdam"),
                                        Period: 848944,
                                        Statistic: shared.StatisticEnumSampleCount.ToPointer(),
                                        Threshold: 6178.77,
                                        Unit: shared.UnitEnumTeraBytesPerSecond.ToPointer(),
                                    },
                                },
                            },
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(347233),
                                        ScalingAdjustment: 862310,
                                    },
                                },
                                Description: sdk.String("fugit"),
                                Name: "Elijah Wyman",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("officia"),
                                                Value: sdk.String("tempora"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(368584),
                                        MetricName: "ea",
                                        Namespace: sdk.String("aspernatur"),
                                        Period: 428224,
                                        Statistic: shared.StatisticEnumMaximum.ToPointer(),
                                        Threshold: 2978.42,
                                        Unit: shared.UnitEnumKiloBytes.ToPointer(),
                                    },
                                },
                            },
                        },
                    },
                    BidPrice: sdk.String("ex"),
                    Configurations: []shared.Configuration{
                        shared.Configuration{
                            Classification: sdk.String("dicta"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "quasi": "ex",
                                "nulla": "excepturi",
                                "voluptatibus": "nostrum",
                                "sapiente": "quisquam",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("saepe"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "corporis": "veniam",
                                "aliquid": "inventore",
                                "magnam": "ea",
                                "quo": "consectetur",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("recusandae"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "eaque": "a",
                                "libero": "aut",
                            },
                        },
                    },
                    CustomAmiID: sdk.String("aut"),
                    EbsConfiguration: &shared.EbsConfiguration{
                        EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(770581),
                                    SizeInGB: 304582,
                                    Throughput: sdk.Int64(146946),
                                    VolumeType: "accusamus",
                                },
                                VolumesPerInstance: sdk.Int64(79522),
                            },
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(250622),
                                    SizeInGB: 89603,
                                    Throughput: sdk.Int64(677412),
                                    VolumeType: "laborum",
                                },
                                VolumesPerInstance: sdk.Int64(810424),
                            },
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(245367),
                                    SizeInGB: 432148,
                                    Throughput: sdk.Int64(420539),
                                    VolumeType: "nobis",
                                },
                                VolumesPerInstance: sdk.Int64(557369),
                            },
                        },
                        EbsOptimized: sdk.Bool(false),
                    },
                    InstanceCount: 829603,
                    InstanceRole: shared.InstanceRoleTypeEnumTask,
                    InstanceType: "voluptas",
                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                    Name: sdk.String("Anita Gerhold"),
                },
                shared.InstanceGroupConfig{
                    AutoScalingPolicy: &shared.AutoScalingPolicy{
                        Constraints: shared.ScalingConstraints{
                            MaxCapacity: 55374,
                            MinCapacity: 476477,
                        },
                        Rules: []shared.ScalingRule{
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumChangeInCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(458515),
                                        ScalingAdjustment: 456141,
                                    },
                                },
                                Description: sdk.String("rem"),
                                Name: "Mitchell Predovic",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("assumenda"),
                                                Value: sdk.String("eos"),
                                            },
                                            shared.MetricDimension{
                                                Key: sdk.String("praesentium"),
                                                Value: sdk.String("quisquam"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(86377),
                                        MetricName: "ipsa",
                                        Namespace: sdk.String("id"),
                                        Period: 696997,
                                        Statistic: shared.StatisticEnumAverage.ToPointer(),
                                        Threshold: 7786.96,
                                        Unit: shared.UnitEnumKiloBitsPerSecond.ToPointer(),
                                    },
                                },
                            },
                            shared.ScalingRule{
                                Action: shared.ScalingAction{
                                    Market: shared.MarketTypeEnumSpot.ToPointer(),
                                    SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                        AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                        CoolDown: sdk.Int64(259422),
                                        ScalingAdjustment: 178367,
                                    },
                                },
                                Description: sdk.String("voluptas"),
                                Name: "Shelly Altenwerth",
                                Trigger: shared.ScalingTrigger{
                                    CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                        ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                                        Dimensions: []shared.MetricDimension{
                                            shared.MetricDimension{
                                                Key: sdk.String("sequi"),
                                                Value: sdk.String("quo"),
                                            },
                                        },
                                        EvaluationPeriods: sdk.Int64(459856),
                                        MetricName: "recusandae",
                                        Namespace: sdk.String("aperiam"),
                                        Period: 715179,
                                        Statistic: shared.StatisticEnumMinimum.ToPointer(),
                                        Threshold: 4908.19,
                                        Unit: shared.UnitEnumMicroSeconds.ToPointer(),
                                    },
                                },
                            },
                        },
                    },
                    BidPrice: sdk.String("nihil"),
                    Configurations: []shared.Configuration{
                        shared.Configuration{
                            Classification: sdk.String("accusamus"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "occaecati": "commodi",
                                "sapiente": "dolores",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("deserunt"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "porro": "eum",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("quas"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "deleniti": "fugit",
                            },
                        },
                    },
                    CustomAmiID: sdk.String("fuga"),
                    EbsConfiguration: &shared.EbsConfiguration{
                        EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(277596),
                                    SizeInGB: 539224,
                                    Throughput: sdk.Int64(128860),
                                    VolumeType: "minima",
                                },
                                VolumesPerInstance: sdk.Int64(392676),
                            },
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(147014),
                                    SizeInGB: 956406,
                                    Throughput: sdk.Int64(159870),
                                    VolumeType: "ratione",
                                },
                                VolumesPerInstance: sdk.Int64(129412),
                            },
                            shared.EbsBlockDeviceConfig{
                                VolumeSpecification: shared.VolumeSpecification{
                                    Iops: sdk.Int64(903984),
                                    SizeInGB: 578922,
                                    Throughput: sdk.Int64(543806),
                                    VolumeType: "et",
                                },
                                VolumesPerInstance: sdk.Int64(456911),
                            },
                        },
                        EbsOptimized: sdk.Bool(false),
                    },
                    InstanceCount: 910545,
                    InstanceRole: shared.InstanceRoleTypeEnumTask,
                    InstanceType: "veritatis",
                    Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                    Name: sdk.String("Marco Terry PhD"),
                },
            },
            JobFlowID: "vel",
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.AddInstanceGroupsXAmzTargetEnumElasticMapReduceAddInstanceGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddInstanceGroupsOutput != nil {
        // handle response
    }
}
```

## AddJobFlowSteps

<p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>

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
    res, err := s.SDK.AddJobFlowSteps(ctx, operations.AddJobFlowStepsRequest{
        AddJobFlowStepsInput: shared.AddJobFlowStepsInput{
            ExecutionRoleArn: sdk.String("sit"),
            JobFlowID: "culpa",
            Steps: []shared.StepConfig{
                shared.StepConfig{
                    ActionOnFailure: shared.ActionOnFailureEnumTerminateJobFlow.ToPointer(),
                    HadoopJarStep: shared.HadoopJarStepConfig{
                        Args: []string{
                            "consequuntur",
                            "consequatur",
                            "minus",
                            "quaerat",
                        },
                        Jar: "sapiente",
                        MainClass: sdk.String("consectetur"),
                        Properties: []shared.KeyValue{
                            shared.KeyValue{
                                Key: sdk.String("blanditiis"),
                                Value: sdk.String("provident"),
                            },
                            shared.KeyValue{
                                Key: sdk.String("a"),
                                Value: sdk.String("nulla"),
                            },
                        },
                    },
                    Name: "Cory Boyle",
                },
                shared.StepConfig{
                    ActionOnFailure: shared.ActionOnFailureEnumCancelAndWait.ToPointer(),
                    HadoopJarStep: shared.HadoopJarStepConfig{
                        Args: []string{
                            "possimus",
                            "quia",
                            "eveniet",
                            "asperiores",
                        },
                        Jar: "facere",
                        MainClass: sdk.String("veritatis"),
                        Properties: []shared.KeyValue{
                            shared.KeyValue{
                                Key: sdk.String("quasi"),
                                Value: sdk.String("similique"),
                            },
                        },
                    },
                    Name: "Dr. Gene Wiegand",
                },
                shared.StepConfig{
                    ActionOnFailure: shared.ActionOnFailureEnumTerminateCluster.ToPointer(),
                    HadoopJarStep: shared.HadoopJarStepConfig{
                        Args: []string{
                            "libero",
                            "illum",
                        },
                        Jar: "soluta",
                        MainClass: sdk.String("accusantium"),
                        Properties: []shared.KeyValue{
                            shared.KeyValue{
                                Key: sdk.String("sapiente"),
                                Value: sdk.String("dicta"),
                            },
                            shared.KeyValue{
                                Key: sdk.String("ullam"),
                                Value: sdk.String("reprehenderit"),
                            },
                        },
                    },
                    Name: "Alma Armstrong",
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
        XAmzTarget: operations.AddJobFlowStepsXAmzTargetEnumElasticMapReduceAddJobFlowSteps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddJobFlowStepsOutput != nil {
        // handle response
    }
}
```

## AddTags

Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 

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
    res, err := s.SDK.AddTags(ctx, operations.AddTagsRequest{
        AddTagsInput: shared.AddTagsInput{
            ResourceID: "tenetur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("at"),
                    Value: sdk.String("et"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.AddTagsXAmzTargetEnumElasticMapReduceAddTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsOutput != nil {
        // handle response
    }
}
```

## CancelSteps

Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. 

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
    res, err := s.SDK.CancelSteps(ctx, operations.CancelStepsRequest{
        CancelStepsInput: shared.CancelStepsInput{
            ClusterID: "temporibus",
            StepCancellationOption: shared.StepCancellationOptionEnumSendInterrupt.ToPointer(),
            StepIds: []string{
                "aut",
                "laudantium",
                "eum",
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CancelStepsXAmzTargetEnumElasticMapReduceCancelSteps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelStepsOutput != nil {
        // handle response
    }
}
```

## CreateSecurityConfiguration

Creates a security configuration, which is stored in the service and can be specified when a cluster is created.

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
    res, err := s.SDK.CreateSecurityConfiguration(ctx, operations.CreateSecurityConfigurationRequest{
        CreateSecurityConfigurationInput: shared.CreateSecurityConfigurationInput{
            Name: "Leticia Christiansen IV",
            SecurityConfiguration: "dicta",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.CreateSecurityConfigurationXAmzTargetEnumElasticMapReduceCreateSecurityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSecurityConfigurationOutput != nil {
        // handle response
    }
}
```

## CreateStudio

Creates a new Amazon EMR Studio.

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
    res, err := s.SDK.CreateStudio(ctx, operations.CreateStudioRequest{
        CreateStudioInput: shared.CreateStudioInput{
            AuthMode: shared.AuthModeEnumSso,
            DefaultS3Location: "quaerat",
            Description: sdk.String("consequuntur"),
            EngineSecurityGroupID: "repellendus",
            IdpAuthURL: sdk.String("officia"),
            IdpRelayStateParameterName: sdk.String("maxime"),
            Name: "Blanche Yundt II",
            ServiceRole: "porro",
            SubnetIds: []string{
                "labore",
                "ab",
                "adipisci",
                "fuga",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("suscipit"),
                    Value: sdk.String("velit"),
                },
                shared.Tag{
                    Key: sdk.String("culpa"),
                    Value: sdk.String("est"),
                },
                shared.Tag{
                    Key: sdk.String("recusandae"),
                    Value: sdk.String("totam"),
                },
            },
            UserRole: sdk.String("fugiat"),
            VpcID: "vel",
            WorkspaceSecurityGroupID: "ducimus",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.CreateStudioXAmzTargetEnumElasticMapReduceCreateStudio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStudioOutput != nil {
        // handle response
    }
}
```

## CreateStudioSessionMapping

Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.

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
    res, err := s.SDK.CreateStudioSessionMapping(ctx, operations.CreateStudioSessionMappingRequest{
        CreateStudioSessionMappingInput: shared.CreateStudioSessionMappingInput{
            IdentityID: sdk.String("in"),
            IdentityName: sdk.String("corporis"),
            IdentityType: shared.IdentityTypeEnumGroup,
            SessionPolicyArn: "assumenda",
            StudioID: "nemo",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.CreateStudioSessionMappingXAmzTargetEnumElasticMapReduceCreateStudioSessionMapping,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSecurityConfiguration

Deletes a security configuration.

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
    res, err := s.SDK.DeleteSecurityConfiguration(ctx, operations.DeleteSecurityConfigurationRequest{
        DeleteSecurityConfigurationInput: shared.DeleteSecurityConfigurationInput{
            Name: "Carroll Gerhold",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteSecurityConfigurationXAmzTargetEnumElasticMapReduceDeleteSecurityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSecurityConfigurationOutput != nil {
        // handle response
    }
}
```

## DeleteStudio

Removes an Amazon EMR Studio from the Studio metadata store.

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
    res, err := s.SDK.DeleteStudio(ctx, operations.DeleteStudioRequest{
        DeleteStudioInput: shared.DeleteStudioInput{
            StudioID: "adipisci",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.DeleteStudioXAmzTargetEnumElasticMapReduceDeleteStudio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteStudioSessionMapping

Removes a user or group from an Amazon EMR Studio.

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
    res, err := s.SDK.DeleteStudioSessionMapping(ctx, operations.DeleteStudioSessionMappingRequest{
        DeleteStudioSessionMappingInput: shared.DeleteStudioSessionMappingInput{
            IdentityID: sdk.String("corporis"),
            IdentityName: sdk.String("harum"),
            IdentityType: shared.IdentityTypeEnumUser,
            StudioID: "ipsa",
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DeleteStudioSessionMappingXAmzTargetEnumElasticMapReduceDeleteStudioSessionMapping,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeCluster

Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.

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
    res, err := s.SDK.DescribeCluster(ctx, operations.DescribeClusterRequest{
        DescribeClusterInput: shared.DescribeClusterInput{
            ClusterID: "voluptas",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.DescribeClusterXAmzTargetEnumElasticMapReduceDescribeCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClusterOutput != nil {
        // handle response
    }
}
```

## ~~DescribeJobFlows~~

<p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>

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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeJobFlows(ctx, operations.DescribeJobFlowsRequest{
        DescribeJobFlowsInput: shared.DescribeJobFlowsInput{
            CreatedAfter: types.MustTimeFromString("2022-07-01T01:32:29.196Z"),
            CreatedBefore: types.MustTimeFromString("2022-09-14T20:54:59.386Z"),
            JobFlowIds: []string{
                "officiis",
                "temporibus",
            },
            JobFlowStates: []shared.JobFlowExecutionStateEnum{
                shared.JobFlowExecutionStateEnumBootstrapping,
                shared.JobFlowExecutionStateEnumTerminated,
            },
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DescribeJobFlowsXAmzTargetEnumElasticMapReduceDescribeJobFlows,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobFlowsOutput != nil {
        // handle response
    }
}
```

## DescribeNotebookExecution

Provides details of a notebook execution.

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
    res, err := s.SDK.DescribeNotebookExecution(ctx, operations.DescribeNotebookExecutionRequest{
        DescribeNotebookExecutionInput: shared.DescribeNotebookExecutionInput{
            NotebookExecutionID: "totam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.DescribeNotebookExecutionXAmzTargetEnumElasticMapReduceDescribeNotebookExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNotebookExecutionOutput != nil {
        // handle response
    }
}
```

## DescribeReleaseLabel

Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.

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
    res, err := s.SDK.DescribeReleaseLabel(ctx, operations.DescribeReleaseLabelRequest{
        DescribeReleaseLabelInput: shared.DescribeReleaseLabelInput{
            MaxResults: sdk.Int64(131852),
            NextToken: sdk.String("asperiores"),
            ReleaseLabel: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.DescribeReleaseLabelXAmzTargetEnumElasticMapReduceDescribeReleaseLabel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReleaseLabelOutput != nil {
        // handle response
    }
}
```

## DescribeSecurityConfiguration

Provides the details of a security configuration by returning the configuration JSON.

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
    res, err := s.SDK.DescribeSecurityConfiguration(ctx, operations.DescribeSecurityConfigurationRequest{
        DescribeSecurityConfigurationInput: shared.DescribeSecurityConfigurationInput{
            Name: "Tonya Predovic",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.DescribeSecurityConfigurationXAmzTargetEnumElasticMapReduceDescribeSecurityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSecurityConfigurationOutput != nil {
        // handle response
    }
}
```

## DescribeStep

Provides more detail about the cluster step.

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
    res, err := s.SDK.DescribeStep(ctx, operations.DescribeStepRequest{
        DescribeStepInput: shared.DescribeStepInput{
            ClusterID: "perferendis",
            StepID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeStepXAmzTargetEnumElasticMapReduceDescribeStep,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStepOutput != nil {
        // handle response
    }
}
```

## DescribeStudio

Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.

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
    res, err := s.SDK.DescribeStudio(ctx, operations.DescribeStudioRequest{
        DescribeStudioInput: shared.DescribeStudioInput{
            StudioID: "ea",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.DescribeStudioXAmzTargetEnumElasticMapReduceDescribeStudio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStudioOutput != nil {
        // handle response
    }
}
```

## GetAutoTerminationPolicy

Returns the auto-termination policy for an Amazon EMR cluster.

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
    res, err := s.SDK.GetAutoTerminationPolicy(ctx, operations.GetAutoTerminationPolicyRequest{
        GetAutoTerminationPolicyInput: shared.GetAutoTerminationPolicyInput{
            ClusterID: "ex",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.GetAutoTerminationPolicyXAmzTargetEnumElasticMapReduceGetAutoTerminationPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAutoTerminationPolicyOutput != nil {
        // handle response
    }
}
```

## GetBlockPublicAccessConfiguration

Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

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
    res, err := s.SDK.GetBlockPublicAccessConfiguration(ctx, operations.GetBlockPublicAccessConfigurationRequest{
        RequestBody: map[string]interface{}{
            "debitis": "rem",
            "sit": "nobis",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.GetBlockPublicAccessConfigurationXAmzTargetEnumElasticMapReduceGetBlockPublicAccessConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockPublicAccessConfigurationOutput != nil {
        // handle response
    }
}
```

## GetClusterSessionCredentials

Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.

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
    res, err := s.SDK.GetClusterSessionCredentials(ctx, operations.GetClusterSessionCredentialsRequest{
        GetClusterSessionCredentialsInput: shared.GetClusterSessionCredentialsInput{
            ClusterID: "aperiam",
            ExecutionRoleArn: "saepe",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.GetClusterSessionCredentialsXAmzTargetEnumElasticMapReduceGetClusterSessionCredentials,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClusterSessionCredentialsOutput != nil {
        // handle response
    }
}
```

## GetManagedScalingPolicy

Fetches the attached managed scaling policy for an Amazon EMR cluster. 

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
    res, err := s.SDK.GetManagedScalingPolicy(ctx, operations.GetManagedScalingPolicyRequest{
        GetManagedScalingPolicyInput: shared.GetManagedScalingPolicyInput{
            ClusterID: "praesentium",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.GetManagedScalingPolicyXAmzTargetEnumElasticMapReduceGetManagedScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetManagedScalingPolicyOutput != nil {
        // handle response
    }
}
```

## GetStudioSessionMapping

Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).

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
    res, err := s.SDK.GetStudioSessionMapping(ctx, operations.GetStudioSessionMappingRequest{
        GetStudioSessionMappingInput: shared.GetStudioSessionMappingInput{
            IdentityID: sdk.String("debitis"),
            IdentityName: sdk.String("neque"),
            IdentityType: shared.IdentityTypeEnumGroup,
            StudioID: "nostrum",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.GetStudioSessionMappingXAmzTargetEnumElasticMapReduceGetStudioSessionMapping,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStudioSessionMappingOutput != nil {
        // handle response
    }
}
```

## ListBootstrapActions

Provides information about the bootstrap actions associated with a cluster.

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
    res, err := s.SDK.ListBootstrapActions(ctx, operations.ListBootstrapActionsRequest{
        ListBootstrapActionsInput: shared.ListBootstrapActionsInput{
            ClusterID: "ut",
            Marker: sdk.String("fugiat"),
        },
        Marker: sdk.String("voluptatem"),
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.ListBootstrapActionsXAmzTargetEnumElasticMapReduceListBootstrapActions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBootstrapActionsOutput != nil {
        // handle response
    }
}
```

## ListClusters

Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.

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
    res, err := s.SDK.ListClusters(ctx, operations.ListClustersRequest{
        ListClustersInput: shared.ListClustersInput{
            ClusterStates: []shared.ClusterStateEnum{
                shared.ClusterStateEnumWaiting,
                shared.ClusterStateEnumTerminatedWithErrors,
                shared.ClusterStateEnumRunning,
            },
            CreatedAfter: types.MustTimeFromString("2022-07-01T12:15:51.307Z"),
            CreatedBefore: types.MustTimeFromString("2022-11-05T22:13:21.002Z"),
            Marker: sdk.String("sit"),
        },
        Marker: sdk.String("vel"),
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.ListClustersXAmzTargetEnumElasticMapReduceListClusters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersOutput != nil {
        // handle response
    }
}
```

## ListInstanceFleets

<p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

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
    res, err := s.SDK.ListInstanceFleets(ctx, operations.ListInstanceFleetsRequest{
        ListInstanceFleetsInput: shared.ListInstanceFleetsInput{
            ClusterID: "harum",
            Marker: sdk.String("dicta"),
        },
        Marker: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.ListInstanceFleetsXAmzTargetEnumElasticMapReduceListInstanceFleets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceFleetsOutput != nil {
        // handle response
    }
}
```

## ListInstanceGroups

Provides all available details about the instance groups in a cluster.

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
    res, err := s.SDK.ListInstanceGroups(ctx, operations.ListInstanceGroupsRequest{
        ListInstanceGroupsInput: shared.ListInstanceGroupsInput{
            ClusterID: "laboriosam",
            Marker: sdk.String("alias"),
        },
        Marker: sdk.String("amet"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ListInstanceGroupsXAmzTargetEnumElasticMapReduceListInstanceGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceGroupsOutput != nil {
        // handle response
    }
}
```

## ListInstances

Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.

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
    res, err := s.SDK.ListInstances(ctx, operations.ListInstancesRequest{
        ListInstancesInput: shared.ListInstancesInput{
            ClusterID: "voluptates",
            InstanceFleetID: sdk.String("perferendis"),
            InstanceFleetType: shared.InstanceFleetTypeEnumTask.ToPointer(),
            InstanceGroupID: sdk.String("quidem"),
            InstanceGroupTypes: []shared.InstanceGroupTypeEnum{
                shared.InstanceGroupTypeEnumTask,
                shared.InstanceGroupTypeEnumTask,
            },
            InstanceStates: []shared.InstanceStateEnum{
                shared.InstanceStateEnumRunning,
                shared.InstanceStateEnumProvisioning,
                shared.InstanceStateEnumAwaitingFulfillment,
            },
            Marker: sdk.String("quisquam"),
        },
        Marker: sdk.String("repudiandae"),
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.ListInstancesXAmzTargetEnumElasticMapReduceListInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesOutput != nil {
        // handle response
    }
}
```

## ListNotebookExecutions

Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.

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
    res, err := s.SDK.ListNotebookExecutions(ctx, operations.ListNotebookExecutionsRequest{
        ListNotebookExecutionsInput: shared.ListNotebookExecutionsInput{
            EditorID: sdk.String("maxime"),
            From: types.MustTimeFromString("2022-07-16T17:34:48.115Z"),
            Marker: sdk.String("amet"),
            Status: shared.NotebookExecutionStatusEnumStopping.ToPointer(),
            To: types.MustTimeFromString("2022-06-18T05:19:26.990Z"),
        },
        Marker: sdk.String("error"),
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.ListNotebookExecutionsXAmzTargetEnumElasticMapReduceListNotebookExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotebookExecutionsOutput != nil {
        // handle response
    }
}
```

## ListReleaseLabels

Retrieves release labels of EMR services in the region where the API is called.

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
    res, err := s.SDK.ListReleaseLabels(ctx, operations.ListReleaseLabelsRequest{
        ListReleaseLabelsInput: shared.ListReleaseLabelsInput{
            Filters: &shared.ReleaseLabelFilter{
                Application: sdk.String("maiores"),
                Prefix: sdk.String("corrupti"),
            },
            MaxResults: sdk.Int64(871786),
            NextToken: sdk.String("error"),
        },
        MaxResults: sdk.String("blanditiis"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.ListReleaseLabelsXAmzTargetEnumElasticMapReduceListReleaseLabels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReleaseLabelsOutput != nil {
        // handle response
    }
}
```

## ListSecurityConfigurations

Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.

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
    res, err := s.SDK.ListSecurityConfigurations(ctx, operations.ListSecurityConfigurationsRequest{
        ListSecurityConfigurationsInput: shared.ListSecurityConfigurationsInput{
            Marker: sdk.String("labore"),
        },
        Marker: sdk.String("reiciendis"),
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.ListSecurityConfigurationsXAmzTargetEnumElasticMapReduceListSecurityConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecurityConfigurationsOutput != nil {
        // handle response
    }
}
```

## ListSteps

Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.

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
    res, err := s.SDK.ListSteps(ctx, operations.ListStepsRequest{
        ListStepsInput: shared.ListStepsInput{
            ClusterID: "laboriosam",
            Marker: sdk.String("velit"),
            StepIds: []string{
                "molestias",
                "magnam",
                "saepe",
                "consequuntur",
            },
            StepStates: []shared.StepStateEnum{
                shared.StepStateEnumInterrupted,
                shared.StepStateEnumCancelled,
                shared.StepStateEnumCompleted,
            },
        },
        Marker: sdk.String("adipisci"),
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.ListStepsXAmzTargetEnumElasticMapReduceListSteps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStepsOutput != nil {
        // handle response
    }
}
```

## ListStudioSessionMappings

Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.

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
    res, err := s.SDK.ListStudioSessionMappings(ctx, operations.ListStudioSessionMappingsRequest{
        ListStudioSessionMappingsInput: shared.ListStudioSessionMappingsInput{
            IdentityType: shared.IdentityTypeEnumGroup.ToPointer(),
            Marker: sdk.String("illo"),
            StudioID: sdk.String("corporis"),
        },
        Marker: sdk.String("quidem"),
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.ListStudioSessionMappingsXAmzTargetEnumElasticMapReduceListStudioSessionMappings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudioSessionMappingsOutput != nil {
        // handle response
    }
}
```

## ListStudios

Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.

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
    res, err := s.SDK.ListStudios(ctx, operations.ListStudiosRequest{
        ListStudiosInput: shared.ListStudiosInput{
            Marker: sdk.String("quae"),
        },
        Marker: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.ListStudiosXAmzTargetEnumElasticMapReduceListStudios,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStudiosOutput != nil {
        // handle response
    }
}
```

## ModifyCluster

Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.

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
    res, err := s.SDK.ModifyCluster(ctx, operations.ModifyClusterRequest{
        ModifyClusterInput: shared.ModifyClusterInput{
            ClusterID: "distinctio",
            StepConcurrencyLevel: sdk.Int64(528940),
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.ModifyClusterXAmzTargetEnumElasticMapReduceModifyCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyClusterOutput != nil {
        // handle response
    }
}
```

## ModifyInstanceFleet

<p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

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
    res, err := s.SDK.ModifyInstanceFleet(ctx, operations.ModifyInstanceFleetRequest{
        ModifyInstanceFleetInput: shared.ModifyInstanceFleetInput{
            ClusterID: "nihil",
            InstanceFleet: shared.InstanceFleetModifyConfig{
                InstanceFleetID: "mollitia",
                ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                    OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                        TimeoutDurationMinutes: 378245,
                    },
                    SpotResizeSpecification: &shared.SpotResizingSpecification{
                        TimeoutDurationMinutes: 5189,
                    },
                },
                TargetOnDemandCapacity: sdk.Int64(979527),
                TargetSpotCapacity: sdk.Int64(970222),
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ModifyInstanceFleetXAmzTargetEnumElasticMapReduceModifyInstanceFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ModifyInstanceGroups

ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.

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
    res, err := s.SDK.ModifyInstanceGroups(ctx, operations.ModifyInstanceGroupsRequest{
        ModifyInstanceGroupsInput: shared.ModifyInstanceGroupsInput{
            ClusterID: sdk.String("recusandae"),
            InstanceGroups: []shared.InstanceGroupModifyConfig{
                shared.InstanceGroupModifyConfig{
                    Configurations: []shared.Configuration{
                        shared.Configuration{
                            Classification: sdk.String("molestiae"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "culpa": "adipisci",
                                "debitis": "laudantium",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("eum"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "esse": "provident",
                                "quis": "eum",
                                "reiciendis": "provident",
                                "aspernatur": "ullam",
                            },
                        },
                    },
                    Ec2InstanceIdsToTerminate: []string{
                        "animi",
                    },
                    InstanceCount: sdk.Int64(343392),
                    InstanceGroupID: "mollitia",
                    ReconfigurationType: shared.ReconfigurationTypeEnumMerge.ToPointer(),
                    ShrinkPolicy: &shared.ShrinkPolicy{
                        DecommissionTimeout: sdk.Int64(821719),
                        InstanceResizePolicy: &shared.InstanceResizePolicy{
                            InstanceTerminationTimeout: sdk.Int64(659177),
                            InstancesToProtect: []string{
                                "aliquid",
                                "accusantium",
                            },
                            InstancesToTerminate: []string{
                                "doloribus",
                                "ullam",
                                "in",
                                "nam",
                            },
                        },
                    },
                },
                shared.InstanceGroupModifyConfig{
                    Configurations: []shared.Configuration{
                        shared.Configuration{
                            Classification: sdk.String("officia"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "modi": "voluptatibus",
                                "molestias": "officiis",
                                "sapiente": "cumque",
                                "vitae": "rerum",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("tempora"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "fugit": "cumque",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("quae"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "aspernatur": "eum",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("eius"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "impedit": "eos",
                                "sapiente": "eum",
                                "dicta": "minima",
                                "beatae": "cupiditate",
                            },
                        },
                    },
                    Ec2InstanceIdsToTerminate: []string{
                        "earum",
                        "soluta",
                        "hic",
                    },
                    InstanceCount: sdk.Int64(848151),
                    InstanceGroupID: "eaque",
                    ReconfigurationType: shared.ReconfigurationTypeEnumMerge.ToPointer(),
                    ShrinkPolicy: &shared.ShrinkPolicy{
                        DecommissionTimeout: sdk.Int64(596211),
                        InstanceResizePolicy: &shared.InstanceResizePolicy{
                            InstanceTerminationTimeout: sdk.Int64(983427),
                            InstancesToProtect: []string{
                                "aliquid",
                                "porro",
                                "suscipit",
                                "dolorem",
                            },
                            InstancesToTerminate: []string{
                                "cumque",
                            },
                        },
                    },
                },
                shared.InstanceGroupModifyConfig{
                    Configurations: []shared.Configuration{
                        shared.Configuration{
                            Classification: sdk.String("ratione"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                                shared.Configuration{},
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "nulla": "consequatur",
                                "quasi": "et",
                                "ducimus": "natus",
                                "occaecati": "suscipit",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("adipisci"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "doloribus": "nulla",
                            },
                        },
                        shared.Configuration{
                            Classification: sdk.String("necessitatibus"),
                            Configurations: []shared.Configuration{
                                shared.Configuration{},
                            },
                            Properties: map[string]string{
                                "nihil": "molestiae",
                                "dicta": "iusto",
                            },
                        },
                    },
                    Ec2InstanceIdsToTerminate: []string{
                        "praesentium",
                        "maiores",
                    },
                    InstanceCount: sdk.Int64(967260),
                    InstanceGroupID: "vel",
                    ReconfigurationType: shared.ReconfigurationTypeEnumOverwrite.ToPointer(),
                    ShrinkPolicy: &shared.ShrinkPolicy{
                        DecommissionTimeout: sdk.Int64(857125),
                        InstanceResizePolicy: &shared.InstanceResizePolicy{
                            InstanceTerminationTimeout: sdk.Int64(39650),
                            InstancesToProtect: []string{
                                "odio",
                            },
                            InstancesToTerminate: []string{
                                "esse",
                                "ex",
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.ModifyInstanceGroupsXAmzTargetEnumElasticMapReduceModifyInstanceGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAutoScalingPolicy

Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.

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
    res, err := s.SDK.PutAutoScalingPolicy(ctx, operations.PutAutoScalingPolicyRequest{
        PutAutoScalingPolicyInput: shared.PutAutoScalingPolicyInput{
            AutoScalingPolicy: shared.AutoScalingPolicy{
                Constraints: shared.ScalingConstraints{
                    MaxCapacity: 713767,
                    MinCapacity: 399667,
                },
                Rules: []shared.ScalingRule{
                    shared.ScalingRule{
                        Action: shared.ScalingAction{
                            Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                            SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                CoolDown: sdk.Int64(21973),
                                ScalingAdjustment: 431760,
                            },
                        },
                        Description: sdk.String("voluptas"),
                        Name: "Alfonso Bernier",
                        Trigger: shared.ScalingTrigger{
                            CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                ComparisonOperator: shared.ComparisonOperatorEnumLessThanOrEqual,
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Key: sdk.String("laborum"),
                                        Value: sdk.String("libero"),
                                    },
                                    shared.MetricDimension{
                                        Key: sdk.String("ad"),
                                        Value: sdk.String("deleniti"),
                                    },
                                    shared.MetricDimension{
                                        Key: sdk.String("enim"),
                                        Value: sdk.String("vitae"),
                                    },
                                },
                                EvaluationPeriods: sdk.Int64(833316),
                                MetricName: "ex",
                                Namespace: sdk.String("quo"),
                                Period: 405373,
                                Statistic: shared.StatisticEnumAverage.ToPointer(),
                                Threshold: 3210.43,
                                Unit: shared.UnitEnumGigaBytesPerSecond.ToPointer(),
                            },
                        },
                    },
                    shared.ScalingRule{
                        Action: shared.ScalingAction{
                            Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                            SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                CoolDown: sdk.Int64(737254),
                                ScalingAdjustment: 399660,
                            },
                        },
                        Description: sdk.String("beatae"),
                        Name: "Arturo Bogan",
                        Trigger: shared.ScalingTrigger{
                            CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                ComparisonOperator: shared.ComparisonOperatorEnumLessThan,
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Key: sdk.String("sapiente"),
                                        Value: sdk.String("officiis"),
                                    },
                                },
                                EvaluationPeriods: sdk.Int64(103298),
                                MetricName: "fuga",
                                Namespace: sdk.String("pariatur"),
                                Period: 891315,
                                Statistic: shared.StatisticEnumSampleCount.ToPointer(),
                                Threshold: 12.07,
                                Unit: shared.UnitEnumPercent.ToPointer(),
                            },
                        },
                    },
                    shared.ScalingRule{
                        Action: shared.ScalingAction{
                            Market: shared.MarketTypeEnumSpot.ToPointer(),
                            SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                CoolDown: sdk.Int64(958308),
                                ScalingAdjustment: 524184,
                            },
                        },
                        Description: sdk.String("minus"),
                        Name: "Ollie Dicki PhD",
                        Trigger: shared.ScalingTrigger{
                            CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                ComparisonOperator: shared.ComparisonOperatorEnumLessThan,
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Key: sdk.String("quibusdam"),
                                        Value: sdk.String("nam"),
                                    },
                                    shared.MetricDimension{
                                        Key: sdk.String("ipsam"),
                                        Value: sdk.String("culpa"),
                                    },
                                    shared.MetricDimension{
                                        Key: sdk.String("dolor"),
                                        Value: sdk.String("aliquam"),
                                    },
                                    shared.MetricDimension{
                                        Key: sdk.String("inventore"),
                                        Value: sdk.String("deleniti"),
                                    },
                                },
                                EvaluationPeriods: sdk.Int64(85311),
                                MetricName: "tempora",
                                Namespace: sdk.String("dolor"),
                                Period: 8689,
                                Statistic: shared.StatisticEnumSampleCount.ToPointer(),
                                Threshold: 249.44,
                                Unit: shared.UnitEnumGigaBytes.ToPointer(),
                            },
                        },
                    },
                },
            },
            ClusterID: "fugit",
            InstanceGroupID: "ab",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.PutAutoScalingPolicyXAmzTargetEnumElasticMapReducePutAutoScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAutoScalingPolicyOutput != nil {
        // handle response
    }
}
```

## PutAutoTerminationPolicy

<note> <p>Auto-termination is supported in Amazon EMR versions 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>

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
    res, err := s.SDK.PutAutoTerminationPolicy(ctx, operations.PutAutoTerminationPolicyRequest{
        PutAutoTerminationPolicyInput: shared.PutAutoTerminationPolicyInput{
            AutoTerminationPolicy: &shared.AutoTerminationPolicy{
                IdleTimeout: sdk.Int64(559682),
            },
            ClusterID: "eveniet",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.PutAutoTerminationPolicyXAmzTargetEnumElasticMapReducePutAutoTerminationPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAutoTerminationPolicyOutput != nil {
        // handle response
    }
}
```

## PutBlockPublicAccessConfiguration

Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

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
    res, err := s.SDK.PutBlockPublicAccessConfiguration(ctx, operations.PutBlockPublicAccessConfigurationRequest{
        PutBlockPublicAccessConfigurationInput: shared.PutBlockPublicAccessConfigurationInput{
            BlockPublicAccessConfiguration: shared.BlockPublicAccessConfiguration{
                BlockPublicSecurityGroupRules: false,
                PermittedPublicSecurityGroupRuleRanges: []shared.PortRange{
                    shared.PortRange{
                        MaxRange: sdk.Int64(432984),
                        MinRange: 426943,
                    },
                    shared.PortRange{
                        MaxRange: sdk.Int64(528234),
                        MinRange: 301692,
                    },
                    shared.PortRange{
                        MaxRange: sdk.Int64(349440),
                        MinRange: 70410,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.PutBlockPublicAccessConfigurationXAmzTargetEnumElasticMapReducePutBlockPublicAccessConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutBlockPublicAccessConfigurationOutput != nil {
        // handle response
    }
}
```

## PutManagedScalingPolicy

Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 

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
    res, err := s.SDK.PutManagedScalingPolicy(ctx, operations.PutManagedScalingPolicyRequest{
        PutManagedScalingPolicyInput: shared.PutManagedScalingPolicyInput{
            ClusterID: "exercitationem",
            ManagedScalingPolicy: shared.ManagedScalingPolicy{
                ComputeLimits: &shared.ComputeLimits{
                    MaximumCapacityUnits: 895692,
                    MaximumCoreCapacityUnits: sdk.Int64(95619),
                    MaximumOnDemandCapacityUnits: sdk.Int64(392569),
                    MinimumCapacityUnits: 871103,
                    UnitType: shared.ComputeLimitsUnitTypeEnumVcpu,
                },
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.PutManagedScalingPolicyXAmzTargetEnumElasticMapReducePutManagedScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutManagedScalingPolicyOutput != nil {
        // handle response
    }
}
```

## RemoveAutoScalingPolicy

Removes an automatic scaling policy from a specified instance group within an EMR cluster.

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
    res, err := s.SDK.RemoveAutoScalingPolicy(ctx, operations.RemoveAutoScalingPolicyRequest{
        RemoveAutoScalingPolicyInput: shared.RemoveAutoScalingPolicyInput{
            ClusterID: "nemo",
            InstanceGroupID: "voluptate",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.RemoveAutoScalingPolicyXAmzTargetEnumElasticMapReduceRemoveAutoScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveAutoScalingPolicyOutput != nil {
        // handle response
    }
}
```

## RemoveAutoTerminationPolicy

Removes an auto-termination policy from an Amazon EMR cluster.

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
    res, err := s.SDK.RemoveAutoTerminationPolicy(ctx, operations.RemoveAutoTerminationPolicyRequest{
        RemoveAutoTerminationPolicyInput: shared.RemoveAutoTerminationPolicyInput{
            ClusterID: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.RemoveAutoTerminationPolicyXAmzTargetEnumElasticMapReduceRemoveAutoTerminationPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveAutoTerminationPolicyOutput != nil {
        // handle response
    }
}
```

## RemoveManagedScalingPolicy

 Removes a managed scaling policy from a specified EMR cluster. 

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
    res, err := s.SDK.RemoveManagedScalingPolicy(ctx, operations.RemoveManagedScalingPolicyRequest{
        RemoveManagedScalingPolicyInput: shared.RemoveManagedScalingPolicyInput{
            ClusterID: "fugiat",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.RemoveManagedScalingPolicyXAmzTargetEnumElasticMapReduceRemoveManagedScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveManagedScalingPolicyOutput != nil {
        // handle response
    }
}
```

## RemoveTags

<p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>

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
    res, err := s.SDK.RemoveTags(ctx, operations.RemoveTagsRequest{
        RemoveTagsInput: shared.RemoveTagsInput{
            ResourceID: "soluta",
            TagKeys: []string{
                "omnis",
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.RemoveTagsXAmzTargetEnumElasticMapReduceRemoveTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTagsOutput != nil {
        // handle response
    }
}
```

## RunJobFlow

<p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>

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
    res, err := s.SDK.RunJobFlow(ctx, operations.RunJobFlowRequest{
        RunJobFlowInput: shared.RunJobFlowInput{
            AdditionalInfo: sdk.String("voluptatibus"),
            AmiVersion: sdk.String("distinctio"),
            Applications: []shared.Application{
                shared.Application{
                    AdditionalInfo: map[string]string{
                        "minima": "praesentium",
                        "maxime": "magnam",
                        "temporibus": "quos",
                        "commodi": "itaque",
                    },
                    Args: []string{
                        "totam",
                        "earum",
                    },
                    Name: sdk.String("Mrs. Candice Thiel"),
                    Version: sdk.String("alias"),
                },
                shared.Application{
                    AdditionalInfo: map[string]string{
                        "non": "maiores",
                    },
                    Args: []string{
                        "sint",
                        "nulla",
                    },
                    Name: sdk.String("Claude Hickle"),
                    Version: sdk.String("quis"),
                },
                shared.Application{
                    AdditionalInfo: map[string]string{
                        "accusamus": "impedit",
                        "hic": "necessitatibus",
                        "asperiores": "ex",
                    },
                    Args: []string{
                        "debitis",
                        "delectus",
                    },
                    Name: sdk.String("Alexandra Pfannerstill"),
                    Version: sdk.String("velit"),
                },
            },
            AutoScalingRole: sdk.String("atque"),
            AutoTerminationPolicy: &shared.AutoTerminationPolicy{
                IdleTimeout: sdk.Int64(216457),
            },
            BootstrapActions: []shared.BootstrapActionConfig{
                shared.BootstrapActionConfig{
                    Name: "Shelia Walker",
                    ScriptBootstrapAction: shared.ScriptBootstrapActionConfig{
                        Args: []string{
                            "voluptate",
                            "sequi",
                        },
                        Path: "dignissimos",
                    },
                },
                shared.BootstrapActionConfig{
                    Name: "Angelica Leuschke",
                    ScriptBootstrapAction: shared.ScriptBootstrapActionConfig{
                        Args: []string{
                            "voluptatibus",
                        },
                        Path: "vel",
                    },
                },
                shared.BootstrapActionConfig{
                    Name: "Doreen Block",
                    ScriptBootstrapAction: shared.ScriptBootstrapActionConfig{
                        Args: []string{
                            "voluptatibus",
                        },
                        Path: "quia",
                    },
                },
                shared.BootstrapActionConfig{
                    Name: "Mr. Jim Franecki",
                    ScriptBootstrapAction: shared.ScriptBootstrapActionConfig{
                        Args: []string{
                            "beatae",
                            "vero",
                        },
                        Path: "excepturi",
                    },
                },
            },
            Configurations: []shared.Configuration{
                shared.Configuration{
                    Classification: sdk.String("velit"),
                    Configurations: []shared.Configuration{
                        shared.Configuration{},
                        shared.Configuration{},
                    },
                    Properties: map[string]string{
                        "earum": "dicta",
                        "impedit": "voluptatibus",
                        "iste": "itaque",
                    },
                },
                shared.Configuration{
                    Classification: sdk.String("alias"),
                    Configurations: []shared.Configuration{
                        shared.Configuration{},
                        shared.Configuration{},
                    },
                    Properties: map[string]string{
                        "velit": "laborum",
                        "non": "dolor",
                        "iusto": "sit",
                        "doloremque": "consequatur",
                    },
                },
            },
            CustomAmiID: sdk.String("officia"),
            EbsRootVolumeSize: sdk.Int64(927403),
            Instances: shared.JobFlowInstancesConfig{
                AdditionalMasterSecurityGroups: []string{
                    "quidem",
                    "voluptas",
                },
                AdditionalSlaveSecurityGroups: []string{
                    "placeat",
                    "perspiciatis",
                    "expedita",
                },
                Ec2KeyName: sdk.String("deleniti"),
                Ec2SubnetID: sdk.String("a"),
                Ec2SubnetIds: []string{
                    "ullam",
                    "unde",
                },
                EmrManagedMasterSecurityGroup: sdk.String("necessitatibus"),
                EmrManagedSlaveSecurityGroup: sdk.String("animi"),
                HadoopVersion: sdk.String("impedit"),
                InstanceCount: sdk.Int64(373040),
                InstanceFleets: []shared.InstanceFleetConfig{
                    shared.InstanceFleetConfig{
                        InstanceFleetType: shared.InstanceFleetTypeEnumTask,
                        InstanceTypeConfigs: []shared.InstanceTypeConfig{
                            shared.InstanceTypeConfig{
                                BidPrice: sdk.String("esse"),
                                BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(2885.7),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{
                                        Classification: sdk.String("vero"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "inventore": "dolorem",
                                        },
                                    },
                                },
                                CustomAmiID: sdk.String("ad"),
                                EbsConfiguration: &shared.EbsConfiguration{
                                    EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(611328),
                                                SizeInGB: 403026,
                                                Throughput: sdk.Int64(367626),
                                                VolumeType: "soluta",
                                            },
                                            VolumesPerInstance: sdk.Int64(726227),
                                        },
                                    },
                                    EbsOptimized: sdk.Bool(false),
                                },
                                InstanceType: "rem",
                                WeightedCapacity: sdk.Int64(678060),
                            },
                            shared.InstanceTypeConfig{
                                BidPrice: sdk.String("odio"),
                                BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(1446.91),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{
                                        Classification: sdk.String("magni"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "quae": "modi",
                                        },
                                    },
                                },
                                CustomAmiID: sdk.String("neque"),
                                EbsConfiguration: &shared.EbsConfiguration{
                                    EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(932394),
                                                SizeInGB: 88248,
                                                Throughput: sdk.Int64(215398),
                                                VolumeType: "unde",
                                            },
                                            VolumesPerInstance: sdk.Int64(858338),
                                        },
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(714376),
                                                SizeInGB: 802894,
                                                Throughput: sdk.Int64(157222),
                                                VolumeType: "quia",
                                            },
                                            VolumesPerInstance: sdk.Int64(342137),
                                        },
                                    },
                                    EbsOptimized: sdk.Bool(false),
                                },
                                InstanceType: "omnis",
                                WeightedCapacity: sdk.Int64(727250),
                            },
                            shared.InstanceTypeConfig{
                                BidPrice: sdk.String("dicta"),
                                BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(6633.18),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{
                                        Classification: sdk.String("fugiat"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                            shared.Configuration{},
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "placeat": "sit",
                                            "iusto": "ipsa",
                                            "voluptates": "inventore",
                                        },
                                    },
                                    shared.Configuration{
                                        Classification: sdk.String("aperiam"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                            shared.Configuration{},
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "eligendi": "distinctio",
                                            "voluptatem": "autem",
                                        },
                                    },
                                    shared.Configuration{
                                        Classification: sdk.String("esse"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "beatae": "est",
                                            "facere": "corrupti",
                                            "molestiae": "provident",
                                            "accusamus": "necessitatibus",
                                        },
                                    },
                                },
                                CustomAmiID: sdk.String("tempore"),
                                EbsConfiguration: &shared.EbsConfiguration{
                                    EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(409726),
                                                SizeInGB: 421819,
                                                Throughput: sdk.Int64(373511),
                                                VolumeType: "rerum",
                                            },
                                            VolumesPerInstance: sdk.Int64(515638),
                                        },
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(357207),
                                                SizeInGB: 889060,
                                                Throughput: sdk.Int64(972912),
                                                VolumeType: "cum",
                                            },
                                            VolumesPerInstance: sdk.Int64(872303),
                                        },
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(5152),
                                                SizeInGB: 156653,
                                                Throughput: sdk.Int64(694158),
                                                VolumeType: "fuga",
                                            },
                                            VolumesPerInstance: sdk.Int64(919508),
                                        },
                                    },
                                    EbsOptimized: sdk.Bool(false),
                                },
                                InstanceType: "accusantium",
                                WeightedCapacity: sdk.Int64(710456),
                            },
                        },
                        LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                            OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                                AllocationStrategy: shared.OnDemandProvisioningAllocationStrategyEnumLowestPrice,
                                CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                                    CapacityReservationPreference: shared.OnDemandCapacityReservationPreferenceEnumNone.ToPointer(),
                                    CapacityReservationResourceGroupArn: sdk.String("eos"),
                                    UsageStrategy: shared.OnDemandCapacityReservationUsageStrategyEnumUseCapacityReservationsFirst.ToPointer(),
                                },
                            },
                            SpotSpecification: &shared.SpotProvisioningSpecification{
                                AllocationStrategy: shared.SpotProvisioningAllocationStrategyEnumCapacityOptimized.ToPointer(),
                                BlockDurationMinutes: sdk.Int64(844854),
                                TimeoutAction: shared.SpotProvisioningTimeoutActionEnumSwitchToOnDemand,
                                TimeoutDurationMinutes: 510128,
                            },
                        },
                        Name: sdk.String("Judith Herzog"),
                        ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                            OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                                TimeoutDurationMinutes: 239337,
                            },
                            SpotResizeSpecification: &shared.SpotResizingSpecification{
                                TimeoutDurationMinutes: 923306,
                            },
                        },
                        TargetOnDemandCapacity: sdk.Int64(630871),
                        TargetSpotCapacity: sdk.Int64(282837),
                    },
                    shared.InstanceFleetConfig{
                        InstanceFleetType: shared.InstanceFleetTypeEnumTask,
                        InstanceTypeConfigs: []shared.InstanceTypeConfig{
                            shared.InstanceTypeConfig{
                                BidPrice: sdk.String("beatae"),
                                BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(6002.13),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{
                                        Classification: sdk.String("delectus"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                            shared.Configuration{},
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "numquam": "numquam",
                                        },
                                    },
                                    shared.Configuration{
                                        Classification: sdk.String("nesciunt"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                            shared.Configuration{},
                                            shared.Configuration{},
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "dignissimos": "optio",
                                            "necessitatibus": "corporis",
                                            "qui": "expedita",
                                        },
                                    },
                                },
                                CustomAmiID: sdk.String("voluptatum"),
                                EbsConfiguration: &shared.EbsConfiguration{
                                    EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(326269),
                                                SizeInGB: 809594,
                                                Throughput: sdk.Int64(316542),
                                                VolumeType: "neque",
                                            },
                                            VolumesPerInstance: sdk.Int64(446877),
                                        },
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(796397),
                                                SizeInGB: 433077,
                                                Throughput: sdk.Int64(266408),
                                                VolumeType: "corporis",
                                            },
                                            VolumesPerInstance: sdk.Int64(298264),
                                        },
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(914971),
                                                SizeInGB: 978173,
                                                Throughput: sdk.Int64(731744),
                                                VolumeType: "aperiam",
                                            },
                                            VolumesPerInstance: sdk.Int64(727547),
                                        },
                                    },
                                    EbsOptimized: sdk.Bool(false),
                                },
                                InstanceType: "ratione",
                                WeightedCapacity: sdk.Int64(289913),
                            },
                            shared.InstanceTypeConfig{
                                BidPrice: sdk.String("totam"),
                                BidPriceAsPercentageOfOnDemandPrice: sdk.Float64(5777.09),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{
                                        Classification: sdk.String("quo"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "fuga": "nostrum",
                                            "est": "impedit",
                                            "delectus": "tempore",
                                            "vero": "odit",
                                        },
                                    },
                                    shared.Configuration{
                                        Classification: sdk.String("repellat"),
                                        Configurations: []shared.Configuration{
                                            shared.Configuration{},
                                            shared.Configuration{},
                                            shared.Configuration{},
                                            shared.Configuration{},
                                        },
                                        Properties: map[string]string{
                                            "reprehenderit": "aperiam",
                                            "odio": "minima",
                                        },
                                    },
                                },
                                CustomAmiID: sdk.String("in"),
                                EbsConfiguration: &shared.EbsConfiguration{
                                    EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(567846),
                                                SizeInGB: 172195,
                                                Throughput: sdk.Int64(621169),
                                                VolumeType: "veritatis",
                                            },
                                            VolumesPerInstance: sdk.Int64(498180),
                                        },
                                        shared.EbsBlockDeviceConfig{
                                            VolumeSpecification: shared.VolumeSpecification{
                                                Iops: sdk.Int64(452729),
                                                SizeInGB: 866789,
                                                Throughput: sdk.Int64(932666),
                                                VolumeType: "similique",
                                            },
                                            VolumesPerInstance: sdk.Int64(763165),
                                        },
                                    },
                                    EbsOptimized: sdk.Bool(false),
                                },
                                InstanceType: "ex",
                                WeightedCapacity: sdk.Int64(311486),
                            },
                        },
                        LaunchSpecifications: &shared.InstanceFleetProvisioningSpecifications{
                            OnDemandSpecification: &shared.OnDemandProvisioningSpecification{
                                AllocationStrategy: shared.OnDemandProvisioningAllocationStrategyEnumLowestPrice,
                                CapacityReservationOptions: &shared.OnDemandCapacityReservationOptions{
                                    CapacityReservationPreference: shared.OnDemandCapacityReservationPreferenceEnumOpen.ToPointer(),
                                    CapacityReservationResourceGroupArn: sdk.String("officiis"),
                                    UsageStrategy: shared.OnDemandCapacityReservationUsageStrategyEnumUseCapacityReservationsFirst.ToPointer(),
                                },
                            },
                            SpotSpecification: &shared.SpotProvisioningSpecification{
                                AllocationStrategy: shared.SpotProvisioningAllocationStrategyEnumCapacityOptimized.ToPointer(),
                                BlockDurationMinutes: sdk.Int64(810839),
                                TimeoutAction: shared.SpotProvisioningTimeoutActionEnumTerminateCluster,
                                TimeoutDurationMinutes: 348192,
                            },
                        },
                        Name: sdk.String("Ms. Connie Gleason"),
                        ResizeSpecifications: &shared.InstanceFleetResizingSpecifications{
                            OnDemandResizeSpecification: &shared.OnDemandResizingSpecification{
                                TimeoutDurationMinutes: 194901,
                            },
                            SpotResizeSpecification: &shared.SpotResizingSpecification{
                                TimeoutDurationMinutes: 918547,
                            },
                        },
                        TargetOnDemandCapacity: sdk.Int64(741232),
                        TargetSpotCapacity: sdk.Int64(120120),
                    },
                },
                InstanceGroups: []shared.InstanceGroupConfig{
                    shared.InstanceGroupConfig{
                        AutoScalingPolicy: &shared.AutoScalingPolicy{
                            Constraints: shared.ScalingConstraints{
                                MaxCapacity: 334474,
                                MinCapacity: 659268,
                            },
                            Rules: []shared.ScalingRule{
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumSpot.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumChangeInCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(164488),
                                            ScalingAdjustment: 899867,
                                        },
                                    },
                                    Description: sdk.String("nobis"),
                                    Name: "Mr. Dora Wuckert",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumLessThanOrEqual,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("excepturi"),
                                                    Value: sdk.String("occaecati"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("nemo"),
                                                    Value: sdk.String("aliquam"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("nostrum"),
                                                    Value: sdk.String("doloribus"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(757364),
                                            MetricName: "sint",
                                            Namespace: sdk.String("enim"),
                                            Period: 944950,
                                            Statistic: shared.StatisticEnumMinimum.ToPointer(),
                                            Threshold: 5597.74,
                                            Unit: shared.UnitEnumTeraBits.ToPointer(),
                                        },
                                    },
                                },
                            },
                        },
                        BidPrice: sdk.String("molestias"),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("eaque"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "quos": "iste",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("assumenda"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "velit": "doloremque",
                                    "delectus": "impedit",
                                    "cum": "ipsum",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("adipisci"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(644420),
                                        SizeInGB: 42924,
                                        Throughput: sdk.Int64(339756),
                                        VolumeType: "veniam",
                                    },
                                    VolumesPerInstance: sdk.Int64(727481),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(99733),
                                        SizeInGB: 584593,
                                        Throughput: sdk.Int64(475589),
                                        VolumeType: "eligendi",
                                    },
                                    VolumesPerInstance: sdk.Int64(820023),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(251464),
                                        SizeInGB: 298187,
                                        Throughput: sdk.Int64(932296),
                                        VolumeType: "sed",
                                    },
                                    VolumesPerInstance: sdk.Int64(993002),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(330267),
                                        SizeInGB: 164532,
                                        Throughput: sdk.Int64(813880),
                                        VolumeType: "laudantium",
                                    },
                                    VolumesPerInstance: sdk.Int64(140384),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceCount: 863477,
                        InstanceRole: shared.InstanceRoleTypeEnumMaster,
                        InstanceType: "exercitationem",
                        Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                        Name: sdk.String("Flora Renner"),
                    },
                    shared.InstanceGroupConfig{
                        AutoScalingPolicy: &shared.AutoScalingPolicy{
                            Constraints: shared.ScalingConstraints{
                                MaxCapacity: 310840,
                                MinCapacity: 503748,
                            },
                            Rules: []shared.ScalingRule{
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(391933),
                                            ScalingAdjustment: 727771,
                                        },
                                    },
                                    Description: sdk.String("minus"),
                                    Name: "Johnathan Emmerich",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumLessThanOrEqual,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("debitis"),
                                                    Value: sdk.String("labore"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(700928),
                                            MetricName: "eos",
                                            Namespace: sdk.String("reprehenderit"),
                                            Period: 345506,
                                            Statistic: shared.StatisticEnumAverage.ToPointer(),
                                            Threshold: 4800.61,
                                            Unit: shared.UnitEnumKiloBytesPerSecond.ToPointer(),
                                        },
                                    },
                                },
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumSpot.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(853606),
                                            ScalingAdjustment: 604078,
                                        },
                                    },
                                    Description: sdk.String("officiis"),
                                    Name: "Carmen Carroll",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumGreaterThanOrEqual,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("esse"),
                                                    Value: sdk.String("fugiat"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("ad"),
                                                    Value: sdk.String("aspernatur"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(316501),
                                            MetricName: "delectus",
                                            Namespace: sdk.String("iusto"),
                                            Period: 491201,
                                            Statistic: shared.StatisticEnumMinimum.ToPointer(),
                                            Threshold: 723.5,
                                            Unit: shared.UnitEnumSeconds.ToPointer(),
                                        },
                                    },
                                },
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(902581),
                                            ScalingAdjustment: 734814,
                                        },
                                    },
                                    Description: sdk.String("veniam"),
                                    Name: "Johanna Weimann",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("quisquam"),
                                                    Value: sdk.String("sequi"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("nihil"),
                                                    Value: sdk.String("deleniti"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("illo"),
                                                    Value: sdk.String("labore"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("assumenda"),
                                                    Value: sdk.String("aliquam"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(790463),
                                            MetricName: "provident",
                                            Namespace: sdk.String("laudantium"),
                                            Period: 921719,
                                            Statistic: shared.StatisticEnumSampleCount.ToPointer(),
                                            Threshold: 8052.64,
                                            Unit: shared.UnitEnumMilliSeconds.ToPointer(),
                                        },
                                    },
                                },
                            },
                        },
                        BidPrice: sdk.String("nam"),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("quas"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "rerum": "dignissimos",
                                    "corporis": "vero",
                                    "similique": "repellendus",
                                    "iure": "dolorem",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("commodi"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "aut": "voluptatem",
                                    "ad": "quae",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("amet"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "quidem": "cum",
                                    "amet": "quasi",
                                    "dicta": "laudantium",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("doloremque"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(479707),
                                        SizeInGB: 228646,
                                        Throughput: sdk.Int64(587967),
                                        VolumeType: "dolorum",
                                    },
                                    VolumesPerInstance: sdk.Int64(897956),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(592880),
                                        SizeInGB: 920272,
                                        Throughput: sdk.Int64(10063),
                                        VolumeType: "nemo",
                                    },
                                    VolumesPerInstance: sdk.Int64(475826),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(930840),
                                        SizeInGB: 708771,
                                        Throughput: sdk.Int64(545779),
                                        VolumeType: "aperiam",
                                    },
                                    VolumesPerInstance: sdk.Int64(574092),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(879522),
                                        SizeInGB: 178635,
                                        Throughput: sdk.Int64(520081),
                                        VolumeType: "dicta",
                                    },
                                    VolumesPerInstance: sdk.Int64(30661),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceCount: 244376,
                        InstanceRole: shared.InstanceRoleTypeEnumMaster,
                        InstanceType: "sunt",
                        Market: shared.MarketTypeEnumSpot.ToPointer(),
                        Name: sdk.String("Dr. Misty Lindgren"),
                    },
                    shared.InstanceGroupConfig{
                        AutoScalingPolicy: &shared.AutoScalingPolicy{
                            Constraints: shared.ScalingConstraints{
                                MaxCapacity: 794988,
                                MinCapacity: 456704,
                            },
                            Rules: []shared.ScalingRule{
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(411615),
                                            ScalingAdjustment: 46791,
                                        },
                                    },
                                    Description: sdk.String("dignissimos"),
                                    Name: "Jacob Sawayn",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumLessThanOrEqual,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("consectetur"),
                                                    Value: sdk.String("soluta"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("natus"),
                                                    Value: sdk.String("temporibus"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(639622),
                                            MetricName: "amet",
                                            Namespace: sdk.String("tenetur"),
                                            Period: 133949,
                                            Statistic: shared.StatisticEnumMinimum.ToPointer(),
                                            Threshold: 9310.77,
                                            Unit: shared.UnitEnumKiloBitsPerSecond.ToPointer(),
                                        },
                                    },
                                },
                            },
                        },
                        BidPrice: sdk.String("laborum"),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("vero"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "repellat": "explicabo",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("explicabo"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "non": "ab",
                                    "illo": "hic",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("deserunt"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(251212),
                                        SizeInGB: 719389,
                                        Throughput: sdk.Int64(450224),
                                        VolumeType: "exercitationem",
                                    },
                                    VolumesPerInstance: sdk.Int64(288300),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(254382),
                                        SizeInGB: 921193,
                                        Throughput: sdk.Int64(265303),
                                        VolumeType: "in",
                                    },
                                    VolumesPerInstance: sdk.Int64(127294),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(879857),
                                        SizeInGB: 525809,
                                        Throughput: sdk.Int64(44016),
                                        VolumeType: "odit",
                                    },
                                    VolumesPerInstance: sdk.Int64(535802),
                                },
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(316730),
                                        SizeInGB: 452730,
                                        Throughput: sdk.Int64(626707),
                                        VolumeType: "minima",
                                    },
                                    VolumesPerInstance: sdk.Int64(727544),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceCount: 300189,
                        InstanceRole: shared.InstanceRoleTypeEnumMaster,
                        InstanceType: "modi",
                        Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                        Name: sdk.String("Angie Kunde"),
                    },
                    shared.InstanceGroupConfig{
                        AutoScalingPolicy: &shared.AutoScalingPolicy{
                            Constraints: shared.ScalingConstraints{
                                MaxCapacity: 475325,
                                MinCapacity: 330600,
                            },
                            Rules: []shared.ScalingRule{
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumOnDemand.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumChangeInCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(13865),
                                            ScalingAdjustment: 13508,
                                        },
                                    },
                                    Description: sdk.String("eveniet"),
                                    Name: "Gertrude Gerhold",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("nesciunt"),
                                                    Value: sdk.String("quaerat"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(929476),
                                            MetricName: "minus",
                                            Namespace: sdk.String("sunt"),
                                            Period: 715143,
                                            Statistic: shared.StatisticEnumSum.ToPointer(),
                                            Threshold: 5580.51,
                                            Unit: shared.UnitEnumMicroSeconds.ToPointer(),
                                        },
                                    },
                                },
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumSpot.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumChangeInCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(418637),
                                            ScalingAdjustment: 685415,
                                        },
                                    },
                                    Description: sdk.String("alias"),
                                    Name: "David Lubowitz",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumGreaterThanOrEqual,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("eaque"),
                                                    Value: sdk.String("saepe"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(965517),
                                            MetricName: "mollitia",
                                            Namespace: sdk.String("nulla"),
                                            Period: 640907,
                                            Statistic: shared.StatisticEnumSampleCount.ToPointer(),
                                            Threshold: 302.08,
                                            Unit: shared.UnitEnumNone.ToPointer(),
                                        },
                                    },
                                },
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumSpot.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumExactCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(27982),
                                            ScalingAdjustment: 278325,
                                        },
                                    },
                                    Description: sdk.String("qui"),
                                    Name: "Mr. Alyssa Pouros",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumGreaterThan,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("voluptatibus"),
                                                    Value: sdk.String("molestias"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("officia"),
                                                    Value: sdk.String("libero"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("totam"),
                                                    Value: sdk.String("sequi"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("aliquid"),
                                                    Value: sdk.String("ea"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(774501),
                                            MetricName: "ducimus",
                                            Namespace: sdk.String("odit"),
                                            Period: 243623,
                                            Statistic: shared.StatisticEnumMaximum.ToPointer(),
                                            Threshold: 9979.18,
                                            Unit: shared.UnitEnumMegaBitsPerSecond.ToPointer(),
                                        },
                                    },
                                },
                                shared.ScalingRule{
                                    Action: shared.ScalingAction{
                                        Market: shared.MarketTypeEnumSpot.ToPointer(),
                                        SimpleScalingPolicyConfiguration: shared.SimpleScalingPolicyConfiguration{
                                            AdjustmentType: shared.AdjustmentTypeEnumPercentChangeInCapacity.ToPointer(),
                                            CoolDown: sdk.Int64(883780),
                                            ScalingAdjustment: 42906,
                                        },
                                    },
                                    Description: sdk.String("nisi"),
                                    Name: "Rolando Veum",
                                    Trigger: shared.ScalingTrigger{
                                        CloudWatchAlarmDefinition: shared.CloudWatchAlarmDefinition{
                                            ComparisonOperator: shared.ComparisonOperatorEnumGreaterThanOrEqual,
                                            Dimensions: []shared.MetricDimension{
                                                shared.MetricDimension{
                                                    Key: sdk.String("quisquam"),
                                                    Value: sdk.String("dicta"),
                                                },
                                                shared.MetricDimension{
                                                    Key: sdk.String("voluptatibus"),
                                                    Value: sdk.String("eligendi"),
                                                },
                                            },
                                            EvaluationPeriods: sdk.Int64(62035),
                                            MetricName: "officiis",
                                            Namespace: sdk.String("architecto"),
                                            Period: 100251,
                                            Statistic: shared.StatisticEnumAverage.ToPointer(),
                                            Threshold: 7589.85,
                                            Unit: shared.UnitEnumPercent.ToPointer(),
                                        },
                                    },
                                },
                            },
                        },
                        BidPrice: sdk.String("perferendis"),
                        Configurations: []shared.Configuration{
                            shared.Configuration{
                                Classification: sdk.String("reiciendis"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "dicta": "quos",
                                    "ullam": "dolore",
                                    "modi": "itaque",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("maxime"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "assumenda": "vero",
                                },
                            },
                            shared.Configuration{
                                Classification: sdk.String("doloribus"),
                                Configurations: []shared.Configuration{
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                    shared.Configuration{},
                                },
                                Properties: map[string]string{
                                    "accusamus": "totam",
                                    "reiciendis": "ab",
                                    "sint": "nihil",
                                    "esse": "iure",
                                },
                            },
                        },
                        CustomAmiID: sdk.String("odio"),
                        EbsConfiguration: &shared.EbsConfiguration{
                            EbsBlockDeviceConfigs: []shared.EbsBlockDeviceConfig{
                                shared.EbsBlockDeviceConfig{
                                    VolumeSpecification: shared.VolumeSpecification{
                                        Iops: sdk.Int64(895513),
                                        SizeInGB: 423588,
                                        Throughput: sdk.Int64(208683),
                                        VolumeType: "corporis",
                                    },
                                    VolumesPerInstance: sdk.Int64(375350),
                                },
                            },
                            EbsOptimized: sdk.Bool(false),
                        },
                        InstanceCount: 163684,
                        InstanceRole: shared.InstanceRoleTypeEnumCore,
                        InstanceType: "reprehenderit",
                        Market: shared.MarketTypeEnumSpot.ToPointer(),
                        Name: sdk.String("Angela Lebsack II"),
                    },
                },
                KeepJobFlowAliveWhenNoSteps: sdk.Bool(false),
                MasterInstanceType: sdk.String("saepe"),
                Placement: &shared.PlacementType{
                    AvailabilityZone: sdk.String("neque"),
                    AvailabilityZones: []string{
                        "aliquam",
                        "quos",
                        "doloribus",
                        "fugiat",
                    },
                },
                ServiceAccessSecurityGroup: sdk.String("est"),
                SlaveInstanceType: sdk.String("delectus"),
                TerminationProtected: sdk.Bool(false),
            },
            JobFlowRole: sdk.String("velit"),
            KerberosAttributes: &shared.KerberosAttributes{
                ADDomainJoinPassword: sdk.String("vitae"),
                ADDomainJoinUser: sdk.String("nesciunt"),
                CrossRealmTrustPrincipalPassword: sdk.String("similique"),
                KdcAdminPassword: "illo",
                Realm: "repellat",
            },
            LogEncryptionKmsKeyID: sdk.String("nemo"),
            LogURI: sdk.String("doloribus"),
            ManagedScalingPolicy: &shared.ManagedScalingPolicy{
                ComputeLimits: &shared.ComputeLimits{
                    MaximumCapacityUnits: 823753,
                    MaximumCoreCapacityUnits: sdk.Int64(603323),
                    MaximumOnDemandCapacityUnits: sdk.Int64(275425),
                    MinimumCapacityUnits: 128021,
                    UnitType: shared.ComputeLimitsUnitTypeEnumInstances,
                },
            },
            Name: "Lucas Abbott",
            NewSupportedProducts: []shared.SupportedProductConfig{
                shared.SupportedProductConfig{
                    Args: []string{
                        "consequuntur",
                        "veniam",
                        "debitis",
                        "officia",
                    },
                    Name: sdk.String("Alexander Gerhold"),
                },
                shared.SupportedProductConfig{
                    Args: []string{
                        "in",
                        "minima",
                        "ex",
                    },
                    Name: sdk.String("Andrew Brekke"),
                },
            },
            OSReleaseLabel: sdk.String("quisquam"),
            PlacementGroupConfigs: []shared.PlacementGroupConfig{
                shared.PlacementGroupConfig{
                    InstanceRole: shared.InstanceRoleTypeEnumCore,
                    PlacementStrategy: shared.PlacementGroupStrategyEnumCluster.ToPointer(),
                },
            },
            ReleaseLabel: sdk.String("minima"),
            RepoUpgradeOnBoot: shared.RepoUpgradeOnBootEnumSecurity.ToPointer(),
            ScaleDownBehavior: shared.ScaleDownBehaviorEnumTerminateAtInstanceHour.ToPointer(),
            SecurityConfiguration: sdk.String("aliquid"),
            ServiceRole: sdk.String("magni"),
            StepConcurrencyLevel: sdk.Int64(276650),
            Steps: []shared.StepConfig{
                shared.StepConfig{
                    ActionOnFailure: shared.ActionOnFailureEnumCancelAndWait.ToPointer(),
                    HadoopJarStep: shared.HadoopJarStepConfig{
                        Args: []string{
                            "exercitationem",
                        },
                        Jar: "expedita",
                        MainClass: sdk.String("facilis"),
                        Properties: []shared.KeyValue{
                            shared.KeyValue{
                                Key: sdk.String("sit"),
                                Value: sdk.String("nemo"),
                            },
                            shared.KeyValue{
                                Key: sdk.String("culpa"),
                                Value: sdk.String("consequuntur"),
                            },
                            shared.KeyValue{
                                Key: sdk.String("amet"),
                                Value: sdk.String("deserunt"),
                            },
                            shared.KeyValue{
                                Key: sdk.String("modi"),
                                Value: sdk.String("veniam"),
                            },
                        },
                    },
                    Name: "Bradford Wilkinson",
                },
            },
            SupportedProducts: []string{
                "assumenda",
                "officiis",
                "architecto",
                "alias",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("ipsa"),
                    Value: sdk.String("nobis"),
                },
                shared.Tag{
                    Key: sdk.String("necessitatibus"),
                    Value: sdk.String("quia"),
                },
                shared.Tag{
                    Key: sdk.String("dicta"),
                    Value: sdk.String("vel"),
                },
            },
            VisibleToAllUsers: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.RunJobFlowXAmzTargetEnumElasticMapReduceRunJobFlow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunJobFlowOutput != nil {
        // handle response
    }
}
```

## SetTerminationProtection

<p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>

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
    res, err := s.SDK.SetTerminationProtection(ctx, operations.SetTerminationProtectionRequest{
        SetTerminationProtectionInput: shared.SetTerminationProtectionInput{
            JobFlowIds: []string{
                "cumque",
                "iure",
                "quibusdam",
            },
            TerminationProtected: false,
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.SetTerminationProtectionXAmzTargetEnumElasticMapReduceSetTerminationProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetVisibleToAllUsers

<important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access Management for EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>

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
    res, err := s.SDK.SetVisibleToAllUsers(ctx, operations.SetVisibleToAllUsersRequest{
        SetVisibleToAllUsersInput: shared.SetVisibleToAllUsersInput{
            JobFlowIds: []string{
                "odio",
            },
            VisibleToAllUsers: false,
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.SetVisibleToAllUsersXAmzTargetEnumElasticMapReduceSetVisibleToAllUsers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartNotebookExecution

Starts a notebook execution.

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
    res, err := s.SDK.StartNotebookExecution(ctx, operations.StartNotebookExecutionRequest{
        StartNotebookExecutionInput: shared.StartNotebookExecutionInput{
            EditorID: "laboriosam",
            ExecutionEngine: shared.ExecutionEngineConfig{
                ID: "949fb2bb-4eca-4e6c-bd5d-b3adebd5daea",
                MasterInstanceSecurityGroupID: sdk.String("incidunt"),
                Type: shared.ExecutionEngineTypeEnumEmr.ToPointer(),
            },
            NotebookExecutionName: sdk.String("maxime"),
            NotebookInstanceSecurityGroupID: sdk.String("ipsam"),
            NotebookParams: sdk.String("alias"),
            RelativePath: "suscipit",
            ServiceRole: "deserunt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("laborum"),
                    Value: sdk.String("est"),
                },
                shared.Tag{
                    Key: sdk.String("occaecati"),
                    Value: sdk.String("labore"),
                },
                shared.Tag{
                    Key: sdk.String("quo"),
                    Value: sdk.String("perferendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        XAmzTarget: operations.StartNotebookExecutionXAmzTargetEnumElasticMapReduceStartNotebookExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartNotebookExecutionOutput != nil {
        // handle response
    }
}
```

## StopNotebookExecution

Stops a notebook execution.

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
    res, err := s.SDK.StopNotebookExecution(ctx, operations.StopNotebookExecutionRequest{
        StopNotebookExecutionInput: shared.StopNotebookExecutionInput{
            NotebookExecutionID: "officiis",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.StopNotebookExecutionXAmzTargetEnumElasticMapReduceStopNotebookExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TerminateJobFlows

<p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>

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
    res, err := s.SDK.TerminateJobFlows(ctx, operations.TerminateJobFlowsRequest{
        TerminateJobFlowsInput: shared.TerminateJobFlowsInput{
            JobFlowIds: []string{
                "fuga",
                "facere",
                "impedit",
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.TerminateJobFlowsXAmzTargetEnumElasticMapReduceTerminateJobFlows,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateStudio

Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.

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
    res, err := s.SDK.UpdateStudio(ctx, operations.UpdateStudioRequest{
        UpdateStudioInput: shared.UpdateStudioInput{
            DefaultS3Location: sdk.String("necessitatibus"),
            Description: sdk.String("maxime"),
            Name: sdk.String("Jessica Brakus"),
            StudioID: "blanditiis",
            SubnetIds: []string{
                "magni",
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.UpdateStudioXAmzTargetEnumElasticMapReduceUpdateStudio,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateStudioSessionMapping

Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

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
    res, err := s.SDK.UpdateStudioSessionMapping(ctx, operations.UpdateStudioSessionMappingRequest{
        UpdateStudioSessionMappingInput: shared.UpdateStudioSessionMappingInput{
            IdentityID: sdk.String("maiores"),
            IdentityName: sdk.String("laudantium"),
            IdentityType: shared.IdentityTypeEnumGroup,
            SessionPolicyArn: "alias",
            StudioID: "asperiores",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.UpdateStudioSessionMappingXAmzTargetEnumElasticMapReduceUpdateStudioSessionMapping,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
