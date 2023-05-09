# SDK

## Overview

Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management.

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticmapreduce/>
### Available Operations

* [addInstanceFleet](#addinstancefleet) - <p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>
* [addInstanceGroups](#addinstancegroups) - Adds one or more instance groups to a running cluster.
* [addJobFlowSteps](#addjobflowsteps) - <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>
* [addTags](#addtags) - Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 
* [cancelSteps](#cancelsteps) - Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. 
* [createSecurityConfiguration](#createsecurityconfiguration) - Creates a security configuration, which is stored in the service and can be specified when a cluster is created.
* [createStudio](#createstudio) - Creates a new Amazon EMR Studio.
* [createStudioSessionMapping](#createstudiosessionmapping) - Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.
* [deleteSecurityConfiguration](#deletesecurityconfiguration) - Deletes a security configuration.
* [deleteStudio](#deletestudio) - Removes an Amazon EMR Studio from the Studio metadata store.
* [deleteStudioSessionMapping](#deletestudiosessionmapping) - Removes a user or group from an Amazon EMR Studio.
* [describeCluster](#describecluster) - Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.
* [~~describeJobFlows~~](#describejobflows) - <p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p> :warning: **Deprecated**
* [describeNotebookExecution](#describenotebookexecution) - Provides details of a notebook execution.
* [describeReleaseLabel](#describereleaselabel) - Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.
* [describeSecurityConfiguration](#describesecurityconfiguration) - Provides the details of a security configuration by returning the configuration JSON.
* [describeStep](#describestep) - Provides more detail about the cluster step.
* [describeStudio](#describestudio) - Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.
* [getAutoTerminationPolicy](#getautoterminationpolicy) - Returns the auto-termination policy for an Amazon EMR cluster.
* [getBlockPublicAccessConfiguration](#getblockpublicaccessconfiguration) - Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
* [getClusterSessionCredentials](#getclustersessioncredentials) - Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.
* [getManagedScalingPolicy](#getmanagedscalingpolicy) - Fetches the attached managed scaling policy for an Amazon EMR cluster. 
* [getStudioSessionMapping](#getstudiosessionmapping) - Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).
* [listBootstrapActions](#listbootstrapactions) - Provides information about the bootstrap actions associated with a cluster.
* [listClusters](#listclusters) - Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.
* [listInstanceFleets](#listinstancefleets) - <p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
* [listInstanceGroups](#listinstancegroups) - Provides all available details about the instance groups in a cluster.
* [listInstances](#listinstances) - Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.
* [listNotebookExecutions](#listnotebookexecutions) - Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.
* [listReleaseLabels](#listreleaselabels) - Retrieves release labels of EMR services in the region where the API is called.
* [listSecurityConfigurations](#listsecurityconfigurations) - Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.
* [listSteps](#liststeps) - Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.
* [listStudioSessionMappings](#liststudiosessionmappings) - Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.
* [listStudios](#liststudios) - Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.
* [modifyCluster](#modifycluster) - Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.
* [modifyInstanceFleet](#modifyinstancefleet) - <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
* [modifyInstanceGroups](#modifyinstancegroups) - ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.
* [putAutoScalingPolicy](#putautoscalingpolicy) - Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
* [putAutoTerminationPolicy](#putautoterminationpolicy) - <note> <p>Auto-termination is supported in Amazon EMR versions 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>
* [putBlockPublicAccessConfiguration](#putblockpublicaccessconfiguration) - Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
* [putManagedScalingPolicy](#putmanagedscalingpolicy) - Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
* [removeAutoScalingPolicy](#removeautoscalingpolicy) - Removes an automatic scaling policy from a specified instance group within an EMR cluster.
* [removeAutoTerminationPolicy](#removeautoterminationpolicy) - Removes an auto-termination policy from an Amazon EMR cluster.
* [removeManagedScalingPolicy](#removemanagedscalingpolicy) -  Removes a managed scaling policy from a specified EMR cluster. 
* [removeTags](#removetags) - <p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>
* [runJobFlow](#runjobflow) - <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>
* [setTerminationProtection](#setterminationprotection) - <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
* [setVisibleToAllUsers](#setvisibletoallusers) - <important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access Management for EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>
* [startNotebookExecution](#startnotebookexecution) - Starts a notebook execution.
* [stopNotebookExecution](#stopnotebookexecution) - Stops a notebook execution.
* [terminateJobFlows](#terminatejobflows) - <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>
* [updateStudio](#updatestudio) - Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.
* [updateStudioSessionMapping](#updatestudiosessionmapping) - Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

## addInstanceFleet

<p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddInstanceFleetRequest;
import org.openapis.openapi.models.operations.AddInstanceFleetResponse;
import org.openapis.openapi.models.operations.AddInstanceFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddInstanceFleetInput;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.EbsBlockDeviceConfig;
import org.openapis.openapi.models.shared.EbsConfiguration;
import org.openapis.openapi.models.shared.InstanceFleetConfig;
import org.openapis.openapi.models.shared.InstanceFleetProvisioningSpecifications;
import org.openapis.openapi.models.shared.InstanceFleetResizingSpecifications;
import org.openapis.openapi.models.shared.InstanceFleetTypeEnum;
import org.openapis.openapi.models.shared.InstanceTypeConfig;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationOptions;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationPreferenceEnum;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationUsageStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningSpecification;
import org.openapis.openapi.models.shared.OnDemandResizingSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpotProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.SpotProvisioningSpecification;
import org.openapis.openapi.models.shared.SpotProvisioningTimeoutActionEnum;
import org.openapis.openapi.models.shared.SpotResizingSpecification;
import org.openapis.openapi.models.shared.VolumeSpecification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddInstanceFleetRequest req = new AddInstanceFleetRequest(                new AddInstanceFleetInput("repellat",                 new InstanceFleetConfig(InstanceFleetTypeEnum.TASK) {{
                                                instanceTypeConfigs = new org.openapis.openapi.models.shared.InstanceTypeConfig[]{{
                                                    add(new InstanceTypeConfig("dolor") {{
                                                        bidPrice = "saepe";
                                                        bidPriceAsPercentageOfOnDemandPrice = 8681.26;
                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                            add(new Configuration() {{
                                                                classification = "consequuntur";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("magni", "sunt");
                                                                    put("quo", "illum");
                                                                    put("pariatur", "maxime");
                                                                }};
                                                            }}),
                                                        }};
                                                        customAmiId = "ea";
                                                        ebsConfiguration = new EbsConfiguration() {{
                                                            ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(453543L, "autem") {{
                                                                                    iops = 722056L;
                                                                                    throughput = 50588L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(982575L, "quidem") {{
                                                                        iops = 139972L;
                                                                        sizeInGB = 407183L;
                                                                        throughput = 33222L;
                                                                        volumeType = "ab";
                                                                    }};
                                                                    volumesPerInstance = 373291L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(764912L, "corporis") {{
                                                                                    iops = 944124L;
                                                                                    throughput = 729991L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(855804L, "amet") {{
                                                                        iops = 866383L;
                                                                        sizeInGB = 365496L;
                                                                        throughput = 975522L;
                                                                        volumeType = "perferendis";
                                                                    }};
                                                                    volumesPerInstance = 11714L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(199996L, "eos") {{
                                                                                    iops = 18521L;
                                                                                    throughput = 170986L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(489549L, "eaque") {{
                                                                        iops = 749999L;
                                                                        sizeInGB = 171629L;
                                                                        throughput = 339404L;
                                                                        volumeType = "totam";
                                                                    }};
                                                                    volumesPerInstance = 338985L;
                                                                }}),
                                                            }};
                                                            ebsOptimized = false;
                                                        }};
                                                        instanceType = "minus";
                                                        weightedCapacity = 463451L;
                                                    }}),
                                                }};
                                                launchSpecifications = new InstanceFleetProvisioningSpecifications() {{
                                                    onDemandSpecification = new OnDemandProvisioningSpecification(OnDemandProvisioningAllocationStrategyEnum.LOWEST_PRICE) {{
                                                        capacityReservationOptions = new OnDemandCapacityReservationOptions() {{
                                                            capacityReservationPreference = OnDemandCapacityReservationPreferenceEnum.NONE;
                                                            capacityReservationResourceGroupArn = "nostrum";
                                                            usageStrategy = OnDemandCapacityReservationUsageStrategyEnum.USE_CAPACITY_RESERVATIONS_FIRST;
                                                        }};;
                                                    }};;
                                                    spotSpecification = new SpotProvisioningSpecification(SpotProvisioningTimeoutActionEnum.TERMINATE_CLUSTER, 928082L) {{
                                                        allocationStrategy = SpotProvisioningAllocationStrategyEnum.CAPACITY_OPTIMIZED;
                                                        blockDurationMinutes = 608253L;
                                                    }};;
                                                }};;
                                                name = "Freddie Bartoletti";
                                                resizeSpecifications = new InstanceFleetResizingSpecifications() {{
                                                    onDemandResizeSpecification = new OnDemandResizingSpecification(500026L);;
                                                    spotResizeSpecification = new SpotResizingSpecification(621479L);;
                                                }};;
                                                targetOnDemandCapacity = 50370L;
                                                targetSpotCapacity = 577229L;
                                            }};);, AddInstanceFleetXAmzTargetEnum.ELASTIC_MAP_REDUCE_ADD_INSTANCE_FLEET) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            AddInstanceFleetResponse res = sdk.sdk.addInstanceFleet(req);

            if (res.addInstanceFleetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addInstanceGroups

Adds one or more instance groups to a running cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddInstanceGroupsRequest;
import org.openapis.openapi.models.operations.AddInstanceGroupsResponse;
import org.openapis.openapi.models.operations.AddInstanceGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddInstanceGroupsInput;
import org.openapis.openapi.models.shared.AdjustmentTypeEnum;
import org.openapis.openapi.models.shared.AutoScalingPolicy;
import org.openapis.openapi.models.shared.CloudWatchAlarmDefinition;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.EbsBlockDeviceConfig;
import org.openapis.openapi.models.shared.EbsConfiguration;
import org.openapis.openapi.models.shared.InstanceGroupConfig;
import org.openapis.openapi.models.shared.InstanceRoleTypeEnum;
import org.openapis.openapi.models.shared.MarketTypeEnum;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.ScalingAction;
import org.openapis.openapi.models.shared.ScalingConstraints;
import org.openapis.openapi.models.shared.ScalingRule;
import org.openapis.openapi.models.shared.ScalingTrigger;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleScalingPolicyConfiguration;
import org.openapis.openapi.models.shared.StatisticEnum;
import org.openapis.openapi.models.shared.UnitEnum;
import org.openapis.openapi.models.shared.VolumeSpecification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddInstanceGroupsRequest req = new AddInstanceGroupsRequest(                new AddInstanceGroupsInput(                new org.openapis.openapi.models.shared.InstanceGroupConfig[]{{
                                                add(new InstanceGroupConfig(829603L, InstanceRoleTypeEnum.TASK, "voluptas") {{
                                                    autoScalingPolicy = new AutoScalingPolicy(                new ScalingConstraints(45614L, 961937L);,                 new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                        add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(617877L) {{
                                                                                                            adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                            coolDown = 13236L;
                                                                                                        }};) {{
                                                                                            market = MarketTypeEnum.SPOT;
                                                                                        }};, "exercitationem",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "fugit", 780427L, 9818.3) {{
                                                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "iusto";
                                                                                                                    value = "eligendi";
                                                                                                                }}),
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "ducimus";
                                                                                                                    value = "alias";
                                                                                                                }}),
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "officia";
                                                                                                                    value = "tempora";
                                                                                                                }}),
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "ipsam";
                                                                                                                    value = "ea";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            evaluationPeriods = 136900L;
                                                                                                            namespace = "vel";
                                                                                                            statistic = StatisticEnum.MAXIMUM;
                                                                                                            unit = UnitEnum.TERA_BYTES;
                                                                                                        }};);) {{
                                                                            action = new ScalingAction(                new SimpleScalingPolicyConfiguration(63038L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                coolDown = 555649L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                                simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(100294L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                    coolDown = 240829L;
                                                                                    scalingAdjustment = 677263L;
                                                                                }};
                                                                            }};
                                                                            description = "itaque";
                                                                            name = "Jodi Skiles";
                                                                            trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "hic", 715561L, 7992.03) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "similique";
                                                                                                        value = "facilis";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "vero";
                                                                                                        value = "ducimus";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 293020L;
                                                                                                namespace = "quibusdam";
                                                                                                statistic = StatisticEnum.MAXIMUM;
                                                                                                unit = UnitEnum.KILO_BYTES;
                                                                                            }};) {{
                                                                                cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "consectetur", 878870L, 9493.19) {{
                                                                                    comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "cupiditate";
                                                                                            value = "qui";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "quae";
                                                                                            value = "laudantium";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "odio";
                                                                                            value = "occaecati";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 977496L;
                                                                                    metricName = "quisquam";
                                                                                    namespace = "vero";
                                                                                    period = 606476L;
                                                                                    statistic = StatisticEnum.AVERAGE;
                                                                                    threshold = 2184.03;
                                                                                    unit = UnitEnum.TERA_BITS_PER_SECOND;
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        constraints = new ScalingConstraints(730122L, 964490L) {{
                                                            maxCapacity = 589910L;
                                                            minCapacity = 750844L;
                                                        }};
                                                        rules = new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(456015L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                coolDown = 906418L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                            }};, "aspernatur",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "amet", 758379L, 8815.86) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "saepe";
                                                                                                        value = "suscipit";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "deserunt";
                                                                                                        value = "provident";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 324683L;
                                                                                                namespace = "repellendus";
                                                                                                statistic = StatisticEnum.SUM;
                                                                                                unit = UnitEnum.BYTES_PER_SECOND;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(186193L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                    coolDown = 944373L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.SPOT;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(222443L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                        coolDown = 212390L;
                                                                        scalingAdjustment = 209843L;
                                                                    }};
                                                                }};
                                                                description = "excepturi";
                                                                name = "Adrian Kuhn";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "soluta", 679393L, 4785.96) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "dolorum";
                                                                                            value = "deleniti";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "omnis";
                                                                                            value = "necessitatibus";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 714697L;
                                                                                    namespace = "asperiores";
                                                                                    statistic = StatisticEnum.SUM;
                                                                                    unit = UnitEnum.KILO_BYTES;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "atque", 24678L, 8546.14) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "veritatis";
                                                                                value = "ipsa";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "ipsa";
                                                                                value = "iure";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 487838L;
                                                                        metricName = "quaerat";
                                                                        namespace = "accusamus";
                                                                        period = 696344L;
                                                                        statistic = StatisticEnum.MAXIMUM;
                                                                        threshold = 3777.52;
                                                                        unit = UnitEnum.BYTES_PER_SECOND;
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(840429L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                coolDown = 204865L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                            }};, "magni",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "sunt", 355613L, 7220.81) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "voluptatem";
                                                                                                        value = "cumque";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "soluta";
                                                                                                        value = "nobis";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "et";
                                                                                                        value = "saepe";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "ipsum";
                                                                                                        value = "veritatis";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 749255L;
                                                                                                namespace = "quos";
                                                                                                statistic = StatisticEnum.MINIMUM;
                                                                                                unit = UnitEnum.COUNT;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(798047L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                    coolDown = 185636L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(425451L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                        coolDown = 311860L;
                                                                        scalingAdjustment = 273542L;
                                                                    }};
                                                                }};
                                                                description = "dolorum";
                                                                name = "Cory Pfeffer";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "qui", 586784L, 8075.81) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "soluta";
                                                                                            value = "dicta";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "laborum";
                                                                                            value = "totam";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "incidunt";
                                                                                            value = "aspernatur";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "dolores";
                                                                                            value = "distinctio";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 704474L;
                                                                                    namespace = "aliquid";
                                                                                    statistic = StatisticEnum.SUM;
                                                                                    unit = UnitEnum.COUNT;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "deserunt", 463575L, 2148.8) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.LESS_THAN_OR_EQUAL;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "amet";
                                                                                value = "tempore";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "accusamus";
                                                                                value = "numquam";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "enim";
                                                                                value = "dolorem";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "sapiente";
                                                                                value = "totam";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 471752L;
                                                                        metricName = "sit";
                                                                        namespace = "expedita";
                                                                        period = 207470L;
                                                                        statistic = StatisticEnum.SAMPLE_COUNT;
                                                                        threshold = 4246.85;
                                                                        unit = UnitEnum.GIGA_BYTES_PER_SECOND;
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    bidPrice = "ratione";
                                                    configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                        add(new Configuration() {{
                                                            classification = "laudantium";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("maiores", "quasi");
                                                            }};
                                                        }}),
                                                        add(new Configuration() {{
                                                            classification = "ex";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("voluptatibus", "nostrum");
                                                                put("sapiente", "quisquam");
                                                                put("saepe", "ea");
                                                            }};
                                                        }}),
                                                    }};
                                                    customAmiId = "impedit";
                                                    ebsConfiguration = new EbsConfiguration() {{
                                                        ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(926213L, "aspernatur") {{
                                                                                iops = 325310L;
                                                                                throughput = 53427L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(407241L, "quo") {{
                                                                    iops = 333145L;
                                                                    sizeInGB = 399499L;
                                                                    throughput = 81101L;
                                                                    volumeType = "magnam";
                                                                }};
                                                                volumesPerInstance = 232234L;
                                                            }}),
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(146946L, "accusamus") {{
                                                                                iops = 79522L;
                                                                                throughput = 250622L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(533466L, "impedit") {{
                                                                    iops = 952871L;
                                                                    sizeInGB = 725595L;
                                                                    throughput = 13948L;
                                                                    volumeType = "aut";
                                                                }};
                                                                volumesPerInstance = 304582L;
                                                            }}),
                                                        }};
                                                        ebsOptimized = false;
                                                    }};
                                                    instanceCount = 89603L;
                                                    instanceRole = InstanceRoleTypeEnum.TASK;
                                                    instanceType = "laborum";
                                                    market = MarketTypeEnum.SPOT;
                                                    name = "Agnes Johnston";
                                                }}),
                                                add(new InstanceGroupConfig(253191L, InstanceRoleTypeEnum.TASK, "explicabo") {{
                                                    autoScalingPolicy = new AutoScalingPolicy(                new ScalingConstraints(159867L, 536178L);,                 new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                        add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(959167L) {{
                                                                                                            adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                            coolDown = 458139L;
                                                                                                        }};) {{
                                                                                            market = MarketTypeEnum.SPOT;
                                                                                        }};, "provident",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "nulla", 557811L, 4572.23) {{
                                                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "a";
                                                                                                                    value = "error";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            evaluationPeriods = 575751L;
                                                                                                            namespace = "pariatur";
                                                                                                            statistic = StatisticEnum.MAXIMUM;
                                                                                                            unit = UnitEnum.BYTES;
                                                                                                        }};);) {{
                                                                            action = new ScalingAction(                new SimpleScalingPolicyConfiguration(325685L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                coolDown = 147014L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.SPOT;
                                                                                simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(128860L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                    coolDown = 277596L;
                                                                                    scalingAdjustment = 539224L;
                                                                                }};
                                                                            }};
                                                                            description = "sapiente";
                                                                            name = "Norma Christiansen";
                                                                            trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "rerum", 580197L, 3277.2) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "eligendi";
                                                                                                        value = "sit";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "culpa";
                                                                                                        value = "tempore";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "adipisci";
                                                                                                        value = "cumque";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 160538L;
                                                                                                namespace = "consequatur";
                                                                                                statistic = StatisticEnum.MINIMUM;
                                                                                                unit = UnitEnum.TERA_BYTES;
                                                                                            }};) {{
                                                                                cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "saepe", 426306L, 6900.25) {{
                                                                                    comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "esse";
                                                                                            value = "eveniet";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 882042L;
                                                                                    metricName = "veritatis";
                                                                                    namespace = "esse";
                                                                                    period = 800379L;
                                                                                    statistic = StatisticEnum.MINIMUM;
                                                                                    threshold = 8771.31;
                                                                                    unit = UnitEnum.KILO_BITS;
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        constraints = new ScalingConstraints(270328L, 256139L) {{
                                                            maxCapacity = 727044L;
                                                            minCapacity = 96549L;
                                                        }};
                                                        rules = new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(715179L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                coolDown = 490819L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                            }};, "nihil",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "accusamus", 306810L, 4884.1) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "commodi";
                                                                                                        value = "sapiente";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "dolores";
                                                                                                        value = "deserunt";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "molestiae";
                                                                                                        value = "accusantium";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 783648L;
                                                                                                namespace = "eum";
                                                                                                statistic = StatisticEnum.SUM;
                                                                                                unit = UnitEnum.TERA_BITS;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(262118L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                    coolDown = 456141L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.SPOT;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(487935L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                        coolDown = 476477L;
                                                                        scalingAdjustment = 301598L;
                                                                    }};
                                                                }};
                                                                description = "rem";
                                                                name = "Mitchell Predovic";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "ab", 587600L, 96.88) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "debitis";
                                                                                            value = "ipsam";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "aspernatur";
                                                                                            value = "sequi";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 779192L;
                                                                                    namespace = "esse";
                                                                                    statistic = StatisticEnum.MAXIMUM;
                                                                                    unit = UnitEnum.SECONDS;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "fuga", 259422L, 1783.67) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "assumenda";
                                                                                value = "eos";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "praesentium";
                                                                                value = "quisquam";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 86377L;
                                                                        metricName = "ipsa";
                                                                        namespace = "id";
                                                                        period = 696997L;
                                                                        statistic = StatisticEnum.AVERAGE;
                                                                        threshold = 7786.96;
                                                                        unit = UnitEnum.KILO_BITS_PER_SECOND;
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    bidPrice = "eveniet";
                                                    configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                        add(new Configuration() {{
                                                            classification = "facere";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("quasi", "similique");
                                                            }};
                                                        }}),
                                                        add(new Configuration() {{
                                                            classification = "culpa";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("quae", "earum");
                                                                put("vel", "in");
                                                                put("eius", "libero");
                                                                put("illum", "soluta");
                                                            }};
                                                        }}),
                                                        add(new Configuration() {{
                                                            classification = "accusantium";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("dicta", "ullam");
                                                                put("reprehenderit", "ullam");
                                                                put("nisi", "aut");
                                                                put("voluptatum", "qui");
                                                            }};
                                                        }}),
                                                        add(new Configuration() {{
                                                            classification = "quibusdam";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("itaque", "dolorum");
                                                                put("architecto", "omnis");
                                                                put("tenetur", "quasi");
                                                            }};
                                                        }}),
                                                    }};
                                                    customAmiId = "at";
                                                    ebsConfiguration = new EbsConfiguration() {{
                                                        ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(839513L, "accusantium") {{
                                                                                iops = 522371L;
                                                                                throughput = 15606L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(232744L, "adipisci") {{
                                                                    iops = 454162L;
                                                                    sizeInGB = 55965L;
                                                                    throughput = 326701L;
                                                                    volumeType = "veritatis";
                                                                }};
                                                                volumesPerInstance = 614465L;
                                                            }}),
                                                        }};
                                                        ebsOptimized = false;
                                                    }};
                                                    instanceCount = 513075L;
                                                    instanceRole = InstanceRoleTypeEnum.CORE;
                                                    instanceType = "mollitia";
                                                    market = MarketTypeEnum.ON_DEMAND;
                                                    name = "Kyle Bartoletti";
                                                }}),
                                                add(new InstanceGroupConfig(52508L, InstanceRoleTypeEnum.TASK, "perspiciatis") {{
                                                    autoScalingPolicy = new AutoScalingPolicy(                new ScalingConstraints(97243L, 542457L);,                 new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                        add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(562783L) {{
                                                                                                            adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                            coolDown = 906355L;
                                                                                                        }};) {{
                                                                                            market = MarketTypeEnum.ON_DEMAND;
                                                                                        }};, "occaecati",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "perspiciatis", 446394L, 2380.43) {{
                                                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "occaecati";
                                                                                                                    value = "consequuntur";
                                                                                                                }}),
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "fugit";
                                                                                                                    value = "id";
                                                                                                                }}),
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "quis";
                                                                                                                    value = "reprehenderit";
                                                                                                                }}),
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "error";
                                                                                                                    value = "illo";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            evaluationPeriods = 361306L;
                                                                                                            namespace = "quidem";
                                                                                                            statistic = StatisticEnum.MAXIMUM;
                                                                                                            unit = UnitEnum.MEGA_BYTES;
                                                                                                        }};);) {{
                                                                            action = new ScalingAction(                new SimpleScalingPolicyConfiguration(90885L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                coolDown = 227759L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.SPOT;
                                                                                simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(806670L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                    coolDown = 383103L;
                                                                                    scalingAdjustment = 693957L;
                                                                                }};
                                                                            }};
                                                                            description = "assumenda";
                                                                            name = "Leah Mueller";
                                                                            trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "doloremque", 919783L, 1160.98) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "beatae";
                                                                                                        value = "dolores";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 316488L;
                                                                                                namespace = "laboriosam";
                                                                                                statistic = StatisticEnum.AVERAGE;
                                                                                                unit = UnitEnum.TERA_BITS_PER_SECOND;
                                                                                            }};) {{
                                                                                cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "dolorum", 829898L, 2871.19) {{
                                                                                    comparisonOperator = ComparisonOperatorEnum.LESS_THAN_OR_EQUAL;
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "minima";
                                                                                            value = "aspernatur";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "ex";
                                                                                            value = "maiores";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "corrupti";
                                                                                            value = "at";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 621693L;
                                                                                    metricName = "blanditiis";
                                                                                    namespace = "suscipit";
                                                                                    period = 922348L;
                                                                                    statistic = StatisticEnum.SUM;
                                                                                    threshold = 5413.81;
                                                                                    unit = UnitEnum.MILLI_SECONDS;
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                        add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(928219L) {{
                                                                                                            adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                            coolDown = 592081L;
                                                                                                        }};) {{
                                                                                            market = MarketTypeEnum.ON_DEMAND;
                                                                                        }};, "eum",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "provident", 133439L, 3545.06) {{
                                                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "animi";
                                                                                                                    value = "nostrum";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            evaluationPeriods = 652309L;
                                                                                                            namespace = "provident";
                                                                                                            statistic = StatisticEnum.MAXIMUM;
                                                                                                            unit = UnitEnum.KILO_BYTES_PER_SECOND;
                                                                                                        }};);) {{
                                                                            action = new ScalingAction(                new SimpleScalingPolicyConfiguration(61078L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                coolDown = 907733L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.SPOT;
                                                                                simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(517612L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                    coolDown = 434156L;
                                                                                    scalingAdjustment = 59944L;
                                                                                }};
                                                                            }};
                                                                            description = "qui";
                                                                            name = "Elmer Treutel";
                                                                            trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "nesciunt", 63207L, 9257.03) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "quaerat";
                                                                                                        value = "molestiae";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "ex";
                                                                                                        value = "ut";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "culpa";
                                                                                                        value = "adipisci";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 890653L;
                                                                                                namespace = "laudantium";
                                                                                                statistic = StatisticEnum.SUM;
                                                                                                unit = UnitEnum.BITS;
                                                                                            }};) {{
                                                                                cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "id", 327988L, 2931.44) {{
                                                                                    comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "rem";
                                                                                            value = "aliquam";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "ad";
                                                                                            value = "repellat";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "alias";
                                                                                            value = "corporis";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 597303L;
                                                                                    metricName = "nihil";
                                                                                    namespace = "mollitia";
                                                                                    period = 378245L;
                                                                                    statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                    threshold = 9795.27;
                                                                                    unit = UnitEnum.COUNT_PER_SECOND;
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        constraints = new ScalingConstraints(491025L, 115484L) {{
                                                            maxCapacity = 376226L;
                                                            minCapacity = 12036L;
                                                        }};
                                                        rules = new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(828657L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                coolDown = 924967L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                            }};, "aperiam",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "consectetur", 449083L, 3485.19) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "facere";
                                                                                                        value = "numquam";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "doloribus";
                                                                                                        value = "suscipit";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "reiciendis";
                                                                                                        value = "quidem";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "saepe";
                                                                                                        value = "necessitatibus";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 296556L;
                                                                                                namespace = "sunt";
                                                                                                statistic = StatisticEnum.MAXIMUM;
                                                                                                unit = UnitEnum.MEGA_BYTES;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(45659L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                    coolDown = 310067L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.SPOT;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(990345L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                        coolDown = 974257L;
                                                                        scalingAdjustment = 374323L;
                                                                    }};
                                                                }};
                                                                description = "consequuntur";
                                                                name = "Luke Schoen";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "vel", 497678L, 5546.88) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "labore";
                                                                                            value = "possimus";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "facilis";
                                                                                            value = "cum";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 414857L;
                                                                                    namespace = "in";
                                                                                    statistic = StatisticEnum.AVERAGE;
                                                                                    unit = UnitEnum.COUNT_PER_SECOND;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "est", 926880L, 5173.09) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.LESS_THAN_OR_EQUAL;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "quae";
                                                                                value = "quaerat";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "porro";
                                                                                value = "quod";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 288398L;
                                                                        metricName = "ab";
                                                                        namespace = "adipisci";
                                                                        period = 683573L;
                                                                        statistic = StatisticEnum.MINIMUM;
                                                                        threshold = 3807.29;
                                                                        unit = UnitEnum.MEGA_BYTES;
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(24619L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                coolDown = 148829L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.SPOT;
                                                                            }};, "explicabo",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "facilis", 451822L, 7090.72) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "iste";
                                                                                                        value = "dolore";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 671907L;
                                                                                                namespace = "sed";
                                                                                                statistic = StatisticEnum.SUM;
                                                                                                unit = UnitEnum.MEGA_BITS;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(891523L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                    coolDown = 358107L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(950953L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                        coolDown = 105906L;
                                                                        scalingAdjustment = 489509L;
                                                                    }};
                                                                }};
                                                                description = "harum";
                                                                name = "Melissa Von PhD";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "ullam", 237742L, 7383.91) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "quas";
                                                                                            value = "hic";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "nesciunt";
                                                                                            value = "culpa";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "corrupti";
                                                                                            value = "pariatur";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 519643L;
                                                                                    namespace = "hic";
                                                                                    statistic = StatisticEnum.AVERAGE;
                                                                                    unit = UnitEnum.TERA_BYTES_PER_SECOND;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "dolore", 304468L, 8859.63) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "aspernatur";
                                                                                value = "voluptas";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "voluptas";
                                                                                value = "voluptas";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 324405L;
                                                                        metricName = "nobis";
                                                                        namespace = "dolorum";
                                                                        period = 237807L;
                                                                        statistic = StatisticEnum.MINIMUM;
                                                                        threshold = 1718.53;
                                                                        unit = UnitEnum.TERA_BITS;
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(901483L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                coolDown = 329935L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                            }};, "officiis",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "laudantium", 348476L, 5106.29) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "laboriosam";
                                                                                                        value = "dolorum";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "voluptatum";
                                                                                                        value = "error";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "hic";
                                                                                                        value = "expedita";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 892863L;
                                                                                                namespace = "neque";
                                                                                                statistic = StatisticEnum.MINIMUM;
                                                                                                unit = UnitEnum.BITS;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(382808L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                    coolDown = 895386L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.SPOT;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(100032L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                        coolDown = 378326L;
                                                                        scalingAdjustment = 604118L;
                                                                    }};
                                                                }};
                                                                description = "illo";
                                                                name = "Thomas Lockman";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "incidunt", 373035L, 8948.64) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "sit";
                                                                                            value = "nobis";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "error";
                                                                                            value = "veniam";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "minima";
                                                                                            value = "recusandae";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 967122L;
                                                                                    namespace = "nulla";
                                                                                    statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                    unit = UnitEnum.SECONDS;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "officiis", 505866L, 7086.09) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "eius";
                                                                                value = "necessitatibus";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "ipsum";
                                                                                value = "ea";
                                                                            }}),
                                                                            add(new MetricDimension() {{
                                                                                key = "occaecati";
                                                                                value = "quos";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 975752L;
                                                                        metricName = "tempora";
                                                                        namespace = "tempora";
                                                                        period = 455444L;
                                                                        statistic = StatisticEnum.MAXIMUM;
                                                                        threshold = 4017.13;
                                                                        unit = UnitEnum.NONE;
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(2703L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                coolDown = 647197L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                            }};, "unde",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "provident", 833819L, 9627.71) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "perferendis";
                                                                                                        value = "est";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "quidem";
                                                                                                        value = "reprehenderit";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "facere";
                                                                                                        value = "fuga";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "praesentium";
                                                                                                        value = "mollitia";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 333965L;
                                                                                                namespace = "voluptatem";
                                                                                                statistic = StatisticEnum.MINIMUM;
                                                                                                unit = UnitEnum.GIGA_BITS_PER_SECOND;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(543678L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                    coolDown = 282699L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.SPOT;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(272683L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                        coolDown = 548361L;
                                                                        scalingAdjustment = 879235L;
                                                                    }};
                                                                }};
                                                                description = "fugiat";
                                                                name = "Cecilia Quitzon IV";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "incidunt", 968865L, 2097.5) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "dicta";
                                                                                            value = "architecto";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "occaecati";
                                                                                            value = "labore";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "quidem";
                                                                                            value = "atque";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 671957L;
                                                                                    namespace = "nam";
                                                                                    statistic = StatisticEnum.MAXIMUM;
                                                                                    unit = UnitEnum.KILO_BITS;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "nostrum", 906172L, 6222.31) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "voluptatum";
                                                                                value = "quas";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 922112L;
                                                                        metricName = "corporis";
                                                                        namespace = "et";
                                                                        period = 502710L;
                                                                        statistic = StatisticEnum.SUM;
                                                                        threshold = 1536.27;
                                                                        unit = UnitEnum.NONE;
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    bidPrice = "ex";
                                                    configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                        add(new Configuration() {{
                                                            classification = "accusantium";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("ullam", "in");
                                                                put("nam", "earum");
                                                                put("officia", "laborum");
                                                                put("placeat", "modi");
                                                            }};
                                                        }}),
                                                        add(new Configuration() {{
                                                            classification = "voluptatibus";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("sapiente", "cumque");
                                                                put("vitae", "rerum");
                                                                put("tempora", "quis");
                                                                put("inventore", "fugit");
                                                            }};
                                                        }}),
                                                    }};
                                                    customAmiId = "cumque";
                                                    ebsConfiguration = new EbsConfiguration() {{
                                                        ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(773084L, "eos") {{
                                                                                iops = 958741L;
                                                                                throughput = 433279L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(260628L, "rem") {{
                                                                    iops = 21688L;
                                                                    sizeInGB = 241901L;
                                                                    throughput = 137251L;
                                                                    volumeType = "eum";
                                                                }};
                                                                volumesPerInstance = 871083L;
                                                            }}),
                                                        }};
                                                        ebsOptimized = false;
                                                    }};
                                                    instanceCount = 117320L;
                                                    instanceRole = InstanceRoleTypeEnum.MASTER;
                                                    instanceType = "beatae";
                                                    market = MarketTypeEnum.SPOT;
                                                    name = "Darin Rodriguez";
                                                }}),
                                                add(new InstanceGroupConfig(746585L, InstanceRoleTypeEnum.TASK, "nam") {{
                                                    autoScalingPolicy = new AutoScalingPolicy(                new ScalingConstraints(856277L, 369490L);,                 new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                        add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(200516L) {{
                                                                                                            adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                            coolDown = 514054L;
                                                                                                        }};) {{
                                                                                            market = MarketTypeEnum.ON_DEMAND;
                                                                                        }};, "quasi",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "fugiat", 117380L, 3955.44) {{
                                                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                add(new MetricDimension() {{
                                                                                                                    key = "consectetur";
                                                                                                                    value = "aperiam";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            evaluationPeriods = 585432L;
                                                                                                            namespace = "reiciendis";
                                                                                                            statistic = StatisticEnum.MINIMUM;
                                                                                                            unit = UnitEnum.NONE;
                                                                                                        }};);) {{
                                                                            action = new ScalingAction(                new SimpleScalingPolicyConfiguration(456410L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                coolDown = 153369L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                                simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(884952L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                    coolDown = 911198L;
                                                                                    scalingAdjustment = 773456L;
                                                                                }};
                                                                            }};
                                                                            description = "veniam";
                                                                            name = "Lula Kemmer";
                                                                            trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "sequi", 987349L, 9180.92) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "occaecati";
                                                                                                        value = "nemo";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "voluptate";
                                                                                                        value = "blanditiis";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "officia";
                                                                                                        value = "voluptas";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "numquam";
                                                                                                        value = "nemo";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 551079L;
                                                                                                namespace = "eius";
                                                                                                statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                                unit = UnitEnum.TERA_BITS;
                                                                                            }};) {{
                                                                                cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "at", 878373L, 6675.93) {{
                                                                                    comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "ab";
                                                                                            value = "porro";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "autem";
                                                                                            value = "nobis";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 388319L;
                                                                                    metricName = "recusandae";
                                                                                    namespace = "consequuntur";
                                                                                    period = 28952L;
                                                                                    statistic = StatisticEnum.AVERAGE;
                                                                                    threshold = 8956.92;
                                                                                    unit = UnitEnum.MICRO_SECONDS;
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        constraints = new ScalingConstraints(399802L, 780931L) {{
                                                            maxCapacity = 983427L;
                                                            minCapacity = 891801L;
                                                        }};
                                                        rules = new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(856756L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                coolDown = 399667L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.SPOT;
                                                                            }};, "suscipit",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "perferendis", 431760L, 3747.53) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "id";
                                                                                                        value = "ab";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "error";
                                                                                                        value = "possimus";
                                                                                                    }}),
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "voluptates";
                                                                                                        value = "mollitia";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 671794L;
                                                                                                namespace = "libero";
                                                                                                statistic = StatisticEnum.AVERAGE;
                                                                                                unit = UnitEnum.PERCENT;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(656762L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                    coolDown = 862063L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(189062L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                        coolDown = 764995L;
                                                                        scalingAdjustment = 684935L;
                                                                    }};
                                                                }};
                                                                description = "consequatur";
                                                                name = "Catherine Kuphal";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "reiciendis", 423706L, 999.58) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "doloremque";
                                                                                            value = "dicta";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "odio";
                                                                                            value = "tempora";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "esse";
                                                                                            value = "ex";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "consectetur";
                                                                                            value = "aliquid";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 58870L;
                                                                                    namespace = "laborum";
                                                                                    statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                    unit = UnitEnum.BITS;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "iusto", 457059L, 5083.9) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "quasi";
                                                                                value = "magni";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 984934L;
                                                                        metricName = "nulla";
                                                                        namespace = "necessitatibus";
                                                                        period = 58534L;
                                                                        statistic = StatisticEnum.AVERAGE;
                                                                        threshold = 4706.21;
                                                                        unit = UnitEnum.GIGA_BITS;
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(222864L) {{
                                                                                                adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                coolDown = 80532L;
                                                                                            }};) {{
                                                                                market = MarketTypeEnum.SPOT;
                                                                            }};, "veritatis",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "dolor", 8689L, 1000.14) {{
                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                    add(new MetricDimension() {{
                                                                                                        key = "modi";
                                                                                                        value = "fugit";
                                                                                                    }}),
                                                                                                }};
                                                                                                evaluationPeriods = 66149L;
                                                                                                namespace = "laudantium";
                                                                                                statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                                unit = UnitEnum.MEGA_BYTES;
                                                                                            }};);) {{
                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(405373L) {{
                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                    coolDown = 321043L;
                                                                                }};) {{
                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(775803L) {{
                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                        coolDown = 833316L;
                                                                        scalingAdjustment = 405036L;
                                                                    }};
                                                                }};
                                                                description = "expedita";
                                                                name = "Leona Rippin IV";
                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "ex", 958308L, 5241.84) {{
                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                        add(new MetricDimension() {{
                                                                                            key = "nemo";
                                                                                            value = "asperiores";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "ratione";
                                                                                            value = "ullam";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "perferendis";
                                                                                            value = "illum";
                                                                                        }}),
                                                                                        add(new MetricDimension() {{
                                                                                            key = "totam";
                                                                                            value = "impedit";
                                                                                        }}),
                                                                                    }};
                                                                                    evaluationPeriods = 842777L;
                                                                                    namespace = "nam";
                                                                                    statistic = StatisticEnum.AVERAGE;
                                                                                    unit = UnitEnum.KILO_BYTES_PER_SECOND;
                                                                                }};) {{
                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "voluptatem", 1207L, 5349.17) {{
                                                                        comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                            add(new MetricDimension() {{
                                                                                key = "rerum";
                                                                                value = "est";
                                                                            }}),
                                                                        }};
                                                                        evaluationPeriods = 634786L;
                                                                        metricName = "voluptatem";
                                                                        namespace = "sapiente";
                                                                        period = 889288L;
                                                                        statistic = StatisticEnum.SAMPLE_COUNT;
                                                                        threshold = 6821.19;
                                                                        unit = UnitEnum.MEGA_BITS_PER_SECOND;
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    bidPrice = "omnis";
                                                    configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                        add(new Configuration() {{
                                                            classification = "occaecati";
                                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                                add(new Configuration() {{}}),
                                                            }};
                                                            properties = new java.util.HashMap<String, String>() {{
                                                                put("inventore", "fuga");
                                                            }};
                                                        }}),
                                                    }};
                                                    customAmiId = "accusamus";
                                                    ebsConfiguration = new EbsConfiguration() {{
                                                        ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(836364L, "quos") {{
                                                                                iops = 415280L;
                                                                                throughput = 930819L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(507636L, "maxime") {{
                                                                    iops = 719620L;
                                                                    sizeInGB = 608593L;
                                                                    throughput = 966390L;
                                                                    volumeType = "minima";
                                                                }};
                                                                volumesPerInstance = 300403L;
                                                            }}),
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(371919L, "vel") {{
                                                                                iops = 1383L;
                                                                                throughput = 93894L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(722184L, "vero") {{
                                                                    iops = 415608L;
                                                                    sizeInGB = 520761L;
                                                                    throughput = 936618L;
                                                                    volumeType = "modi";
                                                                }};
                                                                volumesPerInstance = 32901L;
                                                            }}),
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(364463L, "reprehenderit") {{
                                                                                iops = 667715L;
                                                                                throughput = 336102L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(858778L, "deserunt") {{
                                                                    iops = 247685L;
                                                                    sizeInGB = 978548L;
                                                                    throughput = 318233L;
                                                                    volumeType = "sint";
                                                                }};
                                                                volumesPerInstance = 458503L;
                                                            }}),
                                                            add(new EbsBlockDeviceConfig(                new VolumeSpecification(376741L, "debitis") {{
                                                                                iops = 966148L;
                                                                                throughput = 65082L;
                                                                            }};) {{
                                                                volumeSpecification = new VolumeSpecification(900103L, "asperiores") {{
                                                                    iops = 571844L;
                                                                    sizeInGB = 880679L;
                                                                    throughput = 774684L;
                                                                    volumeType = "hic";
                                                                }};
                                                                volumesPerInstance = 404306L;
                                                            }}),
                                                        }};
                                                        ebsOptimized = false;
                                                    }};
                                                    instanceCount = 791880L;
                                                    instanceRole = InstanceRoleTypeEnum.TASK;
                                                    instanceType = "laborum";
                                                    market = MarketTypeEnum.ON_DEMAND;
                                                    name = "Leah Emmerich";
                                                }}),
                                            }}, "dolore");, AddInstanceGroupsXAmzTargetEnum.ELASTIC_MAP_REDUCE_ADD_INSTANCE_GROUPS) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "sequi";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "deleniti";
            }};            

            AddInstanceGroupsResponse res = sdk.sdk.addInstanceGroups(req);

            if (res.addInstanceGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addJobFlowSteps

<p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddJobFlowStepsRequest;
import org.openapis.openapi.models.operations.AddJobFlowStepsResponse;
import org.openapis.openapi.models.operations.AddJobFlowStepsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionOnFailureEnum;
import org.openapis.openapi.models.shared.AddJobFlowStepsInput;
import org.openapis.openapi.models.shared.HadoopJarStepConfig;
import org.openapis.openapi.models.shared.KeyValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StepConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddJobFlowStepsRequest req = new AddJobFlowStepsRequest(                new AddJobFlowStepsInput("iure",                 new org.openapis.openapi.models.shared.StepConfig[]{{
                                                add(new StepConfig(                new HadoopJarStepConfig("eum") {{
                                                                    args = new String[]{{
                                                                        add("ut"),
                                                                    }};
                                                                    mainClass = "perspiciatis";
                                                                    properties = new org.openapis.openapi.models.shared.KeyValue[]{{
                                                                        add(new KeyValue() {{
                                                                            key = "dicta";
                                                                            value = "impedit";
                                                                        }}),
                                                                        add(new KeyValue() {{
                                                                            key = "voluptatibus";
                                                                            value = "iste";
                                                                        }}),
                                                                        add(new KeyValue() {{
                                                                            key = "itaque";
                                                                            value = "alias";
                                                                        }}),
                                                                        add(new KeyValue() {{
                                                                            key = "nisi";
                                                                            value = "itaque";
                                                                        }}),
                                                                    }};
                                                                }};, "velit") {{
                                                    actionOnFailure = ActionOnFailureEnum.CONTINUE_;
                                                    hadoopJarStep = new HadoopJarStepConfig("illo") {{
                                                        args = new String[]{{
                                                            add("magnam"),
                                                            add("quibusdam"),
                                                        }};
                                                        jar = "inventore";
                                                        mainClass = "facere";
                                                        properties = new org.openapis.openapi.models.shared.KeyValue[]{{
                                                            add(new KeyValue() {{
                                                                key = "architecto";
                                                                value = "voluptatibus";
                                                            }}),
                                                            add(new KeyValue() {{
                                                                key = "quia";
                                                                value = "porro";
                                                            }}),
                                                            add(new KeyValue() {{
                                                                key = "aliquam";
                                                                value = "velit";
                                                            }}),
                                                        }};
                                                    }};
                                                    name = "Dr. Gina Jaskolski";
                                                }}),
                                            }}) {{
                                executionRoleArn = "laborum";
                            }};, AddJobFlowStepsXAmzTargetEnum.ELASTIC_MAP_REDUCE_ADD_JOB_FLOW_STEPS) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "iusto";
                xAmzDate = "sit";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "officia";
            }};            

            AddJobFlowStepsResponse res = sdk.sdk.addJobFlowSteps(req);

            if (res.addJobFlowStepsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addTags

Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsRequest;
import org.openapis.openapi.models.operations.AddTagsResponse;
import org.openapis.openapi.models.operations.AddTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsRequest req = new AddTagsRequest(                new AddTagsInput("ea",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "voluptas";
                                                    value = "facilis";
                                                }}),
                                                add(new Tag() {{
                                                    key = "placeat";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new Tag() {{
                                                    key = "expedita";
                                                    value = "deleniti";
                                                }}),
                                            }});, AddTagsXAmzTargetEnum.ELASTIC_MAP_REDUCE_ADD_TAGS) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "ullam";
                xAmzDate = "unde";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "impedit";
            }};            

            AddTagsResponse res = sdk.sdk.addTags(req);

            if (res.addTagsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelSteps

Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelStepsRequest;
import org.openapis.openapi.models.operations.CancelStepsResponse;
import org.openapis.openapi.models.operations.CancelStepsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelStepsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StepCancellationOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelStepsRequest req = new CancelStepsRequest(                new CancelStepsInput("corporis",                 new String[]{{
                                                add("error"),
                                                add("esse"),
                                                add("labore"),
                                            }}) {{
                                stepCancellationOption = StepCancellationOptionEnum.SEND_INTERRUPT;
                            }};, CancelStepsXAmzTargetEnum.ELASTIC_MAP_REDUCE_CANCEL_STEPS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "vitae";
                xAmzDate = "inventore";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "qui";
            }};            

            CancelStepsResponse res = sdk.sdk.cancelSteps(req);

            if (res.cancelStepsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSecurityConfiguration

Creates a security configuration, which is stored in the service and can be specified when a cluster is created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSecurityConfigurationRequest;
import org.openapis.openapi.models.operations.CreateSecurityConfigurationResponse;
import org.openapis.openapi.models.operations.CreateSecurityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSecurityConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSecurityConfigurationRequest req = new CreateSecurityConfigurationRequest(                new CreateSecurityConfigurationInput("ex", "nemo");, CreateSecurityConfigurationXAmzTargetEnum.ELASTIC_MAP_REDUCE_CREATE_SECURITY_CONFIGURATION) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "libero";
                xAmzCredential = "rem";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "odio";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "alias";
            }};            

            CreateSecurityConfigurationResponse res = sdk.sdk.createSecurityConfiguration(req);

            if (res.createSecurityConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStudio

Creates a new Amazon EMR Studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStudioRequest;
import org.openapis.openapi.models.operations.CreateStudioResponse;
import org.openapis.openapi.models.operations.CreateStudioXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthModeEnum;
import org.openapis.openapi.models.shared.CreateStudioInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStudioRequest req = new CreateStudioRequest(                new CreateStudioInput(AuthModeEnum.SSO, "quae", "quae", "modi", "neque",                 new String[]{{
                                                add("itaque"),
                                                add("et"),
                                            }}, "ipsum", "unde") {{
                                description = "nulla";
                                idpAuthUrl = "distinctio";
                                idpRelayStateParameterName = "maxime";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quia";
                                        value = "nostrum";
                                    }}),
                                }};
                                userRole = "omnis";
                            }};, CreateStudioXAmzTargetEnum.ELASTIC_MAP_REDUCE_CREATE_STUDIO) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "id";
                xAmzDate = "libero";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "quos";
            }};            

            CreateStudioResponse res = sdk.sdk.createStudio(req);

            if (res.createStudioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStudioSessionMapping

Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStudioSessionMappingRequest;
import org.openapis.openapi.models.operations.CreateStudioSessionMappingResponse;
import org.openapis.openapi.models.operations.CreateStudioSessionMappingXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateStudioSessionMappingInput;
import org.openapis.openapi.models.shared.IdentityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStudioSessionMappingRequest req = new CreateStudioSessionMappingRequest(                new CreateStudioSessionMappingInput(IdentityTypeEnum.USER, "iusto", "ipsa") {{
                                identityId = "voluptates";
                                identityName = "inventore";
                            }};, CreateStudioSessionMappingXAmzTargetEnum.ELASTIC_MAP_REDUCE_CREATE_STUDIO_SESSION_MAPPING) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dolore";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "autem";
            }};            

            CreateStudioSessionMappingResponse res = sdk.sdk.createStudioSessionMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSecurityConfiguration

Deletes a security configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSecurityConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteSecurityConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteSecurityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSecurityConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSecurityConfigurationRequest req = new DeleteSecurityConfigurationRequest(                new DeleteSecurityConfigurationInput("dolores");, DeleteSecurityConfigurationXAmzTargetEnum.ELASTIC_MAP_REDUCE_DELETE_SECURITY_CONFIGURATION) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "est";
                xAmzDate = "facere";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteSecurityConfigurationResponse res = sdk.sdk.deleteSecurityConfiguration(req);

            if (res.deleteSecurityConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStudio

Removes an Amazon EMR Studio from the Studio metadata store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStudioRequest;
import org.openapis.openapi.models.operations.DeleteStudioResponse;
import org.openapis.openapi.models.operations.DeleteStudioXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteStudioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStudioRequest req = new DeleteStudioRequest(                new DeleteStudioInput("necessitatibus");, DeleteStudioXAmzTargetEnum.ELASTIC_MAP_REDUCE_DELETE_STUDIO) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "sint";
                xAmzCredential = "ea";
                xAmzDate = "autem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "laudantium";
            }};            

            DeleteStudioResponse res = sdk.sdk.deleteStudio(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStudioSessionMapping

Removes a user or group from an Amazon EMR Studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStudioSessionMappingRequest;
import org.openapis.openapi.models.operations.DeleteStudioSessionMappingResponse;
import org.openapis.openapi.models.operations.DeleteStudioSessionMappingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteStudioSessionMappingInput;
import org.openapis.openapi.models.shared.IdentityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStudioSessionMappingRequest req = new DeleteStudioSessionMappingRequest(                new DeleteStudioSessionMappingInput(IdentityTypeEnum.GROUP, "voluptatibus") {{
                                identityId = "cum";
                                identityName = "at";
                            }};, DeleteStudioSessionMappingXAmzTargetEnum.ELASTIC_MAP_REDUCE_DELETE_STUDIO_SESSION_MAPPING) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quidem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "expedita";
            }};            

            DeleteStudioSessionMappingResponse res = sdk.sdk.deleteStudioSessionMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCluster

Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClusterRequest;
import org.openapis.openapi.models.operations.DescribeClusterResponse;
import org.openapis.openapi.models.operations.DescribeClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeClusterInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClusterRequest req = new DescribeClusterRequest(                new DescribeClusterInput("eos");, DescribeClusterXAmzTargetEnum.ELASTIC_MAP_REDUCE_DESCRIBE_CLUSTER) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "praesentium";
                xAmzDate = "odit";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "error";
            }};            

            DescribeClusterResponse res = sdk.sdk.describeCluster(req);

            if (res.describeClusterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeJobFlows~~

<p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobFlowsRequest;
import org.openapis.openapi.models.operations.DescribeJobFlowsResponse;
import org.openapis.openapi.models.operations.DescribeJobFlowsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeJobFlowsInput;
import org.openapis.openapi.models.shared.JobFlowExecutionStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobFlowsRequest req = new DescribeJobFlowsRequest(                new DescribeJobFlowsInput() {{
                                createdAfter = OffsetDateTime.parse("2022-01-28T23:50:43.870Z");
                                createdBefore = OffsetDateTime.parse("2022-06-08T12:41:53.360Z");
                                jobFlowIds = new String[]{{
                                    add("quis"),
                                    add("beatae"),
                                    add("unde"),
                                }};
                                jobFlowStates = new org.openapis.openapi.models.shared.JobFlowExecutionStateEnum[]{{
                                    add(JobFlowExecutionStateEnum.FAILED),
                                    add(JobFlowExecutionStateEnum.SHUTTING_DOWN),
                                }};
                            }};, DescribeJobFlowsXAmzTargetEnum.ELASTIC_MAP_REDUCE_DESCRIBE_JOB_FLOWS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "numquam";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "at";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DescribeJobFlowsResponse res = sdk.sdk.describeJobFlows(req);

            if (res.describeJobFlowsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeNotebookExecution

Provides details of a notebook execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeNotebookExecutionRequest;
import org.openapis.openapi.models.operations.DescribeNotebookExecutionResponse;
import org.openapis.openapi.models.operations.DescribeNotebookExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeNotebookExecutionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeNotebookExecutionRequest req = new DescribeNotebookExecutionRequest(                new DescribeNotebookExecutionInput("necessitatibus");, DescribeNotebookExecutionXAmzTargetEnum.ELASTIC_MAP_REDUCE_DESCRIBE_NOTEBOOK_EXECUTION) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "expedita";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "placeat";
            }};            

            DescribeNotebookExecutionResponse res = sdk.sdk.describeNotebookExecution(req);

            if (res.describeNotebookExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReleaseLabel

Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReleaseLabelRequest;
import org.openapis.openapi.models.operations.DescribeReleaseLabelResponse;
import org.openapis.openapi.models.operations.DescribeReleaseLabelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReleaseLabelInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReleaseLabelRequest req = new DescribeReleaseLabelRequest(                new DescribeReleaseLabelInput() {{
                                maxResults = 204072L;
                                nextToken = "in";
                                releaseLabel = "minus";
                            }};, DescribeReleaseLabelXAmzTargetEnum.ELASTIC_MAP_REDUCE_DESCRIBE_RELEASE_LABEL) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "corporis";
                xAmzDate = "magnam";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "tempore";
            }};            

            DescribeReleaseLabelResponse res = sdk.sdk.describeReleaseLabel(req);

            if (res.describeReleaseLabelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSecurityConfiguration

Provides the details of a security configuration by returning the configuration JSON.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSecurityConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeSecurityConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeSecurityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSecurityConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSecurityConfigurationRequest req = new DescribeSecurityConfigurationRequest(                new DescribeSecurityConfigurationInput("libero");, DescribeSecurityConfigurationXAmzTargetEnum.ELASTIC_MAP_REDUCE_DESCRIBE_SECURITY_CONFIGURATION) {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "labore";
                xAmzCredential = "totam";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "velit";
            }};            

            DescribeSecurityConfigurationResponse res = sdk.sdk.describeSecurityConfiguration(req);

            if (res.describeSecurityConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStep

Provides more detail about the cluster step.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStepRequest;
import org.openapis.openapi.models.operations.DescribeStepResponse;
import org.openapis.openapi.models.operations.DescribeStepXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStepInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStepRequest req = new DescribeStepRequest(                new DescribeStepInput("fuga", "nostrum");, DescribeStepXAmzTargetEnum.ELASTIC_MAP_REDUCE_DESCRIBE_STEP) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "delectus";
                xAmzDate = "tempore";
                xAmzSecurityToken = "vero";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "repellat";
            }};            

            DescribeStepResponse res = sdk.sdk.describeStep(req);

            if (res.describeStepOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStudio

Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStudioRequest;
import org.openapis.openapi.models.operations.DescribeStudioResponse;
import org.openapis.openapi.models.operations.DescribeStudioXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStudioInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStudioRequest req = new DescribeStudioRequest(                new DescribeStudioInput("nemo");, DescribeStudioXAmzTargetEnum.ELASTIC_MAP_REDUCE_DESCRIBE_STUDIO) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "odio";
                xAmzDate = "minima";
                xAmzSecurityToken = "in";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "excepturi";
            }};            

            DescribeStudioResponse res = sdk.sdk.describeStudio(req);

            if (res.describeStudioOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutoTerminationPolicy

Returns the auto-termination policy for an Amazon EMR cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutoTerminationPolicyRequest;
import org.openapis.openapi.models.operations.GetAutoTerminationPolicyResponse;
import org.openapis.openapi.models.operations.GetAutoTerminationPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAutoTerminationPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAutoTerminationPolicyRequest req = new GetAutoTerminationPolicyRequest(                new GetAutoTerminationPolicyInput("error");, GetAutoTerminationPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_GET_AUTO_TERMINATION_POLICY) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "voluptate";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "optio";
            }};            

            GetAutoTerminationPolicyResponse res = sdk.sdk.getAutoTerminationPolicy(req);

            if (res.getAutoTerminationPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockPublicAccessConfiguration

Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockPublicAccessConfigurationRequest;
import org.openapis.openapi.models.operations.GetBlockPublicAccessConfigurationResponse;
import org.openapis.openapi.models.operations.GetBlockPublicAccessConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlockPublicAccessConfigurationRequest req = new GetBlockPublicAccessConfigurationRequest(                new java.util.HashMap<String, Object>() {{
                                put("commodi", "officiis");
                                put("placeat", "quidem");
                            }}, GetBlockPublicAccessConfigurationXAmzTargetEnum.ELASTIC_MAP_REDUCE_GET_BLOCK_PUBLIC_ACCESS_CONFIGURATION) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolorem";
                xAmzDate = "modi";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "vero";
            }};            

            GetBlockPublicAccessConfigurationResponse res = sdk.sdk.getBlockPublicAccessConfiguration(req);

            if (res.getBlockPublicAccessConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterSessionCredentials

Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterSessionCredentialsRequest;
import org.openapis.openapi.models.operations.GetClusterSessionCredentialsResponse;
import org.openapis.openapi.models.operations.GetClusterSessionCredentialsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetClusterSessionCredentialsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClusterSessionCredentialsRequest req = new GetClusterSessionCredentialsRequest(                new GetClusterSessionCredentialsInput("repudiandae", "cum");, GetClusterSessionCredentialsXAmzTargetEnum.ELASTIC_MAP_REDUCE_GET_CLUSTER_SESSION_CREDENTIALS) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "earum";
                xAmzCredential = "veniam";
                xAmzDate = "animi";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "dicta";
            }};            

            GetClusterSessionCredentialsResponse res = sdk.sdk.getClusterSessionCredentials(req);

            if (res.getClusterSessionCredentialsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getManagedScalingPolicy

Fetches the attached managed scaling policy for an Amazon EMR cluster. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetManagedScalingPolicyRequest;
import org.openapis.openapi.models.operations.GetManagedScalingPolicyResponse;
import org.openapis.openapi.models.operations.GetManagedScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetManagedScalingPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetManagedScalingPolicyRequest req = new GetManagedScalingPolicyRequest(                new GetManagedScalingPolicyInput("necessitatibus");, GetManagedScalingPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_GET_MANAGED_SCALING_POLICY) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ducimus";
                xAmzDate = "maiores";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "laboriosam";
            }};            

            GetManagedScalingPolicyResponse res = sdk.sdk.getManagedScalingPolicy(req);

            if (res.getManagedScalingPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStudioSessionMapping

Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStudioSessionMappingRequest;
import org.openapis.openapi.models.operations.GetStudioSessionMappingResponse;
import org.openapis.openapi.models.operations.GetStudioSessionMappingXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetStudioSessionMappingInput;
import org.openapis.openapi.models.shared.IdentityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStudioSessionMappingRequest req = new GetStudioSessionMappingRequest(                new GetStudioSessionMappingInput(IdentityTypeEnum.GROUP, "excepturi") {{
                                identityId = "occaecati";
                                identityName = "nemo";
                            }};, GetStudioSessionMappingXAmzTargetEnum.ELASTIC_MAP_REDUCE_GET_STUDIO_SESSION_MAPPING) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "doloribus";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "hic";
            }};            

            GetStudioSessionMappingResponse res = sdk.sdk.getStudioSessionMapping(req);

            if (res.getStudioSessionMappingOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBootstrapActions

Provides information about the bootstrap actions associated with a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBootstrapActionsRequest;
import org.openapis.openapi.models.operations.ListBootstrapActionsResponse;
import org.openapis.openapi.models.operations.ListBootstrapActionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBootstrapActionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBootstrapActionsRequest req = new ListBootstrapActionsRequest(                new ListBootstrapActionsInput("quas") {{
                                marker = "totam";
                            }};, ListBootstrapActionsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_BOOTSTRAP_ACTIONS) {{
                marker = "molestias";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "saepe";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quos";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "assumenda";
            }};            

            ListBootstrapActionsResponse res = sdk.sdk.listBootstrapActions(req);

            if (res.listBootstrapActionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusters

Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClustersRequest;
import org.openapis.openapi.models.operations.ListClustersResponse;
import org.openapis.openapi.models.operations.ListClustersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClusterStateEnum;
import org.openapis.openapi.models.shared.ListClustersInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClustersRequest req = new ListClustersRequest(                new ListClustersInput() {{
                                clusterStates = new org.openapis.openapi.models.shared.ClusterStateEnum[]{{
                                    add(ClusterStateEnum.BOOTSTRAPPING),
                                    add(ClusterStateEnum.STARTING),
                                    add(ClusterStateEnum.TERMINATED_WITH_ERRORS),
                                }};
                                createdAfter = OffsetDateTime.parse("2020-10-11T08:15:47.736Z");
                                createdBefore = OffsetDateTime.parse("2022-10-06T03:01:15.693Z");
                                marker = "saepe";
                            }};, ListClustersXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_CLUSTERS) {{
                marker = "deserunt";
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veniam";
                xAmzDate = "libero";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "molestiae";
            }};            

            ListClustersResponse res = sdk.sdk.listClusters(req);

            if (res.listClustersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstanceFleets

<p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstanceFleetsRequest;
import org.openapis.openapi.models.operations.ListInstanceFleetsResponse;
import org.openapis.openapi.models.operations.ListInstanceFleetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListInstanceFleetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstanceFleetsRequest req = new ListInstanceFleetsRequest(                new ListInstanceFleetsInput("possimus") {{
                                marker = "non";
                            }};, ListInstanceFleetsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_INSTANCE_FLEETS) {{
                marker = "magnam";
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "asperiores";
                xAmzDate = "veniam";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "laudantium";
            }};            

            ListInstanceFleetsResponse res = sdk.sdk.listInstanceFleets(req);

            if (res.listInstanceFleetsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstanceGroups

Provides all available details about the instance groups in a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstanceGroupsRequest;
import org.openapis.openapi.models.operations.ListInstanceGroupsResponse;
import org.openapis.openapi.models.operations.ListInstanceGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListInstanceGroupsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstanceGroupsRequest req = new ListInstanceGroupsRequest(                new ListInstanceGroupsInput("pariatur") {{
                                marker = "amet";
                            }};, ListInstanceGroupsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_INSTANCE_GROUPS) {{
                marker = "exercitationem";
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "velit";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quaerat";
            }};            

            ListInstanceGroupsResponse res = sdk.sdk.listInstanceGroups(req);

            if (res.listInstanceGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstances

Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstancesRequest;
import org.openapis.openapi.models.operations.ListInstancesResponse;
import org.openapis.openapi.models.operations.ListInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.InstanceFleetTypeEnum;
import org.openapis.openapi.models.shared.InstanceGroupTypeEnum;
import org.openapis.openapi.models.shared.InstanceStateEnum;
import org.openapis.openapi.models.shared.ListInstancesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstancesRequest req = new ListInstancesRequest(                new ListInstancesInput("distinctio") {{
                                instanceFleetId = "nisi";
                                instanceFleetType = InstanceFleetTypeEnum.CORE;
                                instanceGroupId = "nisi";
                                instanceGroupTypes = new org.openapis.openapi.models.shared.InstanceGroupTypeEnum[]{{
                                    add(InstanceGroupTypeEnum.TASK),
                                    add(InstanceGroupTypeEnum.TASK),
                                    add(InstanceGroupTypeEnum.TASK),
                                }};
                                instanceStates = new org.openapis.openapi.models.shared.InstanceStateEnum[]{{
                                    add(InstanceStateEnum.PROVISIONING),
                                }};
                                marker = "voluptatibus";
                            }};, ListInstancesXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_INSTANCES) {{
                marker = "voluptatibus";
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "labore";
                xAmzDate = "rerum";
                xAmzSecurityToken = "eos";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "nostrum";
            }};            

            ListInstancesResponse res = sdk.sdk.listInstances(req);

            if (res.listInstancesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotebookExecutions

Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotebookExecutionsRequest;
import org.openapis.openapi.models.operations.ListNotebookExecutionsResponse;
import org.openapis.openapi.models.operations.ListNotebookExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListNotebookExecutionsInput;
import org.openapis.openapi.models.shared.NotebookExecutionStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNotebookExecutionsRequest req = new ListNotebookExecutionsRequest(                new ListNotebookExecutionsInput() {{
                                editorId = "iusto";
                                from = OffsetDateTime.parse("2021-12-15T19:28:43.232Z");
                                marker = "eligendi";
                                status = NotebookExecutionStatusEnum.STOPPING;
                                to = OffsetDateTime.parse("2021-03-22T16:52:21.456Z");
                            }};, ListNotebookExecutionsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_NOTEBOOK_EXECUTIONS) {{
                marker = "ducimus";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "error";
                xAmzDate = "porro";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "esse";
            }};            

            ListNotebookExecutionsResponse res = sdk.sdk.listNotebookExecutions(req);

            if (res.listNotebookExecutionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReleaseLabels

Retrieves release labels of EMR services in the region where the API is called.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReleaseLabelsRequest;
import org.openapis.openapi.models.operations.ListReleaseLabelsResponse;
import org.openapis.openapi.models.operations.ListReleaseLabelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListReleaseLabelsInput;
import org.openapis.openapi.models.shared.ReleaseLabelFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReleaseLabelsRequest req = new ListReleaseLabelsRequest(                new ListReleaseLabelsInput() {{
                                filters = new ReleaseLabelFilter() {{
                                    application = "ad";
                                    prefix = "aspernatur";
                                }};;
                                maxResults = 316501L;
                                nextToken = "delectus";
                            }};, ListReleaseLabelsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_RELEASE_LABELS) {{
                maxResults = "iusto";
                nextToken = "dignissimos";
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illo";
                xAmzCredential = "ab";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "tempore";
            }};            

            ListReleaseLabelsResponse res = sdk.sdk.listReleaseLabels(req);

            if (res.listReleaseLabelsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSecurityConfigurations

Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSecurityConfigurationsRequest;
import org.openapis.openapi.models.operations.ListSecurityConfigurationsResponse;
import org.openapis.openapi.models.operations.ListSecurityConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSecurityConfigurationsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSecurityConfigurationsRequest req = new ListSecurityConfigurationsRequest(                new ListSecurityConfigurationsInput() {{
                                marker = "eos";
                            }};, ListSecurityConfigurationsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_SECURITY_CONFIGURATIONS) {{
                marker = "reiciendis";
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "praesentium";
                xAmzDate = "nemo";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "sequi";
            }};            

            ListSecurityConfigurationsResponse res = sdk.sdk.listSecurityConfigurations(req);

            if (res.listSecurityConfigurationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSteps

Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStepsRequest;
import org.openapis.openapi.models.operations.ListStepsResponse;
import org.openapis.openapi.models.operations.ListStepsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListStepsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StepStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStepsRequest req = new ListStepsRequest(                new ListStepsInput("deleniti") {{
                                marker = "illo";
                                stepIds = new String[]{{
                                    add("assumenda"),
                                    add("aliquam"),
                                }};
                                stepStates = new org.openapis.openapi.models.shared.StepStateEnum[]{{
                                    add(StepStateEnum.CANCELLED),
                                    add(StepStateEnum.COMPLETED),
                                    add(StepStateEnum.INTERRUPTED),
                                    add(StepStateEnum.PENDING),
                                }};
                            }};, ListStepsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_STEPS) {{
                marker = "maxime";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "nam";
                xAmzCredential = "expedita";
                xAmzDate = "quas";
                xAmzSecurityToken = "provident";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "rerum";
            }};            

            ListStepsResponse res = sdk.sdk.listSteps(req);

            if (res.listStepsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStudioSessionMappings

Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStudioSessionMappingsRequest;
import org.openapis.openapi.models.operations.ListStudioSessionMappingsResponse;
import org.openapis.openapi.models.operations.ListStudioSessionMappingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.IdentityTypeEnum;
import org.openapis.openapi.models.shared.ListStudioSessionMappingsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStudioSessionMappingsRequest req = new ListStudioSessionMappingsRequest(                new ListStudioSessionMappingsInput() {{
                                identityType = IdentityTypeEnum.USER;
                                marker = "vero";
                                studioId = "similique";
                            }};, ListStudioSessionMappingsXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_STUDIO_SESSION_MAPPINGS) {{
                marker = "repellendus";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "commodi";
                xAmzDate = "impedit";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatem";
            }};            

            ListStudioSessionMappingsResponse res = sdk.sdk.listStudioSessionMappings(req);

            if (res.listStudioSessionMappingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStudios

Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStudiosRequest;
import org.openapis.openapi.models.operations.ListStudiosResponse;
import org.openapis.openapi.models.operations.ListStudiosXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListStudiosInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStudiosRequest req = new ListStudiosRequest(                new ListStudiosInput() {{
                                marker = "quae";
                            }};, ListStudiosXAmzTargetEnum.ELASTIC_MAP_REDUCE_LIST_STUDIOS) {{
                marker = "amet";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "quidem";
                xAmzDate = "cum";
                xAmzSecurityToken = "amet";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "dicta";
            }};            

            ListStudiosResponse res = sdk.sdk.listStudios(req);

            if (res.listStudiosOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyCluster

Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyClusterRequest;
import org.openapis.openapi.models.operations.ModifyClusterResponse;
import org.openapis.openapi.models.operations.ModifyClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifyClusterInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyClusterRequest req = new ModifyClusterRequest(                new ModifyClusterInput("doloremque") {{
                                stepConcurrencyLevel = 938412L;
                            }};, ModifyClusterXAmzTargetEnum.ELASTIC_MAP_REDUCE_MODIFY_CLUSTER) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "amet";
                xAmzCredential = "provident";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "repudiandae";
            }};            

            ModifyClusterResponse res = sdk.sdk.modifyCluster(req);

            if (res.modifyClusterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyInstanceFleet

<p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyInstanceFleetRequest;
import org.openapis.openapi.models.operations.ModifyInstanceFleetResponse;
import org.openapis.openapi.models.operations.ModifyInstanceFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.InstanceFleetModifyConfig;
import org.openapis.openapi.models.shared.InstanceFleetResizingSpecifications;
import org.openapis.openapi.models.shared.ModifyInstanceFleetInput;
import org.openapis.openapi.models.shared.OnDemandResizingSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpotResizingSpecification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyInstanceFleetRequest req = new ModifyInstanceFleetRequest(                new ModifyInstanceFleetInput("nemo",                 new InstanceFleetModifyConfig("molestiae") {{
                                                resizeSpecifications = new InstanceFleetResizingSpecifications() {{
                                                    onDemandResizeSpecification = new OnDemandResizingSpecification(930840L);;
                                                    spotResizeSpecification = new SpotResizingSpecification(708771L);;
                                                }};;
                                                targetOnDemandCapacity = 545779L;
                                                targetSpotCapacity = 43975L;
                                            }};);, ModifyInstanceFleetXAmzTargetEnum.ELASTIC_MAP_REDUCE_MODIFY_INSTANCE_FLEET) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "eos";
                xAmzDate = "totam";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "velit";
            }};            

            ModifyInstanceFleetResponse res = sdk.sdk.modifyInstanceFleet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyInstanceGroups

ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyInstanceGroupsRequest;
import org.openapis.openapi.models.operations.ModifyInstanceGroupsResponse;
import org.openapis.openapi.models.operations.ModifyInstanceGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.InstanceGroupModifyConfig;
import org.openapis.openapi.models.shared.InstanceResizePolicy;
import org.openapis.openapi.models.shared.ModifyInstanceGroupsInput;
import org.openapis.openapi.models.shared.ReconfigurationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShrinkPolicy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyInstanceGroupsRequest req = new ModifyInstanceGroupsRequest(                new ModifyInstanceGroupsInput() {{
                                clusterId = "sunt";
                                instanceGroups = new org.openapis.openapi.models.shared.InstanceGroupModifyConfig[]{{
                                    add(new InstanceGroupModifyConfig("natus") {{
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{
                                                classification = "occaecati";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("at", "labore");
                                                }};
                                            }}),
                                        }};
                                        ec2InstanceIdsToTerminate = new String[]{{
                                            add("esse"),
                                            add("voluptatem"),
                                            add("perferendis"),
                                            add("rerum"),
                                        }};
                                        instanceCount = 411615L;
                                        instanceGroupId = "aperiam";
                                        reconfigurationType = ReconfigurationTypeEnum.OVERWRITE;
                                        shrinkPolicy = new ShrinkPolicy() {{
                                            decommissionTimeout = 998026L;
                                            instanceResizePolicy = new InstanceResizePolicy() {{
                                                instanceTerminationTimeout = 243678L;
                                                instancesToProtect = new String[]{{
                                                    add("provident"),
                                                    add("consectetur"),
                                                    add("eligendi"),
                                                    add("dignissimos"),
                                                }};
                                                instancesToTerminate = new String[]{{
                                                    add("soluta"),
                                                }};
                                            }};
                                        }};
                                    }}),
                                    add(new InstanceGroupModifyConfig("minima") {{
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{
                                                classification = "officia";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("aspernatur", "quo");
                                                    put("itaque", "illum");
                                                    put("laborum", "dignissimos");
                                                    put("vero", "qui");
                                                }};
                                            }}),
                                            add(new Configuration() {{
                                                classification = "consectetur";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("explicabo", "exercitationem");
                                                }};
                                            }}),
                                            add(new Configuration() {{
                                                classification = "nihil";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("illo", "hic");
                                                }};
                                            }}),
                                            add(new Configuration() {{
                                                classification = "deserunt";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("distinctio", "in");
                                                    put("exercitationem", "labore");
                                                }};
                                            }}),
                                        }};
                                        ec2InstanceIdsToTerminate = new String[]{{
                                            add("repudiandae"),
                                            add("modi"),
                                        }};
                                        instanceCount = 450209L;
                                        instanceGroupId = "explicabo";
                                        reconfigurationType = ReconfigurationTypeEnum.MERGE;
                                        shrinkPolicy = new ShrinkPolicy() {{
                                            decommissionTimeout = 525809L;
                                            instanceResizePolicy = new InstanceResizePolicy() {{
                                                instanceTerminationTimeout = 44016L;
                                                instancesToProtect = new String[]{{
                                                    add("deleniti"),
                                                }};
                                                instancesToTerminate = new String[]{{
                                                    add("voluptate"),
                                                    add("similique"),
                                                }};
                                            }};
                                        }};
                                    }}),
                                    add(new InstanceGroupModifyConfig("aut") {{
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{
                                                classification = "magnam";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("eum", "nesciunt");
                                                    put("mollitia", "dignissimos");
                                                }};
                                            }}),
                                            add(new Configuration() {{
                                                classification = "fugiat";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("veniam", "reiciendis");
                                                    put("ab", "modi");
                                                }};
                                            }}),
                                            add(new Configuration() {{
                                                classification = "aut";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("odio", "commodi");
                                                    put("numquam", "dolorum");
                                                    put("possimus", "voluptate");
                                                    put("consectetur", "nesciunt");
                                                }};
                                            }}),
                                        }};
                                        ec2InstanceIdsToTerminate = new String[]{{
                                            add("itaque"),
                                            add("minus"),
                                        }};
                                        instanceCount = 122662L;
                                        instanceGroupId = "distinctio";
                                        reconfigurationType = ReconfigurationTypeEnum.OVERWRITE;
                                        shrinkPolicy = new ShrinkPolicy() {{
                                            decommissionTimeout = 558051L;
                                            instanceResizePolicy = new InstanceResizePolicy() {{
                                                instanceTerminationTimeout = 91728L;
                                                instancesToProtect = new String[]{{
                                                    add("amet"),
                                                    add("autem"),
                                                    add("fuga"),
                                                }};
                                                instancesToTerminate = new String[]{{
                                                    add("rem"),
                                                }};
                                            }};
                                        }};
                                    }}),
                                    add(new InstanceGroupModifyConfig("ducimus") {{
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{
                                                classification = "laudantium";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("quae", "eaque");
                                                }};
                                            }}),
                                            add(new Configuration() {{
                                                classification = "saepe";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("nulla", "officia");
                                                    put("sed", "voluptatem");
                                                    put("alias", "eveniet");
                                                }};
                                            }}),
                                            add(new Configuration() {{
                                                classification = "hic";
                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                    add(new Configuration() {{}}),
                                                }};
                                                properties = new java.util.HashMap<String, String>() {{
                                                    put("qui", "qui");
                                                    put("necessitatibus", "harum");
                                                }};
                                            }}),
                                        }};
                                        ec2InstanceIdsToTerminate = new String[]{{
                                            add("beatae"),
                                        }};
                                        instanceCount = 397988L;
                                        instanceGroupId = "modi";
                                        reconfigurationType = ReconfigurationTypeEnum.MERGE;
                                        shrinkPolicy = new ShrinkPolicy() {{
                                            decommissionTimeout = 975095L;
                                            instanceResizePolicy = new InstanceResizePolicy() {{
                                                instanceTerminationTimeout = 562948L;
                                                instancesToProtect = new String[]{{
                                                    add("libero"),
                                                    add("totam"),
                                                    add("sequi"),
                                                }};
                                                instancesToTerminate = new String[]{{
                                                    add("ea"),
                                                    add("impedit"),
                                                }};
                                            }};
                                        }};
                                    }}),
                                }};
                            }};, ModifyInstanceGroupsXAmzTargetEnum.ELASTIC_MAP_REDUCE_MODIFY_INSTANCE_GROUPS) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "velit";
                xAmzCredential = "reiciendis";
                xAmzDate = "repellat";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "natus";
            }};            

            ModifyInstanceGroupsResponse res = sdk.sdk.modifyInstanceGroups(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAutoScalingPolicy

Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAutoScalingPolicyRequest;
import org.openapis.openapi.models.operations.PutAutoScalingPolicyResponse;
import org.openapis.openapi.models.operations.PutAutoScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdjustmentTypeEnum;
import org.openapis.openapi.models.shared.AutoScalingPolicy;
import org.openapis.openapi.models.shared.CloudWatchAlarmDefinition;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.MarketTypeEnum;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.PutAutoScalingPolicyInput;
import org.openapis.openapi.models.shared.ScalingAction;
import org.openapis.openapi.models.shared.ScalingConstraints;
import org.openapis.openapi.models.shared.ScalingRule;
import org.openapis.openapi.models.shared.ScalingTrigger;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleScalingPolicyConfiguration;
import org.openapis.openapi.models.shared.StatisticEnum;
import org.openapis.openapi.models.shared.UnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAutoScalingPolicyRequest req = new PutAutoScalingPolicyRequest(                new PutAutoScalingPolicyInput(                new AutoScalingPolicy(                new ScalingConstraints(42906L, 392967L);,                 new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(163684L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                    coolDown = 441374L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                }};, "eius",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "rem", 978154L, 351.6) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "saepe";
                                                                                                            value = "neque";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "facere";
                                                                                                            value = "aliquam";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 552581L;
                                                                                                    namespace = "doloribus";
                                                                                                    statistic = StatisticEnum.MAXIMUM;
                                                                                                    unit = UnitEnum.MEGA_BYTES_PER_SECOND;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(354225L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                        coolDown = 120277L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.SPOT;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(157884L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                            coolDown = 251627L;
                                                                            scalingAdjustment = 524577L;
                                                                        }};
                                                                    }};
                                                                    description = "voluptatibus";
                                                                    name = "Mr. Scott Torp";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "porro", 883819L, 5189.9) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "ab";
                                                                                                value = "sint";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "nihil";
                                                                                                value = "esse";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "iure";
                                                                                                value = "odio";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "nesciunt";
                                                                                                value = "debitis";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 423588L;
                                                                                        namespace = "neque";
                                                                                        statistic = StatisticEnum.AVERAGE;
                                                                                        unit = UnitEnum.KILO_BITS;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "assumenda", 876840L, 9851.09) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN_OR_EQUAL;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "perferendis";
                                                                                    value = "facilis";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "reiciendis";
                                                                                    value = "a";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "iste";
                                                                                    value = "dicta";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 552439L;
                                                                            metricName = "ullam";
                                                                            namespace = "dolore";
                                                                            period = 266284L;
                                                                            statistic = StatisticEnum.MAXIMUM;
                                                                            threshold = 8074.19;
                                                                            unit = UnitEnum.GIGA_BYTES;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(166289L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                    coolDown = 240490L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                }};, "dolor",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "expedita", 706411L, 7696.34) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "nemo";
                                                                                                            value = "culpa";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 159393L;
                                                                                                    namespace = "amet";
                                                                                                    statistic = StatisticEnum.MINIMUM;
                                                                                                    unit = UnitEnum.GIGA_BYTES;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(74895L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                        coolDown = 363214L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.SPOT;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(630832L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                            coolDown = 110522L;
                                                                            scalingAdjustment = 201096L;
                                                                        }};
                                                                    }};
                                                                    description = "doloribus";
                                                                    name = "Mrs. Stuart Gorczany";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "in", 329651L, 4031.47) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "ab";
                                                                                                value = "beatae";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "hic";
                                                                                                value = "nisi";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "quisquam";
                                                                                                value = "dolor";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "ducimus";
                                                                                                value = "fuga";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 326903L;
                                                                                        namespace = "architecto";
                                                                                        statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                        unit = UnitEnum.KILO_BITS;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "numquam", 947822L, 2367.9) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN_OR_EQUAL;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "quidem";
                                                                                    value = "nesciunt";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 412433L;
                                                                            metricName = "sapiente";
                                                                            namespace = "consequuntur";
                                                                            period = 330440L;
                                                                            statistic = StatisticEnum.MAXIMUM;
                                                                            threshold = 6383.9;
                                                                            unit = UnitEnum.COUNT;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(697330L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 389548L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                }};, "modi",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "hic", 736985L, 1355.48) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "nam";
                                                                                                            value = "incidunt";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "recusandae";
                                                                                                            value = "quod";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "id";
                                                                                                            value = "saepe";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 423054L;
                                                                                                    namespace = "quo";
                                                                                                    statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                                    unit = UnitEnum.KILO_BITS_PER_SECOND;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(316550L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                        coolDown = 826806L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.ON_DEMAND;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(788661L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                            coolDown = 932250L;
                                                                            scalingAdjustment = 955569L;
                                                                        }};
                                                                    }};
                                                                    description = "officiis";
                                                                    name = "Miss Linda Nader";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "recusandae", 246772L, 2991.53) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "laboriosam";
                                                                                                value = "sed";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "odio";
                                                                                                value = "natus";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 588152L;
                                                                                        namespace = "cum";
                                                                                        statistic = StatisticEnum.MAXIMUM;
                                                                                        unit = UnitEnum.GIGA_BYTES_PER_SECOND;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "iure", 842402L, 7986.9) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "vel";
                                                                                    value = "perspiciatis";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 892708L;
                                                                            metricName = "ullam";
                                                                            namespace = "architecto";
                                                                            period = 33771L;
                                                                            statistic = StatisticEnum.SAMPLE_COUNT;
                                                                            threshold = 828.76;
                                                                            unit = UnitEnum.COUNT;
                                                                        }};
                                                                    }};
                                                                }}),
                                                            }});, "nemo", "illum");, PutAutoScalingPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_PUT_AUTO_SCALING_POLICY) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "non";
                xAmzCredential = "mollitia";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "pariatur";
            }};            

            PutAutoScalingPolicyResponse res = sdk.sdk.putAutoScalingPolicy(req);

            if (res.putAutoScalingPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAutoTerminationPolicy

<note> <p>Auto-termination is supported in Amazon EMR versions 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAutoTerminationPolicyRequest;
import org.openapis.openapi.models.operations.PutAutoTerminationPolicyResponse;
import org.openapis.openapi.models.operations.PutAutoTerminationPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoTerminationPolicy;
import org.openapis.openapi.models.shared.PutAutoTerminationPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAutoTerminationPolicyRequest req = new PutAutoTerminationPolicyRequest(                new PutAutoTerminationPolicyInput("facere") {{
                                autoTerminationPolicy = new AutoTerminationPolicy() {{
                                    idleTimeout = 674683L;
                                }};;
                            }};, PutAutoTerminationPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_PUT_AUTO_TERMINATION_POLICY) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "incidunt";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "suscipit";
            }};            

            PutAutoTerminationPolicyResponse res = sdk.sdk.putAutoTerminationPolicy(req);

            if (res.putAutoTerminationPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBlockPublicAccessConfiguration

Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBlockPublicAccessConfigurationRequest;
import org.openapis.openapi.models.operations.PutBlockPublicAccessConfigurationResponse;
import org.openapis.openapi.models.operations.PutBlockPublicAccessConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.BlockPublicAccessConfiguration;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.PutBlockPublicAccessConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutBlockPublicAccessConfigurationRequest req = new PutBlockPublicAccessConfigurationRequest(                new PutBlockPublicAccessConfigurationInput(                new BlockPublicAccessConfiguration(false) {{
                                                permittedPublicSecurityGroupRuleRanges = new org.openapis.openapi.models.shared.PortRange[]{{
                                                    add(new PortRange(577413L) {{
                                                        maxRange = 672889L;
                                                        minRange = 668218L;
                                                    }}),
                                                    add(new PortRange(19462L) {{
                                                        maxRange = 286716L;
                                                        minRange = 777378L;
                                                    }}),
                                                    add(new PortRange(301309L) {{
                                                        maxRange = 143528L;
                                                        minRange = 399222L;
                                                    }}),
                                                }};
                                            }};);, PutBlockPublicAccessConfigurationXAmzTargetEnum.ELASTIC_MAP_REDUCE_PUT_BLOCK_PUBLIC_ACCESS_CONFIGURATION) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "hic";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "nulla";
            }};            

            PutBlockPublicAccessConfigurationResponse res = sdk.sdk.putBlockPublicAccessConfiguration(req);

            if (res.putBlockPublicAccessConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putManagedScalingPolicy

Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutManagedScalingPolicyRequest;
import org.openapis.openapi.models.operations.PutManagedScalingPolicyResponse;
import org.openapis.openapi.models.operations.PutManagedScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputeLimits;
import org.openapis.openapi.models.shared.ComputeLimitsUnitTypeEnum;
import org.openapis.openapi.models.shared.ManagedScalingPolicy;
import org.openapis.openapi.models.shared.PutManagedScalingPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutManagedScalingPolicyRequest req = new PutManagedScalingPolicyRequest(                new PutManagedScalingPolicyInput("mollitia",                 new ManagedScalingPolicy() {{
                                                computeLimits = new ComputeLimits(298613L, 344289L, ComputeLimitsUnitTypeEnum.INSTANCES) {{
                                                    maximumCoreCapacityUnits = 548849L;
                                                    maximumOnDemandCapacityUnits = 684799L;
                                                }};;
                                            }};);, PutManagedScalingPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_PUT_MANAGED_SCALING_POLICY) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "quasi";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "quod";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "doloremque";
            }};            

            PutManagedScalingPolicyResponse res = sdk.sdk.putManagedScalingPolicy(req);

            if (res.putManagedScalingPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAutoScalingPolicy

Removes an automatic scaling policy from a specified instance group within an EMR cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAutoScalingPolicyRequest;
import org.openapis.openapi.models.operations.RemoveAutoScalingPolicyResponse;
import org.openapis.openapi.models.operations.RemoveAutoScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveAutoScalingPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveAutoScalingPolicyRequest req = new RemoveAutoScalingPolicyRequest(                new RemoveAutoScalingPolicyInput("facere", "necessitatibus");, RemoveAutoScalingPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_REMOVE_AUTO_SCALING_POLICY) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "eaque";
                xAmzDate = "architecto";
                xAmzSecurityToken = "similique";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "blanditiis";
            }};            

            RemoveAutoScalingPolicyResponse res = sdk.sdk.removeAutoScalingPolicy(req);

            if (res.removeAutoScalingPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAutoTerminationPolicy

Removes an auto-termination policy from an Amazon EMR cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAutoTerminationPolicyRequest;
import org.openapis.openapi.models.operations.RemoveAutoTerminationPolicyResponse;
import org.openapis.openapi.models.operations.RemoveAutoTerminationPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveAutoTerminationPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveAutoTerminationPolicyRequest req = new RemoveAutoTerminationPolicyRequest(                new RemoveAutoTerminationPolicyInput("magni");, RemoveAutoTerminationPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_REMOVE_AUTO_TERMINATION_POLICY) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "sed";
                xAmzCredential = "necessitatibus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "a";
            }};            

            RemoveAutoTerminationPolicyResponse res = sdk.sdk.removeAutoTerminationPolicy(req);

            if (res.removeAutoTerminationPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeManagedScalingPolicy

 Removes a managed scaling policy from a specified EMR cluster. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveManagedScalingPolicyRequest;
import org.openapis.openapi.models.operations.RemoveManagedScalingPolicyResponse;
import org.openapis.openapi.models.operations.RemoveManagedScalingPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveManagedScalingPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveManagedScalingPolicyRequest req = new RemoveManagedScalingPolicyRequest(                new RemoveManagedScalingPolicyInput("laudantium");, RemoveManagedScalingPolicyXAmzTargetEnum.ELASTIC_MAP_REDUCE_REMOVE_MANAGED_SCALING_POLICY) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "alias";
                xAmzCredential = "asperiores";
                xAmzDate = "rem";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "earum";
            }};            

            RemoveManagedScalingPolicyResponse res = sdk.sdk.removeManagedScalingPolicy(req);

            if (res.removeManagedScalingPolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTags

<p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagsRequest;
import org.openapis.openapi.models.operations.RemoveTagsResponse;
import org.openapis.openapi.models.operations.RemoveTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTagsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsRequest req = new RemoveTagsRequest(                new RemoveTagsInput("velit",                 new String[]{{
                                                add("esse"),
                                                add("in"),
                                            }});, RemoveTagsXAmzTargetEnum.ELASTIC_MAP_REDUCE_REMOVE_TAGS) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "neque";
                xAmzDate = "vero";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "qui";
            }};            

            RemoveTagsResponse res = sdk.sdk.removeTags(req);

            if (res.removeTagsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runJobFlow

<p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunJobFlowRequest;
import org.openapis.openapi.models.operations.RunJobFlowResponse;
import org.openapis.openapi.models.operations.RunJobFlowXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionOnFailureEnum;
import org.openapis.openapi.models.shared.AdjustmentTypeEnum;
import org.openapis.openapi.models.shared.Application;
import org.openapis.openapi.models.shared.AutoScalingPolicy;
import org.openapis.openapi.models.shared.AutoTerminationPolicy;
import org.openapis.openapi.models.shared.BootstrapActionConfig;
import org.openapis.openapi.models.shared.CloudWatchAlarmDefinition;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.ComputeLimits;
import org.openapis.openapi.models.shared.ComputeLimitsUnitTypeEnum;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.EbsBlockDeviceConfig;
import org.openapis.openapi.models.shared.EbsConfiguration;
import org.openapis.openapi.models.shared.HadoopJarStepConfig;
import org.openapis.openapi.models.shared.InstanceFleetConfig;
import org.openapis.openapi.models.shared.InstanceFleetProvisioningSpecifications;
import org.openapis.openapi.models.shared.InstanceFleetResizingSpecifications;
import org.openapis.openapi.models.shared.InstanceFleetTypeEnum;
import org.openapis.openapi.models.shared.InstanceGroupConfig;
import org.openapis.openapi.models.shared.InstanceRoleTypeEnum;
import org.openapis.openapi.models.shared.InstanceTypeConfig;
import org.openapis.openapi.models.shared.JobFlowInstancesConfig;
import org.openapis.openapi.models.shared.KerberosAttributes;
import org.openapis.openapi.models.shared.KeyValue;
import org.openapis.openapi.models.shared.ManagedScalingPolicy;
import org.openapis.openapi.models.shared.MarketTypeEnum;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationOptions;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationPreferenceEnum;
import org.openapis.openapi.models.shared.OnDemandCapacityReservationUsageStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.OnDemandProvisioningSpecification;
import org.openapis.openapi.models.shared.OnDemandResizingSpecification;
import org.openapis.openapi.models.shared.PlacementGroupConfig;
import org.openapis.openapi.models.shared.PlacementGroupStrategyEnum;
import org.openapis.openapi.models.shared.PlacementType;
import org.openapis.openapi.models.shared.RepoUpgradeOnBootEnum;
import org.openapis.openapi.models.shared.RunJobFlowInput;
import org.openapis.openapi.models.shared.ScaleDownBehaviorEnum;
import org.openapis.openapi.models.shared.ScalingAction;
import org.openapis.openapi.models.shared.ScalingConstraints;
import org.openapis.openapi.models.shared.ScalingRule;
import org.openapis.openapi.models.shared.ScalingTrigger;
import org.openapis.openapi.models.shared.ScriptBootstrapActionConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleScalingPolicyConfiguration;
import org.openapis.openapi.models.shared.SpotProvisioningAllocationStrategyEnum;
import org.openapis.openapi.models.shared.SpotProvisioningSpecification;
import org.openapis.openapi.models.shared.SpotProvisioningTimeoutActionEnum;
import org.openapis.openapi.models.shared.SpotResizingSpecification;
import org.openapis.openapi.models.shared.StatisticEnum;
import org.openapis.openapi.models.shared.StepConfig;
import org.openapis.openapi.models.shared.SupportedProductConfig;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UnitEnum;
import org.openapis.openapi.models.shared.VolumeSpecification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RunJobFlowRequest req = new RunJobFlowRequest(                new RunJobFlowInput(                new JobFlowInstancesConfig() {{
                                                additionalMasterSecurityGroups = new String[]{{
                                                    add("incidunt"),
                                                }};
                                                additionalSlaveSecurityGroups = new String[]{{
                                                    add("odit"),
                                                }};
                                                ec2KeyName = "corporis";
                                                ec2SubnetId = "rerum";
                                                ec2SubnetIds = new String[]{{
                                                    add("error"),
                                                }};
                                                emrManagedMasterSecurityGroup = "vel";
                                                emrManagedSlaveSecurityGroup = "accusantium";
                                                hadoopVersion = "id";
                                                instanceCount = 388169L;
                                                instanceFleets = new org.openapis.openapi.models.shared.InstanceFleetConfig[]{{
                                                    add(new InstanceFleetConfig(InstanceFleetTypeEnum.MASTER) {{
                                                        instanceFleetType = InstanceFleetTypeEnum.CORE;
                                                        instanceTypeConfigs = new org.openapis.openapi.models.shared.InstanceTypeConfig[]{{
                                                            add(new InstanceTypeConfig("eius") {{
                                                                bidPrice = "ullam";
                                                                bidPriceAsPercentageOfOnDemandPrice = 626.88;
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{
                                                                        classification = "incidunt";
                                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                        }};
                                                                        properties = new java.util.HashMap<String, String>() {{
                                                                            put("deserunt", "delectus");
                                                                        }};
                                                                    }}),
                                                                    add(new Configuration() {{
                                                                        classification = "omnis";
                                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                            add(new Configuration() {{}}),
                                                                        }};
                                                                        properties = new java.util.HashMap<String, String>() {{
                                                                            put("maxime", "quis");
                                                                        }};
                                                                    }}),
                                                                    add(new Configuration() {{
                                                                        classification = "cupiditate";
                                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                        }};
                                                                        properties = new java.util.HashMap<String, String>() {{
                                                                            put("maiores", "laudantium");
                                                                            put("velit", "reiciendis");
                                                                            put("amet", "nemo");
                                                                        }};
                                                                    }}),
                                                                }};
                                                                customAmiId = "ipsa";
                                                                ebsConfiguration = new EbsConfiguration() {{
                                                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(598316L, "accusantium") {{
                                                                                            iops = 118917L;
                                                                                            throughput = 795546L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(989033L, "a") {{
                                                                                iops = 948444L;
                                                                                sizeInGB = 555294L;
                                                                                throughput = 476003L;
                                                                                volumeType = "aliquid";
                                                                            }};
                                                                            volumesPerInstance = 749702L;
                                                                        }}),
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(145435L, "eius") {{
                                                                                            iops = 194058L;
                                                                                            throughput = 758194L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(693747L, "modi") {{
                                                                                iops = 417539L;
                                                                                sizeInGB = 908734L;
                                                                                throughput = 781582L;
                                                                                volumeType = "tempore";
                                                                            }};
                                                                            volumesPerInstance = 916341L;
                                                                        }}),
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(979287L, "itaque") {{
                                                                                            iops = 861591L;
                                                                                            throughput = 643419L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(996541L, "a") {{
                                                                                iops = 992887L;
                                                                                sizeInGB = 459875L;
                                                                                throughput = 500021L;
                                                                                volumeType = "sint";
                                                                            }};
                                                                            volumesPerInstance = 658604L;
                                                                        }}),
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(922094L, "accusantium") {{
                                                                                            iops = 637840L;
                                                                                            throughput = 770128L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(638609L, "saepe") {{
                                                                                iops = 359097L;
                                                                                sizeInGB = 246577L;
                                                                                throughput = 887701L;
                                                                                volumeType = "enim";
                                                                            }};
                                                                            volumesPerInstance = 429997L;
                                                                        }}),
                                                                    }};
                                                                    ebsOptimized = false;
                                                                }};
                                                                instanceType = "quasi";
                                                                weightedCapacity = 502106L;
                                                            }}),
                                                        }};
                                                        launchSpecifications = new InstanceFleetProvisioningSpecifications() {{
                                                            onDemandSpecification = new OnDemandProvisioningSpecification(OnDemandProvisioningAllocationStrategyEnum.LOWEST_PRICE) {{
                                                                allocationStrategy = OnDemandProvisioningAllocationStrategyEnum.LOWEST_PRICE;
                                                                capacityReservationOptions = new OnDemandCapacityReservationOptions() {{
                                                                    capacityReservationPreference = OnDemandCapacityReservationPreferenceEnum.NONE;
                                                                    capacityReservationResourceGroupArn = "eos";
                                                                    usageStrategy = OnDemandCapacityReservationUsageStrategyEnum.USE_CAPACITY_RESERVATIONS_FIRST;
                                                                }};
                                                            }};
                                                            spotSpecification = new SpotProvisioningSpecification(SpotProvisioningTimeoutActionEnum.SWITCH_TO_ON_DEMAND, 300651L) {{
                                                                allocationStrategy = SpotProvisioningAllocationStrategyEnum.CAPACITY_OPTIMIZED;
                                                                blockDurationMinutes = 748023L;
                                                                timeoutAction = SpotProvisioningTimeoutActionEnum.TERMINATE_CLUSTER;
                                                                timeoutDurationMinutes = 793568L;
                                                            }};
                                                        }};
                                                        name = "Traci Lueilwitz";
                                                        resizeSpecifications = new InstanceFleetResizingSpecifications() {{
                                                            onDemandResizeSpecification = new OnDemandResizingSpecification(227156L) {{
                                                                timeoutDurationMinutes = 473326L;
                                                            }};
                                                            spotResizeSpecification = new SpotResizingSpecification(266946L) {{
                                                                timeoutDurationMinutes = 675126L;
                                                            }};
                                                        }};
                                                        targetOnDemandCapacity = 21358L;
                                                        targetSpotCapacity = 897058L;
                                                    }}),
                                                    add(new InstanceFleetConfig(InstanceFleetTypeEnum.MASTER) {{
                                                        instanceFleetType = InstanceFleetTypeEnum.CORE;
                                                        instanceTypeConfigs = new org.openapis.openapi.models.shared.InstanceTypeConfig[]{{
                                                            add(new InstanceTypeConfig("explicabo") {{
                                                                bidPrice = "sunt";
                                                                bidPriceAsPercentageOfOnDemandPrice = 9829.91;
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{
                                                                        classification = "odit";
                                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                        }};
                                                                        properties = new java.util.HashMap<String, String>() {{
                                                                            put("ipsam", "eaque");
                                                                            put("exercitationem", "veniam");
                                                                        }};
                                                                    }}),
                                                                }};
                                                                customAmiId = "nihil";
                                                                ebsConfiguration = new EbsConfiguration() {{
                                                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(24769L, "quidem") {{
                                                                                            iops = 831031L;
                                                                                            throughput = 17768L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(366480L, "suscipit") {{
                                                                                iops = 394161L;
                                                                                sizeInGB = 946808L;
                                                                                throughput = 338281L;
                                                                                volumeType = "quibusdam";
                                                                            }};
                                                                            volumesPerInstance = 866459L;
                                                                        }}),
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(240696L, "pariatur") {{
                                                                                            iops = 688463L;
                                                                                            throughput = 294266L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(996072L, "repudiandae") {{
                                                                                iops = 660536L;
                                                                                sizeInGB = 958146L;
                                                                                throughput = 152364L;
                                                                                volumeType = "possimus";
                                                                            }};
                                                                            volumesPerInstance = 100233L;
                                                                        }}),
                                                                    }};
                                                                    ebsOptimized = false;
                                                                }};
                                                                instanceType = "voluptatibus";
                                                                weightedCapacity = 435353L;
                                                            }}),
                                                            add(new InstanceTypeConfig("numquam") {{
                                                                bidPrice = "minus";
                                                                bidPriceAsPercentageOfOnDemandPrice = 7466.88;
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{
                                                                        classification = "velit";
                                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                        }};
                                                                        properties = new java.util.HashMap<String, String>() {{
                                                                            put("error", "non");
                                                                            put("quasi", "mollitia");
                                                                            put("accusamus", "harum");
                                                                        }};
                                                                    }}),
                                                                    add(new Configuration() {{
                                                                        classification = "cumque";
                                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                            add(new Configuration() {{}}),
                                                                        }};
                                                                        properties = new java.util.HashMap<String, String>() {{
                                                                            put("corrupti", "eaque");
                                                                            put("deserunt", "aliquid");
                                                                            put("excepturi", "magni");
                                                                        }};
                                                                    }}),
                                                                    add(new Configuration() {{
                                                                        classification = "tempora";
                                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                            add(new Configuration() {{}}),
                                                                        }};
                                                                        properties = new java.util.HashMap<String, String>() {{
                                                                            put("rerum", "sed");
                                                                        }};
                                                                    }}),
                                                                }};
                                                                customAmiId = "accusamus";
                                                                ebsConfiguration = new EbsConfiguration() {{
                                                                    ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(361106L, "accusantium") {{
                                                                                            iops = 75850L;
                                                                                            throughput = 14251L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(994234L, "voluptatum") {{
                                                                                iops = 966576L;
                                                                                sizeInGB = 792719L;
                                                                                throughput = 774748L;
                                                                                volumeType = "quos";
                                                                            }};
                                                                            volumesPerInstance = 614770L;
                                                                        }}),
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(960813L, "mollitia") {{
                                                                                            iops = 65121L;
                                                                                            throughput = 552646L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(205499L, "pariatur") {{
                                                                                iops = 984031L;
                                                                                sizeInGB = 342104L;
                                                                                throughput = 869848L;
                                                                                volumeType = "possimus";
                                                                            }};
                                                                            volumesPerInstance = 424853L;
                                                                        }}),
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(162450L, "maiores") {{
                                                                                            iops = 81581L;
                                                                                            throughput = 400448L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(305047L, "quisquam") {{
                                                                                iops = 44571L;
                                                                                sizeInGB = 251200L;
                                                                                throughput = 913284L;
                                                                                volumeType = "ad";
                                                                            }};
                                                                            volumesPerInstance = 557987L;
                                                                        }}),
                                                                        add(new EbsBlockDeviceConfig(                new VolumeSpecification(527715L, "ducimus") {{
                                                                                            iops = 237523L;
                                                                                            throughput = 927959L;
                                                                                        }};) {{
                                                                            volumeSpecification = new VolumeSpecification(232316L, "cumque") {{
                                                                                iops = 513185L;
                                                                                sizeInGB = 665872L;
                                                                                throughput = 221329L;
                                                                                volumeType = "aliquid";
                                                                            }};
                                                                            volumesPerInstance = 525917L;
                                                                        }}),
                                                                    }};
                                                                    ebsOptimized = false;
                                                                }};
                                                                instanceType = "tempora";
                                                                weightedCapacity = 503449L;
                                                            }}),
                                                        }};
                                                        launchSpecifications = new InstanceFleetProvisioningSpecifications() {{
                                                            onDemandSpecification = new OnDemandProvisioningSpecification(OnDemandProvisioningAllocationStrategyEnum.LOWEST_PRICE) {{
                                                                allocationStrategy = OnDemandProvisioningAllocationStrategyEnum.LOWEST_PRICE;
                                                                capacityReservationOptions = new OnDemandCapacityReservationOptions() {{
                                                                    capacityReservationPreference = OnDemandCapacityReservationPreferenceEnum.OPEN;
                                                                    capacityReservationResourceGroupArn = "voluptatum";
                                                                    usageStrategy = OnDemandCapacityReservationUsageStrategyEnum.USE_CAPACITY_RESERVATIONS_FIRST;
                                                                }};
                                                            }};
                                                            spotSpecification = new SpotProvisioningSpecification(SpotProvisioningTimeoutActionEnum.TERMINATE_CLUSTER, 419858L) {{
                                                                allocationStrategy = SpotProvisioningAllocationStrategyEnum.CAPACITY_OPTIMIZED;
                                                                blockDurationMinutes = 27078L;
                                                                timeoutAction = SpotProvisioningTimeoutActionEnum.TERMINATE_CLUSTER;
                                                                timeoutDurationMinutes = 84178L;
                                                            }};
                                                        }};
                                                        name = "Felix Sauer";
                                                        resizeSpecifications = new InstanceFleetResizingSpecifications() {{
                                                            onDemandResizeSpecification = new OnDemandResizingSpecification(374062L) {{
                                                                timeoutDurationMinutes = 471207L;
                                                            }};
                                                            spotResizeSpecification = new SpotResizingSpecification(413780L) {{
                                                                timeoutDurationMinutes = 658199L;
                                                            }};
                                                        }};
                                                        targetOnDemandCapacity = 716L;
                                                        targetSpotCapacity = 686380L;
                                                    }}),
                                                }};
                                                instanceGroups = new org.openapis.openapi.models.shared.InstanceGroupConfig[]{{
                                                    add(new InstanceGroupConfig(751381L, InstanceRoleTypeEnum.TASK, "temporibus") {{
                                                        autoScalingPolicy = new AutoScalingPolicy(                new ScalingConstraints(199879L, 57909L);,                 new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(929619L) {{
                                                                                                                adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                                coolDown = 667215L;
                                                                                                            }};) {{
                                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                                            }};, "quod",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "quos", 819996L, 9804.67) {{
                                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "provident";
                                                                                                                        value = "sapiente";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "aperiam";
                                                                                                                        value = "similique";
                                                                                                                    }}),
                                                                                                                }};
                                                                                                                evaluationPeriods = 197982L;
                                                                                                                namespace = "provident";
                                                                                                                statistic = StatisticEnum.SUM;
                                                                                                                unit = UnitEnum.KILO_BITS_PER_SECOND;
                                                                                                            }};);) {{
                                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(463050L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 307306L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(956545L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                        coolDown = 38044L;
                                                                                        scalingAdjustment = 718119L;
                                                                                    }};
                                                                                }};
                                                                                description = "delectus";
                                                                                name = "Bob Kub";
                                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "sequi", 125707L, 1122.5) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "doloremque";
                                                                                                            value = "sed";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "amet";
                                                                                                            value = "rerum";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "in";
                                                                                                            value = "nostrum";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "temporibus";
                                                                                                            value = "ratione";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 221824L;
                                                                                                    namespace = "nisi";
                                                                                                    statistic = StatisticEnum.SUM;
                                                                                                    unit = UnitEnum.COUNT_PER_SECOND;
                                                                                                }};) {{
                                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "maiores", 386538L, 304.26) {{
                                                                                        comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "ullam";
                                                                                                value = "laborum";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 378268L;
                                                                                        metricName = "doloribus";
                                                                                        namespace = "animi";
                                                                                        period = 925994L;
                                                                                        statistic = StatisticEnum.AVERAGE;
                                                                                        threshold = 2525.67;
                                                                                        unit = UnitEnum.GIGA_BITS_PER_SECOND;
                                                                                    }};
                                                                                }};
                                                                            }}),
                                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(799866L) {{
                                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                                coolDown = 310930L;
                                                                                                            }};) {{
                                                                                                market = MarketTypeEnum.ON_DEMAND;
                                                                                            }};, "ducimus",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "rerum", 643997L, 1384.36) {{
                                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "sequi";
                                                                                                                        value = "beatae";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "iusto";
                                                                                                                        value = "esse";
                                                                                                                    }}),
                                                                                                                }};
                                                                                                                evaluationPeriods = 298246L;
                                                                                                                namespace = "odio";
                                                                                                                statistic = StatisticEnum.MAXIMUM;
                                                                                                                unit = UnitEnum.TERA_BYTES_PER_SECOND;
                                                                                                            }};);) {{
                                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(287141L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 446737L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(413086L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 771931L;
                                                                                        scalingAdjustment = 196700L;
                                                                                    }};
                                                                                }};
                                                                                description = "quisquam";
                                                                                name = "Jill Stokes";
                                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "maiores", 930877L, 8754.52) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "illo";
                                                                                                            value = "quo";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "dignissimos";
                                                                                                            value = "minus";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "distinctio";
                                                                                                            value = "possimus";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 738152L;
                                                                                                    namespace = "suscipit";
                                                                                                    statistic = StatisticEnum.MAXIMUM;
                                                                                                    unit = UnitEnum.TERA_BITS_PER_SECOND;
                                                                                                }};) {{
                                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "recusandae", 404643L, 1050.94) {{
                                                                                        comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "accusamus";
                                                                                                value = "et";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "quas";
                                                                                                value = "blanditiis";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "cum";
                                                                                                value = "dicta";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "impedit";
                                                                                                value = "tempora";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 908249L;
                                                                                        metricName = "repudiandae";
                                                                                        namespace = "sed";
                                                                                        period = 772628L;
                                                                                        statistic = StatisticEnum.SUM;
                                                                                        threshold = 7720.57;
                                                                                        unit = UnitEnum.MEGA_BITS;
                                                                                    }};
                                                                                }};
                                                                            }}),
                                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(357984L) {{
                                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                                coolDown = 435142L;
                                                                                                            }};) {{
                                                                                                market = MarketTypeEnum.SPOT;
                                                                                            }};, "provident",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "nam", 366147L, 3176.32) {{
                                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "minima";
                                                                                                                        value = "tempora";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "perferendis";
                                                                                                                        value = "corrupti";
                                                                                                                    }}),
                                                                                                                }};
                                                                                                                evaluationPeriods = 40874L;
                                                                                                                namespace = "fugiat";
                                                                                                                statistic = StatisticEnum.AVERAGE;
                                                                                                                unit = UnitEnum.SECONDS;
                                                                                                            }};);) {{
                                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(147989L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 681115L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(848833L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 348665L;
                                                                                        scalingAdjustment = 670430L;
                                                                                    }};
                                                                                }};
                                                                                description = "repellat";
                                                                                name = "Angel Sporer";
                                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "doloremque", 20141L, 5144.8) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "corrupti";
                                                                                                            value = "molestiae";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "quis";
                                                                                                            value = "iure";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 68596L;
                                                                                                    namespace = "quaerat";
                                                                                                    statistic = StatisticEnum.AVERAGE;
                                                                                                    unit = UnitEnum.TERA_BITS_PER_SECOND;
                                                                                                }};) {{
                                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "officia", 379661L, 6886.49) {{
                                                                                        comparisonOperator = ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL;
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "temporibus";
                                                                                                value = "optio";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 59757L;
                                                                                        metricName = "maiores";
                                                                                        namespace = "exercitationem";
                                                                                        period = 633643L;
                                                                                        statistic = StatisticEnum.MAXIMUM;
                                                                                        threshold = 1344.28;
                                                                                        unit = UnitEnum.TERA_BITS_PER_SECOND;
                                                                                    }};
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            constraints = new ScalingConstraints(613702L, 355889L) {{
                                                                maxCapacity = 802734L;
                                                                minCapacity = 303292L;
                                                            }};
                                                            rules = new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(756287L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 83791L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                                }};, "laudantium",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "dolor", 917152L, 2742.95) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "rerum";
                                                                                                            value = "doloremque";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 30192L;
                                                                                                    namespace = "eum";
                                                                                                    statistic = StatisticEnum.MAXIMUM;
                                                                                                    unit = UnitEnum.MEGA_BITS;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(469170L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 725316L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.SPOT;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(75277L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                            coolDown = 577590L;
                                                                            scalingAdjustment = 600934L;
                                                                        }};
                                                                    }};
                                                                    description = "ipsam";
                                                                    name = "Blanca Carroll";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "minus", 781491L, 6599.71) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "occaecati";
                                                                                                value = "libero";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "quo";
                                                                                                value = "esse";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "hic";
                                                                                                value = "maxime";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 36691L;
                                                                                        namespace = "soluta";
                                                                                        statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                        unit = UnitEnum.MEGA_BITS_PER_SECOND;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "sapiente", 775427L, 2779.9) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "cumque";
                                                                                    value = "delectus";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 287152L;
                                                                            metricName = "expedita";
                                                                            namespace = "corrupti";
                                                                            period = 523995L;
                                                                            statistic = StatisticEnum.SUM;
                                                                            threshold = 8861.18;
                                                                            unit = UnitEnum.GIGA_BYTES_PER_SECOND;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(990369L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 912151L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                }};, "dicta",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "sit", 396234L, 8986.38) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "deleniti";
                                                                                                            value = "sunt";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 200190L;
                                                                                                    namespace = "delectus";
                                                                                                    statistic = StatisticEnum.MINIMUM;
                                                                                                    unit = UnitEnum.TERA_BYTES;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(697994L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                        coolDown = 541822L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.ON_DEMAND;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(540048L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                            coolDown = 502393L;
                                                                            scalingAdjustment = 470647L;
                                                                        }};
                                                                    }};
                                                                    description = "nostrum";
                                                                    name = "Joe Orn";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "officiis", 651467L, 7650.7) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "enim";
                                                                                                value = "eum";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "nemo";
                                                                                                value = "illum";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 201266L;
                                                                                        namespace = "sit";
                                                                                        statistic = StatisticEnum.SUM;
                                                                                        unit = UnitEnum.BITS_PER_SECOND;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "natus", 312511L, 9853.79) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "quas";
                                                                                    value = "placeat";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 318028L;
                                                                            metricName = "labore";
                                                                            namespace = "sapiente";
                                                                            period = 901651L;
                                                                            statistic = StatisticEnum.MAXIMUM;
                                                                            threshold = 6422.34;
                                                                            unit = UnitEnum.BYTES_PER_SECOND;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(935161L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                    coolDown = 884765L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                                }};, "rerum",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "dignissimos", 373449L, 1316.87) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "aliquid";
                                                                                                            value = "quis";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "facilis";
                                                                                                            value = "ipsum";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "ut";
                                                                                                            value = "quaerat";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "architecto";
                                                                                                            value = "praesentium";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 907899L;
                                                                                                    namespace = "dolor";
                                                                                                    statistic = StatisticEnum.MINIMUM;
                                                                                                    unit = UnitEnum.GIGA_BYTES_PER_SECOND;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(528320L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 872991L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.SPOT;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(259600L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                            coolDown = 122085L;
                                                                            scalingAdjustment = 771092L;
                                                                        }};
                                                                    }};
                                                                    description = "dolorem";
                                                                    name = "Bruce Block";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "aliquid", 151385L, 1066.82) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "ea";
                                                                                                value = "animi";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "dolore";
                                                                                                value = "tenetur";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "dignissimos";
                                                                                                value = "esse";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 657044L;
                                                                                        namespace = "laudantium";
                                                                                        statistic = StatisticEnum.SUM;
                                                                                        unit = UnitEnum.GIGA_BITS_PER_SECOND;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "deleniti", 711615L, 9442.03) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "eaque";
                                                                                    value = "dolorem";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "architecto";
                                                                                    value = "aperiam";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "aspernatur";
                                                                                    value = "nulla";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "enim";
                                                                                    value = "illo";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 298750L;
                                                                            metricName = "delectus";
                                                                            namespace = "numquam";
                                                                            period = 760279L;
                                                                            statistic = StatisticEnum.MINIMUM;
                                                                            threshold = 4044.22;
                                                                            unit = UnitEnum.COUNT_PER_SECOND;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(369941L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                    coolDown = 584640L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                                }};, "quia",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "accusantium", 321473L, 3927.52) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "quia";
                                                                                                            value = "laudantium";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "sed";
                                                                                                            value = "odit";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 479830L;
                                                                                                    namespace = "expedita";
                                                                                                    statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                                    unit = UnitEnum.KILO_BITS_PER_SECOND;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(576657L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                        coolDown = 315671L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.SPOT;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(835646L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                            coolDown = 792499L;
                                                                            scalingAdjustment = 553315L;
                                                                        }};
                                                                    }};
                                                                    description = "accusamus";
                                                                    name = "Silvia Langworth V";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "deserunt", 319834L, 9704.11) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "porro";
                                                                                                value = "laborum";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 748973L;
                                                                                        namespace = "quibusdam";
                                                                                        statistic = StatisticEnum.MINIMUM;
                                                                                        unit = UnitEnum.NONE;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "quisquam", 769047L, 3028.78) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN_OR_EQUAL;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "tenetur";
                                                                                    value = "deleniti";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "modi";
                                                                                    value = "earum";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "architecto";
                                                                                    value = "aliquam";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 286726L;
                                                                            metricName = "maiores";
                                                                            namespace = "sequi";
                                                                            period = 902132L;
                                                                            statistic = StatisticEnum.SAMPLE_COUNT;
                                                                            threshold = 4587.23;
                                                                            unit = UnitEnum.GIGA_BITS_PER_SECOND;
                                                                        }};
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                        bidPrice = "cum";
                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                            add(new Configuration() {{
                                                                classification = "similique";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("nisi", "cumque");
                                                                    put("soluta", "fugiat");
                                                                    put("laboriosam", "nam");
                                                                    put("enim", "maiores");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "consectetur";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("cupiditate", "voluptatem");
                                                                    put("provident", "adipisci");
                                                                    put("accusantium", "magnam");
                                                                    put("repellat", "omnis");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "explicabo";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("id", "possimus");
                                                                    put("fugit", "ipsam");
                                                                    put("nostrum", "sequi");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "voluptatum";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("nobis", "tempora");
                                                                    put("voluptate", "eius");
                                                                    put("expedita", "aperiam");
                                                                }};
                                                            }}),
                                                        }};
                                                        customAmiId = "voluptates";
                                                        ebsConfiguration = new EbsConfiguration() {{
                                                            ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(501768L, "hic") {{
                                                                                    iops = 980649L;
                                                                                    throughput = 990652L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(411626L, "eos") {{
                                                                        iops = 146583L;
                                                                        sizeInGB = 27946L;
                                                                        throughput = 919171L;
                                                                        volumeType = "corporis";
                                                                    }};
                                                                    volumesPerInstance = 305267L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(650914L, "nam") {{
                                                                                    iops = 827314L;
                                                                                    throughput = 776421L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(591171L, "beatae") {{
                                                                        iops = 420985L;
                                                                        sizeInGB = 198892L;
                                                                        throughput = 585628L;
                                                                        volumeType = "animi";
                                                                    }};
                                                                    volumesPerInstance = 56998L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(397160L, "provident") {{
                                                                                    iops = 385760L;
                                                                                    throughput = 881568L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(383066L, "voluptate") {{
                                                                        iops = 684499L;
                                                                        sizeInGB = 733763L;
                                                                        throughput = 417333L;
                                                                        volumeType = "fugit";
                                                                    }};
                                                                    volumesPerInstance = 393122L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(112224L, "quidem") {{
                                                                                    iops = 193334L;
                                                                                    throughput = 227431L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(4929L, "qui") {{
                                                                        iops = 68292L;
                                                                        sizeInGB = 929067L;
                                                                        throughput = 790305L;
                                                                        volumeType = "eaque";
                                                                    }};
                                                                    volumesPerInstance = 163263L;
                                                                }}),
                                                            }};
                                                            ebsOptimized = false;
                                                        }};
                                                        instanceCount = 346608L;
                                                        instanceRole = InstanceRoleTypeEnum.TASK;
                                                        instanceType = "praesentium";
                                                        market = MarketTypeEnum.SPOT;
                                                        name = "Delbert Reynolds";
                                                    }}),
                                                    add(new InstanceGroupConfig(989765L, InstanceRoleTypeEnum.CORE, "deserunt") {{
                                                        autoScalingPolicy = new AutoScalingPolicy(                new ScalingConstraints(154425L, 642576L);,                 new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(552287L) {{
                                                                                                                adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                                coolDown = 383381L;
                                                                                                            }};) {{
                                                                                                market = MarketTypeEnum.SPOT;
                                                                                            }};, "fugiat",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "culpa", 543922L, 9139.09) {{
                                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "nemo";
                                                                                                                        value = "illo";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "doloribus";
                                                                                                                        value = "cumque";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "expedita";
                                                                                                                        value = "modi";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "cumque";
                                                                                                                        value = "ipsam";
                                                                                                                    }}),
                                                                                                                }};
                                                                                                                evaluationPeriods = 578081L;
                                                                                                                namespace = "ipsum";
                                                                                                                statistic = StatisticEnum.MAXIMUM;
                                                                                                                unit = UnitEnum.BITS_PER_SECOND;
                                                                                                            }};);) {{
                                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(207512L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 788469L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(459086L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                        coolDown = 481307L;
                                                                                        scalingAdjustment = 958533L;
                                                                                    }};
                                                                                }};
                                                                                description = "praesentium";
                                                                                name = "Holly Torphy";
                                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "facilis", 759451L, 2796.73) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "magnam";
                                                                                                            value = "dolores";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 400492L;
                                                                                                    namespace = "eum";
                                                                                                    statistic = StatisticEnum.SUM;
                                                                                                    unit = UnitEnum.TERA_BYTES;
                                                                                                }};) {{
                                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "animi", 528742L, 3995.85) {{
                                                                                        comparisonOperator = ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL;
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "amet";
                                                                                                value = "veritatis";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "error";
                                                                                                value = "voluptatibus";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "numquam";
                                                                                                value = "rerum";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 678695L;
                                                                                        metricName = "quibusdam";
                                                                                        namespace = "earum";
                                                                                        period = 566669L;
                                                                                        statistic = StatisticEnum.AVERAGE;
                                                                                        threshold = 4768.01;
                                                                                        unit = UnitEnum.TERA_BYTES_PER_SECOND;
                                                                                    }};
                                                                                }};
                                                                            }}),
                                                                            add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(983060L) {{
                                                                                                                adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                                coolDown = 926119L;
                                                                                                            }};) {{
                                                                                                market = MarketTypeEnum.SPOT;
                                                                                            }};, "consectetur",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "voluptatibus", 824267L, 8301.49) {{
                                                                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "delectus";
                                                                                                                        value = "odio";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "voluptatibus";
                                                                                                                        value = "aut";
                                                                                                                    }}),
                                                                                                                    add(new MetricDimension() {{
                                                                                                                        key = "quam";
                                                                                                                        value = "omnis";
                                                                                                                    }}),
                                                                                                                }};
                                                                                                                evaluationPeriods = 626676L;
                                                                                                                namespace = "asperiores";
                                                                                                                statistic = StatisticEnum.AVERAGE;
                                                                                                                unit = UnitEnum.KILO_BITS_PER_SECOND;
                                                                                                            }};);) {{
                                                                                action = new ScalingAction(                new SimpleScalingPolicyConfiguration(661578L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 59023L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                                    simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(652092L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 779823L;
                                                                                        scalingAdjustment = 840017L;
                                                                                    }};
                                                                                }};
                                                                                description = "accusamus";
                                                                                name = "Jamie Murazik";
                                                                                trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "quos", 502509L, 5599.37) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "provident";
                                                                                                            value = "quas";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 218413L;
                                                                                                    namespace = "vero";
                                                                                                    statistic = StatisticEnum.MINIMUM;
                                                                                                    unit = UnitEnum.GIGA_BYTES_PER_SECOND;
                                                                                                }};) {{
                                                                                    cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "occaecati", 15738L, 7712.89) {{
                                                                                        comparisonOperator = ComparisonOperatorEnum.LESS_THAN_OR_EQUAL;
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "at";
                                                                                                value = "molestias";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "aut";
                                                                                                value = "temporibus";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "tenetur";
                                                                                                value = "incidunt";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 254648L;
                                                                                        metricName = "corrupti";
                                                                                        namespace = "similique";
                                                                                        period = 293617L;
                                                                                        statistic = StatisticEnum.SUM;
                                                                                        threshold = 9682.05;
                                                                                        unit = UnitEnum.BYTES_PER_SECOND;
                                                                                    }};
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            constraints = new ScalingConstraints(845365L, 27400L) {{
                                                                maxCapacity = 662857L;
                                                                minCapacity = 542017L;
                                                            }};
                                                            rules = new org.openapis.openapi.models.shared.ScalingRule[]{{
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(757471L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                    coolDown = 21668L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                }};, "omnis",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "tenetur", 959696L, 2420.13) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "non";
                                                                                                            value = "optio";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 850196L;
                                                                                                    namespace = "at";
                                                                                                    statistic = StatisticEnum.MAXIMUM;
                                                                                                    unit = UnitEnum.COUNT;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(42763L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 367L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.ON_DEMAND;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(938094L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                            coolDown = 591143L;
                                                                            scalingAdjustment = 875693L;
                                                                        }};
                                                                    }};
                                                                    description = "doloremque";
                                                                    name = "Erika Koepp";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "vitae", 960523L, 9686.89) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "voluptate";
                                                                                                value = "inventore";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "facere";
                                                                                                value = "maxime";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "fuga";
                                                                                                value = "ab";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "ex";
                                                                                                value = "consectetur";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 982409L;
                                                                                        namespace = "sed";
                                                                                        statistic = StatisticEnum.MINIMUM;
                                                                                        unit = UnitEnum.KILO_BYTES;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "tenetur", 451807L, 4617.54) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.GREATER_THAN;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "a";
                                                                                    value = "laborum";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 84288L;
                                                                            metricName = "quod";
                                                                            namespace = "a";
                                                                            period = 185313L;
                                                                            statistic = StatisticEnum.SAMPLE_COUNT;
                                                                            threshold = 4151.25;
                                                                            unit = UnitEnum.PERCENT;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(422276L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                                                    coolDown = 129631L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                }};, "doloremque",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "alias", 244157L, 3568.05) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "velit";
                                                                                                            value = "ratione";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "quas";
                                                                                                            value = "maxime";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 923935L;
                                                                                                    namespace = "cumque";
                                                                                                    statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                                    unit = UnitEnum.TERA_BITS;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(428810L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 555194L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.ON_DEMAND;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(915647L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                            coolDown = 675755L;
                                                                            scalingAdjustment = 596185L;
                                                                        }};
                                                                    }};
                                                                    description = "odio";
                                                                    name = "Johnnie Jacobs";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "dignissimos", 614346L, 5884.73) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "sint";
                                                                                                value = "aperiam";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 49456L;
                                                                                        namespace = "eum";
                                                                                        statistic = StatisticEnum.AVERAGE;
                                                                                        unit = UnitEnum.MEGA_BYTES_PER_SECOND;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "doloribus", 926027L, 7874.52) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "nulla";
                                                                                    value = "magni";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 618073L;
                                                                            metricName = "illum";
                                                                            namespace = "a";
                                                                            period = 771078L;
                                                                            statistic = StatisticEnum.MINIMUM;
                                                                            threshold = 2814.54;
                                                                            unit = UnitEnum.BITS_PER_SECOND;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(845078L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                                    coolDown = 154840L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.ON_DEMAND;
                                                                                }};, "neque",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN_OR_EQUAL, "numquam", 523109L, 8846.22) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "neque";
                                                                                                            value = "corporis";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "quod";
                                                                                                            value = "dolores";
                                                                                                        }}),
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "placeat";
                                                                                                            value = "excepturi";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 927021L;
                                                                                                    namespace = "quos";
                                                                                                    statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                                    unit = UnitEnum.TERA_BITS_PER_SECOND;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(899652L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                        coolDown = 116463L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.ON_DEMAND;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(84207L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.EXACT_CAPACITY;
                                                                            coolDown = 667646L;
                                                                            scalingAdjustment = 144058L;
                                                                        }};
                                                                    }};
                                                                    description = "ipsam";
                                                                    name = "Erma Predovic Sr.";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "laudantium", 831067L, 4159.53) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "consectetur";
                                                                                                value = "voluptas";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "quaerat";
                                                                                                value = "earum";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "tenetur";
                                                                                                value = "assumenda";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "dolore";
                                                                                                value = "enim";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 353904L;
                                                                                        namespace = "perspiciatis";
                                                                                        statistic = StatisticEnum.SAMPLE_COUNT;
                                                                                        unit = UnitEnum.KILO_BITS;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.LESS_THAN, "voluptatem", 249803L, 3101.95) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.LESS_THAN;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "autem";
                                                                                    value = "ducimus";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 728474L;
                                                                            metricName = "molestias";
                                                                            namespace = "necessitatibus";
                                                                            period = 218783L;
                                                                            statistic = StatisticEnum.MINIMUM;
                                                                            threshold = 5507.99;
                                                                            unit = UnitEnum.KILO_BITS_PER_SECOND;
                                                                        }};
                                                                    }};
                                                                }}),
                                                                add(new ScalingRule(                new ScalingAction(                new SimpleScalingPolicyConfiguration(107301L) {{
                                                                                                    adjustmentType = AdjustmentTypeEnum.PERCENT_CHANGE_IN_CAPACITY;
                                                                                                    coolDown = 9060L;
                                                                                                }};) {{
                                                                                    market = MarketTypeEnum.SPOT;
                                                                                }};, "ratione",                 new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN, "tempora", 177337L, 6161.83) {{
                                                                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                                        add(new MetricDimension() {{
                                                                                                            key = "suscipit";
                                                                                                            value = "laudantium";
                                                                                                        }}),
                                                                                                    }};
                                                                                                    evaluationPeriods = 703407L;
                                                                                                    namespace = "laudantium";
                                                                                                    statistic = StatisticEnum.AVERAGE;
                                                                                                    unit = UnitEnum.NONE;
                                                                                                }};);) {{
                                                                    action = new ScalingAction(                new SimpleScalingPolicyConfiguration(925847L) {{
                                                                                        adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                                        coolDown = 240624L;
                                                                                    }};) {{
                                                                        market = MarketTypeEnum.ON_DEMAND;
                                                                        simpleScalingPolicyConfiguration = new SimpleScalingPolicyConfiguration(196000L) {{
                                                                            adjustmentType = AdjustmentTypeEnum.CHANGE_IN_CAPACITY;
                                                                            coolDown = 742899L;
                                                                            scalingAdjustment = 898155L;
                                                                        }};
                                                                    }};
                                                                    description = "magni";
                                                                    name = "Wanda Stanton";
                                                                    trigger = new ScalingTrigger(                new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "inventore", 976403L, 6012.28) {{
                                                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                            add(new MetricDimension() {{
                                                                                                key = "repellendus";
                                                                                                value = "consequatur";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "adipisci";
                                                                                                value = "doloremque";
                                                                                            }}),
                                                                                            add(new MetricDimension() {{
                                                                                                key = "optio";
                                                                                                value = "tempora";
                                                                                            }}),
                                                                                        }};
                                                                                        evaluationPeriods = 890765L;
                                                                                        namespace = "cumque";
                                                                                        statistic = StatisticEnum.MAXIMUM;
                                                                                        unit = UnitEnum.MICRO_SECONDS;
                                                                                    }};) {{
                                                                        cloudWatchAlarmDefinition = new CloudWatchAlarmDefinition(ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL, "assumenda", 590969L, 8184.22) {{
                                                                            comparisonOperator = ComparisonOperatorEnum.GREATER_THAN_OR_EQUAL;
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension() {{
                                                                                    key = "ad";
                                                                                    value = "voluptate";
                                                                                }}),
                                                                                add(new MetricDimension() {{
                                                                                    key = "vel";
                                                                                    value = "minima";
                                                                                }}),
                                                                            }};
                                                                            evaluationPeriods = 24548L;
                                                                            metricName = "vel";
                                                                            namespace = "laboriosam";
                                                                            period = 311247L;
                                                                            statistic = StatisticEnum.SAMPLE_COUNT;
                                                                            threshold = 5252.23;
                                                                            unit = UnitEnum.TERA_BITS;
                                                                        }};
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                        bidPrice = "neque";
                                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                            add(new Configuration() {{
                                                                classification = "in";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("porro", "fugiat");
                                                                    put("soluta", "ipsa");
                                                                }};
                                                            }}),
                                                            add(new Configuration() {{
                                                                classification = "reiciendis";
                                                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                                    add(new Configuration() {{}}),
                                                                    add(new Configuration() {{}}),
                                                                }};
                                                                properties = new java.util.HashMap<String, String>() {{
                                                                    put("eos", "quas");
                                                                    put("quasi", "architecto");
                                                                    put("praesentium", "iusto");
                                                                    put("fugiat", "enim");
                                                                }};
                                                            }}),
                                                        }};
                                                        customAmiId = "iure";
                                                        ebsConfiguration = new EbsConfiguration() {{
                                                            ebsBlockDeviceConfigs = new org.openapis.openapi.models.shared.EbsBlockDeviceConfig[]{{
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(315465L, "animi") {{
                                                                                    iops = 599581L;
                                                                                    throughput = 61498L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(921127L, "quibusdam") {{
                                                                        iops = 265303L;
                                                                        sizeInGB = 301701L;
                                                                        throughput = 882157L;
                                                                        volumeType = "nulla";
                                                                    }};
                                                                    volumesPerInstance = 505799L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(848649L, "reiciendis") {{
                                                                                    iops = 809567L;
                                                                                    throughput = 175275L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(187361L, "blanditiis") {{
                                                                        iops = 430181L;
                                                                        sizeInGB = 341405L;
                                                                        throughput = 909093L;
                                                                        volumeType = "laboriosam";
                                                                    }};
                                                                    volumesPerInstance = 697729L;
                                                                }}),
                                                                add(new EbsBlockDeviceConfig(                new VolumeSpecification(490549L, "omnis") {{
                                                                                    iops = 609687L;
                                                                                    throughput = 144397L;
                                                                                }};) {{
                                                                    volumeSpecification = new VolumeSpecification(377161L, "quo") {{
                                                                        iops = 9777L;
                                                                        sizeInGB = 201966L;
                                                                        throughput = 155371L;
                                                                        volumeType = "quidem";
                                                                    }};
                                                                    volumesPerInstance = 512017L;
                                                                }}),
                                                            }};
                                                            ebsOptimized = false;
                                                        }};
                                                        instanceCount = 212682L;
                                                        instanceRole = InstanceRoleTypeEnum.TASK;
                                                        instanceType = "molestiae";
                                                        market = MarketTypeEnum.SPOT;
                                                        name = "Rosa Hand";
                                                    }}),
                                                }};
                                                keepJobFlowAliveWhenNoSteps = false;
                                                masterInstanceType = "itaque";
                                                placement = new PlacementType() {{
                                                    availabilityZone = "et";
                                                    availabilityZones = new String[]{{
                                                        add("impedit"),
                                                    }};
                                                }};;
                                                serviceAccessSecurityGroup = "ex";
                                                slaveInstanceType = "praesentium";
                                                terminationProtected = false;
                                            }};, "natus") {{
                                additionalInfo = "vitae";
                                amiVersion = "tenetur";
                                applications = new org.openapis.openapi.models.shared.Application[]{{
                                    add(new Application() {{
                                        additionalInfo = new java.util.HashMap<String, String>() {{
                                            put("eligendi", "repudiandae");
                                        }};
                                        args = new String[]{{
                                            add("inventore"),
                                        }};
                                        name = "Heidi Bode";
                                        version = "dolorem";
                                    }}),
                                    add(new Application() {{
                                        additionalInfo = new java.util.HashMap<String, String>() {{
                                            put("exercitationem", "amet");
                                        }};
                                        args = new String[]{{
                                            add("voluptate"),
                                            add("pariatur"),
                                        }};
                                        name = "Tommie Pfannerstill";
                                        version = "at";
                                    }}),
                                    add(new Application() {{
                                        additionalInfo = new java.util.HashMap<String, String>() {{
                                            put("omnis", "quam");
                                            put("exercitationem", "voluptates");
                                            put("sequi", "quis");
                                            put("commodi", "vel");
                                        }};
                                        args = new String[]{{
                                            add("aliquid"),
                                            add("aperiam"),
                                            add("perspiciatis"),
                                        }};
                                        name = "Kellie Miller";
                                        version = "repellendus";
                                    }}),
                                }};
                                autoScalingRole = "temporibus";
                                autoTerminationPolicy = new AutoTerminationPolicy() {{
                                    idleTimeout = 792106L;
                                }};;
                                bootstrapActions = new org.openapis.openapi.models.shared.BootstrapActionConfig[]{{
                                    add(new BootstrapActionConfig("enim",                 new ScriptBootstrapActionConfig("numquam") {{
                                                        args = new String[]{{
                                                            add("est"),
                                                        }};
                                                    }};) {{
                                        name = "Dr. Jack Buckridge";
                                        scriptBootstrapAction = new ScriptBootstrapActionConfig("pariatur") {{
                                            args = new String[]{{
                                                add("dicta"),
                                                add("voluptatem"),
                                                add("odit"),
                                            }};
                                            path = "aliquid";
                                        }};
                                    }}),
                                    add(new BootstrapActionConfig("distinctio",                 new ScriptBootstrapActionConfig("placeat") {{
                                                        args = new String[]{{
                                                            add("eligendi"),
                                                            add("sit"),
                                                            add("possimus"),
                                                            add("distinctio"),
                                                        }};
                                                    }};) {{
                                        name = "Ernestine Bruen DVM";
                                        scriptBootstrapAction = new ScriptBootstrapActionConfig("ipsa") {{
                                            args = new String[]{{
                                                add("expedita"),
                                                add("quia"),
                                                add("vitae"),
                                                add("odio"),
                                            }};
                                            path = "quas";
                                        }};
                                    }}),
                                }};
                                configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                    add(new Configuration() {{
                                        classification = "assumenda";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("magnam", "laudantium");
                                            put("tempora", "esse");
                                            put("doloremque", "corrupti");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "reiciendis";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("repudiandae", "amet");
                                            put("natus", "ab");
                                        }};
                                    }}),
                                    add(new Configuration() {{
                                        classification = "officiis";
                                        configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                            add(new Configuration() {{}}),
                                            add(new Configuration() {{}}),
                                        }};
                                        properties = new java.util.HashMap<String, String>() {{
                                            put("placeat", "ab");
                                            put("ad", "blanditiis");
                                            put("porro", "labore");
                                        }};
                                    }}),
                                }};
                                customAmiId = "impedit";
                                ebsRootVolumeSize = 285175L;
                                jobFlowRole = "earum";
                                kerberosAttributes = new KerberosAttributes("ullam", "numquam") {{
                                    adDomainJoinPassword = "enim";
                                    adDomainJoinUser = "cupiditate";
                                    crossRealmTrustPrincipalPassword = "occaecati";
                                }};;
                                logEncryptionKmsKeyId = "itaque";
                                logUri = "fuga";
                                managedScalingPolicy = new ManagedScalingPolicy() {{
                                    computeLimits = new ComputeLimits(234845L, 268749L, ComputeLimitsUnitTypeEnum.INSTANCE_FLEET_UNITS) {{
                                        maximumCoreCapacityUnits = 129762L;
                                        maximumOnDemandCapacityUnits = 380450L;
                                    }};;
                                }};;
                                newSupportedProducts = new org.openapis.openapi.models.shared.SupportedProductConfig[]{{
                                    add(new SupportedProductConfig() {{
                                        args = new String[]{{
                                            add("sint"),
                                            add("nobis"),
                                            add("qui"),
                                            add("accusantium"),
                                        }};
                                        name = "Pat Walter";
                                    }}),
                                }};
                                osReleaseLabel = "est";
                                placementGroupConfigs = new org.openapis.openapi.models.shared.PlacementGroupConfig[]{{
                                    add(new PlacementGroupConfig(InstanceRoleTypeEnum.CORE) {{
                                        instanceRole = InstanceRoleTypeEnum.TASK;
                                        placementStrategy = PlacementGroupStrategyEnum.NONE;
                                    }}),
                                }};
                                releaseLabel = "maiores";
                                repoUpgradeOnBoot = RepoUpgradeOnBootEnum.NONE;
                                scaleDownBehavior = ScaleDownBehaviorEnum.TERMINATE_AT_INSTANCE_HOUR;
                                securityConfiguration = "culpa";
                                serviceRole = "doloremque";
                                stepConcurrencyLevel = 681336L;
                                steps = new org.openapis.openapi.models.shared.StepConfig[]{{
                                    add(new StepConfig(                new HadoopJarStepConfig("ipsa") {{
                                                        args = new String[]{{
                                                            add("iste"),
                                                            add("deserunt"),
                                                            add("hic"),
                                                            add("ducimus"),
                                                        }};
                                                        mainClass = "consequuntur";
                                                        properties = new org.openapis.openapi.models.shared.KeyValue[]{{
                                                            add(new KeyValue() {{
                                                                key = "libero";
                                                                value = "quia";
                                                            }}),
                                                            add(new KeyValue() {{
                                                                key = "omnis";
                                                                value = "dicta";
                                                            }}),
                                                        }};
                                                    }};, "qui") {{
                                        actionOnFailure = ActionOnFailureEnum.TERMINATE_JOB_FLOW;
                                        hadoopJarStep = new HadoopJarStepConfig("aut") {{
                                            args = new String[]{{
                                                add("eligendi"),
                                                add("officiis"),
                                            }};
                                            jar = "dignissimos";
                                            mainClass = "fugit";
                                            properties = new org.openapis.openapi.models.shared.KeyValue[]{{
                                                add(new KeyValue() {{
                                                    key = "possimus";
                                                    value = "quaerat";
                                                }}),
                                            }};
                                        }};
                                        name = "Cory Windler";
                                    }}),
                                }};
                                supportedProducts = new String[]{{
                                    add("consequatur"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "consequatur";
                                        value = "fugiat";
                                    }}),
                                }};
                                visibleToAllUsers = false;
                            }};, RunJobFlowXAmzTargetEnum.ELASTIC_MAP_REDUCE_RUN_JOB_FLOW) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "velit";
                xAmzCredential = "hic";
                xAmzDate = "ullam";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "distinctio";
            }};            

            RunJobFlowResponse res = sdk.sdk.runJobFlow(req);

            if (res.runJobFlowOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTerminationProtection

<p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTerminationProtectionRequest;
import org.openapis.openapi.models.operations.SetTerminationProtectionResponse;
import org.openapis.openapi.models.operations.SetTerminationProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetTerminationProtectionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetTerminationProtectionRequest req = new SetTerminationProtectionRequest(                new SetTerminationProtectionInput(                new String[]{{
                                                add("provident"),
                                                add("occaecati"),
                                            }}, false);, SetTerminationProtectionXAmzTargetEnum.ELASTIC_MAP_REDUCE_SET_TERMINATION_PROTECTION) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "odit";
                xAmzDate = "vero";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "quasi";
            }};            

            SetTerminationProtectionResponse res = sdk.sdk.setTerminationProtection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setVisibleToAllUsers

<important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access Management for EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetVisibleToAllUsersRequest;
import org.openapis.openapi.models.operations.SetVisibleToAllUsersResponse;
import org.openapis.openapi.models.operations.SetVisibleToAllUsersXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetVisibleToAllUsersInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetVisibleToAllUsersRequest req = new SetVisibleToAllUsersRequest(                new SetVisibleToAllUsersInput(                new String[]{{
                                                add("magnam"),
                                                add("perspiciatis"),
                                                add("amet"),
                                            }}, false);, SetVisibleToAllUsersXAmzTargetEnum.ELASTIC_MAP_REDUCE_SET_VISIBLE_TO_ALL_USERS) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "nemo";
                xAmzDate = "delectus";
                xAmzSecurityToken = "illum";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "quaerat";
            }};            

            SetVisibleToAllUsersResponse res = sdk.sdk.setVisibleToAllUsers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startNotebookExecution

Starts a notebook execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartNotebookExecutionRequest;
import org.openapis.openapi.models.operations.StartNotebookExecutionResponse;
import org.openapis.openapi.models.operations.StartNotebookExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecutionEngineConfig;
import org.openapis.openapi.models.shared.ExecutionEngineTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartNotebookExecutionInput;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartNotebookExecutionRequest req = new StartNotebookExecutionRequest(                new StartNotebookExecutionInput("cumque",                 new ExecutionEngineConfig("quos") {{
                                                masterInstanceSecurityGroupId = "in";
                                                type = ExecutionEngineTypeEnum.EMR;
                                            }};, "commodi", "maxime") {{
                                notebookExecutionName = "sed";
                                notebookInstanceSecurityGroupId = "minus";
                                notebookParams = "consequuntur";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "delectus";
                                        value = "harum";
                                    }}),
                                    add(new Tag() {{
                                        key = "aliquam";
                                        value = "eligendi";
                                    }}),
                                    add(new Tag() {{
                                        key = "hic";
                                        value = "quo";
                                    }}),
                                    add(new Tag() {{
                                        key = "illo";
                                        value = "nobis";
                                    }}),
                                }};
                            }};, StartNotebookExecutionXAmzTargetEnum.ELASTIC_MAP_REDUCE_START_NOTEBOOK_EXECUTION) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "explicabo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "alias";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "quos";
            }};            

            StartNotebookExecutionResponse res = sdk.sdk.startNotebookExecution(req);

            if (res.startNotebookExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopNotebookExecution

Stops a notebook execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopNotebookExecutionRequest;
import org.openapis.openapi.models.operations.StopNotebookExecutionResponse;
import org.openapis.openapi.models.operations.StopNotebookExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopNotebookExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopNotebookExecutionRequest req = new StopNotebookExecutionRequest(                new StopNotebookExecutionInput("vitae");, StopNotebookExecutionXAmzTargetEnum.ELASTIC_MAP_REDUCE_STOP_NOTEBOOK_EXECUTION) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "nam";
                xAmzCredential = "architecto";
                xAmzDate = "rerum";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "dolorem";
            }};            

            StopNotebookExecutionResponse res = sdk.sdk.stopNotebookExecution(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateJobFlows

<p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateJobFlowsRequest;
import org.openapis.openapi.models.operations.TerminateJobFlowsResponse;
import org.openapis.openapi.models.operations.TerminateJobFlowsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateJobFlowsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateJobFlowsRequest req = new TerminateJobFlowsRequest(                new TerminateJobFlowsInput(                new String[]{{
                                                add("nam"),
                                                add("ab"),
                                                add("magnam"),
                                                add("pariatur"),
                                            }});, TerminateJobFlowsXAmzTargetEnum.ELASTIC_MAP_REDUCE_TERMINATE_JOB_FLOWS) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "autem";
                xAmzCredential = "tempore";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "voluptas";
            }};            

            TerminateJobFlowsResponse res = sdk.sdk.terminateJobFlows(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStudio

Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStudioRequest;
import org.openapis.openapi.models.operations.UpdateStudioResponse;
import org.openapis.openapi.models.operations.UpdateStudioXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateStudioInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStudioRequest req = new UpdateStudioRequest(                new UpdateStudioInput("corporis") {{
                                defaultS3Location = "excepturi";
                                description = "natus";
                                name = "Alonzo Collins";
                                subnetIds = new String[]{{
                                    add("eos"),
                                    add("voluptatem"),
                                    add("temporibus"),
                                    add("id"),
                                }};
                            }};, UpdateStudioXAmzTargetEnum.ELASTIC_MAP_REDUCE_UPDATE_STUDIO) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "a";
                xAmzDate = "minus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "quia";
            }};            

            UpdateStudioResponse res = sdk.sdk.updateStudio(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStudioSessionMapping

Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStudioSessionMappingRequest;
import org.openapis.openapi.models.operations.UpdateStudioSessionMappingResponse;
import org.openapis.openapi.models.operations.UpdateStudioSessionMappingXAmzTargetEnum;
import org.openapis.openapi.models.shared.IdentityTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateStudioSessionMappingInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStudioSessionMappingRequest req = new UpdateStudioSessionMappingRequest(                new UpdateStudioSessionMappingInput(IdentityTypeEnum.USER, "deserunt", "sed") {{
                                identityId = "blanditiis";
                                identityName = "sint";
                            }};, UpdateStudioSessionMappingXAmzTargetEnum.ELASTIC_MAP_REDUCE_UPDATE_STUDIO_SESSION_MAPPING) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "molestiae";
                xAmzDate = "itaque";
                xAmzSecurityToken = "rem";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "non";
            }};            

            UpdateStudioSessionMappingResponse res = sdk.sdk.updateStudioSessionMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
