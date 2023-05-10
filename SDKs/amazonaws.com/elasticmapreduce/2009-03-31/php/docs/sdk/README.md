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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddInstanceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddInstanceFleetInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\EbsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EbsBlockDeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\VolumeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetProvisioningSpecifications;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandProvisioningSpecification;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandProvisioningAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationOptions;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationUsageStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningTimeoutActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetResizingSpecifications;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandResizingSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SpotResizingSpecification;
use \OpenAPI\OpenAPI\Models\Operations\AddInstanceFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddInstanceFleetRequest();
    $request->addInstanceFleetInput = new AddInstanceFleetInput();
    $request->addInstanceFleetInput->clusterId = 'excepturi';
    $request->addInstanceFleetInput->instanceFleet = new InstanceFleetConfig();
    $request->addInstanceFleetInput->instanceFleet->instanceFleetType = InstanceFleetTypeEnum::CORE;
    $request->addInstanceFleetInput->instanceFleet->instanceTypeConfigs = [
        new InstanceTypeConfig(),
        new InstanceTypeConfig(),
        new InstanceTypeConfig(),
        new InstanceTypeConfig(),
    ];
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications = new InstanceFleetProvisioningSpecifications();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification = new OnDemandProvisioningSpecification();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->allocationStrategy = OnDemandProvisioningAllocationStrategyEnum::LOWEST_PRICE;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions = new OnDemandCapacityReservationOptions();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions->capacityReservationPreference = OnDemandCapacityReservationPreferenceEnum::NONE;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions->capacityReservationResourceGroupArn = 'ab';
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions->usageStrategy = OnDemandCapacityReservationUsageStrategyEnum::USE_CAPACITY_RESERVATIONS_FIRST;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification = new SpotProvisioningSpecification();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->allocationStrategy = SpotProvisioningAllocationStrategyEnum::CAPACITY_OPTIMIZED;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->blockDurationMinutes = 337396;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->timeoutAction = SpotProvisioningTimeoutActionEnum::SWITCH_TO_ON_DEMAND;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->timeoutDurationMinutes = 648172;
    $request->addInstanceFleetInput->instanceFleet->name = 'Roberta Sipes';
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications = new InstanceFleetResizingSpecifications();
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->onDemandResizeSpecification = new OnDemandResizingSpecification();
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->onDemandResizeSpecification->timeoutDurationMinutes = 140350;
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->spotResizeSpecification = new SpotResizingSpecification();
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->spotResizeSpecification->timeoutDurationMinutes = 870013;
    $request->addInstanceFleetInput->instanceFleet->targetOnDemandCapacity = 870088;
    $request->addInstanceFleetInput->instanceFleet->targetSpotCapacity = 978619;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = AddInstanceFleetXAmzTargetEnum::ELASTIC_MAP_REDUCE_ADD_INSTANCE_FLEET;

    $response = $sdk->sdk->addInstanceFleet($request);

    if ($response->addInstanceFleetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addInstanceGroups

Adds one or more instance groups to a running cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddInstanceGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddInstanceGroupsInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ScalingConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ScalingRule;
use \OpenAPI\OpenAPI\Models\Shared\ScalingAction;
use \OpenAPI\OpenAPI\Models\Shared\MarketTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimpleScalingPolicyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalingTrigger;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchAlarmDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\StatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\EbsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EbsBlockDeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\VolumeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InstanceRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddInstanceGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddInstanceGroupsRequest();
    $request->addInstanceGroupsInput = new AddInstanceGroupsInput();
    $request->addInstanceGroupsInput->instanceGroups = [
        new InstanceGroupConfig(),
    ];
    $request->addInstanceGroupsInput->jobFlowId = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = AddInstanceGroupsXAmzTargetEnum::ELASTIC_MAP_REDUCE_ADD_INSTANCE_GROUPS;

    $response = $sdk->sdk->addInstanceGroups($request);

    if ($response->addInstanceGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addJobFlowSteps

<p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p> <note> <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total of 10240 characters.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddJobFlowStepsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddJobFlowStepsInput;
use \OpenAPI\OpenAPI\Models\Shared\StepConfig;
use \OpenAPI\OpenAPI\Models\Shared\ActionOnFailureEnum;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJarStepConfig;
use \OpenAPI\OpenAPI\Models\Shared\KeyValue;
use \OpenAPI\OpenAPI\Models\Operations\AddJobFlowStepsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddJobFlowStepsRequest();
    $request->addJobFlowStepsInput = new AddJobFlowStepsInput();
    $request->addJobFlowStepsInput->executionRoleArn = 'beatae';
    $request->addJobFlowStepsInput->jobFlowId = 'commodi';
    $request->addJobFlowStepsInput->steps = [
        new StepConfig(),
        new StepConfig(),
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = AddJobFlowStepsXAmzTargetEnum::ELASTIC_MAP_REDUCE_ADD_JOB_FLOW_STEPS;

    $response = $sdk->sdk->addJobFlowSteps($request);

    if ($response->addJobFlowStepsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTags

Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsRequest();
    $request->addTagsInput = new AddTagsInput();
    $request->addTagsInput->resourceId = 'aspernatur';
    $request->addTagsInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = AddTagsXAmzTargetEnum::ELASTIC_MAP_REDUCE_ADD_TAGS;

    $response = $sdk->sdk->addTags($request);

    if ($response->addTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelSteps

Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelStepsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelStepsInput;
use \OpenAPI\OpenAPI\Models\Shared\StepCancellationOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CancelStepsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelStepsRequest();
    $request->cancelStepsInput = new CancelStepsInput();
    $request->cancelStepsInput->clusterId = 'hic';
    $request->cancelStepsInput->stepCancellationOption = StepCancellationOptionEnum::TERMINATE_PROCESS;
    $request->cancelStepsInput->stepIds = [
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
    $request->xAmzTarget = CancelStepsXAmzTargetEnum::ELASTIC_MAP_REDUCE_CANCEL_STEPS;

    $response = $sdk->sdk->cancelSteps($request);

    if ($response->cancelStepsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSecurityConfiguration

Creates a security configuration, which is stored in the service and can be specified when a cluster is created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSecurityConfigurationInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSecurityConfigurationRequest();
    $request->createSecurityConfigurationInput = new CreateSecurityConfigurationInput();
    $request->createSecurityConfigurationInput->name = 'Cameron Dach';
    $request->createSecurityConfigurationInput->securityConfiguration = 'explicabo';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = CreateSecurityConfigurationXAmzTargetEnum::ELASTIC_MAP_REDUCE_CREATE_SECURITY_CONFIGURATION;

    $response = $sdk->sdk->createSecurityConfiguration($request);

    if ($response->createSecurityConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStudio

Creates a new Amazon EMR Studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStudioInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStudioRequest();
    $request->createStudioInput = new CreateStudioInput();
    $request->createStudioInput->authMode = AuthModeEnum::SSO;
    $request->createStudioInput->defaultS3Location = 'culpa';
    $request->createStudioInput->description = 'doloribus';
    $request->createStudioInput->engineSecurityGroupId = 'sapiente';
    $request->createStudioInput->idpAuthUrl = 'architecto';
    $request->createStudioInput->idpRelayStateParameterName = 'mollitia';
    $request->createStudioInput->name = 'Cecilia Crooks';
    $request->createStudioInput->serviceRole = 'occaecati';
    $request->createStudioInput->subnetIds = [
        'commodi',
        'quam',
    ];
    $request->createStudioInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createStudioInput->userRole = 'velit';
    $request->createStudioInput->vpcId = 'error';
    $request->createStudioInput->workspaceSecurityGroupId = 'quia';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = CreateStudioXAmzTargetEnum::ELASTIC_MAP_REDUCE_CREATE_STUDIO;

    $response = $sdk->sdk->createStudio($request);

    if ($response->createStudioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStudioSessionMapping

Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioSessionMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStudioSessionMappingInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioSessionMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStudioSessionMappingRequest();
    $request->createStudioSessionMappingInput = new CreateStudioSessionMappingInput();
    $request->createStudioSessionMappingInput->identityId = 'sequi';
    $request->createStudioSessionMappingInput->identityName = 'tenetur';
    $request->createStudioSessionMappingInput->identityType = IdentityTypeEnum::USER;
    $request->createStudioSessionMappingInput->sessionPolicyArn = 'id';
    $request->createStudioSessionMappingInput->studioId = 'possimus';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreateStudioSessionMappingXAmzTargetEnum::ELASTIC_MAP_REDUCE_CREATE_STUDIO_SESSION_MAPPING;

    $response = $sdk->sdk->createStudioSessionMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecurityConfiguration

Deletes a security configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSecurityConfigurationInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSecurityConfigurationRequest();
    $request->deleteSecurityConfigurationInput = new DeleteSecurityConfigurationInput();
    $request->deleteSecurityConfigurationInput->name = 'Caleb Koss';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = DeleteSecurityConfigurationXAmzTargetEnum::ELASTIC_MAP_REDUCE_DELETE_SECURITY_CONFIGURATION;

    $response = $sdk->sdk->deleteSecurityConfiguration($request);

    if ($response->deleteSecurityConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStudio

Removes an Amazon EMR Studio from the Studio metadata store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStudioInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStudioRequest();
    $request->deleteStudioInput = new DeleteStudioInput();
    $request->deleteStudioInput->studioId = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = DeleteStudioXAmzTargetEnum::ELASTIC_MAP_REDUCE_DELETE_STUDIO;

    $response = $sdk->sdk->deleteStudio($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStudioSessionMapping

Removes a user or group from an Amazon EMR Studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioSessionMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStudioSessionMappingInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioSessionMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStudioSessionMappingRequest();
    $request->deleteStudioSessionMappingInput = new DeleteStudioSessionMappingInput();
    $request->deleteStudioSessionMappingInput->identityId = 'enim';
    $request->deleteStudioSessionMappingInput->identityName = 'accusamus';
    $request->deleteStudioSessionMappingInput->identityType = IdentityTypeEnum::USER;
    $request->deleteStudioSessionMappingInput->studioId = 'repudiandae';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteStudioSessionMappingXAmzTargetEnum::ELASTIC_MAP_REDUCE_DELETE_STUDIO_SESSION_MAPPING;

    $response = $sdk->sdk->deleteStudioSessionMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCluster

Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeClusterInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClusterRequest();
    $request->describeClusterInput = new DescribeClusterInput();
    $request->describeClusterInput->clusterId = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = DescribeClusterXAmzTargetEnum::ELASTIC_MAP_REDUCE_DESCRIBE_CLUSTER;

    $response = $sdk->sdk->describeCluster($request);

    if ($response->describeClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeJobFlows~~

<p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobFlowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeJobFlowsInput;
use \OpenAPI\OpenAPI\Models\Shared\JobFlowExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobFlowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobFlowsRequest();
    $request->describeJobFlowsInput = new DescribeJobFlowsInput();
    $request->describeJobFlowsInput->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T17:20:08.756Z');
    $request->describeJobFlowsInput->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T09:29:06.042Z');
    $request->describeJobFlowsInput->jobFlowIds = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->describeJobFlowsInput->jobFlowStates = [
        JobFlowExecutionStateEnum::RUNNING,
        JobFlowExecutionStateEnum::BOOTSTRAPPING,
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DescribeJobFlowsXAmzTargetEnum::ELASTIC_MAP_REDUCE_DESCRIBE_JOB_FLOWS;

    $response = $sdk->sdk->describeJobFlows($request);

    if ($response->describeJobFlowsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeNotebookExecution

Provides details of a notebook execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotebookExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeNotebookExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotebookExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNotebookExecutionRequest();
    $request->describeNotebookExecutionInput = new DescribeNotebookExecutionInput();
    $request->describeNotebookExecutionInput->notebookExecutionId = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DescribeNotebookExecutionXAmzTargetEnum::ELASTIC_MAP_REDUCE_DESCRIBE_NOTEBOOK_EXECUTION;

    $response = $sdk->sdk->describeNotebookExecution($request);

    if ($response->describeNotebookExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReleaseLabel

Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReleaseLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReleaseLabelInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReleaseLabelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReleaseLabelRequest();
    $request->describeReleaseLabelInput = new DescribeReleaseLabelInput();
    $request->describeReleaseLabelInput->maxResults = 962189;
    $request->describeReleaseLabelInput->nextToken = 'eum';
    $request->describeReleaseLabelInput->releaseLabel = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DescribeReleaseLabelXAmzTargetEnum::ELASTIC_MAP_REDUCE_DESCRIBE_RELEASE_LABEL;

    $response = $sdk->sdk->describeReleaseLabel($request);

    if ($response->describeReleaseLabelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSecurityConfiguration

Provides the details of a security configuration by returning the configuration JSON.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSecurityConfigurationInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSecurityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSecurityConfigurationRequest();
    $request->describeSecurityConfigurationInput = new DescribeSecurityConfigurationInput();
    $request->describeSecurityConfigurationInput->name = 'Raquel Wilderman';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DescribeSecurityConfigurationXAmzTargetEnum::ELASTIC_MAP_REDUCE_DESCRIBE_SECURITY_CONFIGURATION;

    $response = $sdk->sdk->describeSecurityConfiguration($request);

    if ($response->describeSecurityConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStep

Provides more detail about the cluster step.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStepRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStepInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStepXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStepRequest();
    $request->describeStepInput = new DescribeStepInput();
    $request->describeStepInput->clusterId = 'facere';
    $request->describeStepInput->stepId = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeStepXAmzTargetEnum::ELASTIC_MAP_REDUCE_DESCRIBE_STEP;

    $response = $sdk->sdk->describeStep($request);

    if ($response->describeStepOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStudio

Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStudioRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStudioInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStudioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStudioRequest();
    $request->describeStudioInput = new DescribeStudioInput();
    $request->describeStudioInput->studioId = 'delectus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DescribeStudioXAmzTargetEnum::ELASTIC_MAP_REDUCE_DESCRIBE_STUDIO;

    $response = $sdk->sdk->describeStudio($request);

    if ($response->describeStudioOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutoTerminationPolicy

Returns the auto-termination policy for an Amazon EMR cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoTerminationPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAutoTerminationPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoTerminationPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutoTerminationPolicyRequest();
    $request->getAutoTerminationPolicyInput = new GetAutoTerminationPolicyInput();
    $request->getAutoTerminationPolicyInput->clusterId = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetAutoTerminationPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_GET_AUTO_TERMINATION_POLICY;

    $response = $sdk->sdk->getAutoTerminationPolicy($request);

    if ($response->getAutoTerminationPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockPublicAccessConfiguration

Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockPublicAccessConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockPublicAccessConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockPublicAccessConfigurationRequest();
    $request->requestBody = [
        'magnam' => 'distinctio',
        'id' => 'labore',
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = GetBlockPublicAccessConfigurationXAmzTargetEnum::ELASTIC_MAP_REDUCE_GET_BLOCK_PUBLIC_ACCESS_CONFIGURATION;

    $response = $sdk->sdk->getBlockPublicAccessConfiguration($request);

    if ($response->getBlockPublicAccessConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterSessionCredentials

Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterSessionCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetClusterSessionCredentialsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterSessionCredentialsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterSessionCredentialsRequest();
    $request->getClusterSessionCredentialsInput = new GetClusterSessionCredentialsInput();
    $request->getClusterSessionCredentialsInput->clusterId = 'architecto';
    $request->getClusterSessionCredentialsInput->executionRoleArn = 'magnam';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = GetClusterSessionCredentialsXAmzTargetEnum::ELASTIC_MAP_REDUCE_GET_CLUSTER_SESSION_CREDENTIALS;

    $response = $sdk->sdk->getClusterSessionCredentials($request);

    if ($response->getClusterSessionCredentialsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getManagedScalingPolicy

Fetches the attached managed scaling policy for an Amazon EMR cluster. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetManagedScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetManagedScalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetManagedScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetManagedScalingPolicyRequest();
    $request->getManagedScalingPolicyInput = new GetManagedScalingPolicyInput();
    $request->getManagedScalingPolicyInput->clusterId = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = GetManagedScalingPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_GET_MANAGED_SCALING_POLICY;

    $response = $sdk->sdk->getManagedScalingPolicy($request);

    if ($response->getManagedScalingPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudioSessionMapping

Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudioSessionMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetStudioSessionMappingInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetStudioSessionMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudioSessionMappingRequest();
    $request->getStudioSessionMappingInput = new GetStudioSessionMappingInput();
    $request->getStudioSessionMappingInput->identityId = 'nemo';
    $request->getStudioSessionMappingInput->identityName = 'quasi';
    $request->getStudioSessionMappingInput->identityType = IdentityTypeEnum::USER;
    $request->getStudioSessionMappingInput->studioId = 'doloribus';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = GetStudioSessionMappingXAmzTargetEnum::ELASTIC_MAP_REDUCE_GET_STUDIO_SESSION_MAPPING;

    $response = $sdk->sdk->getStudioSessionMapping($request);

    if ($response->getStudioSessionMappingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBootstrapActions

Provides information about the bootstrap actions associated with a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBootstrapActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBootstrapActionsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListBootstrapActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBootstrapActionsRequest();
    $request->listBootstrapActionsInput = new ListBootstrapActionsInput();
    $request->listBootstrapActionsInput->clusterId = 'architecto';
    $request->listBootstrapActionsInput->marker = 'repudiandae';
    $request->marker = 'ullam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = ListBootstrapActionsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_BOOTSTRAP_ACTIONS;

    $response = $sdk->sdk->listBootstrapActions($request);

    if ($response->listBootstrapActionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusters

Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListClustersInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClustersRequest();
    $request->listClustersInput = new ListClustersInput();
    $request->listClustersInput->clusterStates = [
        ClusterStateEnum::BOOTSTRAPPING,
    ];
    $request->listClustersInput->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-08T15:23:46.576Z');
    $request->listClustersInput->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T19:20:12.159Z');
    $request->listClustersInput->marker = 'quo';
    $request->marker = 'illum';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = ListClustersXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_CLUSTERS;

    $response = $sdk->sdk->listClusters($request);

    if ($response->listClustersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstanceFleets

<p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstanceFleetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInstanceFleetsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListInstanceFleetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstanceFleetsRequest();
    $request->listInstanceFleetsInput = new ListInstanceFleetsInput();
    $request->listInstanceFleetsInput->clusterId = 'ab';
    $request->listInstanceFleetsInput->marker = 'maiores';
    $request->marker = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = ListInstanceFleetsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_INSTANCE_FLEETS;

    $response = $sdk->sdk->listInstanceFleets($request);

    if ($response->listInstanceFleetsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstanceGroups

Provides all available details about the instance groups in a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstanceGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInstanceGroupsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListInstanceGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstanceGroupsRequest();
    $request->listInstanceGroupsInput = new ListInstanceGroupsInput();
    $request->listInstanceGroupsInput->clusterId = 'voluptatibus';
    $request->listInstanceGroupsInput->marker = 'perferendis';
    $request->marker = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListInstanceGroupsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_INSTANCE_GROUPS;

    $response = $sdk->sdk->listInstanceGroups($request);

    if ($response->listInstanceGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstances

Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstancesRequest();
    $request->listInstancesInput = new ListInstancesInput();
    $request->listInstancesInput->clusterId = 'dolores';
    $request->listInstancesInput->instanceFleetId = 'quis';
    $request->listInstancesInput->instanceFleetType = InstanceFleetTypeEnum::CORE;
    $request->listInstancesInput->instanceGroupId = 'dignissimos';
    $request->listInstancesInput->instanceGroupTypes = [
        InstanceGroupTypeEnum::CORE,
    ];
    $request->listInstancesInput->instanceStates = [
        InstanceStateEnum::AWAITING_FULFILLMENT,
    ];
    $request->listInstancesInput->marker = 'perferendis';
    $request->marker = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = ListInstancesXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_INSTANCES;

    $response = $sdk->sdk->listInstances($request);

    if ($response->listInstancesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotebookExecutions

Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNotebookExecutionsInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookExecutionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotebookExecutionsRequest();
    $request->listNotebookExecutionsInput = new ListNotebookExecutionsInput();
    $request->listNotebookExecutionsInput->editorId = 'omnis';
    $request->listNotebookExecutionsInput->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-22T10:35:49.400Z');
    $request->listNotebookExecutionsInput->marker = 'voluptatem';
    $request->listNotebookExecutionsInput->status = NotebookExecutionStatusEnum::STOP_PENDING;
    $request->listNotebookExecutionsInput->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-02T11:46:10.299Z');
    $request->marker = 'error';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = ListNotebookExecutionsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_NOTEBOOK_EXECUTIONS;

    $response = $sdk->sdk->listNotebookExecutions($request);

    if ($response->listNotebookExecutionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReleaseLabels

Retrieves release labels of EMR services in the region where the API is called.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReleaseLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReleaseLabelsInput;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseLabelFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListReleaseLabelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReleaseLabelsRequest();
    $request->listReleaseLabelsInput = new ListReleaseLabelsInput();
    $request->listReleaseLabelsInput->filters = new ReleaseLabelFilter();
    $request->listReleaseLabelsInput->filters->application = 'iste';
    $request->listReleaseLabelsInput->filters->prefix = 'dolorum';
    $request->listReleaseLabelsInput->maxResults = 535633;
    $request->listReleaseLabelsInput->nextToken = 'pariatur';
    $request->maxResults = 'provident';
    $request->nextToken = 'nobis';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ListReleaseLabelsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_RELEASE_LABELS;

    $response = $sdk->sdk->listReleaseLabels($request);

    if ($response->listReleaseLabelsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityConfigurations

Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSecurityConfigurationsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityConfigurationsRequest();
    $request->listSecurityConfigurationsInput = new ListSecurityConfigurationsInput();
    $request->listSecurityConfigurationsInput->marker = 'dolor';
    $request->marker = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListSecurityConfigurationsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_SECURITY_CONFIGURATIONS;

    $response = $sdk->sdk->listSecurityConfigurations($request);

    if ($response->listSecurityConfigurationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSteps

Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStepsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStepsInput;
use \OpenAPI\OpenAPI\Models\Shared\StepStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListStepsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStepsRequest();
    $request->listStepsInput = new ListStepsInput();
    $request->listStepsInput->clusterId = 'amet';
    $request->listStepsInput->marker = 'dolorum';
    $request->listStepsInput->stepIds = [
        'veritatis',
        'ipsa',
    ];
    $request->listStepsInput->stepStates = [
        StepStateEnum::COMPLETED,
    ];
    $request->marker = 'odio';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = ListStepsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_STEPS;

    $response = $sdk->sdk->listSteps($request);

    if ($response->listStepsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStudioSessionMappings

Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStudioSessionMappingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStudioSessionMappingsInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListStudioSessionMappingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStudioSessionMappingsRequest();
    $request->listStudioSessionMappingsInput = new ListStudioSessionMappingsInput();
    $request->listStudioSessionMappingsInput->identityType = IdentityTypeEnum::GROUP;
    $request->listStudioSessionMappingsInput->marker = 'sit';
    $request->listStudioSessionMappingsInput->studioId = 'fugiat';
    $request->marker = 'ab';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ListStudioSessionMappingsXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_STUDIO_SESSION_MAPPINGS;

    $response = $sdk->sdk->listStudioSessionMappings($request);

    if ($response->listStudioSessionMappingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStudios

Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStudiosRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStudiosInput;
use \OpenAPI\OpenAPI\Models\Operations\ListStudiosXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStudiosRequest();
    $request->listStudiosInput = new ListStudiosInput();
    $request->listStudiosInput->marker = 'necessitatibus';
    $request->marker = 'distinctio';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = ListStudiosXAmzTargetEnum::ELASTIC_MAP_REDUCE_LIST_STUDIOS;

    $response = $sdk->sdk->listStudios($request);

    if ($response->listStudiosOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyCluster

Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyClusterInput;
use \OpenAPI\OpenAPI\Models\Operations\ModifyClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyClusterRequest();
    $request->modifyClusterInput = new ModifyClusterInput();
    $request->modifyClusterInput->clusterId = 'aspernatur';
    $request->modifyClusterInput->stepConcurrencyLevel = 20651;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ModifyClusterXAmzTargetEnum::ELASTIC_MAP_REDUCE_MODIFY_CLUSTER;

    $response = $sdk->sdk->modifyCluster($request);

    if ($response->modifyClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyInstanceFleet

<p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyInstanceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyInstanceFleetInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetModifyConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetResizingSpecifications;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandResizingSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SpotResizingSpecification;
use \OpenAPI\OpenAPI\Models\Operations\ModifyInstanceFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyInstanceFleetRequest();
    $request->modifyInstanceFleetInput = new ModifyInstanceFleetInput();
    $request->modifyInstanceFleetInput->clusterId = 'provident';
    $request->modifyInstanceFleetInput->instanceFleet = new InstanceFleetModifyConfig();
    $request->modifyInstanceFleetInput->instanceFleet->instanceFleetId = 'minima';
    $request->modifyInstanceFleetInput->instanceFleet->resizeSpecifications = new InstanceFleetResizingSpecifications();
    $request->modifyInstanceFleetInput->instanceFleet->resizeSpecifications->onDemandResizeSpecification = new OnDemandResizingSpecification();
    $request->modifyInstanceFleetInput->instanceFleet->resizeSpecifications->onDemandResizeSpecification->timeoutDurationMinutes = 831049;
    $request->modifyInstanceFleetInput->instanceFleet->resizeSpecifications->spotResizeSpecification = new SpotResizingSpecification();
    $request->modifyInstanceFleetInput->instanceFleet->resizeSpecifications->spotResizeSpecification->timeoutDurationMinutes = 519711;
    $request->modifyInstanceFleetInput->instanceFleet->targetOnDemandCapacity = 628982;
    $request->modifyInstanceFleetInput->instanceFleet->targetSpotCapacity = 55;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = ModifyInstanceFleetXAmzTargetEnum::ELASTIC_MAP_REDUCE_MODIFY_INSTANCE_FLEET;

    $response = $sdk->sdk->modifyInstanceFleet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyInstanceGroups

ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyInstanceGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyInstanceGroupsInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupModifyConfig;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\ReconfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShrinkPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceResizePolicy;
use \OpenAPI\OpenAPI\Models\Operations\ModifyInstanceGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyInstanceGroupsRequest();
    $request->modifyInstanceGroupsInput = new ModifyInstanceGroupsInput();
    $request->modifyInstanceGroupsInput->clusterId = 'dolorum';
    $request->modifyInstanceGroupsInput->instanceGroups = [
        new InstanceGroupModifyConfig(),
        new InstanceGroupModifyConfig(),
        new InstanceGroupModifyConfig(),
        new InstanceGroupModifyConfig(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ModifyInstanceGroupsXAmzTargetEnum::ELASTIC_MAP_REDUCE_MODIFY_INSTANCE_GROUPS;

    $response = $sdk->sdk->modifyInstanceGroups($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAutoScalingPolicy

Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAutoScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAutoScalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ScalingConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ScalingRule;
use \OpenAPI\OpenAPI\Models\Shared\ScalingAction;
use \OpenAPI\OpenAPI\Models\Shared\MarketTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimpleScalingPolicyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalingTrigger;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchAlarmDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\StatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAutoScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAutoScalingPolicyRequest();
    $request->putAutoScalingPolicyInput = new PutAutoScalingPolicyInput();
    $request->putAutoScalingPolicyInput->autoScalingPolicy = new AutoScalingPolicy();
    $request->putAutoScalingPolicyInput->autoScalingPolicy->constraints = new ScalingConstraints();
    $request->putAutoScalingPolicyInput->autoScalingPolicy->constraints->maxCapacity = 730856;
    $request->putAutoScalingPolicyInput->autoScalingPolicy->constraints->minCapacity = 880298;
    $request->putAutoScalingPolicyInput->autoScalingPolicy->rules = [
        new ScalingRule(),
        new ScalingRule(),
    ];
    $request->putAutoScalingPolicyInput->clusterId = 'enim';
    $request->putAutoScalingPolicyInput->instanceGroupId = 'dolorem';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = PutAutoScalingPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_PUT_AUTO_SCALING_POLICY;

    $response = $sdk->sdk->putAutoScalingPolicy($request);

    if ($response->putAutoScalingPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAutoTerminationPolicy

<note> <p>Auto-termination is supported in Amazon EMR versions 5.30.0 and 6.1.0 and later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an auto-termination policy</a>.</p> </note> <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAutoTerminationPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAutoTerminationPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoTerminationPolicy;
use \OpenAPI\OpenAPI\Models\Operations\PutAutoTerminationPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAutoTerminationPolicyRequest();
    $request->putAutoTerminationPolicyInput = new PutAutoTerminationPolicyInput();
    $request->putAutoTerminationPolicyInput->autoTerminationPolicy = new AutoTerminationPolicy();
    $request->putAutoTerminationPolicyInput->autoTerminationPolicy->idleTimeout = 424685;
    $request->putAutoTerminationPolicyInput->clusterId = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = PutAutoTerminationPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_PUT_AUTO_TERMINATION_POLICY;

    $response = $sdk->sdk->putAutoTerminationPolicy($request);

    if ($response->putAutoTerminationPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putBlockPublicAccessConfiguration

Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutBlockPublicAccessConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutBlockPublicAccessConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\BlockPublicAccessConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Operations\PutBlockPublicAccessConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutBlockPublicAccessConfigurationRequest();
    $request->putBlockPublicAccessConfigurationInput = new PutBlockPublicAccessConfigurationInput();
    $request->putBlockPublicAccessConfigurationInput->blockPublicAccessConfiguration = new BlockPublicAccessConfiguration();
    $request->putBlockPublicAccessConfigurationInput->blockPublicAccessConfiguration->blockPublicSecurityGroupRules = false;
    $request->putBlockPublicAccessConfigurationInput->blockPublicAccessConfiguration->permittedPublicSecurityGroupRuleRanges = [
        new PortRange(),
        new PortRange(),
        new PortRange(),
        new PortRange(),
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = PutBlockPublicAccessConfigurationXAmzTargetEnum::ELASTIC_MAP_REDUCE_PUT_BLOCK_PUBLIC_ACCESS_CONFIGURATION;

    $response = $sdk->sdk->putBlockPublicAccessConfiguration($request);

    if ($response->putBlockPublicAccessConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putManagedScalingPolicy

Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutManagedScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutManagedScalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ComputeLimits;
use \OpenAPI\OpenAPI\Models\Shared\ComputeLimitsUnitTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutManagedScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutManagedScalingPolicyRequest();
    $request->putManagedScalingPolicyInput = new PutManagedScalingPolicyInput();
    $request->putManagedScalingPolicyInput->clusterId = 'dolores';
    $request->putManagedScalingPolicyInput->managedScalingPolicy = new ManagedScalingPolicy();
    $request->putManagedScalingPolicyInput->managedScalingPolicy->computeLimits = new ComputeLimits();
    $request->putManagedScalingPolicyInput->managedScalingPolicy->computeLimits->maximumCapacityUnits = 716860;
    $request->putManagedScalingPolicyInput->managedScalingPolicy->computeLimits->maximumCoreCapacityUnits = 704474;
    $request->putManagedScalingPolicyInput->managedScalingPolicy->computeLimits->maximumOnDemandCapacityUnits = 396060;
    $request->putManagedScalingPolicyInput->managedScalingPolicy->computeLimits->minimumCapacityUnits = 463150;
    $request->putManagedScalingPolicyInput->managedScalingPolicy->computeLimits->unitType = ComputeLimitsUnitTypeEnum::INSTANCES;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = PutManagedScalingPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_PUT_MANAGED_SCALING_POLICY;

    $response = $sdk->sdk->putManagedScalingPolicy($request);

    if ($response->putManagedScalingPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAutoScalingPolicy

Removes an automatic scaling policy from a specified instance group within an EMR cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAutoScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAutoScalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAutoScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAutoScalingPolicyRequest();
    $request->removeAutoScalingPolicyInput = new RemoveAutoScalingPolicyInput();
    $request->removeAutoScalingPolicyInput->clusterId = 'ullam';
    $request->removeAutoScalingPolicyInput->instanceGroupId = 'nam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = RemoveAutoScalingPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_REMOVE_AUTO_SCALING_POLICY;

    $response = $sdk->sdk->removeAutoScalingPolicy($request);

    if ($response->removeAutoScalingPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAutoTerminationPolicy

Removes an auto-termination policy from an Amazon EMR cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAutoTerminationPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAutoTerminationPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAutoTerminationPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAutoTerminationPolicyRequest();
    $request->removeAutoTerminationPolicyInput = new RemoveAutoTerminationPolicyInput();
    $request->removeAutoTerminationPolicyInput->clusterId = 'ipsum';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = RemoveAutoTerminationPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_REMOVE_AUTO_TERMINATION_POLICY;

    $response = $sdk->sdk->removeAutoTerminationPolicy($request);

    if ($response->removeAutoTerminationPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeManagedScalingPolicy

 Removes a managed scaling policy from a specified EMR cluster. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveManagedScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveManagedScalingPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\RemoveManagedScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveManagedScalingPolicyRequest();
    $request->removeManagedScalingPolicyInput = new RemoveManagedScalingPolicyInput();
    $request->removeManagedScalingPolicyInput->clusterId = 'dolorem';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = RemoveManagedScalingPolicyXAmzTargetEnum::ELASTIC_MAP_REDUCE_REMOVE_MANAGED_SCALING_POLICY;

    $response = $sdk->sdk->removeManagedScalingPolicy($request);

    if ($response->removeManagedScalingPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTags

<p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsInput;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsRequest();
    $request->removeTagsInput = new RemoveTagsInput();
    $request->removeTagsInput->resourceId = 'quas';
    $request->removeTagsInput->tagKeys = [
        'consequatur',
        'est',
        'repellendus',
        'porro',
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = RemoveTagsXAmzTargetEnum::ELASTIC_MAP_REDUCE_REMOVE_TAGS;

    $response = $sdk->sdk->removeTags($request);

    if ($response->removeTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runJobFlow

<p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop.</p> <p>For long-running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RunJobFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunJobFlowInput;
use \OpenAPI\OpenAPI\Models\Shared\Application;
use \OpenAPI\OpenAPI\Models\Shared\AutoTerminationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BootstrapActionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScriptBootstrapActionConfig;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\JobFlowInstancesConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\EbsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EbsBlockDeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\VolumeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetProvisioningSpecifications;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandProvisioningSpecification;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandProvisioningAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationOptions;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationUsageStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningTimeoutActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetResizingSpecifications;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandResizingSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SpotResizingSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ScalingConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ScalingRule;
use \OpenAPI\OpenAPI\Models\Shared\ScalingAction;
use \OpenAPI\OpenAPI\Models\Shared\MarketTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimpleScalingPolicyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalingTrigger;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchAlarmDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\StatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementType;
use \OpenAPI\OpenAPI\Models\Shared\KerberosAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ComputeLimits;
use \OpenAPI\OpenAPI\Models\Shared\ComputeLimitsUnitTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SupportedProductConfig;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupConfig;
use \OpenAPI\OpenAPI\Models\Shared\PlacementGroupStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepoUpgradeOnBootEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScaleDownBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\StepConfig;
use \OpenAPI\OpenAPI\Models\Shared\ActionOnFailureEnum;
use \OpenAPI\OpenAPI\Models\Shared\HadoopJarStepConfig;
use \OpenAPI\OpenAPI\Models\Shared\KeyValue;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RunJobFlowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunJobFlowRequest();
    $request->runJobFlowInput = new RunJobFlowInput();
    $request->runJobFlowInput->additionalInfo = 'odio';
    $request->runJobFlowInput->amiVersion = 'occaecati';
    $request->runJobFlowInput->applications = [
        new Application(),
        new Application(),
        new Application(),
        new Application(),
    ];
    $request->runJobFlowInput->autoScalingRole = 'quisquam';
    $request->runJobFlowInput->autoTerminationPolicy = new AutoTerminationPolicy();
    $request->runJobFlowInput->autoTerminationPolicy->idleTimeout = 876506;
    $request->runJobFlowInput->bootstrapActions = [
        new BootstrapActionConfig(),
        new BootstrapActionConfig(),
        new BootstrapActionConfig(),
    ];
    $request->runJobFlowInput->configurations = [
        new Configuration(),
        new Configuration(),
    ];
    $request->runJobFlowInput->customAmiId = 'ipsum';
    $request->runJobFlowInput->ebsRootVolumeSize = 961571;
    $request->runJobFlowInput->instances = new JobFlowInstancesConfig();
    $request->runJobFlowInput->instances->additionalMasterSecurityGroups = [
        'consectetur',
        'vero',
    ];
    $request->runJobFlowInput->instances->additionalSlaveSecurityGroups = [
        'dignissimos',
        'hic',
        'distinctio',
        'quod',
    ];
    $request->runJobFlowInput->instances->ec2KeyName = 'odio';
    $request->runJobFlowInput->instances->ec2SubnetId = 'similique';
    $request->runJobFlowInput->instances->ec2SubnetIds = [
        'vero',
        'ducimus',
        'dolore',
    ];
    $request->runJobFlowInput->instances->emrManagedMasterSecurityGroup = 'quibusdam';
    $request->runJobFlowInput->instances->emrManagedSlaveSecurityGroup = 'illum';
    $request->runJobFlowInput->instances->hadoopVersion = 'sequi';
    $request->runJobFlowInput->instances->instanceCount = 617877;
    $request->runJobFlowInput->instances->instanceFleets = [
        new InstanceFleetConfig(),
        new InstanceFleetConfig(),
        new InstanceFleetConfig(),
        new InstanceFleetConfig(),
    ];
    $request->runJobFlowInput->instances->instanceGroups = [
        new InstanceGroupConfig(),
    ];
    $request->runJobFlowInput->instances->keepJobFlowAliveWhenNoSteps = false;
    $request->runJobFlowInput->instances->masterInstanceType = 'voluptatibus';
    $request->runJobFlowInput->instances->placement = new PlacementType();
    $request->runJobFlowInput->instances->placement->availabilityZone = 'exercitationem';
    $request->runJobFlowInput->instances->placement->availabilityZones = [
        'fugit',
        'porro',
        'maiores',
        'doloribus',
    ];
    $request->runJobFlowInput->instances->serviceAccessSecurityGroup = 'iusto';
    $request->runJobFlowInput->instances->slaveInstanceType = 'eligendi';
    $request->runJobFlowInput->instances->terminationProtected = false;
    $request->runJobFlowInput->jobFlowRole = 'ducimus';
    $request->runJobFlowInput->kerberosAttributes = new KerberosAttributes();
    $request->runJobFlowInput->kerberosAttributes->adDomainJoinPassword = 'alias';
    $request->runJobFlowInput->kerberosAttributes->adDomainJoinUser = 'officia';
    $request->runJobFlowInput->kerberosAttributes->crossRealmTrustPrincipalPassword = 'tempora';
    $request->runJobFlowInput->kerberosAttributes->kdcAdminPassword = 'ipsam';
    $request->runJobFlowInput->kerberosAttributes->realm = 'ea';
    $request->runJobFlowInput->logEncryptionKmsKeyId = 'aspernatur';
    $request->runJobFlowInput->logUri = 'vel';
    $request->runJobFlowInput->managedScalingPolicy = new ManagedScalingPolicy();
    $request->runJobFlowInput->managedScalingPolicy->computeLimits = new ComputeLimits();
    $request->runJobFlowInput->managedScalingPolicy->computeLimits->maximumCapacityUnits = 822118;
    $request->runJobFlowInput->managedScalingPolicy->computeLimits->maximumCoreCapacityUnits = 297842;
    $request->runJobFlowInput->managedScalingPolicy->computeLimits->maximumOnDemandCapacityUnits = 189848;
    $request->runJobFlowInput->managedScalingPolicy->computeLimits->minimumCapacityUnits = 401132;
    $request->runJobFlowInput->managedScalingPolicy->computeLimits->unitType = ComputeLimitsUnitTypeEnum::INSTANCES;
    $request->runJobFlowInput->name = 'Ms. Cindy Wuckert';
    $request->runJobFlowInput->newSupportedProducts = [
        new SupportedProductConfig(),
        new SupportedProductConfig(),
        new SupportedProductConfig(),
    ];
    $request->runJobFlowInput->osReleaseLabel = 'voluptatibus';
    $request->runJobFlowInput->placementGroupConfigs = [
        new PlacementGroupConfig(),
        new PlacementGroupConfig(),
    ];
    $request->runJobFlowInput->releaseLabel = 'sapiente';
    $request->runJobFlowInput->repoUpgradeOnBoot = RepoUpgradeOnBootEnum::NONE;
    $request->runJobFlowInput->scaleDownBehavior = ScaleDownBehaviorEnum::TERMINATE_AT_TASK_COMPLETION;
    $request->runJobFlowInput->securityConfiguration = 'ea';
    $request->runJobFlowInput->serviceRole = 'impedit';
    $request->runJobFlowInput->stepConcurrencyLevel = 359271;
    $request->runJobFlowInput->steps = [
        new StepConfig(),
        new StepConfig(),
    ];
    $request->runJobFlowInput->supportedProducts = [
        'inventore',
        'magnam',
    ];
    $request->runJobFlowInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->runJobFlowInput->visibleToAllUsers = false;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = RunJobFlowXAmzTargetEnum::ELASTIC_MAP_REDUCE_RUN_JOB_FLOW;

    $response = $sdk->sdk->runJobFlow($request);

    if ($response->runJobFlowOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTerminationProtection

<p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetTerminationProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetTerminationProtectionInput;
use \OpenAPI\OpenAPI\Models\Operations\SetTerminationProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTerminationProtectionRequest();
    $request->setTerminationProtectionInput = new SetTerminationProtectionInput();
    $request->setTerminationProtectionInput->jobFlowIds = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->setTerminationProtectionInput->terminationProtected = false;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = SetTerminationProtectionXAmzTargetEnum::ELASTIC_MAP_REDUCE_SET_TERMINATION_PROTECTION;

    $response = $sdk->sdk->setTerminationProtection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setVisibleToAllUsers

<important> <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access Management for EMR</a>. </p> </important> <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetVisibleToAllUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetVisibleToAllUsersInput;
use \OpenAPI\OpenAPI\Models\Operations\SetVisibleToAllUsersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetVisibleToAllUsersRequest();
    $request->setVisibleToAllUsersInput = new SetVisibleToAllUsersInput();
    $request->setVisibleToAllUsersInput->jobFlowIds = [
        'laborum',
        'placeat',
        'velit',
    ];
    $request->setVisibleToAllUsersInput->visibleToAllUsers = false;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = SetVisibleToAllUsersXAmzTargetEnum::ELASTIC_MAP_REDUCE_SET_VISIBLE_TO_ALL_USERS;

    $response = $sdk->sdk->setVisibleToAllUsers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startNotebookExecution

Starts a notebook execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartNotebookExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartNotebookExecutionInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionEngineConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\StartNotebookExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartNotebookExecutionRequest();
    $request->startNotebookExecutionInput = new StartNotebookExecutionInput();
    $request->startNotebookExecutionInput->editorId = 'libero';
    $request->startNotebookExecutionInput->executionEngine = new ExecutionEngineConfig();
    $request->startNotebookExecutionInput->executionEngine->id = '14429074-7477-48a7-bd46-6d28c10ab3cd';
    $request->startNotebookExecutionInput->executionEngine->masterInstanceSecurityGroupId = 'quo';
    $request->startNotebookExecutionInput->executionEngine->type = ExecutionEngineTypeEnum::EMR;
    $request->startNotebookExecutionInput->notebookExecutionName = 'fuga';
    $request->startNotebookExecutionInput->notebookInstanceSecurityGroupId = 'eius';
    $request->startNotebookExecutionInput->notebookParams = 'eos';
    $request->startNotebookExecutionInput->relativePath = 'voluptas';
    $request->startNotebookExecutionInput->serviceRole = 'ab';
    $request->startNotebookExecutionInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = StartNotebookExecutionXAmzTargetEnum::ELASTIC_MAP_REDUCE_START_NOTEBOOK_EXECUTION;

    $response = $sdk->sdk->startNotebookExecution($request);

    if ($response->startNotebookExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopNotebookExecution

Stops a notebook execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopNotebookExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopNotebookExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\StopNotebookExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopNotebookExecutionRequest();
    $request->stopNotebookExecutionInput = new StopNotebookExecutionInput();
    $request->stopNotebookExecutionInput->notebookExecutionId = 'esse';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = StopNotebookExecutionXAmzTargetEnum::ELASTIC_MAP_REDUCE_STOP_NOTEBOOK_EXECUTION;

    $response = $sdk->sdk->stopNotebookExecution($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateJobFlows

<p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateJobFlowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminateJobFlowsInput;
use \OpenAPI\OpenAPI\Models\Operations\TerminateJobFlowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateJobFlowsRequest();
    $request->terminateJobFlowsInput = new TerminateJobFlowsInput();
    $request->terminateJobFlowsInput->jobFlowIds = [
        'accusamus',
        'aliquam',
        'odio',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = TerminateJobFlowsXAmzTargetEnum::ELASTIC_MAP_REDUCE_TERMINATE_JOB_FLOWS;

    $response = $sdk->sdk->terminateJobFlows($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStudio

Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStudioInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStudioRequest();
    $request->updateStudioInput = new UpdateStudioInput();
    $request->updateStudioInput->defaultS3Location = 'porro';
    $request->updateStudioInput->description = 'eum';
    $request->updateStudioInput->name = 'Dwayne Cronin';
    $request->updateStudioInput->studioId = 'fuga';
    $request->updateStudioInput->subnetIds = [
        'incidunt',
        'atque',
        'explicabo',
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = UpdateStudioXAmzTargetEnum::ELASTIC_MAP_REDUCE_UPDATE_STUDIO;

    $response = $sdk->sdk->updateStudio($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStudioSessionMapping

Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioSessionMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStudioSessionMappingInput;
use \OpenAPI\OpenAPI\Models\Shared\IdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioSessionMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStudioSessionMappingRequest();
    $request->updateStudioSessionMappingInput = new UpdateStudioSessionMappingInput();
    $request->updateStudioSessionMappingInput->identityId = 'saepe';
    $request->updateStudioSessionMappingInput->identityName = 'occaecati';
    $request->updateStudioSessionMappingInput->identityType = IdentityTypeEnum::GROUP;
    $request->updateStudioSessionMappingInput->sessionPolicyArn = 'et';
    $request->updateStudioSessionMappingInput->studioId = 'esse';
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = UpdateStudioSessionMappingXAmzTargetEnum::ELASTIC_MAP_REDUCE_UPDATE_STUDIO_SESSION_MAPPING;

    $response = $sdk->sdk->updateStudioSessionMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
