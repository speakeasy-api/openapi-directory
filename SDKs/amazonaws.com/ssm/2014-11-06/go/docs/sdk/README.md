# SDK

## Overview

<p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure end-to-end management solution for hybrid cloud environments that enables safe and secure operations at scale.</p> <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up Amazon Web Services Systems Manager</a>.</p> <p class="title"> <b>Related resources</b> </p> <ul> <li> <p>For information about each of the capabilities that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/what-is-systems-manager.html#systems-manager-capabilities">Systems Manager capabilities</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </li> <li> <p>For details about predefined runbooks for Automation, a capability of Amazon Web Services Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html">Systems Manager Automation runbook reference</a> </i>.</p> </li> <li> <p>For information about AppConfig, a capability of Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a> </i> and the <i> <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig API Reference</a> </i>.</p> </li> <li> <p>For information about Incident Manager, a capability of Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Systems Manager Incident Manager User Guide</a> </i> and the <i> <a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Systems Manager Incident Manager API Reference</a> </i>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm/>
### Available Operations

* [AddTagsToResource](#addtagstoresource) - <p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i> are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:</p> <ul> <li> <p> <code>Key=Owner,Value=DbAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=SysAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=Dev</code> </p> </li> <li> <p> <code>Key=Stack,Value=Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Pre-Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Test</code> </p> </li> </ul> <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags.</p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters.</p> <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
* [AssociateOpsItemRelatedItem](#associateopsitemrelateditem) - Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.
* [CancelCommand](#cancelcommand) - Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
* [CancelMaintenanceWindowExecution](#cancelmaintenancewindowexecution) - Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.
* [CreateActivation](#createactivation) - <p>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> <note> <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called <i>managed nodes</i>.</p> </note>
* [CreateAssociation](#createassociation) - A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 
* [CreateAssociationBatch](#createassociationbatch) - <p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.</p> <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.</p> <p>If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
* [CreateDocument](#createdocument) - Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.
* [CreateMaintenanceWindow](#createmaintenancewindow) - <p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
* [CreateOpsItem](#createopsitem) - <p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [CreateOpsMetadata](#createopsmetadata) - If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.
* [CreatePatchBaseline](#createpatchbaseline) - <p>Creates a patch baseline.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>
* [CreateResourceDataSync](#createresourcedatasync) - <p>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>
* [DeleteActivation](#deleteactivation) - Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.
* [DeleteAssociation](#deleteassociation) - <p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the <code>Targets</code> parameter, then you must delete the association by using the association ID.</p> <p>When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</p>
* [DeleteDocument](#deletedocument) - <p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>
* [DeleteInventory](#deleteinventory) - Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
* [DeleteMaintenanceWindow](#deletemaintenancewindow) - Deletes a maintenance window.
* [DeleteOpsMetadata](#deleteopsmetadata) - Delete OpsMetadata related to an application.
* [DeleteParameter](#deleteparameter) - Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
* [DeleteParameters](#deleteparameters) - Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
* [DeletePatchBaseline](#deletepatchbaseline) - Deletes a patch baseline.
* [DeleteResourceDataSync](#deleteresourcedatasync) - Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
* [DeregisterManagedInstance](#deregistermanagedinstance) - Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
* [DeregisterPatchBaselineForPatchGroup](#deregisterpatchbaselineforpatchgroup) - Removes a patch group from a patch baseline.
* [DeregisterTargetFromMaintenanceWindow](#deregistertargetfrommaintenancewindow) - Removes a target from a maintenance window.
* [DeregisterTaskFromMaintenanceWindow](#deregistertaskfrommaintenancewindow) - Removes a task from a maintenance window.
* [DescribeActivations](#describeactivations) - Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.
* [DescribeAssociation](#describeassociation) - Describes the association for the specified target or managed node. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID.
* [DescribeAssociationExecutionTargets](#describeassociationexecutiontargets) - Views information about a specific execution of a specific association.
* [DescribeAssociationExecutions](#describeassociationexecutions) - Views all executions for a specific association ID. 
* [DescribeAutomationExecutions](#describeautomationexecutions) - Provides details about all active and terminated Automation executions.
* [DescribeAutomationStepExecutions](#describeautomationstepexecutions) - Information about all active and terminated step executions in an Automation workflow.
* [DescribeAvailablePatches](#describeavailablepatches) - Lists all patches eligible to be included in a patch baseline.
* [DescribeDocument](#describedocument) - Describes the specified Amazon Web Services Systems Manager document (SSM document).
* [DescribeDocumentPermission](#describedocumentpermission) - Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). 
* [DescribeEffectiveInstanceAssociations](#describeeffectiveinstanceassociations) - All associations for the managed node(s).
* [DescribeEffectivePatchesForPatchBaseline](#describeeffectivepatchesforpatchbaseline) - Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.
* [DescribeInstanceAssociationsStatus](#describeinstanceassociationsstatus) - The status of the associations for the managed node(s).
* [DescribeInstanceInformation](#describeinstanceinformation) - <p>Describes one or more of your managed nodes, including information about the operating system platform, the version of SSM Agent installed on the managed node, node status, and so on.</p> <p>If you specify one or more managed node IDs, it returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.</p> <note> <p>The <code>IamRole</code> field for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This call doesn't return the IAM role for EC2 instances.</p> </note>
* [DescribeInstancePatchStates](#describeinstancepatchstates) - Retrieves the high-level patch state of one or more managed nodes.
* [DescribeInstancePatchStatesForPatchGroup](#describeinstancepatchstatesforpatchgroup) - Retrieves the high-level patch state for the managed nodes in the specified patch group.
* [DescribeInstancePatches](#describeinstancepatches) - Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.
* [DescribeInventoryDeletions](#describeinventorydeletions) - Describes a specific delete inventory operation.
* [DescribeMaintenanceWindowExecutionTaskInvocations](#describemaintenancewindowexecutiontaskinvocations) - Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
* [DescribeMaintenanceWindowExecutionTasks](#describemaintenancewindowexecutiontasks) - For a given maintenance window execution, lists the tasks that were run.
* [DescribeMaintenanceWindowExecutions](#describemaintenancewindowexecutions) - Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
* [DescribeMaintenanceWindowSchedule](#describemaintenancewindowschedule) - Retrieves information about upcoming executions of a maintenance window.
* [DescribeMaintenanceWindowTargets](#describemaintenancewindowtargets) - Lists the targets registered with the maintenance window.
* [DescribeMaintenanceWindowTasks](#describemaintenancewindowtasks) - <p>Lists the tasks in a maintenance window.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note>
* [DescribeMaintenanceWindows](#describemaintenancewindows) - Retrieves the maintenance windows in an Amazon Web Services account.
* [DescribeMaintenanceWindowsForTarget](#describemaintenancewindowsfortarget) - Retrieves information about the maintenance window targets or tasks that a managed node is associated with.
* [DescribeOpsItems](#describeopsitems) - <p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [DescribeParameters](#describeparameters) - <p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>DescribeParameters</code> retrieves whatever the original key alias was referencing.</p> </important>
* [DescribePatchBaselines](#describepatchbaselines) - Lists the patch baselines in your Amazon Web Services account.
* [DescribePatchGroupState](#describepatchgroupstate) - Returns high-level aggregated patch compliance state information for a patch group.
* [DescribePatchGroups](#describepatchgroups) - Lists all patch groups that have been registered with patch baselines.
* [DescribePatchProperties](#describepatchproperties) - <p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>DEBIAN</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>MACOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> </p> </dd> <dt>ORACLE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>UBUNTU</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>WINDOWS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> | <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code> </p> </dd> </dl>
* [DescribeSessions](#describesessions) - Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
* [DisassociateOpsItemRelatedItem](#disassociateopsitemrelateditem) - Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.
* [GetAutomationExecution](#getautomationexecution) - Get detailed information about a particular Automation execution.
* [GetCalendarState](#getcalendarstate) - <p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p> <p>If you specify more than one calendar in a request, the command returns the status of <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is <code>CLOSED</code>.</p> <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
* [GetCommandInvocation](#getcommandinvocation) - <p>Returns detailed information about command execution for an invocation or plugin.</p> <p> <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes, use <a>ListCommands</a>.</p>
* [GetConnectionStatus](#getconnectionstatus) - Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.
* [GetDefaultPatchBaseline](#getdefaultpatchbaseline) - <p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you don't specify an operating system value, the default patch baseline for Windows is returned.</p>
* [GetDeployablePatchSnapshotForInstance](#getdeployablepatchsnapshotforinstance) - <p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p> <note> <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the <code>AWS-RunShellScript</code> document or the <code>AWS-RunPowerShellScript</code> document.</p> </note>
* [GetDocument](#getdocument) - Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).
* [GetInventory](#getinventory) - Query inventory information. This includes managed node status, such as <code>Stopped</code> or <code>Terminated</code>.
* [GetInventorySchema](#getinventoryschema) - Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
* [GetMaintenanceWindow](#getmaintenancewindow) - Retrieves a maintenance window.
* [GetMaintenanceWindowExecution](#getmaintenancewindowexecution) - Retrieves details about a specific a maintenance window execution.
* [GetMaintenanceWindowExecutionTask](#getmaintenancewindowexecutiontask) - Retrieves the details about a specific task run as part of a maintenance window execution.
* [GetMaintenanceWindowExecutionTaskInvocation](#getmaintenancewindowexecutiontaskinvocation) - Retrieves information about a specific task running on a specific target.
* [GetMaintenanceWindowTask](#getmaintenancewindowtask) - <p>Retrieves the details of a maintenance window task.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note> <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>
* [GetOpsItem](#getopsitem) - <p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [GetOpsMetadata](#getopsmetadata) - View operational metadata related to an application in Application Manager.
* [GetOpsSummary](#getopssummary) - View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 
* [GetParameter](#getparameter) - <p>Get information about a single parameter by specifying the parameter name.</p> <note> <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p> </note>
* [GetParameterHistory](#getparameterhistory) - <p>Retrieves the history of all changes to a parameter.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>GetParameterHistory</code> retrieves whatever the original key alias was referencing.</p> </important>
* [GetParameters](#getparameters) - <p>Get information about one or more parameters by specifying multiple parameter names.</p> <note> <p>To get information about a single parameter, you can use the <a>GetParameter</a> operation instead.</p> </note>
* [GetParametersByPath](#getparametersbypath) - <p>Retrieve information about one or more parameters in a specific hierarchy. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>
* [GetPatchBaseline](#getpatchbaseline) - Retrieves information about a patch baseline.
* [GetPatchBaselineForPatchGroup](#getpatchbaselineforpatchgroup) - Retrieves the patch baseline that should be used for the specified patch group.
* [GetResourcePolicies](#getresourcepolicies) - Returns an array of the <code>Policy</code> object.
* [GetServiceSetting](#getservicesetting) - <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of <code>false</code>. This means the user can't use this feature unless they change the setting to <code>true</code> and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Query the current service setting for the Amazon Web Services account. </p>
* [LabelParameterVersion](#labelparameterversion) - <p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>
* [ListAssociationVersions](#listassociationversions) - Retrieves all versions of an association for a specific association ID.
* [ListAssociations](#listassociations) - Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.
* [ListCommandInvocations](#listcommandinvocations) - An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. <code>ListCommandInvocations</code> provide status about command execution.
* [ListCommands](#listcommands) - Lists the commands requested by users of the Amazon Web Services account.
* [ListComplianceItems](#listcomplianceitems) - For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
* [ListComplianceSummaries](#listcompliancesummaries) - Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
* [ListDocumentMetadataHistory](#listdocumentmetadatahistory) - Information about approval reviews for a version of a change template in Change Manager.
* [ListDocumentVersions](#listdocumentversions) - List all versions for a document.
* [ListDocuments](#listdocuments) - Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.
* [ListInventoryEntries](#listinventoryentries) - A list of inventory items returned by the request.
* [ListOpsItemEvents](#listopsitemevents) - Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.
* [ListOpsItemRelatedItems](#listopsitemrelateditems) - Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.
* [ListOpsMetadata](#listopsmetadata) - Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.
* [ListResourceComplianceSummaries](#listresourcecompliancesummaries) - Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
* [ListResourceDataSync](#listresourcedatasync) - <p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>
* [ListTagsForResource](#listtagsforresource) - <p>Returns a list of the tags assigned to the specified resource.</p> <p>For information about the ID format for each supported resource type, see <a>AddTagsToResource</a>.</p>
* [ModifyDocumentPermission](#modifydocumentpermission) - Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.
* [PutComplianceItems](#putcomplianceitems) - <p>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>
* [PutInventory](#putinventory) - Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
* [PutParameter](#putparameter) - Add a parameter to the system.
* [PutResourcePolicy](#putresourcepolicy) - Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
* [RegisterDefaultPatchBaseline](#registerdefaultpatchbaseline) - <p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>
* [RegisterPatchBaselineForPatchGroup](#registerpatchbaselineforpatchgroup) - Registers a patch baseline for a patch group.
* [RegisterTargetWithMaintenanceWindow](#registertargetwithmaintenancewindow) - Registers a target with a maintenance window.
* [RegisterTaskWithMaintenanceWindow](#registertaskwithmaintenancewindow) - Adds a new task to a maintenance window.
* [RemoveTagsFromResource](#removetagsfromresource) - Removes tag keys from the specified resource.
* [ResetServiceSetting](#resetservicesetting) - <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. </p>
* [ResumeSession](#resumesession) - <p>Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use.</p> </note>
* [SendAutomationSignal](#sendautomationsignal) - Sends a signal to an Automation execution to change the current behavior or status of the execution. 
* [SendCommand](#sendcommand) - Runs commands on one or more managed nodes.
* [StartAssociationsOnce](#startassociationsonce) - Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.
* [StartAutomationExecution](#startautomationexecution) - Initiates execution of an Automation runbook.
* [StartChangeRequestExecution](#startchangerequestexecution) - Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.
* [StartSession](#startsession) - <p>Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines.</p> </note>
* [StopAutomationExecution](#stopautomationexecution) - Stop an Automation that is currently running.
* [TerminateSession](#terminatesession) - Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.
* [UnlabelParameterVersion](#unlabelparameterversion) - Remove a label or labels from a parameter.
* [UpdateAssociation](#updateassociation) - <p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call <code>UpdateAssociation</code>, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the <code>Name</code> parameter. Before calling this API action, we recommend that you call the <a>DescribeAssociation</a> API operation and make a note of all optional parameters required for your <code>UpdateAssociation</code> call.</p> <p>In order to call this API operation, a user, group, or role must be granted permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association during the next schedule run.</p> </important>
* [UpdateAssociationStatus](#updateassociationstatus) - <p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.</p> <p> <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the <code>InstanceId</code> legacy parameter.</p>
* [UpdateDocument](#updatedocument) - Updates one or more values for an SSM document.
* [UpdateDocumentDefaultVersion](#updatedocumentdefaultversion) - <p>Set the default version of a document. </p> <note> <p>If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the <code>apply-only-at-cron-interval</code> parameter.</p> </note>
* [UpdateDocumentMetadata](#updatedocumentmetadata) - Updates information related to approval reviews for a specific version of a change template in Change Manager.
* [UpdateMaintenanceWindow](#updatemaintenancewindow) - <p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
* [UpdateMaintenanceWindowTarget](#updatemaintenancewindowtarget) - <p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field isn't modified.</p> </note>
* [UpdateMaintenanceWindowTask](#updatemaintenancewindowtask) - <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p> <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p> </li> <li> <p> <code>ServiceRoleArn</code> </p> </li> <li> <p> <code>TaskInvocationParameters</code> </p> </li> <li> <p> <code>Priority</code> </p> </li> <li> <p> <code>MaxConcurrency</code> </p> </li> <li> <p> <code>MaxErrors</code> </p> </li> </ul> <note> <p>One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for this request. Optional fields that aren't specified are set to null.</p> <important> <p>When you update a maintenance window task that has options specified in <code>TaskInvocationParameters</code>, you must provide again all the <code>TaskInvocationParameters</code> values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified <code>TaskInvocationParameters</code> values for <code>Comment</code>, <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p> </important>
* [UpdateManagedInstanceRole](#updatemanagedinstancerole) - Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.
* [UpdateOpsItem](#updateopsitem) - <p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [UpdateOpsMetadata](#updateopsmetadata) - Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.
* [UpdatePatchBaseline](#updatepatchbaseline) - <p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>
* [UpdateResourceDataSync](#updateresourcedatasync) - <p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't edit that sync later and choose the <code>Include all accounts from my Organizations configuration</code> option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API operation only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>
* [UpdateServiceSetting](#updateservicesetting) - <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Update the service setting for the account. </p>

## AddTagsToResource

<p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i> are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:</p> <ul> <li> <p> <code>Key=Owner,Value=DbAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=SysAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=Dev</code> </p> </li> <li> <p> <code>Key=Stack,Value=Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Pre-Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Test</code> </p> </li> </ul> <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags.</p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters.</p> <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>

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
    res, err := s.SDK.AddTagsToResource(ctx, operations.AddTagsToResourceRequest{
        AddTagsToResourceRequest: shared.AddTagsToResourceRequest{
            ResourceID: "delectus",
            ResourceType: shared.ResourceTypeForTaggingEnumMaintenanceWindow,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.AddTagsToResourceXAmzTargetEnumAmazonSsmAddTagsToResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsToResourceResult != nil {
        // handle response
    }
}
```

## AssociateOpsItemRelatedItem

Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.

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
    res, err := s.SDK.AssociateOpsItemRelatedItem(ctx, operations.AssociateOpsItemRelatedItemRequest{
        AssociateOpsItemRelatedItemRequest: shared.AssociateOpsItemRelatedItemRequest{
            AssociationType: "veritatis",
            OpsItemID: "deserunt",
            ResourceType: "perferendis",
            ResourceURI: "ipsam",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.AssociateOpsItemRelatedItemXAmzTargetEnumAmazonSsmAssociateOpsItemRelatedItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateOpsItemRelatedItemResponse != nil {
        // handle response
    }
}
```

## CancelCommand

Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.

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
    res, err := s.SDK.CancelCommand(ctx, operations.CancelCommandRequest{
        CancelCommandRequest: shared.CancelCommandRequest{
            CommandID: "molestiae",
            InstanceIds: []string{
                "quod",
                "esse",
                "totam",
                "porro",
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CancelCommandXAmzTargetEnumAmazonSsmCancelCommand,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelCommandResult != nil {
        // handle response
    }
}
```

## CancelMaintenanceWindowExecution

Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.

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
    res, err := s.SDK.CancelMaintenanceWindowExecution(ctx, operations.CancelMaintenanceWindowExecutionRequest{
        CancelMaintenanceWindowExecutionRequest: shared.CancelMaintenanceWindowExecutionRequest{
            WindowExecutionID: "hic",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.CancelMaintenanceWindowExecutionXAmzTargetEnumAmazonSsmCancelMaintenanceWindowExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelMaintenanceWindowExecutionResult != nil {
        // handle response
    }
}
```

## CreateActivation

<p>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> <note> <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called <i>managed nodes</i>.</p> </note>

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
    res, err := s.SDK.CreateActivation(ctx, operations.CreateActivationRequest{
        CreateActivationRequest: shared.CreateActivationRequest{
            DefaultInstanceName: sdk.String("impedit"),
            Description: sdk.String("cum"),
            ExpirationDate: types.MustTimeFromString("2022-10-13T23:01:07.168Z"),
            IamRole: "excepturi",
            RegistrationLimit: sdk.Int64(135218),
            RegistrationMetadata: []shared.RegistrationMetadataItem{
                shared.RegistrationMetadataItem{
                    Key: "ad",
                    Value: "natus",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iste",
                    Value: "dolor",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.CreateActivationXAmzTargetEnumAmazonSsmCreateActivation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActivationResult != nil {
        // handle response
    }
}
```

## CreateAssociation

A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 

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
    res, err := s.SDK.CreateAssociation(ctx, operations.CreateAssociationRequest{
        CreateAssociationRequest: shared.CreateAssociationRequest{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: "Mr. Kerry Predovic",
                    },
                    shared.Alarm{
                        Name: "Shaun Osinski",
                    },
                    shared.Alarm{
                        Name: "Rose Rolfson",
                    },
                },
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            ApplyOnlyAtCronInterval: sdk.Bool(false),
            AssociationName: sdk.String("nemo"),
            AutomationTargetParameterName: sdk.String("minima"),
            CalendarNames: []string{
                "accusantium",
                "iure",
                "culpa",
            },
            ComplianceSeverity: shared.AssociationComplianceSeverityEnumUnspecified.ToPointer(),
            DocumentVersion: sdk.String("sapiente"),
            InstanceID: sdk.String("architecto"),
            MaxConcurrency: sdk.String("mollitia"),
            MaxErrors: sdk.String("dolorem"),
            Name: "Carlos Ziemann",
            OutputLocation: &shared.InstanceAssociationOutputLocation{
                S3Location: &shared.S3OutputLocation{
                    OutputS3BucketName: sdk.String("numquam"),
                    OutputS3KeyPrefix: sdk.String("commodi"),
                    OutputS3Region: sdk.String("quam"),
                },
            },
            Parameters: map[string][]string{
                "velit": []string{
                    "quia",
                    "quis",
                    "vitae",
                },
                "laborum": []string{
                    "enim",
                    "odit",
                    "quo",
                },
            },
            ScheduleExpression: sdk.String("sequi"),
            ScheduleOffset: sdk.Int64(949572),
            SyncCompliance: shared.AssociationSyncComplianceEnumAuto.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "possimus",
                    Value: "aut",
                },
                shared.Tag{
                    Key: "quasi",
                    Value: "error",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "laborum",
                },
            },
            TargetLocations: []shared.TargetLocation{
                shared.TargetLocation{
                    Accounts: []string{
                        "voluptatibus",
                        "vero",
                        "nihil",
                        "praesentium",
                    },
                    ExecutionRoleName: sdk.String("voluptatibus"),
                    Regions: []string{
                        "omnis",
                    },
                    TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Thomas Batz",
                            },
                            shared.Alarm{
                                Name: "Willie Hessel",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    TargetLocationMaxConcurrency: sdk.String("dicta"),
                    TargetLocationMaxErrors: sdk.String("harum"),
                },
            },
            TargetMaps: []map[string][]string{
                map[string][]string{
                    "commodi": []string{
                        "quae",
                        "ipsum",
                        "quidem",
                        "molestias",
                    },
                    "excepturi": []string{
                        "modi",
                        "praesentium",
                        "rem",
                        "voluptates",
                    },
                    "quasi": []string{
                        "sint",
                        "veritatis",
                        "itaque",
                        "incidunt",
                    },
                    "enim": []string{
                        "est",
                    },
                },
                map[string][]string{
                    "explicabo": []string{
                        "distinctio",
                        "quibusdam",
                        "labore",
                    },
                    "modi": []string{
                        "aliquid",
                    },
                    "cupiditate": []string{
                        "perferendis",
                        "magni",
                        "assumenda",
                    },
                    "ipsam": []string{
                        "fugit",
                    },
                },
            },
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("excepturi"),
                    Values: []string{
                        "facilis",
                        "tempore",
                    },
                },
                shared.Target{
                    Key: sdk.String("labore"),
                    Values: []string{
                        "eum",
                        "non",
                        "eligendi",
                        "sint",
                    },
                },
                shared.Target{
                    Key: sdk.String("aliquid"),
                    Values: []string{
                        "necessitatibus",
                        "sint",
                        "officia",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.CreateAssociationXAmzTargetEnumAmazonSsmCreateAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssociationResult != nil {
        // handle response
    }
}
```

## CreateAssociationBatch

<p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.</p> <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.</p> <p>If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>

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
    res, err := s.SDK.CreateAssociationBatch(ctx, operations.CreateAssociationBatchRequest{
        CreateAssociationBatchRequest: shared.CreateAssociationBatchRequest{
            Entries: []shared.CreateAssociationBatchRequestEntry{
                shared.CreateAssociationBatchRequestEntry{
                    AlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Valerie Runolfsson",
                            },
                            shared.Alarm{
                                Name: "Kayla Thompson",
                            },
                            shared.Alarm{
                                Name: "Sophia Wintheiser",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    ApplyOnlyAtCronInterval: sdk.Bool(false),
                    AssociationName: sdk.String("nam"),
                    AutomationTargetParameterName: sdk.String("id"),
                    CalendarNames: []string{
                        "deleniti",
                        "sapiente",
                        "amet",
                    },
                    ComplianceSeverity: shared.AssociationComplianceSeverityEnumLow.ToPointer(),
                    DocumentVersion: sdk.String("nisi"),
                    InstanceID: sdk.String("vel"),
                    MaxConcurrency: sdk.String("natus"),
                    MaxErrors: sdk.String("omnis"),
                    Name: "Dorothy Kovacek",
                    OutputLocation: &shared.InstanceAssociationOutputLocation{
                        S3Location: &shared.S3OutputLocation{
                            OutputS3BucketName: sdk.String("id"),
                            OutputS3KeyPrefix: sdk.String("labore"),
                            OutputS3Region: sdk.String("labore"),
                        },
                    },
                    Parameters: map[string][]string{
                        "natus": []string{
                            "eum",
                            "vero",
                            "aspernatur",
                        },
                        "architecto": []string{
                            "et",
                            "excepturi",
                        },
                    },
                    ScheduleExpression: sdk.String("ullam"),
                    ScheduleOffset: sdk.Int64(590873),
                    SyncCompliance: shared.AssociationSyncComplianceEnumManual.ToPointer(),
                    TargetLocations: []shared.TargetLocation{
                        shared.TargetLocation{
                            Accounts: []string{
                                "mollitia",
                            },
                            ExecutionRoleName: sdk.String("reiciendis"),
                            Regions: []string{
                                "ad",
                                "eum",
                                "dolor",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Vivian Boyle",
                                    },
                                    shared.Alarm{
                                        Name: "Frederick Schoen",
                                    },
                                    shared.Alarm{
                                        Name: "Alice Bradtke",
                                    },
                                    shared.Alarm{
                                        Name: "Jessie Zulauf",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("saepe"),
                            TargetLocationMaxErrors: sdk.String("pariatur"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "consequuntur",
                            },
                            ExecutionRoleName: sdk.String("praesentium"),
                            Regions: []string{
                                "magni",
                                "sunt",
                                "quo",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Simon Jenkins",
                                    },
                                    shared.Alarm{
                                        Name: "Donna Bernhard",
                                    },
                                    shared.Alarm{
                                        Name: "Colleen Johnston PhD",
                                    },
                                    shared.Alarm{
                                        Name: "Camille Armstrong",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("aut"),
                            TargetLocationMaxErrors: sdk.String("cumque"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "hic",
                                "libero",
                            },
                            ExecutionRoleName: sdk.String("nobis"),
                            Regions: []string{
                                "quis",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Cynthia Hayes",
                                    },
                                    shared.Alarm{
                                        Name: "Jacqueline Schimmel",
                                    },
                                    shared.Alarm{
                                        Name: "Dean Welch",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("facilis"),
                            TargetLocationMaxErrors: sdk.String("perspiciatis"),
                        },
                    },
                    TargetMaps: []map[string][]string{
                        map[string][]string{
                            "consequuntur": []string{
                                "error",
                                "eaque",
                                "occaecati",
                            },
                            "rerum": []string{
                                "asperiores",
                            },
                            "earum": []string{
                                "iste",
                                "dolorum",
                            },
                            "deleniti": []string{
                                "provident",
                                "nobis",
                                "libero",
                                "delectus",
                            },
                        },
                    },
                    Targets: []shared.Target{
                        shared.Target{
                            Key: sdk.String("quos"),
                            Values: []string{
                                "dolorem",
                                "dolorem",
                            },
                        },
                        shared.Target{
                            Key: sdk.String("dolor"),
                            Values: []string{
                                "ipsum",
                            },
                        },
                    },
                },
                shared.CreateAssociationBatchRequestEntry{
                    AlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Felipe Klein",
                            },
                            shared.Alarm{
                                Name: "Mr. Lee Funk III",
                            },
                            shared.Alarm{
                                Name: "Bertha Thompson",
                            },
                            shared.Alarm{
                                Name: "Faye Daugherty PhD",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    ApplyOnlyAtCronInterval: sdk.Bool(false),
                    AssociationName: sdk.String("ab"),
                    AutomationTargetParameterName: sdk.String("soluta"),
                    CalendarNames: []string{
                        "iusto",
                        "voluptate",
                        "dolorum",
                    },
                    ComplianceSeverity: shared.AssociationComplianceSeverityEnumMedium.ToPointer(),
                    DocumentVersion: sdk.String("omnis"),
                    InstanceID: sdk.String("necessitatibus"),
                    MaxConcurrency: sdk.String("distinctio"),
                    MaxErrors: sdk.String("asperiores"),
                    Name: "Edna Klocko",
                    OutputLocation: &shared.InstanceAssociationOutputLocation{
                        S3Location: &shared.S3OutputLocation{
                            OutputS3BucketName: sdk.String("eius"),
                            OutputS3KeyPrefix: sdk.String("aspernatur"),
                            OutputS3Region: sdk.String("perferendis"),
                        },
                    },
                    Parameters: map[string][]string{
                        "optio": []string{
                            "ad",
                            "saepe",
                            "suscipit",
                            "deserunt",
                        },
                    },
                    ScheduleExpression: sdk.String("provident"),
                    ScheduleOffset: sdk.Int64(324683),
                    SyncCompliance: shared.AssociationSyncComplianceEnumManual.ToPointer(),
                    TargetLocations: []shared.TargetLocation{
                        shared.TargetLocation{
                            Accounts: []string{
                                "alias",
                                "at",
                                "quaerat",
                            },
                            ExecutionRoleName: sdk.String("tempora"),
                            Regions: []string{
                                "quod",
                                "officiis",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Randal Klocko",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("ipsum"),
                            TargetLocationMaxErrors: sdk.String("quisquam"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "amet",
                                "tempore",
                                "accusamus",
                                "numquam",
                            },
                            ExecutionRoleName: sdk.String("enim"),
                            Regions: []string{
                                "sapiente",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Karen Rath",
                                    },
                                    shared.Alarm{
                                        Name: "Kelli Hintz",
                                    },
                                    shared.Alarm{
                                        Name: "Amber Dibbert",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("pariatur"),
                            TargetLocationMaxErrors: sdk.String("soluta"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "laborum",
                            },
                            ExecutionRoleName: sdk.String("totam"),
                            Regions: []string{
                                "aspernatur",
                                "dolores",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Gilbert Kohler",
                                    },
                                    shared.Alarm{
                                        Name: "Gladys Considine",
                                    },
                                    shared.Alarm{
                                        Name: "Marion Reichert DDS",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("soluta"),
                            TargetLocationMaxErrors: sdk.String("nobis"),
                        },
                    },
                    TargetMaps: []map[string][]string{
                        map[string][]string{
                            "ipsum": []string{
                                "nobis",
                            },
                            "quos": []string{
                                "cupiditate",
                                "aperiam",
                                "delectus",
                            },
                            "dolorem": []string{
                                "labore",
                                "adipisci",
                            },
                            "dolorum": []string{
                                "quae",
                            },
                        },
                    },
                    Targets: []shared.Target{
                        shared.Target{
                            Key: sdk.String("quas"),
                            Values: []string{
                                "consequatur",
                                "est",
                                "repellendus",
                                "porro",
                            },
                        },
                    },
                },
                shared.CreateAssociationBatchRequestEntry{
                    AlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Olivia McGlynn IV",
                            },
                            shared.Alarm{
                                Name: "Toni Wolff",
                            },
                            shared.Alarm{
                                Name: "Tim Erdman",
                            },
                            shared.Alarm{
                                Name: "Meghan Wiegand",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    ApplyOnlyAtCronInterval: sdk.Bool(false),
                    AssociationName: sdk.String("distinctio"),
                    AutomationTargetParameterName: sdk.String("quod"),
                    CalendarNames: []string{
                        "similique",
                        "facilis",
                    },
                    ComplianceSeverity: shared.AssociationComplianceSeverityEnumUnspecified.ToPointer(),
                    DocumentVersion: sdk.String("ducimus"),
                    InstanceID: sdk.String("dolore"),
                    MaxConcurrency: sdk.String("quibusdam"),
                    MaxErrors: sdk.String("illum"),
                    Name: "Dr. Faye Rutherford",
                    OutputLocation: &shared.InstanceAssociationOutputLocation{
                        S3Location: &shared.S3OutputLocation{
                            OutputS3BucketName: sdk.String("nulla"),
                            OutputS3KeyPrefix: sdk.String("fugit"),
                            OutputS3Region: sdk.String("porro"),
                        },
                    },
                    Parameters: map[string][]string{
                        "doloribus": []string{
                            "eligendi",
                            "ducimus",
                        },
                        "alias": []string{
                            "tempora",
                            "ipsam",
                            "ea",
                        },
                        "aspernatur": []string{
                            "possimus",
                            "magnam",
                        },
                        "ratione": []string{
                            "laudantium",
                            "dicta",
                        },
                    },
                    ScheduleExpression: sdk.String("dolor"),
                    ScheduleOffset: sdk.Int64(980700),
                    SyncCompliance: shared.AssociationSyncComplianceEnumAuto.ToPointer(),
                    TargetLocations: []shared.TargetLocation{
                        shared.TargetLocation{
                            Accounts: []string{
                                "excepturi",
                                "voluptatibus",
                                "nostrum",
                                "sapiente",
                            },
                            ExecutionRoleName: sdk.String("quisquam"),
                            Regions: []string{
                                "ea",
                                "impedit",
                                "corporis",
                                "veniam",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Megan Jaskolski",
                                    },
                                    shared.Alarm{
                                        Name: "Dr. Bruce Hane",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("aut"),
                            TargetLocationMaxErrors: sdk.String("aut"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "impedit",
                                "aliquam",
                                "fugit",
                            },
                            ExecutionRoleName: sdk.String("accusamus"),
                            Regions: []string{
                                "non",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Neal Schroeder",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("autem"),
                            TargetLocationMaxErrors: sdk.String("nobis"),
                        },
                    },
                    TargetMaps: []map[string][]string{
                        map[string][]string{
                            "nulla": []string{
                                "libero",
                                "quasi",
                            },
                            "tempora": []string{
                                "explicabo",
                                "provident",
                            },
                            "ipsa": []string{
                                "magnam",
                                "odio",
                            },
                            "eius": []string{
                                "esse",
                                "rem",
                            },
                        },
                        map[string][]string{
                            "reprehenderit": []string{
                                "fugiat",
                                "ut",
                                "eum",
                            },
                            "suscipit": []string{
                                "eos",
                                "praesentium",
                                "quisquam",
                                "veritatis",
                            },
                            "ipsa": []string{
                                "quidem",
                                "neque",
                                "quo",
                            },
                        },
                        map[string][]string{
                            "quo": []string{
                                "eius",
                                "eos",
                                "voluptas",
                            },
                            "ab": []string{
                                "consequatur",
                                "tempora",
                                "debitis",
                            },
                            "ipsam": []string{
                                "sequi",
                            },
                            "quo": []string{
                                "recusandae",
                                "aperiam",
                            },
                        },
                    },
                    Targets: []shared.Target{
                        shared.Target{
                            Key: sdk.String("quod"),
                            Values: []string{
                                "inventore",
                                "nihil",
                            },
                        },
                        shared.Target{
                            Key: sdk.String("totam"),
                            Values: []string{
                                "aliquam",
                                "odio",
                                "occaecati",
                                "commodi",
                            },
                        },
                        shared.Target{
                            Key: sdk.String("sapiente"),
                            Values: []string{
                                "deserunt",
                            },
                        },
                    },
                },
                shared.CreateAssociationBatchRequestEntry{
                    AlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Robyn Keeling",
                            },
                            shared.Alarm{
                                Name: "Cassandra Considine",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    ApplyOnlyAtCronInterval: sdk.Bool(false),
                    AssociationName: sdk.String("incidunt"),
                    AutomationTargetParameterName: sdk.String("atque"),
                    CalendarNames: []string{
                        "minima",
                    },
                    ComplianceSeverity: shared.AssociationComplianceSeverityEnumHigh.ToPointer(),
                    DocumentVersion: sdk.String("fugit"),
                    InstanceID: sdk.String("sapiente"),
                    MaxConcurrency: sdk.String("consequuntur"),
                    MaxErrors: sdk.String("ratione"),
                    Name: "Kerry Mayert IV",
                    OutputLocation: &shared.InstanceAssociationOutputLocation{
                        S3Location: &shared.S3OutputLocation{
                            OutputS3BucketName: sdk.String("eveniet"),
                            OutputS3KeyPrefix: sdk.String("accusamus"),
                            OutputS3Region: sdk.String("veritatis"),
                        },
                    },
                    Parameters: map[string][]string{
                        "quod": []string{
                            "vero",
                            "aliquid",
                            "quasi",
                        },
                        "saepe": []string{
                            "harum",
                            "molestiae",
                        },
                    },
                    ScheduleExpression: sdk.String("rerum"),
                    ScheduleOffset: sdk.Int64(580197),
                    SyncCompliance: shared.AssociationSyncComplianceEnumAuto.ToPointer(),
                    TargetLocations: []shared.TargetLocation{
                        shared.TargetLocation{
                            Accounts: []string{
                                "sit",
                                "culpa",
                                "tempore",
                                "adipisci",
                            },
                            ExecutionRoleName: sdk.String("cumque"),
                            Regions: []string{
                                "consequatur",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Miranda Feest",
                                    },
                                    shared.Alarm{
                                        Name: "Randal Stiedemann",
                                    },
                                    shared.Alarm{
                                        Name: "Lorene Mueller",
                                    },
                                    shared.Alarm{
                                        Name: "Howard Upton",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("veritatis"),
                            TargetLocationMaxErrors: sdk.String("consequuntur"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "similique",
                            },
                            ExecutionRoleName: sdk.String("culpa"),
                            Regions: []string{
                                "tenetur",
                                "quae",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Pearl Gerlach",
                                    },
                                    shared.Alarm{
                                        Name: "Kenneth Hackett II",
                                    },
                                    shared.Alarm{
                                        Name: "Ms. Dana Huel",
                                    },
                                    shared.Alarm{
                                        Name: "Marc Leuschke",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("architecto"),
                            TargetLocationMaxErrors: sdk.String("omnis"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "quasi",
                                "at",
                                "et",
                                "voluptate",
                            },
                            ExecutionRoleName: sdk.String("ipsa"),
                            Regions: []string{
                                "veritatis",
                                "consectetur",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Lionel Bartoletti IV",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("eum"),
                            TargetLocationMaxErrors: sdk.String("mollitia"),
                        },
                    },
                    TargetMaps: []map[string][]string{
                        map[string][]string{
                            "non": []string{
                                "dolor",
                            },
                            "occaecati": []string{
                                "impedit",
                                "explicabo",
                            },
                            "voluptas": []string{
                                "dignissimos",
                            },
                        },
                    },
                    Targets: []shared.Target{
                        shared.Target{
                            Key: sdk.String("maiores"),
                            Values: []string{
                                "velit",
                                "voluptatibus",
                                "voluptas",
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.CreateAssociationBatchXAmzTargetEnumAmazonSsmCreateAssociationBatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssociationBatchResult != nil {
        // handle response
    }
}
```

## CreateDocument

Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.

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
    res, err := s.SDK.CreateDocument(ctx, operations.CreateDocumentRequest{
        CreateDocumentRequest: shared.CreateDocumentRequest{
            Attachments: []shared.AttachmentsSource{
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumS3FileURL.ToPointer(),
                    Name: sdk.String("Mrs. Aubrey Hills"),
                    Values: []string{
                        "labore",
                        "ab",
                        "adipisci",
                        "fuga",
                    },
                },
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumS3FileURL.ToPointer(),
                    Name: sdk.String("Sheila Nader"),
                    Values: []string{
                        "fugiat",
                        "vel",
                        "ducimus",
                    },
                },
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumS3FileURL.ToPointer(),
                    Name: sdk.String("Clara Senger"),
                    Values: []string{
                        "in",
                        "corporis",
                    },
                },
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumAttachmentReference.ToPointer(),
                    Name: sdk.String("Corey Walsh DDS"),
                    Values: []string{
                        "in",
                    },
                },
            },
            Content: "exercitationem",
            DisplayName: sdk.String("earum"),
            DocumentFormat: shared.DocumentFormatEnumText.ToPointer(),
            DocumentType: shared.DocumentTypeEnumSession.ToPointer(),
            Name: "Ricardo Wisozk",
            Requires: []shared.DocumentRequires{
                shared.DocumentRequires{
                    Name: "Katherine Zemlak",
                    RequireType: sdk.String("amet"),
                    Version: sdk.String("beatae"),
                    VersionName: sdk.String("dignissimos"),
                },
                shared.DocumentRequires{
                    Name: "Doyle Feest",
                    RequireType: sdk.String("laboriosam"),
                    Version: sdk.String("ipsa"),
                    VersionName: sdk.String("voluptates"),
                },
                shared.DocumentRequires{
                    Name: "Terry Tillman",
                    RequireType: sdk.String("aspernatur"),
                    Version: sdk.String("voluptas"),
                    VersionName: sdk.String("voluptas"),
                },
                shared.DocumentRequires{
                    Name: "Cathy Rohan",
                    RequireType: sdk.String("minus"),
                    Version: sdk.String("dolores"),
                    VersionName: sdk.String("blanditiis"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolore",
                    Value: "aliquam",
                },
                shared.Tag{
                    Key: "officiis",
                    Value: "temporibus",
                },
            },
            TargetType: sdk.String("ullam"),
            VersionName: sdk.String("adipisci"),
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.CreateDocumentXAmzTargetEnumAmazonSsmCreateDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDocumentResult != nil {
        // handle response
    }
}
```

## CreateMaintenanceWindow

<p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

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
    res, err := s.SDK.CreateMaintenanceWindow(ctx, operations.CreateMaintenanceWindowRequest{
        CreateMaintenanceWindowRequest: shared.CreateMaintenanceWindowRequest{
            AllowUnassociatedTargets: false,
            ClientToken: sdk.String("pariatur"),
            Cutoff: 519643,
            Description: sdk.String("hic"),
            Duration: 348783,
            EndDate: sdk.String("nobis"),
            Name: "Luz Cormier",
            Schedule: "asperiores",
            ScheduleOffset: sdk.Int64(707918),
            ScheduleTimezone: sdk.String("voluptate"),
            StartDate: sdk.String("expedita"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iste",
                    Value: "dolore",
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.CreateMaintenanceWindowXAmzTargetEnumAmazonSsmCreateMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## CreateOpsItem

<p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

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
    res, err := s.SDK.CreateOpsItem(ctx, operations.CreateOpsItemRequest{
        CreateOpsItemRequest: shared.CreateOpsItemRequest{
            AccountID: sdk.String("unde"),
            ActualEndTime: types.MustTimeFromString("2022-08-14T06:36:04.449Z"),
            ActualStartTime: types.MustTimeFromString("2020-04-25T13:15:32.117Z"),
            Category: sdk.String("illo"),
            Description: "reiciendis",
            Notifications: []shared.OpsItemNotification{
                shared.OpsItemNotification{
                    Arn: sdk.String("corrupti"),
                },
            },
            OperationalData: map[string]shared.OpsItemDataValue{
                "incidunt": shared.OpsItemDataValue{
                    Type: shared.OpsItemDataTypeEnumSearchableString.ToPointer(),
                    Value: sdk.String("provident"),
                },
                "eius": shared.OpsItemDataValue{
                    Type: shared.OpsItemDataTypeEnumString.ToPointer(),
                    Value: sdk.String("ipsum"),
                },
                "ea": shared.OpsItemDataValue{
                    Type: shared.OpsItemDataTypeEnumString.ToPointer(),
                    Value: sdk.String("quos"),
                },
                "voluptatibus": shared.OpsItemDataValue{
                    Type: shared.OpsItemDataTypeEnumSearchableString.ToPointer(),
                    Value: sdk.String("tempora"),
                },
            },
            OpsItemType: sdk.String("voluptate"),
            PlannedEndTime: types.MustTimeFromString("2021-10-18T02:58:04.604Z"),
            PlannedStartTime: types.MustTimeFromString("2022-10-02T07:53:52.364Z"),
            Priority: sdk.Int64(888044),
            RelatedOpsItems: []shared.RelatedOpsItem{
                shared.RelatedOpsItem{
                    OpsItemID: "facilis",
                },
                shared.RelatedOpsItem{
                    OpsItemID: "quaerat",
                },
                shared.RelatedOpsItem{
                    OpsItemID: "incidunt",
                },
            },
            Severity: sdk.String("ipsam"),
            Source: "debitis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sit",
                    Value: "nobis",
                },
                shared.Tag{
                    Key: "error",
                    Value: "veniam",
                },
                shared.Tag{
                    Key: "minima",
                    Value: "recusandae",
                },
            },
            Title: "Dr.",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.CreateOpsItemXAmzTargetEnumAmazonSsmCreateOpsItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOpsItemResponse != nil {
        // handle response
    }
}
```

## CreateOpsMetadata

If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.

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
    res, err := s.SDK.CreateOpsMetadata(ctx, operations.CreateOpsMetadataRequest{
        CreateOpsMetadataRequest: shared.CreateOpsMetadataRequest{
            Metadata: map[string]shared.MetadataValue{
                "beatae": shared.MetadataValue{
                    Value: sdk.String("laudantium"),
                },
                "exercitationem": shared.MetadataValue{
                    Value: sdk.String("praesentium"),
                },
                "cum": shared.MetadataValue{
                    Value: sdk.String("laboriosam"),
                },
                "dolorum": shared.MetadataValue{
                    Value: sdk.String("voluptatum"),
                },
            },
            ResourceID: "error",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "expedita",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "neque",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "nostrum",
                    Value: "officia",
                },
                shared.Tag{
                    Key: "dolorum",
                    Value: "corrupti",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.CreateOpsMetadataXAmzTargetEnumAmazonSsmCreateOpsMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOpsMetadataResult != nil {
        // handle response
    }
}
```

## CreatePatchBaseline

<p>Creates a patch baseline.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

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
    res, err := s.SDK.CreatePatchBaseline(ctx, operations.CreatePatchBaselineRequest{
        CreatePatchBaselineRequest: shared.CreatePatchBaselineRequest{
            ApprovalRules: &shared.PatchRuleGroup{
                PatchRules: []shared.PatchRule{
                    shared.PatchRule{
                        ApproveAfterDays: sdk.Int64(710337),
                        ApproveUntilDate: sdk.String("magnam"),
                        ComplianceLevel: shared.PatchComplianceLevelEnumCritical.ToPointer(),
                        EnableNonSecurity: sdk.Bool(false),
                        PatchFilterGroup: shared.PatchFilterGroup{
                            PatchFilters: []shared.PatchFilter{
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumCveID,
                                    Values: []string{
                                        "voluptatum",
                                    },
                                },
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumName,
                                    Values: []string{
                                        "corporis",
                                        "et",
                                        "blanditiis",
                                        "ex",
                                    },
                                },
                            },
                        },
                    },
                    shared.PatchRule{
                        ApproveAfterDays: sdk.Int64(153627),
                        ApproveUntilDate: sdk.String("sit"),
                        ComplianceLevel: shared.PatchComplianceLevelEnumMedium.ToPointer(),
                        EnableNonSecurity: sdk.Bool(false),
                        PatchFilterGroup: shared.PatchFilterGroup{
                            PatchFilters: []shared.PatchFilter{
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumSecurity,
                                    Values: []string{
                                        "consequatur",
                                        "incidunt",
                                        "reiciendis",
                                    },
                                },
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumPatchSet,
                                    Values: []string{
                                        "dicta",
                                        "architecto",
                                        "occaecati",
                                    },
                                },
                            },
                        },
                    },
                    shared.PatchRule{
                        ApproveAfterDays: sdk.Int64(289776),
                        ApproveUntilDate: sdk.String("quidem"),
                        ComplianceLevel: shared.PatchComplianceLevelEnumLow.ToPointer(),
                        EnableNonSecurity: sdk.Bool(false),
                        PatchFilterGroup: shared.PatchFilterGroup{
                            PatchFilters: []shared.PatchFilter{
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumPriority,
                                    Values: []string{
                                        "laboriosam",
                                        "alias",
                                        "amet",
                                        "deserunt",
                                    },
                                },
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumEpoch,
                                    Values: []string{
                                        "reiciendis",
                                        "provident",
                                        "repellendus",
                                    },
                                },
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumVersion,
                                    Values: []string{
                                        "perferendis",
                                        "est",
                                        "quidem",
                                        "reprehenderit",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            ApprovedPatches: []string{
                "fuga",
                "praesentium",
                "mollitia",
                "veniam",
            },
            ApprovedPatchesComplianceLevel: shared.PatchComplianceLevelEnumCritical.ToPointer(),
            ApprovedPatchesEnableNonSecurity: sdk.Bool(false),
            ClientToken: sdk.String("quisquam"),
            Description: sdk.String("repudiandae"),
            GlobalFilters: &shared.PatchFilterGroup{
                PatchFilters: []shared.PatchFilter{
                    shared.PatchFilter{
                        Key: shared.PatchFilterKeyEnumName,
                        Values: []string{
                            "asperiores",
                            "totam",
                        },
                    },
                },
            },
            Name: "Ms. Alison Schoen",
            OperatingSystem: shared.OperatingSystemEnumRockyLinux.ToPointer(),
            RejectedPatches: []string{
                "atque",
                "error",
            },
            RejectedPatchesAction: shared.PatchActionEnumBlock.ToPointer(),
            Sources: []shared.PatchSource{
                shared.PatchSource{
                    Configuration: "accusamus",
                    Name: "Darrell Collier",
                    Products: []string{
                        "at",
                        "error",
                        "blanditiis",
                    },
                },
                shared.PatchSource{
                    Configuration: "suscipit",
                    Name: "Dr. Ivan Littel",
                    Products: []string{
                        "labore",
                        "reiciendis",
                        "doloremque",
                        "repudiandae",
                    },
                },
                shared.PatchSource{
                    Configuration: "dicta",
                    Name: "Teresa Daniel",
                    Products: []string{
                        "a",
                    },
                },
                shared.PatchSource{
                    Configuration: "molestias",
                    Name: "Tricia Cronin",
                    Products: []string{
                        "in",
                        "adipisci",
                        "eveniet",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consequuntur",
                    Value: "fugit",
                },
                shared.Tag{
                    Key: "id",
                    Value: "quis",
                },
                shared.Tag{
                    Key: "reprehenderit",
                    Value: "error",
                },
            },
        },
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.CreatePatchBaselineXAmzTargetEnumAmazonSsmCreatePatchBaseline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePatchBaselineResult != nil {
        // handle response
    }
}
```

## CreateResourceDataSync

<p>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>

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
    res, err := s.SDK.CreateResourceDataSync(ctx, operations.CreateResourceDataSyncRequest{
        CreateResourceDataSyncRequest: shared.CreateResourceDataSyncRequest{
            S3Destination: &shared.ResourceDataSyncS3Destination{
                AWSKMSKeyARN: sdk.String("iure"),
                BucketName: "ipsa",
                DestinationDataSharing: &shared.ResourceDataSyncDestinationDataSharing{
                    DestinationDataSharingType: sdk.String("totam"),
                },
                Prefix: sdk.String("quae"),
                Region: "molestiae",
                SyncFormat: shared.ResourceDataSyncS3FormatEnumJSONSerDe,
            },
            SyncName: "eveniet",
            SyncSource: &shared.ResourceDataSyncSource{
                AwsOrganizationsSource: &shared.ResourceDataSyncAwsOrganizationsSource{
                    OrganizationSourceType: "qui",
                    OrganizationalUnits: []shared.ResourceDataSyncOrganizationalUnit{
                        shared.ResourceDataSyncOrganizationalUnit{
                            OrganizationalUnitID: sdk.String("iure"),
                        },
                        shared.ResourceDataSyncOrganizationalUnit{
                            OrganizationalUnitID: sdk.String("necessitatibus"),
                        },
                        shared.ResourceDataSyncOrganizationalUnit{
                            OrganizationalUnitID: sdk.String("ratione"),
                        },
                    },
                },
                EnableAllOpsDataSources: sdk.Bool(false),
                IncludeFutureRegions: sdk.Bool(false),
                SourceRegions: []string{
                    "distinctio",
                    "voluptatum",
                    "rem",
                },
                SourceType: "aliquam",
            },
            SyncType: sdk.String("ad"),
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.CreateResourceDataSyncXAmzTargetEnumAmazonSsmCreateResourceDataSync,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResourceDataSyncResult != nil {
        // handle response
    }
}
```

## DeleteActivation

Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.

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
    res, err := s.SDK.DeleteActivation(ctx, operations.DeleteActivationRequest{
        DeleteActivationRequest: shared.DeleteActivationRequest{
            ActivationID: "alias",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteActivationXAmzTargetEnumAmazonSsmDeleteActivation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteActivationResult != nil {
        // handle response
    }
}
```

## DeleteAssociation

<p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the <code>Targets</code> parameter, then you must delete the association by using the association ID.</p> <p>When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</p>

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
    res, err := s.SDK.DeleteAssociation(ctx, operations.DeleteAssociationRequest{
        DeleteAssociationRequest: shared.DeleteAssociationRequest{
            AssociationID: sdk.String("nesciunt"),
            InstanceID: sdk.String("quae"),
            Name: sdk.String("Arturo Hagenes"),
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DeleteAssociationXAmzTargetEnumAmazonSsmDeleteAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssociationResult != nil {
        // handle response
    }
}
```

## DeleteDocument

<p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>

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
    res, err := s.SDK.DeleteDocument(ctx, operations.DeleteDocumentRequest{
        DeleteDocumentRequest: shared.DeleteDocumentRequest{
            DocumentVersion: sdk.String("recusandae"),
            Force: sdk.Bool(false),
            Name: "Sherri Hauck",
            VersionName: sdk.String("provident"),
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeleteDocumentXAmzTargetEnumAmazonSsmDeleteDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDocumentResult != nil {
        // handle response
    }
}
```

## DeleteInventory

Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.

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
    res, err := s.SDK.DeleteInventory(ctx, operations.DeleteInventoryRequest{
        DeleteInventoryRequest: shared.DeleteInventoryRequest{
            ClientToken: sdk.String("possimus"),
            DryRun: sdk.Bool(false),
            SchemaDeleteOption: shared.InventorySchemaDeleteOptionEnumDeleteSchema.ToPointer(),
            TypeName: "ex",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.DeleteInventoryXAmzTargetEnumAmazonSsmDeleteInventory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInventoryResult != nil {
        // handle response
    }
}
```

## DeleteMaintenanceWindow

Deletes a maintenance window.

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
    res, err := s.SDK.DeleteMaintenanceWindow(ctx, operations.DeleteMaintenanceWindowRequest{
        DeleteMaintenanceWindowRequest: shared.DeleteMaintenanceWindowRequest{
            WindowID: "earum",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.DeleteMaintenanceWindowXAmzTargetEnumAmazonSsmDeleteMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## DeleteOpsMetadata

Delete OpsMetadata related to an application.

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
    res, err := s.SDK.DeleteOpsMetadata(ctx, operations.DeleteOpsMetadataRequest{
        DeleteOpsMetadataRequest: shared.DeleteOpsMetadataRequest{
            OpsMetadataArn: "sapiente",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DeleteOpsMetadataXAmzTargetEnumAmazonSsmDeleteOpsMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOpsMetadataResult != nil {
        // handle response
    }
}
```

## DeleteParameter

Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

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
    res, err := s.SDK.DeleteParameter(ctx, operations.DeleteParameterRequest{
        DeleteParameterRequest: shared.DeleteParameterRequest{
            Name: "Scott Bahringer",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.DeleteParameterXAmzTargetEnumAmazonSsmDeleteParameter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteParameterResult != nil {
        // handle response
    }
}
```

## DeleteParameters

Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

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
    res, err := s.SDK.DeleteParameters(ctx, operations.DeleteParametersRequest{
        DeleteParametersRequest: shared.DeleteParametersRequest{
            Names: []string{
                "dicta",
                "minima",
            },
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.DeleteParametersXAmzTargetEnumAmazonSsmDeleteParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteParametersResult != nil {
        // handle response
    }
}
```

## DeletePatchBaseline

Deletes a patch baseline.

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
    res, err := s.SDK.DeletePatchBaseline(ctx, operations.DeletePatchBaselineRequest{
        DeletePatchBaselineRequest: shared.DeletePatchBaselineRequest{
            BaselineID: "eaque",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.DeletePatchBaselineXAmzTargetEnumAmazonSsmDeletePatchBaseline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePatchBaselineResult != nil {
        // handle response
    }
}
```

## DeleteResourceDataSync

Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.

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
    res, err := s.SDK.DeleteResourceDataSync(ctx, operations.DeleteResourceDataSyncRequest{
        DeleteResourceDataSyncRequest: shared.DeleteResourceDataSyncRequest{
            SyncName: "dolorem",
            SyncType: sdk.String("fugit"),
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.DeleteResourceDataSyncXAmzTargetEnumAmazonSsmDeleteResourceDataSync,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourceDataSyncResult != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        DeleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest{
            PolicyHash: "quasi",
            PolicyID: "et",
            ResourceArn: "ducimus",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DeleteResourcePolicyXAmzTargetEnumAmazonSsmDeleteResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DeregisterManagedInstance

Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.

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
    res, err := s.SDK.DeregisterManagedInstance(ctx, operations.DeregisterManagedInstanceRequest{
        DeregisterManagedInstanceRequest: shared.DeregisterManagedInstanceRequest{
            InstanceID: "nulla",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.DeregisterManagedInstanceXAmzTargetEnumAmazonSsmDeregisterManagedInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterManagedInstanceResult != nil {
        // handle response
    }
}
```

## DeregisterPatchBaselineForPatchGroup

Removes a patch group from a patch baseline.

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
    res, err := s.SDK.DeregisterPatchBaselineForPatchGroup(ctx, operations.DeregisterPatchBaselineForPatchGroupRequest{
        DeregisterPatchBaselineForPatchGroupRequest: shared.DeregisterPatchBaselineForPatchGroupRequest{
            BaselineID: "esse",
            PatchGroup: "praesentium",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DeregisterPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmDeregisterPatchBaselineForPatchGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterPatchBaselineForPatchGroupResult != nil {
        // handle response
    }
}
```

## DeregisterTargetFromMaintenanceWindow

Removes a target from a maintenance window.

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
    res, err := s.SDK.DeregisterTargetFromMaintenanceWindow(ctx, operations.DeregisterTargetFromMaintenanceWindowRequest{
        DeregisterTargetFromMaintenanceWindowRequest: shared.DeregisterTargetFromMaintenanceWindowRequest{
            Safe: sdk.Bool(false),
            WindowID: "odio",
            WindowTargetID: "tempora",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.DeregisterTargetFromMaintenanceWindowXAmzTargetEnumAmazonSsmDeregisterTargetFromMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterTargetFromMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## DeregisterTaskFromMaintenanceWindow

Removes a task from a maintenance window.

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
    res, err := s.SDK.DeregisterTaskFromMaintenanceWindow(ctx, operations.DeregisterTaskFromMaintenanceWindowRequest{
        DeregisterTaskFromMaintenanceWindowRequest: shared.DeregisterTaskFromMaintenanceWindowRequest{
            WindowID: "nostrum",
            WindowTaskID: "fugiat",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DeregisterTaskFromMaintenanceWindowXAmzTargetEnumAmazonSsmDeregisterTaskFromMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterTaskFromMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## DescribeActivations

Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.

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
    res, err := s.SDK.DescribeActivations(ctx, operations.DescribeActivationsRequest{
        DescribeActivationsRequest: shared.DescribeActivationsRequest{
            Filters: []shared.DescribeActivationsFilter{
                shared.DescribeActivationsFilter{
                    FilterKey: shared.DescribeActivationsFilterKeysEnumDefaultInstanceName.ToPointer(),
                    FilterValues: []string{
                        "ab",
                        "error",
                        "possimus",
                    },
                },
                shared.DescribeActivationsFilter{
                    FilterKey: shared.DescribeActivationsFilterKeysEnumIamRole.ToPointer(),
                    FilterValues: []string{
                        "laborum",
                        "libero",
                        "ad",
                    },
                },
            },
            MaxResults: sdk.Int64(536923),
            NextToken: sdk.String("enim"),
        },
        MaxResults: sdk.String("vitae"),
        NextToken: sdk.String("repellendus"),
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DescribeActivationsXAmzTargetEnumAmazonSsmDescribeActivations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeActivationsResult != nil {
        // handle response
    }
}
```

## DescribeAssociation

Describes the association for the specified target or managed node. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID.

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
    res, err := s.SDK.DescribeAssociation(ctx, operations.DescribeAssociationRequest{
        DescribeAssociationRequest: shared.DescribeAssociationRequest{
            AssociationID: sdk.String("molestias"),
            AssociationVersion: sdk.String("cum"),
            InstanceID: sdk.String("aliquid"),
            Name: sdk.String("Miss Nora Moen"),
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DescribeAssociationXAmzTargetEnumAmazonSsmDescribeAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAssociationResult != nil {
        // handle response
    }
}
```

## DescribeAssociationExecutionTargets

Views information about a specific execution of a specific association.

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
    res, err := s.SDK.DescribeAssociationExecutionTargets(ctx, operations.DescribeAssociationExecutionTargetsRequest{
        DescribeAssociationExecutionTargetsRequest: shared.DescribeAssociationExecutionTargetsRequest{
            AssociationID: "debitis",
            ExecutionID: "voluptatem",
            Filters: []shared.AssociationExecutionTargetsFilter{
                shared.AssociationExecutionTargetsFilter{
                    Key: shared.AssociationExecutionTargetsFilterKeyEnumResourceID,
                    Value: "earum",
                },
            },
            MaxResults: sdk.Int64(404244),
            NextToken: sdk.String("sapiente"),
        },
        MaxResults: sdk.String("rem"),
        NextToken: sdk.String("minus"),
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DescribeAssociationExecutionTargetsXAmzTargetEnumAmazonSsmDescribeAssociationExecutionTargets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAssociationExecutionTargetsResult != nil {
        // handle response
    }
}
```

## DescribeAssociationExecutions

Views all executions for a specific association ID. 

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
    res, err := s.SDK.DescribeAssociationExecutions(ctx, operations.DescribeAssociationExecutionsRequest{
        DescribeAssociationExecutionsRequest: shared.DescribeAssociationExecutionsRequest{
            AssociationID: "impedit",
            Filters: []shared.AssociationExecutionFilter{
                shared.AssociationExecutionFilter{
                    Key: shared.AssociationExecutionFilterKeyEnumCreatedTime,
                    Type: shared.AssociationFilterOperatorTypeEnumLessThan,
                    Value: "culpa",
                },
                shared.AssociationExecutionFilter{
                    Key: shared.AssociationExecutionFilterKeyEnumExecutionID,
                    Type: shared.AssociationFilterOperatorTypeEnumEqual,
                    Value: "inventore",
                },
                shared.AssociationExecutionFilter{
                    Key: shared.AssociationExecutionFilterKeyEnumStatus,
                    Type: shared.AssociationFilterOperatorTypeEnumEqual,
                    Value: "tempora",
                },
                shared.AssociationExecutionFilter{
                    Key: shared.AssociationExecutionFilterKeyEnumExecutionID,
                    Type: shared.AssociationFilterOperatorTypeEnumEqual,
                    Value: "architecto",
                },
            },
            MaxResults: sdk.Int64(24944),
            NextToken: sdk.String("modi"),
        },
        MaxResults: sdk.String("fugit"),
        NextToken: sdk.String("ab"),
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DescribeAssociationExecutionsXAmzTargetEnumAmazonSsmDescribeAssociationExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAssociationExecutionsResult != nil {
        // handle response
    }
}
```

## DescribeAutomationExecutions

Provides details about all active and terminated Automation executions.

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
    res, err := s.SDK.DescribeAutomationExecutions(ctx, operations.DescribeAutomationExecutionsRequest{
        DescribeAutomationExecutionsRequest: shared.DescribeAutomationExecutionsRequest{
            Filters: []shared.AutomationExecutionFilter{
                shared.AutomationExecutionFilter{
                    Key: shared.AutomationExecutionFilterKeyEnumAutomationSubtype,
                    Values: []string{
                        "officiis",
                        "esse",
                        "necessitatibus",
                        "sed",
                    },
                },
                shared.AutomationExecutionFilter{
                    Key: shared.AutomationExecutionFilterKeyEnumParentExecutionID,
                    Values: []string{
                        "expedita",
                    },
                },
                shared.AutomationExecutionFilter{
                    Key: shared.AutomationExecutionFilterKeyEnumStartTimeBefore,
                    Values: []string{
                        "voluptatum",
                        "magnam",
                    },
                },
            },
            MaxResults: sdk.Int64(349440),
            NextToken: sdk.String("ab"),
        },
        MaxResults: sdk.String("porro"),
        NextToken: sdk.String("autem"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DescribeAutomationExecutionsXAmzTargetEnumAmazonSsmDescribeAutomationExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAutomationExecutionsResult != nil {
        // handle response
    }
}
```

## DescribeAutomationStepExecutions

Information about all active and terminated step executions in an Automation workflow.

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
    res, err := s.SDK.DescribeAutomationStepExecutions(ctx, operations.DescribeAutomationStepExecutionsRequest{
        DescribeAutomationStepExecutionsRequest: shared.DescribeAutomationStepExecutionsRequest{
            AutomationExecutionID: "quasi",
            Filters: []shared.StepExecutionFilter{
                shared.StepExecutionFilter{
                    Key: shared.StepExecutionFilterKeyEnumAction,
                    Values: []string{
                        "est",
                        "harum",
                        "sequi",
                        "doloribus",
                    },
                },
                shared.StepExecutionFilter{
                    Key: shared.StepExecutionFilterKeyEnumAction,
                    Values: []string{
                        "occaecati",
                        "nemo",
                        "voluptate",
                        "blanditiis",
                    },
                },
            },
            MaxResults: sdk.Int64(642352),
            NextToken: sdk.String("voluptas"),
            ReverseOrder: sdk.Bool(false),
        },
        MaxResults: sdk.String("numquam"),
        NextToken: sdk.String("nemo"),
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.DescribeAutomationStepExecutionsXAmzTargetEnumAmazonSsmDescribeAutomationStepExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAutomationStepExecutionsResult != nil {
        // handle response
    }
}
```

## DescribeAvailablePatches

Lists all patches eligible to be included in a patch baseline.

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
    res, err := s.SDK.DescribeAvailablePatches(ctx, operations.DescribeAvailablePatchesRequest{
        DescribeAvailablePatchesRequest: shared.DescribeAvailablePatchesRequest{
            Filters: []shared.PatchOrchestratorFilter{
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("quasi"),
                    Values: []string{
                        "fugiat",
                        "dicta",
                        "nisi",
                    },
                },
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("consequuntur"),
                    Values: []string{
                        "aperiam",
                    },
                },
            },
            MaxResults: sdk.Int64(585432),
            NextToken: sdk.String("reiciendis"),
        },
        MaxResults: sdk.String("soluta"),
        NextToken: sdk.String("alias"),
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.DescribeAvailablePatchesXAmzTargetEnumAmazonSsmDescribeAvailablePatches,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAvailablePatchesResult != nil {
        // handle response
    }
}
```

## DescribeDocument

Describes the specified Amazon Web Services Systems Manager document (SSM document).

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
    res, err := s.SDK.DescribeDocument(ctx, operations.DescribeDocumentRequest{
        DescribeDocumentRequest: shared.DescribeDocumentRequest{
            DocumentVersion: sdk.String("accusamus"),
            Name: "Preston Mohr",
            VersionName: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.DescribeDocumentXAmzTargetEnumAmazonSsmDescribeDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDocumentResult != nil {
        // handle response
    }
}
```

## DescribeDocumentPermission

Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). 

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
    res, err := s.SDK.DescribeDocumentPermission(ctx, operations.DescribeDocumentPermissionRequest{
        DescribeDocumentPermissionRequest: shared.DescribeDocumentPermissionRequest{
            MaxResults: sdk.Int64(520761),
            Name: "Edwin Reichert III",
            NextToken: sdk.String("vel"),
            PermissionType: shared.DocumentPermissionTypeEnumShare,
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.DescribeDocumentPermissionXAmzTargetEnumAmazonSsmDescribeDocumentPermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDocumentPermissionResponse != nil {
        // handle response
    }
}
```

## DescribeEffectiveInstanceAssociations

All associations for the managed node(s).

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
    res, err := s.SDK.DescribeEffectiveInstanceAssociations(ctx, operations.DescribeEffectiveInstanceAssociationsRequest{
        DescribeEffectiveInstanceAssociationsRequest: shared.DescribeEffectiveInstanceAssociationsRequest{
            InstanceID: "deserunt",
            MaxResults: sdk.Int64(458503),
            NextToken: sdk.String("nemo"),
        },
        MaxResults: sdk.String("reprehenderit"),
        NextToken: sdk.String("est"),
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DescribeEffectiveInstanceAssociationsXAmzTargetEnumAmazonSsmDescribeEffectiveInstanceAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEffectiveInstanceAssociationsResult != nil {
        // handle response
    }
}
```

## DescribeEffectivePatchesForPatchBaseline

Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.

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
    res, err := s.SDK.DescribeEffectivePatchesForPatchBaseline(ctx, operations.DescribeEffectivePatchesForPatchBaselineRequest{
        DescribeEffectivePatchesForPatchBaselineRequest: shared.DescribeEffectivePatchesForPatchBaselineRequest{
            BaselineID: "ex",
            MaxResults: sdk.Int64(376741),
            NextToken: sdk.String("debitis"),
        },
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("quae"),
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeEffectivePatchesForPatchBaselineXAmzTargetEnumAmazonSsmDescribeEffectivePatchesForPatchBaseline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEffectivePatchesForPatchBaselineResult != nil {
        // handle response
    }
}
```

## DescribeInstanceAssociationsStatus

The status of the associations for the managed node(s).

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
    res, err := s.SDK.DescribeInstanceAssociationsStatus(ctx, operations.DescribeInstanceAssociationsStatusRequest{
        DescribeInstanceAssociationsStatusRequest: shared.DescribeInstanceAssociationsStatusRequest{
            InstanceID: "impedit",
            MaxResults: sdk.Int64(166047),
            NextToken: sdk.String("soluta"),
        },
        MaxResults: sdk.String("repudiandae"),
        NextToken: sdk.String("nam"),
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DescribeInstanceAssociationsStatusXAmzTargetEnumAmazonSsmDescribeInstanceAssociationsStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstanceAssociationsStatusResult != nil {
        // handle response
    }
}
```

## DescribeInstanceInformation

<p>Describes one or more of your managed nodes, including information about the operating system platform, the version of SSM Agent installed on the managed node, node status, and so on.</p> <p>If you specify one or more managed node IDs, it returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.</p> <note> <p>The <code>IamRole</code> field for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This call doesn't return the IAM role for EC2 instances.</p> </note>

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
    res, err := s.SDK.DescribeInstanceInformation(ctx, operations.DescribeInstanceInformationRequest{
        DescribeInstanceInformationRequest: shared.DescribeInstanceInformationRequest{
            Filters: []shared.InstanceInformationStringFilter{
                shared.InstanceInformationStringFilter{
                    Key: "quibusdam",
                    Values: []string{
                        "odit",
                        "voluptatibus",
                    },
                },
                shared.InstanceInformationStringFilter{
                    Key: "vel",
                    Values: []string{
                        "quibusdam",
                        "inventore",
                    },
                },
                shared.InstanceInformationStringFilter{
                    Key: "facere",
                    Values: []string{
                        "architecto",
                        "voluptatibus",
                        "quia",
                    },
                },
            },
            InstanceInformationFilterList: []shared.InstanceInformationFilter{
                shared.InstanceInformationFilter{
                    Key: shared.InstanceInformationFilterKeyEnumPingStatus,
                    ValueSet: []string{
                        "illo",
                    },
                },
                shared.InstanceInformationFilter{
                    Key: shared.InstanceInformationFilterKeyEnumInstanceIds,
                    ValueSet: []string{
                        "ea",
                        "beatae",
                    },
                },
                shared.InstanceInformationFilter{
                    Key: shared.InstanceInformationFilterKeyEnumAssociationStatus,
                    ValueSet: []string{
                        "eum",
                        "velit",
                        "ut",
                    },
                },
                shared.InstanceInformationFilter{
                    Key: shared.InstanceInformationFilterKeyEnumActivationIds,
                    ValueSet: []string{
                        "dicta",
                        "impedit",
                        "voluptatibus",
                        "iste",
                    },
                },
            },
            MaxResults: sdk.Int64(932562),
            NextToken: sdk.String("alias"),
        },
        MaxResults: sdk.String("nisi"),
        NextToken: sdk.String("itaque"),
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.DescribeInstanceInformationXAmzTargetEnumAmazonSsmDescribeInstanceInformation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstanceInformationResult != nil {
        // handle response
    }
}
```

## DescribeInstancePatchStates

Retrieves the high-level patch state of one or more managed nodes.

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
    res, err := s.SDK.DescribeInstancePatchStates(ctx, operations.DescribeInstancePatchStatesRequest{
        DescribeInstancePatchStatesRequest: shared.DescribeInstancePatchStatesRequest{
            InstanceIds: []string{
                "officia",
            },
            MaxResults: sdk.Int64(927403),
            NextToken: sdk.String("ea"),
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("voluptas"),
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DescribeInstancePatchStatesXAmzTargetEnumAmazonSsmDescribeInstancePatchStates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstancePatchStatesResult != nil {
        // handle response
    }
}
```

## DescribeInstancePatchStatesForPatchGroup

Retrieves the high-level patch state for the managed nodes in the specified patch group.

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
    res, err := s.SDK.DescribeInstancePatchStatesForPatchGroup(ctx, operations.DescribeInstancePatchStatesForPatchGroupRequest{
        DescribeInstancePatchStatesForPatchGroupRequest: shared.DescribeInstancePatchStatesForPatchGroupRequest{
            Filters: []shared.InstancePatchStateFilter{
                shared.InstancePatchStateFilter{
                    Key: "unde",
                    Type: shared.InstancePatchStateOperatorTypeEnumGreaterThan,
                    Values: []string{
                        "impedit",
                        "ipsam",
                        "corporis",
                    },
                },
                shared.InstancePatchStateFilter{
                    Key: "est",
                    Type: shared.InstancePatchStateOperatorTypeEnumLessThan,
                    Values: []string{
                        "labore",
                        "veritatis",
                    },
                },
            },
            MaxResults: sdk.Int64(874400),
            NextToken: sdk.String("consectetur"),
            PatchGroup: "vitae",
        },
        MaxResults: sdk.String("inventore"),
        NextToken: sdk.String("dolorem"),
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DescribeInstancePatchStatesForPatchGroupXAmzTargetEnumAmazonSsmDescribeInstancePatchStatesForPatchGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstancePatchStatesForPatchGroupResult != nil {
        // handle response
    }
}
```

## DescribeInstancePatches

Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.

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
    res, err := s.SDK.DescribeInstancePatches(ctx, operations.DescribeInstancePatchesRequest{
        DescribeInstancePatchesRequest: shared.DescribeInstancePatchesRequest{
            Filters: []shared.PatchOrchestratorFilter{
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("dolorum"),
                    Values: []string{
                        "fugit",
                        "alias",
                    },
                },
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("magni"),
                    Values: []string{
                        "quae",
                        "quae",
                    },
                },
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("modi"),
                    Values: []string{
                        "exercitationem",
                    },
                },
            },
            InstanceID: "itaque",
            MaxResults: sdk.Int64(88248),
            NextToken: sdk.String("ipsum"),
        },
        MaxResults: sdk.String("unde"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DescribeInstancePatchesXAmzTargetEnumAmazonSsmDescribeInstancePatches,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInstancePatchesResult != nil {
        // handle response
    }
}
```

## DescribeInventoryDeletions

Describes a specific delete inventory operation.

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
    res, err := s.SDK.DescribeInventoryDeletions(ctx, operations.DescribeInventoryDeletionsRequest{
        DescribeInventoryDeletionsRequest: shared.DescribeInventoryDeletionsRequest{
            DeletionID: sdk.String("dicta"),
            MaxResults: sdk.Int64(663318),
            NextToken: sdk.String("libero"),
        },
        MaxResults: sdk.String("fugiat"),
        NextToken: sdk.String("officia"),
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.DescribeInventoryDeletionsXAmzTargetEnumAmazonSsmDescribeInventoryDeletions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInventoryDeletionsResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindowExecutionTaskInvocations

Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.

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
    res, err := s.SDK.DescribeMaintenanceWindowExecutionTaskInvocations(ctx, operations.DescribeMaintenanceWindowExecutionTaskInvocationsRequest{
        DescribeMaintenanceWindowExecutionTaskInvocationsRequest: shared.DescribeMaintenanceWindowExecutionTaskInvocationsRequest{
            Filters: []shared.MaintenanceWindowFilter{
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("totam"),
                    Values: []string{
                        "eligendi",
                        "distinctio",
                    },
                },
            },
            MaxResults: sdk.Int64(32273),
            NextToken: sdk.String("autem"),
            TaskID: "esse",
            WindowExecutionID: "dolores",
        },
        MaxResults: sdk.String("assumenda"),
        NextToken: sdk.String("beatae"),
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowExecutionTaskInvocations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowExecutionTaskInvocationsResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindowExecutionTasks

For a given maintenance window execution, lists the tasks that were run.

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
    res, err := s.SDK.DescribeMaintenanceWindowExecutionTasks(ctx, operations.DescribeMaintenanceWindowExecutionTasksRequest{
        DescribeMaintenanceWindowExecutionTasksRequest: shared.DescribeMaintenanceWindowExecutionTasksRequest{
            Filters: []shared.MaintenanceWindowFilter{
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("sint"),
                    Values: []string{
                        "autem",
                        "ipsam",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("rerum"),
                    Values: []string{
                        "corporis",
                        "officiis",
                        "voluptatibus",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("cum"),
                    Values: []string{
                        "alias",
                        "quia",
                        "quidem",
                        "fuga",
                    },
                },
            },
            MaxResults: sdk.Int64(919508),
            NextToken: sdk.String("accusantium"),
            WindowExecutionID: "expedita",
        },
        MaxResults: sdk.String("officiis"),
        NextToken: sdk.String("eos"),
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.DescribeMaintenanceWindowExecutionTasksXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowExecutionTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowExecutionTasksResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindowExecutions

Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.

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
    res, err := s.SDK.DescribeMaintenanceWindowExecutions(ctx, operations.DescribeMaintenanceWindowExecutionsRequest{
        DescribeMaintenanceWindowExecutionsRequest: shared.DescribeMaintenanceWindowExecutionsRequest{
            Filters: []shared.MaintenanceWindowFilter{
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("adipisci"),
                    Values: []string{
                        "similique",
                        "ut",
                        "quidem",
                        "quis",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("beatae"),
                    Values: []string{
                        "molestiae",
                        "delectus",
                        "cupiditate",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("fugit"),
                    Values: []string{
                        "numquam",
                        "nesciunt",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("at"),
                    Values: []string{
                        "dignissimos",
                        "optio",
                        "necessitatibus",
                    },
                },
            },
            MaxResults: sdk.Int64(359111),
            NextToken: sdk.String("qui"),
            WindowID: "expedita",
        },
        MaxResults: sdk.String("voluptatum"),
        NextToken: sdk.String("cupiditate"),
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DescribeMaintenanceWindowExecutionsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowExecutionsResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindowSchedule

Retrieves information about upcoming executions of a maintenance window.

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
    res, err := s.SDK.DescribeMaintenanceWindowSchedule(ctx, operations.DescribeMaintenanceWindowScheduleRequest{
        DescribeMaintenanceWindowScheduleRequest: shared.DescribeMaintenanceWindowScheduleRequest{
            Filters: []shared.PatchOrchestratorFilter{
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("corporis"),
                    Values: []string{
                        "voluptates",
                        "maiores",
                    },
                },
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("tempore"),
                    Values: []string{
                        "libero",
                    },
                },
            },
            MaxResults: sdk.Int64(189753),
            NextToken: sdk.String("labore"),
            ResourceType: shared.MaintenanceWindowResourceTypeEnumResourceGroup.ToPointer(),
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("voluptas"),
                    Values: []string{
                        "velit",
                        "minus",
                        "fuga",
                        "nostrum",
                    },
                },
                shared.Target{
                    Key: sdk.String("est"),
                    Values: []string{
                        "delectus",
                        "tempore",
                        "vero",
                        "odit",
                    },
                },
                shared.Target{
                    Key: sdk.String("repellat"),
                    Values: []string{
                        "nemo",
                        "reprehenderit",
                        "aperiam",
                        "odio",
                    },
                },
            },
            WindowID: sdk.String("minima"),
        },
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("ducimus"),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DescribeMaintenanceWindowScheduleXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowSchedule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowScheduleResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindowTargets

Lists the targets registered with the maintenance window.

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
    res, err := s.SDK.DescribeMaintenanceWindowTargets(ctx, operations.DescribeMaintenanceWindowTargetsRequest{
        DescribeMaintenanceWindowTargetsRequest: shared.DescribeMaintenanceWindowTargetsRequest{
            Filters: []shared.MaintenanceWindowFilter{
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("similique"),
                    Values: []string{
                        "ex",
                        "quaerat",
                        "commodi",
                        "officiis",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("placeat"),
                    Values: []string{
                        "exercitationem",
                        "quam",
                        "dolorem",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("modi"),
                    Values: []string{
                        "sint",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("vero"),
                    Values: []string{
                        "repudiandae",
                    },
                },
            },
            MaxResults: sdk.Int64(741232),
            NextToken: sdk.String("dicta"),
            WindowID: "earum",
        },
        MaxResults: sdk.String("veniam"),
        NextToken: sdk.String("animi"),
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DescribeMaintenanceWindowTargetsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowTargets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowTargetsResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindowTasks

<p>Lists the tasks in a maintenance window.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note>

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
    res, err := s.SDK.DescribeMaintenanceWindowTasks(ctx, operations.DescribeMaintenanceWindowTasksRequest{
        DescribeMaintenanceWindowTasksRequest: shared.DescribeMaintenanceWindowTasksRequest{
            Filters: []shared.MaintenanceWindowFilter{
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("maiores"),
                    Values: []string{
                        "quasi",
                    },
                },
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("laboriosam"),
                    Values: []string{
                        "libero",
                        "excepturi",
                        "occaecati",
                        "nemo",
                    },
                },
            },
            MaxResults: sdk.Int64(306382),
            NextToken: sdk.String("nostrum"),
            WindowID: "doloribus",
        },
        MaxResults: sdk.String("eligendi"),
        NextToken: sdk.String("sint"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DescribeMaintenanceWindowTasksXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowTasksResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindows

Retrieves the maintenance windows in an Amazon Web Services account.

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
    res, err := s.SDK.DescribeMaintenanceWindows(ctx, operations.DescribeMaintenanceWindowsRequest{
        DescribeMaintenanceWindowsRequest: shared.DescribeMaintenanceWindowsRequest{
            Filters: []shared.MaintenanceWindowFilter{
                shared.MaintenanceWindowFilter{
                    Key: sdk.String("saepe"),
                    Values: []string{
                        "quos",
                    },
                },
            },
            MaxResults: sdk.Int64(614438),
            NextToken: sdk.String("assumenda"),
        },
        MaxResults: sdk.String("tempore"),
        NextToken: sdk.String("libero"),
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeMaintenanceWindowsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindows,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowsResult != nil {
        // handle response
    }
}
```

## DescribeMaintenanceWindowsForTarget

Retrieves information about the maintenance window targets or tasks that a managed node is associated with.

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
    res, err := s.SDK.DescribeMaintenanceWindowsForTarget(ctx, operations.DescribeMaintenanceWindowsForTargetRequest{
        DescribeMaintenanceWindowsForTargetRequest: shared.DescribeMaintenanceWindowsForTargetRequest{
            MaxResults: sdk.Int64(903150),
            NextToken: sdk.String("deserunt"),
            ResourceType: shared.MaintenanceWindowResourceTypeEnumInstance,
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("veniam"),
                    Values: []string{
                        "architecto",
                        "cupiditate",
                        "molestiae",
                    },
                },
                shared.Target{
                    Key: sdk.String("eligendi"),
                    Values: []string{
                        "non",
                        "magnam",
                        "itaque",
                        "sed",
                    },
                },
            },
        },
        MaxResults: sdk.String("asperiores"),
        NextToken: sdk.String("veniam"),
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.DescribeMaintenanceWindowsForTargetXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowsForTarget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMaintenanceWindowsForTargetResult != nil {
        // handle response
    }
}
```

## DescribeOpsItems

<p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

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
    res, err := s.SDK.DescribeOpsItems(ctx, operations.DescribeOpsItemsRequest{
        DescribeOpsItemsRequest: shared.DescribeOpsItemsRequest{
            MaxResults: sdk.Int64(68852),
            NextToken: sdk.String("velit"),
            OpsItemFilters: []shared.OpsItemFilter{
                shared.OpsItemFilter{
                    Key: shared.OpsItemFilterKeyEnumChangeRequestByRequesterArn,
                    Operator: shared.OpsItemFilterOperatorEnumContains,
                    Values: []string{
                        "quaerat",
                        "blanditiis",
                        "distinctio",
                        "nisi",
                    },
                },
                shared.OpsItemFilter{
                    Key: shared.OpsItemFilterKeyEnumActualEndTime,
                    Operator: shared.OpsItemFilterOperatorEnumContains,
                    Values: []string{
                        "minus",
                        "facere",
                        "facilis",
                    },
                },
                shared.OpsItemFilter{
                    Key: shared.OpsItemFilterKeyEnumCreatedTime,
                    Operator: shared.OpsItemFilterOperatorEnumContains,
                    Values: []string{
                        "voluptatibus",
                        "consequuntur",
                        "debitis",
                        "labore",
                    },
                },
            },
        },
        MaxResults: sdk.String("rerum"),
        NextToken: sdk.String("eos"),
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.DescribeOpsItemsXAmzTargetEnumAmazonSsmDescribeOpsItems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOpsItemsResponse != nil {
        // handle response
    }
}
```

## DescribeParameters

<p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>DescribeParameters</code> retrieves whatever the original key alias was referencing.</p> </important>

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
    res, err := s.SDK.DescribeParameters(ctx, operations.DescribeParametersRequest{
        DescribeParametersRequest: shared.DescribeParametersRequest{
            Filters: []shared.ParametersFilter{
                shared.ParametersFilter{
                    Key: shared.ParametersFilterKeyEnumType,
                    Values: []string{
                        "ducimus",
                        "dolor",
                        "dicta",
                        "error",
                    },
                },
                shared.ParametersFilter{
                    Key: shared.ParametersFilterKeyEnumKeyID,
                    Values: []string{
                        "dignissimos",
                    },
                },
                shared.ParametersFilter{
                    Key: shared.ParametersFilterKeyEnumType,
                    Values: []string{
                        "ad",
                        "aspernatur",
                        "enim",
                        "delectus",
                    },
                },
                shared.ParametersFilter{
                    Key: shared.ParametersFilterKeyEnumType,
                    Values: []string{
                        "libero",
                        "illo",
                    },
                },
            },
            MaxResults: sdk.Int64(69182),
            NextToken: sdk.String("incidunt"),
            ParameterFilters: []shared.ParameterStringFilter{
                shared.ParameterStringFilter{
                    Key: "saepe",
                    Option: sdk.String("tempore"),
                    Values: []string{
                        "eos",
                        "reiciendis",
                    },
                },
                shared.ParameterStringFilter{
                    Key: "earum",
                    Option: sdk.String("reprehenderit"),
                    Values: []string{
                        "nemo",
                        "repellat",
                        "quisquam",
                    },
                },
                shared.ParameterStringFilter{
                    Key: "sequi",
                    Option: sdk.String("nihil"),
                    Values: []string{
                        "illo",
                        "labore",
                        "assumenda",
                    },
                },
                shared.ParameterStringFilter{
                    Key: "aliquam",
                    Option: sdk.String("quisquam"),
                    Values: []string{
                        "laudantium",
                        "repudiandae",
                        "consequatur",
                    },
                },
            },
        },
        MaxResults: sdk.String("maxime"),
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.DescribeParametersXAmzTargetEnumAmazonSsmDescribeParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeParametersResult != nil {
        // handle response
    }
}
```

## DescribePatchBaselines

Lists the patch baselines in your Amazon Web Services account.

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
    res, err := s.SDK.DescribePatchBaselines(ctx, operations.DescribePatchBaselinesRequest{
        DescribePatchBaselinesRequest: shared.DescribePatchBaselinesRequest{
            Filters: []shared.PatchOrchestratorFilter{
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("vero"),
                    Values: []string{
                        "repellendus",
                        "iure",
                        "dolorem",
                    },
                },
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("commodi"),
                    Values: []string{
                        "commodi",
                        "aut",
                        "voluptatem",
                        "ad",
                    },
                },
            },
            MaxResults: sdk.Int64(60995),
            NextToken: sdk.String("amet"),
        },
        MaxResults: sdk.String("illum"),
        NextToken: sdk.String("praesentium"),
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.DescribePatchBaselinesXAmzTargetEnumAmazonSsmDescribePatchBaselines,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePatchBaselinesResult != nil {
        // handle response
    }
}
```

## DescribePatchGroupState

Returns high-level aggregated patch compliance state information for a patch group.

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
    res, err := s.SDK.DescribePatchGroupState(ctx, operations.DescribePatchGroupStateRequest{
        DescribePatchGroupStateRequest: shared.DescribePatchGroupStateRequest{
            PatchGroup: "earum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.DescribePatchGroupStateXAmzTargetEnumAmazonSsmDescribePatchGroupState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePatchGroupStateResult != nil {
        // handle response
    }
}
```

## DescribePatchGroups

Lists all patch groups that have been registered with patch baselines.

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
    res, err := s.SDK.DescribePatchGroups(ctx, operations.DescribePatchGroupsRequest{
        DescribePatchGroupsRequest: shared.DescribePatchGroupsRequest{
            Filters: []shared.PatchOrchestratorFilter{
                shared.PatchOrchestratorFilter{
                    Key: sdk.String("nemo"),
                    Values: []string{
                        "itaque",
                        "facilis",
                    },
                },
            },
            MaxResults: sdk.Int64(545779),
            NextToken: sdk.String("aperiam"),
        },
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.DescribePatchGroupsXAmzTargetEnumAmazonSsmDescribePatchGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePatchGroupsResult != nil {
        // handle response
    }
}
```

## DescribePatchProperties

<p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>DEBIAN</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>MACOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> </p> </dd> <dt>ORACLE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>UBUNTU</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>WINDOWS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> | <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code> </p> </dd> </dl>

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
    res, err := s.SDK.DescribePatchProperties(ctx, operations.DescribePatchPropertiesRequest{
        DescribePatchPropertiesRequest: shared.DescribePatchPropertiesRequest{
            MaxResults: sdk.Int64(953676),
            NextToken: sdk.String("dolor"),
            OperatingSystem: shared.OperatingSystemEnumOracleLinux,
            PatchSet: shared.PatchSetEnumApplication.ToPointer(),
            Property: shared.PatchPropertyEnumProduct,
        },
        MaxResults: sdk.String("at"),
        NextToken: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.DescribePatchPropertiesXAmzTargetEnumAmazonSsmDescribePatchProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePatchPropertiesResult != nil {
        // handle response
    }
}
```

## DescribeSessions

Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.

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
    res, err := s.SDK.DescribeSessions(ctx, operations.DescribeSessionsRequest{
        DescribeSessionsRequest: shared.DescribeSessionsRequest{
            Filters: []shared.SessionFilter{
                shared.SessionFilter{
                    Key: shared.SessionFilterKeyEnumSessionID,
                    Value: "velit",
                },
                shared.SessionFilter{
                    Key: shared.SessionFilterKeyEnumStatus,
                    Value: "provident",
                },
            },
            MaxResults: sdk.Int64(231382),
            NextToken: sdk.String("eligendi"),
            State: shared.SessionStateEnumActive,
        },
        MaxResults: sdk.String("consectetur"),
        NextToken: sdk.String("soluta"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DescribeSessionsXAmzTargetEnumAmazonSsmDescribeSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSessionsResponse != nil {
        // handle response
    }
}
```

## DisassociateOpsItemRelatedItem

Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.

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
    res, err := s.SDK.DisassociateOpsItemRelatedItem(ctx, operations.DisassociateOpsItemRelatedItemRequest{
        DisassociateOpsItemRelatedItemRequest: shared.DisassociateOpsItemRelatedItemRequest{
            AssociationID: "itaque",
            OpsItemID: "illum",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DisassociateOpsItemRelatedItemXAmzTargetEnumAmazonSsmDisassociateOpsItemRelatedItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateOpsItemRelatedItemResponse != nil {
        // handle response
    }
}
```

## GetAutomationExecution

Get detailed information about a particular Automation execution.

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
    res, err := s.SDK.GetAutomationExecution(ctx, operations.GetAutomationExecutionRequest{
        GetAutomationExecutionRequest: shared.GetAutomationExecutionRequest{
            AutomationExecutionID: "explicabo",
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.GetAutomationExecutionXAmzTargetEnumAmazonSsmGetAutomationExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAutomationExecutionResult != nil {
        // handle response
    }
}
```

## GetCalendarState

<p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p> <p>If you specify more than one calendar in a request, the command returns the status of <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is <code>CLOSED</code>.</p> <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>

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
    res, err := s.SDK.GetCalendarState(ctx, operations.GetCalendarStateRequest{
        GetCalendarStateRequest: shared.GetCalendarStateRequest{
            AtTime: sdk.String("delectus"),
            CalendarNames: []string{
                "distinctio",
                "in",
            },
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.GetCalendarStateXAmzTargetEnumAmazonSsmGetCalendarState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCalendarStateResponse != nil {
        // handle response
    }
}
```

## GetCommandInvocation

<p>Returns detailed information about command execution for an invocation or plugin.</p> <p> <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes, use <a>ListCommands</a>.</p>

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
    res, err := s.SDK.GetCommandInvocation(ctx, operations.GetCommandInvocationRequest{
        GetCommandInvocationRequest: shared.GetCommandInvocationRequest{
            CommandID: "accusamus",
            InstanceID: "rem",
            PluginName: sdk.String("aperiam"),
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.GetCommandInvocationXAmzTargetEnumAmazonSsmGetCommandInvocation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommandInvocationResult != nil {
        // handle response
    }
}
```

## GetConnectionStatus

Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.

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
    res, err := s.SDK.GetConnectionStatus(ctx, operations.GetConnectionStatusRequest{
        GetConnectionStatusRequest: shared.GetConnectionStatusRequest{
            Target: "magnam",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.GetConnectionStatusXAmzTargetEnumAmazonSsmGetConnectionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionStatusResponse != nil {
        // handle response
    }
}
```

## GetDefaultPatchBaseline

<p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you don't specify an operating system value, the default patch baseline for Windows is returned.</p>

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
    res, err := s.SDK.GetDefaultPatchBaseline(ctx, operations.GetDefaultPatchBaselineRequest{
        GetDefaultPatchBaselineRequest: shared.GetDefaultPatchBaselineRequest{
            OperatingSystem: shared.OperatingSystemEnumRedhatEnterpriseLinux.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.GetDefaultPatchBaselineXAmzTargetEnumAmazonSsmGetDefaultPatchBaseline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDefaultPatchBaselineResult != nil {
        // handle response
    }
}
```

## GetDeployablePatchSnapshotForInstance

<p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p> <note> <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the <code>AWS-RunShellScript</code> document or the <code>AWS-RunPowerShellScript</code> document.</p> </note>

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
    res, err := s.SDK.GetDeployablePatchSnapshotForInstance(ctx, operations.GetDeployablePatchSnapshotForInstanceRequest{
        GetDeployablePatchSnapshotForInstanceRequest: shared.GetDeployablePatchSnapshotForInstanceRequest{
            BaselineOverride: &shared.BaselineOverride{
                ApprovalRules: &shared.PatchRuleGroup{
                    PatchRules: []shared.PatchRule{
                        shared.PatchRule{
                            ApproveAfterDays: sdk.Int64(483753),
                            ApproveUntilDate: sdk.String("commodi"),
                            ComplianceLevel: shared.PatchComplianceLevelEnumHigh.ToPointer(),
                            EnableNonSecurity: sdk.Bool(false),
                            PatchFilterGroup: shared.PatchFilterGroup{
                                PatchFilters: []shared.PatchFilter{
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumRelease,
                                        Values: []string{
                                            "consectetur",
                                            "nesciunt",
                                        },
                                    },
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumProductFamily,
                                        Values: []string{
                                            "minus",
                                            "sunt",
                                            "distinctio",
                                            "iusto",
                                        },
                                    },
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumName,
                                        Values: []string{
                                            "facilis",
                                        },
                                    },
                                },
                            },
                        },
                        shared.PatchRule{
                            ApproveAfterDays: sdk.Int64(229276),
                            ApproveUntilDate: sdk.String("autem"),
                            ComplianceLevel: shared.PatchComplianceLevelEnumInformational.ToPointer(),
                            EnableNonSecurity: sdk.Bool(false),
                            PatchFilterGroup: shared.PatchFilterGroup{
                                PatchFilters: []shared.PatchFilter{
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumName,
                                        Values: []string{
                                            "quos",
                                        },
                                    },
                                },
                            },
                        },
                        shared.PatchRule{
                            ApproveAfterDays: sdk.Int64(511222),
                            ApproveUntilDate: sdk.String("repellendus"),
                            ComplianceLevel: shared.PatchComplianceLevelEnumCritical.ToPointer(),
                            EnableNonSecurity: sdk.Bool(false),
                            PatchFilterGroup: shared.PatchFilterGroup{
                                PatchFilters: []shared.PatchFilter{
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumArch,
                                        Values: []string{
                                            "delectus",
                                            "mollitia",
                                            "nulla",
                                            "officia",
                                        },
                                    },
                                },
                            },
                        },
                        shared.PatchRule{
                            ApproveAfterDays: sdk.Int64(152027),
                            ApproveUntilDate: sdk.String("voluptatem"),
                            ComplianceLevel: shared.PatchComplianceLevelEnumCritical.ToPointer(),
                            EnableNonSecurity: sdk.Bool(false),
                            PatchFilterGroup: shared.PatchFilterGroup{
                                PatchFilters: []shared.PatchFilter{
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumSecurity,
                                        Values: []string{
                                            "incidunt",
                                        },
                                    },
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumPatchSet,
                                        Values: []string{
                                            "necessitatibus",
                                        },
                                    },
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumPriority,
                                        Values: []string{
                                            "beatae",
                                        },
                                    },
                                    shared.PatchFilter{
                                        Key: shared.PatchFilterKeyEnumCveID,
                                        Values: []string{
                                            "optio",
                                            "voluptatibus",
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                ApprovedPatches: []string{
                    "officia",
                    "libero",
                    "totam",
                },
                ApprovedPatchesComplianceLevel: shared.PatchComplianceLevelEnumHigh.ToPointer(),
                ApprovedPatchesEnableNonSecurity: sdk.Bool(false),
                GlobalFilters: &shared.PatchFilterGroup{
                    PatchFilters: []shared.PatchFilter{
                        shared.PatchFilter{
                            Key: shared.PatchFilterKeyEnumCveID,
                            Values: []string{
                                "ducimus",
                                "odit",
                                "velit",
                                "reiciendis",
                            },
                        },
                        shared.PatchFilter{
                            Key: shared.PatchFilterKeyEnumVersion,
                            Values: []string{
                                "laborum",
                                "natus",
                                "accusamus",
                                "doloremque",
                            },
                        },
                    },
                },
                OperatingSystem: shared.OperatingSystemEnumRedhatEnterpriseLinux.ToPointer(),
                RejectedPatches: []string{
                    "recusandae",
                    "voluptates",
                    "non",
                },
                RejectedPatchesAction: shared.PatchActionEnumBlock.ToPointer(),
                Sources: []shared.PatchSource{
                    shared.PatchSource{
                        Configuration: "ullam",
                        Name: "Willie Wiza PhD",
                        Products: []string{
                            "architecto",
                        },
                    },
                },
            },
            InstanceID: "enim",
            SnapshotID: "optio",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.GetDeployablePatchSnapshotForInstanceXAmzTargetEnumAmazonSsmGetDeployablePatchSnapshotForInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeployablePatchSnapshotForInstanceResult != nil {
        // handle response
    }
}
```

## GetDocument

Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).

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
    res, err := s.SDK.GetDocument(ctx, operations.GetDocumentRequest{
        GetDocumentRequest: shared.GetDocumentRequest{
            DocumentFormat: shared.DocumentFormatEnumJSON.ToPointer(),
            DocumentVersion: sdk.String("ullam"),
            Name: "Emma Ward",
            VersionName: sdk.String("consequuntur"),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.GetDocumentXAmzTargetEnumAmazonSsmGetDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDocumentResult != nil {
        // handle response
    }
}
```

## GetInventory

Query inventory information. This includes managed node status, such as <code>Stopped</code> or <code>Terminated</code>.

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
    res, err := s.SDK.GetInventory(ctx, operations.GetInventoryRequest{
        GetInventoryRequest: shared.GetInventoryRequest{
            Aggregators: []shared.InventoryAggregator{
                shared.InventoryAggregator{
                    Aggregators: []shared.InventoryAggregator{
                        shared.InventoryAggregator{},
                    },
                    Expression: sdk.String("sint"),
                    Groups: []shared.InventoryGroup{
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "iure",
                                    Type: shared.InventoryQueryOperatorTypeEnumBeginWith.ToPointer(),
                                    Values: []string{
                                        "debitis",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "vel",
                                    Type: shared.InventoryQueryOperatorTypeEnumNotEqual.ToPointer(),
                                    Values: []string{
                                        "voluptas",
                                        "consequuntur",
                                    },
                                },
                            },
                            Name: "Ron Rau IV",
                        },
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "accusantium",
                                    Type: shared.InventoryQueryOperatorTypeEnumNotEqual.ToPointer(),
                                    Values: []string{
                                        "neque",
                                        "facere",
                                        "aliquam",
                                        "quos",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "doloribus",
                                    Type: shared.InventoryQueryOperatorTypeEnumExists.ToPointer(),
                                    Values: []string{
                                        "delectus",
                                        "velit",
                                        "vitae",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "nesciunt",
                                    Type: shared.InventoryQueryOperatorTypeEnumLessThan.ToPointer(),
                                    Values: []string{
                                        "repellat",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "nemo",
                                    Type: shared.InventoryQueryOperatorTypeEnumExists.ToPointer(),
                                    Values: []string{
                                        "unde",
                                        "incidunt",
                                        "explicabo",
                                        "ipsam",
                                    },
                                },
                            },
                            Name: "Lucas Abbott",
                        },
                    },
                },
                shared.InventoryAggregator{
                    Aggregators: []shared.InventoryAggregator{
                        shared.InventoryAggregator{},
                        shared.InventoryAggregator{},
                    },
                    Expression: sdk.String("sapiente"),
                    Groups: []shared.InventoryGroup{
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "debitis",
                                    Type: shared.InventoryQueryOperatorTypeEnumLessThan.ToPointer(),
                                    Values: []string{
                                        "ut",
                                        "numquam",
                                        "tenetur",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "adipisci",
                                    Type: shared.InventoryQueryOperatorTypeEnumGreaterThan.ToPointer(),
                                    Values: []string{
                                        "minima",
                                        "ex",
                                    },
                                },
                            },
                            Name: "Andrew Brekke",
                        },
                    },
                },
                shared.InventoryAggregator{
                    Aggregators: []shared.InventoryAggregator{
                        shared.InventoryAggregator{},
                        shared.InventoryAggregator{},
                        shared.InventoryAggregator{},
                        shared.InventoryAggregator{},
                    },
                    Expression: sdk.String("dolor"),
                    Groups: []shared.InventoryGroup{
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "minima",
                                    Type: shared.InventoryQueryOperatorTypeEnumEqual.ToPointer(),
                                    Values: []string{
                                        "aliquid",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "magni",
                                    Type: shared.InventoryQueryOperatorTypeEnumNotEqual.ToPointer(),
                                    Values: []string{
                                        "praesentium",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "dolor",
                                    Type: shared.InventoryQueryOperatorTypeEnumBeginWith.ToPointer(),
                                    Values: []string{
                                        "facilis",
                                        "impedit",
                                        "sit",
                                    },
                                },
                            },
                            Name: "Molly Cronin",
                        },
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "veniam",
                                    Type: shared.InventoryQueryOperatorTypeEnumGreaterThan.ToPointer(),
                                    Values: []string{
                                        "a",
                                        "quisquam",
                                        "enim",
                                        "doloribus",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "assumenda",
                                    Type: shared.InventoryQueryOperatorTypeEnumExists.ToPointer(),
                                    Values: []string{
                                        "alias",
                                    },
                                },
                            },
                            Name: "Frank Rolfson",
                        },
                    },
                },
                shared.InventoryAggregator{
                    Aggregators: []shared.InventoryAggregator{
                        shared.InventoryAggregator{},
                    },
                    Expression: sdk.String("vel"),
                    Groups: []shared.InventoryGroup{
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "ullam",
                                    Type: shared.InventoryQueryOperatorTypeEnumEqual.ToPointer(),
                                    Values: []string{
                                        "perferendis",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "veritatis",
                                    Type: shared.InventoryQueryOperatorTypeEnumLessThan.ToPointer(),
                                    Values: []string{
                                        "iure",
                                        "quibusdam",
                                        "quod",
                                        "nemo",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "recusandae",
                                    Type: shared.InventoryQueryOperatorTypeEnumNotEqual.ToPointer(),
                                    Values: []string{
                                        "dignissimos",
                                        "laboriosam",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "sed",
                                    Type: shared.InventoryQueryOperatorTypeEnumBeginWith.ToPointer(),
                                    Values: []string{
                                        "provident",
                                        "cum",
                                        "doloribus",
                                    },
                                },
                            },
                            Name: "Rickey Waters",
                        },
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "perspiciatis",
                                    Type: shared.InventoryQueryOperatorTypeEnumExists.ToPointer(),
                                    Values: []string{
                                        "aspernatur",
                                        "libero",
                                        "nam",
                                    },
                                },
                                shared.InventoryFilter{
                                    Key: "incidunt",
                                    Type: shared.InventoryQueryOperatorTypeEnumExists.ToPointer(),
                                    Values: []string{
                                        "id",
                                        "saepe",
                                        "autem",
                                        "quo",
                                    },
                                },
                            },
                            Name: "Desiree Hilll",
                        },
                        shared.InventoryGroup{
                            Filters: []shared.InventoryFilter{
                                shared.InventoryFilter{
                                    Key: "mollitia",
                                    Type: shared.InventoryQueryOperatorTypeEnumGreaterThan.ToPointer(),
                                    Values: []string{
                                        "distinctio",
                                        "pariatur",
                                        "ad",
                                        "facere",
                                    },
                                },
                            },
                            Name: "Conrad Pacocha",
                        },
                    },
                },
            },
            Filters: []shared.InventoryFilter{
                shared.InventoryFilter{
                    Key: "alias",
                    Type: shared.InventoryQueryOperatorTypeEnumBeginWith.ToPointer(),
                    Values: []string{
                        "molestias",
                        "laborum",
                        "est",
                    },
                },
                shared.InventoryFilter{
                    Key: "occaecati",
                    Type: shared.InventoryQueryOperatorTypeEnumNotEqual.ToPointer(),
                    Values: []string{
                        "perferendis",
                        "fugit",
                        "aliquid",
                        "magnam",
                    },
                },
            },
            MaxResults: sdk.Int64(308528),
            NextToken: sdk.String("eligendi"),
            ResultAttributes: []shared.ResultAttribute{
                shared.ResultAttribute{
                    TypeName: "nostrum",
                },
                shared.ResultAttribute{
                    TypeName: "officiis",
                },
                shared.ResultAttribute{
                    TypeName: "unde",
                },
                shared.ResultAttribute{
                    TypeName: "nulla",
                },
            },
        },
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("mollitia"),
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.GetInventoryXAmzTargetEnumAmazonSsmGetInventory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInventoryResult != nil {
        // handle response
    }
}
```

## GetInventorySchema

Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.

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
    res, err := s.SDK.GetInventorySchema(ctx, operations.GetInventorySchemaRequest{
        GetInventorySchemaRequest: shared.GetInventorySchemaRequest{
            Aggregator: sdk.Bool(false),
            MaxResults: sdk.Int64(98610),
            NextToken: sdk.String("deserunt"),
            SubType: sdk.Bool(false),
            TypeName: sdk.String("quod"),
        },
        MaxResults: sdk.String("laboriosam"),
        NextToken: sdk.String("doloremque"),
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetInventorySchemaXAmzTargetEnumAmazonSsmGetInventorySchema,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInventorySchemaResult != nil {
        // handle response
    }
}
```

## GetMaintenanceWindow

Retrieves a maintenance window.

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
    res, err := s.SDK.GetMaintenanceWindow(ctx, operations.GetMaintenanceWindowRequest{
        GetMaintenanceWindowRequest: shared.GetMaintenanceWindowRequest{
            WindowID: "similique",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.GetMaintenanceWindowXAmzTargetEnumAmazonSsmGetMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## GetMaintenanceWindowExecution

Retrieves details about a specific a maintenance window execution.

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
    res, err := s.SDK.GetMaintenanceWindowExecution(ctx, operations.GetMaintenanceWindowExecutionRequest{
        GetMaintenanceWindowExecutionRequest: shared.GetMaintenanceWindowExecutionRequest{
            WindowExecutionID: "impedit",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.GetMaintenanceWindowExecutionXAmzTargetEnumAmazonSsmGetMaintenanceWindowExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMaintenanceWindowExecutionResult != nil {
        // handle response
    }
}
```

## GetMaintenanceWindowExecutionTask

Retrieves the details about a specific task run as part of a maintenance window execution.

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
    res, err := s.SDK.GetMaintenanceWindowExecutionTask(ctx, operations.GetMaintenanceWindowExecutionTaskRequest{
        GetMaintenanceWindowExecutionTaskRequest: shared.GetMaintenanceWindowExecutionTaskRequest{
            TaskID: "asperiores",
            WindowExecutionID: "rem",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.GetMaintenanceWindowExecutionTaskXAmzTargetEnumAmazonSsmGetMaintenanceWindowExecutionTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMaintenanceWindowExecutionTaskResult != nil {
        // handle response
    }
}
```

## GetMaintenanceWindowExecutionTaskInvocation

Retrieves information about a specific task running on a specific target.

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
    res, err := s.SDK.GetMaintenanceWindowExecutionTaskInvocation(ctx, operations.GetMaintenanceWindowExecutionTaskInvocationRequest{
        GetMaintenanceWindowExecutionTaskInvocationRequest: shared.GetMaintenanceWindowExecutionTaskInvocationRequest{
            InvocationID: "in",
            TaskID: "eligendi",
            WindowExecutionID: "quasi",
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnumAmazonSsmGetMaintenanceWindowExecutionTaskInvocation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMaintenanceWindowExecutionTaskInvocationResult != nil {
        // handle response
    }
}
```

## GetMaintenanceWindowTask

<p>Retrieves the details of a maintenance window task.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note> <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>

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
    res, err := s.SDK.GetMaintenanceWindowTask(ctx, operations.GetMaintenanceWindowTaskRequest{
        GetMaintenanceWindowTaskRequest: shared.GetMaintenanceWindowTaskRequest{
            WindowID: "incidunt",
            WindowTaskID: "dicta",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.GetMaintenanceWindowTaskXAmzTargetEnumAmazonSsmGetMaintenanceWindowTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMaintenanceWindowTaskResult != nil {
        // handle response
    }
}
```

## GetOpsItem

<p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

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
    res, err := s.SDK.GetOpsItem(ctx, operations.GetOpsItemRequest{
        GetOpsItemRequest: shared.GetOpsItemRequest{
            OpsItemArn: sdk.String("id"),
            OpsItemID: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.GetOpsItemXAmzTargetEnumAmazonSsmGetOpsItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpsItemResponse != nil {
        // handle response
    }
}
```

## GetOpsMetadata

View operational metadata related to an application in Application Manager.

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
    res, err := s.SDK.GetOpsMetadata(ctx, operations.GetOpsMetadataRequest{
        GetOpsMetadataRequest: shared.GetOpsMetadataRequest{
            MaxResults: sdk.Int64(462583),
            NextToken: sdk.String("magni"),
            OpsMetadataArn: "deserunt",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.GetOpsMetadataXAmzTargetEnumAmazonSsmGetOpsMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpsMetadataResult != nil {
        // handle response
    }
}
```

## GetOpsSummary

View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 

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
    res, err := s.SDK.GetOpsSummary(ctx, operations.GetOpsSummaryRequest{
        GetOpsSummaryRequest: shared.GetOpsSummaryRequest{
            Aggregators: []shared.OpsAggregator{
                shared.OpsAggregator{
                    AggregatorType: sdk.String("excepturi"),
                    Aggregators: []shared.OpsAggregator{
                        shared.OpsAggregator{},
                        shared.OpsAggregator{},
                        shared.OpsAggregator{},
                        shared.OpsAggregator{},
                    },
                    AttributeName: sdk.String("laudantium"),
                    Filters: []shared.OpsFilter{
                        shared.OpsFilter{
                            Key: "reiciendis",
                            Type: shared.OpsFilterOperatorTypeEnumNotEqual.ToPointer(),
                            Values: []string{
                                "ipsa",
                                "quisquam",
                            },
                        },
                    },
                    TypeName: sdk.String("tenetur"),
                    Values: map[string]string{
                        "molestiae": "aliquid",
                        "asperiores": "a",
                        "nobis": "perspiciatis",
                    },
                },
                shared.OpsAggregator{
                    AggregatorType: sdk.String("accusantium"),
                    Aggregators: []shared.OpsAggregator{
                        shared.OpsAggregator{},
                    },
                    AttributeName: sdk.String("minus"),
                    Filters: []shared.OpsFilter{
                        shared.OpsFilter{
                            Key: "eveniet",
                            Type: shared.OpsFilterOperatorTypeEnumGreaterThan.ToPointer(),
                            Values: []string{
                                "quidem",
                                "modi",
                                "voluptates",
                            },
                        },
                        shared.OpsFilter{
                            Key: "fugit",
                            Type: shared.OpsFilterOperatorTypeEnumNotEqual.ToPointer(),
                            Values: []string{
                                "eligendi",
                            },
                        },
                    },
                    TypeName: sdk.String("asperiores"),
                    Values: map[string]string{
                        "blanditiis": "sint",
                        "repellat": "a",
                    },
                },
            },
            Filters: []shared.OpsFilter{
                shared.OpsFilter{
                    Key: "maiores",
                    Type: shared.OpsFilterOperatorTypeEnumExists.ToPointer(),
                    Values: []string{
                        "deserunt",
                        "corporis",
                        "velit",
                        "officiis",
                    },
                },
                shared.OpsFilter{
                    Key: "enim",
                    Type: shared.OpsFilterOperatorTypeEnumLessThan.ToPointer(),
                    Values: []string{
                        "eum",
                        "repudiandae",
                        "accusantium",
                        "officia",
                    },
                },
                shared.OpsFilter{
                    Key: "impedit",
                    Type: shared.OpsFilterOperatorTypeEnumEqual.ToPointer(),
                    Values: []string{
                        "eius",
                        "quisquam",
                        "eos",
                    },
                },
            },
            MaxResults: sdk.Int64(748023),
            NextToken: sdk.String("natus"),
            ResultAttributes: []shared.OpsResultAttribute{
                shared.OpsResultAttribute{
                    TypeName: "quia",
                },
                shared.OpsResultAttribute{
                    TypeName: "magnam",
                },
                shared.OpsResultAttribute{
                    TypeName: "reprehenderit",
                },
                shared.OpsResultAttribute{
                    TypeName: "quod",
                },
            },
            SyncName: sdk.String("quos"),
        },
        MaxResults: sdk.String("corrupti"),
        NextToken: sdk.String("amet"),
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetOpsSummaryXAmzTargetEnumAmazonSsmGetOpsSummary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpsSummaryResult != nil {
        // handle response
    }
}
```

## GetParameter

<p>Get information about a single parameter by specifying the parameter name.</p> <note> <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p> </note>

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
    res, err := s.SDK.GetParameter(ctx, operations.GetParameterRequest{
        GetParameterRequest: shared.GetParameterRequest{
            Name: "Micheal Cassin",
            WithDecryption: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.GetParameterXAmzTargetEnumAmazonSsmGetParameter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetParameterResult != nil {
        // handle response
    }
}
```

## GetParameterHistory

<p>Retrieves the history of all changes to a parameter.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>GetParameterHistory</code> retrieves whatever the original key alias was referencing.</p> </important>

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
    res, err := s.SDK.GetParameterHistory(ctx, operations.GetParameterHistoryRequest{
        GetParameterHistoryRequest: shared.GetParameterHistoryRequest{
            MaxResults: sdk.Int64(469994),
            Name: "Elsie West",
            NextToken: sdk.String("nemo"),
            WithDecryption: sdk.Bool(false),
        },
        MaxResults: sdk.String("suscipit"),
        NextToken: sdk.String("pariatur"),
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.GetParameterHistoryXAmzTargetEnumAmazonSsmGetParameterHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetParameterHistoryResult != nil {
        // handle response
    }
}
```

## GetParameters

<p>Get information about one or more parameters by specifying multiple parameter names.</p> <note> <p>To get information about a single parameter, you can use the <a>GetParameter</a> operation instead.</p> </note>

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
    res, err := s.SDK.GetParameters(ctx, operations.GetParametersRequest{
        GetParametersRequest: shared.GetParametersRequest{
            Names: []string{
                "repellat",
                "repudiandae",
                "architecto",
                "adipisci",
            },
            WithDecryption: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.GetParametersXAmzTargetEnumAmazonSsmGetParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetParametersResult != nil {
        // handle response
    }
}
```

## GetParametersByPath

<p>Retrieve information about one or more parameters in a specific hierarchy. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>

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
    res, err := s.SDK.GetParametersByPath(ctx, operations.GetParametersByPathRequest{
        GetParametersByPathRequest: shared.GetParametersByPathRequest{
            MaxResults: sdk.Int64(746688),
            NextToken: sdk.String("dolorum"),
            ParameterFilters: []shared.ParameterStringFilter{
                shared.ParameterStringFilter{
                    Key: "earum",
                    Option: sdk.String("praesentium"),
                    Values: []string{
                        "non",
                        "quasi",
                        "mollitia",
                    },
                },
            },
            Path: "accusamus",
            Recursive: sdk.Bool(false),
            WithDecryption: sdk.Bool(false),
        },
        MaxResults: sdk.String("harum"),
        NextToken: sdk.String("cumque"),
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.GetParametersByPathXAmzTargetEnumAmazonSsmGetParametersByPath,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetParametersByPathResult != nil {
        // handle response
    }
}
```

## GetPatchBaseline

Retrieves information about a patch baseline.

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
    res, err := s.SDK.GetPatchBaseline(ctx, operations.GetPatchBaselineRequest{
        GetPatchBaselineRequest: shared.GetPatchBaselineRequest{
            BaselineID: "magni",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.GetPatchBaselineXAmzTargetEnumAmazonSsmGetPatchBaseline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPatchBaselineResult != nil {
        // handle response
    }
}
```

## GetPatchBaselineForPatchGroup

Retrieves the patch baseline that should be used for the specified patch group.

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
    res, err := s.SDK.GetPatchBaselineForPatchGroup(ctx, operations.GetPatchBaselineForPatchGroupRequest{
        GetPatchBaselineForPatchGroupRequest: shared.GetPatchBaselineForPatchGroupRequest{
            OperatingSystem: shared.OperatingSystemEnumAmazonLinux2023.ToPointer(),
            PatchGroup: "minus",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.GetPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmGetPatchBaselineForPatchGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPatchBaselineForPatchGroupResult != nil {
        // handle response
    }
}
```

## GetResourcePolicies

Returns an array of the <code>Policy</code> object.

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
    res, err := s.SDK.GetResourcePolicies(ctx, operations.GetResourcePoliciesRequest{
        GetResourcePoliciesRequest: shared.GetResourcePoliciesRequest{
            MaxResults: sdk.Int64(75850),
            NextToken: sdk.String("aut"),
            ResourceArn: "doloribus",
        },
        MaxResults: sdk.String("nostrum"),
        NextToken: sdk.String("at"),
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.GetResourcePoliciesXAmzTargetEnumAmazonSsmGetResourcePolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePoliciesResponse != nil {
        // handle response
    }
}
```

## GetServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of <code>false</code>. This means the user can't use this feature unless they change the setting to <code>true</code> and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Query the current service setting for the Amazon Web Services account. </p>

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
    res, err := s.SDK.GetServiceSetting(ctx, operations.GetServiceSettingRequest{
        GetServiceSettingRequest: shared.GetServiceSettingRequest{
            SettingID: "quos",
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.GetServiceSettingXAmzTargetEnumAmazonSsmGetServiceSetting,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceSettingResult != nil {
        // handle response
    }
}
```

## LabelParameterVersion

<p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>

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
    res, err := s.SDK.LabelParameterVersion(ctx, operations.LabelParameterVersionRequest{
        LabelParameterVersionRequest: shared.LabelParameterVersionRequest{
            Labels: []string{
                "maiores",
            },
            Name: "Vicki Langworth",
            ParameterVersion: sdk.Int64(400879),
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.LabelParameterVersionXAmzTargetEnumAmazonSsmLabelParameterVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabelParameterVersionResult != nil {
        // handle response
    }
}
```

## ListAssociationVersions

Retrieves all versions of an association for a specific association ID.

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
    res, err := s.SDK.ListAssociationVersions(ctx, operations.ListAssociationVersionsRequest{
        ListAssociationVersionsRequest: shared.ListAssociationVersionsRequest{
            AssociationID: "tempora",
            MaxResults: sdk.Int64(503449),
            NextToken: sdk.String("numquam"),
        },
        MaxResults: sdk.String("sequi"),
        NextToken: sdk.String("voluptatum"),
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.ListAssociationVersionsXAmzTargetEnumAmazonSsmListAssociationVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociationVersionsResult != nil {
        // handle response
    }
}
```

## ListAssociations

Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.

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
    res, err := s.SDK.ListAssociations(ctx, operations.ListAssociationsRequest{
        ListAssociationsRequest: shared.ListAssociationsRequest{
            AssociationFilterList: []shared.AssociationFilter{
                shared.AssociationFilter{
                    Key: shared.AssociationFilterKeyEnumLastExecutedAfter,
                    Value: "magni",
                },
                shared.AssociationFilter{
                    Key: shared.AssociationFilterKeyEnumAssociationStatusName,
                    Value: "voluptas",
                },
                shared.AssociationFilter{
                    Key: shared.AssociationFilterKeyEnumLastExecutedAfter,
                    Value: "commodi",
                },
                shared.AssociationFilter{
                    Key: shared.AssociationFilterKeyEnumInstanceID,
                    Value: "fuga",
                },
            },
            MaxResults: sdk.Int64(14780),
            NextToken: sdk.String("dolore"),
        },
        MaxResults: sdk.String("maxime"),
        NextToken: sdk.String("aliquam"),
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("unde"),
        XAmzTarget: operations.ListAssociationsXAmzTargetEnumAmazonSsmListAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociationsResult != nil {
        // handle response
    }
}
```

## ListCommandInvocations

An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. <code>ListCommandInvocations</code> provide status about command execution.

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
    res, err := s.SDK.ListCommandInvocations(ctx, operations.ListCommandInvocationsRequest{
        ListCommandInvocationsRequest: shared.ListCommandInvocationsRequest{
            CommandID: sdk.String("illo"),
            Details: sdk.Bool(false),
            Filters: []shared.CommandFilter{
                shared.CommandFilter{
                    Key: shared.CommandFilterKeyEnumInvokedAfter,
                    Value: "libero",
                },
                shared.CommandFilter{
                    Key: shared.CommandFilterKeyEnumInvokedBefore,
                    Value: "quasi",
                },
            },
            InstanceID: sdk.String("cumque"),
            MaxResults: sdk.Int64(117491),
            NextToken: sdk.String("harum"),
        },
        MaxResults: sdk.String("facere"),
        NextToken: sdk.String("facilis"),
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.ListCommandInvocationsXAmzTargetEnumAmazonSsmListCommandInvocations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCommandInvocationsResult != nil {
        // handle response
    }
}
```

## ListCommands

Lists the commands requested by users of the Amazon Web Services account.

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
    res, err := s.SDK.ListCommands(ctx, operations.ListCommandsRequest{
        ListCommandsRequest: shared.ListCommandsRequest{
            CommandID: sdk.String("atque"),
            Filters: []shared.CommandFilter{
                shared.CommandFilter{
                    Key: shared.CommandFilterKeyEnumExecutionStage,
                    Value: "pariatur",
                },
                shared.CommandFilter{
                    Key: shared.CommandFilterKeyEnumDocumentName,
                    Value: "quo",
                },
                shared.CommandFilter{
                    Key: shared.CommandFilterKeyEnumInvokedBefore,
                    Value: "quod",
                },
                shared.CommandFilter{
                    Key: shared.CommandFilterKeyEnumExecutionStage,
                    Value: "porro",
                },
            },
            InstanceID: sdk.String("id"),
            MaxResults: sdk.Int64(569706),
            NextToken: sdk.String("occaecati"),
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("quo"),
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ListCommandsXAmzTargetEnumAmazonSsmListCommands,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCommandsResult != nil {
        // handle response
    }
}
```

## ListComplianceItems

For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.

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
    res, err := s.SDK.ListComplianceItems(ctx, operations.ListComplianceItemsRequest{
        ListComplianceItemsRequest: shared.ListComplianceItemsRequest{
            Filters: []shared.ComplianceStringFilter{
                shared.ComplianceStringFilter{
                    Key: sdk.String("recusandae"),
                    Type: shared.ComplianceQueryOperatorTypeEnumEqual.ToPointer(),
                    Values: []string{
                        "laudantium",
                    },
                },
                shared.ComplianceStringFilter{
                    Key: sdk.String("iusto"),
                    Type: shared.ComplianceQueryOperatorTypeEnumNotEqual.ToPointer(),
                    Values: []string{
                        "tempora",
                        "magni",
                        "rerum",
                        "doloremque",
                    },
                },
                shared.ComplianceStringFilter{
                    Key: sdk.String("voluptatem"),
                    Type: shared.ComplianceQueryOperatorTypeEnumBeginWith.ToPointer(),
                    Values: []string{
                        "eum",
                        "reprehenderit",
                        "voluptatum",
                        "blanditiis",
                    },
                },
                shared.ComplianceStringFilter{
                    Key: sdk.String("nihil"),
                    Type: shared.ComplianceQueryOperatorTypeEnumBeginWith.ToPointer(),
                    Values: []string{
                        "deserunt",
                        "atque",
                        "nostrum",
                    },
                },
            },
            MaxResults: sdk.Int64(542340),
            NextToken: sdk.String("architecto"),
            ResourceIds: []string{
                "enim",
                "rem",
                "magni",
            },
            ResourceTypes: []string{
                "quas",
            },
        },
        MaxResults: sdk.String("placeat"),
        NextToken: sdk.String("enim"),
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.ListComplianceItemsXAmzTargetEnumAmazonSsmListComplianceItems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComplianceItemsResult != nil {
        // handle response
    }
}
```

## ListComplianceSummaries

Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.

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
    res, err := s.SDK.ListComplianceSummaries(ctx, operations.ListComplianceSummariesRequest{
        ListComplianceSummariesRequest: shared.ListComplianceSummariesRequest{
            Filters: []shared.ComplianceStringFilter{
                shared.ComplianceStringFilter{
                    Key: sdk.String("quaerat"),
                    Type: shared.ComplianceQueryOperatorTypeEnumGreaterThan.ToPointer(),
                    Values: []string{
                        "officiis",
                    },
                },
                shared.ComplianceStringFilter{
                    Key: sdk.String("mollitia"),
                    Type: shared.ComplianceQueryOperatorTypeEnumLessThan.ToPointer(),
                    Values: []string{
                        "enim",
                        "eum",
                    },
                },
                shared.ComplianceStringFilter{
                    Key: sdk.String("nemo"),
                    Type: shared.ComplianceQueryOperatorTypeEnumGreaterThan.ToPointer(),
                    Values: []string{
                        "sit",
                    },
                },
            },
            MaxResults: sdk.Int64(487148),
            NextToken: sdk.String("minus"),
        },
        MaxResults: sdk.String("asperiores"),
        NextToken: sdk.String("recusandae"),
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.ListComplianceSummariesXAmzTargetEnumAmazonSsmListComplianceSummaries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComplianceSummariesResult != nil {
        // handle response
    }
}
```

## ListDocumentMetadataHistory

Information about approval reviews for a version of a change template in Change Manager.

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
    res, err := s.SDK.ListDocumentMetadataHistory(ctx, operations.ListDocumentMetadataHistoryRequest{
        ListDocumentMetadataHistoryRequest: shared.ListDocumentMetadataHistoryRequest{
            DocumentVersion: sdk.String("sed"),
            MaxResults: sdk.Int64(537170),
            Metadata: shared.DocumentMetadataEnumEnumDocumentReviews,
            Name: "Peggy Windler",
            NextToken: sdk.String("deserunt"),
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.ListDocumentMetadataHistoryXAmzTargetEnumAmazonSsmListDocumentMetadataHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentMetadataHistoryResponse != nil {
        // handle response
    }
}
```

## ListDocumentVersions

List all versions for a document.

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
    res, err := s.SDK.ListDocumentVersions(ctx, operations.ListDocumentVersionsRequest{
        ListDocumentVersionsRequest: shared.ListDocumentVersionsRequest{
            MaxResults: sdk.Int64(209860),
            Name: "Bruce Block",
            NextToken: sdk.String("fuga"),
        },
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("eaque"),
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("illo"),
        XAmzTarget: operations.ListDocumentVersionsXAmzTargetEnumAmazonSsmListDocumentVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentVersionsResult != nil {
        // handle response
    }
}
```

## ListDocuments

Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.

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
    res, err := s.SDK.ListDocuments(ctx, operations.ListDocumentsRequest{
        ListDocumentsRequest: shared.ListDocumentsRequest{
            DocumentFilterList: []shared.DocumentFilter{
                shared.DocumentFilter{
                    Key: shared.DocumentFilterKeyEnumDocumentType,
                    Value: "numquam",
                },
                shared.DocumentFilter{
                    Key: shared.DocumentFilterKeyEnumDocumentType,
                    Value: "nobis",
                },
            },
            Filters: []shared.DocumentKeyValuesFilter{
                shared.DocumentKeyValuesFilter{
                    Key: sdk.String("repellat"),
                    Values: []string{
                        "deleniti",
                    },
                },
                shared.DocumentKeyValuesFilter{
                    Key: sdk.String("expedita"),
                    Values: []string{
                        "excepturi",
                        "aliquid",
                        "sed",
                        "beatae",
                    },
                },
            },
            MaxResults: sdk.Int64(627341),
            NextToken: sdk.String("ea"),
        },
        MaxResults: sdk.String("animi"),
        NextToken: sdk.String("dolore"),
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.ListDocumentsXAmzTargetEnumAmazonSsmListDocuments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentsResult != nil {
        // handle response
    }
}
```

## ListInventoryEntries

A list of inventory items returned by the request.

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
    res, err := s.SDK.ListInventoryEntries(ctx, operations.ListInventoryEntriesRequest{
        ListInventoryEntriesRequest: shared.ListInventoryEntriesRequest{
            Filters: []shared.InventoryFilter{
                shared.InventoryFilter{
                    Key: "velit",
                    Type: shared.InventoryQueryOperatorTypeEnumExists.ToPointer(),
                    Values: []string{
                        "rerum",
                        "itaque",
                    },
                },
                shared.InventoryFilter{
                    Key: "dignissimos",
                    Type: shared.InventoryQueryOperatorTypeEnumBeginWith.ToPointer(),
                    Values: []string{
                        "impedit",
                    },
                },
                shared.InventoryFilter{
                    Key: "aliquid",
                    Type: shared.InventoryQueryOperatorTypeEnumBeginWith.ToPointer(),
                    Values: []string{
                        "ipsum",
                        "ut",
                        "quaerat",
                    },
                },
                shared.InventoryFilter{
                    Key: "architecto",
                    Type: shared.InventoryQueryOperatorTypeEnumLessThan.ToPointer(),
                    Values: []string{
                        "dolor",
                        "expedita",
                        "libero",
                        "iste",
                    },
                },
            },
            InstanceID: "illo",
            MaxResults: sdk.Int64(792499),
            NextToken: sdk.String("quos"),
            TypeName: "temporibus",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.ListInventoryEntriesXAmzTargetEnumAmazonSsmListInventoryEntries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInventoryEntriesResult != nil {
        // handle response
    }
}
```

## ListOpsItemEvents

Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.

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
    res, err := s.SDK.ListOpsItemEvents(ctx, operations.ListOpsItemEventsRequest{
        ListOpsItemEventsRequest: shared.ListOpsItemEventsRequest{
            Filters: []shared.OpsItemEventFilter{
                shared.OpsItemEventFilter{
                    Key: shared.OpsItemEventFilterKeyEnumOpsItemID,
                    Operator: shared.OpsItemEventFilterOperatorEnumEqual,
                    Values: []string{
                        "omnis",
                    },
                },
                shared.OpsItemEventFilter{
                    Key: shared.OpsItemEventFilterKeyEnumOpsItemID,
                    Operator: shared.OpsItemEventFilterOperatorEnumEqual,
                    Values: []string{
                        "rem",
                        "tenetur",
                        "deleniti",
                        "modi",
                    },
                },
            },
            MaxResults: sdk.Int64(937664),
            NextToken: sdk.String("architecto"),
        },
        MaxResults: sdk.String("aliquam"),
        NextToken: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.ListOpsItemEventsXAmzTargetEnumAmazonSsmListOpsItemEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOpsItemEventsResponse != nil {
        // handle response
    }
}
```

## ListOpsItemRelatedItems

Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.

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
    res, err := s.SDK.ListOpsItemRelatedItems(ctx, operations.ListOpsItemRelatedItemsRequest{
        ListOpsItemRelatedItemsRequest: shared.ListOpsItemRelatedItemsRequest{
            Filters: []shared.OpsItemRelatedItemsFilter{
                shared.OpsItemRelatedItemsFilter{
                    Key: shared.OpsItemRelatedItemsFilterKeyEnumResourceURI,
                    Operator: shared.OpsItemRelatedItemsFilterOperatorEnumEqual,
                    Values: []string{
                        "dolorum",
                        "deserunt",
                    },
                },
                shared.OpsItemRelatedItemsFilter{
                    Key: shared.OpsItemRelatedItemsFilterKeyEnumResourceType,
                    Operator: shared.OpsItemRelatedItemsFilterOperatorEnumEqual,
                    Values: []string{
                        "sequi",
                        "porro",
                        "laborum",
                        "nobis",
                    },
                },
                shared.OpsItemRelatedItemsFilter{
                    Key: shared.OpsItemRelatedItemsFilterKeyEnumResourceURI,
                    Operator: shared.OpsItemRelatedItemsFilterOperatorEnumEqual,
                    Values: []string{
                        "aut",
                        "ipsam",
                        "officia",
                    },
                },
                shared.OpsItemRelatedItemsFilter{
                    Key: shared.OpsItemRelatedItemsFilterKeyEnumAssociationID,
                    Operator: shared.OpsItemRelatedItemsFilterOperatorEnumEqual,
                    Values: []string{
                        "quia",
                        "necessitatibus",
                    },
                },
            },
            MaxResults: sdk.Int64(37764),
            NextToken: sdk.String("ad"),
            OpsItemID: sdk.String("nisi"),
        },
        MaxResults: sdk.String("molestiae"),
        NextToken: sdk.String("quia"),
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.ListOpsItemRelatedItemsXAmzTargetEnumAmazonSsmListOpsItemRelatedItems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOpsItemRelatedItemsResponse != nil {
        // handle response
    }
}
```

## ListOpsMetadata

Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.

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
    res, err := s.SDK.ListOpsMetadata(ctx, operations.ListOpsMetadataRequest{
        ListOpsMetadataRequest: shared.ListOpsMetadataRequest{
            Filters: []shared.OpsMetadataFilter{
                shared.OpsMetadataFilter{
                    Key: "ipsa",
                    Values: []string{
                        "dolore",
                        "esse",
                        "accusantium",
                    },
                },
            },
            MaxResults: sdk.Int64(718119),
            NextToken: sdk.String("sapiente"),
        },
        MaxResults: sdk.String("quam"),
        NextToken: sdk.String("est"),
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.ListOpsMetadataXAmzTargetEnumAmazonSsmListOpsMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOpsMetadataResult != nil {
        // handle response
    }
}
```

## ListResourceComplianceSummaries

Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.

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
    res, err := s.SDK.ListResourceComplianceSummaries(ctx, operations.ListResourceComplianceSummariesRequest{
        ListResourceComplianceSummariesRequest: shared.ListResourceComplianceSummariesRequest{
            Filters: []shared.ComplianceStringFilter{
                shared.ComplianceStringFilter{
                    Key: sdk.String("non"),
                    Type: shared.ComplianceQueryOperatorTypeEnumNotEqual.ToPointer(),
                    Values: []string{
                        "voluptas",
                        "doloribus",
                        "animi",
                    },
                },
                shared.ComplianceStringFilter{
                    Key: sdk.String("recusandae"),
                    Type: shared.ComplianceQueryOperatorTypeEnumNotEqual.ToPointer(),
                    Values: []string{
                        "necessitatibus",
                        "distinctio",
                    },
                },
            },
            MaxResults: sdk.Int64(983275),
            NextToken: sdk.String("laboriosam"),
        },
        MaxResults: sdk.String("voluptatem"),
        NextToken: sdk.String("optio"),
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.ListResourceComplianceSummariesXAmzTargetEnumAmazonSsmListResourceComplianceSummaries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceComplianceSummariesResult != nil {
        // handle response
    }
}
```

## ListResourceDataSync

<p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>

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
    res, err := s.SDK.ListResourceDataSync(ctx, operations.ListResourceDataSyncRequest{
        ListResourceDataSyncRequest: shared.ListResourceDataSyncRequest{
            MaxResults: sdk.Int64(699536),
            NextToken: sdk.String("in"),
            SyncType: sdk.String("nostrum"),
        },
        MaxResults: sdk.String("temporibus"),
        NextToken: sdk.String("ratione"),
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.ListResourceDataSyncXAmzTargetEnumAmazonSsmListResourceDataSync,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceDataSyncResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Returns a list of the tags assigned to the specified resource.</p> <p>For information about the ID format for each supported resource type, see <a>AddTagsToResource</a>.</p>

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
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceID: "accusantium",
            ResourceType: shared.ResourceTypeForTaggingEnumAutomation,
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAmazonSsmListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResult != nil {
        // handle response
    }
}
```

## ModifyDocumentPermission

Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.

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
    res, err := s.SDK.ModifyDocumentPermission(ctx, operations.ModifyDocumentPermissionRequest{
        ModifyDocumentPermissionRequest: shared.ModifyDocumentPermissionRequest{
            AccountIdsToAdd: []string{
                "similique",
            },
            AccountIdsToRemove: []string{
                "provident",
            },
            Name: "Miss Estelle Mills",
            PermissionType: shared.DocumentPermissionTypeEnumShare,
            SharedDocumentVersion: sdk.String("commodi"),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.ModifyDocumentPermissionXAmzTargetEnumAmazonSsmModifyDocumentPermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyDocumentPermissionResponse != nil {
        // handle response
    }
}
```

## PutComplianceItems

<p>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>

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
    res, err := s.SDK.PutComplianceItems(ctx, operations.PutComplianceItemsRequest{
        PutComplianceItemsRequest: shared.PutComplianceItemsRequest{
            ComplianceType: "maiores",
            ExecutionSummary: shared.ComplianceExecutionSummary{
                ExecutionID: sdk.String("distinctio"),
                ExecutionTime: types.MustTimeFromString("2021-06-17T04:08:16.611Z"),
                ExecutionType: sdk.String("accusamus"),
            },
            ItemContentHash: sdk.String("et"),
            Items: []shared.ComplianceItemEntry{
                shared.ComplianceItemEntry{
                    Details: map[string]string{
                        "cum": "dicta",
                        "impedit": "tempora",
                        "eveniet": "repudiandae",
                    },
                    ID: sdk.String("2c8c6ce6-11fe-4eb1-87cb-db6eec74378b"),
                    Severity: shared.ComplianceSeverityEnumLow,
                    Status: shared.ComplianceStatusEnumCompliant,
                    Title: sdk.String("Mrs."),
                },
                shared.ComplianceItemEntry{
                    Details: map[string]string{
                        "beatae": "iusto",
                    },
                    ID: sdk.String("747dc915-ad2c-4af5-9d67-23dc0f5ae2f3"),
                    Severity: shared.ComplianceSeverityEnumLow,
                    Status: shared.ComplianceStatusEnumCompliant,
                    Title: sdk.String("Miss"),
                },
                shared.ComplianceItemEntry{
                    Details: map[string]string{
                        "doloremque": "perferendis",
                        "laudantium": "iusto",
                    },
                    ID: sdk.String("8756143f-5a6c-498b-9555-4080d40bcacc"),
                    Severity: shared.ComplianceSeverityEnumMedium,
                    Status: shared.ComplianceStatusEnumNonCompliant,
                    Title: sdk.String("Miss"),
                },
            },
            ResourceID: "fugiat",
            ResourceType: "laboriosam",
            UploadType: shared.ComplianceUploadTypeEnumPartial.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.PutComplianceItemsXAmzTargetEnumAmazonSsmPutComplianceItems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutComplianceItemsResult != nil {
        // handle response
    }
}
```

## PutInventory

Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.

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
    res, err := s.SDK.PutInventory(ctx, operations.PutInventoryRequest{
        PutInventoryRequest: shared.PutInventoryRequest{
            InstanceID: "provident",
            Items: []shared.InventoryItem{
                shared.InventoryItem{
                    CaptureTime: "accusantium",
                    Content: []map[string]string{
                        map[string]string{
                            "omnis": "explicabo",
                            "vel": "cum",
                            "id": "possimus",
                            "fugit": "ipsam",
                        },
                        map[string]string{
                            "sequi": "voluptatum",
                            "quasi": "error",
                        },
                    },
                    ContentHash: sdk.String("nobis"),
                    Context: map[string]string{
                        "voluptate": "eius",
                        "expedita": "aperiam",
                    },
                    SchemaVersion: "voluptates",
                    TypeName: "possimus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.PutInventoryXAmzTargetEnumAmazonSsmPutInventory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutInventoryResult != nil {
        // handle response
    }
}
```

## PutParameter

Add a parameter to the system.

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
    res, err := s.SDK.PutParameter(ctx, operations.PutParameterRequest{
        PutParameterRequest: shared.PutParameterRequest{
            AllowedPattern: sdk.String("blanditiis"),
            DataType: sdk.String("hic"),
            Description: sdk.String("maiores"),
            KeyID: sdk.String("asperiores"),
            Name: "Robin McGlynn",
            Overwrite: sdk.Bool(false),
            Policies: sdk.String("beatae"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "mollitia",
                    Value: "nam",
                },
            },
            Tier: shared.ParameterTierEnumIntelligentTiering.ToPointer(),
            Type: shared.ParameterTypeEnumSecureString.ToPointer(),
            Value: "fuga",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.PutParameterXAmzTargetEnumAmazonSsmPutParameter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutParameterResult != nil {
        // handle response
    }
}
```

## PutResourcePolicy

Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        PutResourcePolicyRequest: shared.PutResourcePolicyRequest{
            Policy: "provident",
            PolicyHash: sdk.String("laboriosam"),
            PolicyID: sdk.String("accusamus"),
            ResourceArn: "ab",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.PutResourcePolicyXAmzTargetEnumAmazonSsmPutResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## RegisterDefaultPatchBaseline

<p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>

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
    res, err := s.SDK.RegisterDefaultPatchBaseline(ctx, operations.RegisterDefaultPatchBaselineRequest{
        RegisterDefaultPatchBaselineRequest: shared.RegisterDefaultPatchBaselineRequest{
            BaselineID: "quidem",
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.RegisterDefaultPatchBaselineXAmzTargetEnumAmazonSsmRegisterDefaultPatchBaseline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterDefaultPatchBaselineResult != nil {
        // handle response
    }
}
```

## RegisterPatchBaselineForPatchGroup

Registers a patch baseline for a patch group.

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
    res, err := s.SDK.RegisterPatchBaselineForPatchGroup(ctx, operations.RegisterPatchBaselineForPatchGroupRequest{
        RegisterPatchBaselineForPatchGroupRequest: shared.RegisterPatchBaselineForPatchGroupRequest{
            BaselineID: "eligendi",
            PatchGroup: "tempore",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.RegisterPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmRegisterPatchBaselineForPatchGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterPatchBaselineForPatchGroupResult != nil {
        // handle response
    }
}
```

## RegisterTargetWithMaintenanceWindow

Registers a target with a maintenance window.

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
    res, err := s.SDK.RegisterTargetWithMaintenanceWindow(ctx, operations.RegisterTargetWithMaintenanceWindowRequest{
        RegisterTargetWithMaintenanceWindowRequest: shared.RegisterTargetWithMaintenanceWindowRequest{
            ClientToken: sdk.String("quibusdam"),
            Description: sdk.String("sit"),
            Name: sdk.String("Darrell Hackett"),
            OwnerInformation: sdk.String("earum"),
            ResourceType: shared.MaintenanceWindowResourceTypeEnumInstance,
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("alias"),
                    Values: []string{
                        "tempora",
                    },
                },
            },
            WindowID: "perspiciatis",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.RegisterTargetWithMaintenanceWindowXAmzTargetEnumAmazonSsmRegisterTargetWithMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterTargetWithMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## RegisterTaskWithMaintenanceWindow

Adds a new task to a maintenance window.

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
    res, err := s.SDK.RegisterTaskWithMaintenanceWindow(ctx, operations.RegisterTaskWithMaintenanceWindowRequest{
        RegisterTaskWithMaintenanceWindowRequest: shared.RegisterTaskWithMaintenanceWindowRequest{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: "Ms. Darnell Denesik",
                    },
                },
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            ClientToken: sdk.String("totam"),
            CutoffBehavior: shared.MaintenanceWindowTaskCutoffBehaviorEnumCancelTask.ToPointer(),
            Description: sdk.String("voluptate"),
            LoggingInfo: &shared.LoggingInfo{
                S3BucketName: "quam",
                S3KeyPrefix: sdk.String("quod"),
                S3Region: "vitae",
            },
            MaxConcurrency: sdk.String("sapiente"),
            MaxErrors: sdk.String("reiciendis"),
            Name: sdk.String("Jared Blick"),
            Priority: sdk.Int64(681578),
            ServiceRoleArn: sdk.String("ab"),
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("consectetur"),
                    Values: []string{
                        "sed",
                        "animi",
                        "sequi",
                        "eligendi",
                    },
                },
                shared.Target{
                    Key: sdk.String("voluptatum"),
                    Values: []string{
                        "laborum",
                    },
                },
            },
            TaskArn: "omnis",
            TaskInvocationParameters: &shared.MaintenanceWindowTaskInvocationParameters{
                Automation: &shared.MaintenanceWindowAutomationParameters{
                    DocumentVersion: sdk.String("nihil"),
                    Parameters: map[string][]string{
                        "sapiente": []string{
                            "adipisci",
                        },
                        "non": []string{
                            "illum",
                            "at",
                            "tenetur",
                            "molestias",
                        },
                        "ipsam": []string{
                            "laborum",
                            "perspiciatis",
                        },
                        "voluptates": []string{
                            "quasi",
                            "quas",
                        },
                    },
                },
                Lambda: &shared.MaintenanceWindowLambdaParameters{
                    ClientContext: sdk.String("odio"),
                    Payload: sdk.String("commodi"),
                    Qualifier: sdk.String("porro"),
                },
                RunCommand: &shared.MaintenanceWindowRunCommandParameters{
                    CloudWatchOutputConfig: &shared.CloudWatchOutputConfig{
                        CloudWatchLogGroupName: sdk.String("aliquid"),
                        CloudWatchOutputEnabled: sdk.Bool(false),
                    },
                    Comment: sdk.String("mollitia"),
                    DocumentHash: sdk.String("quidem"),
                    DocumentHashType: shared.DocumentHashTypeEnumSha256.ToPointer(),
                    DocumentVersion: sdk.String("et"),
                    NotificationConfig: &shared.NotificationConfig{
                        NotificationArn: sdk.String("nulla"),
                        NotificationEvents: []shared.NotificationEventEnum{
                            shared.NotificationEventEnumTimedOut,
                        },
                        NotificationType: shared.NotificationTypeEnumInvocation.ToPointer(),
                    },
                    OutputS3BucketName: sdk.String("a"),
                    OutputS3KeyPrefix: sdk.String("impedit"),
                    Parameters: map[string][]string{
                        "ut": []string{
                            "voluptas",
                            "doloribus",
                            "recusandae",
                            "quisquam",
                        },
                        "facere": []string{
                            "iste",
                            "provident",
                        },
                        "dolor": []string{
                            "aperiam",
                            "eaque",
                            "eum",
                        },
                    },
                    ServiceRoleArn: sdk.String("laboriosam"),
                    TimeoutSeconds: sdk.Int64(672627),
                },
                StepFunctions: &shared.MaintenanceWindowStepFunctionsParameters{
                    Input: sdk.String("autem"),
                    Name: sdk.String("Mr. Roy Stehr I"),
                },
            },
            TaskParameters: map[string]shared.MaintenanceWindowTaskParameterValueExpression{
                "quis": shared.MaintenanceWindowTaskParameterValueExpression{
                    Values: []string{
                        "ratione",
                    },
                },
                "quas": shared.MaintenanceWindowTaskParameterValueExpression{
                    Values: []string{
                        "recusandae",
                        "cumque",
                        "doloremque",
                        "totam",
                    },
                },
            },
            TaskType: shared.MaintenanceWindowTaskTypeEnumAutomation,
            WindowID: "maiores",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.RegisterTaskWithMaintenanceWindowXAmzTargetEnumAmazonSsmRegisterTaskWithMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterTaskWithMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## RemoveTagsFromResource

Removes tag keys from the specified resource.

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
    res, err := s.SDK.RemoveTagsFromResource(ctx, operations.RemoveTagsFromResourceRequest{
        RemoveTagsFromResourceRequest: shared.RemoveTagsFromResourceRequest{
            ResourceID: "consequuntur",
            ResourceType: shared.ResourceTypeForTaggingEnumOpsMetadata,
            TagKeys: []string{
                "non",
                "beatae",
                "sunt",
            },
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.RemoveTagsFromResourceXAmzTargetEnumAmazonSsmRemoveTagsFromResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTagsFromResourceResult != nil {
        // handle response
    }
}
```

## ResetServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. </p>

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
    res, err := s.SDK.ResetServiceSetting(ctx, operations.ResetServiceSettingRequest{
        ResetServiceSettingRequest: shared.ResetServiceSettingRequest{
            SettingID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.ResetServiceSettingXAmzTargetEnumAmazonSsmResetServiceSetting,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetServiceSettingResult != nil {
        // handle response
    }
}
```

## ResumeSession

<p>Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use.</p> </note>

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
    res, err := s.SDK.ResumeSession(ctx, operations.ResumeSessionRequest{
        ResumeSessionRequest: shared.ResumeSessionRequest{
            SessionID: "consequatur",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.ResumeSessionXAmzTargetEnumAmazonSsmResumeSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResumeSessionResponse != nil {
        // handle response
    }
}
```

## SendAutomationSignal

Sends a signal to an Automation execution to change the current behavior or status of the execution. 

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
    res, err := s.SDK.SendAutomationSignal(ctx, operations.SendAutomationSignalRequest{
        SendAutomationSignalRequest: shared.SendAutomationSignalRequest{
            AutomationExecutionID: "earum",
            Payload: map[string][]string{
                "assumenda": []string{
                    "enim",
                    "ullam",
                },
                "perspiciatis": []string{
                    "ex",
                },
                "quibusdam": []string{
                    "quia",
                },
                "commodi": []string{
                    "quibusdam",
                },
            },
            SignalType: shared.SignalTypeEnumReject,
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.SendAutomationSignalXAmzTargetEnumAmazonSsmSendAutomationSignal,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendAutomationSignalResult != nil {
        // handle response
    }
}
```

## SendCommand

Runs commands on one or more managed nodes.

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
    res, err := s.SDK.SendCommand(ctx, operations.SendCommandRequest{
        SendCommandRequest: shared.SendCommandRequest{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: "Dr. Clay Lubowitz",
                    },
                    shared.Alarm{
                        Name: "Latoya Treutel",
                    },
                    shared.Alarm{
                        Name: "Mr. Josephine Cummerata",
                    },
                    shared.Alarm{
                        Name: "Anne Brekke",
                    },
                },
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            CloudWatchOutputConfig: &shared.CloudWatchOutputConfig{
                CloudWatchLogGroupName: sdk.String("voluptate"),
                CloudWatchOutputEnabled: sdk.Bool(false),
            },
            Comment: sdk.String("vel"),
            DocumentHash: sdk.String("minima"),
            DocumentHashType: shared.DocumentHashTypeEnumSha256.ToPointer(),
            DocumentName: "vel",
            DocumentVersion: sdk.String("laboriosam"),
            InstanceIds: []string{
                "quasi",
                "rem",
            },
            MaxConcurrency: sdk.String("dignissimos"),
            MaxErrors: sdk.String("doloremque"),
            NotificationConfig: &shared.NotificationConfig{
                NotificationArn: sdk.String("assumenda"),
                NotificationEvents: []shared.NotificationEventEnum{
                    shared.NotificationEventEnumCancelled,
                    shared.NotificationEventEnumAll,
                    shared.NotificationEventEnumAll,
                },
                NotificationType: shared.NotificationTypeEnumInvocation.ToPointer(),
            },
            OutputS3BucketName: sdk.String("unde"),
            OutputS3KeyPrefix: sdk.String("deserunt"),
            OutputS3Region: sdk.String("repellendus"),
            Parameters: map[string][]string{
                "adipisci": []string{
                    "optio",
                },
            },
            ServiceRoleArn: sdk.String("tempora"),
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("cumque"),
                    Values: []string{
                        "et",
                        "beatae",
                        "id",
                        "consequatur",
                    },
                },
                shared.Target{
                    Key: sdk.String("quos"),
                    Values: []string{
                        "iure",
                    },
                },
                shared.Target{
                    Key: sdk.String("tempora"),
                    Values: []string{
                        "natus",
                    },
                },
                shared.Target{
                    Key: sdk.String("voluptatem"),
                    Values: []string{
                        "laudantium",
                        "facilis",
                    },
                },
            },
            TimeoutSeconds: sdk.Int64(514609),
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.SendCommandXAmzTargetEnumAmazonSsmSendCommand,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendCommandResult != nil {
        // handle response
    }
}
```

## StartAssociationsOnce

Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.

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
    res, err := s.SDK.StartAssociationsOnce(ctx, operations.StartAssociationsOnceRequest{
        StartAssociationsOnceRequest: shared.StartAssociationsOnceRequest{
            AssociationIds: []string{
                "sapiente",
                "esse",
            },
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.StartAssociationsOnceXAmzTargetEnumAmazonSsmStartAssociationsOnce,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAssociationsOnceResult != nil {
        // handle response
    }
}
```

## StartAutomationExecution

Initiates execution of an Automation runbook.

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
    res, err := s.SDK.StartAutomationExecution(ctx, operations.StartAutomationExecutionRequest{
        StartAutomationExecutionRequest: shared.StartAutomationExecutionRequest{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: "Helen O'Reilly V",
                    },
                },
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            ClientToken: sdk.String("voluptatibus"),
            DocumentName: "numquam",
            DocumentVersion: sdk.String("rerum"),
            MaxConcurrency: sdk.String("dolorum"),
            MaxErrors: sdk.String("quibusdam"),
            Mode: shared.ExecutionModeEnumInteractive.ToPointer(),
            Parameters: map[string][]string{
                "numquam": []string{
                    "impedit",
                    "error",
                },
                "animi": []string{
                    "aliquid",
                    "nihil",
                    "facilis",
                },
                "optio": []string{
                    "eos",
                    "magnam",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aliquid",
                    Value: "eum",
                },
            },
            TargetLocations: []shared.TargetLocation{
                shared.TargetLocation{
                    Accounts: []string{
                        "quos",
                        "illo",
                    },
                    ExecutionRoleName: sdk.String("suscipit"),
                    Regions: []string{
                        "fugiat",
                        "impedit",
                        "culpa",
                        "atque",
                    },
                    TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Maurice Bins",
                            },
                            shared.Alarm{
                                Name: "Edwin Runte",
                            },
                            shared.Alarm{
                                Name: "Mr. Meghan Schamberger",
                            },
                            shared.Alarm{
                                Name: "Shaun Olson PhD",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    TargetLocationMaxConcurrency: sdk.String("placeat"),
                    TargetLocationMaxErrors: sdk.String("quam"),
                },
                shared.TargetLocation{
                    Accounts: []string{
                        "delectus",
                        "saepe",
                        "facere",
                    },
                    ExecutionRoleName: sdk.String("nobis"),
                    Regions: []string{
                        "molestias",
                        "aut",
                        "temporibus",
                        "tenetur",
                    },
                    TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Naomi Murray",
                            },
                            shared.Alarm{
                                Name: "Jackie Fahey DDS",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    TargetLocationMaxConcurrency: sdk.String("minima"),
                    TargetLocationMaxErrors: sdk.String("quos"),
                },
            },
            TargetMaps: []map[string][]string{
                map[string][]string{
                    "voluptatem": []string{
                        "quas",
                        "ipsum",
                        "vero",
                    },
                    "fuga": []string{
                        "maiores",
                        "error",
                        "recusandae",
                    },
                    "a": []string{
                        "sapiente",
                    },
                },
                map[string][]string{
                    "assumenda": []string{
                        "omnis",
                        "delectus",
                        "odio",
                        "voluptatibus",
                    },
                    "aut": []string{
                        "omnis",
                        "similique",
                    },
                    "asperiores": []string{
                        "facere",
                        "neque",
                    },
                    "quis": []string{
                        "sed",
                        "non",
                    },
                },
                map[string][]string{
                    "fugiat": []string{
                        "ipsa",
                        "reiciendis",
                        "labore",
                    },
                    "vero": []string{
                        "quas",
                    },
                    "quasi": []string{
                        "praesentium",
                    },
                    "iusto": []string{
                        "enim",
                        "iure",
                        "laudantium",
                        "modi",
                    },
                },
            },
            TargetParameterName: sdk.String("magnam"),
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("nulla"),
                    Values: []string{
                        "quibusdam",
                        "praesentium",
                        "enim",
                        "animi",
                    },
                },
                shared.Target{
                    Key: sdk.String("unde"),
                    Values: []string{
                        "eum",
                    },
                },
                shared.Target{
                    Key: sdk.String("nostrum"),
                    Values: []string{
                        "laboriosam",
                        "ratione",
                        "blanditiis",
                        "quidem",
                    },
                },
                shared.Target{
                    Key: sdk.String("illum"),
                    Values: []string{
                        "placeat",
                        "dolores",
                        "consequatur",
                        "nesciunt",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.StartAutomationExecutionXAmzTargetEnumAmazonSsmStartAutomationExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAutomationExecutionResult != nil {
        // handle response
    }
}
```

## StartChangeRequestExecution

Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.

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
    res, err := s.SDK.StartChangeRequestExecution(ctx, operations.StartChangeRequestExecutionRequest{
        StartChangeRequestExecutionRequest: shared.StartChangeRequestExecutionRequest{
            AutoApprove: sdk.Bool(false),
            ChangeDetails: sdk.String("omnis"),
            ChangeRequestName: sdk.String("fugit"),
            ClientToken: sdk.String("dolorem"),
            DocumentName: "quidem",
            DocumentVersion: sdk.String("molestiae"),
            Parameters: map[string][]string{
                "vitae": []string{
                    "ad",
                },
                "atque": []string{
                    "asperiores",
                    "reprehenderit",
                },
                "deserunt": []string{
                    "et",
                    "eos",
                    "impedit",
                    "ex",
                },
                "praesentium": []string{
                    "vitae",
                    "tenetur",
                    "laudantium",
                },
            },
            Runbooks: []shared.Runbook{
                shared.Runbook{
                    DocumentName: "eligendi",
                    DocumentVersion: sdk.String("repudiandae"),
                    MaxConcurrency: sdk.String("dicta"),
                    MaxErrors: sdk.String("inventore"),
                    Parameters: map[string][]string{
                        "iusto": []string{
                            "voluptate",
                        },
                        "sed": []string{
                            "eaque",
                        },
                    },
                    TargetLocations: []shared.TargetLocation{
                        shared.TargetLocation{
                            Accounts: []string{
                                "voluptate",
                            },
                            ExecutionRoleName: sdk.String("voluptate"),
                            Regions: []string{
                                "minus",
                                "a",
                                "fuga",
                                "totam",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Santos Mohr",
                                    },
                                    shared.Alarm{
                                        Name: "Earl Hauck",
                                    },
                                    shared.Alarm{
                                        Name: "Gilbert Bayer",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("itaque"),
                            TargetLocationMaxErrors: sdk.String("unde"),
                        },
                        shared.TargetLocation{
                            Accounts: []string{
                                "dolor",
                                "repellendus",
                                "temporibus",
                                "minus",
                            },
                            ExecutionRoleName: sdk.String("minima"),
                            Regions: []string{
                                "beatae",
                                "vitae",
                                "veritatis",
                                "facere",
                            },
                            TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                                Alarms: []shared.Alarm{
                                    shared.Alarm{
                                        Name: "Samuel Bartoletti",
                                    },
                                    shared.Alarm{
                                        Name: "Miss Lloyd Funk",
                                    },
                                    shared.Alarm{
                                        Name: "Dr. Terry Mohr",
                                    },
                                    shared.Alarm{
                                        Name: "Howard Bruen",
                                    },
                                },
                                IgnorePollAlarmFailure: sdk.Bool(false),
                            },
                            TargetLocationMaxConcurrency: sdk.String("ipsa"),
                            TargetLocationMaxErrors: sdk.String("distinctio"),
                        },
                    },
                    TargetMaps: []map[string][]string{
                        map[string][]string{
                            "eligendi": []string{
                                "possimus",
                            },
                            "distinctio": []string{
                                "assumenda",
                                "illum",
                                "soluta",
                            },
                            "magnam": []string{
                                "tempora",
                                "esse",
                                "doloremque",
                            },
                            "corrupti": []string{
                                "facilis",
                                "aliquam",
                                "repudiandae",
                                "amet",
                            },
                        },
                        map[string][]string{
                            "ab": []string{
                                "eum",
                                "rerum",
                                "placeat",
                                "ab",
                            },
                            "ad": []string{
                                "porro",
                                "labore",
                                "impedit",
                            },
                            "ut": []string{
                                "ullam",
                                "numquam",
                                "enim",
                                "cupiditate",
                            },
                        },
                        map[string][]string{
                            "itaque": []string{
                                "consectetur",
                                "modi",
                                "aspernatur",
                            },
                            "explicabo": []string{
                                "ipsa",
                                "eveniet",
                            },
                            "sint": []string{
                                "qui",
                                "accusantium",
                                "consequatur",
                            },
                        },
                        map[string][]string{
                            "recusandae": []string{
                                "deleniti",
                                "est",
                            },
                            "et": []string{
                                "quibusdam",
                                "quos",
                                "maiores",
                            },
                            "quidem": []string{
                                "culpa",
                                "doloremque",
                            },
                            "fuga": []string{
                                "architecto",
                            },
                        },
                    },
                    TargetParameterName: sdk.String("suscipit"),
                    Targets: []shared.Target{
                        shared.Target{
                            Key: sdk.String("officiis"),
                            Values: []string{
                                "fugit",
                                "ratione",
                            },
                        },
                        shared.Target{
                            Key: sdk.String("possimus"),
                            Values: []string{
                                "aut",
                                "natus",
                            },
                        },
                        shared.Target{
                            Key: sdk.String("esse"),
                            Values: []string{
                                "deserunt",
                                "ratione",
                                "ipsa",
                                "debitis",
                            },
                        },
                        shared.Target{
                            Key: sdk.String("iste"),
                            Values: []string{
                                "hic",
                                "ducimus",
                                "consequuntur",
                            },
                        },
                    },
                },
            },
            ScheduledEndTime: types.MustTimeFromString("2022-04-09T16:36:14.999Z"),
            ScheduledTime: types.MustTimeFromString("2022-05-23T16:20:14.362Z"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "qui",
                    Value: "explicabo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.StartChangeRequestExecutionXAmzTargetEnumAmazonSsmStartChangeRequestExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartChangeRequestExecutionResult != nil {
        // handle response
    }
}
```

## StartSession

<p>Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines.</p> </note>

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
    res, err := s.SDK.StartSession(ctx, operations.StartSessionRequest{
        StartSessionRequest: shared.StartSessionRequest{
            DocumentName: sdk.String("ullam"),
            Parameters: map[string][]string{
                "itaque": []string{
                    "iusto",
                    "dignissimos",
                    "provident",
                },
                "occaecati": []string{
                    "sunt",
                    "odit",
                    "vero",
                    "deleniti",
                },
                "optio": []string{
                    "repellat",
                },
            },
            Reason: sdk.String("atque"),
            Target: "magnam",
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.StartSessionXAmzTargetEnumAmazonSsmStartSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSessionResponse != nil {
        // handle response
    }
}
```

## StopAutomationExecution

Stop an Automation that is currently running.

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
    res, err := s.SDK.StopAutomationExecution(ctx, operations.StopAutomationExecutionRequest{
        StopAutomationExecutionRequest: shared.StopAutomationExecutionRequest{
            AutomationExecutionID: "porro",
            Type: shared.StopTypeEnumComplete.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.StopAutomationExecutionXAmzTargetEnumAmazonSsmStopAutomationExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopAutomationExecutionResult != nil {
        // handle response
    }
}
```

## TerminateSession

Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.

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
    res, err := s.SDK.TerminateSession(ctx, operations.TerminateSessionRequest{
        TerminateSessionRequest: shared.TerminateSessionRequest{
            SessionID: "minus",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.TerminateSessionXAmzTargetEnumAmazonSsmTerminateSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateSessionResponse != nil {
        // handle response
    }
}
```

## UnlabelParameterVersion

Remove a label or labels from a parameter.

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
    res, err := s.SDK.UnlabelParameterVersion(ctx, operations.UnlabelParameterVersionRequest{
        UnlabelParameterVersionRequest: shared.UnlabelParameterVersionRequest{
            Labels: []string{
                "illo",
                "nobis",
                "esse",
                "nisi",
            },
            Name: "Emily Abshire",
            ParameterVersion: 256310,
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.UnlabelParameterVersionXAmzTargetEnumAmazonSsmUnlabelParameterVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnlabelParameterVersionResult != nil {
        // handle response
    }
}
```

## UpdateAssociation

<p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call <code>UpdateAssociation</code>, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the <code>Name</code> parameter. Before calling this API action, we recommend that you call the <a>DescribeAssociation</a> API operation and make a note of all optional parameters required for your <code>UpdateAssociation</code> call.</p> <p>In order to call this API operation, a user, group, or role must be granted permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association during the next schedule run.</p> </important>

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
    res, err := s.SDK.UpdateAssociation(ctx, operations.UpdateAssociationRequest{
        UpdateAssociationRequest: shared.UpdateAssociationRequest{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: "Mrs. Levi Reichert",
                    },
                },
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            ApplyOnlyAtCronInterval: sdk.Bool(false),
            AssociationID: "expedita",
            AssociationName: sdk.String("autem"),
            AssociationVersion: sdk.String("tempore"),
            AutomationTargetParameterName: sdk.String("recusandae"),
            CalendarNames: []string{
                "officia",
                "voluptas",
            },
            ComplianceSeverity: shared.AssociationComplianceSeverityEnumMedium.ToPointer(),
            DocumentVersion: sdk.String("corporis"),
            MaxConcurrency: sdk.String("excepturi"),
            MaxErrors: sdk.String("natus"),
            Name: sdk.String("Alonzo Collins"),
            OutputLocation: &shared.InstanceAssociationOutputLocation{
                S3Location: &shared.S3OutputLocation{
                    OutputS3BucketName: sdk.String("vero"),
                    OutputS3KeyPrefix: sdk.String("eos"),
                    OutputS3Region: sdk.String("voluptatem"),
                },
            },
            Parameters: map[string][]string{
                "id": []string{
                    "commodi",
                },
                "a": []string{
                    "sed",
                    "nam",
                    "quia",
                    "iusto",
                },
                "ab": []string{
                    "sed",
                    "blanditiis",
                    "sint",
                },
                "placeat": []string{
                    "molestiae",
                    "itaque",
                },
            },
            ScheduleExpression: sdk.String("rem"),
            ScheduleOffset: sdk.Int64(366327),
            SyncCompliance: shared.AssociationSyncComplianceEnumAuto.ToPointer(),
            TargetLocations: []shared.TargetLocation{
                shared.TargetLocation{
                    Accounts: []string{
                        "ipsa",
                        "aliquam",
                        "dolor",
                    },
                    ExecutionRoleName: sdk.String("occaecati"),
                    Regions: []string{
                        "magni",
                        "consequuntur",
                        "consequuntur",
                        "eius",
                    },
                    TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Kristin McDermott",
                            },
                            shared.Alarm{
                                Name: "Juanita Batz IV",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    TargetLocationMaxConcurrency: sdk.String("tempora"),
                    TargetLocationMaxErrors: sdk.String("delectus"),
                },
                shared.TargetLocation{
                    Accounts: []string{
                        "dolorum",
                        "libero",
                    },
                    ExecutionRoleName: sdk.String("ratione"),
                    Regions: []string{
                        "optio",
                        "saepe",
                    },
                    TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Irene Davis",
                            },
                            shared.Alarm{
                                Name: "Violet Greenfelder",
                            },
                            shared.Alarm{
                                Name: "Mr. Sally Gleichner",
                            },
                            shared.Alarm{
                                Name: "Garrett Hoeger",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    TargetLocationMaxConcurrency: sdk.String("est"),
                    TargetLocationMaxErrors: sdk.String("doloribus"),
                },
                shared.TargetLocation{
                    Accounts: []string{
                        "alias",
                        "deserunt",
                        "fugit",
                    },
                    ExecutionRoleName: sdk.String("autem"),
                    Regions: []string{
                        "molestiae",
                        "maxime",
                        "facere",
                        "impedit",
                    },
                    TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Mrs. Arthur Wolff",
                            },
                            shared.Alarm{
                                Name: "Johnnie Berge",
                            },
                            shared.Alarm{
                                Name: "Archie Fahey",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    TargetLocationMaxConcurrency: sdk.String("hic"),
                    TargetLocationMaxErrors: sdk.String("similique"),
                },
                shared.TargetLocation{
                    Accounts: []string{
                        "consectetur",
                        "labore",
                        "laudantium",
                    },
                    ExecutionRoleName: sdk.String("cumque"),
                    Regions: []string{
                        "veritatis",
                    },
                    TargetLocationAlarmConfiguration: &shared.AlarmConfiguration{
                        Alarms: []shared.Alarm{
                            shared.Alarm{
                                Name: "Oscar Beatty",
                            },
                            shared.Alarm{
                                Name: "Francis Yundt",
                            },
                            shared.Alarm{
                                Name: "Leticia Funk",
                            },
                        },
                        IgnorePollAlarmFailure: sdk.Bool(false),
                    },
                    TargetLocationMaxConcurrency: sdk.String("nihil"),
                    TargetLocationMaxErrors: sdk.String("voluptatum"),
                },
            },
            TargetMaps: []map[string][]string{
                map[string][]string{
                    "ullam": []string{
                        "consequuntur",
                        "voluptas",
                    },
                },
                map[string][]string{
                    "excepturi": []string{
                        "est",
                        "perferendis",
                        "quibusdam",
                    },
                },
                map[string][]string{
                    "ducimus": []string{
                        "nisi",
                        "dolor",
                    },
                    "fugit": []string{
                        "maxime",
                        "maxime",
                    },
                    "expedita": []string{
                        "ea",
                    },
                    "impedit": []string{
                        "optio",
                        "est",
                        "inventore",
                    },
                },
                map[string][]string{
                    "repellendus": []string{
                        "dolores",
                    },
                },
            },
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("aspernatur"),
                    Values: []string{
                        "magni",
                        "odio",
                        "alias",
                    },
                },
                shared.Target{
                    Key: sdk.String("quidem"),
                    Values: []string{
                        "possimus",
                        "ipsam",
                        "odio",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.UpdateAssociationXAmzTargetEnumAmazonSsmUpdateAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssociationResult != nil {
        // handle response
    }
}
```

## UpdateAssociationStatus

<p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.</p> <p> <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the <code>InstanceId</code> legacy parameter.</p>

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
    res, err := s.SDK.UpdateAssociationStatus(ctx, operations.UpdateAssociationStatusRequest{
        UpdateAssociationStatusRequest: shared.UpdateAssociationStatusRequest{
            AssociationStatus: shared.AssociationStatus{
                AdditionalInfo: sdk.String("cum"),
                Date: types.MustTimeFromString("2021-08-04T14:16:30.964Z"),
                Message: "placeat",
                Name: shared.AssociationStatusNameEnumFailed,
            },
            InstanceID: "dolores",
            Name: "Mercedes Purdy",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.UpdateAssociationStatusXAmzTargetEnumAmazonSsmUpdateAssociationStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssociationStatusResult != nil {
        // handle response
    }
}
```

## UpdateDocument

Updates one or more values for an SSM document.

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
    res, err := s.SDK.UpdateDocument(ctx, operations.UpdateDocumentRequest{
        UpdateDocumentRequest: shared.UpdateDocumentRequest{
            Attachments: []shared.AttachmentsSource{
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumS3FileURL.ToPointer(),
                    Name: sdk.String("Dana Franecki"),
                    Values: []string{
                        "numquam",
                        "fugiat",
                        "molestiae",
                    },
                },
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumS3FileURL.ToPointer(),
                    Name: sdk.String("Elbert Fay"),
                    Values: []string{
                        "iste",
                        "nesciunt",
                        "corrupti",
                        "cupiditate",
                    },
                },
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumAttachmentReference.ToPointer(),
                    Name: sdk.String("Lee Roberts"),
                    Values: []string{
                        "commodi",
                        "commodi",
                        "fugit",
                        "ullam",
                    },
                },
                shared.AttachmentsSource{
                    Key: shared.AttachmentsSourceKeyEnumS3FileURL.ToPointer(),
                    Name: sdk.String("Monique Denesik"),
                    Values: []string{
                        "qui",
                        "deserunt",
                        "eligendi",
                    },
                },
            },
            Content: "incidunt",
            DisplayName: sdk.String("deleniti"),
            DocumentFormat: shared.DocumentFormatEnumYaml.ToPointer(),
            DocumentVersion: sdk.String("est"),
            Name: "Rufus Conn II",
            TargetType: sdk.String("facilis"),
            VersionName: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.UpdateDocumentXAmzTargetEnumAmazonSsmUpdateDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDocumentResult != nil {
        // handle response
    }
}
```

## UpdateDocumentDefaultVersion

<p>Set the default version of a document. </p> <note> <p>If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the <code>apply-only-at-cron-interval</code> parameter.</p> </note>

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
    res, err := s.SDK.UpdateDocumentDefaultVersion(ctx, operations.UpdateDocumentDefaultVersionRequest{
        UpdateDocumentDefaultVersionRequest: shared.UpdateDocumentDefaultVersionRequest{
            DocumentVersion: "eveniet",
            Name: "Eileen Yundt",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.UpdateDocumentDefaultVersionXAmzTargetEnumAmazonSsmUpdateDocumentDefaultVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDocumentDefaultVersionResult != nil {
        // handle response
    }
}
```

## UpdateDocumentMetadata

Updates information related to approval reviews for a specific version of a change template in Change Manager.

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
    res, err := s.SDK.UpdateDocumentMetadata(ctx, operations.UpdateDocumentMetadataRequest{
        UpdateDocumentMetadataRequest: shared.UpdateDocumentMetadataRequest{
            DocumentReviews: shared.DocumentReviews{
                Action: shared.DocumentReviewActionEnumApprove,
                Comment: []shared.DocumentReviewCommentSource{
                    shared.DocumentReviewCommentSource{
                        Content: sdk.String("praesentium"),
                        Type: shared.DocumentReviewCommentTypeEnumComment.ToPointer(),
                    },
                    shared.DocumentReviewCommentSource{
                        Content: sdk.String("facilis"),
                        Type: shared.DocumentReviewCommentTypeEnumComment.ToPointer(),
                    },
                    shared.DocumentReviewCommentSource{
                        Content: sdk.String("assumenda"),
                        Type: shared.DocumentReviewCommentTypeEnumComment.ToPointer(),
                    },
                    shared.DocumentReviewCommentSource{
                        Content: sdk.String("repudiandae"),
                        Type: shared.DocumentReviewCommentTypeEnumComment.ToPointer(),
                    },
                },
            },
            DocumentVersion: sdk.String("maiores"),
            Name: "Gertrude Buckridge",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.UpdateDocumentMetadataXAmzTargetEnumAmazonSsmUpdateDocumentMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDocumentMetadataResponse != nil {
        // handle response
    }
}
```

## UpdateMaintenanceWindow

<p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

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
    res, err := s.SDK.UpdateMaintenanceWindow(ctx, operations.UpdateMaintenanceWindowRequest{
        UpdateMaintenanceWindowRequest: shared.UpdateMaintenanceWindowRequest{
            AllowUnassociatedTargets: sdk.Bool(false),
            Cutoff: sdk.Int64(816825),
            Description: sdk.String("id"),
            Duration: sdk.Int64(539537),
            Enabled: sdk.Bool(false),
            EndDate: sdk.String("quaerat"),
            Name: sdk.String("Courtney Kohler"),
            Replace: sdk.Bool(false),
            Schedule: sdk.String("iure"),
            ScheduleOffset: sdk.Int64(538368),
            ScheduleTimezone: sdk.String("officia"),
            StartDate: sdk.String("sint"),
            WindowID: "laborum",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.UpdateMaintenanceWindowXAmzTargetEnumAmazonSsmUpdateMaintenanceWindow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMaintenanceWindowResult != nil {
        // handle response
    }
}
```

## UpdateMaintenanceWindowTarget

<p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field isn't modified.</p> </note>

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
    res, err := s.SDK.UpdateMaintenanceWindowTarget(ctx, operations.UpdateMaintenanceWindowTargetRequest{
        UpdateMaintenanceWindowTargetRequest: shared.UpdateMaintenanceWindowTargetRequest{
            Description: sdk.String("voluptas"),
            Name: sdk.String("Rafael Keebler"),
            OwnerInformation: sdk.String("reiciendis"),
            Replace: sdk.Bool(false),
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("sed"),
                    Values: []string{
                        "voluptates",
                    },
                },
            },
            WindowID: "provident",
            WindowTargetID: "maiores",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.UpdateMaintenanceWindowTargetXAmzTargetEnumAmazonSsmUpdateMaintenanceWindowTarget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMaintenanceWindowTargetResult != nil {
        // handle response
    }
}
```

## UpdateMaintenanceWindowTask

<p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p> <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p> </li> <li> <p> <code>ServiceRoleArn</code> </p> </li> <li> <p> <code>TaskInvocationParameters</code> </p> </li> <li> <p> <code>Priority</code> </p> </li> <li> <p> <code>MaxConcurrency</code> </p> </li> <li> <p> <code>MaxErrors</code> </p> </li> </ul> <note> <p>One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for this request. Optional fields that aren't specified are set to null.</p> <important> <p>When you update a maintenance window task that has options specified in <code>TaskInvocationParameters</code>, you must provide again all the <code>TaskInvocationParameters</code> values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified <code>TaskInvocationParameters</code> values for <code>Comment</code>, <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p> </important>

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
    res, err := s.SDK.UpdateMaintenanceWindowTask(ctx, operations.UpdateMaintenanceWindowTaskRequest{
        UpdateMaintenanceWindowTaskRequest: shared.UpdateMaintenanceWindowTaskRequest{
            AlarmConfiguration: &shared.AlarmConfiguration{
                Alarms: []shared.Alarm{
                    shared.Alarm{
                        Name: "Arturo Marks",
                    },
                    shared.Alarm{
                        Name: "Levi Ritchie",
                    },
                },
                IgnorePollAlarmFailure: sdk.Bool(false),
            },
            CutoffBehavior: shared.MaintenanceWindowTaskCutoffBehaviorEnumContinueTask.ToPointer(),
            Description: sdk.String("similique"),
            LoggingInfo: &shared.LoggingInfo{
                S3BucketName: "autem",
                S3KeyPrefix: sdk.String("dicta"),
                S3Region: "recusandae",
            },
            MaxConcurrency: sdk.String("sapiente"),
            MaxErrors: sdk.String("id"),
            Name: sdk.String("Stephanie Moore"),
            Priority: sdk.Int64(356007),
            Replace: sdk.Bool(false),
            ServiceRoleArn: sdk.String("atque"),
            Targets: []shared.Target{
                shared.Target{
                    Key: sdk.String("pariatur"),
                    Values: []string{
                        "similique",
                    },
                },
                shared.Target{
                    Key: sdk.String("iste"),
                    Values: []string{
                        "nam",
                        "animi",
                        "labore",
                        "voluptate",
                    },
                },
                shared.Target{
                    Key: sdk.String("voluptatibus"),
                    Values: []string{
                        "nulla",
                        "dolorem",
                    },
                },
                shared.Target{
                    Key: sdk.String("voluptates"),
                    Values: []string{
                        "perferendis",
                        "quaerat",
                        "excepturi",
                        "aliquid",
                    },
                },
            },
            TaskArn: sdk.String("dolore"),
            TaskInvocationParameters: &shared.MaintenanceWindowTaskInvocationParameters{
                Automation: &shared.MaintenanceWindowAutomationParameters{
                    DocumentVersion: sdk.String("voluptatem"),
                    Parameters: map[string][]string{
                        "laboriosam": []string{
                            "dicta",
                            "atque",
                            "ratione",
                        },
                        "vitae": []string{
                            "atque",
                            "nihil",
                            "culpa",
                            "temporibus",
                        },
                        "a": []string{
                            "cupiditate",
                            "suscipit",
                        },
                        "reiciendis": []string{
                            "delectus",
                            "ab",
                            "mollitia",
                            "possimus",
                        },
                    },
                },
                Lambda: &shared.MaintenanceWindowLambdaParameters{
                    ClientContext: sdk.String("praesentium"),
                    Payload: sdk.String("neque"),
                    Qualifier: sdk.String("quam"),
                },
                RunCommand: &shared.MaintenanceWindowRunCommandParameters{
                    CloudWatchOutputConfig: &shared.CloudWatchOutputConfig{
                        CloudWatchLogGroupName: sdk.String("animi"),
                        CloudWatchOutputEnabled: sdk.Bool(false),
                    },
                    Comment: sdk.String("debitis"),
                    DocumentHash: sdk.String("voluptatum"),
                    DocumentHashType: shared.DocumentHashTypeEnumSha256.ToPointer(),
                    DocumentVersion: sdk.String("quisquam"),
                    NotificationConfig: &shared.NotificationConfig{
                        NotificationArn: sdk.String("vitae"),
                        NotificationEvents: []shared.NotificationEventEnum{
                            shared.NotificationEventEnumAll,
                            shared.NotificationEventEnumTimedOut,
                            shared.NotificationEventEnumCancelled,
                            shared.NotificationEventEnumTimedOut,
                        },
                        NotificationType: shared.NotificationTypeEnumCommand.ToPointer(),
                    },
                    OutputS3BucketName: sdk.String("tempore"),
                    OutputS3KeyPrefix: sdk.String("officia"),
                    Parameters: map[string][]string{
                        "unde": []string{
                            "laboriosam",
                            "ducimus",
                            "voluptatum",
                        },
                        "sapiente": []string{
                            "dolor",
                            "hic",
                            "iure",
                        },
                        "sint": []string{
                            "iste",
                            "cupiditate",
                        },
                    },
                    ServiceRoleArn: sdk.String("ab"),
                    TimeoutSeconds: sdk.Int64(683783),
                },
                StepFunctions: &shared.MaintenanceWindowStepFunctionsParameters{
                    Input: sdk.String("a"),
                    Name: sdk.String("Jennie MacGyver"),
                },
            },
            TaskParameters: map[string]shared.MaintenanceWindowTaskParameterValueExpression{
                "consectetur": shared.MaintenanceWindowTaskParameterValueExpression{
                    Values: []string{
                        "vitae",
                        "numquam",
                    },
                },
            },
            WindowID: "incidunt",
            WindowTaskID: "modi",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("animi"),
        XAmzTarget: operations.UpdateMaintenanceWindowTaskXAmzTargetEnumAmazonSsmUpdateMaintenanceWindowTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMaintenanceWindowTaskResult != nil {
        // handle response
    }
}
```

## UpdateManagedInstanceRole

Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.

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
    res, err := s.SDK.UpdateManagedInstanceRole(ctx, operations.UpdateManagedInstanceRoleRequest{
        UpdateManagedInstanceRoleRequest: shared.UpdateManagedInstanceRoleRequest{
            IamRole: "consequatur",
            InstanceID: "voluptates",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.UpdateManagedInstanceRoleXAmzTargetEnumAmazonSsmUpdateManagedInstanceRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateManagedInstanceRoleResult != nil {
        // handle response
    }
}
```

## UpdateOpsItem

<p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

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
    res, err := s.SDK.UpdateOpsItem(ctx, operations.UpdateOpsItemRequest{
        UpdateOpsItemRequest: shared.UpdateOpsItemRequest{
            ActualEndTime: types.MustTimeFromString("2022-06-21T11:27:12.407Z"),
            ActualStartTime: types.MustTimeFromString("2020-02-24T04:55:25.598Z"),
            Category: sdk.String("itaque"),
            Description: sdk.String("eveniet"),
            Notifications: []shared.OpsItemNotification{
                shared.OpsItemNotification{
                    Arn: sdk.String("cupiditate"),
                },
                shared.OpsItemNotification{
                    Arn: sdk.String("adipisci"),
                },
                shared.OpsItemNotification{
                    Arn: sdk.String("aliquam"),
                },
                shared.OpsItemNotification{
                    Arn: sdk.String("illo"),
                },
            },
            OperationalData: map[string]shared.OpsItemDataValue{
                "sed": shared.OpsItemDataValue{
                    Type: shared.OpsItemDataTypeEnumString.ToPointer(),
                    Value: sdk.String("possimus"),
                },
                "dignissimos": shared.OpsItemDataValue{
                    Type: shared.OpsItemDataTypeEnumString.ToPointer(),
                    Value: sdk.String("explicabo"),
                },
            },
            OperationalDataToDelete: []string{
                "non",
                "delectus",
            },
            OpsItemArn: sdk.String("incidunt"),
            OpsItemID: "quod",
            PlannedEndTime: types.MustTimeFromString("2022-08-24T23:24:13.030Z"),
            PlannedStartTime: types.MustTimeFromString("2022-02-24T09:39:08.755Z"),
            Priority: sdk.Int64(916051),
            RelatedOpsItems: []shared.RelatedOpsItem{
                shared.RelatedOpsItem{
                    OpsItemID: "est",
                },
                shared.RelatedOpsItem{
                    OpsItemID: "in",
                },
                shared.RelatedOpsItem{
                    OpsItemID: "illo",
                },
            },
            Severity: sdk.String("voluptate"),
            Status: shared.OpsItemStatusEnumOpen.ToPointer(),
            Title: sdk.String("Dr."),
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.UpdateOpsItemXAmzTargetEnumAmazonSsmUpdateOpsItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOpsItemResponse != nil {
        // handle response
    }
}
```

## UpdateOpsMetadata

Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.

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
    res, err := s.SDK.UpdateOpsMetadata(ctx, operations.UpdateOpsMetadataRequest{
        UpdateOpsMetadataRequest: shared.UpdateOpsMetadataRequest{
            KeysToDelete: []string{
                "laboriosam",
                "quam",
            },
            MetadataToUpdate: map[string]shared.MetadataValue{
                "officia": shared.MetadataValue{
                    Value: sdk.String("repellat"),
                },
                "cupiditate": shared.MetadataValue{
                    Value: sdk.String("soluta"),
                },
                "tempore": shared.MetadataValue{
                    Value: sdk.String("culpa"),
                },
            },
            OpsMetadataArn: "fugiat",
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.UpdateOpsMetadataXAmzTargetEnumAmazonSsmUpdateOpsMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOpsMetadataResult != nil {
        // handle response
    }
}
```

## UpdatePatchBaseline

<p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

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
    res, err := s.SDK.UpdatePatchBaseline(ctx, operations.UpdatePatchBaselineRequest{
        UpdatePatchBaselineRequest: shared.UpdatePatchBaselineRequest{
            ApprovalRules: &shared.PatchRuleGroup{
                PatchRules: []shared.PatchRule{
                    shared.PatchRule{
                        ApproveAfterDays: sdk.Int64(843591),
                        ApproveUntilDate: sdk.String("suscipit"),
                        ComplianceLevel: shared.PatchComplianceLevelEnumInformational.ToPointer(),
                        EnableNonSecurity: sdk.Bool(false),
                        PatchFilterGroup: shared.PatchFilterGroup{
                            PatchFilters: []shared.PatchFilter{
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumClassification,
                                    Values: []string{
                                        "voluptatum",
                                        "sequi",
                                        "atque",
                                        "maiores",
                                    },
                                },
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumPriority,
                                    Values: []string{
                                        "totam",
                                        "quod",
                                        "aspernatur",
                                    },
                                },
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumAdvisoryID,
                                    Values: []string{
                                        "nam",
                                        "ex",
                                        "odio",
                                        "delectus",
                                    },
                                },
                                shared.PatchFilter{
                                    Key: shared.PatchFilterKeyEnumRelease,
                                    Values: []string{
                                        "distinctio",
                                        "eius",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            ApprovedPatches: []string{
                "veniam",
            },
            ApprovedPatchesComplianceLevel: shared.PatchComplianceLevelEnumUnspecified.ToPointer(),
            ApprovedPatchesEnableNonSecurity: sdk.Bool(false),
            BaselineID: "sint",
            Description: sdk.String("occaecati"),
            GlobalFilters: &shared.PatchFilterGroup{
                PatchFilters: []shared.PatchFilter{
                    shared.PatchFilter{
                        Key: shared.PatchFilterKeyEnumCveID,
                        Values: []string{
                            "amet",
                        },
                    },
                    shared.PatchFilter{
                        Key: shared.PatchFilterKeyEnumProductFamily,
                        Values: []string{
                            "occaecati",
                            "reiciendis",
                            "voluptate",
                            "tempore",
                        },
                    },
                    shared.PatchFilter{
                        Key: shared.PatchFilterKeyEnumEpoch,
                        Values: []string{
                            "possimus",
                            "tenetur",
                            "recusandae",
                        },
                    },
                    shared.PatchFilter{
                        Key: shared.PatchFilterKeyEnumPriority,
                        Values: []string{
                            "esse",
                            "harum",
                        },
                    },
                },
            },
            Name: sdk.String("Traci Dickens"),
            RejectedPatches: []string{
                "nam",
                "officia",
            },
            RejectedPatchesAction: shared.PatchActionEnumBlock.ToPointer(),
            Replace: sdk.Bool(false),
            Sources: []shared.PatchSource{
                shared.PatchSource{
                    Configuration: "illo",
                    Name: "Ronnie Bechtelar",
                    Products: []string{
                        "deleniti",
                        "provident",
                        "aut",
                        "dolorum",
                    },
                },
                shared.PatchSource{
                    Configuration: "nostrum",
                    Name: "Juana Gerhold",
                    Products: []string{
                        "veritatis",
                        "autem",
                        "earum",
                        "minima",
                    },
                },
                shared.PatchSource{
                    Configuration: "ex",
                    Name: "Danny Lowe",
                    Products: []string{
                        "maxime",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.UpdatePatchBaselineXAmzTargetEnumAmazonSsmUpdatePatchBaseline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePatchBaselineResult != nil {
        // handle response
    }
}
```

## UpdateResourceDataSync

<p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't edit that sync later and choose the <code>Include all accounts from my Organizations configuration</code> option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API operation only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>

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
    res, err := s.SDK.UpdateResourceDataSync(ctx, operations.UpdateResourceDataSyncRequest{
        UpdateResourceDataSyncRequest: shared.UpdateResourceDataSyncRequest{
            SyncName: "occaecati",
            SyncSource: shared.ResourceDataSyncSource{
                AwsOrganizationsSource: &shared.ResourceDataSyncAwsOrganizationsSource{
                    OrganizationSourceType: "provident",
                    OrganizationalUnits: []shared.ResourceDataSyncOrganizationalUnit{
                        shared.ResourceDataSyncOrganizationalUnit{
                            OrganizationalUnitID: sdk.String("fugit"),
                        },
                        shared.ResourceDataSyncOrganizationalUnit{
                            OrganizationalUnitID: sdk.String("autem"),
                        },
                        shared.ResourceDataSyncOrganizationalUnit{
                            OrganizationalUnitID: sdk.String("optio"),
                        },
                        shared.ResourceDataSyncOrganizationalUnit{
                            OrganizationalUnitID: sdk.String("eveniet"),
                        },
                    },
                },
                EnableAllOpsDataSources: sdk.Bool(false),
                IncludeFutureRegions: sdk.Bool(false),
                SourceRegions: []string{
                    "blanditiis",
                    "a",
                    "natus",
                    "sapiente",
                },
                SourceType: "repellendus",
            },
            SyncType: "facilis",
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.UpdateResourceDataSyncXAmzTargetEnumAmazonSsmUpdateResourceDataSync,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceDataSyncResult != nil {
        // handle response
    }
}
```

## UpdateServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Update the service setting for the account. </p>

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
    res, err := s.SDK.UpdateServiceSetting(ctx, operations.UpdateServiceSettingRequest{
        UpdateServiceSettingRequest: shared.UpdateServiceSettingRequest{
            SettingID: "tempore",
            SettingValue: "expedita",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.UpdateServiceSettingXAmzTargetEnumAmazonSsmUpdateServiceSetting,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceSettingResult != nil {
        // handle response
    }
}
```
