# SDK

## Overview

<p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure end-to-end management solution for hybrid cloud environments that enables safe and secure operations at scale.</p> <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up Amazon Web Services Systems Manager</a>.</p> <p class="title"> <b>Related resources</b> </p> <ul> <li> <p>For information about each of the capabilities that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/what-is-systems-manager.html#systems-manager-capabilities">Systems Manager capabilities</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </li> <li> <p>For details about predefined runbooks for Automation, a capability of Amazon Web Services Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html">Systems Manager Automation runbook reference</a> </i>.</p> </li> <li> <p>For information about AppConfig, a capability of Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a> </i> and the <i> <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig API Reference</a> </i>.</p> </li> <li> <p>For information about Incident Manager, a capability of Systems Manager, see the <i> <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Systems Manager Incident Manager User Guide</a> </i> and the <i> <a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Systems Manager Incident Manager API Reference</a> </i>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm/>
### Available Operations

* [addTagsToResource](#addtagstoresource) - <p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i> are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:</p> <ul> <li> <p> <code>Key=Owner,Value=DbAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=SysAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=Dev</code> </p> </li> <li> <p> <code>Key=Stack,Value=Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Pre-Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Test</code> </p> </li> </ul> <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags.</p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters.</p> <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
* [associateOpsItemRelatedItem](#associateopsitemrelateditem) - Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.
* [cancelCommand](#cancelcommand) - Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
* [cancelMaintenanceWindowExecution](#cancelmaintenancewindowexecution) - Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.
* [createActivation](#createactivation) - <p>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> <note> <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called <i>managed nodes</i>.</p> </note>
* [createAssociation](#createassociation) - A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 
* [createAssociationBatch](#createassociationbatch) - <p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.</p> <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.</p> <p>If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
* [createDocument](#createdocument) - Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.
* [createMaintenanceWindow](#createmaintenancewindow) - <p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
* [createOpsItem](#createopsitem) - <p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [createOpsMetadata](#createopsmetadata) - If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.
* [createPatchBaseline](#createpatchbaseline) - <p>Creates a patch baseline.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>
* [createResourceDataSync](#createresourcedatasync) - <p>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>
* [deleteActivation](#deleteactivation) - Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.
* [deleteAssociation](#deleteassociation) - <p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the <code>Targets</code> parameter, then you must delete the association by using the association ID.</p> <p>When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</p>
* [deleteDocument](#deletedocument) - <p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>
* [deleteInventory](#deleteinventory) - Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
* [deleteMaintenanceWindow](#deletemaintenancewindow) - Deletes a maintenance window.
* [deleteOpsMetadata](#deleteopsmetadata) - Delete OpsMetadata related to an application.
* [deleteParameter](#deleteparameter) - Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
* [deleteParameters](#deleteparameters) - Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
* [deletePatchBaseline](#deletepatchbaseline) - Deletes a patch baseline.
* [deleteResourceDataSync](#deleteresourcedatasync) - Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
* [deregisterManagedInstance](#deregistermanagedinstance) - Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
* [deregisterPatchBaselineForPatchGroup](#deregisterpatchbaselineforpatchgroup) - Removes a patch group from a patch baseline.
* [deregisterTargetFromMaintenanceWindow](#deregistertargetfrommaintenancewindow) - Removes a target from a maintenance window.
* [deregisterTaskFromMaintenanceWindow](#deregistertaskfrommaintenancewindow) - Removes a task from a maintenance window.
* [describeActivations](#describeactivations) - Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.
* [describeAssociation](#describeassociation) - Describes the association for the specified target or managed node. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID.
* [describeAssociationExecutionTargets](#describeassociationexecutiontargets) - Views information about a specific execution of a specific association.
* [describeAssociationExecutions](#describeassociationexecutions) - Views all executions for a specific association ID. 
* [describeAutomationExecutions](#describeautomationexecutions) - Provides details about all active and terminated Automation executions.
* [describeAutomationStepExecutions](#describeautomationstepexecutions) - Information about all active and terminated step executions in an Automation workflow.
* [describeAvailablePatches](#describeavailablepatches) - Lists all patches eligible to be included in a patch baseline.
* [describeDocument](#describedocument) - Describes the specified Amazon Web Services Systems Manager document (SSM document).
* [describeDocumentPermission](#describedocumentpermission) - Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). 
* [describeEffectiveInstanceAssociations](#describeeffectiveinstanceassociations) - All associations for the managed node(s).
* [describeEffectivePatchesForPatchBaseline](#describeeffectivepatchesforpatchbaseline) - Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.
* [describeInstanceAssociationsStatus](#describeinstanceassociationsstatus) - The status of the associations for the managed node(s).
* [describeInstanceInformation](#describeinstanceinformation) - <p>Describes one or more of your managed nodes, including information about the operating system platform, the version of SSM Agent installed on the managed node, node status, and so on.</p> <p>If you specify one or more managed node IDs, it returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.</p> <note> <p>The <code>IamRole</code> field for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This call doesn't return the IAM role for EC2 instances.</p> </note>
* [describeInstancePatchStates](#describeinstancepatchstates) - Retrieves the high-level patch state of one or more managed nodes.
* [describeInstancePatchStatesForPatchGroup](#describeinstancepatchstatesforpatchgroup) - Retrieves the high-level patch state for the managed nodes in the specified patch group.
* [describeInstancePatches](#describeinstancepatches) - Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.
* [describeInventoryDeletions](#describeinventorydeletions) - Describes a specific delete inventory operation.
* [describeMaintenanceWindowExecutionTaskInvocations](#describemaintenancewindowexecutiontaskinvocations) - Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
* [describeMaintenanceWindowExecutionTasks](#describemaintenancewindowexecutiontasks) - For a given maintenance window execution, lists the tasks that were run.
* [describeMaintenanceWindowExecutions](#describemaintenancewindowexecutions) - Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
* [describeMaintenanceWindowSchedule](#describemaintenancewindowschedule) - Retrieves information about upcoming executions of a maintenance window.
* [describeMaintenanceWindowTargets](#describemaintenancewindowtargets) - Lists the targets registered with the maintenance window.
* [describeMaintenanceWindowTasks](#describemaintenancewindowtasks) - <p>Lists the tasks in a maintenance window.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note>
* [describeMaintenanceWindows](#describemaintenancewindows) - Retrieves the maintenance windows in an Amazon Web Services account.
* [describeMaintenanceWindowsForTarget](#describemaintenancewindowsfortarget) - Retrieves information about the maintenance window targets or tasks that a managed node is associated with.
* [describeOpsItems](#describeopsitems) - <p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [describeParameters](#describeparameters) - <p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>DescribeParameters</code> retrieves whatever the original key alias was referencing.</p> </important>
* [describePatchBaselines](#describepatchbaselines) - Lists the patch baselines in your Amazon Web Services account.
* [describePatchGroupState](#describepatchgroupstate) - Returns high-level aggregated patch compliance state information for a patch group.
* [describePatchGroups](#describepatchgroups) - Lists all patch groups that have been registered with patch baselines.
* [describePatchProperties](#describepatchproperties) - <p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>DEBIAN</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>MACOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> </p> </dd> <dt>ORACLE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>UBUNTU</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>WINDOWS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> | <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code> </p> </dd> </dl>
* [describeSessions](#describesessions) - Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
* [disassociateOpsItemRelatedItem](#disassociateopsitemrelateditem) - Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.
* [getAutomationExecution](#getautomationexecution) - Get detailed information about a particular Automation execution.
* [getCalendarState](#getcalendarstate) - <p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p> <p>If you specify more than one calendar in a request, the command returns the status of <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is <code>CLOSED</code>.</p> <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
* [getCommandInvocation](#getcommandinvocation) - <p>Returns detailed information about command execution for an invocation or plugin.</p> <p> <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes, use <a>ListCommands</a>.</p>
* [getConnectionStatus](#getconnectionstatus) - Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.
* [getDefaultPatchBaseline](#getdefaultpatchbaseline) - <p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you don't specify an operating system value, the default patch baseline for Windows is returned.</p>
* [getDeployablePatchSnapshotForInstance](#getdeployablepatchsnapshotforinstance) - <p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p> <note> <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the <code>AWS-RunShellScript</code> document or the <code>AWS-RunPowerShellScript</code> document.</p> </note>
* [getDocument](#getdocument) - Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).
* [getInventory](#getinventory) - Query inventory information. This includes managed node status, such as <code>Stopped</code> or <code>Terminated</code>.
* [getInventorySchema](#getinventoryschema) - Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
* [getMaintenanceWindow](#getmaintenancewindow) - Retrieves a maintenance window.
* [getMaintenanceWindowExecution](#getmaintenancewindowexecution) - Retrieves details about a specific a maintenance window execution.
* [getMaintenanceWindowExecutionTask](#getmaintenancewindowexecutiontask) - Retrieves the details about a specific task run as part of a maintenance window execution.
* [getMaintenanceWindowExecutionTaskInvocation](#getmaintenancewindowexecutiontaskinvocation) - Retrieves information about a specific task running on a specific target.
* [getMaintenanceWindowTask](#getmaintenancewindowtask) - <p>Retrieves the details of a maintenance window task.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note> <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>
* [getOpsItem](#getopsitem) - <p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [getOpsMetadata](#getopsmetadata) - View operational metadata related to an application in Application Manager.
* [getOpsSummary](#getopssummary) - View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 
* [getParameter](#getparameter) - <p>Get information about a single parameter by specifying the parameter name.</p> <note> <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p> </note>
* [getParameterHistory](#getparameterhistory) - <p>Retrieves the history of all changes to a parameter.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>GetParameterHistory</code> retrieves whatever the original key alias was referencing.</p> </important>
* [getParameters](#getparameters) - <p>Get information about one or more parameters by specifying multiple parameter names.</p> <note> <p>To get information about a single parameter, you can use the <a>GetParameter</a> operation instead.</p> </note>
* [getParametersByPath](#getparametersbypath) - <p>Retrieve information about one or more parameters in a specific hierarchy. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>
* [getPatchBaseline](#getpatchbaseline) - Retrieves information about a patch baseline.
* [getPatchBaselineForPatchGroup](#getpatchbaselineforpatchgroup) - Retrieves the patch baseline that should be used for the specified patch group.
* [getResourcePolicies](#getresourcepolicies) - Returns an array of the <code>Policy</code> object.
* [getServiceSetting](#getservicesetting) - <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of <code>false</code>. This means the user can't use this feature unless they change the setting to <code>true</code> and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Query the current service setting for the Amazon Web Services account. </p>
* [labelParameterVersion](#labelparameterversion) - <p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>
* [listAssociationVersions](#listassociationversions) - Retrieves all versions of an association for a specific association ID.
* [listAssociations](#listassociations) - Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.
* [listCommandInvocations](#listcommandinvocations) - An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. <code>ListCommandInvocations</code> provide status about command execution.
* [listCommands](#listcommands) - Lists the commands requested by users of the Amazon Web Services account.
* [listComplianceItems](#listcomplianceitems) - For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
* [listComplianceSummaries](#listcompliancesummaries) - Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
* [listDocumentMetadataHistory](#listdocumentmetadatahistory) - Information about approval reviews for a version of a change template in Change Manager.
* [listDocumentVersions](#listdocumentversions) - List all versions for a document.
* [listDocuments](#listdocuments) - Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.
* [listInventoryEntries](#listinventoryentries) - A list of inventory items returned by the request.
* [listOpsItemEvents](#listopsitemevents) - Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.
* [listOpsItemRelatedItems](#listopsitemrelateditems) - Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.
* [listOpsMetadata](#listopsmetadata) - Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.
* [listResourceComplianceSummaries](#listresourcecompliancesummaries) - Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
* [listResourceDataSync](#listresourcedatasync) - <p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>
* [listTagsForResource](#listtagsforresource) - <p>Returns a list of the tags assigned to the specified resource.</p> <p>For information about the ID format for each supported resource type, see <a>AddTagsToResource</a>.</p>
* [modifyDocumentPermission](#modifydocumentpermission) - Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.
* [putComplianceItems](#putcomplianceitems) - <p>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>
* [putInventory](#putinventory) - Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
* [putParameter](#putparameter) - Add a parameter to the system.
* [putResourcePolicy](#putresourcepolicy) - Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
* [registerDefaultPatchBaseline](#registerdefaultpatchbaseline) - <p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>
* [registerPatchBaselineForPatchGroup](#registerpatchbaselineforpatchgroup) - Registers a patch baseline for a patch group.
* [registerTargetWithMaintenanceWindow](#registertargetwithmaintenancewindow) - Registers a target with a maintenance window.
* [registerTaskWithMaintenanceWindow](#registertaskwithmaintenancewindow) - Adds a new task to a maintenance window.
* [removeTagsFromResource](#removetagsfromresource) - Removes tag keys from the specified resource.
* [resetServiceSetting](#resetservicesetting) - <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. </p>
* [resumeSession](#resumesession) - <p>Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use.</p> </note>
* [sendAutomationSignal](#sendautomationsignal) - Sends a signal to an Automation execution to change the current behavior or status of the execution. 
* [sendCommand](#sendcommand) - Runs commands on one or more managed nodes.
* [startAssociationsOnce](#startassociationsonce) - Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.
* [startAutomationExecution](#startautomationexecution) - Initiates execution of an Automation runbook.
* [startChangeRequestExecution](#startchangerequestexecution) - Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.
* [startSession](#startsession) - <p>Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines.</p> </note>
* [stopAutomationExecution](#stopautomationexecution) - Stop an Automation that is currently running.
* [terminateSession](#terminatesession) - Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.
* [unlabelParameterVersion](#unlabelparameterversion) - Remove a label or labels from a parameter.
* [updateAssociation](#updateassociation) - <p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call <code>UpdateAssociation</code>, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the <code>Name</code> parameter. Before calling this API action, we recommend that you call the <a>DescribeAssociation</a> API operation and make a note of all optional parameters required for your <code>UpdateAssociation</code> call.</p> <p>In order to call this API operation, a user, group, or role must be granted permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association during the next schedule run.</p> </important>
* [updateAssociationStatus](#updateassociationstatus) - <p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.</p> <p> <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the <code>InstanceId</code> legacy parameter.</p>
* [updateDocument](#updatedocument) - Updates one or more values for an SSM document.
* [updateDocumentDefaultVersion](#updatedocumentdefaultversion) - <p>Set the default version of a document. </p> <note> <p>If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the <code>apply-only-at-cron-interval</code> parameter.</p> </note>
* [updateDocumentMetadata](#updatedocumentmetadata) - Updates information related to approval reviews for a specific version of a change template in Change Manager.
* [updateMaintenanceWindow](#updatemaintenancewindow) - <p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
* [updateMaintenanceWindowTarget](#updatemaintenancewindowtarget) - <p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field isn't modified.</p> </note>
* [updateMaintenanceWindowTask](#updatemaintenancewindowtask) - <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p> <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p> </li> <li> <p> <code>ServiceRoleArn</code> </p> </li> <li> <p> <code>TaskInvocationParameters</code> </p> </li> <li> <p> <code>Priority</code> </p> </li> <li> <p> <code>MaxConcurrency</code> </p> </li> <li> <p> <code>MaxErrors</code> </p> </li> </ul> <note> <p>One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for this request. Optional fields that aren't specified are set to null.</p> <important> <p>When you update a maintenance window task that has options specified in <code>TaskInvocationParameters</code>, you must provide again all the <code>TaskInvocationParameters</code> values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified <code>TaskInvocationParameters</code> values for <code>Comment</code>, <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p> </important>
* [updateManagedInstanceRole](#updatemanagedinstancerole) - Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.
* [updateOpsItem](#updateopsitem) - <p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
* [updateOpsMetadata](#updateopsmetadata) - Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.
* [updatePatchBaseline](#updatepatchbaseline) - <p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>
* [updateResourceDataSync](#updateresourcedatasync) - <p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't edit that sync later and choose the <code>Include all accounts from my Organizations configuration</code> option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API operation only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>
* [updateServiceSetting](#updateservicesetting) - <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Update the service setting for the account. </p>

## addTagsToResource

<p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i> are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:</p> <ul> <li> <p> <code>Key=Owner,Value=DbAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=SysAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=Dev</code> </p> </li> <li> <p> <code>Key=Stack,Value=Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Pre-Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Test</code> </p> </li> </ul> <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags.</p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters.</p> <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddTagsToResourceResponse;
import org.openapis.openapi.models.operations.AddTagsToResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToResourceRequest;
import org.openapis.openapi.models.shared.ResourceTypeForTaggingEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToResourceRequest req = new AddTagsToResourceRequest(                new AddTagsToResourceRequest("ab", ResourceTypeForTaggingEnum.PARAMETER,                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("ipsam", "repellendus") {{
                                                    key = "deserunt";
                                                    value = "perferendis";
                                                }}),
                                            }});, AddTagsToResourceXAmzTargetEnum.AMAZON_SSM_ADD_TAGS_TO_RESOURCE) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            AddTagsToResourceResponse res = sdk.sdk.addTagsToResource(req);

            if (res.addTagsToResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateOpsItemRelatedItem

Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateOpsItemRelatedItemRequest;
import org.openapis.openapi.models.operations.AssociateOpsItemRelatedItemResponse;
import org.openapis.openapi.models.operations.AssociateOpsItemRelatedItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateOpsItemRelatedItemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateOpsItemRelatedItemRequest req = new AssociateOpsItemRelatedItemRequest(                new AssociateOpsItemRelatedItemRequest("quod", "esse", "totam", "porro");, AssociateOpsItemRelatedItemXAmzTargetEnum.AMAZON_SSM_ASSOCIATE_OPS_ITEM_RELATED_ITEM) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            AssociateOpsItemRelatedItemResponse res = sdk.sdk.associateOpsItemRelatedItem(req);

            if (res.associateOpsItemRelatedItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelCommand

Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelCommandRequest;
import org.openapis.openapi.models.operations.CancelCommandResponse;
import org.openapis.openapi.models.operations.CancelCommandXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelCommandRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelCommandRequest req = new CancelCommandRequest(                new CancelCommandRequest("optio") {{
                                instanceIds = new String[]{{
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }};
                            }};, CancelCommandXAmzTargetEnum.AMAZON_SSM_CANCEL_COMMAND) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CancelCommandResponse res = sdk.sdk.cancelCommand(req);

            if (res.cancelCommandResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelMaintenanceWindowExecution

Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelMaintenanceWindowExecutionRequest;
import org.openapis.openapi.models.operations.CancelMaintenanceWindowExecutionResponse;
import org.openapis.openapi.models.operations.CancelMaintenanceWindowExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelMaintenanceWindowExecutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelMaintenanceWindowExecutionRequest req = new CancelMaintenanceWindowExecutionRequest(                new CancelMaintenanceWindowExecutionRequest("perferendis");, CancelMaintenanceWindowExecutionXAmzTargetEnum.AMAZON_SSM_CANCEL_MAINTENANCE_WINDOW_EXECUTION) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            CancelMaintenanceWindowExecutionResponse res = sdk.sdk.cancelMaintenanceWindowExecution(req);

            if (res.cancelMaintenanceWindowExecutionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createActivation

<p>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> <note> <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called <i>managed nodes</i>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActivationRequest;
import org.openapis.openapi.models.operations.CreateActivationResponse;
import org.openapis.openapi.models.operations.CreateActivationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateActivationRequest;
import org.openapis.openapi.models.shared.RegistrationMetadataItem;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateActivationRequest req = new CreateActivationRequest(                new CreateActivationRequest("saepe") {{
                                defaultInstanceName = "fuga";
                                description = "in";
                                expirationDate = OffsetDateTime.parse("2022-05-22T05:33:50.280Z");
                                registrationLimit = 437032L;
                                registrationMetadata = new org.openapis.openapi.models.shared.RegistrationMetadataItem[]{{
                                    add(new RegistrationMetadataItem("ipsa", "reiciendis") {{
                                        key = "quidem";
                                        value = "architecto";
                                    }}),
                                    add(new RegistrationMetadataItem("laborum", "dolores") {{
                                        key = "est";
                                        value = "mollitia";
                                    }}),
                                    add(new RegistrationMetadataItem("explicabo", "nobis") {{
                                        key = "dolorem";
                                        value = "corporis";
                                    }}),
                                    add(new RegistrationMetadataItem("nemo", "minima") {{
                                        key = "enim";
                                        value = "omnis";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("culpa", "doloribus") {{
                                        key = "accusantium";
                                        value = "iure";
                                    }}),
                                    add(new Tag("mollitia", "dolorem") {{
                                        key = "sapiente";
                                        value = "architecto";
                                    }}),
                                    add(new Tag("repellat", "mollitia") {{
                                        key = "culpa";
                                        value = "consequuntur";
                                    }}),
                                }};
                            }};, CreateActivationXAmzTargetEnum.AMAZON_SSM_CREATE_ACTIVATION) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            CreateActivationResponse res = sdk.sdk.createActivation(req);

            if (res.createActivationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssociation

A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssociationRequest;
import org.openapis.openapi.models.operations.CreateAssociationResponse;
import org.openapis.openapi.models.operations.CreateAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.AssociationComplianceSeverityEnum;
import org.openapis.openapi.models.shared.AssociationSyncComplianceEnum;
import org.openapis.openapi.models.shared.CreateAssociationRequest;
import org.openapis.openapi.models.shared.InstanceAssociationOutputLocation;
import org.openapis.openapi.models.shared.S3OutputLocation;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssociationRequest req = new CreateAssociationRequest(                new CreateAssociationRequest("quis") {{
                                alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                    add(new Alarm("sequi") {{
                                                        name = "Matt Hamill";
                                                    }}),
                                                }}) {{
                                    ignorePollAlarmFailure = false;
                                }};;
                                applyOnlyAtCronInterval = false;
                                associationName = "tenetur";
                                automationTargetParameterName = "ipsam";
                                calendarNames = new String[]{{
                                    add("possimus"),
                                    add("aut"),
                                    add("quasi"),
                                }};
                                complianceSeverity = AssociationComplianceSeverityEnum.LOW;
                                documentVersion = "temporibus";
                                instanceId = "laborum";
                                maxConcurrency = "quasi";
                                maxErrors = "reiciendis";
                                outputLocation = new InstanceAssociationOutputLocation() {{
                                    s3Location = new S3OutputLocation() {{
                                        outputS3BucketName = "voluptatibus";
                                        outputS3KeyPrefix = "vero";
                                        outputS3Region = "nihil";
                                    }};;
                                }};;
                                parameters = new java.util.HashMap<String, String[]>() {{
                                    put("voluptatibus", new String[]{{
                                        add("omnis"),
                                    }});
                                    put("voluptate", new String[]{{
                                        add("perferendis"),
                                        add("doloremque"),
                                        add("reprehenderit"),
                                    }});
                                    put("ut", new String[]{{
                                        add("dicta"),
                                        add("corporis"),
                                        add("dolore"),
                                        add("iusto"),
                                    }});
                                }};
                                scheduleExpression = "dicta";
                                scheduleOffset = 688661L;
                                syncCompliance = AssociationSyncComplianceEnum.AUTO;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quae", "ipsum") {{
                                        key = "commodi";
                                        value = "repudiandae";
                                    }}),
                                    add(new Tag("excepturi", "pariatur") {{
                                        key = "quidem";
                                        value = "molestias";
                                    }}),
                                    add(new Tag("rem", "voluptates") {{
                                        key = "modi";
                                        value = "praesentium";
                                    }}),
                                    add(new Tag("sint", "veritatis") {{
                                        key = "quasi";
                                        value = "repudiandae";
                                    }}),
                                }};
                                targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("enim"),
                                            add("consequatur"),
                                        }};
                                        executionRoleName = "est";
                                        regions = new String[]{{
                                            add("explicabo"),
                                            add("deserunt"),
                                            add("distinctio"),
                                            add("quibusdam"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("non") {{
                                                                name = "Geoffrey Green";
                                                            }}),
                                                            add(new Alarm("sint") {{
                                                                name = "Sergio Hyatt";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("perferendis") {{
                                                    name = "Tina Jacobi";
                                                }}),
                                                add(new Alarm("excepturi") {{
                                                    name = "Mr. Nadine Hills";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "officia";
                                        targetLocationMaxErrors = "dolor";
                                    }}),
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("a"),
                                            add("dolorum"),
                                            add("in"),
                                            add("in"),
                                        }};
                                        executionRoleName = "illum";
                                        regions = new String[]{{
                                            add("rerum"),
                                            add("dicta"),
                                            add("magnam"),
                                            add("cumque"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("suscipit") {{
                                                                name = "Verna Olson";
                                                            }}),
                                                            add(new Alarm("architecto") {{
                                                                name = "Robin Keebler";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("occaecati") {{
                                                    name = "Beth Padberg";
                                                }}),
                                                add(new Alarm("nam") {{
                                                    name = "Sophia Wintheiser";
                                                }}),
                                                add(new Alarm("deserunt") {{
                                                    name = "Nelson Lesch";
                                                }}),
                                                add(new Alarm("perferendis") {{
                                                    name = "Wilma Mosciski";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "magnam";
                                        targetLocationMaxErrors = "et";
                                    }}),
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("ullam"),
                                            add("provident"),
                                            add("quos"),
                                        }};
                                        executionRoleName = "sint";
                                        regions = new String[]{{
                                            add("mollitia"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("magni") {{
                                                                name = "Edward Crooks";
                                                            }}),
                                                            add(new Alarm("ea") {{
                                                                name = "Angelica Stanton";
                                                            }}),
                                                            add(new Alarm("quidem") {{
                                                                name = "Mr. Harry Jaskolski";
                                                            }}),
                                                            add(new Alarm("nemo") {{
                                                                name = "Colleen Johnston PhD";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("odit") {{
                                                    name = "Tommy Kemmer";
                                                }}),
                                                add(new Alarm("eius") {{
                                                    name = "Joyce Kertzmann";
                                                }}),
                                                add(new Alarm("repudiandae") {{
                                                    name = "Alfredo Prosacco Sr.";
                                                }}),
                                                add(new Alarm("sed") {{
                                                    name = "Lola Koss";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "voluptatibus";
                                        targetLocationMaxErrors = "perferendis";
                                    }}),
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("amet"),
                                            add("aut"),
                                            add("cumque"),
                                            add("corporis"),
                                        }};
                                        executionRoleName = "hic";
                                        regions = new String[]{{
                                            add("nobis"),
                                            add("dolores"),
                                            add("quis"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("adipisci") {{
                                                                name = "Ms. Vickie Mraz";
                                                            }}),
                                                            add(new Alarm("deleniti") {{
                                                                name = "Merle Gleichner";
                                                            }}),
                                                            add(new Alarm("quaerat") {{
                                                                name = "Rene Rolfson";
                                                            }}),
                                                            add(new Alarm("qui") {{
                                                                name = "Gene Effertz";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("perferendis") {{
                                                    name = "Cynthia Hayes";
                                                }}),
                                                add(new Alarm("nostrum") {{
                                                    name = "Brooke Kohler";
                                                }}),
                                                add(new Alarm("voluptatem") {{
                                                    name = "Percy Mohr";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "ipsum";
                                        targetLocationMaxErrors = "hic";
                                    }}),
                                }};
                                targetMaps = new java.util.HashMap<String, String[]>[]{{
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("voluptate", new String[]{{
                                            add("reiciendis"),
                                            add("amet"),
                                        }});
                                        put("dolorum", new String[]{{
                                            add("veritatis"),
                                            add("ipsa"),
                                        }});
                                        put("ipsa", new String[]{{
                                            add("odio"),
                                            add("quaerat"),
                                        }});
                                    }}),
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("quidem", new String[]{{
                                            add("voluptas"),
                                            add("natus"),
                                            add("eos"),
                                            add("atque"),
                                        }});
                                        put("sit", new String[]{{
                                            add("ab"),
                                            add("soluta"),
                                            add("dolorum"),
                                            add("iusto"),
                                        }});
                                        put("voluptate", new String[]{{
                                            add("deleniti"),
                                            add("omnis"),
                                            add("necessitatibus"),
                                        }});
                                        put("distinctio", new String[]{{
                                            add("nihil"),
                                            add("ipsum"),
                                            add("voluptate"),
                                            add("id"),
                                        }});
                                    }}),
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("eius", new String[]{{
                                            add("perferendis"),
                                        }});
                                        put("amet", new String[]{{
                                            add("accusamus"),
                                            add("ad"),
                                            add("saepe"),
                                            add("suscipit"),
                                        }});
                                        put("deserunt", new String[]{{
                                            add("minima"),
                                            add("repellendus"),
                                            add("totam"),
                                        }});
                                        put("similique", new String[]{{
                                            add("at"),
                                        }});
                                    }}),
                                }};
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "tempora";
                                        values = new String[]{{
                                            add("quod"),
                                            add("officiis"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "qui";
                                        values = new String[]{{
                                            add("a"),
                                            add("esse"),
                                            add("harum"),
                                        }};
                                    }}),
                                }};
                            }};, CreateAssociationXAmzTargetEnum.AMAZON_SSM_CREATE_ASSOCIATION) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            CreateAssociationResponse res = sdk.sdk.createAssociation(req);

            if (res.createAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssociationBatch

<p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.</p> <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.</p> <p>If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssociationBatchRequest;
import org.openapis.openapi.models.operations.CreateAssociationBatchResponse;
import org.openapis.openapi.models.operations.CreateAssociationBatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.AssociationComplianceSeverityEnum;
import org.openapis.openapi.models.shared.AssociationSyncComplianceEnum;
import org.openapis.openapi.models.shared.CreateAssociationBatchRequest;
import org.openapis.openapi.models.shared.CreateAssociationBatchRequestEntry;
import org.openapis.openapi.models.shared.InstanceAssociationOutputLocation;
import org.openapis.openapi.models.shared.S3OutputLocation;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssociationBatchRequest req = new CreateAssociationBatchRequest(                new CreateAssociationBatchRequest(                new org.openapis.openapi.models.shared.CreateAssociationBatchRequestEntry[]{{
                                                add(new CreateAssociationBatchRequestEntry("impedit") {{
                                                    alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                        add(new Alarm("incidunt") {{
                                                                            name = "Glen Oberbrunner";
                                                                        }}),
                                                                        add(new Alarm("dicta") {{
                                                                            name = "Shelly Schoen";
                                                                        }}),
                                                                    }}) {{
                                                        alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("sed") {{
                                                                name = "Miss Jimmie Kozey";
                                                            }}),
                                                        }};
                                                        ignorePollAlarmFailure = false;
                                                    }};
                                                    applyOnlyAtCronInterval = false;
                                                    associationName = "laborum";
                                                    automationTargetParameterName = "totam";
                                                    calendarNames = new String[]{{
                                                        add("aspernatur"),
                                                        add("dolores"),
                                                    }};
                                                    complianceSeverity = AssociationComplianceSeverityEnum.LOW;
                                                    documentVersion = "facilis";
                                                    instanceId = "aliquid";
                                                    maxConcurrency = "quam";
                                                    maxErrors = "molestias";
                                                    name = "Shawn Doyle";
                                                    outputLocation = new InstanceAssociationOutputLocation() {{
                                                        s3Location = new S3OutputLocation() {{
                                                            outputS3BucketName = "odio";
                                                            outputS3KeyPrefix = "sunt";
                                                            outputS3Region = "ullam";
                                                        }};
                                                    }};
                                                    parameters = new java.util.HashMap<String, String[]>() {{
                                                        put("hic", new String[]{{
                                                            add("cumque"),
                                                        }});
                                                        put("soluta", new String[]{{
                                                            add("et"),
                                                            add("saepe"),
                                                            add("ipsum"),
                                                        }});
                                                        put("veritatis", new String[]{{
                                                            add("quos"),
                                                            add("tempore"),
                                                            add("cupiditate"),
                                                        }});
                                                    }};
                                                    scheduleExpression = "aperiam";
                                                    scheduleOffset = 961937L;
                                                    syncCompliance = AssociationSyncComplianceEnum.AUTO;
                                                    targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("adipisci"),
                                                                add("dolorum"),
                                                            }};
                                                            executionRoleName = "architecto";
                                                            regions = new String[]{{
                                                                add("aut"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("dignissimos") {{
                                                                                    name = "Karl Feeney";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("doloribus") {{
                                                                        name = "William Ortiz";
                                                                    }}),
                                                                    add(new Alarm("odio") {{
                                                                        name = "Olivia McGlynn IV";
                                                                    }}),
                                                                    add(new Alarm("quis") {{
                                                                        name = "Jan Schaefer";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "hic";
                                                            targetLocationMaxErrors = "distinctio";
                                                        }}),
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("odio"),
                                                                add("similique"),
                                                                add("facilis"),
                                                                add("vero"),
                                                            }};
                                                            executionRoleName = "ducimus";
                                                            regions = new String[]{{
                                                                add("quibusdam"),
                                                                add("illum"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("ducimus") {{
                                                                                    name = "Elijah Wyman";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("nulla") {{
                                                                        name = "Edmund Ankunding";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "alias";
                                                            targetLocationMaxErrors = "officia";
                                                        }}),
                                                    }};
                                                    targetMaps = new java.util.HashMap<String, String[]>[]{{
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("ea", new String[]{{
                                                                add("vel"),
                                                            }});
                                                            put("possimus", new String[]{{
                                                                add("ratione"),
                                                                add("ex"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("dicta", new String[]{{
                                                                add("maiores"),
                                                            }});
                                                            put("quasi", new String[]{{
                                                                add("nulla"),
                                                                add("excepturi"),
                                                            }});
                                                            put("voluptatibus", new String[]{{
                                                                add("sapiente"),
                                                                add("quisquam"),
                                                            }});
                                                        }}),
                                                    }};
                                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target() {{
                                                            key = "ea";
                                                            values = new String[]{{
                                                                add("corporis"),
                                                                add("veniam"),
                                                                add("aliquid"),
                                                                add("inventore"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "magnam";
                                                            values = new String[]{{
                                                                add("quo"),
                                                                add("consectetur"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "recusandae";
                                                            values = new String[]{{
                                                                add("minima"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "eaque";
                                                            values = new String[]{{
                                                                add("libero"),
                                                                add("aut"),
                                                                add("aut"),
                                                                add("deleniti"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new CreateAssociationBatchRequestEntry("aut") {{
                                                    alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                        add(new Alarm("explicabo") {{
                                                                            name = "Mrs. Shane Reinger";
                                                                        }}),
                                                                        add(new Alarm("eius") {{
                                                                            name = "Jose Kreiger";
                                                                        }}),
                                                                        add(new Alarm("quidem") {{
                                                                            name = "Tamara Leffler";
                                                                        }}),
                                                                        add(new Alarm("eos") {{
                                                                            name = "Bernard Kerluke";
                                                                        }}),
                                                                    }}) {{
                                                        alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("laborum") {{
                                                                name = "Eloise Block MD";
                                                            }}),
                                                            add(new Alarm("quas") {{
                                                                name = "Lee Kemmer";
                                                            }}),
                                                        }};
                                                        ignorePollAlarmFailure = false;
                                                    }};
                                                    applyOnlyAtCronInterval = false;
                                                    associationName = "praesentium";
                                                    automationTargetParameterName = "quisquam";
                                                    calendarNames = new String[]{{
                                                        add("ipsa"),
                                                    }};
                                                    complianceSeverity = AssociationComplianceSeverityEnum.LOW;
                                                    documentVersion = "quidem";
                                                    instanceId = "neque";
                                                    maxConcurrency = "quo";
                                                    maxErrors = "illum";
                                                    name = "Wilbur Gerlach";
                                                    outputLocation = new InstanceAssociationOutputLocation() {{
                                                        s3Location = new S3OutputLocation() {{
                                                            outputS3BucketName = "ab";
                                                            outputS3KeyPrefix = "cupiditate";
                                                            outputS3Region = "consequatur";
                                                        }};
                                                    }};
                                                    parameters = new java.util.HashMap<String, String[]>() {{
                                                        put("debitis", new String[]{{
                                                            add("aspernatur"),
                                                            add("sequi"),
                                                        }});
                                                        put("quo", new String[]{{
                                                            add("recusandae"),
                                                            add("aperiam"),
                                                        }});
                                                    }};
                                                    scheduleExpression = "distinctio";
                                                    scheduleOffset = 799796L;
                                                    syncCompliance = AssociationSyncComplianceEnum.AUTO;
                                                    targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("totam"),
                                                                add("accusamus"),
                                                            }};
                                                            executionRoleName = "aliquam";
                                                            regions = new String[]{{
                                                                add("occaecati"),
                                                                add("commodi"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("quod") {{
                                                                                    name = "Tamara Vandervort IV";
                                                                                }}),
                                                                                add(new Alarm("harum") {{
                                                                                    name = "Dr. Ignacio Jacobi";
                                                                                }}),
                                                                                add(new Alarm("eligendi") {{
                                                                                    name = "Luz McClure";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("quas") {{
                                                                        name = "Miss Rosie Krajcik";
                                                                    }}),
                                                                    add(new Alarm("mollitia") {{
                                                                        name = "Eugene Leuschke";
                                                                    }}),
                                                                    add(new Alarm("fugit") {{
                                                                        name = "Leah Champlin";
                                                                    }}),
                                                                    add(new Alarm("occaecati") {{
                                                                        name = "Eugene Dibbert";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "sit";
                                                            targetLocationMaxErrors = "culpa";
                                                        }}),
                                                    }};
                                                    targetMaps = new java.util.HashMap<String, String[]>[]{{
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("cumque", new String[]{{
                                                                add("consequatur"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("quaerat", new String[]{{
                                                                add("consectetur"),
                                                                add("esse"),
                                                                add("blanditiis"),
                                                                add("provident"),
                                                            }});
                                                            put("a", new String[]{{
                                                                add("quas"),
                                                                add("esse"),
                                                                add("quasi"),
                                                                add("a"),
                                                            }});
                                                            put("error", new String[]{{
                                                                add("pariatur"),
                                                                add("possimus"),
                                                                add("quia"),
                                                            }});
                                                            put("eveniet", new String[]{{
                                                                add("facere"),
                                                                add("veritatis"),
                                                                add("consequuntur"),
                                                                add("quasi"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("culpa", new String[]{{
                                                                add("tenetur"),
                                                                add("quae"),
                                                            }});
                                                            put("earum", new String[]{{
                                                                add("in"),
                                                                add("eius"),
                                                            }});
                                                            put("libero", new String[]{{
                                                                add("soluta"),
                                                                add("accusantium"),
                                                                add("aliquam"),
                                                                add("sapiente"),
                                                            }});
                                                        }}),
                                                    }};
                                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target() {{
                                                            key = "ullam";
                                                            values = new String[]{{
                                                                add("ullam"),
                                                                add("nisi"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }});, CreateAssociationBatchXAmzTargetEnum.AMAZON_SSM_CREATE_ASSOCIATION_BATCH) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quibusdam";
                xAmzDate = "ex";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateAssociationBatchResponse res = sdk.sdk.createAssociationBatch(req);

            if (res.createAssociationBatchResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDocument

Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentResponse;
import org.openapis.openapi.models.operations.CreateDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachmentsSource;
import org.openapis.openapi.models.shared.AttachmentsSourceKeyEnum;
import org.openapis.openapi.models.shared.CreateDocumentRequest;
import org.openapis.openapi.models.shared.DocumentFormatEnum;
import org.openapis.openapi.models.shared.DocumentRequires;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDocumentRequest req = new CreateDocumentRequest(                new CreateDocumentRequest("omnis", "tenetur") {{
                                attachments = new org.openapis.openapi.models.shared.AttachmentsSource[]{{
                                    add(new AttachmentsSource() {{
                                        key = AttachmentsSourceKeyEnum.ATTACHMENT_REFERENCE;
                                        name = "Allison Bednar I";
                                        values = new String[]{{
                                            add("iste"),
                                        }};
                                    }}),
                                }};
                                displayName = "temporibus";
                                documentFormat = DocumentFormatEnum.YAML;
                                documentType = DocumentTypeEnum.DEPLOYMENT_STRATEGY;
                                requires = new org.openapis.openapi.models.shared.DocumentRequires[]{{
                                    add(new DocumentRequires("numquam") {{
                                        name = "Ms. Duane O'Conner";
                                        requireType = "voluptatem";
                                        version = "dolor";
                                        versionName = "occaecati";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("aut", "dignissimos") {{
                                        key = "explicabo";
                                        value = "voluptas";
                                    }}),
                                    add(new Tag("natus", "velit") {{
                                        key = "dicta";
                                        value = "maiores";
                                    }}),
                                    add(new Tag("asperiores", "aperiam") {{
                                        key = "voluptatibus";
                                        value = "voluptas";
                                    }}),
                                    add(new Tag("consequuntur", "repellendus") {{
                                        key = "ea";
                                        value = "quaerat";
                                    }}),
                                }};
                                targetType = "officia";
                                versionName = "maxime";
                            }};, CreateDocumentXAmzTargetEnum.AMAZON_SSM_CREATE_DOCUMENT) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "officia";
                xAmzCredential = "asperiores";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quae";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "porro";
            }};            

            CreateDocumentResponse res = sdk.sdk.createDocument(req);

            if (res.createDocumentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMaintenanceWindow

<p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.CreateMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.CreateMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMaintenanceWindowRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMaintenanceWindowRequest req = new CreateMaintenanceWindowRequest(                new CreateMaintenanceWindowRequest(false, 288398L, 70447L, "adipisci", "fuga") {{
                                clientToken = "id";
                                description = "suscipit";
                                endDate = "velit";
                                scheduleOffset = 633931L;
                                scheduleTimezone = "est";
                                startDate = "recusandae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ducimus", "quos") {{
                                        key = "fugiat";
                                        value = "vel";
                                    }}),
                                    add(new Tag("possimus", "facilis") {{
                                        key = "vel";
                                        value = "labore";
                                    }}),
                                    add(new Tag("in", "corporis") {{
                                        key = "cum";
                                        value = "commodi";
                                    }}),
                                }};
                            }};, CreateMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_CREATE_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nemo";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "cum";
            }};            

            CreateMaintenanceWindowResponse res = sdk.sdk.createMaintenanceWindow(req);

            if (res.createMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOpsItem

<p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOpsItemRequest;
import org.openapis.openapi.models.operations.CreateOpsItemResponse;
import org.openapis.openapi.models.operations.CreateOpsItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateOpsItemRequest;
import org.openapis.openapi.models.shared.OpsItemDataTypeEnum;
import org.openapis.openapi.models.shared.OpsItemDataValue;
import org.openapis.openapi.models.shared.OpsItemNotification;
import org.openapis.openapi.models.shared.RelatedOpsItem;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOpsItemRequest req = new CreateOpsItemRequest(                new CreateOpsItemRequest("in", "exercitationem", "earum") {{
                                accountId = "facere";
                                actualEndTime = OffsetDateTime.parse("2022-01-06T07:05:42.236Z");
                                actualStartTime = OffsetDateTime.parse("2022-01-12T07:48:28.322Z");
                                category = "quidem";
                                notifications = new org.openapis.openapi.models.shared.OpsItemNotification[]{{
                                    add(new OpsItemNotification() {{
                                        arn = "necessitatibus";
                                    }}),
                                    add(new OpsItemNotification() {{
                                        arn = "dolore";
                                    }}),
                                    add(new OpsItemNotification() {{
                                        arn = "sunt";
                                    }}),
                                    add(new OpsItemNotification() {{
                                        arn = "asperiores";
                                    }}),
                                }};
                                operationalData = new java.util.HashMap<String, org.openapis.openapi.models.shared.OpsItemDataValue>() {{
                                    put("non", new OpsItemDataValue() {{
                                        type = OpsItemDataTypeEnum.SEARCHABLE_STRING;
                                        value = "beatae";
                                    }});
                                }};
                                opsItemType = "dignissimos";
                                plannedEndTime = OffsetDateTime.parse("2020-04-29T18:47:01.945Z");
                                plannedStartTime = OffsetDateTime.parse("2022-08-23T06:58:42.024Z");
                                priority = 689768L;
                                relatedOpsItems = new org.openapis.openapi.models.shared.RelatedOpsItem[]{{
                                    add(new RelatedOpsItem("voluptates") {{
                                        opsItemId = "ipsa";
                                    }}),
                                    add(new RelatedOpsItem("vitae") {{
                                        opsItemId = "libero";
                                    }}),
                                }};
                                severity = "accusamus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("voluptas", "voluptas") {{
                                        key = "tempora";
                                        value = "aspernatur";
                                    }}),
                                    add(new Tag("nobis", "dolorum") {{
                                        key = "voluptas";
                                        value = "minima";
                                    }}),
                                    add(new Tag("dolores", "blanditiis") {{
                                        key = "adipisci";
                                        value = "minus";
                                    }}),
                                }};
                            }};, CreateOpsItemXAmzTargetEnum.AMAZON_SSM_CREATE_OPS_ITEM) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "aliquam";
                xAmzDate = "officiis";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "adipisci";
            }};            

            CreateOpsItemResponse res = sdk.sdk.createOpsItem(req);

            if (res.createOpsItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOpsMetadata

If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOpsMetadataRequest;
import org.openapis.openapi.models.operations.CreateOpsMetadataResponse;
import org.openapis.openapi.models.operations.CreateOpsMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateOpsMetadataRequest;
import org.openapis.openapi.models.shared.MetadataValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOpsMetadataRequest req = new CreateOpsMetadataRequest(                new CreateOpsMetadataRequest("blanditiis") {{
                                metadata = new java.util.HashMap<String, org.openapis.openapi.models.shared.MetadataValue>() {{
                                    put("hic", new MetadataValue() {{
                                        value = "nesciunt";
                                    }});
                                    put("culpa", new MetadataValue() {{
                                        value = "corrupti";
                                    }});
                                    put("pariatur", new MetadataValue() {{
                                        value = "totam";
                                    }});
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sit", "rerum") {{
                                        key = "exercitationem";
                                        value = "nobis";
                                    }}),
                                    add(new Tag("explicabo", "asperiores") {{
                                        key = "sed";
                                        value = "reiciendis";
                                    }}),
                                    add(new Tag("expedita", "ab") {{
                                        key = "facilis";
                                        value = "voluptate";
                                    }}),
                                    add(new Tag("laborum", "sed") {{
                                        key = "iste";
                                        value = "dolore";
                                    }}),
                                }};
                            }};, CreateOpsMetadataXAmzTargetEnum.AMAZON_SSM_CREATE_OPS_METADATA) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quidem";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateOpsMetadataResponse res = sdk.sdk.createOpsMetadata(req);

            if (res.createOpsMetadataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPatchBaseline

<p>Creates a patch baseline.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePatchBaselineRequest;
import org.openapis.openapi.models.operations.CreatePatchBaselineResponse;
import org.openapis.openapi.models.operations.CreatePatchBaselineXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePatchBaselineRequest;
import org.openapis.openapi.models.shared.OperatingSystemEnum;
import org.openapis.openapi.models.shared.PatchActionEnum;
import org.openapis.openapi.models.shared.PatchComplianceLevelEnum;
import org.openapis.openapi.models.shared.PatchFilter;
import org.openapis.openapi.models.shared.PatchFilterGroup;
import org.openapis.openapi.models.shared.PatchFilterKeyEnum;
import org.openapis.openapi.models.shared.PatchRule;
import org.openapis.openapi.models.shared.PatchRuleGroup;
import org.openapis.openapi.models.shared.PatchSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePatchBaselineRequest req = new CreatePatchBaselineRequest(                new CreatePatchBaselineRequest("sapiente") {{
                                approvalRules = new PatchRuleGroup(                new org.openapis.openapi.models.shared.PatchRule[]{{
                                                    add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.CLASSIFICATION,                 new String[]{{
                                                                                                            add("dolorum"),
                                                                                                            add("corrupti"),
                                                                                                            add("accusamus"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.PATCH_ID;
                                                                                            values = new String[]{{
                                                                                                add("expedita"),
                                                                                                add("debitis"),
                                                                                                add("neque"),
                                                                                                add("dolorum"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.ARCH,                 new String[]{{
                                                                                                            add("expedita"),
                                                                                                            add("magnam"),
                                                                                                            add("consequatur"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.PRODUCT_FAMILY;
                                                                                            values = new String[]{{
                                                                                                add("fugit"),
                                                                                                add("ut"),
                                                                                                add("fugiat"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.NAME,                 new String[]{{
                                                                                                            add("corporis"),
                                                                                                            add("et"),
                                                                                                            add("blanditiis"),
                                                                                                            add("ex"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.EPOCH;
                                                                                            values = new String[]{{
                                                                                                add("sit"),
                                                                                                add("voluptatum"),
                                                                                            }};
                                                                                        }}),
                                                                                    }});) {{
                                                        approveAfterDays = 72434L;
                                                        approveUntilDate = "reiciendis";
                                                        complianceLevel = PatchComplianceLevelEnum.CRITICAL;
                                                        enableNonSecurity = false;
                                                        patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                            add(new PatchFilter(PatchFilterKeyEnum.SECURITY,                 new String[]{{
                                                                                                add("veniam"),
                                                                                                add("in"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.CLASSIFICATION;
                                                                                values = new String[]{{
                                                                                    add("reiciendis"),
                                                                                    add("nulla"),
                                                                                    add("magni"),
                                                                                    add("aperiam"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.CLASSIFICATION,                 new String[]{{
                                                                                                add("cum"),
                                                                                                add("laboriosam"),
                                                                                                add("dolorum"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.SEVERITY;
                                                                                values = new String[]{{
                                                                                    add("laudantium"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                add(new PatchFilter(PatchFilterKeyEnum.PRODUCT,                 new String[]{{
                                                                                    add("ipsum"),
                                                                                    add("ea"),
                                                                                    add("occaecati"),
                                                                                    add("quos"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.VERSION;
                                                                    values = new String[]{{
                                                                        add("sed"),
                                                                        add("provident"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.VERSION,                 new String[]{{
                                                                                    add("sit"),
                                                                                    add("non"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.VERSION;
                                                                    values = new String[]{{
                                                                        add("tempora"),
                                                                        add("voluptate"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.CVE_ID,                 new String[]{{
                                                                                    add("rem"),
                                                                                    add("sit"),
                                                                                    add("nobis"),
                                                                                    add("error"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.SEVERITY;
                                                                    values = new String[]{{
                                                                        add("facilis"),
                                                                        add("quaerat"),
                                                                        add("incidunt"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.PATCH_ID,                 new String[]{{
                                                                                                            add("aspernatur"),
                                                                                                            add("ex"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.NAME;
                                                                                            values = new String[]{{
                                                                                                add("officiis"),
                                                                                                add("officiis"),
                                                                                                add("accusamus"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.CVE_ID,                 new String[]{{
                                                                                                            add("atque"),
                                                                                                            add("atque"),
                                                                                                            add("sunt"),
                                                                                                            add("recusandae"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.VERSION;
                                                                                            values = new String[]{{
                                                                                                add("at"),
                                                                                                add("error"),
                                                                                                add("blanditiis"),
                                                                                            }};
                                                                                        }}),
                                                                                    }});) {{
                                                        approveAfterDays = 153627L;
                                                        approveUntilDate = "sit";
                                                        complianceLevel = PatchComplianceLevelEnum.MEDIUM;
                                                        enableNonSecurity = false;
                                                        patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                            add(new PatchFilter(PatchFilterKeyEnum.VERSION,                 new String[]{{
                                                                                                add("perferendis"),
                                                                                                add("est"),
                                                                                                add("quidem"),
                                                                                                add("reprehenderit"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.EPOCH;
                                                                                values = new String[]{{
                                                                                    add("reiciendis"),
                                                                                    add("provident"),
                                                                                    add("repellendus"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.ARCH,                 new String[]{{
                                                                                                add("repudiandae"),
                                                                                                add("quasi"),
                                                                                                add("atque"),
                                                                                                add("reprehenderit"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.RELEASE;
                                                                                values = new String[]{{
                                                                                    add("praesentium"),
                                                                                    add("mollitia"),
                                                                                    add("veniam"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.ADVISORY_ID,                 new String[]{{
                                                                                                add("amet"),
                                                                                                add("assumenda"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.VERSION;
                                                                                values = new String[]{{
                                                                                    add("suscipit"),
                                                                                    add("quidem"),
                                                                                    add("maxime"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                add(new PatchFilter(PatchFilterKeyEnum.PATCH_SET,                 new String[]{{
                                                                                    add("dicta"),
                                                                                    add("architecto"),
                                                                                    add("occaecati"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.SECURITY;
                                                                    values = new String[]{{
                                                                        add("consequatur"),
                                                                        add("incidunt"),
                                                                        add("reiciendis"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.VERSION,                 new String[]{{
                                                                                    add("alias"),
                                                                                    add("amet"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.PRODUCT_FAMILY;
                                                                    values = new String[]{{
                                                                        add("atque"),
                                                                        add("laborum"),
                                                                        add("nam"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.SECTION,                 new String[]{{
                                                                                                            add("alias"),
                                                                                                            add("maiores"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.CLASSIFICATION;
                                                                                            values = new String[]{{
                                                                                                add("alias"),
                                                                                                add("corporis"),
                                                                                                add("perspiciatis"),
                                                                                                add("nihil"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.CLASSIFICATION,                 new String[]{{
                                                                                                            add("dolorum"),
                                                                                                            add("nesciunt"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.VERSION;
                                                                                            values = new String[]{{
                                                                                                add("id"),
                                                                                            }};
                                                                                        }}),
                                                                                    }});) {{
                                                        approveAfterDays = 680697L;
                                                        approveUntilDate = "repellendus";
                                                        complianceLevel = PatchComplianceLevelEnum.HIGH;
                                                        enableNonSecurity = false;
                                                        patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                            add(new PatchFilter(PatchFilterKeyEnum.PATCH_SET,                 new String[]{{
                                                                                                add("distinctio"),
                                                                                                add("voluptatum"),
                                                                                                add("rem"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.MSRC_SEVERITY;
                                                                                values = new String[]{{
                                                                                    add("qui"),
                                                                                    add("cum"),
                                                                                    add("iure"),
                                                                                    add("necessitatibus"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                add(new PatchFilter(PatchFilterKeyEnum.CLASSIFICATION,                 new String[]{{
                                                                                    add("velit"),
                                                                                    add("a"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.ARCH;
                                                                    values = new String[]{{
                                                                        add("dicta"),
                                                                        add("accusantium"),
                                                                        add("beatae"),
                                                                        add("dolores"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.PATCH_ID,                 new String[]{{
                                                                                    add("perspiciatis"),
                                                                                    add("in"),
                                                                                    add("adipisci"),
                                                                                    add("eveniet"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.NAME;
                                                                    values = new String[]{{
                                                                        add("saepe"),
                                                                        add("consequuntur"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.SECTION,                 new String[]{{
                                                                                    add("reprehenderit"),
                                                                                    add("error"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.PATCH_ID;
                                                                    values = new String[]{{
                                                                        add("fugit"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.PRODUCT,                 new String[]{{
                                                                                    add("doloremque"),
                                                                                    add("iure"),
                                                                                    add("ipsa"),
                                                                                    add("totam"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.ADVISORY_ID;
                                                                    values = new String[]{{
                                                                        add("quidem"),
                                                                        add("eveniet"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.SECURITY,                 new String[]{{
                                                                                                            add("laborum"),
                                                                                                            add("placeat"),
                                                                                                            add("modi"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.VERSION;
                                                                                            values = new String[]{{
                                                                                                add("in"),
                                                                                                add("nam"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.BUGZILLA_ID,                 new String[]{{
                                                                                                            add("tempora"),
                                                                                                            add("quis"),
                                                                                                            add("inventore"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.VERSION;
                                                                                            values = new String[]{{
                                                                                                add("officiis"),
                                                                                                add("sapiente"),
                                                                                                add("cumque"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.EPOCH,                 new String[]{{
                                                                                                            add("rem"),
                                                                                                            add("at"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.BUGZILLA_ID;
                                                                                            values = new String[]{{
                                                                                                add("quae"),
                                                                                                add("perferendis"),
                                                                                                add("velit"),
                                                                                                add("aspernatur"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.EPOCH,                 new String[]{{
                                                                                                            add("minima"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.REPOSITORY;
                                                                                            values = new String[]{{
                                                                                                add("sapiente"),
                                                                                            }};
                                                                                        }}),
                                                                                    }});) {{
                                                        approveAfterDays = 63207L;
                                                        approveUntilDate = "recusandae";
                                                        complianceLevel = PatchComplianceLevelEnum.LOW;
                                                        enableNonSecurity = false;
                                                        patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                            add(new PatchFilter(PatchFilterKeyEnum.RELEASE,                 new String[]{{
                                                                                                add("ex"),
                                                                                                add("aliquid"),
                                                                                                add("accusantium"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.SECTION;
                                                                                values = new String[]{{
                                                                                    add("mollitia"),
                                                                                    add("provident"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                add(new PatchFilter(PatchFilterKeyEnum.PRODUCT,                 new String[]{{
                                                                                    add("laudantium"),
                                                                                    add("eum"),
                                                                                    add("nemo"),
                                                                                    add("recusandae"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.MSRC_SEVERITY;
                                                                    values = new String[]{{
                                                                        add("ut"),
                                                                        add("culpa"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.PATCH_ID,                 new String[]{{
                                                                                    add("ullam"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.EPOCH;
                                                                    values = new String[]{{
                                                                        add("quis"),
                                                                        add("eum"),
                                                                        add("reiciendis"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                    }}),
                                                }});;
                                approvedPatches = new String[]{{
                                    add("cupiditate"),
                                }};
                                approvedPatchesComplianceLevel = PatchComplianceLevelEnum.LOW;
                                approvedPatchesEnableNonSecurity = false;
                                clientToken = "earum";
                                description = "soluta";
                                globalFilters = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                    add(new PatchFilter(PatchFilterKeyEnum.PATCH_ID,                 new String[]{{
                                                                        add("debitis"),
                                                                        add("aliquid"),
                                                                        add("porro"),
                                                                        add("suscipit"),
                                                                    }}) {{
                                                        key = PatchFilterKeyEnum.SEVERITY;
                                                        values = new String[]{{
                                                            add("earum"),
                                                        }};
                                                    }}),
                                                    add(new PatchFilter(PatchFilterKeyEnum.PRIORITY,                 new String[]{{
                                                                        add("animi"),
                                                                    }}) {{
                                                        key = PatchFilterKeyEnum.PRODUCT;
                                                        values = new String[]{{
                                                            add("cumque"),
                                                        }};
                                                    }}),
                                                    add(new PatchFilter(PatchFilterKeyEnum.PATCH_ID,                 new String[]{{
                                                                        add("suscipit"),
                                                                        add("adipisci"),
                                                                        add("quasi"),
                                                                    }}) {{
                                                        key = PatchFilterKeyEnum.SECURITY;
                                                        values = new String[]{{
                                                            add("consequatur"),
                                                            add("quasi"),
                                                            add("et"),
                                                            add("ducimus"),
                                                        }};
                                                    }}),
                                                    add(new PatchFilter(PatchFilterKeyEnum.EPOCH,                 new String[]{{
                                                                        add("dicta"),
                                                                        add("iusto"),
                                                                    }}) {{
                                                        key = PatchFilterKeyEnum.PATCH_SET;
                                                        values = new String[]{{
                                                            add("nulla"),
                                                            add("necessitatibus"),
                                                            add("ipsa"),
                                                            add("tempora"),
                                                        }};
                                                    }}),
                                                }});;
                                operatingSystem = OperatingSystemEnum.SUSE;
                                rejectedPatches = new String[]{{
                                    add("maiores"),
                                    add("reiciendis"),
                                    add("vel"),
                                }};
                                rejectedPatchesAction = PatchActionEnum.ALLOW_AS_DEPENDENCY;
                                sources = new org.openapis.openapi.models.shared.PatchSource[]{{
                                    add(new PatchSource("ipsa", "laborum",                 new String[]{{
                                                        add("nostrum"),
                                                    }}) {{
                                        configuration = "doloremque";
                                        name = "Glenda Goldner";
                                        products = new String[]{{
                                            add("aliquid"),
                                        }};
                                    }}),
                                    add(new PatchSource("voluptas", "iste",                 new String[]{{
                                                        add("ab"),
                                                        add("error"),
                                                        add("possimus"),
                                                    }}) {{
                                        configuration = "fugiat";
                                        name = "Gene Nikolaus";
                                        products = new String[]{{
                                            add("eum"),
                                        }};
                                    }}),
                                    add(new PatchSource("ex", "quo",                 new String[]{{
                                                        add("ut"),
                                                        add("ad"),
                                                    }}) {{
                                        configuration = "voluptates";
                                        name = "Cameron Reinger";
                                        products = new String[]{{
                                            add("vitae"),
                                            add("repellendus"),
                                        }};
                                    }}),
                                    add(new PatchSource("culpa", "voluptatem",                 new String[]{{
                                                        add("officiis"),
                                                        add("architecto"),
                                                        add("fuga"),
                                                        add("pariatur"),
                                                    }}) {{
                                        configuration = "expedita";
                                        name = "Leona Rippin IV";
                                        products = new String[]{{
                                            add("veritatis"),
                                            add("rerum"),
                                            add("est"),
                                        }};
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deleniti", "earum") {{
                                        key = "voluptatem";
                                        value = "alias";
                                    }}),
                                    add(new Tag("rem", "minus") {{
                                        key = "ex";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag("ratione", "ullam") {{
                                        key = "nemo";
                                        value = "asperiores";
                                    }}),
                                    add(new Tag("totam", "impedit") {{
                                        key = "perferendis";
                                        value = "illum";
                                    }}),
                                }};
                            }};, CreatePatchBaselineXAmzTargetEnum.AMAZON_SSM_CREATE_PATCH_BASELINE) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "ipsam";
                xAmzDate = "culpa";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "inventore";
            }};            

            CreatePatchBaselineResponse res = sdk.sdk.createPatchBaseline(req);

            if (res.createPatchBaselineResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResourceDataSync

<p>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResourceDataSyncRequest;
import org.openapis.openapi.models.operations.CreateResourceDataSyncResponse;
import org.openapis.openapi.models.operations.CreateResourceDataSyncXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateResourceDataSyncRequest;
import org.openapis.openapi.models.shared.ResourceDataSyncAwsOrganizationsSource;
import org.openapis.openapi.models.shared.ResourceDataSyncDestinationDataSharing;
import org.openapis.openapi.models.shared.ResourceDataSyncOrganizationalUnit;
import org.openapis.openapi.models.shared.ResourceDataSyncS3Destination;
import org.openapis.openapi.models.shared.ResourceDataSyncS3FormatEnum;
import org.openapis.openapi.models.shared.ResourceDataSyncSource;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResourceDataSyncRequest req = new CreateResourceDataSyncRequest(                new CreateResourceDataSyncRequest("veritatis") {{
                                s3Destination = new ResourceDataSyncS3Destination("tempora", "dolor", ResourceDataSyncS3FormatEnum.JSON_SER_DE) {{
                                    awskmsKeyARN = "consequatur";
                                    destinationDataSharing = new ResourceDataSyncDestinationDataSharing() {{
                                        destinationDataSharingType = "architecto";
                                    }};;
                                    prefix = "sit";
                                }};;
                                syncSource = new ResourceDataSyncSource(                new String[]{{
                                                    add("fugit"),
                                                    add("ab"),
                                                }}, "laudantium") {{
                                    awsOrganizationsSource = new ResourceDataSyncAwsOrganizationsSource("quae") {{
                                        organizationalUnits = new org.openapis.openapi.models.shared.ResourceDataSyncOrganizationalUnit[]{{
                                            add(new ResourceDataSyncOrganizationalUnit() {{
                                                organizationalUnitId = "fugiat";
                                            }}),
                                        }};
                                    }};;
                                    enableAllOpsDataSources = false;
                                    includeFutureRegions = false;
                                }};;
                                syncType = "ipsam";
                            }};, CreateResourceDataSyncXAmzTargetEnum.AMAZON_SSM_CREATE_RESOURCE_DATA_SYNC) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "quas";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "esse";
            }};            

            CreateResourceDataSyncResponse res = sdk.sdk.createResourceDataSync(req);

            if (res.createResourceDataSyncResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteActivation

Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteActivationRequest;
import org.openapis.openapi.models.operations.DeleteActivationResponse;
import org.openapis.openapi.models.operations.DeleteActivationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteActivationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteActivationRequest req = new DeleteActivationRequest(                new DeleteActivationRequest("sed");, DeleteActivationXAmzTargetEnum.AMAZON_SSM_DELETE_ACTIVATION) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "expedita";
                xAmzDate = "eum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "magnam";
            }};            

            DeleteActivationResponse res = sdk.sdk.deleteActivation(req);

            if (res.deleteActivationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssociation

<p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the <code>Targets</code> parameter, then you must delete the association by using the association ID.</p> <p>When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssociationRequest;
import org.openapis.openapi.models.operations.DeleteAssociationResponse;
import org.openapis.openapi.models.operations.DeleteAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAssociationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssociationRequest req = new DeleteAssociationRequest(                new DeleteAssociationRequest() {{
                                associationId = "ab";
                                instanceId = "porro";
                                name = "Della Howell";
                            }};, DeleteAssociationXAmzTargetEnum.AMAZON_SSM_DELETE_ASSOCIATION) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "necessitatibus";
                xAmzDate = "quasi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "at";
                xAmzSignedHeaders = "vero";
            }};            

            DeleteAssociationResponse res = sdk.sdk.deleteAssociation(req);

            if (res.deleteAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDocument

<p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocumentRequest;
import org.openapis.openapi.models.operations.DeleteDocumentResponse;
import org.openapis.openapi.models.operations.DeleteDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDocumentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDocumentRequest req = new DeleteDocumentRequest(                new DeleteDocumentRequest("harum") {{
                                documentVersion = "sequi";
                                force = false;
                                versionName = "doloribus";
                            }};, DeleteDocumentXAmzTargetEnum.AMAZON_SSM_DELETE_DOCUMENT) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "optio";
                xAmzCredential = "occaecati";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "officia";
            }};            

            DeleteDocumentResponse res = sdk.sdk.deleteDocument(req);

            if (res.deleteDocumentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInventory

Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInventoryRequest;
import org.openapis.openapi.models.operations.DeleteInventoryResponse;
import org.openapis.openapi.models.operations.DeleteInventoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInventoryRequest;
import org.openapis.openapi.models.shared.InventorySchemaDeleteOptionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInventoryRequest req = new DeleteInventoryRequest(                new DeleteInventoryRequest("numquam") {{
                                clientToken = "nemo";
                                dryRun = false;
                                schemaDeleteOption = InventorySchemaDeleteOptionEnum.DELETE_SCHEMA;
                            }};, DeleteInventoryXAmzTargetEnum.AMAZON_SSM_DELETE_INVENTORY) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ducimus";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "incidunt";
            }};            

            DeleteInventoryResponse res = sdk.sdk.deleteInventory(req);

            if (res.deleteInventoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMaintenanceWindow

Deletes a maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.DeleteMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.DeleteMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMaintenanceWindowRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMaintenanceWindowRequest req = new DeleteMaintenanceWindowRequest(                new DeleteMaintenanceWindowRequest("rem");, DeleteMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_DELETE_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nisi";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DeleteMaintenanceWindowResponse res = sdk.sdk.deleteMaintenanceWindow(req);

            if (res.deleteMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOpsMetadata

Delete OpsMetadata related to an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOpsMetadataRequest;
import org.openapis.openapi.models.operations.DeleteOpsMetadataResponse;
import org.openapis.openapi.models.operations.DeleteOpsMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteOpsMetadataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOpsMetadataRequest req = new DeleteOpsMetadataRequest(                new DeleteOpsMetadataRequest("soluta");, DeleteOpsMetadataXAmzTargetEnum.AMAZON_SSM_DELETE_OPS_METADATA) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "eos";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "iste";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "inventore";
            }};            

            DeleteOpsMetadataResponse res = sdk.sdk.deleteOpsMetadata(req);

            if (res.deleteOpsMetadataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteParameter

Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteParameterRequest;
import org.openapis.openapi.models.operations.DeleteParameterResponse;
import org.openapis.openapi.models.operations.DeleteParameterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteParameterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteParameterRequest req = new DeleteParameterRequest(                new DeleteParameterRequest("accusamus");, DeleteParameterXAmzTargetEnum.AMAZON_SSM_DELETE_PARAMETER) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "omnis";
                xAmzDate = "delectus";
                xAmzSecurityToken = "minima";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "maxime";
            }};            

            DeleteParameterResponse res = sdk.sdk.deleteParameter(req);

            if (res.deleteParameterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteParameters

Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteParametersRequest;
import org.openapis.openapi.models.operations.DeleteParametersResponse;
import org.openapis.openapi.models.operations.DeleteParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteParametersRequest req = new DeleteParametersRequest(                new DeleteParametersRequest(                new String[]{{
                                                add("quos"),
                                                add("commodi"),
                                                add("itaque"),
                                                add("commodi"),
                                            }});, DeleteParametersXAmzTargetEnum.AMAZON_SSM_DELETE_PARAMETERS) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "nam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteParametersResponse res = sdk.sdk.deleteParameters(req);

            if (res.deleteParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePatchBaseline

Deletes a patch baseline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePatchBaselineRequest;
import org.openapis.openapi.models.operations.DeletePatchBaselineResponse;
import org.openapis.openapi.models.operations.DeletePatchBaselineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePatchBaselineRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePatchBaselineRequest req = new DeletePatchBaselineRequest(                new DeletePatchBaselineRequest("alias");, DeletePatchBaselineXAmzTargetEnum.AMAZON_SSM_DELETE_PATCH_BASELINE) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "non";
                xAmzCredential = "maiores";
                xAmzDate = "enim";
                xAmzSecurityToken = "sint";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "deserunt";
            }};            

            DeletePatchBaselineResponse res = sdk.sdk.deletePatchBaseline(req);

            if (res.deletePatchBaselineResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourceDataSync

Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceDataSyncRequest;
import org.openapis.openapi.models.operations.DeleteResourceDataSyncResponse;
import org.openapis.openapi.models.operations.DeleteResourceDataSyncXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourceDataSyncRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceDataSyncRequest req = new DeleteResourceDataSyncRequest(                new DeleteResourceDataSyncRequest("nemo") {{
                                syncType = "reprehenderit";
                            }};, DeleteResourceDataSyncXAmzTargetEnum.AMAZON_SSM_DELETE_RESOURCE_DATA_SYNC) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quis";
                xAmzCredential = "sint";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DeleteResourceDataSyncResponse res = sdk.sdk.deleteResourceDataSync(req);

            if (res.deleteResourceDataSyncResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.operations.DeleteResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequest("ex", "voluptas", "debitis");, DeleteResourcePolicyXAmzTargetEnum.AMAZON_SSM_DELETE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quae";
                xAmzCredential = "minus";
                xAmzDate = "fuga";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "velit";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterManagedInstance

Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterManagedInstanceRequest;
import org.openapis.openapi.models.operations.DeregisterManagedInstanceResponse;
import org.openapis.openapi.models.operations.DeregisterManagedInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterManagedInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterManagedInstanceRequest req = new DeregisterManagedInstanceRequest(                new DeregisterManagedInstanceRequest("ipsum");, DeregisterManagedInstanceXAmzTargetEnum.AMAZON_SSM_DEREGISTER_MANAGED_INSTANCE) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "soluta";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "nam";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            DeregisterManagedInstanceResponse res = sdk.sdk.deregisterManagedInstance(req);

            if (res.deregisterManagedInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterPatchBaselineForPatchGroup

Removes a patch group from a patch baseline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterPatchBaselineForPatchGroupRequest;
import org.openapis.openapi.models.operations.DeregisterPatchBaselineForPatchGroupResponse;
import org.openapis.openapi.models.operations.DeregisterPatchBaselineForPatchGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterPatchBaselineForPatchGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterPatchBaselineForPatchGroupRequest req = new DeregisterPatchBaselineForPatchGroupRequest(                new DeregisterPatchBaselineForPatchGroupRequest("sequi", "dignissimos");, DeregisterPatchBaselineForPatchGroupXAmzTargetEnum.AMAZON_SSM_DEREGISTER_PATCH_BASELINE_FOR_PATCH_GROUP) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "deleniti";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeregisterPatchBaselineForPatchGroupResponse res = sdk.sdk.deregisterPatchBaselineForPatchGroup(req);

            if (res.deregisterPatchBaselineForPatchGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterTargetFromMaintenanceWindow

Removes a target from a maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterTargetFromMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.DeregisterTargetFromMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.DeregisterTargetFromMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterTargetFromMaintenanceWindowRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterTargetFromMaintenanceWindowRequest req = new DeregisterTargetFromMaintenanceWindowRequest(                new DeregisterTargetFromMaintenanceWindowRequest("magnam", "quibusdam") {{
                                safe = false;
                            }};, DeregisterTargetFromMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_DEREGISTER_TARGET_FROM_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "facere";
                xAmzCredential = "libero";
                xAmzDate = "architecto";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "porro";
            }};            

            DeregisterTargetFromMaintenanceWindowResponse res = sdk.sdk.deregisterTargetFromMaintenanceWindow(req);

            if (res.deregisterTargetFromMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterTaskFromMaintenanceWindow

Removes a task from a maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterTaskFromMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.DeregisterTaskFromMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.DeregisterTaskFromMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterTaskFromMaintenanceWindowRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterTaskFromMaintenanceWindowRequest req = new DeregisterTaskFromMaintenanceWindowRequest(                new DeregisterTaskFromMaintenanceWindowRequest("velit", "illo");, DeregisterTaskFromMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_DEREGISTER_TASK_FROM_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "vel";
                xAmzCredential = "ea";
                xAmzDate = "beatae";
                xAmzSecurityToken = "vero";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "eum";
            }};            

            DeregisterTaskFromMaintenanceWindowResponse res = sdk.sdk.deregisterTaskFromMaintenanceWindow(req);

            if (res.deregisterTaskFromMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeActivations

Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeActivationsRequest;
import org.openapis.openapi.models.operations.DescribeActivationsResponse;
import org.openapis.openapi.models.operations.DescribeActivationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeActivationsFilter;
import org.openapis.openapi.models.shared.DescribeActivationsFilterKeysEnum;
import org.openapis.openapi.models.shared.DescribeActivationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeActivationsRequest req = new DescribeActivationsRequest(                new DescribeActivationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.DescribeActivationsFilter[]{{
                                    add(new DescribeActivationsFilter() {{
                                        filterKey = DescribeActivationsFilterKeysEnum.DEFAULT_INSTANCE_NAME;
                                        filterValues = new String[]{{
                                            add("dicta"),
                                            add("impedit"),
                                            add("voluptatibus"),
                                            add("iste"),
                                        }};
                                    }}),
                                    add(new DescribeActivationsFilter() {{
                                        filterKey = DescribeActivationsFilterKeysEnum.IAM_ROLE;
                                        filterValues = new String[]{{
                                            add("nisi"),
                                        }};
                                    }}),
                                }};
                                maxResults = 931505L;
                                nextToken = "velit";
                            }};, DescribeActivationsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_ACTIVATIONS) {{
                maxResults = "laborum";
                nextToken = "non";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "sit";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeActivationsResponse res = sdk.sdk.describeActivations(req);

            if (res.describeActivationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAssociation

Describes the association for the specified target or managed node. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAssociationRequest;
import org.openapis.openapi.models.operations.DescribeAssociationResponse;
import org.openapis.openapi.models.operations.DescribeAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAssociationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAssociationRequest req = new DescribeAssociationRequest(                new DescribeAssociationRequest() {{
                                associationId = "quidem";
                                associationVersion = "voluptas";
                                instanceId = "facilis";
                                name = "Freddie Quitzon";
                            }};, DescribeAssociationXAmzTargetEnum.AMAZON_SSM_DESCRIBE_ASSOCIATION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "unde";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "animi";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "ipsam";
            }};            

            DescribeAssociationResponse res = sdk.sdk.describeAssociation(req);

            if (res.describeAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAssociationExecutionTargets

Views information about a specific execution of a specific association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAssociationExecutionTargetsRequest;
import org.openapis.openapi.models.operations.DescribeAssociationExecutionTargetsResponse;
import org.openapis.openapi.models.operations.DescribeAssociationExecutionTargetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociationExecutionTargetsFilter;
import org.openapis.openapi.models.shared.AssociationExecutionTargetsFilterKeyEnum;
import org.openapis.openapi.models.shared.DescribeAssociationExecutionTargetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAssociationExecutionTargetsRequest req = new DescribeAssociationExecutionTargetsRequest(                new DescribeAssociationExecutionTargetsRequest("est", "error") {{
                                filters = new org.openapis.openapi.models.shared.AssociationExecutionTargetsFilter[]{{
                                    add(new AssociationExecutionTargetsFilter(AssociationExecutionTargetsFilterKeyEnum.RESOURCE_TYPE, "consectetur") {{
                                        key = AssociationExecutionTargetsFilterKeyEnum.STATUS;
                                        value = "veritatis";
                                    }}),
                                    add(new AssociationExecutionTargetsFilter(AssociationExecutionTargetsFilterKeyEnum.STATUS, "ad") {{
                                        key = AssociationExecutionTargetsFilterKeyEnum.STATUS;
                                        value = "inventore";
                                    }}),
                                }};
                                maxResults = 183033L;
                                nextToken = "iste";
                            }};, DescribeAssociationExecutionTargetsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_ASSOCIATION_EXECUTION_TARGETS) {{
                maxResults = "ex";
                nextToken = "nemo";
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "libero";
                xAmzCredential = "rem";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "odio";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "alias";
            }};            

            DescribeAssociationExecutionTargetsResponse res = sdk.sdk.describeAssociationExecutionTargets(req);

            if (res.describeAssociationExecutionTargetsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAssociationExecutions

Views all executions for a specific association ID. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAssociationExecutionsRequest;
import org.openapis.openapi.models.operations.DescribeAssociationExecutionsResponse;
import org.openapis.openapi.models.operations.DescribeAssociationExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociationExecutionFilter;
import org.openapis.openapi.models.shared.AssociationExecutionFilterKeyEnum;
import org.openapis.openapi.models.shared.AssociationFilterOperatorTypeEnum;
import org.openapis.openapi.models.shared.DescribeAssociationExecutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAssociationExecutionsRequest req = new DescribeAssociationExecutionsRequest(                new DescribeAssociationExecutionsRequest("vel") {{
                                filters = new org.openapis.openapi.models.shared.AssociationExecutionFilter[]{{
                                    add(new AssociationExecutionFilter(AssociationExecutionFilterKeyEnum.STATUS, AssociationFilterOperatorTypeEnum.GREATER_THAN, "et") {{
                                        key = AssociationExecutionFilterKeyEnum.EXECUTION_ID;
                                        type = AssociationFilterOperatorTypeEnum.EQUAL;
                                        value = "neque";
                                    }}),
                                }};
                                maxResults = 215398L;
                                nextToken = "unde";
                            }};, DescribeAssociationExecutionsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_ASSOCIATION_EXECUTIONS) {{
                maxResults = "nulla";
                nextToken = "distinctio";
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quia";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeAssociationExecutionsResponse res = sdk.sdk.describeAssociationExecutions(req);

            if (res.describeAssociationExecutionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAutomationExecutions

Provides details about all active and terminated Automation executions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAutomationExecutionsRequest;
import org.openapis.openapi.models.operations.DescribeAutomationExecutionsResponse;
import org.openapis.openapi.models.operations.DescribeAutomationExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutomationExecutionFilter;
import org.openapis.openapi.models.shared.AutomationExecutionFilterKeyEnum;
import org.openapis.openapi.models.shared.DescribeAutomationExecutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAutomationExecutionsRequest req = new DescribeAutomationExecutionsRequest(                new DescribeAutomationExecutionsRequest() {{
                                filters = new org.openapis.openapi.models.shared.AutomationExecutionFilter[]{{
                                    add(new AutomationExecutionFilter(AutomationExecutionFilterKeyEnum.START_TIME_BEFORE,                 new String[]{{
                                                        add("voluptates"),
                                                    }}) {{
                                        key = AutomationExecutionFilterKeyEnum.AUTOMATION_SUBTYPE;
                                        values = new String[]{{
                                            add("quos"),
                                            add("placeat"),
                                            add("sit"),
                                        }};
                                    }}),
                                    add(new AutomationExecutionFilter(AutomationExecutionFilterKeyEnum.PARENT_EXECUTION_ID,                 new String[]{{
                                                        add("distinctio"),
                                                        add("voluptatem"),
                                                        add("autem"),
                                                        add("esse"),
                                                    }}) {{
                                        key = AutomationExecutionFilterKeyEnum.DOCUMENT_NAME_PREFIX;
                                        values = new String[]{{
                                            add("totam"),
                                        }};
                                    }}),
                                    add(new AutomationExecutionFilter(AutomationExecutionFilterKeyEnum.START_TIME_BEFORE,                 new String[]{{
                                                        add("accusamus"),
                                                        add("necessitatibus"),
                                                        add("tempore"),
                                                    }}) {{
                                        key = AutomationExecutionFilterKeyEnum.EXECUTION_ID;
                                        values = new String[]{{
                                            add("beatae"),
                                            add("est"),
                                            add("facere"),
                                            add("corrupti"),
                                        }};
                                    }}),
                                }};
                                maxResults = 575078L;
                                nextToken = "ea";
                            }};, DescribeAutomationExecutionsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_AUTOMATION_EXECUTIONS) {{
                maxResults = "autem";
                nextToken = "ipsam";
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "corporis";
                xAmzDate = "officiis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "at";
            }};            

            DescribeAutomationExecutionsResponse res = sdk.sdk.describeAutomationExecutions(req);

            if (res.describeAutomationExecutionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAutomationStepExecutions

Information about all active and terminated step executions in an Automation workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAutomationStepExecutionsRequest;
import org.openapis.openapi.models.operations.DescribeAutomationStepExecutionsResponse;
import org.openapis.openapi.models.operations.DescribeAutomationStepExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAutomationStepExecutionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StepExecutionFilter;
import org.openapis.openapi.models.shared.StepExecutionFilterKeyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAutomationStepExecutionsRequest req = new DescribeAutomationStepExecutionsRequest(                new DescribeAutomationStepExecutionsRequest("quia") {{
                                filters = new org.openapis.openapi.models.shared.StepExecutionFilter[]{{
                                    add(new StepExecutionFilter(StepExecutionFilterKeyEnum.ACTION,                 new String[]{{
                                                        add("praesentium"),
                                                        add("odit"),
                                                    }}) {{
                                        key = StepExecutionFilterKeyEnum.STEP_NAME;
                                        values = new String[]{{
                                            add("accusantium"),
                                            add("expedita"),
                                            add("officiis"),
                                            add("eos"),
                                        }};
                                    }}),
                                    add(new StepExecutionFilter(StepExecutionFilterKeyEnum.START_TIME_AFTER,                 new String[]{{
                                                        add("similique"),
                                                        add("ut"),
                                                        add("quidem"),
                                                        add("quis"),
                                                    }}) {{
                                        key = StepExecutionFilterKeyEnum.START_TIME_BEFORE;
                                        values = new String[]{{
                                            add("error"),
                                            add("earum"),
                                        }};
                                    }}),
                                    add(new StepExecutionFilter(StepExecutionFilterKeyEnum.START_TIME_BEFORE,                 new String[]{{
                                                        add("numquam"),
                                                        add("nesciunt"),
                                                    }}) {{
                                        key = StepExecutionFilterKeyEnum.START_TIME_BEFORE;
                                        values = new String[]{{
                                            add("molestiae"),
                                            add("delectus"),
                                            add("cupiditate"),
                                        }};
                                    }}),
                                }};
                                maxResults = 873557L;
                                nextToken = "officia";
                                reverseOrder = false;
                            }};, DescribeAutomationStepExecutionsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_AUTOMATION_STEP_EXECUTIONS) {{
                maxResults = "dignissimos";
                nextToken = "optio";
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "qui";
                xAmzDate = "expedita";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeAutomationStepExecutionsResponse res = sdk.sdk.describeAutomationStepExecutions(req);

            if (res.describeAutomationStepExecutionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAvailablePatches

Lists all patches eligible to be included in a patch baseline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAvailablePatchesRequest;
import org.openapis.openapi.models.operations.DescribeAvailablePatchesResponse;
import org.openapis.openapi.models.operations.DescribeAvailablePatchesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAvailablePatchesRequest;
import org.openapis.openapi.models.shared.PatchOrchestratorFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAvailablePatchesRequest req = new DescribeAvailablePatchesRequest(                new DescribeAvailablePatchesRequest() {{
                                filters = new org.openapis.openapi.models.shared.PatchOrchestratorFilter[]{{
                                    add(new PatchOrchestratorFilter() {{
                                        key = "neque";
                                        values = new String[]{{
                                            add("minus"),
                                            add("eum"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "modi";
                                        values = new String[]{{
                                            add("magnam"),
                                            add("voluptates"),
                                        }};
                                    }}),
                                }};
                                maxResults = 978173L;
                                nextToken = "tempore";
                            }};, DescribeAvailablePatchesXAmzTargetEnum.AMAZON_SSM_DESCRIBE_AVAILABLE_PATCHES) {{
                maxResults = "aperiam";
                nextToken = "libero";
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "labore";
                xAmzCredential = "totam";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "velit";
            }};            

            DescribeAvailablePatchesResponse res = sdk.sdk.describeAvailablePatches(req);

            if (res.describeAvailablePatchesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDocument

Describes the specified Amazon Web Services Systems Manager document (SSM document).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDocumentRequest;
import org.openapis.openapi.models.operations.DescribeDocumentResponse;
import org.openapis.openapi.models.operations.DescribeDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDocumentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDocumentRequest req = new DescribeDocumentRequest(                new DescribeDocumentRequest("fuga") {{
                                documentVersion = "nostrum";
                                versionName = "est";
                            }};, DescribeDocumentXAmzTargetEnum.AMAZON_SSM_DESCRIBE_DOCUMENT) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempore";
                xAmzDate = "vero";
                xAmzSecurityToken = "odit";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "pariatur";
            }};            

            DescribeDocumentResponse res = sdk.sdk.describeDocument(req);

            if (res.describeDocumentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDocumentPermission

Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDocumentPermissionRequest;
import org.openapis.openapi.models.operations.DescribeDocumentPermissionResponse;
import org.openapis.openapi.models.operations.DescribeDocumentPermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDocumentPermissionRequest;
import org.openapis.openapi.models.shared.DocumentPermissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDocumentPermissionRequest req = new DescribeDocumentPermissionRequest(                new DescribeDocumentPermissionRequest("reprehenderit", DocumentPermissionTypeEnum.SHARE) {{
                                maxResults = 45234L;
                                nextToken = "odio";
                            }};, DescribeDocumentPermissionXAmzTargetEnum.AMAZON_SSM_DESCRIBE_DOCUMENT_PERMISSION) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "in";
                xAmzCredential = "ducimus";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "error";
                xAmzSignedHeaders = "veritatis";
            }};            

            DescribeDocumentPermissionResponse res = sdk.sdk.describeDocumentPermission(req);

            if (res.describeDocumentPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEffectiveInstanceAssociations

All associations for the managed node(s).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEffectiveInstanceAssociationsRequest;
import org.openapis.openapi.models.operations.DescribeEffectiveInstanceAssociationsResponse;
import org.openapis.openapi.models.operations.DescribeEffectiveInstanceAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEffectiveInstanceAssociationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEffectiveInstanceAssociationsRequest req = new DescribeEffectiveInstanceAssociationsRequest(                new DescribeEffectiveInstanceAssociationsRequest("voluptate") {{
                                maxResults = 866789L;
                                nextToken = "itaque";
                            }};, DescribeEffectiveInstanceAssociationsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS) {{
                maxResults = "similique";
                nextToken = "optio";
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "commodi";
                xAmzDate = "officiis";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "exercitationem";
            }};            

            DescribeEffectiveInstanceAssociationsResponse res = sdk.sdk.describeEffectiveInstanceAssociations(req);

            if (res.describeEffectiveInstanceAssociationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEffectivePatchesForPatchBaseline

Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEffectivePatchesForPatchBaselineRequest;
import org.openapis.openapi.models.operations.DescribeEffectivePatchesForPatchBaselineResponse;
import org.openapis.openapi.models.operations.DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEffectivePatchesForPatchBaselineRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEffectivePatchesForPatchBaselineRequest req = new DescribeEffectivePatchesForPatchBaselineRequest(                new DescribeEffectivePatchesForPatchBaselineRequest("dolorem") {{
                                maxResults = 264619L;
                                nextToken = "ipsa";
                            }};, DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum.AMAZON_SSM_DESCRIBE_EFFECTIVE_PATCHES_FOR_PATCH_BASELINE) {{
                maxResults = "sint";
                nextToken = "vero";
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "cum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "earum";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "animi";
            }};            

            DescribeEffectivePatchesForPatchBaselineResponse res = sdk.sdk.describeEffectivePatchesForPatchBaseline(req);

            if (res.describeEffectivePatchesForPatchBaselineResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstanceAssociationsStatus

The status of the associations for the managed node(s).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstanceAssociationsStatusRequest;
import org.openapis.openapi.models.operations.DescribeInstanceAssociationsStatusResponse;
import org.openapis.openapi.models.operations.DescribeInstanceAssociationsStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstanceAssociationsStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstanceAssociationsStatusRequest req = new DescribeInstanceAssociationsStatusRequest(                new DescribeInstanceAssociationsStatusRequest("nam") {{
                                maxResults = 115898L;
                                nextToken = "consequuntur";
                            }};, DescribeInstanceAssociationsStatusXAmzTargetEnum.AMAZON_SSM_DESCRIBE_INSTANCE_ASSOCIATIONS_STATUS) {{
                maxResults = "necessitatibus";
                nextToken = "nobis";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "maiores";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "pariatur";
            }};            

            DescribeInstanceAssociationsStatusResponse res = sdk.sdk.describeInstanceAssociationsStatus(req);

            if (res.describeInstanceAssociationsStatusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstanceInformation

<p>Describes one or more of your managed nodes, including information about the operating system platform, the version of SSM Agent installed on the managed node, node status, and so on.</p> <p>If you specify one or more managed node IDs, it returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.</p> <note> <p>The <code>IamRole</code> field for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This call doesn't return the IAM role for EC2 instances.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstanceInformationRequest;
import org.openapis.openapi.models.operations.DescribeInstanceInformationResponse;
import org.openapis.openapi.models.operations.DescribeInstanceInformationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstanceInformationRequest;
import org.openapis.openapi.models.shared.InstanceInformationFilter;
import org.openapis.openapi.models.shared.InstanceInformationFilterKeyEnum;
import org.openapis.openapi.models.shared.InstanceInformationStringFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstanceInformationRequest req = new DescribeInstanceInformationRequest(                new DescribeInstanceInformationRequest() {{
                                filters = new org.openapis.openapi.models.shared.InstanceInformationStringFilter[]{{
                                    add(new InstanceInformationStringFilter("doloribus",                 new String[]{{
                                                        add("sint"),
                                                        add("enim"),
                                                        add("hic"),
                                                        add("animi"),
                                                    }}) {{
                                        key = "occaecati";
                                        values = new String[]{{
                                            add("aliquam"),
                                            add("nostrum"),
                                        }};
                                    }}),
                                    add(new InstanceInformationStringFilter("saepe",                 new String[]{{
                                                        add("quos"),
                                                    }}) {{
                                        key = "quas";
                                        values = new String[]{{
                                            add("molestias"),
                                            add("odio"),
                                            add("eaque"),
                                        }};
                                    }}),
                                    add(new InstanceInformationStringFilter("delectus",                 new String[]{{
                                                        add("cum"),
                                                        add("ipsum"),
                                                        add("adipisci"),
                                                        add("saepe"),
                                                    }}) {{
                                        key = "iste";
                                        values = new String[]{{
                                            add("tempore"),
                                            add("libero"),
                                            add("velit"),
                                            add("doloremque"),
                                        }};
                                    }}),
                                }};
                                instanceInformationFilterList = new org.openapis.openapi.models.shared.InstanceInformationFilter[]{{
                                    add(new InstanceInformationFilter(InstanceInformationFilterKeyEnum.INSTANCE_IDS,                 new String[]{{
                                                        add("molestiae"),
                                                        add("eligendi"),
                                                        add("possimus"),
                                                    }}) {{
                                        key = InstanceInformationFilterKeyEnum.INSTANCE_IDS;
                                        valueSet = new String[]{{
                                            add("veniam"),
                                            add("libero"),
                                        }};
                                    }}),
                                    add(new InstanceInformationFilter(InstanceInformationFilterKeyEnum.ASSOCIATION_STATUS,                 new String[]{{
                                                        add("consequuntur"),
                                                        add("facere"),
                                                    }}) {{
                                        key = InstanceInformationFilterKeyEnum.PING_STATUS;
                                        valueSet = new String[]{{
                                            add("itaque"),
                                            add("sed"),
                                        }};
                                    }}),
                                    add(new InstanceInformationFilter(InstanceInformationFilterKeyEnum.AGENT_VERSION,                 new String[]{{
                                                        add("ab"),
                                                        add("velit"),
                                                    }}) {{
                                        key = InstanceInformationFilterKeyEnum.ACTIVATION_IDS;
                                        valueSet = new String[]{{
                                            add("pariatur"),
                                        }};
                                    }}),
                                }};
                                maxResults = 705710L;
                                nextToken = "tempore";
                            }};, DescribeInstanceInformationXAmzTargetEnum.AMAZON_SSM_DESCRIBE_INSTANCE_INFORMATION) {{
                maxResults = "nisi";
                nextToken = "voluptatibus";
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "distinctio";
                xAmzDate = "nisi";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "libero";
            }};            

            DescribeInstanceInformationResponse res = sdk.sdk.describeInstanceInformation(req);

            if (res.describeInstanceInformationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstancePatchStates

Retrieves the high-level patch state of one or more managed nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstancePatchStatesRequest;
import org.openapis.openapi.models.operations.DescribeInstancePatchStatesResponse;
import org.openapis.openapi.models.operations.DescribeInstancePatchStatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstancePatchStatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstancePatchStatesRequest req = new DescribeInstancePatchStatesRequest(                new DescribeInstancePatchStatesRequest(                new String[]{{
                                                add("facilis"),
                                                add("ipsum"),
                                                add("ad"),
                                                add("voluptatibus"),
                                            }}) {{
                                maxResults = 974589L;
                                nextToken = "consequuntur";
                            }};, DescribeInstancePatchStatesXAmzTargetEnum.AMAZON_SSM_DESCRIBE_INSTANCE_PATCH_STATES) {{
                maxResults = "debitis";
                nextToken = "labore";
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "eos";
                xAmzCredential = "reprehenderit";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "neque";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "est";
            }};            

            DescribeInstancePatchStatesResponse res = sdk.sdk.describeInstancePatchStates(req);

            if (res.describeInstancePatchStatesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstancePatchStatesForPatchGroup

Retrieves the high-level patch state for the managed nodes in the specified patch group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstancePatchStatesForPatchGroupRequest;
import org.openapis.openapi.models.operations.DescribeInstancePatchStatesForPatchGroupResponse;
import org.openapis.openapi.models.operations.DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstancePatchStatesForPatchGroupRequest;
import org.openapis.openapi.models.shared.InstancePatchStateFilter;
import org.openapis.openapi.models.shared.InstancePatchStateOperatorTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstancePatchStatesForPatchGroupRequest req = new DescribeInstancePatchStatesForPatchGroupRequest(                new DescribeInstancePatchStatesForPatchGroupRequest("eligendi") {{
                                filters = new org.openapis.openapi.models.shared.InstancePatchStateFilter[]{{
                                    add(new InstancePatchStateFilter("error", InstancePatchStateOperatorTypeEnum.GREATER_THAN,                 new String[]{{
                                                        add("dignissimos"),
                                                    }}) {{
                                        key = "unde";
                                        type = InstancePatchStateOperatorTypeEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("dolor"),
                                            add("dicta"),
                                        }};
                                    }}),
                                    add(new InstancePatchStateFilter("delectus", InstancePatchStateOperatorTypeEnum.NOT_EQUAL,                 new String[]{{
                                                        add("libero"),
                                                        add("illo"),
                                                    }}) {{
                                        key = "esse";
                                        type = InstancePatchStateOperatorTypeEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("enim"),
                                        }};
                                    }}),
                                    add(new InstancePatchStateFilter("reiciendis", InstancePatchStateOperatorTypeEnum.GREATER_THAN,                 new String[]{{
                                                        add("praesentium"),
                                                        add("nemo"),
                                                    }}) {{
                                        key = "ab";
                                        type = InstancePatchStateOperatorTypeEnum.NOT_EQUAL;
                                        values = new String[]{{
                                            add("saepe"),
                                            add("tempore"),
                                            add("veniam"),
                                            add("eos"),
                                        }};
                                    }}),
                                    add(new InstancePatchStateFilter("deleniti", InstancePatchStateOperatorTypeEnum.EQUAL,                 new String[]{{
                                                        add("assumenda"),
                                                        add("aliquam"),
                                                    }}) {{
                                        key = "repellat";
                                        type = InstancePatchStateOperatorTypeEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("nihil"),
                                        }};
                                    }}),
                                }};
                                maxResults = 790463L;
                                nextToken = "provident";
                            }};, DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum.AMAZON_SSM_DESCRIBE_INSTANCE_PATCH_STATES_FOR_PATCH_GROUP) {{
                maxResults = "laudantium";
                nextToken = "repudiandae";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "aspernatur";
                xAmzDate = "nam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeInstancePatchStatesForPatchGroupResponse res = sdk.sdk.describeInstancePatchStatesForPatchGroup(req);

            if (res.describeInstancePatchStatesForPatchGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInstancePatches

Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInstancePatchesRequest;
import org.openapis.openapi.models.operations.DescribeInstancePatchesResponse;
import org.openapis.openapi.models.operations.DescribeInstancePatchesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInstancePatchesRequest;
import org.openapis.openapi.models.shared.PatchOrchestratorFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInstancePatchesRequest req = new DescribeInstancePatchesRequest(                new DescribeInstancePatchesRequest("rerum") {{
                                filters = new org.openapis.openapi.models.shared.PatchOrchestratorFilter[]{{
                                    add(new PatchOrchestratorFilter() {{
                                        key = "corporis";
                                        values = new String[]{{
                                            add("similique"),
                                            add("repellendus"),
                                            add("iure"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "commodi";
                                        values = new String[]{{
                                            add("commodi"),
                                            add("aut"),
                                            add("voluptatem"),
                                            add("ad"),
                                        }};
                                    }}),
                                }};
                                maxResults = 60995L;
                                nextToken = "amet";
                            }};, DescribeInstancePatchesXAmzTargetEnum.AMAZON_SSM_DESCRIBE_INSTANCE_PATCHES) {{
                maxResults = "illum";
                nextToken = "praesentium";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "cum";
                xAmzCredential = "amet";
                xAmzDate = "quasi";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "doloremque";
            }};            

            DescribeInstancePatchesResponse res = sdk.sdk.describeInstancePatches(req);

            if (res.describeInstancePatchesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInventoryDeletions

Describes a specific delete inventory operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInventoryDeletionsRequest;
import org.openapis.openapi.models.operations.DescribeInventoryDeletionsResponse;
import org.openapis.openapi.models.operations.DescribeInventoryDeletionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInventoryDeletionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInventoryDeletionsRequest req = new DescribeInventoryDeletionsRequest(                new DescribeInventoryDeletionsRequest() {{
                                deletionId = "iusto";
                                maxResults = 228646L;
                                nextToken = "provident";
                            }};, DescribeInventoryDeletionsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_INVENTORY_DELETIONS) {{
                maxResults = "dolorum";
                nextToken = "necessitatibus";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "consequatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "facilis";
            }};            

            DescribeInventoryDeletionsResponse res = sdk.sdk.describeInventoryDeletions(req);

            if (res.describeInventoryDeletionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindowExecutionTaskInvocations

Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionTaskInvocationsResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowExecutionTaskInvocationsRequest req = new DescribeMaintenanceWindowExecutionTaskInvocationsRequest(                new DescribeMaintenanceWindowExecutionTaskInvocationsRequest("aperiam", "sint") {{
                                filters = new org.openapis.openapi.models.shared.MaintenanceWindowFilter[]{{
                                    add(new MaintenanceWindowFilter() {{
                                        key = "eos";
                                        values = new String[]{{
                                            add("dicta"),
                                            add("voluptatem"),
                                            add("velit"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "dolor";
                                        values = new String[]{{
                                            add("a"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "dolor";
                                        values = new String[]{{
                                            add("atque"),
                                            add("beatae"),
                                            add("at"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "labore";
                                        values = new String[]{{
                                            add("esse"),
                                            add("voluptatem"),
                                            add("perferendis"),
                                            add("rerum"),
                                        }};
                                    }}),
                                }};
                                maxResults = 411615L;
                                nextToken = "aperiam";
                            }};, DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATIONS) {{
                maxResults = "dignissimos";
                nextToken = "repellat";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "provident";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "consectetur";
            }};            

            DescribeMaintenanceWindowExecutionTaskInvocationsResponse res = sdk.sdk.describeMaintenanceWindowExecutionTaskInvocations(req);

            if (res.describeMaintenanceWindowExecutionTaskInvocationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindowExecutionTasks

For a given maintenance window execution, lists the tasks that were run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionTasksRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionTasksResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowExecutionTasksRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowExecutionTasksRequest req = new DescribeMaintenanceWindowExecutionTasksRequest(                new DescribeMaintenanceWindowExecutionTasksRequest("natus") {{
                                filters = new org.openapis.openapi.models.shared.MaintenanceWindowFilter[]{{
                                    add(new MaintenanceWindowFilter() {{
                                        key = "officia";
                                        values = new String[]{{
                                            add("tenetur"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "aspernatur";
                                        values = new String[]{{
                                            add("itaque"),
                                            add("illum"),
                                            add("laborum"),
                                            add("dignissimos"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "vero";
                                        values = new String[]{{
                                            add("consectetur"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "repellat";
                                        values = new String[]{{
                                            add("explicabo"),
                                        }};
                                    }}),
                                }};
                                maxResults = 350325L;
                                nextToken = "nihil";
                            }};, DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASKS) {{
                maxResults = "non";
                nextToken = "ab";
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "hic";
                xAmzCredential = "deserunt";
                xAmzDate = "delectus";
                xAmzSecurityToken = "non";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "in";
            }};            

            DescribeMaintenanceWindowExecutionTasksResponse res = sdk.sdk.describeMaintenanceWindowExecutionTasks(req);

            if (res.describeMaintenanceWindowExecutionTasksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindowExecutions

Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionsRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionsResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowExecutionsRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowExecutionsRequest req = new DescribeMaintenanceWindowExecutionsRequest(                new DescribeMaintenanceWindowExecutionsRequest("labore") {{
                                filters = new org.openapis.openapi.models.shared.MaintenanceWindowFilter[]{{
                                    add(new MaintenanceWindowFilter() {{
                                        key = "repudiandae";
                                        values = new String[]{{
                                            add("in"),
                                            add("explicabo"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "accusamus";
                                        values = new String[]{{
                                            add("aperiam"),
                                            add("odit"),
                                            add("deleniti"),
                                        }};
                                    }}),
                                }};
                                maxResults = 316730L;
                                nextToken = "voluptate";
                            }};, DescribeMaintenanceWindowExecutionsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_EXECUTIONS) {{
                maxResults = "similique";
                nextToken = "minima";
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "sit";
                xAmzDate = "modi";
                xAmzSecurityToken = "eum";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "mollitia";
            }};            

            DescribeMaintenanceWindowExecutionsResponse res = sdk.sdk.describeMaintenanceWindowExecutions(req);

            if (res.describeMaintenanceWindowExecutionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindowSchedule

Retrieves information about upcoming executions of a maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowScheduleRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowScheduleResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowScheduleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowScheduleRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowResourceTypeEnum;
import org.openapis.openapi.models.shared.PatchOrchestratorFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowScheduleRequest req = new DescribeMaintenanceWindowScheduleRequest(                new DescribeMaintenanceWindowScheduleRequest() {{
                                filters = new org.openapis.openapi.models.shared.PatchOrchestratorFilter[]{{
                                    add(new PatchOrchestratorFilter() {{
                                        key = "nostrum";
                                        values = new String[]{{
                                            add("veniam"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "ab";
                                        values = new String[]{{
                                            add("aut"),
                                            add("aut"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "eveniet";
                                        values = new String[]{{
                                            add("commodi"),
                                            add("numquam"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "dolorum";
                                        values = new String[]{{
                                            add("voluptate"),
                                            add("consectetur"),
                                            add("nesciunt"),
                                            add("quaerat"),
                                        }};
                                    }}),
                                }};
                                maxResults = 929476L;
                                nextToken = "minus";
                                resourceType = MaintenanceWindowResourceTypeEnum.INSTANCE;
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "iusto";
                                        values = new String[]{{
                                            add("et"),
                                            add("facilis"),
                                            add("amet"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "autem";
                                        values = new String[]{{
                                            add("alias"),
                                            add("rem"),
                                            add("aut"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "quos";
                                        values = new String[]{{
                                            add("repellendus"),
                                            add("veritatis"),
                                            add("quae"),
                                        }};
                                    }}),
                                }};
                                windowId = "eaque";
                            }};, DescribeMaintenanceWindowScheduleXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_SCHEDULE) {{
                maxResults = "saepe";
                nextToken = "delectus";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "officia";
                xAmzDate = "sed";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "eveniet";
            }};            

            DescribeMaintenanceWindowScheduleResponse res = sdk.sdk.describeMaintenanceWindowSchedule(req);

            if (res.describeMaintenanceWindowScheduleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindowTargets

Lists the targets registered with the maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowTargetsRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowTargetsResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowTargetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowTargetsRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowTargetsRequest req = new DescribeMaintenanceWindowTargetsRequest(                new DescribeMaintenanceWindowTargetsRequest("voluptatem") {{
                                filters = new org.openapis.openapi.models.shared.MaintenanceWindowFilter[]{{
                                    add(new MaintenanceWindowFilter() {{
                                        key = "qui";
                                        values = new String[]{{
                                            add("necessitatibus"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "harum";
                                        values = new String[]{{
                                            add("beatae"),
                                        }};
                                    }}),
                                }};
                                maxResults = 397988L;
                                nextToken = "modi";
                            }};, DescribeMaintenanceWindowTargetsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_TARGETS) {{
                maxResults = "optio";
                nextToken = "voluptatibus";
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "libero";
                xAmzDate = "totam";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "ea";
            }};            

            DescribeMaintenanceWindowTargetsResponse res = sdk.sdk.describeMaintenanceWindowTargets(req);

            if (res.describeMaintenanceWindowTargetsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindowTasks

<p>Lists the tasks in a maintenance window.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowTasksRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowTasksResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowTasksRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowTasksRequest req = new DescribeMaintenanceWindowTasksRequest(                new DescribeMaintenanceWindowTasksRequest("ducimus") {{
                                filters = new org.openapis.openapi.models.shared.MaintenanceWindowFilter[]{{
                                    add(new MaintenanceWindowFilter() {{
                                        key = "velit";
                                        values = new String[]{{
                                            add("repellat"),
                                            add("nulla"),
                                            add("laborum"),
                                            add("natus"),
                                        }};
                                    }}),
                                }};
                                maxResults = 883780L;
                                nextToken = "doloremque";
                            }};, DescribeMaintenanceWindowTasksXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_TASKS) {{
                maxResults = "nisi";
                nextToken = "rerum";
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "non";
                xAmzDate = "rem";
                xAmzSecurityToken = "quia";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "quisquam";
            }};            

            DescribeMaintenanceWindowTasksResponse res = sdk.sdk.describeMaintenanceWindowTasks(req);

            if (res.describeMaintenanceWindowTasksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindows

Retrieves the maintenance windows in an Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowsRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowsResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowsRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowsRequest req = new DescribeMaintenanceWindowsRequest(                new DescribeMaintenanceWindowsRequest() {{
                                filters = new org.openapis.openapi.models.shared.MaintenanceWindowFilter[]{{
                                    add(new MaintenanceWindowFilter() {{
                                        key = "eligendi";
                                        values = new String[]{{
                                            add("officiis"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "architecto";
                                        values = new String[]{{
                                            add("enim"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "optio";
                                        values = new String[]{{
                                            add("perferendis"),
                                            add("facilis"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new MaintenanceWindowFilter() {{
                                        key = "a";
                                        values = new String[]{{
                                            add("dicta"),
                                            add("quos"),
                                            add("ullam"),
                                        }};
                                    }}),
                                }};
                                maxResults = 295950L;
                                nextToken = "modi";
                            }};, DescribeMaintenanceWindowsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOWS) {{
                maxResults = "itaque";
                nextToken = "maxime";
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "assumenda";
                xAmzDate = "vero";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "porro";
            }};            

            DescribeMaintenanceWindowsResponse res = sdk.sdk.describeMaintenanceWindows(req);

            if (res.describeMaintenanceWindowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMaintenanceWindowsForTarget

Retrieves information about the maintenance window targets or tasks that a managed node is associated with.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowsForTargetRequest;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowsForTargetResponse;
import org.openapis.openapi.models.operations.DescribeMaintenanceWindowsForTargetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMaintenanceWindowsForTargetRequest;
import org.openapis.openapi.models.shared.MaintenanceWindowResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMaintenanceWindowsForTargetRequest req = new DescribeMaintenanceWindowsForTargetRequest(                new DescribeMaintenanceWindowsForTargetRequest(MaintenanceWindowResourceTypeEnum.RESOURCE_GROUP,                 new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    key = "ab";
                                                    values = new String[]{{
                                                        add("nihil"),
                                                        add("esse"),
                                                        add("iure"),
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    key = "odio";
                                                    values = new String[]{{
                                                        add("debitis"),
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    key = "vel";
                                                    values = new String[]{{
                                                        add("corporis"),
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    key = "voluptas";
                                                    values = new String[]{{
                                                        add("officia"),
                                                    }};
                                                }}),
                                            }}) {{
                                maxResults = 441374L;
                                nextToken = "distinctio";
                            }};, DescribeMaintenanceWindowsForTargetXAmzTargetEnum.AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOWS_FOR_TARGET) {{
                maxResults = "eius";
                nextToken = "ipsa";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "accusantium";
                xAmzDate = "veniam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "facere";
            }};            

            DescribeMaintenanceWindowsForTargetResponse res = sdk.sdk.describeMaintenanceWindowsForTarget(req);

            if (res.describeMaintenanceWindowsForTargetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOpsItems

<p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOpsItemsRequest;
import org.openapis.openapi.models.operations.DescribeOpsItemsResponse;
import org.openapis.openapi.models.operations.DescribeOpsItemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOpsItemsRequest;
import org.openapis.openapi.models.shared.OpsItemFilter;
import org.openapis.openapi.models.shared.OpsItemFilterKeyEnum;
import org.openapis.openapi.models.shared.OpsItemFilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOpsItemsRequest req = new DescribeOpsItemsRequest(                new DescribeOpsItemsRequest() {{
                                maxResults = 552581L;
                                nextToken = "doloribus";
                                opsItemFilters = new org.openapis.openapi.models.shared.OpsItemFilter[]{{
                                    add(new OpsItemFilter(OpsItemFilterKeyEnum.OPS_ITEM_ID, OpsItemFilterOperatorEnum.GREATER_THAN,                 new String[]{{
                                                        add("repellat"),
                                                    }}) {{
                                        key = OpsItemFilterKeyEnum.SEVERITY;
                                        operator = OpsItemFilterOperatorEnum.LESS_THAN;
                                        values = new String[]{{
                                            add("vitae"),
                                        }};
                                    }}),
                                    add(new OpsItemFilter(OpsItemFilterKeyEnum.AUTOMATION_ID, OpsItemFilterOperatorEnum.LESS_THAN,                 new String[]{{
                                                        add("quidem"),
                                                    }}) {{
                                        key = OpsItemFilterKeyEnum.PLANNED_START_TIME;
                                        operator = OpsItemFilterOperatorEnum.LESS_THAN;
                                        values = new String[]{{
                                            add("unde"),
                                            add("incidunt"),
                                            add("explicabo"),
                                            add("ipsam"),
                                        }};
                                    }}),
                                    add(new OpsItemFilter(OpsItemFilterKeyEnum.AUTOMATION_ID, OpsItemFilterOperatorEnum.CONTAINS,                 new String[]{{
                                                        add("tenetur"),
                                                        add("adipisci"),
                                                    }}) {{
                                        key = OpsItemFilterKeyEnum.OPS_ITEM_ID;
                                        operator = OpsItemFilterOperatorEnum.CONTAINS;
                                        values = new String[]{{
                                            add("consequuntur"),
                                            add("veniam"),
                                            add("debitis"),
                                            add("officia"),
                                        }};
                                    }}),
                                    add(new OpsItemFilter(OpsItemFilterKeyEnum.CREATED_BY, OpsItemFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("nisi"),
                                                        add("quisquam"),
                                                        add("dolor"),
                                                        add("ducimus"),
                                                    }}) {{
                                        key = OpsItemFilterKeyEnum.CHANGE_REQUEST_BY_REQUESTER_ARN;
                                        operator = OpsItemFilterOperatorEnum.CONTAINS;
                                        values = new String[]{{
                                            add("ex"),
                                            add("minus"),
                                        }};
                                    }}),
                                }};
                            }};, DescribeOpsItemsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_OPS_ITEMS) {{
                maxResults = "fuga";
                nextToken = "minima";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "magni";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "praesentium";
            }};            

            DescribeOpsItemsResponse res = sdk.sdk.describeOpsItems(req);

            if (res.describeOpsItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeParameters

<p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>DescribeParameters</code> retrieves whatever the original key alias was referencing.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeParametersRequest;
import org.openapis.openapi.models.operations.DescribeParametersResponse;
import org.openapis.openapi.models.operations.DescribeParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeParametersRequest;
import org.openapis.openapi.models.shared.ParameterStringFilter;
import org.openapis.openapi.models.shared.ParametersFilter;
import org.openapis.openapi.models.shared.ParametersFilterKeyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeParametersRequest req = new DescribeParametersRequest(                new DescribeParametersRequest() {{
                                filters = new org.openapis.openapi.models.shared.ParametersFilter[]{{
                                    add(new ParametersFilter(ParametersFilterKeyEnum.TYPE,                 new String[]{{
                                                        add("amet"),
                                                    }}) {{
                                        key = ParametersFilterKeyEnum.KEY_ID;
                                        values = new String[]{{
                                            add("impedit"),
                                            add("sit"),
                                            add("nemo"),
                                        }};
                                    }}),
                                    add(new ParametersFilter(ParametersFilterKeyEnum.KEY_ID,                 new String[]{{
                                                        add("quisquam"),
                                                        add("enim"),
                                                        add("doloribus"),
                                                        add("assumenda"),
                                                    }}) {{
                                        key = ParametersFilterKeyEnum.TYPE;
                                        values = new String[]{{
                                            add("veniam"),
                                            add("quod"),
                                        }};
                                    }}),
                                }};
                                maxResults = 887363L;
                                nextToken = "architecto";
                                parameterFilters = new org.openapis.openapi.models.shared.ParameterStringFilter[]{{
                                    add(new ParameterStringFilter("perspiciatis") {{
                                        key = "culpa";
                                        option = "ipsa";
                                        values = new String[]{{
                                            add("necessitatibus"),
                                            add("quia"),
                                            add("dicta"),
                                            add("vel"),
                                        }};
                                    }}),
                                }};
                            }};, DescribeParametersXAmzTargetEnum.AMAZON_SSM_DESCRIBE_PARAMETERS) {{
                maxResults = "debitis";
                nextToken = "ullam";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "perferendis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "iure";
            }};            

            DescribeParametersResponse res = sdk.sdk.describeParameters(req);

            if (res.describeParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePatchBaselines

Lists the patch baselines in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePatchBaselinesRequest;
import org.openapis.openapi.models.operations.DescribePatchBaselinesResponse;
import org.openapis.openapi.models.operations.DescribePatchBaselinesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePatchBaselinesRequest;
import org.openapis.openapi.models.shared.PatchOrchestratorFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePatchBaselinesRequest req = new DescribePatchBaselinesRequest(                new DescribePatchBaselinesRequest() {{
                                filters = new org.openapis.openapi.models.shared.PatchOrchestratorFilter[]{{
                                    add(new PatchOrchestratorFilter() {{
                                        key = "nemo";
                                        values = new String[]{{
                                            add("velit"),
                                            add("magnam"),
                                            add("dignissimos"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "sed";
                                        values = new String[]{{
                                            add("natus"),
                                            add("provident"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "cum";
                                        values = new String[]{{
                                            add("facilis"),
                                            add("quidem"),
                                            add("itaque"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "unde";
                                        values = new String[]{{
                                            add("perspiciatis"),
                                            add("hic"),
                                        }};
                                    }}),
                                }};
                                maxResults = 736985L;
                                nextToken = "aspernatur";
                            }};, DescribePatchBaselinesXAmzTargetEnum.AMAZON_SSM_DESCRIBE_PATCH_BASELINES) {{
                maxResults = "libero";
                nextToken = "nam";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "quod";
                xAmzDate = "id";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "quo";
            }};            

            DescribePatchBaselinesResponse res = sdk.sdk.describePatchBaselines(req);

            if (res.describePatchBaselinesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePatchGroupState

Returns high-level aggregated patch compliance state information for a patch group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePatchGroupStateRequest;
import org.openapis.openapi.models.operations.DescribePatchGroupStateResponse;
import org.openapis.openapi.models.operations.DescribePatchGroupStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePatchGroupStateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePatchGroupStateRequest req = new DescribePatchGroupStateRequest(                new DescribePatchGroupStateRequest("illum");, DescribePatchGroupStateXAmzTargetEnum.AMAZON_SSM_DESCRIBE_PATCH_GROUP_STATE) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "facilis";
                xAmzDate = "non";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribePatchGroupStateResponse res = sdk.sdk.describePatchGroupState(req);

            if (res.describePatchGroupStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePatchGroups

Lists all patch groups that have been registered with patch baselines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePatchGroupsRequest;
import org.openapis.openapi.models.operations.DescribePatchGroupsResponse;
import org.openapis.openapi.models.operations.DescribePatchGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePatchGroupsRequest;
import org.openapis.openapi.models.shared.PatchOrchestratorFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePatchGroupsRequest req = new DescribePatchGroupsRequest(                new DescribePatchGroupsRequest() {{
                                filters = new org.openapis.openapi.models.shared.PatchOrchestratorFilter[]{{
                                    add(new PatchOrchestratorFilter() {{
                                        key = "ad";
                                        values = new String[]{{
                                            add("laborum"),
                                            add("eveniet"),
                                            add("laborum"),
                                            add("incidunt"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "maxime";
                                        values = new String[]{{
                                            add("alias"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "deserunt";
                                        values = new String[]{{
                                            add("laborum"),
                                            add("est"),
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new PatchOrchestratorFilter() {{
                                        key = "labore";
                                        values = new String[]{{
                                            add("perferendis"),
                                            add("fugit"),
                                            add("aliquid"),
                                            add("magnam"),
                                        }};
                                    }}),
                                }};
                                maxResults = 308528L;
                                nextToken = "eligendi";
                            }};, DescribePatchGroupsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_PATCH_GROUPS) {{
                maxResults = "hic";
                nextToken = "nostrum";
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "error";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "nostrum";
            }};            

            DescribePatchGroupsResponse res = sdk.sdk.describePatchGroups(req);

            if (res.describePatchGroupsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePatchProperties

<p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>DEBIAN</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>MACOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> </p> </dd> <dt>ORACLE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>UBUNTU</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>WINDOWS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> | <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code> </p> </dd> </dl>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePatchPropertiesRequest;
import org.openapis.openapi.models.operations.DescribePatchPropertiesResponse;
import org.openapis.openapi.models.operations.DescribePatchPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePatchPropertiesRequest;
import org.openapis.openapi.models.shared.OperatingSystemEnum;
import org.openapis.openapi.models.shared.PatchPropertyEnum;
import org.openapis.openapi.models.shared.PatchSetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePatchPropertiesRequest req = new DescribePatchPropertiesRequest(                new DescribePatchPropertiesRequest(OperatingSystemEnum.ORACLE_LINUX, PatchPropertyEnum.PRIORITY) {{
                                maxResults = 815225L;
                                nextToken = "impedit";
                                patchSet = PatchSetEnum.OS;
                            }};, DescribePatchPropertiesXAmzTargetEnum.AMAZON_SSM_DESCRIBE_PATCH_PROPERTIES) {{
                maxResults = "deserunt";
                nextToken = "quod";
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "voluptatem";
                xAmzDate = "facere";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "consequatur";
            }};            

            DescribePatchPropertiesResponse res = sdk.sdk.describePatchProperties(req);

            if (res.describePatchPropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSessions

Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSessionsRequest;
import org.openapis.openapi.models.operations.DescribeSessionsResponse;
import org.openapis.openapi.models.operations.DescribeSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSessionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SessionFilter;
import org.openapis.openapi.models.shared.SessionFilterKeyEnum;
import org.openapis.openapi.models.shared.SessionStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSessionsRequest req = new DescribeSessionsRequest(                new DescribeSessionsRequest(SessionStateEnum.ACTIVE) {{
                                filters = new org.openapis.openapi.models.shared.SessionFilter[]{{
                                    add(new SessionFilter(SessionFilterKeyEnum.INVOKED_AFTER, "magni") {{
                                        key = SessionFilterKeyEnum.STATUS;
                                        value = "blanditiis";
                                    }}),
                                    add(new SessionFilter(SessionFilterKeyEnum.SESSION_ID, "impedit") {{
                                        key = SessionFilterKeyEnum.SESSION_ID;
                                        value = "sed";
                                    }}),
                                    add(new SessionFilter(SessionFilterKeyEnum.SESSION_ID, "maiores") {{
                                        key = SessionFilterKeyEnum.INVOKED_AFTER;
                                        value = "excepturi";
                                    }}),
                                }};
                                maxResults = 514462L;
                                nextToken = "maiores";
                            }};, DescribeSessionsXAmzTargetEnum.AMAZON_SSM_DESCRIBE_SESSIONS) {{
                maxResults = "alias";
                nextToken = "asperiores";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "suscipit";
                xAmzDate = "earum";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eius";
            }};            

            DescribeSessionsResponse res = sdk.sdk.describeSessions(req);

            if (res.describeSessionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateOpsItemRelatedItem

Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateOpsItemRelatedItemRequest;
import org.openapis.openapi.models.operations.DisassociateOpsItemRelatedItemResponse;
import org.openapis.openapi.models.operations.DisassociateOpsItemRelatedItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateOpsItemRelatedItemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateOpsItemRelatedItemRequest req = new DisassociateOpsItemRelatedItemRequest(                new DisassociateOpsItemRelatedItemRequest("in", "eligendi");, DisassociateOpsItemRelatedItemXAmzTargetEnum.AMAZON_SSM_DISASSOCIATE_OPS_ITEM_RELATED_ITEM) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "neque";
                xAmzCredential = "vero";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            DisassociateOpsItemRelatedItemResponse res = sdk.sdk.disassociateOpsItemRelatedItem(req);

            if (res.disassociateOpsItemRelatedItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationExecution

Get detailed information about a particular Automation execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationExecutionRequest;
import org.openapis.openapi.models.operations.GetAutomationExecutionResponse;
import org.openapis.openapi.models.operations.GetAutomationExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAutomationExecutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAutomationExecutionRequest req = new GetAutomationExecutionRequest(                new GetAutomationExecutionRequest("incidunt");, GetAutomationExecutionXAmzTargetEnum.AMAZON_SSM_GET_AUTOMATION_EXECUTION) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "odit";
                xAmzCredential = "corporis";
                xAmzDate = "rerum";
                xAmzSecurityToken = "alias";
                xAmzSignature = "error";
                xAmzSignedHeaders = "vel";
            }};            

            GetAutomationExecutionResponse res = sdk.sdk.getAutomationExecution(req);

            if (res.getAutomationExecutionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalendarState

<p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p> <p>If you specify more than one calendar in a request, the command returns the status of <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is <code>CLOSED</code>.</p> <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalendarStateRequest;
import org.openapis.openapi.models.operations.GetCalendarStateResponse;
import org.openapis.openapi.models.operations.GetCalendarStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCalendarStateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalendarStateRequest req = new GetCalendarStateRequest(                new GetCalendarStateRequest(                new String[]{{
                                                add("laboriosam"),
                                                add("ex"),
                                                add("quas"),
                                            }}) {{
                                atTime = "veritatis";
                            }};, GetCalendarStateXAmzTargetEnum.AMAZON_SSM_GET_CALENDAR_STATE) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "quae";
                xAmzCredential = "similique";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "quam";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetCalendarStateResponse res = sdk.sdk.getCalendarState(req);

            if (res.getCalendarStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommandInvocation

<p>Returns detailed information about command execution for an invocation or plugin.</p> <p> <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes, use <a>ListCommands</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommandInvocationRequest;
import org.openapis.openapi.models.operations.GetCommandInvocationResponse;
import org.openapis.openapi.models.operations.GetCommandInvocationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCommandInvocationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCommandInvocationRequest req = new GetCommandInvocationRequest(                new GetCommandInvocationRequest("omnis", "sed") {{
                                pluginName = "nesciunt";
                            }};, GetCommandInvocationXAmzTargetEnum.AMAZON_SSM_GET_COMMAND_INVOCATION) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "quis";
                xAmzCredential = "cupiditate";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "laudantium";
            }};            

            GetCommandInvocationResponse res = sdk.sdk.getCommandInvocation(req);

            if (res.getCommandInvocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectionStatus

Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionStatusRequest;
import org.openapis.openapi.models.operations.GetConnectionStatusResponse;
import org.openapis.openapi.models.operations.GetConnectionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetConnectionStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectionStatusRequest req = new GetConnectionStatusRequest(                new GetConnectionStatusRequest("reiciendis");, GetConnectionStatusXAmzTargetEnum.AMAZON_SSM_GET_CONNECTION_STATUS) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "ipsa";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetConnectionStatusResponse res = sdk.sdk.getConnectionStatus(req);

            if (res.getConnectionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDefaultPatchBaseline

<p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you don't specify an operating system value, the default patch baseline for Windows is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDefaultPatchBaselineRequest;
import org.openapis.openapi.models.operations.GetDefaultPatchBaselineResponse;
import org.openapis.openapi.models.operations.GetDefaultPatchBaselineXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDefaultPatchBaselineRequest;
import org.openapis.openapi.models.shared.OperatingSystemEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDefaultPatchBaselineRequest req = new GetDefaultPatchBaselineRequest(                new GetDefaultPatchBaselineRequest() {{
                                operatingSystem = OperatingSystemEnum.AMAZON_LINUX2023;
                            }};, GetDefaultPatchBaselineXAmzTargetEnum.AMAZON_SSM_GET_DEFAULT_PATCH_BASELINE) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "commodi";
            }};            

            GetDefaultPatchBaselineResponse res = sdk.sdk.getDefaultPatchBaseline(req);

            if (res.getDefaultPatchBaselineResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeployablePatchSnapshotForInstance

<p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p> <note> <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the <code>AWS-RunShellScript</code> document or the <code>AWS-RunPowerShellScript</code> document.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeployablePatchSnapshotForInstanceRequest;
import org.openapis.openapi.models.operations.GetDeployablePatchSnapshotForInstanceResponse;
import org.openapis.openapi.models.operations.GetDeployablePatchSnapshotForInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.BaselineOverride;
import org.openapis.openapi.models.shared.GetDeployablePatchSnapshotForInstanceRequest;
import org.openapis.openapi.models.shared.OperatingSystemEnum;
import org.openapis.openapi.models.shared.PatchActionEnum;
import org.openapis.openapi.models.shared.PatchComplianceLevelEnum;
import org.openapis.openapi.models.shared.PatchFilter;
import org.openapis.openapi.models.shared.PatchFilterGroup;
import org.openapis.openapi.models.shared.PatchFilterKeyEnum;
import org.openapis.openapi.models.shared.PatchRule;
import org.openapis.openapi.models.shared.PatchRuleGroup;
import org.openapis.openapi.models.shared.PatchSource;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeployablePatchSnapshotForInstanceRequest req = new GetDeployablePatchSnapshotForInstanceRequest(                new GetDeployablePatchSnapshotForInstanceRequest("porro", "tempore") {{
                                baselineOverride = new BaselineOverride() {{
                                    approvalRules = new PatchRuleGroup(                new org.openapis.openapi.models.shared.PatchRule[]{{
                                                        add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.PRODUCT,                 new String[]{{
                                                                                                                add("modi"),
                                                                                                                add("perferendis"),
                                                                                                                add("necessitatibus"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.EPOCH;
                                                                                                values = new String[]{{
                                                                                                    add("quos"),
                                                                                                    add("corrupti"),
                                                                                                    add("amet"),
                                                                                                    add("molestiae"),
                                                                                                }};
                                                                                            }}),
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.PATCH_SET,                 new String[]{{
                                                                                                                add("earum"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.ADVISORY_ID;
                                                                                                values = new String[]{{
                                                                                                    add("dolore"),
                                                                                                    add("sunt"),
                                                                                                    add("maiores"),
                                                                                                }};
                                                                                            }}),
                                                                                        }});) {{
                                                            approveAfterDays = 265930L;
                                                            approveUntilDate = "voluptates";
                                                            complianceLevel = PatchComplianceLevelEnum.CRITICAL;
                                                            enableNonSecurity = false;
                                                            patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                add(new PatchFilter(PatchFilterKeyEnum.PATCH_SET,                 new String[]{{
                                                                                                    add("natus"),
                                                                                                    add("minus"),
                                                                                                    add("quia"),
                                                                                                }}) {{
                                                                                    key = PatchFilterKeyEnum.SECTION;
                                                                                    values = new String[]{{
                                                                                        add("quasi"),
                                                                                        add("blanditiis"),
                                                                                        add("eius"),
                                                                                        add("quisquam"),
                                                                                    }};
                                                                                }}),
                                                                            }}) {{
                                                                patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                    add(new PatchFilter(PatchFilterKeyEnum.VERSION,                 new String[]{{
                                                                                        add("animi"),
                                                                                        add("maiores"),
                                                                                        add("itaque"),
                                                                                        add("nulla"),
                                                                                    }}) {{
                                                                        key = PatchFilterKeyEnum.PATCH_SET;
                                                                        values = new String[]{{
                                                                            add("asperiores"),
                                                                            add("esse"),
                                                                            add("blanditiis"),
                                                                            add("sint"),
                                                                        }};
                                                                    }}),
                                                                    add(new PatchFilter(PatchFilterKeyEnum.PRODUCT_FAMILY,                 new String[]{{
                                                                                        add("saepe"),
                                                                                        add("eum"),
                                                                                        add("repudiandae"),
                                                                                    }}) {{
                                                                        key = PatchFilterKeyEnum.SECTION;
                                                                        values = new String[]{{
                                                                            add("velit"),
                                                                            add("officiis"),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.SEVERITY,                 new String[]{{
                                                                                                                add("cumque"),
                                                                                                                add("doloremque"),
                                                                                                                add("expedita"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.PATCH_ID;
                                                                                                values = new String[]{{
                                                                                                    add("quasi"),
                                                                                                    add("mollitia"),
                                                                                                }};
                                                                                            }}),
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.CVE_ID,                 new String[]{{
                                                                                                                add("magni"),
                                                                                                                add("tempora"),
                                                                                                                add("possimus"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.NAME;
                                                                                                values = new String[]{{
                                                                                                    add("deserunt"),
                                                                                                }};
                                                                                            }}),
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.VERSION,                 new String[]{{
                                                                                                                add("quo"),
                                                                                                                add("quos"),
                                                                                                                add("asperiores"),
                                                                                                                add("voluptatum"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.PRODUCT;
                                                                                                values = new String[]{{
                                                                                                    add("sed"),
                                                                                                    add("accusamus"),
                                                                                                    add("optio"),
                                                                                                }};
                                                                                            }}),
                                                                                        }});) {{
                                                            approveAfterDays = 330596L;
                                                            approveUntilDate = "ipsam";
                                                            complianceLevel = PatchComplianceLevelEnum.CRITICAL;
                                                            enableNonSecurity = false;
                                                            patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                add(new PatchFilter(PatchFilterKeyEnum.BUGZILLA_ID,                 new String[]{{
                                                                                                    add("soluta"),
                                                                                                    add("dolorum"),
                                                                                                    add("velit"),
                                                                                                    add("earum"),
                                                                                                }}) {{
                                                                                    key = PatchFilterKeyEnum.PRODUCT;
                                                                                    values = new String[]{{
                                                                                        add("harum"),
                                                                                        add("dolore"),
                                                                                        add("voluptatibus"),
                                                                                        add("iure"),
                                                                                    }};
                                                                                }}),
                                                                            }}) {{
                                                                patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                    add(new PatchFilter(PatchFilterKeyEnum.SECURITY,                 new String[]{{
                                                                                        add("quibusdam"),
                                                                                        add("nemo"),
                                                                                    }}) {{
                                                                        key = PatchFilterKeyEnum.CLASSIFICATION;
                                                                        values = new String[]{{
                                                                            add("ad"),
                                                                            add("nisi"),
                                                                        }};
                                                                    }}),
                                                                    add(new PatchFilter(PatchFilterKeyEnum.SECTION,                 new String[]{{
                                                                                        add("sed"),
                                                                                        add("possimus"),
                                                                                        add("repellat"),
                                                                                        add("repudiandae"),
                                                                                    }}) {{
                                                                        key = PatchFilterKeyEnum.CVE_ID;
                                                                        values = new String[]{{
                                                                            add("sit"),
                                                                            add("quidem"),
                                                                            add("repellendus"),
                                                                            add("perferendis"),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.PRODUCT,                 new String[]{{
                                                                                                                add("consectetur"),
                                                                                                                add("cumque"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.PATCH_SET;
                                                                                                values = new String[]{{
                                                                                                    add("inventore"),
                                                                                                    add("aliquid"),
                                                                                                    add("laudantium"),
                                                                                                    add("est"),
                                                                                                }};
                                                                                            }}),
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.PRODUCT_FAMILY,                 new String[]{{
                                                                                                                add("numquam"),
                                                                                                                add("sequi"),
                                                                                                                add("voluptatum"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.MSRC_SEVERITY;
                                                                                                values = new String[]{{
                                                                                                    add("ducimus"),
                                                                                                    add("adipisci"),
                                                                                                    add("recusandae"),
                                                                                                }};
                                                                                            }}),
                                                                                            add(new PatchFilter(PatchFilterKeyEnum.PRIORITY,                 new String[]{{
                                                                                                                add("porro"),
                                                                                                                add("deserunt"),
                                                                                                                add("magni"),
                                                                                                            }}) {{
                                                                                                key = PatchFilterKeyEnum.ARCH;
                                                                                                values = new String[]{{
                                                                                                    add("veritatis"),
                                                                                                    add("tenetur"),
                                                                                                    add("autem"),
                                                                                                }};
                                                                                            }}),
                                                                                        }});) {{
                                                            approveAfterDays = 614770L;
                                                            approveUntilDate = "corporis";
                                                            complianceLevel = PatchComplianceLevelEnum.CRITICAL;
                                                            enableNonSecurity = false;
                                                            patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                add(new PatchFilter(PatchFilterKeyEnum.SECURITY,                 new String[]{{
                                                                                                    add("aliquam"),
                                                                                                    add("quisquam"),
                                                                                                }}) {{
                                                                                    key = PatchFilterKeyEnum.NAME;
                                                                                    values = new String[]{{
                                                                                        add("non"),
                                                                                    }};
                                                                                }}),
                                                                            }}) {{
                                                                patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                    add(new PatchFilter(PatchFilterKeyEnum.SEVERITY,                 new String[]{{
                                                                                        add("sapiente"),
                                                                                        add("mollitia"),
                                                                                    }}) {{
                                                                        key = PatchFilterKeyEnum.ARCH;
                                                                        values = new String[]{{
                                                                            add("nostrum"),
                                                                            add("at"),
                                                                            add("possimus"),
                                                                            add("neque"),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }};
                                                        }}),
                                                    }});;
                                    approvedPatches = new String[]{{
                                        add("voluptas"),
                                        add("animi"),
                                    }};
                                    approvedPatchesComplianceLevel = PatchComplianceLevelEnum.MEDIUM;
                                    approvedPatchesEnableNonSecurity = false;
                                    globalFilters = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                        add(new PatchFilter(PatchFilterKeyEnum.RELEASE,                 new String[]{{
                                                                            add("iste"),
                                                                            add("ullam"),
                                                                        }}) {{
                                                            key = PatchFilterKeyEnum.PRIORITY;
                                                            values = new String[]{{
                                                                add("dolore"),
                                                            }};
                                                        }}),
                                                    }});;
                                    operatingSystem = OperatingSystemEnum.RASPBIAN;
                                    rejectedPatches = new String[]{{
                                        add("voluptas"),
                                        add("occaecati"),
                                        add("unde"),
                                        add("illo"),
                                    }};
                                    rejectedPatchesAction = PatchActionEnum.ALLOW_AS_DEPENDENCY;
                                    sources = new org.openapis.openapi.models.shared.PatchSource[]{{
                                        add(new PatchSource("labore", "expedita",                 new String[]{{
                                                            add("rem"),
                                                            add("atque"),
                                                            add("officiis"),
                                                        }}) {{
                                            configuration = "libero";
                                            name = "Miss Joyce Runolfsson";
                                            products = new String[]{{
                                                add("beatae"),
                                                add("cumque"),
                                                add("delectus"),
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};, GetDeployablePatchSnapshotForInstanceXAmzTargetEnum.AMAZON_SSM_GET_DEPLOYABLE_PATCH_SNAPSHOT_FOR_INSTANCE) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "minus";
            }};            

            GetDeployablePatchSnapshotForInstanceResponse res = sdk.sdk.getDeployablePatchSnapshotForInstance(req);

            if (res.getDeployablePatchSnapshotForInstanceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocument

Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentRequest;
import org.openapis.openapi.models.operations.GetDocumentResponse;
import org.openapis.openapi.models.operations.GetDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentFormatEnum;
import org.openapis.openapi.models.shared.GetDocumentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDocumentRequest req = new GetDocumentRequest(                new GetDocumentRequest("id") {{
                                documentFormat = DocumentFormatEnum.JSON;
                                documentVersion = "occaecati";
                                versionName = "libero";
                            }};, GetDocumentXAmzTargetEnum.AMAZON_SSM_GET_DOCUMENT) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "esse";
                xAmzCredential = "hic";
                xAmzDate = "maxime";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "fugit";
            }};            

            GetDocumentResponse res = sdk.sdk.getDocument(req);

            if (res.getDocumentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInventory

Query inventory information. This includes managed node status, such as <code>Stopped</code> or <code>Terminated</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInventoryRequest;
import org.openapis.openapi.models.operations.GetInventoryResponse;
import org.openapis.openapi.models.operations.GetInventoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInventoryRequest;
import org.openapis.openapi.models.shared.InventoryAggregator;
import org.openapis.openapi.models.shared.InventoryFilter;
import org.openapis.openapi.models.shared.InventoryGroup;
import org.openapis.openapi.models.shared.InventoryQueryOperatorTypeEnum;
import org.openapis.openapi.models.shared.ResultAttribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInventoryRequest req = new GetInventoryRequest(                new GetInventoryRequest() {{
                                aggregators = new org.openapis.openapi.models.shared.InventoryAggregator[]{{
                                    add(new InventoryAggregator() {{
                                        aggregators = new org.openapis.openapi.models.shared.InventoryAggregator[]{{
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                        }};
                                        expression = "veritatis";
                                        groups = new org.openapis.openapi.models.shared.InventoryGroup[]{{
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("mollitia",                 new String[]{{
                                                                                    add("quis"),
                                                                                    add("enim"),
                                                                                    add("eum"),
                                                                                    add("nemo"),
                                                                                }}) {{
                                                                    key = "quaerat";
                                                                    type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                                    values = new String[]{{
                                                                        add("officiis"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("minus",                 new String[]{{
                                                                                    add("recusandae"),
                                                                                    add("voluptates"),
                                                                                    add("praesentium"),
                                                                                    add("dicta"),
                                                                                }}) {{
                                                                    key = "illum";
                                                                    type = InventoryQueryOperatorTypeEnum.NOT_EQUAL;
                                                                    values = new String[]{{
                                                                        add("odio"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("deleniti",                 new String[]{{
                                                                                    add("nesciunt"),
                                                                                }}) {{
                                                                    key = "fugit";
                                                                    type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                                    values = new String[]{{
                                                                        add("necessitatibus"),
                                                                        add("sed"),
                                                                    }};
                                                                }}),
                                                            }}, "delectus") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("voluptatem",                 new String[]{{
                                                                        add("at"),
                                                                        add("eum"),
                                                                    }}) {{
                                                        key = "iusto";
                                                        type = InventoryQueryOperatorTypeEnum.NOT_EQUAL;
                                                        values = new String[]{{
                                                            add("tempora"),
                                                            add("magni"),
                                                            add("rerum"),
                                                            add("doloremque"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("deserunt",                 new String[]{{
                                                                        add("nostrum"),
                                                                        add("atque"),
                                                                        add("architecto"),
                                                                    }}) {{
                                                        key = "reprehenderit";
                                                        type = InventoryQueryOperatorTypeEnum.LESS_THAN;
                                                        values = new String[]{{
                                                            add("nihil"),
                                                            add("atque"),
                                                            add("rerum"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("placeat",                 new String[]{{
                                                                        add("labore"),
                                                                        add("sapiente"),
                                                                    }}) {{
                                                        key = "est";
                                                        type = InventoryQueryOperatorTypeEnum.NOT_EQUAL;
                                                        values = new String[]{{
                                                            add("magni"),
                                                            add("quae"),
                                                            add("quas"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Toby Nitzsche";
                                            }}),
                                        }};
                                    }}),
                                    add(new InventoryAggregator() {{
                                        aggregators = new org.openapis.openapi.models.shared.InventoryAggregator[]{{
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                        }};
                                        expression = "aliquam";
                                        groups = new org.openapis.openapi.models.shared.InventoryGroup[]{{
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("deleniti",                 new String[]{{
                                                                                    add("hic"),
                                                                                    add("excepturi"),
                                                                                    add("aliquid"),
                                                                                }}) {{
                                                                    key = "optio";
                                                                    type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                                    values = new String[]{{
                                                                        add("repellat"),
                                                                        add("quae"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("tenetur",                 new String[]{{
                                                                                    add("esse"),
                                                                                    add("animi"),
                                                                                }}) {{
                                                                    key = "sed";
                                                                    type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                                    values = new String[]{{
                                                                        add("ea"),
                                                                        add("animi"),
                                                                        add("dolore"),
                                                                    }};
                                                                }}),
                                                            }}, "laudantium") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("at",                 new String[]{{
                                                                        add("repellat"),
                                                                    }}) {{
                                                        key = "sunt";
                                                        type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                        values = new String[]{{
                                                            add("voluptatum"),
                                                            add("ipsa"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("fuga",                 new String[]{{
                                                                        add("eaque"),
                                                                        add("dolorem"),
                                                                        add("architecto"),
                                                                        add("aperiam"),
                                                                    }}) {{
                                                        key = "aspernatur";
                                                        type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                        values = new String[]{{
                                                            add("fugit"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Mrs. Christie Halvorson";
                                            }}),
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("enim",                 new String[]{{
                                                                                    add("aperiam"),
                                                                                    add("voluptates"),
                                                                                    add("laudantium"),
                                                                                    add("tempora"),
                                                                                }}) {{
                                                                    key = "illo";
                                                                    type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                                    values = new String[]{{
                                                                        add("temporibus"),
                                                                        add("sint"),
                                                                        add("iusto"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("earum",                 new String[]{{
                                                                                    add("aliquam"),
                                                                                }}) {{
                                                                    key = "quae";
                                                                    type = InventoryQueryOperatorTypeEnum.LESS_THAN;
                                                                    values = new String[]{{
                                                                        add("rem"),
                                                                        add("tenetur"),
                                                                        add("deleniti"),
                                                                        add("modi"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("consequatur",                 new String[]{{
                                                                                    add("debitis"),
                                                                                    add("facere"),
                                                                                }}) {{
                                                                    key = "labore";
                                                                    type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                                    values = new String[]{{
                                                                        add("saepe"),
                                                                    }};
                                                                }}),
                                                            }}, "quisquam") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("eius",                 new String[]{{
                                                                        add("itaque"),
                                                                        add("dignissimos"),
                                                                        add("ipsam"),
                                                                    }}) {{
                                                        key = "eveniet";
                                                        type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                        values = new String[]{{
                                                            add("officiis"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("ipsum",                 new String[]{{
                                                                        add("quaerat"),
                                                                        add("architecto"),
                                                                    }}) {{
                                                        key = "explicabo";
                                                        type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                        values = new String[]{{
                                                            add("quis"),
                                                            add("facilis"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Elbert Ernser";
                                            }}),
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("laborum",                 new String[]{{
                                                                                    add("doloribus"),
                                                                                    add("animi"),
                                                                                }}) {{
                                                                    key = "voluptatum";
                                                                    type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                                    values = new String[]{{
                                                                        add("voluptatibus"),
                                                                        add("voluptas"),
                                                                        add("non"),
                                                                        add("ullam"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("maiores",                 new String[]{{
                                                                                    add("voluptatem"),
                                                                                    add("optio"),
                                                                                }}) {{
                                                                    key = "recusandae";
                                                                    type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                                    values = new String[]{{
                                                                        add("necessitatibus"),
                                                                        add("distinctio"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("doloremque",                 new String[]{{
                                                                                    add("amet"),
                                                                                }}) {{
                                                                    key = "sequi";
                                                                    type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                                    values = new String[]{{
                                                                        add("voluptatibus"),
                                                                    }};
                                                                }}),
                                                            }}, "rerum") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("porro",                 new String[]{{
                                                                        add("nobis"),
                                                                        add("quibusdam"),
                                                                        add("omnis"),
                                                                    }}) {{
                                                        key = "aliquam";
                                                        type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                        values = new String[]{{
                                                            add("ad"),
                                                            add("reiciendis"),
                                                            add("sequi"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("necessitatibus",                 new String[]{{
                                                                        add("ad"),
                                                                    }}) {{
                                                        key = "aut";
                                                        type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                        values = new String[]{{
                                                            add("cupiditate"),
                                                            add("reprehenderit"),
                                                            add("quia"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("sed",                 new String[]{{
                                                                        add("iusto"),
                                                                    }}) {{
                                                        key = "nisi";
                                                        type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                        values = new String[]{{
                                                            add("laudantium"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("esse",                 new String[]{{
                                                                        add("distinctio"),
                                                                    }}) {{
                                                        key = "expedita";
                                                        type = InventoryQueryOperatorTypeEnum.NOT_EQUAL;
                                                        values = new String[]{{
                                                            add("nesciunt"),
                                                            add("ipsa"),
                                                            add("sint"),
                                                            add("dolore"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Darryl Orn";
                                            }}),
                                        }};
                                    }}),
                                    add(new InventoryAggregator() {{
                                        aggregators = new org.openapis.openapi.models.shared.InventoryAggregator[]{{
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                        }};
                                        expression = "nostrum";
                                        groups = new org.openapis.openapi.models.shared.InventoryGroup[]{{
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("ex",                 new String[]{{
                                                                                    add("unde"),
                                                                                    add("alias"),
                                                                                    add("impedit"),
                                                                                    add("sequi"),
                                                                                }}) {{
                                                                    key = "aperiam";
                                                                    type = InventoryQueryOperatorTypeEnum.LESS_THAN;
                                                                    values = new String[]{{
                                                                        add("provident"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("enim",                 new String[]{{
                                                                                    add("maiores"),
                                                                                    add("distinctio"),
                                                                                    add("mollitia"),
                                                                                    add("impedit"),
                                                                                }}) {{
                                                                    key = "commodi";
                                                                    type = InventoryQueryOperatorTypeEnum.NOT_EQUAL;
                                                                    values = new String[]{{
                                                                        add("in"),
                                                                        add("quisquam"),
                                                                        add("sunt"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("impedit",                 new String[]{{
                                                                                    add("eveniet"),
                                                                                    add("repudiandae"),
                                                                                }}) {{
                                                                    key = "accusamus";
                                                                    type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                                    values = new String[]{{
                                                                        add("blanditiis"),
                                                                        add("cum"),
                                                                        add("dicta"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("recusandae",                 new String[]{{
                                                                                    add("beatae"),
                                                                                    add("veritatis"),
                                                                                }}) {{
                                                                    key = "sed";
                                                                    type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                                    values = new String[]{{
                                                                        add("impedit"),
                                                                        add("vel"),
                                                                        add("eligendi"),
                                                                    }};
                                                                }}),
                                                            }}, "maiores") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("vitae",                 new String[]{{
                                                                        add("accusantium"),
                                                                        add("quod"),
                                                                        add("minus"),
                                                                    }}) {{
                                                        key = "dolor";
                                                        type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                        values = new String[]{{
                                                            add("reiciendis"),
                                                            add("itaque"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Owen Wuckert";
                                            }}),
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("neque",                 new String[]{{
                                                                                    add("suscipit"),
                                                                                    add("harum"),
                                                                                    add("ducimus"),
                                                                                }}) {{
                                                                    key = "maiores";
                                                                    type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                                    values = new String[]{{
                                                                        add("repudiandae"),
                                                                        add("aspernatur"),
                                                                        add("sapiente"),
                                                                    }};
                                                                }}),
                                                            }}, "doloremque") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("dignissimos",                 new String[]{{
                                                                        add("distinctio"),
                                                                        add("possimus"),
                                                                        add("cum"),
                                                                        add("suscipit"),
                                                                    }}) {{
                                                        key = "vero";
                                                        type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                        values = new String[]{{
                                                            add("quo"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("laudantium",                 new String[]{{
                                                                        add("deserunt"),
                                                                        add("odit"),
                                                                        add("ad"),
                                                                    }}) {{
                                                        key = "saepe";
                                                        type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                        values = new String[]{{
                                                            add("nihil"),
                                                            add("quaerat"),
                                                            add("ipsum"),
                                                            add("ducimus"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("odio",                 new String[]{{
                                                                        add("impedit"),
                                                                        add("cupiditate"),
                                                                        add("illo"),
                                                                        add("exercitationem"),
                                                                    }}) {{
                                                        key = "sequi";
                                                        type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                        values = new String[]{{
                                                            add("esse"),
                                                            add("magnam"),
                                                        }};
                                                    }}),
                                                    add(new InventoryFilter("dolorum",                 new String[]{{
                                                                        add("nostrum"),
                                                                        add("illum"),
                                                                        add("quibusdam"),
                                                                        add("commodi"),
                                                                    }}) {{
                                                        key = "laborum";
                                                        type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                        values = new String[]{{
                                                            add("maxime"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Judith Feest";
                                            }}),
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("tempora",                 new String[]{{
                                                                                    add("corrupti"),
                                                                                }}) {{
                                                                    key = "nam";
                                                                    type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                                    values = new String[]{{
                                                                        add("ipsam"),
                                                                        add("minima"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("nobis",                 new String[]{{
                                                                                    add("porro"),
                                                                                    add("impedit"),
                                                                                    add("nisi"),
                                                                                }}) {{
                                                                    key = "doloremque";
                                                                    type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                                    values = new String[]{{
                                                                        add("doloremque"),
                                                                        add("cum"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("consectetur",                 new String[]{{
                                                                                    add("maxime"),
                                                                                    add("cupiditate"),
                                                                                    add("voluptatem"),
                                                                                    add("provident"),
                                                                                }}) {{
                                                                    key = "cumque";
                                                                    type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                                    values = new String[]{{
                                                                        add("laboriosam"),
                                                                        add("nam"),
                                                                        add("enim"),
                                                                        add("maiores"),
                                                                    }};
                                                                }}),
                                                            }}, "adipisci") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("ab",                 new String[]{{
                                                                        add("amet"),
                                                                        add("sapiente"),
                                                                    }}) {{
                                                        key = "laudantium";
                                                        type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                        values = new String[]{{
                                                            add("molestiae"),
                                                            add("quis"),
                                                            add("iure"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Monique Kerluke";
                                            }}),
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("possimus",                 new String[]{{
                                                                                    add("voluptatem"),
                                                                                }}) {{
                                                                    key = "eius";
                                                                    type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                                    values = new String[]{{
                                                                        add("voluptates"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("blanditiis",                 new String[]{{
                                                                                    add("maiores"),
                                                                                    add("asperiores"),
                                                                                    add("autem"),
                                                                                    add("nesciunt"),
                                                                                }}) {{
                                                                    key = "repudiandae";
                                                                    type = InventoryQueryOperatorTypeEnum.BEGIN_WITH;
                                                                    values = new String[]{{
                                                                        add("eos"),
                                                                        add("aliquam"),
                                                                    }};
                                                                }}),
                                                            }}, "cupiditate") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("id",                 new String[]{{
                                                                        add("fugit"),
                                                                        add("ipsam"),
                                                                        add("nostrum"),
                                                                        add("sequi"),
                                                                    }}) {{
                                                        key = "magnam";
                                                        type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                        values = new String[]{{
                                                            add("explicabo"),
                                                            add("vel"),
                                                            add("cum"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Roger Mueller";
                                            }}),
                                        }};
                                    }}),
                                    add(new InventoryAggregator() {{
                                        aggregators = new org.openapis.openapi.models.shared.InventoryAggregator[]{{
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                            add(new InventoryAggregator() {{}}),
                                        }};
                                        expression = "provident";
                                        groups = new org.openapis.openapi.models.shared.InventoryGroup[]{{
                                            add(new InventoryGroup(                new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                                add(new InventoryFilter("vitae",                 new String[]{{
                                                                                    add("sequi"),
                                                                                    add("amet"),
                                                                                    add("exercitationem"),
                                                                                }}) {{
                                                                    key = "eaque";
                                                                    type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                                    values = new String[]{{
                                                                        add("consequuntur"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("amet",                 new String[]{{
                                                                                    add("nobis"),
                                                                                    add("asperiores"),
                                                                                    add("temporibus"),
                                                                                    add("id"),
                                                                                }}) {{
                                                                    key = "illum";
                                                                    type = InventoryQueryOperatorTypeEnum.LESS_THAN;
                                                                    values = new String[]{{
                                                                        add("similique"),
                                                                        add("eligendi"),
                                                                        add("tempore"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("veniam",                 new String[]{{
                                                                                    add("provident"),
                                                                                    add("vero"),
                                                                                }}) {{
                                                                    key = "atque";
                                                                    type = InventoryQueryOperatorTypeEnum.EXISTS;
                                                                    values = new String[]{{
                                                                        add("quo"),
                                                                    }};
                                                                }}),
                                                                add(new InventoryFilter("doloremque",                 new String[]{{
                                                                                    add("perspiciatis"),
                                                                                    add("quam"),
                                                                                }}) {{
                                                                    key = "earum";
                                                                    type = InventoryQueryOperatorTypeEnum.EQUAL;
                                                                    values = new String[]{{
                                                                        add("alias"),
                                                                    }};
                                                                }}),
                                                            }}, "atque") {{
                                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                                    add(new InventoryFilter("fugit",                 new String[]{{
                                                                        add("voluptate"),
                                                                        add("nisi"),
                                                                    }}) {{
                                                        key = "mollitia";
                                                        type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                                        values = new String[]{{
                                                            add("quo"),
                                                            add("fuga"),
                                                            add("tempore"),
                                                            add("commodi"),
                                                        }};
                                                    }}),
                                                }};
                                                name = "Daisy Howe DVM";
                                            }}),
                                        }};
                                    }}),
                                }};
                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                    add(new InventoryFilter("qui",                 new String[]{{
                                                        add("commodi"),
                                                    }}) {{
                                        key = "ex";
                                        type = InventoryQueryOperatorTypeEnum.EQUAL;
                                        values = new String[]{{
                                            add("laborum"),
                                            add("veritatis"),
                                            add("quod"),
                                            add("a"),
                                        }};
                                    }}),
                                    add(new InventoryFilter("sapiente",                 new String[]{{
                                                        add("quod"),
                                                        add("voluptate"),
                                                        add("inventore"),
                                                        add("facere"),
                                                    }}) {{
                                        key = "atque";
                                        type = InventoryQueryOperatorTypeEnum.LESS_THAN;
                                        values = new String[]{{
                                            add("voluptate"),
                                            add("quam"),
                                            add("quod"),
                                            add("vitae"),
                                        }};
                                    }}),
                                    add(new InventoryFilter("consectetur",                 new String[]{{
                                                        add("sed"),
                                                        add("animi"),
                                                        add("sequi"),
                                                        add("eligendi"),
                                                    }}) {{
                                        key = "maxime";
                                        type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("ex"),
                                        }};
                                    }}),
                                }};
                                maxResults = 528315L;
                                nextToken = "perferendis";
                                resultAttributes = new org.openapis.openapi.models.shared.ResultAttribute[]{{
                                    add(new ResultAttribute("nihil") {{
                                        typeName = "omnis";
                                    }}),
                                    add(new ResultAttribute("sapiente") {{
                                        typeName = "tenetur";
                                    }}),
                                    add(new ResultAttribute("adipisci") {{
                                        typeName = "velit";
                                    }}),
                                }};
                            }};, GetInventoryXAmzTargetEnum.AMAZON_SSM_GET_INVENTORY) {{
                maxResults = "non";
                nextToken = "optio";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "at";
                xAmzCredential = "tenetur";
                xAmzDate = "molestias";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "laborum";
            }};            

            GetInventoryResponse res = sdk.sdk.getInventory(req);

            if (res.getInventoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInventorySchema

Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInventorySchemaRequest;
import org.openapis.openapi.models.operations.GetInventorySchemaResponse;
import org.openapis.openapi.models.operations.GetInventorySchemaXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetInventorySchemaRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInventorySchemaRequest req = new GetInventorySchemaRequest(                new GetInventorySchemaRequest() {{
                                aggregator = false;
                                maxResults = 915647L;
                                nextToken = "eum";
                                subType = false;
                                typeName = "quasi";
                            }};, GetInventorySchemaXAmzTargetEnum.AMAZON_SSM_GET_INVENTORY_SCHEMA) {{
                maxResults = "quas";
                nextToken = "odio";
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "porro";
                xAmzCredential = "aliquid";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "et";
            }};            

            GetInventorySchemaResponse res = sdk.sdk.getInventorySchema(req);

            if (res.getInventorySchemaResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMaintenanceWindow

Retrieves a maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.GetMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.GetMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMaintenanceWindowRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMaintenanceWindowRequest req = new GetMaintenanceWindowRequest(                new GetMaintenanceWindowRequest("magni");, GetMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_GET_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "illum";
                xAmzCredential = "a";
                xAmzDate = "impedit";
                xAmzSecurityToken = "unde";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facere";
            }};            

            GetMaintenanceWindowResponse res = sdk.sdk.getMaintenanceWindow(req);

            if (res.getMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMaintenanceWindowExecution

Retrieves details about a specific a maintenance window execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionRequest;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionResponse;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMaintenanceWindowExecutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMaintenanceWindowExecutionRequest req = new GetMaintenanceWindowExecutionRequest(                new GetMaintenanceWindowExecutionRequest("doloribus");, GetMaintenanceWindowExecutionXAmzTargetEnum.AMAZON_SSM_GET_MAINTENANCE_WINDOW_EXECUTION) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "facere";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "iste";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "dolor";
            }};            

            GetMaintenanceWindowExecutionResponse res = sdk.sdk.getMaintenanceWindowExecution(req);

            if (res.getMaintenanceWindowExecutionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMaintenanceWindowExecutionTask

Retrieves the details about a specific task run as part of a maintenance window execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionTaskRequest;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionTaskResponse;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMaintenanceWindowExecutionTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMaintenanceWindowExecutionTaskRequest req = new GetMaintenanceWindowExecutionTaskRequest(                new GetMaintenanceWindowExecutionTaskRequest("aperiam", "eaque");, GetMaintenanceWindowExecutionTaskXAmzTargetEnum.AMAZON_SSM_GET_MAINTENANCE_WINDOW_EXECUTION_TASK) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "laborum";
                xAmzDate = "autem";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "fugiat";
            }};            

            GetMaintenanceWindowExecutionTaskResponse res = sdk.sdk.getMaintenanceWindowExecutionTask(req);

            if (res.getMaintenanceWindowExecutionTaskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMaintenanceWindowExecutionTaskInvocation

Retrieves information about a specific task running on a specific target.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionTaskInvocationRequest;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionTaskInvocationResponse;
import org.openapis.openapi.models.operations.GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMaintenanceWindowExecutionTaskInvocationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMaintenanceWindowExecutionTaskInvocationRequest req = new GetMaintenanceWindowExecutionTaskInvocationRequest(                new GetMaintenanceWindowExecutionTaskInvocationRequest("voluptatem", "alias", "velit");, GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum.AMAZON_SSM_GET_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATION) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "quis";
                xAmzCredential = "velit";
                xAmzDate = "ratione";
                xAmzSecurityToken = "quas";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "recusandae";
            }};            

            GetMaintenanceWindowExecutionTaskInvocationResponse res = sdk.sdk.getMaintenanceWindowExecutionTaskInvocation(req);

            if (res.getMaintenanceWindowExecutionTaskInvocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMaintenanceWindowTask

<p>Retrieves the details of a maintenance window task.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note> <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaintenanceWindowTaskRequest;
import org.openapis.openapi.models.operations.GetMaintenanceWindowTaskResponse;
import org.openapis.openapi.models.operations.GetMaintenanceWindowTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMaintenanceWindowTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMaintenanceWindowTaskRequest req = new GetMaintenanceWindowTaskRequest(                new GetMaintenanceWindowTaskRequest("doloremque", "totam");, GetMaintenanceWindowTaskXAmzTargetEnum.AMAZON_SSM_GET_MAINTENANCE_WINDOW_TASK) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "est";
                xAmzDate = "fugit";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "iste";
            }};            

            GetMaintenanceWindowTaskResponse res = sdk.sdk.getMaintenanceWindowTask(req);

            if (res.getMaintenanceWindowTaskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOpsItem

<p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOpsItemRequest;
import org.openapis.openapi.models.operations.GetOpsItemResponse;
import org.openapis.openapi.models.operations.GetOpsItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOpsItemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOpsItemRequest req = new GetOpsItemRequest(                new GetOpsItemRequest("ipsam") {{
                                opsItemArn = "consequuntur";
                            }};, GetOpsItemXAmzTargetEnum.AMAZON_SSM_GET_OPS_ITEM) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "non";
                xAmzDate = "beatae";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "beatae";
            }};            

            GetOpsItemResponse res = sdk.sdk.getOpsItem(req);

            if (res.getOpsItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOpsMetadata

View operational metadata related to an application in Application Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOpsMetadataRequest;
import org.openapis.openapi.models.operations.GetOpsMetadataResponse;
import org.openapis.openapi.models.operations.GetOpsMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOpsMetadataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOpsMetadataRequest req = new GetOpsMetadataRequest(                new GetOpsMetadataRequest("ducimus") {{
                                maxResults = 728474L;
                                nextToken = "molestias";
                            }};, GetOpsMetadataXAmzTargetEnum.AMAZON_SSM_GET_OPS_METADATA) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "impedit";
                xAmzDate = "quos";
                xAmzSecurityToken = "illum";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "voluptatem";
            }};            

            GetOpsMetadataResponse res = sdk.sdk.getOpsMetadata(req);

            if (res.getOpsMetadataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOpsSummary

View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOpsSummaryRequest;
import org.openapis.openapi.models.operations.GetOpsSummaryResponse;
import org.openapis.openapi.models.operations.GetOpsSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOpsSummaryRequest;
import org.openapis.openapi.models.shared.OpsAggregator;
import org.openapis.openapi.models.shared.OpsFilter;
import org.openapis.openapi.models.shared.OpsFilterOperatorTypeEnum;
import org.openapis.openapi.models.shared.OpsResultAttribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOpsSummaryRequest req = new GetOpsSummaryRequest(                new GetOpsSummaryRequest() {{
                                aggregators = new org.openapis.openapi.models.shared.OpsAggregator[]{{
                                    add(new OpsAggregator() {{
                                        aggregatorType = "consequatur";
                                        aggregators = new org.openapis.openapi.models.shared.OpsAggregator[]{{
                                            add(new OpsAggregator() {{}}),
                                            add(new OpsAggregator() {{}}),
                                            add(new OpsAggregator() {{}}),
                                        }};
                                        attributeName = "repellendus";
                                        filters = new org.openapis.openapi.models.shared.OpsFilter[]{{
                                            add(new OpsFilter("tenetur",                 new String[]{{
                                                                add("dolore"),
                                                                add("enim"),
                                                                add("ullam"),
                                                                add("perspiciatis"),
                                                            }}) {{
                                                key = "quibusdam";
                                                type = OpsFilterOperatorTypeEnum.NOT_EQUAL;
                                                values = new String[]{{
                                                    add("quaerat"),
                                                    add("earum"),
                                                }};
                                            }}),
                                            add(new OpsFilter("quibusdam",                 new String[]{{
                                                                add("rem"),
                                                                add("officiis"),
                                                            }}) {{
                                                key = "alias";
                                                type = OpsFilterOperatorTypeEnum.BEGIN_WITH;
                                                values = new String[]{{
                                                    add("dicta"),
                                                    add("quia"),
                                                    add("commodi"),
                                                    add("neque"),
                                                }};
                                            }}),
                                        }};
                                        typeName = "omnis";
                                        values = new java.util.HashMap<String, String>() {{
                                            put("corporis", "quod");
                                        }};
                                    }}),
                                    add(new OpsAggregator() {{
                                        aggregatorType = "dolores";
                                        aggregators = new org.openapis.openapi.models.shared.OpsAggregator[]{{
                                            add(new OpsAggregator() {{}}),
                                            add(new OpsAggregator() {{}}),
                                            add(new OpsAggregator() {{}}),
                                            add(new OpsAggregator() {{}}),
                                        }};
                                        attributeName = "excepturi";
                                        filters = new org.openapis.openapi.models.shared.OpsFilter[]{{
                                            add(new OpsFilter("sequi",                 new String[]{{
                                                                add("labore"),
                                                                add("adipisci"),
                                                                add("magni"),
                                                                add("aperiam"),
                                                            }}) {{
                                                key = "quos";
                                                type = OpsFilterOperatorTypeEnum.EQUAL;
                                                values = new String[]{{
                                                    add("ipsum"),
                                                    add("consequatur"),
                                                    add("soluta"),
                                                    add("necessitatibus"),
                                                }};
                                            }}),
                                            add(new OpsFilter("aliquid",                 new String[]{{
                                                                add("voluptate"),
                                                                add("vel"),
                                                            }}) {{
                                                key = "dolores";
                                                type = OpsFilterOperatorTypeEnum.EXISTS;
                                                values = new String[]{{
                                                    add("magni"),
                                                    add("beatae"),
                                                }};
                                            }}),
                                            add(new OpsFilter("quasi",                 new String[]{{
                                                                add("dignissimos"),
                                                                add("doloremque"),
                                                                add("assumenda"),
                                                            }}) {{
                                                key = "minima";
                                                type = OpsFilterOperatorTypeEnum.EQUAL;
                                                values = new String[]{{
                                                    add("laboriosam"),
                                                    add("quaerat"),
                                                }};
                                            }}),
                                            add(new OpsFilter("voluptatibus",                 new String[]{{
                                                                add("deserunt"),
                                                                add("repellendus"),
                                                                add("consequatur"),
                                                            }}) {{
                                                key = "provident";
                                                type = OpsFilterOperatorTypeEnum.GREATER_THAN;
                                                values = new String[]{{
                                                    add("inventore"),
                                                }};
                                            }}),
                                        }};
                                        typeName = "adipisci";
                                        values = new java.util.HashMap<String, String>() {{
                                            put("optio", "tempora");
                                        }};
                                    }}),
                                }};
                                filters = new org.openapis.openapi.models.shared.OpsFilter[]{{
                                    add(new OpsFilter("id",                 new String[]{{
                                                        add("quos"),
                                                    }}) {{
                                        key = "cumque";
                                        type = OpsFilterOperatorTypeEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("beatae"),
                                        }};
                                    }}),
                                    add(new OpsFilter("voluptatem",                 new String[]{{
                                                        add("laudantium"),
                                                        add("facilis"),
                                                    }}) {{
                                        key = "ratione";
                                        type = OpsFilterOperatorTypeEnum.BEGIN_WITH;
                                        values = new String[]{{
                                            add("eos"),
                                            add("natus"),
                                        }};
                                    }}),
                                    add(new OpsFilter("officia",                 new String[]{{
                                                        add("corporis"),
                                                        add("accusamus"),
                                                    }}) {{
                                        key = "laudantium";
                                        type = OpsFilterOperatorTypeEnum.BEGIN_WITH;
                                        values = new String[]{{
                                            add("quia"),
                                        }};
                                    }}),
                                    add(new OpsFilter("quisquam",                 new String[]{{
                                                        add("tempora"),
                                                        add("ipsam"),
                                                        add("officiis"),
                                                    }}) {{
                                        key = "iusto";
                                        type = OpsFilterOperatorTypeEnum.EXISTS;
                                        values = new String[]{{
                                            add("neque"),
                                            add("quidem"),
                                        }};
                                    }}),
                                }};
                                maxResults = 196497L;
                                nextToken = "magni";
                                resultAttributes = new org.openapis.openapi.models.shared.OpsResultAttribute[]{{
                                    add(new OpsResultAttribute("amet") {{
                                        typeName = "est";
                                    }}),
                                }};
                                syncName = "veritatis";
                            }};, GetOpsSummaryXAmzTargetEnum.AMAZON_SSM_GET_OPS_SUMMARY) {{
                maxResults = "error";
                nextToken = "voluptatibus";
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dolorum";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "earum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "numquam";
            }};            

            GetOpsSummaryResponse res = sdk.sdk.getOpsSummary(req);

            if (res.getOpsSummaryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParameter

<p>Get information about a single parameter by specifying the parameter name.</p> <note> <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParameterRequest;
import org.openapis.openapi.models.operations.GetParameterResponse;
import org.openapis.openapi.models.operations.GetParameterXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetParameterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetParameterRequest req = new GetParameterRequest(                new GetParameterRequest("impedit") {{
                                withDecryption = false;
                            }};, GetParameterXAmzTargetEnum.AMAZON_SSM_GET_PARAMETER) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "animi";
                xAmzCredential = "voluptatum";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "optio";
            }};            

            GetParameterResponse res = sdk.sdk.getParameter(req);

            if (res.getParameterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParameterHistory

<p>Retrieves the history of all changes to a parameter.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>GetParameterHistory</code> retrieves whatever the original key alias was referencing.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParameterHistoryRequest;
import org.openapis.openapi.models.operations.GetParameterHistoryResponse;
import org.openapis.openapi.models.operations.GetParameterHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetParameterHistoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetParameterHistoryRequest req = new GetParameterHistoryRequest(                new GetParameterHistoryRequest("eos") {{
                                maxResults = 299379L;
                                nextToken = "dolores";
                                withDecryption = false;
                            }};, GetParameterHistoryXAmzTargetEnum.AMAZON_SSM_GET_PARAMETER_HISTORY) {{
                maxResults = "aliquid";
                nextToken = "eum";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "ad";
                xAmzCredential = "quos";
                xAmzDate = "illo";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "fugiat";
            }};            

            GetParameterHistoryResponse res = sdk.sdk.getParameterHistory(req);

            if (res.getParameterHistoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParameters

<p>Get information about one or more parameters by specifying multiple parameter names.</p> <note> <p>To get information about a single parameter, you can use the <a>GetParameter</a> operation instead.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParametersRequest;
import org.openapis.openapi.models.operations.GetParametersResponse;
import org.openapis.openapi.models.operations.GetParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetParametersRequest req = new GetParametersRequest(                new GetParametersRequest(                new String[]{{
                                                add("atque"),
                                                add("voluptates"),
                                                add("maiores"),
                                            }}) {{
                                withDecryption = false;
                            }};, GetParametersXAmzTargetEnum.AMAZON_SSM_GET_PARAMETERS) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "illo";
                xAmzCredential = "doloribus";
                xAmzDate = "cumque";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "cumque";
            }};            

            GetParametersResponse res = sdk.sdk.getParameters(req);

            if (res.getParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getParametersByPath

<p>Retrieve information about one or more parameters in a specific hierarchy. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParametersByPathRequest;
import org.openapis.openapi.models.operations.GetParametersByPathResponse;
import org.openapis.openapi.models.operations.GetParametersByPathXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetParametersByPathRequest;
import org.openapis.openapi.models.shared.ParameterStringFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetParametersByPathRequest req = new GetParametersByPathRequest(                new GetParametersByPathRequest("occaecati") {{
                                maxResults = 219279L;
                                nextToken = "accusamus";
                                parameterFilters = new org.openapis.openapi.models.shared.ParameterStringFilter[]{{
                                    add(new ParameterStringFilter("ipsa") {{
                                        key = "quasi";
                                        option = "fugit";
                                        values = new String[]{{
                                            add("temporibus"),
                                            add("mollitia"),
                                            add("id"),
                                            add("quibusdam"),
                                        }};
                                    }}),
                                    add(new ParameterStringFilter("saepe") {{
                                        key = "accusamus";
                                        option = "placeat";
                                        values = new String[]{{
                                            add("similique"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new ParameterStringFilter("incidunt") {{
                                        key = "facere";
                                        option = "nobis";
                                        values = new String[]{{
                                            add("molestias"),
                                            add("aut"),
                                            add("temporibus"),
                                            add("tenetur"),
                                        }};
                                    }}),
                                    add(new ParameterStringFilter("iste") {{
                                        key = "numquam";
                                        option = "corrupti";
                                        values = new String[]{{
                                            add("dolore"),
                                            add("esse"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                recursive = false;
                                withDecryption = false;
                            }};, GetParametersByPathXAmzTargetEnum.AMAZON_SSM_GET_PARAMETERS_BY_PATH) {{
                maxResults = "amet";
                nextToken = "occaecati";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "minima";
                xAmzDate = "quos";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "voluptatem";
            }};            

            GetParametersByPathResponse res = sdk.sdk.getParametersByPath(req);

            if (res.getParametersByPathResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPatchBaseline

Retrieves information about a patch baseline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPatchBaselineRequest;
import org.openapis.openapi.models.operations.GetPatchBaselineResponse;
import org.openapis.openapi.models.operations.GetPatchBaselineXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPatchBaselineRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPatchBaselineRequest req = new GetPatchBaselineRequest(                new GetPatchBaselineRequest("quas");, GetPatchBaselineXAmzTargetEnum.AMAZON_SSM_GET_PATCH_BASELINE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "fuga";
                xAmzDate = "facilis";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "error";
                xAmzSignedHeaders = "recusandae";
            }};            

            GetPatchBaselineResponse res = sdk.sdk.getPatchBaseline(req);

            if (res.getPatchBaselineResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPatchBaselineForPatchGroup

Retrieves the patch baseline that should be used for the specified patch group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPatchBaselineForPatchGroupRequest;
import org.openapis.openapi.models.operations.GetPatchBaselineForPatchGroupResponse;
import org.openapis.openapi.models.operations.GetPatchBaselineForPatchGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPatchBaselineForPatchGroupRequest;
import org.openapis.openapi.models.shared.OperatingSystemEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPatchBaselineForPatchGroupRequest req = new GetPatchBaselineForPatchGroupRequest(                new GetPatchBaselineForPatchGroupRequest("consectetur") {{
                                operatingSystem = OperatingSystemEnum.AMAZON_LINUX2023;
                            }};, GetPatchBaselineForPatchGroupXAmzTargetEnum.AMAZON_SSM_GET_PATCH_BASELINE_FOR_PATCH_GROUP) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "repellendus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetPatchBaselineForPatchGroupResponse res = sdk.sdk.getPatchBaselineForPatchGroup(req);

            if (res.getPatchBaselineForPatchGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicies

Returns an array of the <code>Policy</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePoliciesRequest;
import org.openapis.openapi.models.operations.GetResourcePoliciesResponse;
import org.openapis.openapi.models.operations.GetResourcePoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourcePoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePoliciesRequest req = new GetResourcePoliciesRequest(                new GetResourcePoliciesRequest("quam") {{
                                maxResults = 606262L;
                                nextToken = "similique";
                            }};, GetResourcePoliciesXAmzTargetEnum.AMAZON_SSM_GET_RESOURCE_POLICIES) {{
                maxResults = "asperiores";
                nextToken = "modi";
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quis";
                xAmzDate = "in";
                xAmzSecurityToken = "sed";
                xAmzSignature = "non";
                xAmzSignedHeaders = "porro";
            }};            

            GetResourcePoliciesResponse res = sdk.sdk.getResourcePolicies(req);

            if (res.getResourcePoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of <code>false</code>. This means the user can't use this feature unless they change the setting to <code>true</code> and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Query the current service setting for the Amazon Web Services account. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceSettingRequest;
import org.openapis.openapi.models.operations.GetServiceSettingResponse;
import org.openapis.openapi.models.operations.GetServiceSettingXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetServiceSettingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceSettingRequest req = new GetServiceSettingRequest(                new GetServiceSettingRequest("soluta");, GetServiceSettingXAmzTargetEnum.AMAZON_SSM_GET_SERVICE_SETTING) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "labore";
                xAmzDate = "vero";
                xAmzSecurityToken = "eos";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "quasi";
            }};            

            GetServiceSettingResponse res = sdk.sdk.getServiceSetting(req);

            if (res.getServiceSettingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## labelParameterVersion

<p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LabelParameterVersionRequest;
import org.openapis.openapi.models.operations.LabelParameterVersionResponse;
import org.openapis.openapi.models.operations.LabelParameterVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.LabelParameterVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            LabelParameterVersionRequest req = new LabelParameterVersionRequest(                new LabelParameterVersionRequest(                new String[]{{
                                                add("iusto"),
                                                add("fugiat"),
                                                add("enim"),
                                            }}, "iure") {{
                                parameterVersion = 512408L;
                            }};, LabelParameterVersionXAmzTargetEnum.AMAZON_SSM_LABEL_PARAMETER_VERSION) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "accusamus";
                xAmzDate = "nulla";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "praesentium";
            }};            

            LabelParameterVersionResponse res = sdk.sdk.labelParameterVersion(req);

            if (res.labelParameterVersionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociationVersions

Retrieves all versions of an association for a specific association ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociationVersionsRequest;
import org.openapis.openapi.models.operations.ListAssociationVersionsResponse;
import org.openapis.openapi.models.operations.ListAssociationVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAssociationVersionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociationVersionsRequest req = new ListAssociationVersionsRequest(                new ListAssociationVersionsRequest("animi") {{
                                maxResults = 599581L;
                                nextToken = "quae";
                            }};, ListAssociationVersionsXAmzTargetEnum.AMAZON_SSM_LIST_ASSOCIATION_VERSIONS) {{
                maxResults = "eum";
                nextToken = "nostrum";
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "ratione";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListAssociationVersionsResponse res = sdk.sdk.listAssociationVersions(req);

            if (res.listAssociationVersionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociations

Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociationsRequest;
import org.openapis.openapi.models.operations.ListAssociationsResponse;
import org.openapis.openapi.models.operations.ListAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociationFilter;
import org.openapis.openapi.models.shared.AssociationFilterKeyEnum;
import org.openapis.openapi.models.shared.ListAssociationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociationsRequest req = new ListAssociationsRequest(                new ListAssociationsRequest() {{
                                associationFilterList = new org.openapis.openapi.models.shared.AssociationFilter[]{{
                                    add(new AssociationFilter(AssociationFilterKeyEnum.NAME, "quidem") {{
                                        key = AssociationFilterKeyEnum.INSTANCE_ID;
                                        value = "nesciunt";
                                    }}),
                                }};
                                maxResults = 377161L;
                                nextToken = "quo";
                            }};, ListAssociationsXAmzTargetEnum.AMAZON_SSM_LIST_ASSOCIATIONS) {{
                maxResults = "laudantium";
                nextToken = "dignissimos";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "fugit";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "debitis";
            }};            

            ListAssociationsResponse res = sdk.sdk.listAssociations(req);

            if (res.listAssociationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCommandInvocations

An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. <code>ListCommandInvocations</code> provide status about command execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCommandInvocationsRequest;
import org.openapis.openapi.models.operations.ListCommandInvocationsResponse;
import org.openapis.openapi.models.operations.ListCommandInvocationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CommandFilter;
import org.openapis.openapi.models.shared.CommandFilterKeyEnum;
import org.openapis.openapi.models.shared.ListCommandInvocationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCommandInvocationsRequest req = new ListCommandInvocationsRequest(                new ListCommandInvocationsRequest() {{
                                commandId = "dolor";
                                details = false;
                                filters = new org.openapis.openapi.models.shared.CommandFilter[]{{
                                    add(new CommandFilter(CommandFilterKeyEnum.DOCUMENT_NAME, "reprehenderit") {{
                                        key = CommandFilterKeyEnum.STATUS;
                                        value = "ut";
                                    }}),
                                    add(new CommandFilter(CommandFilterKeyEnum.INVOKED_AFTER, "eos") {{
                                        key = CommandFilterKeyEnum.EXECUTION_STAGE;
                                        value = "itaque";
                                    }}),
                                }};
                                instanceId = "impedit";
                                maxResults = 401388L;
                                nextToken = "praesentium";
                            }};, ListCommandInvocationsXAmzTargetEnum.AMAZON_SSM_LIST_COMMAND_INVOCATIONS) {{
                maxResults = "natus";
                nextToken = "vitae";
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "aspernatur";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "inventore";
            }};            

            ListCommandInvocationsResponse res = sdk.sdk.listCommandInvocations(req);

            if (res.listCommandInvocationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCommands

Lists the commands requested by users of the Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCommandsRequest;
import org.openapis.openapi.models.operations.ListCommandsResponse;
import org.openapis.openapi.models.operations.ListCommandsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CommandFilter;
import org.openapis.openapi.models.shared.CommandFilterKeyEnum;
import org.openapis.openapi.models.shared.ListCommandsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCommandsRequest req = new ListCommandsRequest(                new ListCommandsRequest() {{
                                commandId = "iusto";
                                filters = new org.openapis.openapi.models.shared.CommandFilter[]{{
                                    add(new CommandFilter(CommandFilterKeyEnum.INVOKED_BEFORE, "eaque") {{
                                        key = CommandFilterKeyEnum.STATUS;
                                        value = "sed";
                                    }}),
                                }};
                                instanceId = "exercitationem";
                                maxResults = 226143L;
                                nextToken = "voluptate";
                            }};, ListCommandsXAmzTargetEnum.AMAZON_SSM_LIST_COMMANDS) {{
                maxResults = "voluptate";
                nextToken = "pariatur";
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "a";
                xAmzCredential = "fuga";
                xAmzDate = "totam";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "at";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListCommandsResponse res = sdk.sdk.listCommands(req);

            if (res.listCommandsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComplianceItems

For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComplianceItemsRequest;
import org.openapis.openapi.models.operations.ListComplianceItemsResponse;
import org.openapis.openapi.models.operations.ListComplianceItemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceQueryOperatorTypeEnum;
import org.openapis.openapi.models.shared.ComplianceStringFilter;
import org.openapis.openapi.models.shared.ListComplianceItemsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComplianceItemsRequest req = new ListComplianceItemsRequest(                new ListComplianceItemsRequest() {{
                                filters = new org.openapis.openapi.models.shared.ComplianceStringFilter[]{{
                                    add(new ComplianceStringFilter() {{
                                        key = "exercitationem";
                                        type = ComplianceQueryOperatorTypeEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("quis"),
                                        }};
                                    }}),
                                    add(new ComplianceStringFilter() {{
                                        key = "commodi";
                                        type = ComplianceQueryOperatorTypeEnum.BEGIN_WITH;
                                        values = new String[]{{
                                            add("aliquid"),
                                            add("aperiam"),
                                            add("perspiciatis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 145841L;
                                nextToken = "itaque";
                                resourceIds = new String[]{{
                                    add("cumque"),
                                    add("dolor"),
                                    add("repellendus"),
                                }};
                                resourceTypes = new String[]{{
                                    add("minus"),
                                    add("minima"),
                                    add("a"),
                                    add("beatae"),
                                }};
                            }};, ListComplianceItemsXAmzTargetEnum.AMAZON_SSM_LIST_COMPLIANCE_ITEMS) {{
                maxResults = "vitae";
                nextToken = "veritatis";
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "earum";
                xAmzCredential = "laborum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "aliquid";
            }};            

            ListComplianceItemsResponse res = sdk.sdk.listComplianceItems(req);

            if (res.listComplianceItemsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComplianceSummaries

Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComplianceSummariesRequest;
import org.openapis.openapi.models.operations.ListComplianceSummariesResponse;
import org.openapis.openapi.models.operations.ListComplianceSummariesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceQueryOperatorTypeEnum;
import org.openapis.openapi.models.shared.ComplianceStringFilter;
import org.openapis.openapi.models.shared.ListComplianceSummariesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComplianceSummariesRequest req = new ListComplianceSummariesRequest(                new ListComplianceSummariesRequest() {{
                                filters = new org.openapis.openapi.models.shared.ComplianceStringFilter[]{{
                                    add(new ComplianceStringFilter() {{
                                        key = "numquam";
                                        type = ComplianceQueryOperatorTypeEnum.EQUAL;
                                        values = new String[]{{
                                            add("quaerat"),
                                            add("facere"),
                                            add("vitae"),
                                        }};
                                    }}),
                                    add(new ComplianceStringFilter() {{
                                        key = "omnis";
                                        type = ComplianceQueryOperatorTypeEnum.EQUAL;
                                        values = new String[]{{
                                            add("officiis"),
                                            add("expedita"),
                                            add("quia"),
                                            add("vitae"),
                                        }};
                                    }}),
                                }};
                                maxResults = 487839L;
                                nextToken = "quas";
                            }};, ListComplianceSummariesXAmzTargetEnum.AMAZON_SSM_LIST_COMPLIANCE_SUMMARIES) {{
                maxResults = "ipsa";
                nextToken = "distinctio";
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "quod";
                xAmzCredential = "eligendi";
                xAmzDate = "sit";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "distinctio";
            }};            

            ListComplianceSummariesResponse res = sdk.sdk.listComplianceSummaries(req);

            if (res.listComplianceSummariesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocumentMetadataHistory

Information about approval reviews for a version of a change template in Change Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentMetadataHistoryRequest;
import org.openapis.openapi.models.operations.ListDocumentMetadataHistoryResponse;
import org.openapis.openapi.models.operations.ListDocumentMetadataHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentMetadataEnumEnum;
import org.openapis.openapi.models.shared.ListDocumentMetadataHistoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentMetadataHistoryRequest req = new ListDocumentMetadataHistoryRequest(                new ListDocumentMetadataHistoryRequest(DocumentMetadataEnumEnum.DOCUMENT_REVIEWS, "illum") {{
                                documentVersion = "soluta";
                                maxResults = 297325L;
                                nextToken = "laudantium";
                            }};, ListDocumentMetadataHistoryXAmzTargetEnum.AMAZON_SSM_LIST_DOCUMENT_METADATA_HISTORY) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "esse";
                xAmzCredential = "doloremque";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "aliquam";
            }};            

            ListDocumentMetadataHistoryResponse res = sdk.sdk.listDocumentMetadataHistory(req);

            if (res.listDocumentMetadataHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocumentVersions

List all versions for a document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentVersionsRequest;
import org.openapis.openapi.models.operations.ListDocumentVersionsResponse;
import org.openapis.openapi.models.operations.ListDocumentVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDocumentVersionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentVersionsRequest req = new ListDocumentVersionsRequest(                new ListDocumentVersionsRequest("amet") {{
                                maxResults = 617035L;
                                nextToken = "ab";
                            }};, ListDocumentVersionsXAmzTargetEnum.AMAZON_SSM_LIST_DOCUMENT_VERSIONS) {{
                maxResults = "officiis";
                nextToken = "eum";
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "ab";
                xAmzDate = "ad";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "labore";
            }};            

            ListDocumentVersionsResponse res = sdk.sdk.listDocumentVersions(req);

            if (res.listDocumentVersionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocuments

Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentsRequest;
import org.openapis.openapi.models.operations.ListDocumentsResponse;
import org.openapis.openapi.models.operations.ListDocumentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentFilter;
import org.openapis.openapi.models.shared.DocumentFilterKeyEnum;
import org.openapis.openapi.models.shared.DocumentKeyValuesFilter;
import org.openapis.openapi.models.shared.ListDocumentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentsRequest req = new ListDocumentsRequest(                new ListDocumentsRequest() {{
                                documentFilterList = new org.openapis.openapi.models.shared.DocumentFilter[]{{
                                    add(new DocumentFilter(DocumentFilterKeyEnum.OWNER, "enim") {{
                                        key = DocumentFilterKeyEnum.DOCUMENT_TYPE;
                                        value = "ullam";
                                    }}),
                                    add(new DocumentFilter(DocumentFilterKeyEnum.DOCUMENT_TYPE, "fuga") {{
                                        key = DocumentFilterKeyEnum.PLATFORM_TYPES;
                                        value = "occaecati";
                                    }}),
                                }};
                                filters = new org.openapis.openapi.models.shared.DocumentKeyValuesFilter[]{{
                                    add(new DocumentKeyValuesFilter() {{
                                        key = "modi";
                                        values = new String[]{{
                                            add("explicabo"),
                                        }};
                                    }}),
                                }};
                                maxResults = 380450L;
                                nextToken = "ipsa";
                            }};, ListDocumentsXAmzTargetEnum.AMAZON_SSM_LIST_DOCUMENTS) {{
                maxResults = "eveniet";
                nextToken = "sint";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "accusantium";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListDocumentsResponse res = sdk.sdk.listDocuments(req);

            if (res.listDocumentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInventoryEntries

A list of inventory items returned by the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInventoryEntriesRequest;
import org.openapis.openapi.models.operations.ListInventoryEntriesResponse;
import org.openapis.openapi.models.operations.ListInventoryEntriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.InventoryFilter;
import org.openapis.openapi.models.shared.InventoryQueryOperatorTypeEnum;
import org.openapis.openapi.models.shared.ListInventoryEntriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInventoryEntriesRequest req = new ListInventoryEntriesRequest(                new ListInventoryEntriesRequest("est", "et") {{
                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                    add(new InventoryFilter("fuga",                 new String[]{{
                                                        add("architecto"),
                                                    }}) {{
                                        key = "quibusdam";
                                        type = InventoryQueryOperatorTypeEnum.LESS_THAN;
                                        values = new String[]{{
                                            add("quidem"),
                                            add("in"),
                                            add("culpa"),
                                            add("doloremque"),
                                        }};
                                    }}),
                                    add(new InventoryFilter("quaerat",                 new String[]{{
                                                        add("natus"),
                                                    }}) {{
                                        key = "suscipit";
                                        type = InventoryQueryOperatorTypeEnum.GREATER_THAN;
                                        values = new String[]{{
                                            add("dignissimos"),
                                            add("fugit"),
                                            add("ratione"),
                                            add("possimus"),
                                        }};
                                    }}),
                                    add(new InventoryFilter("iste",                 new String[]{{
                                                        add("hic"),
                                                        add("ducimus"),
                                                        add("consequuntur"),
                                                    }}) {{
                                        key = "esse";
                                        type = InventoryQueryOperatorTypeEnum.EXISTS;
                                        values = new String[]{{
                                            add("ratione"),
                                            add("ipsa"),
                                            add("debitis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 370195L;
                                nextToken = "libero";
                            }};, ListInventoryEntriesXAmzTargetEnum.AMAZON_SSM_LIST_INVENTORY_ENTRIES) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "dicta";
                xAmzDate = "qui";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "amet";
            }};            

            ListInventoryEntriesResponse res = sdk.sdk.listInventoryEntries(req);

            if (res.listInventoryEntriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOpsItemEvents

Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOpsItemEventsRequest;
import org.openapis.openapi.models.operations.ListOpsItemEventsResponse;
import org.openapis.openapi.models.operations.ListOpsItemEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOpsItemEventsRequest;
import org.openapis.openapi.models.shared.OpsItemEventFilter;
import org.openapis.openapi.models.shared.OpsItemEventFilterKeyEnum;
import org.openapis.openapi.models.shared.OpsItemEventFilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOpsItemEventsRequest req = new ListOpsItemEventsRequest(                new ListOpsItemEventsRequest() {{
                                filters = new org.openapis.openapi.models.shared.OpsItemEventFilter[]{{
                                    add(new OpsItemEventFilter(OpsItemEventFilterKeyEnum.OPS_ITEM_ID, OpsItemEventFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("itaque"),
                                                        add("distinctio"),
                                                        add("iusto"),
                                                    }}) {{
                                        key = OpsItemEventFilterKeyEnum.OPS_ITEM_ID;
                                        operator = OpsItemEventFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("velit"),
                                            add("hic"),
                                            add("ullam"),
                                        }};
                                    }}),
                                    add(new OpsItemEventFilter(OpsItemEventFilterKeyEnum.OPS_ITEM_ID, OpsItemEventFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("sunt"),
                                                        add("odit"),
                                                        add("vero"),
                                                        add("deleniti"),
                                                    }}) {{
                                        key = OpsItemEventFilterKeyEnum.OPS_ITEM_ID;
                                        operator = OpsItemEventFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("provident"),
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new OpsItemEventFilter(OpsItemEventFilterKeyEnum.OPS_ITEM_ID, OpsItemEventFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("amet"),
                                                        add("corrupti"),
                                                        add("sunt"),
                                                    }}) {{
                                        key = OpsItemEventFilterKeyEnum.OPS_ITEM_ID;
                                        operator = OpsItemEventFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("quasi"),
                                            add("repellat"),
                                            add("atque"),
                                            add("magnam"),
                                        }};
                                    }}),
                                    add(new OpsItemEventFilter(OpsItemEventFilterKeyEnum.OPS_ITEM_ID, OpsItemEventFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("quaerat"),
                                                        add("magni"),
                                                        add("cumque"),
                                                        add("quos"),
                                                    }}) {{
                                        key = OpsItemEventFilterKeyEnum.OPS_ITEM_ID;
                                        operator = OpsItemEventFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("delectus"),
                                            add("illum"),
                                        }};
                                    }}),
                                }};
                                maxResults = 448482L;
                                nextToken = "commodi";
                            }};, ListOpsItemEventsXAmzTargetEnum.AMAZON_SSM_LIST_OPS_ITEM_EVENTS) {{
                maxResults = "maxime";
                nextToken = "sed";
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "possimus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "harum";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "eligendi";
            }};            

            ListOpsItemEventsResponse res = sdk.sdk.listOpsItemEvents(req);

            if (res.listOpsItemEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOpsItemRelatedItems

Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOpsItemRelatedItemsRequest;
import org.openapis.openapi.models.operations.ListOpsItemRelatedItemsResponse;
import org.openapis.openapi.models.operations.ListOpsItemRelatedItemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOpsItemRelatedItemsRequest;
import org.openapis.openapi.models.shared.OpsItemRelatedItemsFilter;
import org.openapis.openapi.models.shared.OpsItemRelatedItemsFilterKeyEnum;
import org.openapis.openapi.models.shared.OpsItemRelatedItemsFilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOpsItemRelatedItemsRequest req = new ListOpsItemRelatedItemsRequest(                new ListOpsItemRelatedItemsRequest() {{
                                filters = new org.openapis.openapi.models.shared.OpsItemRelatedItemsFilter[]{{
                                    add(new OpsItemRelatedItemsFilter(OpsItemRelatedItemsFilterKeyEnum.RESOURCE_TYPE, OpsItemRelatedItemsFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("quos"),
                                                        add("numquam"),
                                                        add("vitae"),
                                                        add("maiores"),
                                                    }}) {{
                                        key = OpsItemRelatedItemsFilterKeyEnum.RESOURCE_TYPE;
                                        operator = OpsItemRelatedItemsFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("esse"),
                                            add("nisi"),
                                            add("explicabo"),
                                            add("sequi"),
                                        }};
                                    }}),
                                    add(new OpsItemRelatedItemsFilter(OpsItemRelatedItemsFilterKeyEnum.RESOURCE_URI, OpsItemRelatedItemsFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("dolorem"),
                                                    }}) {{
                                        key = OpsItemRelatedItemsFilterKeyEnum.RESOURCE_URI;
                                        operator = OpsItemRelatedItemsFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("rerum"),
                                        }};
                                    }}),
                                    add(new OpsItemRelatedItemsFilter(OpsItemRelatedItemsFilterKeyEnum.RESOURCE_URI, OpsItemRelatedItemsFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("tempore"),
                                                        add("recusandae"),
                                                    }}) {{
                                        key = OpsItemRelatedItemsFilterKeyEnum.RESOURCE_URI;
                                        operator = OpsItemRelatedItemsFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("nam"),
                                            add("ab"),
                                            add("magnam"),
                                            add("pariatur"),
                                        }};
                                    }}),
                                    add(new OpsItemRelatedItemsFilter(OpsItemRelatedItemsFilterKeyEnum.ASSOCIATION_ID, OpsItemRelatedItemsFilterOperatorEnum.EQUAL,                 new String[]{{
                                                        add("deleniti"),
                                                        add("necessitatibus"),
                                                        add("aspernatur"),
                                                    }}) {{
                                        key = OpsItemRelatedItemsFilterKeyEnum.ASSOCIATION_ID;
                                        operator = OpsItemRelatedItemsFilterOperatorEnum.EQUAL;
                                        values = new String[]{{
                                            add("voluptas"),
                                            add("laudantium"),
                                            add("corporis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 173193L;
                                nextToken = "laborum";
                                opsItemId = "vero";
                            }};, ListOpsItemRelatedItemsXAmzTargetEnum.AMAZON_SSM_LIST_OPS_ITEM_RELATED_ITEMS) {{
                maxResults = "eos";
                nextToken = "voluptatem";
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "id";
                xAmzCredential = "quae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "a";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "sed";
            }};            

            ListOpsItemRelatedItemsResponse res = sdk.sdk.listOpsItemRelatedItems(req);

            if (res.listOpsItemRelatedItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOpsMetadata

Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOpsMetadataRequest;
import org.openapis.openapi.models.operations.ListOpsMetadataResponse;
import org.openapis.openapi.models.operations.ListOpsMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOpsMetadataRequest;
import org.openapis.openapi.models.shared.OpsMetadataFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOpsMetadataRequest req = new ListOpsMetadataRequest(                new ListOpsMetadataRequest() {{
                                filters = new org.openapis.openapi.models.shared.OpsMetadataFilter[]{{
                                    add(new OpsMetadataFilter("sed",                 new String[]{{
                                                        add("sint"),
                                                        add("placeat"),
                                                        add("ullam"),
                                                    }}) {{
                                        key = "iusto";
                                        values = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }}),
                                }};
                                maxResults = 476084L;
                                nextToken = "itaque";
                            }};, ListOpsMetadataXAmzTargetEnum.AMAZON_SSM_LIST_OPS_METADATA) {{
                maxResults = "rem";
                nextToken = "nemo";
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListOpsMetadataResponse res = sdk.sdk.listOpsMetadata(req);

            if (res.listOpsMetadataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceComplianceSummaries

Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceComplianceSummariesRequest;
import org.openapis.openapi.models.operations.ListResourceComplianceSummariesResponse;
import org.openapis.openapi.models.operations.ListResourceComplianceSummariesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceQueryOperatorTypeEnum;
import org.openapis.openapi.models.shared.ComplianceStringFilter;
import org.openapis.openapi.models.shared.ListResourceComplianceSummariesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceComplianceSummariesRequest req = new ListResourceComplianceSummariesRequest(                new ListResourceComplianceSummariesRequest() {{
                                filters = new org.openapis.openapi.models.shared.ComplianceStringFilter[]{{
                                    add(new ComplianceStringFilter() {{
                                        key = "consequuntur";
                                        type = ComplianceQueryOperatorTypeEnum.EQUAL;
                                        values = new String[]{{
                                            add("commodi"),
                                            add("ipsam"),
                                        }};
                                    }}),
                                }};
                                maxResults = 426819L;
                                nextToken = "cupiditate";
                            }};, ListResourceComplianceSummariesXAmzTargetEnum.AMAZON_SSM_LIST_RESOURCE_COMPLIANCE_SUMMARIES) {{
                maxResults = "modi";
                nextToken = "nisi";
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "modi";
                xAmzCredential = "doloremque";
                xAmzDate = "odio";
                xAmzSecurityToken = "sit";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "tempora";
            }};            

            ListResourceComplianceSummariesResponse res = sdk.sdk.listResourceComplianceSummaries(req);

            if (res.listResourceComplianceSummariesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceDataSync

<p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceDataSyncRequest;
import org.openapis.openapi.models.operations.ListResourceDataSyncResponse;
import org.openapis.openapi.models.operations.ListResourceDataSyncXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourceDataSyncRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceDataSyncRequest req = new ListResourceDataSyncRequest(                new ListResourceDataSyncRequest() {{
                                maxResults = 461853L;
                                nextToken = "dolorum";
                                syncType = "libero";
                            }};, ListResourceDataSyncXAmzTargetEnum.AMAZON_SSM_LIST_RESOURCE_DATA_SYNC) {{
                maxResults = "ratione";
                nextToken = "molestiae";
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "maiores";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "sed";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListResourceDataSyncResponse res = sdk.sdk.listResourceDataSync(req);

            if (res.listResourceDataSyncResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Returns a list of the tags assigned to the specified resource.</p> <p>For information about the ID format for each supported resource type, see <a>AddTagsToResource</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.ResourceTypeForTaggingEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("vitae", ResourceTypeForTaggingEnum.OPS_ITEM);, ListTagsForResourceXAmzTargetEnum.AMAZON_SSM_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "quidem";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "quasi";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyDocumentPermission

Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyDocumentPermissionRequest;
import org.openapis.openapi.models.operations.ModifyDocumentPermissionResponse;
import org.openapis.openapi.models.operations.ModifyDocumentPermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentPermissionTypeEnum;
import org.openapis.openapi.models.shared.ModifyDocumentPermissionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyDocumentPermissionRequest req = new ModifyDocumentPermissionRequest(                new ModifyDocumentPermissionRequest("similique", DocumentPermissionTypeEnum.SHARE) {{
                                accountIdsToAdd = new String[]{{
                                    add("quo"),
                                    add("suscipit"),
                                    add("ex"),
                                    add("sint"),
                                }};
                                accountIdsToRemove = new String[]{{
                                    add("doloribus"),
                                    add("provident"),
                                    add("alias"),
                                }};
                                sharedDocumentVersion = "deserunt";
                            }};, ModifyDocumentPermissionXAmzTargetEnum.AMAZON_SSM_MODIFY_DOCUMENT_PERMISSION) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "autem";
                xAmzCredential = "quo";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "impedit";
            }};            

            ModifyDocumentPermissionResponse res = sdk.sdk.modifyDocumentPermission(req);

            if (res.modifyDocumentPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putComplianceItems

<p>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutComplianceItemsRequest;
import org.openapis.openapi.models.operations.PutComplianceItemsResponse;
import org.openapis.openapi.models.operations.PutComplianceItemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComplianceExecutionSummary;
import org.openapis.openapi.models.shared.ComplianceItemEntry;
import org.openapis.openapi.models.shared.ComplianceSeverityEnum;
import org.openapis.openapi.models.shared.ComplianceStatusEnum;
import org.openapis.openapi.models.shared.ComplianceUploadTypeEnum;
import org.openapis.openapi.models.shared.PutComplianceItemsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutComplianceItemsRequest req = new PutComplianceItemsRequest(                new PutComplianceItemsRequest("deleniti",                 new ComplianceExecutionSummary(OffsetDateTime.parse("2022-01-08T17:12:46.041Z")) {{
                                                executionId = "voluptatem";
                                                executionType = "aliquid";
                                            }};,                 new org.openapis.openapi.models.shared.ComplianceItemEntry[]{{
                                                add(new ComplianceItemEntry(ComplianceSeverityEnum.CRITICAL, ComplianceStatusEnum.COMPLIANT) {{
                                                    details = new java.util.HashMap<String, String>() {{
                                                        put("corrupti", "quae");
                                                        put("facere", "ea");
                                                        put("libero", "nam");
                                                    }};
                                                    id = "33cfaa34-8c31-4bf4-87ee-4fcf0c42b78f";
                                                    severity = ComplianceSeverityEnum.CRITICAL;
                                                    status = ComplianceStatusEnum.COMPLIANT;
                                                    title = "Mrs.";
                                                }}),
                                                add(new ComplianceItemEntry(ComplianceSeverityEnum.MEDIUM, ComplianceStatusEnum.COMPLIANT) {{
                                                    details = new java.util.HashMap<String, String>() {{
                                                        put("excepturi", "corrupti");
                                                    }};
                                                    id = "a0dc7663-24cc-4b06-88ca-12d02529270b";
                                                    severity = ComplianceSeverityEnum.LOW;
                                                    status = ComplianceStatusEnum.NON_COMPLIANT;
                                                    title = "Mrs.";
                                                }}),
                                                add(new ComplianceItemEntry(ComplianceSeverityEnum.UNSPECIFIED, ComplianceStatusEnum.COMPLIANT) {{
                                                    details = new java.util.HashMap<String, String>() {{
                                                        put("at", "illum");
                                                    }};
                                                    id = "895b8bcf-24db-4959-a933-52f74533994d";
                                                    severity = ComplianceSeverityEnum.MEDIUM;
                                                    status = ComplianceStatusEnum.NON_COMPLIANT;
                                                    title = "Dr.";
                                                }}),
                                            }}, "distinctio", "vel") {{
                                itemContentHash = "necessitatibus";
                                uploadType = ComplianceUploadTypeEnum.PARTIAL;
                            }};, PutComplianceItemsXAmzTargetEnum.AMAZON_SSM_PUT_COMPLIANCE_ITEMS) {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "cupiditate";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "soluta";
            }};            

            PutComplianceItemsResponse res = sdk.sdk.putComplianceItems(req);

            if (res.putComplianceItemsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putInventory

Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutInventoryRequest;
import org.openapis.openapi.models.operations.PutInventoryResponse;
import org.openapis.openapi.models.operations.PutInventoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.InventoryItem;
import org.openapis.openapi.models.shared.PutInventoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutInventoryRequest req = new PutInventoryRequest(                new PutInventoryRequest("in",                 new org.openapis.openapi.models.shared.InventoryItem[]{{
                                                add(new InventoryItem("incidunt", "deleniti", "dolor") {{
                                                    captureTime = "commodi";
                                                    content = new java.util.HashMap<String, String>[]{{
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("ullam", "ullam");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("est", "qui");
                                                        }}),
                                                    }};
                                                    contentHash = "praesentium";
                                                    context = new java.util.HashMap<String, String>() {{
                                                        put("totam", "qui");
                                                    }};
                                                    schemaVersion = "deserunt";
                                                    typeName = "eligendi";
                                                }}),
                                                add(new InventoryItem("ad", "a", "facere") {{
                                                    captureTime = "est";
                                                    content = new java.util.HashMap<String, String>[]{{
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("odit", "consectetur");
                                                            put("inventore", "minima");
                                                            put("facilis", "facilis");
                                                            put("deserunt", "nisi");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("voluptatem", "illo");
                                                            put("iure", "incidunt");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("quae", "ea");
                                                            put("asperiores", "veniam");
                                                            put("quidem", "asperiores");
                                                            put("eum", "deserunt");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("nemo", "molestias");
                                                            put("architecto", "expedita");
                                                            put("quisquam", "praesentium");
                                                            put("facilis", "assumenda");
                                                        }}),
                                                    }};
                                                    contentHash = "repudiandae";
                                                    context = new java.util.HashMap<String, String>() {{
                                                        put("ipsum", "commodi");
                                                        put("vitae", "fugit");
                                                        put("nam", "ex");
                                                        put("neque", "quod");
                                                    }};
                                                    schemaVersion = "eos";
                                                    typeName = "alias";
                                                }}),
                                                add(new InventoryItem("consequatur", "sed", "accusantium") {{
                                                    captureTime = "id";
                                                    content = new java.util.HashMap<String, String>[]{{
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("aperiam", "dignissimos");
                                                            put("quam", "modi");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("iure", "deleniti");
                                                            put("officia", "sint");
                                                            put("laborum", "dolor");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("illum", "sit");
                                                            put("molestias", "voluptas");
                                                        }}),
                                                    }};
                                                    contentHash = "expedita";
                                                    context = new java.util.HashMap<String, String>() {{
                                                        put("maiores", "ea");
                                                        put("vel", "delectus");
                                                    }};
                                                    schemaVersion = "accusamus";
                                                    typeName = "reiciendis";
                                                }}),
                                                add(new InventoryItem("aut", "similique", "iste") {{
                                                    captureTime = "voluptates";
                                                    content = new java.util.HashMap<String, String>[]{{
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("quaerat", "numquam");
                                                            put("non", "cum");
                                                            put("incidunt", "dolores");
                                                            put("enim", "nihil");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("omnis", "excepturi");
                                                            put("eos", "quisquam");
                                                            put("corrupti", "repellendus");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("quibusdam", "est");
                                                            put("commodi", "similique");
                                                            put("autem", "dicta");
                                                        }}),
                                                    }};
                                                    contentHash = "recusandae";
                                                    context = new java.util.HashMap<String, String>() {{
                                                        put("id", "odit");
                                                        put("inventore", "iste");
                                                        put("atque", "explicabo");
                                                        put("ullam", "atque");
                                                    }};
                                                    schemaVersion = "doloribus";
                                                    typeName = "pariatur";
                                                }}),
                                            }});, PutInventoryXAmzTargetEnum.AMAZON_SSM_PUT_INVENTORY) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "nam";
                xAmzCredential = "animi";
                xAmzDate = "labore";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quam";
            }};            

            PutInventoryResponse res = sdk.sdk.putInventory(req);

            if (res.putInventoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putParameter

Add a parameter to the system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutParameterRequest;
import org.openapis.openapi.models.operations.PutParameterResponse;
import org.openapis.openapi.models.operations.PutParameterXAmzTargetEnum;
import org.openapis.openapi.models.shared.ParameterTierEnum;
import org.openapis.openapi.models.shared.ParameterTypeEnum;
import org.openapis.openapi.models.shared.PutParameterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutParameterRequest req = new PutParameterRequest(                new PutParameterRequest("dolorem", "voluptates") {{
                                allowedPattern = "a";
                                dataType = "perferendis";
                                description = "quaerat";
                                keyId = "excepturi";
                                overwrite = false;
                                policies = "aliquid";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("laboriosam", "culpa") {{
                                        key = "voluptatem";
                                        value = "illum";
                                    }}),
                                    add(new Tag("ratione", "vitae") {{
                                        key = "dicta";
                                        value = "atque";
                                    }}),
                                }};
                                tier = ParameterTierEnum.INTELLIGENT_TIERING;
                                type = ParameterTypeEnum.STRING_LIST;
                            }};, PutParameterXAmzTargetEnum.AMAZON_SSM_PUT_PARAMETER) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "temporibus";
                xAmzDate = "a";
                xAmzSecurityToken = "ad";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "suscipit";
            }};            

            PutParameterResponse res = sdk.sdk.putParameter(req);

            if (res.putParameterResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.operations.PutResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequest("repellendus", "delectus") {{
                                policyHash = "ab";
                                policyId = "mollitia";
                            }};, PutResourcePolicyXAmzTargetEnum.AMAZON_SSM_PUT_RESOURCE_POLICY) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "neque";
                xAmzDate = "quam";
                xAmzSecurityToken = "animi";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "voluptatum";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerDefaultPatchBaseline

<p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDefaultPatchBaselineRequest;
import org.openapis.openapi.models.operations.RegisterDefaultPatchBaselineResponse;
import org.openapis.openapi.models.operations.RegisterDefaultPatchBaselineXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterDefaultPatchBaselineRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterDefaultPatchBaselineRequest req = new RegisterDefaultPatchBaselineRequest(                new RegisterDefaultPatchBaselineRequest("quisquam");, RegisterDefaultPatchBaselineXAmzTargetEnum.AMAZON_SSM_REGISTER_DEFAULT_PATCH_BASELINE) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "architecto";
                xAmzDate = "sint";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quis";
            }};            

            RegisterDefaultPatchBaselineResponse res = sdk.sdk.registerDefaultPatchBaseline(req);

            if (res.registerDefaultPatchBaselineResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerPatchBaselineForPatchGroup

Registers a patch baseline for a patch group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterPatchBaselineForPatchGroupRequest;
import org.openapis.openapi.models.operations.RegisterPatchBaselineForPatchGroupResponse;
import org.openapis.openapi.models.operations.RegisterPatchBaselineForPatchGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterPatchBaselineForPatchGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterPatchBaselineForPatchGroupRequest req = new RegisterPatchBaselineForPatchGroupRequest(                new RegisterPatchBaselineForPatchGroupRequest("officia", "iste");, RegisterPatchBaselineForPatchGroupXAmzTargetEnum.AMAZON_SSM_REGISTER_PATCH_BASELINE_FOR_PATCH_GROUP) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "quas";
                xAmzCredential = "laboriosam";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "deserunt";
            }};            

            RegisterPatchBaselineForPatchGroupResponse res = sdk.sdk.registerPatchBaselineForPatchGroup(req);

            if (res.registerPatchBaselineForPatchGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerTargetWithMaintenanceWindow

Registers a target with a maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterTargetWithMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.RegisterTargetWithMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.RegisterTargetWithMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.MaintenanceWindowResourceTypeEnum;
import org.openapis.openapi.models.shared.RegisterTargetWithMaintenanceWindowRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterTargetWithMaintenanceWindowRequest req = new RegisterTargetWithMaintenanceWindowRequest(                new RegisterTargetWithMaintenanceWindowRequest(MaintenanceWindowResourceTypeEnum.RESOURCE_GROUP,                 new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    key = "sint";
                                                    values = new String[]{{
                                                        add("iste"),
                                                        add("cupiditate"),
                                                    }};
                                                }}),
                                                add(new Target() {{
                                                    key = "ab";
                                                    values = new String[]{{
                                                        add("a"),
                                                        add("dolor"),
                                                        add("voluptatum"),
                                                    }};
                                                }}),
                                            }}, "molestias") {{
                                clientToken = "quod";
                                description = "repudiandae";
                                name = "Mrs. Kim Jones";
                                ownerInformation = "modi";
                            }};, RegisterTargetWithMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_REGISTER_TARGET_WITH_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "minus";
                xAmzCredential = "voluptate";
                xAmzDate = "error";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "animi";
            }};            

            RegisterTargetWithMaintenanceWindowResponse res = sdk.sdk.registerTargetWithMaintenanceWindow(req);

            if (res.registerTargetWithMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerTaskWithMaintenanceWindow

Adds a new task to a maintenance window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterTaskWithMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.RegisterTaskWithMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.RegisterTaskWithMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.CloudWatchOutputConfig;
import org.openapis.openapi.models.shared.DocumentHashTypeEnum;
import org.openapis.openapi.models.shared.LoggingInfo;
import org.openapis.openapi.models.shared.MaintenanceWindowAutomationParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowLambdaParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowRunCommandParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowStepFunctionsParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowTaskCutoffBehaviorEnum;
import org.openapis.openapi.models.shared.MaintenanceWindowTaskInvocationParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowTaskParameterValueExpression;
import org.openapis.openapi.models.shared.MaintenanceWindowTaskTypeEnum;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.NotificationEventEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.RegisterTaskWithMaintenanceWindowRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterTaskWithMaintenanceWindowRequest req = new RegisterTaskWithMaintenanceWindowRequest(                new RegisterTaskWithMaintenanceWindowRequest("voluptates", MaintenanceWindowTaskTypeEnum.LAMBDA, "qui") {{
                                alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                    add(new Alarm("debitis") {{
                                                        name = "Mr. Edna Howe";
                                                    }}),
                                                    add(new Alarm("adipisci") {{
                                                        name = "Bradford Vandervort";
                                                    }}),
                                                    add(new Alarm("possimus") {{
                                                        name = "Kathleen Harris";
                                                    }}),
                                                    add(new Alarm("delectus") {{
                                                        name = "Patti Cole";
                                                    }}),
                                                }}) {{
                                    ignorePollAlarmFailure = false;
                                }};;
                                clientToken = "incidunt";
                                cutoffBehavior = MaintenanceWindowTaskCutoffBehaviorEnum.CANCEL_TASK;
                                description = "sunt";
                                loggingInfo = new LoggingInfo("ullam", "quam") {{
                                    s3KeyPrefix = "illum";
                                }};;
                                maxConcurrency = "voluptates";
                                maxErrors = "officia";
                                name = "Arnold Bins DVM";
                                priority = 276247L;
                                serviceRoleArn = "dolore";
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "est";
                                        values = new String[]{{
                                            add("maxime"),
                                            add("delectus"),
                                            add("laboriosam"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "quam";
                                        values = new String[]{{
                                            add("officia"),
                                            add("repellat"),
                                            add("cupiditate"),
                                        }};
                                    }}),
                                }};
                                taskInvocationParameters = new MaintenanceWindowTaskInvocationParameters() {{
                                    automation = new MaintenanceWindowAutomationParameters() {{
                                        documentVersion = "soluta";
                                        parameters = new java.util.HashMap<String, String[]>() {{
                                            put("culpa", new String[]{{
                                                add("inventore"),
                                                add("atque"),
                                                add("ad"),
                                                add("sapiente"),
                                            }});
                                            put("voluptates", new String[]{{
                                                add("nesciunt"),
                                                add("ab"),
                                            }});
                                            put("quibusdam", new String[]{{
                                                add("quidem"),
                                                add("delectus"),
                                            }});
                                        }};
                                    }};;
                                    lambda = new MaintenanceWindowLambdaParameters() {{
                                        clientContext = "nemo";
                                        payload = "cumque";
                                        qualifier = "voluptatum";
                                    }};;
                                    runCommand = new MaintenanceWindowRunCommandParameters() {{
                                        cloudWatchOutputConfig = new CloudWatchOutputConfig() {{
                                            cloudWatchLogGroupName = "sequi";
                                            cloudWatchOutputEnabled = false;
                                        }};;
                                        comment = "atque";
                                        documentHash = "maiores";
                                        documentHashType = DocumentHashTypeEnum.SHA1;
                                        documentVersion = "rerum";
                                        notificationConfig = new NotificationConfig() {{
                                            notificationArn = "totam";
                                            notificationEvents = new org.openapis.openapi.models.shared.NotificationEventEnum[]{{
                                                add(NotificationEventEnum.ALL),
                                                add(NotificationEventEnum.ALL),
                                                add(NotificationEventEnum.CANCELLED),
                                                add(NotificationEventEnum.CANCELLED),
                                            }};
                                            notificationType = NotificationTypeEnum.COMMAND;
                                        }};;
                                        outputS3BucketName = "odio";
                                        outputS3KeyPrefix = "delectus";
                                        parameters = new java.util.HashMap<String, String[]>() {{
                                            put("ut", new String[]{{
                                                add("eius"),
                                                add("eos"),
                                                add("veniam"),
                                            }});
                                            put("repudiandae", new String[]{{
                                                add("occaecati"),
                                                add("debitis"),
                                                add("laboriosam"),
                                            }});
                                            put("eos", new String[]{{
                                                add("incidunt"),
                                            }});
                                            put("porro", new String[]{{
                                                add("reiciendis"),
                                                add("voluptate"),
                                                add("tempore"),
                                            }});
                                        }};
                                        serviceRoleArn = "in";
                                        timeoutSeconds = 609864L;
                                    }};;
                                    stepFunctions = new MaintenanceWindowStepFunctionsParameters() {{
                                        input = "possimus";
                                        name = "Lamar Rath";
                                    }};;
                                }};;
                                taskParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.MaintenanceWindowTaskParameterValueExpression>() {{
                                    put("ad", new MaintenanceWindowTaskParameterValueExpression() {{
                                        values = new String[]{{
                                            add("ratione"),
                                            add("totam"),
                                            add("vero"),
                                            add("dolore"),
                                        }};
                                    }});
                                    put("nam", new MaintenanceWindowTaskParameterValueExpression() {{
                                        values = new String[]{{
                                            add("maiores"),
                                            add("cupiditate"),
                                            add("illo"),
                                        }};
                                    }});
                                    put("saepe", new MaintenanceWindowTaskParameterValueExpression() {{
                                        values = new String[]{{
                                            add("eaque"),
                                            add("ex"),
                                        }};
                                    }});
                                }};
                            }};, RegisterTaskWithMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_REGISTER_TASK_WITH_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "deleniti";
                xAmzDate = "provident";
                xAmzSecurityToken = "aut";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "nostrum";
            }};            

            RegisterTaskWithMaintenanceWindowResponse res = sdk.sdk.registerTaskWithMaintenanceWindow(req);

            if (res.registerTaskWithMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTagsFromResource

Removes tag keys from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceRequest;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceResponse;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTagsFromResourceRequest;
import org.openapis.openapi.models.shared.ResourceTypeForTaggingEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsFromResourceRequest req = new RemoveTagsFromResourceRequest(                new RemoveTagsFromResourceRequest("nam", ResourceTypeForTaggingEnum.MAINTENANCE_WINDOW,                 new String[]{{
                                                add("nostrum"),
                                                add("maiores"),
                                            }});, RemoveTagsFromResourceXAmzTargetEnum.AMAZON_SSM_REMOVE_TAGS_FROM_RESOURCE) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "autem";
                xAmzCredential = "earum";
                xAmzDate = "minima";
                xAmzSecurityToken = "ex";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "nesciunt";
            }};            

            RemoveTagsFromResourceResponse res = sdk.sdk.removeTagsFromResource(req);

            if (res.removeTagsFromResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetServiceSettingRequest;
import org.openapis.openapi.models.operations.ResetServiceSettingResponse;
import org.openapis.openapi.models.operations.ResetServiceSettingXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResetServiceSettingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResetServiceSettingRequest req = new ResetServiceSettingRequest(                new ResetServiceSettingRequest("nostrum");, ResetServiceSettingXAmzTargetEnum.AMAZON_SSM_RESET_SERVICE_SETTING) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "maxime";
                xAmzDate = "numquam";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "autem";
            }};            

            ResetServiceSettingResponse res = sdk.sdk.resetServiceSetting(req);

            if (res.resetServiceSettingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resumeSession

<p>Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeSessionRequest;
import org.openapis.openapi.models.operations.ResumeSessionResponse;
import org.openapis.openapi.models.operations.ResumeSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResumeSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResumeSessionRequest req = new ResumeSessionRequest(                new ResumeSessionRequest("sunt");, ResumeSessionXAmzTargetEnum.AMAZON_SSM_RESUME_SESSION) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "optio";
            }};            

            ResumeSessionResponse res = sdk.sdk.resumeSession(req);

            if (res.resumeSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendAutomationSignal

Sends a signal to an Automation execution to change the current behavior or status of the execution. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendAutomationSignalRequest;
import org.openapis.openapi.models.operations.SendAutomationSignalResponse;
import org.openapis.openapi.models.operations.SendAutomationSignalXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendAutomationSignalRequest;
import org.openapis.openapi.models.shared.SignalTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendAutomationSignalRequest req = new SendAutomationSignalRequest(                new SendAutomationSignalRequest("fugiat", SignalTypeEnum.START_STEP) {{
                                payload = new java.util.HashMap<String, String[]>() {{
                                    put("natus", new String[]{{
                                        add("repellendus"),
                                        add("facilis"),
                                        add("molestias"),
                                        add("dolore"),
                                    }});
                                    put("et", new String[]{{
                                        add("maiores"),
                                    }});
                                    put("nisi", new String[]{{
                                        add("tempore"),
                                    }});
                                    put("expedita", new String[]{{
                                        add("blanditiis"),
                                        add("vitae"),
                                        add("iusto"),
                                        add("atque"),
                                    }});
                                }};
                            }};, SendAutomationSignalXAmzTargetEnum.AMAZON_SSM_SEND_AUTOMATION_SIGNAL) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "nam";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "asperiores";
            }};            

            SendAutomationSignalResponse res = sdk.sdk.sendAutomationSignal(req);

            if (res.sendAutomationSignalResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendCommand

Runs commands on one or more managed nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendCommandRequest;
import org.openapis.openapi.models.operations.SendCommandResponse;
import org.openapis.openapi.models.operations.SendCommandXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.CloudWatchOutputConfig;
import org.openapis.openapi.models.shared.DocumentHashTypeEnum;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.NotificationEventEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendCommandRequest;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendCommandRequest req = new SendCommandRequest(                new SendCommandRequest("quibusdam") {{
                                alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                    add(new Alarm("sunt") {{
                                                        name = "Jordan Kassulke";
                                                    }}),
                                                    add(new Alarm("labore") {{
                                                        name = "Joey Thiel";
                                                    }}),
                                                }}) {{
                                    ignorePollAlarmFailure = false;
                                }};;
                                cloudWatchOutputConfig = new CloudWatchOutputConfig() {{
                                    cloudWatchLogGroupName = "blanditiis";
                                    cloudWatchOutputEnabled = false;
                                }};;
                                comment = "ducimus";
                                documentHash = "consectetur";
                                documentHashType = DocumentHashTypeEnum.SHA1;
                                documentVersion = "quis";
                                instanceIds = new String[]{{
                                    add("ratione"),
                                }};
                                maxConcurrency = "consectetur";
                                maxErrors = "asperiores";
                                notificationConfig = new NotificationConfig() {{
                                    notificationArn = "architecto";
                                    notificationEvents = new org.openapis.openapi.models.shared.NotificationEventEnum[]{{
                                        add(NotificationEventEnum.CANCELLED),
                                        add(NotificationEventEnum.CANCELLED),
                                        add(NotificationEventEnum.FAILED),
                                    }};
                                    notificationType = NotificationTypeEnum.COMMAND;
                                }};;
                                outputS3BucketName = "consequuntur";
                                outputS3KeyPrefix = "nemo";
                                outputS3Region = "nobis";
                                parameters = new java.util.HashMap<String, String[]>() {{
                                    put("labore", new String[]{{
                                        add("minima"),
                                    }});
                                    put("magni", new String[]{{
                                        add("error"),
                                        add("expedita"),
                                        add("error"),
                                        add("placeat"),
                                    }});
                                    put("temporibus", new String[]{{
                                        add("earum"),
                                        add("minima"),
                                    }});
                                    put("odit", new String[]{{
                                        add("eius"),
                                    }});
                                }};
                                serviceRoleArn = "error";
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "dolorum";
                                        values = new String[]{{
                                            add("itaque"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "ab";
                                        values = new String[]{{
                                            add("amet"),
                                        }};
                                    }}),
                                }};
                                timeoutSeconds = 737061L;
                            }};, SendCommandXAmzTargetEnum.AMAZON_SSM_SEND_COMMAND) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "non";
                xAmzDate = "esse";
                xAmzSecurityToken = "vero";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "minima";
            }};            

            SendCommandResponse res = sdk.sdk.sendCommand(req);

            if (res.sendCommandResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAssociationsOnce

Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAssociationsOnceRequest;
import org.openapis.openapi.models.operations.StartAssociationsOnceResponse;
import org.openapis.openapi.models.operations.StartAssociationsOnceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartAssociationsOnceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAssociationsOnceRequest req = new StartAssociationsOnceRequest(                new StartAssociationsOnceRequest(                new String[]{{
                                                add("architecto"),
                                                add("voluptatibus"),
                                                add("autem"),
                                                add("in"),
                                            }});, StartAssociationsOnceXAmzTargetEnum.AMAZON_SSM_START_ASSOCIATIONS_ONCE) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "cumque";
                xAmzDate = "dolore";
                xAmzSecurityToken = "optio";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "repudiandae";
            }};            

            StartAssociationsOnceResponse res = sdk.sdk.startAssociationsOnce(req);

            if (res.startAssociationsOnceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAutomationExecution

Initiates execution of an Automation runbook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAutomationExecutionRequest;
import org.openapis.openapi.models.operations.StartAutomationExecutionResponse;
import org.openapis.openapi.models.operations.StartAutomationExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.ExecutionModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartAutomationExecutionRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAutomationExecutionRequest req = new StartAutomationExecutionRequest(                new StartAutomationExecutionRequest("libero") {{
                                alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                    add(new Alarm("repellat") {{
                                                        name = "Ted Jacobs";
                                                    }}),
                                                    add(new Alarm("eius") {{
                                                        name = "Glenn Rosenbaum";
                                                    }}),
                                                }}) {{
                                    ignorePollAlarmFailure = false;
                                }};;
                                clientToken = "dignissimos";
                                documentVersion = "corporis";
                                maxConcurrency = "perferendis";
                                maxErrors = "architecto";
                                mode = ExecutionModeEnum.AUTO;
                                parameters = new java.util.HashMap<String, String[]>() {{
                                    put("nihil", new String[]{{
                                        add("dolore"),
                                        add("magnam"),
                                        add("maiores"),
                                        add("ipsam"),
                                    }});
                                    put("dicta", new String[]{{
                                        add("praesentium"),
                                        add("libero"),
                                        add("consequatur"),
                                        add("totam"),
                                    }});
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sunt", "omnis") {{
                                        key = "quo";
                                        value = "dolor";
                                    }}),
                                    add(new Tag("dicta", "excepturi") {{
                                        key = "quam";
                                        value = "officiis";
                                    }}),
                                }};
                                targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("odit"),
                                            add("incidunt"),
                                            add("corporis"),
                                        }};
                                        executionRoleName = "quaerat";
                                        regions = new String[]{{
                                            add("ducimus"),
                                            add("tenetur"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("officiis") {{
                                                                name = "Karla Stehr";
                                                            }}),
                                                            add(new Alarm("odio") {{
                                                                name = "Miss Kari Ankunding";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("fugit") {{
                                                    name = "Naomi Kozey";
                                                }}),
                                                add(new Alarm("perspiciatis") {{
                                                    name = "Vernon Rohan";
                                                }}),
                                                add(new Alarm("saepe") {{
                                                    name = "Lois Dibbert";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "omnis";
                                        targetLocationMaxErrors = "officiis";
                                    }}),
                                }};
                                targetMaps = new java.util.HashMap<String, String[]>[]{{
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("sit", new String[]{{
                                            add("voluptatum"),
                                        }});
                                    }}),
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("neque", new String[]{{
                                            add("eaque"),
                                        }});
                                        put("corporis", new String[]{{
                                            add("aut"),
                                            add("impedit"),
                                            add("quod"),
                                        }});
                                    }}),
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("architecto", new String[]{{
                                            add("perspiciatis"),
                                        }});
                                        put("ea", new String[]{{
                                            add("aperiam"),
                                            add("voluptatem"),
                                        }});
                                        put("non", new String[]{{
                                            add("sequi"),
                                        }});
                                        put("rerum", new String[]{{
                                            add("debitis"),
                                        }});
                                    }}),
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("eaque", new String[]{{
                                            add("ut"),
                                            add("delectus"),
                                        }});
                                        put("aliquid", new String[]{{
                                            add("maiores"),
                                            add("debitis"),
                                        }});
                                    }}),
                                }};
                                targetParameterName = "reprehenderit";
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "assumenda";
                                        values = new String[]{{
                                            add("ut"),
                                            add("quae"),
                                            add("nihil"),
                                            add("quam"),
                                        }};
                                    }}),
                                }};
                            }};, StartAutomationExecutionXAmzTargetEnum.AMAZON_SSM_START_AUTOMATION_EXECUTION) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "cumque";
                xAmzDate = "placeat";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "non";
            }};            

            StartAutomationExecutionResponse res = sdk.sdk.startAutomationExecution(req);

            if (res.startAutomationExecutionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startChangeRequestExecution

Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartChangeRequestExecutionRequest;
import org.openapis.openapi.models.operations.StartChangeRequestExecutionResponse;
import org.openapis.openapi.models.operations.StartChangeRequestExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.Runbook;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartChangeRequestExecutionRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartChangeRequestExecutionRequest req = new StartChangeRequestExecutionRequest(                new StartChangeRequestExecutionRequest("corrupti",                 new org.openapis.openapi.models.shared.Runbook[]{{
                                                add(new Runbook("voluptatibus") {{
                                                    documentName = "earum";
                                                    documentVersion = "impedit";
                                                    maxConcurrency = "dicta";
                                                    maxErrors = "corporis";
                                                    parameters = new java.util.HashMap<String, String[]>() {{
                                                        put("eveniet", new String[]{{
                                                            add("dolore"),
                                                            add("illum"),
                                                            add("ea"),
                                                        }});
                                                        put("officiis", new String[]{{
                                                            add("accusamus"),
                                                        }});
                                                        put("animi", new String[]{{
                                                            add("voluptatem"),
                                                            add("maiores"),
                                                            add("odio"),
                                                            add("veniam"),
                                                        }});
                                                        put("fuga", new String[]{{
                                                            add("possimus"),
                                                            add("tenetur"),
                                                            add("sed"),
                                                            add("deserunt"),
                                                        }});
                                                    }};
                                                    targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("distinctio"),
                                                                add("corporis"),
                                                                add("quas"),
                                                            }};
                                                            executionRoleName = "soluta";
                                                            regions = new String[]{{
                                                                add("unde"),
                                                                add("et"),
                                                                add("quisquam"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("consequatur") {{
                                                                                    name = "Mr. Rene Harris";
                                                                                }}),
                                                                                add(new Alarm("voluptas") {{
                                                                                    name = "Orlando Muller MD";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("quaerat") {{
                                                                        name = "Jeanette Schultz";
                                                                    }}),
                                                                    add(new Alarm("odio") {{
                                                                        name = "Sergio Gerlach PhD";
                                                                    }}),
                                                                    add(new Alarm("recusandae") {{
                                                                        name = "Beverly Block";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "sint";
                                                            targetLocationMaxErrors = "maiores";
                                                        }}),
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("fuga"),
                                                                add("cumque"),
                                                            }};
                                                            executionRoleName = "consequuntur";
                                                            regions = new String[]{{
                                                                add("esse"),
                                                                add("explicabo"),
                                                                add("delectus"),
                                                                add("quos"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("tenetur") {{
                                                                                    name = "Teresa Lueilwitz";
                                                                                }}),
                                                                                add(new Alarm("debitis") {{
                                                                                    name = "Enrique Hoeger";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("occaecati") {{
                                                                        name = "Karen Barrows I";
                                                                    }}),
                                                                    add(new Alarm("perferendis") {{
                                                                        name = "Ms. Carolyn Jacobson";
                                                                    }}),
                                                                    add(new Alarm("minus") {{
                                                                        name = "Tracey Kutch";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "quidem";
                                                            targetLocationMaxErrors = "magnam";
                                                        }}),
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("accusamus"),
                                                            }};
                                                            executionRoleName = "quod";
                                                            regions = new String[]{{
                                                                add("voluptas"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("cupiditate") {{
                                                                                    name = "Jon Lemke DDS";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("perferendis") {{
                                                                        name = "Darin Kozey";
                                                                    }}),
                                                                    add(new Alarm("modi") {{
                                                                        name = "Pedro Dicki";
                                                                    }}),
                                                                    add(new Alarm("cum") {{
                                                                        name = "Julius Feil";
                                                                    }}),
                                                                    add(new Alarm("ad") {{
                                                                        name = "Oliver Wilkinson";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "tempore";
                                                            targetLocationMaxErrors = "odit";
                                                        }}),
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("at"),
                                                                add("ipsum"),
                                                                add("explicabo"),
                                                            }};
                                                            executionRoleName = "nulla";
                                                            regions = new String[]{{
                                                                add("sapiente"),
                                                                add("necessitatibus"),
                                                                add("voluptatum"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("saepe") {{
                                                                                    name = "Darlene Kovacek";
                                                                                }}),
                                                                                add(new Alarm("nemo") {{
                                                                                    name = "Orville Goldner";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("incidunt") {{
                                                                        name = "Bob Kutch";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "nesciunt";
                                                            targetLocationMaxErrors = "earum";
                                                        }}),
                                                    }};
                                                    targetMaps = new java.util.HashMap<String, String[]>[]{{
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("placeat", new String[]{{
                                                                add("sed"),
                                                                add("eaque"),
                                                                add("natus"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("nihil", new String[]{{
                                                                add("deserunt"),
                                                                add("id"),
                                                                add("ex"),
                                                            }});
                                                        }}),
                                                    }};
                                                    targetParameterName = "occaecati";
                                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target() {{
                                                            key = "at";
                                                            values = new String[]{{
                                                                add("asperiores"),
                                                                add("nam"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "cumque";
                                                            values = new String[]{{
                                                                add("quam"),
                                                                add("occaecati"),
                                                                add("repellendus"),
                                                                add("culpa"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "dicta";
                                                            values = new String[]{{
                                                                add("fuga"),
                                                                add("odio"),
                                                                add("totam"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "magni";
                                                            values = new String[]{{
                                                                add("harum"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Runbook("atque") {{
                                                    documentName = "omnis";
                                                    documentVersion = "quis";
                                                    maxConcurrency = "quos";
                                                    maxErrors = "natus";
                                                    parameters = new java.util.HashMap<String, String[]>() {{
                                                        put("vero", new String[]{{
                                                            add("praesentium"),
                                                            add("eum"),
                                                        }});
                                                        put("vitae", new String[]{{
                                                            add("possimus"),
                                                            add("libero"),
                                                            add("ullam"),
                                                        }});
                                                    }};
                                                    targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("iste"),
                                                                add("accusamus"),
                                                                add("ipsam"),
                                                                add("fugiat"),
                                                            }};
                                                            executionRoleName = "odio";
                                                            regions = new String[]{{
                                                                add("inventore"),
                                                                add("eligendi"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("nostrum") {{
                                                                                    name = "Nellie Jones";
                                                                                }}),
                                                                                add(new Alarm("ipsum") {{
                                                                                    name = "Wendy Kling";
                                                                                }}),
                                                                                add(new Alarm("quia") {{
                                                                                    name = "Willis Connelly";
                                                                                }}),
                                                                                add(new Alarm("laboriosam") {{
                                                                                    name = "Nettie Lang";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("veniam") {{
                                                                        name = "Terence Leffler";
                                                                    }}),
                                                                    add(new Alarm("quod") {{
                                                                        name = "Jacqueline Prohaska";
                                                                    }}),
                                                                    add(new Alarm("illo") {{
                                                                        name = "Ms. Joanne Halvorson";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "nemo";
                                                            targetLocationMaxErrors = "reprehenderit";
                                                        }}),
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("ipsum"),
                                                                add("vel"),
                                                                add("delectus"),
                                                            }};
                                                            executionRoleName = "maxime";
                                                            regions = new String[]{{
                                                                add("distinctio"),
                                                                add("cupiditate"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("distinctio") {{
                                                                                    name = "Randy Breitenberg";
                                                                                }}),
                                                                                add(new Alarm("minus") {{
                                                                                    name = "Beverly Farrell";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("ad") {{
                                                                        name = "Nina Kshlerin";
                                                                    }}),
                                                                    add(new Alarm("ea") {{
                                                                        name = "Audrey Schimmel";
                                                                    }}),
                                                                    add(new Alarm("quasi") {{
                                                                        name = "Julie Pfannerstill";
                                                                    }}),
                                                                    add(new Alarm("libero") {{
                                                                        name = "Mrs. Cecelia Harris";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "vero";
                                                            targetLocationMaxErrors = "impedit";
                                                        }}),
                                                    }};
                                                    targetMaps = new java.util.HashMap<String, String[]>[]{{
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("earum", new String[]{{
                                                                add("est"),
                                                                add("distinctio"),
                                                                add("fugiat"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("totam", new String[]{{
                                                                add("officiis"),
                                                                add("esse"),
                                                                add("vitae"),
                                                            }});
                                                            put("delectus", new String[]{{
                                                                add("minus"),
                                                                add("labore"),
                                                            }});
                                                            put("quas", new String[]{{
                                                                add("veniam"),
                                                            }});
                                                            put("sed", new String[]{{
                                                                add("reprehenderit"),
                                                                add("voluptate"),
                                                                add("reprehenderit"),
                                                                add("et"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("voluptate", new String[]{{
                                                                add("at"),
                                                                add("perferendis"),
                                                                add("in"),
                                                                add("eius"),
                                                            }});
                                                            put("aut", new String[]{{
                                                                add("iste"),
                                                            }});
                                                            put("accusamus", new String[]{{
                                                                add("voluptatum"),
                                                                add("facere"),
                                                                add("consequuntur"),
                                                                add("natus"),
                                                            }});
                                                            put("repellendus", new String[]{{
                                                                add("illo"),
                                                                add("facere"),
                                                                add("fugiat"),
                                                                add("ducimus"),
                                                            }});
                                                        }}),
                                                    }};
                                                    targetParameterName = "aut";
                                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target() {{
                                                            key = "voluptate";
                                                            values = new String[]{{
                                                                add("ullam"),
                                                                add("illum"),
                                                                add("mollitia"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "ipsa";
                                                            values = new String[]{{
                                                                add("quo"),
                                                                add("ullam"),
                                                                add("in"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "doloribus";
                                                            values = new String[]{{
                                                                add("eum"),
                                                                add("cumque"),
                                                                add("odio"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Runbook("repellat") {{
                                                    documentName = "similique";
                                                    documentVersion = "quia";
                                                    maxConcurrency = "architecto";
                                                    maxErrors = "ea";
                                                    parameters = new java.util.HashMap<String, String[]>() {{
                                                        put("illo", new String[]{{
                                                            add("harum"),
                                                            add("laborum"),
                                                            add("a"),
                                                        }});
                                                        put("repudiandae", new String[]{{
                                                            add("officia"),
                                                            add("laboriosam"),
                                                            add("illo"),
                                                            add("cupiditate"),
                                                        }});
                                                        put("veritatis", new String[]{{
                                                            add("excepturi"),
                                                            add("atque"),
                                                        }});
                                                        put("dicta", new String[]{{
                                                            add("doloremque"),
                                                            add("cum"),
                                                        }});
                                                    }};
                                                    targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("maiores"),
                                                                add("delectus"),
                                                            }};
                                                            executionRoleName = "quos";
                                                            regions = new String[]{{
                                                                add("officiis"),
                                                                add("ab"),
                                                                add("voluptate"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("mollitia") {{
                                                                                    name = "Jackie Walter";
                                                                                }}),
                                                                                add(new Alarm("corporis") {{
                                                                                    name = "Ricardo Lynch";
                                                                                }}),
                                                                                add(new Alarm("magni") {{
                                                                                    name = "Nathaniel Johnston";
                                                                                }}),
                                                                                add(new Alarm("tempore") {{
                                                                                    name = "Lorenzo Hintz";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("quaerat") {{
                                                                        name = "Jerald Bartell";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "commodi";
                                                            targetLocationMaxErrors = "autem";
                                                        }}),
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("magni"),
                                                                add("quisquam"),
                                                                add("expedita"),
                                                            }};
                                                            executionRoleName = "in";
                                                            regions = new String[]{{
                                                                add("delectus"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("ipsa") {{
                                                                                    name = "Brandon Schmidt";
                                                                                }}),
                                                                                add(new Alarm("iure") {{
                                                                                    name = "Mrs. Levi Rodriguez";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("tempore") {{
                                                                        name = "Roman Shanahan";
                                                                    }}),
                                                                    add(new Alarm("laborum") {{
                                                                        name = "Miss Sonja McClure";
                                                                    }}),
                                                                    add(new Alarm("dolore") {{
                                                                        name = "Randal Kunde";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "quibusdam";
                                                            targetLocationMaxErrors = "sint";
                                                        }}),
                                                    }};
                                                    targetMaps = new java.util.HashMap<String, String[]>[]{{
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("ad", new String[]{{
                                                                add("fuga"),
                                                                add("consequatur"),
                                                                add("sit"),
                                                                add("iure"),
                                                            }});
                                                            put("earum", new String[]{{
                                                                add("dolorem"),
                                                                add("omnis"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("quo", new String[]{{
                                                                add("illo"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("quia", new String[]{{
                                                                add("est"),
                                                                add("rem"),
                                                            }});
                                                            put("cum", new String[]{{
                                                                add("provident"),
                                                                add("sunt"),
                                                                add("maiores"),
                                                                add("excepturi"),
                                                            }});
                                                            put("ducimus", new String[]{{
                                                                add("aspernatur"),
                                                                add("molestias"),
                                                            }});
                                                        }}),
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("at", new String[]{{
                                                                add("laborum"),
                                                                add("provident"),
                                                                add("hic"),
                                                            }});
                                                            put("corrupti", new String[]{{
                                                                add("earum"),
                                                                add("praesentium"),
                                                                add("explicabo"),
                                                            }});
                                                            put("odit", new String[]{{
                                                                add("architecto"),
                                                            }});
                                                        }}),
                                                    }};
                                                    targetParameterName = "quia";
                                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target() {{
                                                            key = "velit";
                                                            values = new String[]{{
                                                                add("provident"),
                                                                add("possimus"),
                                                            }};
                                                        }}),
                                                        add(new Target() {{
                                                            key = "iste";
                                                            values = new String[]{{
                                                                add("consectetur"),
                                                                add("totam"),
                                                                add("dignissimos"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Runbook("voluptatem") {{
                                                    documentName = "iusto";
                                                    documentVersion = "culpa";
                                                    maxConcurrency = "voluptate";
                                                    maxErrors = "cupiditate";
                                                    parameters = new java.util.HashMap<String, String[]>() {{
                                                        put("assumenda", new String[]{{
                                                            add("sed"),
                                                            add("optio"),
                                                        }});
                                                        put("nulla", new String[]{{
                                                            add("modi"),
                                                        }});
                                                        put("voluptatum", new String[]{{
                                                            add("possimus"),
                                                            add("dolorum"),
                                                        }});
                                                        put("eos", new String[]{{
                                                            add("quam"),
                                                        }});
                                                    }};
                                                    targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                                        add(new TargetLocation() {{
                                                            accounts = new String[]{{
                                                                add("reiciendis"),
                                                                add("qui"),
                                                                add("similique"),
                                                            }};
                                                            executionRoleName = "eligendi";
                                                            regions = new String[]{{
                                                                add("inventore"),
                                                                add("necessitatibus"),
                                                            }};
                                                            targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                                                add(new Alarm("mollitia") {{
                                                                                    name = "Kristie Daugherty";
                                                                                }}),
                                                                            }}) {{
                                                                alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                                    add(new Alarm("dicta") {{
                                                                        name = "Jackie Crist";
                                                                    }}),
                                                                    add(new Alarm("quasi") {{
                                                                        name = "Agnes Marvin";
                                                                    }}),
                                                                    add(new Alarm("deserunt") {{
                                                                        name = "Tom Brown";
                                                                    }}),
                                                                    add(new Alarm("saepe") {{
                                                                        name = "Rita Rutherford";
                                                                    }}),
                                                                }};
                                                                ignorePollAlarmFailure = false;
                                                            }};
                                                            targetLocationMaxConcurrency = "quaerat";
                                                            targetLocationMaxErrors = "officia";
                                                        }}),
                                                    }};
                                                    targetMaps = new java.util.HashMap<String, String[]>[]{{
                                                        add(new java.util.HashMap<String, String[]>() {{
                                                            put("quam", new String[]{{
                                                                add("iure"),
                                                                add("nulla"),
                                                                add("recusandae"),
                                                                add("iste"),
                                                            }});
                                                            put("aspernatur", new String[]{{
                                                                add("et"),
                                                            }});
                                                            put("ipsam", new String[]{{
                                                                add("delectus"),
                                                            }});
                                                        }}),
                                                    }};
                                                    targetParameterName = "saepe";
                                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target() {{
                                                            key = "in";
                                                            values = new String[]{{
                                                                add("sed"),
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }}) {{
                                autoApprove = false;
                                changeDetails = "perspiciatis";
                                changeRequestName = "error";
                                clientToken = "deleniti";
                                documentVersion = "enim";
                                parameters = new java.util.HashMap<String, String[]>() {{
                                    put("saepe", new String[]{{
                                        add("reiciendis"),
                                        add("quis"),
                                        add("modi"),
                                    }});
                                }};
                                scheduledEndTime = OffsetDateTime.parse("2022-02-18T17:52:15.029Z");
                                scheduledTime = OffsetDateTime.parse("2022-04-09T18:48:48.082Z");
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perspiciatis", "accusamus") {{
                                        key = "numquam";
                                        value = "dolor";
                                    }}),
                                    add(new Tag("aspernatur", "ut") {{
                                        key = "voluptates";
                                        value = "quia";
                                    }}),
                                }};
                            }};, StartChangeRequestExecutionXAmzTargetEnum.AMAZON_SSM_START_CHANGE_REQUEST_EXECUTION) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "accusantium";
                xAmzDate = "tempora";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "expedita";
            }};            

            StartChangeRequestExecutionResponse res = sdk.sdk.startChangeRequestExecution(req);

            if (res.startChangeRequestExecutionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSession

<p>Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSessionRequest;
import org.openapis.openapi.models.operations.StartSessionResponse;
import org.openapis.openapi.models.operations.StartSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSessionRequest req = new StartSessionRequest(                new StartSessionRequest("architecto") {{
                                documentName = "minima";
                                parameters = new java.util.HashMap<String, String[]>() {{
                                    put("vitae", new String[]{{
                                        add("atque"),
                                        add("quisquam"),
                                        add("sunt"),
                                    }});
                                    put("asperiores", new String[]{{
                                        add("vel"),
                                        add("accusamus"),
                                    }});
                                }};
                                reason = "totam";
                            }};, StartSessionXAmzTargetEnum.AMAZON_SSM_START_SESSION) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "at";
                xAmzCredential = "culpa";
                xAmzDate = "nihil";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "odit";
            }};            

            StartSessionResponse res = sdk.sdk.startSession(req);

            if (res.startSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopAutomationExecution

Stop an Automation that is currently running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopAutomationExecutionRequest;
import org.openapis.openapi.models.operations.StopAutomationExecutionResponse;
import org.openapis.openapi.models.operations.StopAutomationExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopAutomationExecutionRequest;
import org.openapis.openapi.models.shared.StopTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopAutomationExecutionRequest req = new StopAutomationExecutionRequest(                new StopAutomationExecutionRequest("mollitia") {{
                                type = StopTypeEnum.CANCEL;
                            }};, StopAutomationExecutionXAmzTargetEnum.AMAZON_SSM_STOP_AUTOMATION_EXECUTION) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "et";
                xAmzDate = "odio";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "harum";
            }};            

            StopAutomationExecutionResponse res = sdk.sdk.stopAutomationExecution(req);

            if (res.stopAutomationExecutionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateSession

Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateSessionRequest;
import org.openapis.openapi.models.operations.TerminateSessionResponse;
import org.openapis.openapi.models.operations.TerminateSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateSessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateSessionRequest req = new TerminateSessionRequest(                new TerminateSessionRequest("pariatur");, TerminateSessionXAmzTargetEnum.AMAZON_SSM_TERMINATE_SESSION) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "culpa";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "ut";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "doloribus";
            }};            

            TerminateSessionResponse res = sdk.sdk.terminateSession(req);

            if (res.terminateSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlabelParameterVersion

Remove a label or labels from a parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlabelParameterVersionRequest;
import org.openapis.openapi.models.operations.UnlabelParameterVersionResponse;
import org.openapis.openapi.models.operations.UnlabelParameterVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnlabelParameterVersionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnlabelParameterVersionRequest req = new UnlabelParameterVersionRequest(                new UnlabelParameterVersionRequest(                new String[]{{
                                                add("tempore"),
                                            }}, "deserunt", 857979L);, UnlabelParameterVersionXAmzTargetEnum.AMAZON_SSM_UNLABEL_PARAMETER_VERSION) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "alias";
                xAmzDate = "iure";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "ea";
            }};            

            UnlabelParameterVersionResponse res = sdk.sdk.unlabelParameterVersion(req);

            if (res.unlabelParameterVersionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssociation

<p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call <code>UpdateAssociation</code>, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the <code>Name</code> parameter. Before calling this API action, we recommend that you call the <a>DescribeAssociation</a> API operation and make a note of all optional parameters required for your <code>UpdateAssociation</code> call.</p> <p>In order to call this API operation, a user, group, or role must be granted permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association during the next schedule run.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssociationRequest;
import org.openapis.openapi.models.operations.UpdateAssociationResponse;
import org.openapis.openapi.models.operations.UpdateAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.AssociationComplianceSeverityEnum;
import org.openapis.openapi.models.shared.AssociationSyncComplianceEnum;
import org.openapis.openapi.models.shared.InstanceAssociationOutputLocation;
import org.openapis.openapi.models.shared.S3OutputLocation;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetLocation;
import org.openapis.openapi.models.shared.UpdateAssociationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssociationRequest req = new UpdateAssociationRequest(                new UpdateAssociationRequest("laudantium") {{
                                alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                    add(new Alarm("modi") {{
                                                        name = "Emilio Reilly";
                                                    }}),
                                                }}) {{
                                    ignorePollAlarmFailure = false;
                                }};;
                                applyOnlyAtCronInterval = false;
                                associationName = "vitae";
                                associationVersion = "delectus";
                                automationTargetParameterName = "delectus";
                                calendarNames = new String[]{{
                                    add("at"),
                                    add("magnam"),
                                }};
                                complianceSeverity = AssociationComplianceSeverityEnum.UNSPECIFIED;
                                documentVersion = "sed";
                                maxConcurrency = "mollitia";
                                maxErrors = "saepe";
                                name = "Ora Purdy";
                                outputLocation = new InstanceAssociationOutputLocation() {{
                                    s3Location = new S3OutputLocation() {{
                                        outputS3BucketName = "facilis";
                                        outputS3KeyPrefix = "amet";
                                        outputS3Region = "quis";
                                    }};;
                                }};;
                                parameters = new java.util.HashMap<String, String[]>() {{
                                    put("beatae", new String[]{{
                                        add("nisi"),
                                        add("consectetur"),
                                    }});
                                    put("quos", new String[]{{
                                        add("sunt"),
                                        add("repudiandae"),
                                        add("facere"),
                                        add("distinctio"),
                                    }});
                                    put("ducimus", new String[]{{
                                        add("consectetur"),
                                        add("nemo"),
                                        add("provident"),
                                    }});
                                    put("accusamus", new String[]{{
                                        add("impedit"),
                                        add("minima"),
                                        add("cumque"),
                                        add("rerum"),
                                    }});
                                }};
                                scheduleExpression = "praesentium";
                                scheduleOffset = 427859L;
                                syncCompliance = AssociationSyncComplianceEnum.AUTO;
                                targetLocations = new org.openapis.openapi.models.shared.TargetLocation[]{{
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("impedit"),
                                            add("illum"),
                                            add("ullam"),
                                        }};
                                        executionRoleName = "praesentium";
                                        regions = new String[]{{
                                            add("soluta"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("libero") {{
                                                                name = "Angel Stokes";
                                                            }}),
                                                            add(new Alarm("harum") {{
                                                                name = "Phil Dach";
                                                            }}),
                                                            add(new Alarm("reiciendis") {{
                                                                name = "Vicki Labadie";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("quaerat") {{
                                                    name = "Mr. Emily Macejkovic";
                                                }}),
                                                add(new Alarm("voluptate") {{
                                                    name = "Santiago Glover";
                                                }}),
                                                add(new Alarm("non") {{
                                                    name = "Miriam Koch";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "asperiores";
                                        targetLocationMaxErrors = "exercitationem";
                                    }}),
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("beatae"),
                                        }};
                                        executionRoleName = "qui";
                                        regions = new String[]{{
                                            add("temporibus"),
                                            add("in"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("quaerat") {{
                                                                name = "Fernando Hackett";
                                                            }}),
                                                            add(new Alarm("rerum") {{
                                                                name = "Virginia Mitchell";
                                                            }}),
                                                            add(new Alarm("quisquam") {{
                                                                name = "Hazel Predovic";
                                                            }}),
                                                            add(new Alarm("assumenda") {{
                                                                name = "Lillian Bogisich";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("aut") {{
                                                    name = "Courtney Wiegand";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "adipisci";
                                        targetLocationMaxErrors = "velit";
                                    }}),
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("veniam"),
                                            add("provident"),
                                            add("nostrum"),
                                            add("dolor"),
                                        }};
                                        executionRoleName = "quod";
                                        regions = new String[]{{
                                            add("accusantium"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("optio") {{
                                                                name = "Edwin Bogisich";
                                                            }}),
                                                            add(new Alarm("dicta") {{
                                                                name = "Rebecca Schmitt DVM";
                                                            }}),
                                                            add(new Alarm("sint") {{
                                                                name = "Lowell Rice DDS";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("sequi") {{
                                                    name = "Victoria Mayert";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "id";
                                        targetLocationMaxErrors = "ut";
                                    }}),
                                    add(new TargetLocation() {{
                                        accounts = new String[]{{
                                            add("reiciendis"),
                                        }};
                                        executionRoleName = "reiciendis";
                                        regions = new String[]{{
                                            add("itaque"),
                                            add("iste"),
                                            add("quod"),
                                        }};
                                        targetLocationAlarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                            add(new Alarm("molestiae") {{
                                                                name = "Olive O'Hara";
                                                            }}),
                                                        }}) {{
                                            alarms = new org.openapis.openapi.models.shared.Alarm[]{{
                                                add(new Alarm("earum") {{
                                                    name = "Brad Mraz";
                                                }}),
                                                add(new Alarm("porro") {{
                                                    name = "Ms. Lynn Trantow";
                                                }}),
                                                add(new Alarm("eum") {{
                                                    name = "Fernando O'Connell";
                                                }}),
                                            }};
                                            ignorePollAlarmFailure = false;
                                        }};
                                        targetLocationMaxConcurrency = "inventore";
                                        targetLocationMaxErrors = "vel";
                                    }}),
                                }};
                                targetMaps = new java.util.HashMap<String, String[]>[]{{
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("provident", new String[]{{
                                            add("dolore"),
                                        }});
                                    }}),
                                    add(new java.util.HashMap<String, String[]>() {{
                                        put("occaecati", new String[]{{
                                            add("asperiores"),
                                        }});
                                        put("aspernatur", new String[]{{
                                            add("sit"),
                                            add("occaecati"),
                                            add("nulla"),
                                            add("ab"),
                                        }});
                                        put("natus", new String[]{{
                                            add("magni"),
                                            add("a"),
                                            add("cumque"),
                                            add("explicabo"),
                                        }});
                                    }}),
                                }};
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "natus";
                                        values = new String[]{{
                                            add("fugit"),
                                            add("repudiandae"),
                                            add("vitae"),
                                            add("consequatur"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "nemo";
                                        values = new String[]{{
                                            add("numquam"),
                                            add("numquam"),
                                            add("tempore"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "molestias";
                                        values = new String[]{{
                                            add("enim"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "illum";
                                        values = new String[]{{
                                            add("adipisci"),
                                        }};
                                    }}),
                                }};
                            }};, UpdateAssociationXAmzTargetEnum.AMAZON_SSM_UPDATE_ASSOCIATION) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "id";
                xAmzCredential = "ducimus";
                xAmzDate = "dolores";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "doloremque";
            }};            

            UpdateAssociationResponse res = sdk.sdk.updateAssociation(req);

            if (res.updateAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssociationStatus

<p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.</p> <p> <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the <code>InstanceId</code> legacy parameter.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssociationStatusRequest;
import org.openapis.openapi.models.operations.UpdateAssociationStatusResponse;
import org.openapis.openapi.models.operations.UpdateAssociationStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociationStatus;
import org.openapis.openapi.models.shared.AssociationStatusNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAssociationStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssociationStatusRequest req = new UpdateAssociationStatusRequest(                new UpdateAssociationStatusRequest(                new AssociationStatus(OffsetDateTime.parse("2022-06-06T10:42:21.870Z"), "fugiat", AssociationStatusNameEnum.SUCCESS) {{
                                                additionalInfo = "id";
                                            }};, "itaque", "assumenda");, UpdateAssociationStatusXAmzTargetEnum.AMAZON_SSM_UPDATE_ASSOCIATION_STATUS) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "id";
                xAmzCredential = "eveniet";
                xAmzDate = "optio";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "nemo";
            }};            

            UpdateAssociationStatusResponse res = sdk.sdk.updateAssociationStatus(req);

            if (res.updateAssociationStatusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDocument

Updates one or more values for an SSM document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDocumentRequest;
import org.openapis.openapi.models.operations.UpdateDocumentResponse;
import org.openapis.openapi.models.operations.UpdateDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachmentsSource;
import org.openapis.openapi.models.shared.AttachmentsSourceKeyEnum;
import org.openapis.openapi.models.shared.DocumentFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDocumentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDocumentRequest req = new UpdateDocumentRequest(                new UpdateDocumentRequest("esse", "placeat") {{
                                attachments = new org.openapis.openapi.models.shared.AttachmentsSource[]{{
                                    add(new AttachmentsSource() {{
                                        key = AttachmentsSourceKeyEnum.S3_FILE_URL;
                                        name = "Christina Cremin";
                                        values = new String[]{{
                                            add("maiores"),
                                            add("exercitationem"),
                                            add("ducimus"),
                                            add("dolore"),
                                        }};
                                    }}),
                                    add(new AttachmentsSource() {{
                                        key = AttachmentsSourceKeyEnum.S3_FILE_URL;
                                        name = "Isabel O'Reilly";
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("vero"),
                                            add("odio"),
                                        }};
                                    }}),
                                    add(new AttachmentsSource() {{
                                        key = AttachmentsSourceKeyEnum.S3_FILE_URL;
                                        name = "Essie Barton";
                                        values = new String[]{{
                                            add("pariatur"),
                                            add("labore"),
                                        }};
                                    }}),
                                    add(new AttachmentsSource() {{
                                        key = AttachmentsSourceKeyEnum.S3_FILE_URL;
                                        name = "Mr. Eula Witting";
                                        values = new String[]{{
                                            add("saepe"),
                                        }};
                                    }}),
                                }};
                                displayName = "iure";
                                documentFormat = DocumentFormatEnum.JSON;
                                documentVersion = "perspiciatis";
                                targetType = "omnis";
                                versionName = "hic";
                            }};, UpdateDocumentXAmzTargetEnum.AMAZON_SSM_UPDATE_DOCUMENT) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "minus";
                xAmzCredential = "explicabo";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateDocumentResponse res = sdk.sdk.updateDocument(req);

            if (res.updateDocumentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDocumentDefaultVersion

<p>Set the default version of a document. </p> <note> <p>If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the <code>apply-only-at-cron-interval</code> parameter.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDocumentDefaultVersionRequest;
import org.openapis.openapi.models.operations.UpdateDocumentDefaultVersionResponse;
import org.openapis.openapi.models.operations.UpdateDocumentDefaultVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDocumentDefaultVersionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDocumentDefaultVersionRequest req = new UpdateDocumentDefaultVersionRequest(                new UpdateDocumentDefaultVersionRequest("aspernatur", "minus");, UpdateDocumentDefaultVersionXAmzTargetEnum.AMAZON_SSM_UPDATE_DOCUMENT_DEFAULT_VERSION) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "exercitationem";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "nemo";
            }};            

            UpdateDocumentDefaultVersionResponse res = sdk.sdk.updateDocumentDefaultVersion(req);

            if (res.updateDocumentDefaultVersionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDocumentMetadata

Updates information related to approval reviews for a specific version of a change template in Change Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDocumentMetadataRequest;
import org.openapis.openapi.models.operations.UpdateDocumentMetadataResponse;
import org.openapis.openapi.models.operations.UpdateDocumentMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReviewActionEnum;
import org.openapis.openapi.models.shared.DocumentReviewCommentSource;
import org.openapis.openapi.models.shared.DocumentReviewCommentTypeEnum;
import org.openapis.openapi.models.shared.DocumentReviews;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDocumentMetadataRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDocumentMetadataRequest req = new UpdateDocumentMetadataRequest(                new UpdateDocumentMetadataRequest(                new DocumentReviews(DocumentReviewActionEnum.UPDATE_REVIEW) {{
                                                comment = new org.openapis.openapi.models.shared.DocumentReviewCommentSource[]{{
                                                    add(new DocumentReviewCommentSource() {{
                                                        content = "quasi";
                                                        type = DocumentReviewCommentTypeEnum.COMMENT;
                                                    }}),
                                                    add(new DocumentReviewCommentSource() {{
                                                        content = "laudantium";
                                                        type = DocumentReviewCommentTypeEnum.COMMENT;
                                                    }}),
                                                    add(new DocumentReviewCommentSource() {{
                                                        content = "ut";
                                                        type = DocumentReviewCommentTypeEnum.COMMENT;
                                                    }}),
                                                }};
                                            }};, "possimus") {{
                                documentVersion = "nihil";
                            }};, UpdateDocumentMetadataXAmzTargetEnum.AMAZON_SSM_UPDATE_DOCUMENT_METADATA) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "facere";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "cumque";
            }};            

            UpdateDocumentMetadataResponse res = sdk.sdk.updateDocumentMetadata(req);

            if (res.updateDocumentMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMaintenanceWindow

<p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowRequest;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowResponse;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMaintenanceWindowRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMaintenanceWindowRequest req = new UpdateMaintenanceWindowRequest(                new UpdateMaintenanceWindowRequest("explicabo") {{
                                allowUnassociatedTargets = false;
                                cutoff = 24945L;
                                description = "eligendi";
                                duration = 415367L;
                                enabled = false;
                                endDate = "enim";
                                name = "Charles Feest";
                                replace = false;
                                schedule = "distinctio";
                                scheduleOffset = 503697L;
                                scheduleTimezone = "saepe";
                                startDate = "sit";
                            }};, UpdateMaintenanceWindowXAmzTargetEnum.AMAZON_SSM_UPDATE_MAINTENANCE_WINDOW) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "corrupti";
                xAmzDate = "quas";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "quas";
            }};            

            UpdateMaintenanceWindowResponse res = sdk.sdk.updateMaintenanceWindow(req);

            if (res.updateMaintenanceWindowResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMaintenanceWindowTarget

<p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field isn't modified.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowTargetRequest;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowTargetResponse;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowTargetXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.UpdateMaintenanceWindowTargetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMaintenanceWindowTargetRequest req = new UpdateMaintenanceWindowTargetRequest(                new UpdateMaintenanceWindowTargetRequest("officiis", "labore") {{
                                description = "nulla";
                                name = "William Graham";
                                ownerInformation = "sed";
                                replace = false;
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "maxime";
                                        values = new String[]{{
                                            add("quibusdam"),
                                            add("facere"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "pariatur";
                                        values = new String[]{{
                                            add("labore"),
                                            add("commodi"),
                                            add("mollitia"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "similique";
                                        values = new String[]{{
                                            add("quo"),
                                        }};
                                    }}),
                                }};
                            }};, UpdateMaintenanceWindowTargetXAmzTargetEnum.AMAZON_SSM_UPDATE_MAINTENANCE_WINDOW_TARGET) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "illum";
                xAmzCredential = "ea";
                xAmzDate = "facere";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "blanditiis";
            }};            

            UpdateMaintenanceWindowTargetResponse res = sdk.sdk.updateMaintenanceWindowTarget(req);

            if (res.updateMaintenanceWindowTargetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMaintenanceWindowTask

<p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p> <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p> </li> <li> <p> <code>ServiceRoleArn</code> </p> </li> <li> <p> <code>TaskInvocationParameters</code> </p> </li> <li> <p> <code>Priority</code> </p> </li> <li> <p> <code>MaxConcurrency</code> </p> </li> <li> <p> <code>MaxErrors</code> </p> </li> </ul> <note> <p>One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for this request. Optional fields that aren't specified are set to null.</p> <important> <p>When you update a maintenance window task that has options specified in <code>TaskInvocationParameters</code>, you must provide again all the <code>TaskInvocationParameters</code> values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified <code>TaskInvocationParameters</code> values for <code>Comment</code>, <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowTaskRequest;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowTaskResponse;
import org.openapis.openapi.models.operations.UpdateMaintenanceWindowTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.Alarm;
import org.openapis.openapi.models.shared.AlarmConfiguration;
import org.openapis.openapi.models.shared.CloudWatchOutputConfig;
import org.openapis.openapi.models.shared.DocumentHashTypeEnum;
import org.openapis.openapi.models.shared.LoggingInfo;
import org.openapis.openapi.models.shared.MaintenanceWindowAutomationParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowLambdaParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowRunCommandParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowStepFunctionsParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowTaskCutoffBehaviorEnum;
import org.openapis.openapi.models.shared.MaintenanceWindowTaskInvocationParameters;
import org.openapis.openapi.models.shared.MaintenanceWindowTaskParameterValueExpression;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.NotificationEventEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.UpdateMaintenanceWindowTaskRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMaintenanceWindowTaskRequest req = new UpdateMaintenanceWindowTaskRequest(                new UpdateMaintenanceWindowTaskRequest("culpa", "ipsa") {{
                                alarmConfiguration = new AlarmConfiguration(                new org.openapis.openapi.models.shared.Alarm[]{{
                                                    add(new Alarm("unde") {{
                                                        name = "Mr. Janet Mueller";
                                                    }}),
                                                }}) {{
                                    ignorePollAlarmFailure = false;
                                }};;
                                cutoffBehavior = MaintenanceWindowTaskCutoffBehaviorEnum.CONTINUE_TASK;
                                description = "quaerat";
                                loggingInfo = new LoggingInfo("aliquid", "eum") {{
                                    s3KeyPrefix = "quaerat";
                                }};;
                                maxConcurrency = "enim";
                                maxErrors = "cumque";
                                name = "Dr. Rosemarie Kutch";
                                priority = 611783L;
                                replace = false;
                                serviceRoleArn = "perferendis";
                                targets = new org.openapis.openapi.models.shared.Target[]{{
                                    add(new Target() {{
                                        key = "aspernatur";
                                        values = new String[]{{
                                            add("nemo"),
                                            add("laboriosam"),
                                            add("iste"),
                                            add("quidem"),
                                        }};
                                    }}),
                                    add(new Target() {{
                                        key = "iusto";
                                        values = new String[]{{
                                            add("reiciendis"),
                                            add("a"),
                                            add("consequatur"),
                                        }};
                                    }}),
                                }};
                                taskArn = "voluptates";
                                taskInvocationParameters = new MaintenanceWindowTaskInvocationParameters() {{
                                    automation = new MaintenanceWindowAutomationParameters() {{
                                        documentVersion = "dolorum";
                                        parameters = new java.util.HashMap<String, String[]>() {{
                                            put("eos", new String[]{{
                                                add("vel"),
                                            }});
                                        }};
                                    }};;
                                    lambda = new MaintenanceWindowLambdaParameters() {{
                                        clientContext = "placeat";
                                        payload = "libero";
                                        qualifier = "saepe";
                                    }};;
                                    runCommand = new MaintenanceWindowRunCommandParameters() {{
                                        cloudWatchOutputConfig = new CloudWatchOutputConfig() {{
                                            cloudWatchLogGroupName = "ipsa";
                                            cloudWatchOutputEnabled = false;
                                        }};;
                                        comment = "dignissimos";
                                        documentHash = "veritatis";
                                        documentHashType = DocumentHashTypeEnum.SHA1;
                                        documentVersion = "cumque";
                                        notificationConfig = new NotificationConfig() {{
                                            notificationArn = "ab";
                                            notificationEvents = new org.openapis.openapi.models.shared.NotificationEventEnum[]{{
                                                add(NotificationEventEnum.IN_PROGRESS),
                                                add(NotificationEventEnum.FAILED),
                                            }};
                                            notificationType = NotificationTypeEnum.COMMAND;
                                        }};;
                                        outputS3BucketName = "quam";
                                        outputS3KeyPrefix = "unde";
                                        parameters = new java.util.HashMap<String, String[]>() {{
                                            put("sequi", new String[]{{
                                                add("ipsa"),
                                                add("blanditiis"),
                                                add("aliquam"),
                                            }});
                                            put("vero", new String[]{{
                                                add("omnis"),
                                                add("occaecati"),
                                                add("consequuntur"),
                                            }});
                                            put("veniam", new String[]{{
                                                add("repellendus"),
                                                add("eaque"),
                                            }});
                                        }};
                                        serviceRoleArn = "incidunt";
                                        timeoutSeconds = 993970L;
                                    }};;
                                    stepFunctions = new MaintenanceWindowStepFunctionsParameters() {{
                                        input = "eius";
                                        name = "Tracey Gorczany";
                                    }};;
                                }};;
                                taskParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.MaintenanceWindowTaskParameterValueExpression>() {{
                                    put("numquam", new MaintenanceWindowTaskParameterValueExpression() {{
                                        values = new String[]{{
                                            add("repellendus"),
                                        }};
                                    }});
                                    put("blanditiis", new MaintenanceWindowTaskParameterValueExpression() {{
                                        values = new String[]{{
                                            add("eius"),
                                            add("cupiditate"),
                                        }};
                                    }});
                                }};
                            }};, UpdateMaintenanceWindowTaskXAmzTargetEnum.AMAZON_SSM_UPDATE_MAINTENANCE_WINDOW_TASK) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "tempore";
                xAmzDate = "facere";
                xAmzSecurityToken = "earum";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateMaintenanceWindowTaskResponse res = sdk.sdk.updateMaintenanceWindowTask(req);

            if (res.updateMaintenanceWindowTaskResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateManagedInstanceRole

Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateManagedInstanceRoleRequest;
import org.openapis.openapi.models.operations.UpdateManagedInstanceRoleResponse;
import org.openapis.openapi.models.operations.UpdateManagedInstanceRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateManagedInstanceRoleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateManagedInstanceRoleRequest req = new UpdateManagedInstanceRoleRequest(                new UpdateManagedInstanceRoleRequest("ex", "tempore");, UpdateManagedInstanceRoleXAmzTargetEnum.AMAZON_SSM_UPDATE_MANAGED_INSTANCE_ROLE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "provident";
                xAmzCredential = "soluta";
                xAmzDate = "maxime";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "corporis";
            }};            

            UpdateManagedInstanceRoleResponse res = sdk.sdk.updateManagedInstanceRole(req);

            if (res.updateManagedInstanceRoleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOpsItem

<p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOpsItemRequest;
import org.openapis.openapi.models.operations.UpdateOpsItemResponse;
import org.openapis.openapi.models.operations.UpdateOpsItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.OpsItemDataTypeEnum;
import org.openapis.openapi.models.shared.OpsItemDataValue;
import org.openapis.openapi.models.shared.OpsItemNotification;
import org.openapis.openapi.models.shared.OpsItemStatusEnum;
import org.openapis.openapi.models.shared.RelatedOpsItem;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateOpsItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOpsItemRequest req = new UpdateOpsItemRequest(                new UpdateOpsItemRequest("aspernatur") {{
                                actualEndTime = OffsetDateTime.parse("2020-10-16T19:03:58.329Z");
                                actualStartTime = OffsetDateTime.parse("2020-06-26T19:59:39.342Z");
                                category = "delectus";
                                description = "enim";
                                notifications = new org.openapis.openapi.models.shared.OpsItemNotification[]{{
                                    add(new OpsItemNotification() {{
                                        arn = "porro";
                                    }}),
                                    add(new OpsItemNotification() {{
                                        arn = "dolores";
                                    }}),
                                }};
                                operationalData = new java.util.HashMap<String, org.openapis.openapi.models.shared.OpsItemDataValue>() {{
                                    put("labore", new OpsItemDataValue() {{
                                        type = OpsItemDataTypeEnum.STRING;
                                        value = "eaque";
                                    }});
                                    put("ea", new OpsItemDataValue() {{
                                        type = OpsItemDataTypeEnum.SEARCHABLE_STRING;
                                        value = "nobis";
                                    }});
                                    put("accusantium", new OpsItemDataValue() {{
                                        type = OpsItemDataTypeEnum.SEARCHABLE_STRING;
                                        value = "laborum";
                                    }});
                                }};
                                operationalDataToDelete = new String[]{{
                                    add("fugit"),
                                }};
                                opsItemArn = "quos";
                                plannedEndTime = OffsetDateTime.parse("2022-07-19T04:04:48.720Z");
                                plannedStartTime = OffsetDateTime.parse("2022-09-30T16:46:19.258Z");
                                priority = 917092L;
                                relatedOpsItems = new org.openapis.openapi.models.shared.RelatedOpsItem[]{{
                                    add(new RelatedOpsItem("suscipit") {{
                                        opsItemId = "earum";
                                    }}),
                                    add(new RelatedOpsItem("doloremque") {{
                                        opsItemId = "assumenda";
                                    }}),
                                    add(new RelatedOpsItem("suscipit") {{
                                        opsItemId = "porro";
                                    }}),
                                    add(new RelatedOpsItem("vel") {{
                                        opsItemId = "temporibus";
                                    }}),
                                }};
                                severity = "itaque";
                                status = OpsItemStatusEnum.APPROVED;
                                title = "Ms.";
                            }};, UpdateOpsItemXAmzTargetEnum.AMAZON_SSM_UPDATE_OPS_ITEM) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "in";
                xAmzCredential = "nesciunt";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            UpdateOpsItemResponse res = sdk.sdk.updateOpsItem(req);

            if (res.updateOpsItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOpsMetadata

Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOpsMetadataRequest;
import org.openapis.openapi.models.operations.UpdateOpsMetadataResponse;
import org.openapis.openapi.models.operations.UpdateOpsMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.MetadataValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateOpsMetadataRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOpsMetadataRequest req = new UpdateOpsMetadataRequest(                new UpdateOpsMetadataRequest("nostrum") {{
                                keysToDelete = new String[]{{
                                    add("illo"),
                                    add("corporis"),
                                }};
                                metadataToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.MetadataValue>() {{
                                    put("occaecati", new MetadataValue() {{
                                        value = "dolorum";
                                    }});
                                }};
                            }};, UpdateOpsMetadataXAmzTargetEnum.AMAZON_SSM_UPDATE_OPS_METADATA) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "deleniti";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "adipisci";
            }};            

            UpdateOpsMetadataResponse res = sdk.sdk.updateOpsMetadata(req);

            if (res.updateOpsMetadataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePatchBaseline

<p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePatchBaselineRequest;
import org.openapis.openapi.models.operations.UpdatePatchBaselineResponse;
import org.openapis.openapi.models.operations.UpdatePatchBaselineXAmzTargetEnum;
import org.openapis.openapi.models.shared.PatchActionEnum;
import org.openapis.openapi.models.shared.PatchComplianceLevelEnum;
import org.openapis.openapi.models.shared.PatchFilter;
import org.openapis.openapi.models.shared.PatchFilterGroup;
import org.openapis.openapi.models.shared.PatchFilterKeyEnum;
import org.openapis.openapi.models.shared.PatchRule;
import org.openapis.openapi.models.shared.PatchRuleGroup;
import org.openapis.openapi.models.shared.PatchSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePatchBaselineRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePatchBaselineRequest req = new UpdatePatchBaselineRequest(                new UpdatePatchBaselineRequest("veniam") {{
                                approvalRules = new PatchRuleGroup(                new org.openapis.openapi.models.shared.PatchRule[]{{
                                                    add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.PATCH_SET,                 new String[]{{
                                                                                                            add("nobis"),
                                                                                                            add("possimus"),
                                                                                                            add("laborum"),
                                                                                                            add("optio"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.CLASSIFICATION;
                                                                                            values = new String[]{{
                                                                                                add("beatae"),
                                                                                                add("repellendus"),
                                                                                                add("ex"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.ARCH,                 new String[]{{
                                                                                                            add("odit"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.SEVERITY;
                                                                                            values = new String[]{{
                                                                                                add("reiciendis"),
                                                                                            }};
                                                                                        }}),
                                                                                    }});) {{
                                                        approveAfterDays = 102182L;
                                                        approveUntilDate = "maiores";
                                                        complianceLevel = PatchComplianceLevelEnum.LOW;
                                                        enableNonSecurity = false;
                                                        patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                            add(new PatchFilter(PatchFilterKeyEnum.CVE_ID,                 new String[]{{
                                                                                                add("minima"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.MSRC_SEVERITY;
                                                                                values = new String[]{{
                                                                                    add("tempore"),
                                                                                    add("eos"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.EPOCH,                 new String[]{{
                                                                                                add("ad"),
                                                                                                add("voluptates"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.PATCH_ID;
                                                                                values = new String[]{{
                                                                                    add("assumenda"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.RELEASE,                 new String[]{{
                                                                                                add("porro"),
                                                                                                add("nesciunt"),
                                                                                                add("maiores"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.PATCH_SET;
                                                                                values = new String[]{{
                                                                                    add("consequuntur"),
                                                                                    add("quae"),
                                                                                    add("veniam"),
                                                                                    add("sint"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.ARCH,                 new String[]{{
                                                                                                add("sed"),
                                                                                                add("corporis"),
                                                                                                add("consequuntur"),
                                                                                                add("odio"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.CLASSIFICATION;
                                                                                values = new String[]{{
                                                                                    add("esse"),
                                                                                    add("officiis"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                add(new PatchFilter(PatchFilterKeyEnum.MSRC_SEVERITY,                 new String[]{{
                                                                                    add("iure"),
                                                                                    add("aliquid"),
                                                                                    add("culpa"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.PATCH_SET;
                                                                    values = new String[]{{
                                                                        add("fugit"),
                                                                        add("quisquam"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.PRODUCT,                 new String[]{{
                                                                                    add("repellat"),
                                                                                    add("exercitationem"),
                                                                                    add("quidem"),
                                                                                    add("ea"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.ADVISORY_ID;
                                                                    values = new String[]{{
                                                                        add("ipsum"),
                                                                        add("doloremque"),
                                                                        add("quod"),
                                                                        add("dignissimos"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.NAME,                 new String[]{{
                                                                                    add("eaque"),
                                                                                    add("reiciendis"),
                                                                                    add("magnam"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.MSRC_SEVERITY;
                                                                    values = new String[]{{
                                                                        add("excepturi"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.PRODUCT_FAMILY,                 new String[]{{
                                                                                    add("atque"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.PATCH_SET;
                                                                    values = new String[]{{
                                                                        add("tempora"),
                                                                        add("nobis"),
                                                                        add("expedita"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.RELEASE,                 new String[]{{
                                                                                                            add("molestias"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.PATCH_SET;
                                                                                            values = new String[]{{
                                                                                                add("molestiae"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.EPOCH,                 new String[]{{
                                                                                                            add("velit"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.EPOCH;
                                                                                            values = new String[]{{
                                                                                                add("aliquid"),
                                                                                                add("voluptate"),
                                                                                            }};
                                                                                        }}),
                                                                                    }});) {{
                                                        approveAfterDays = 80673L;
                                                        approveUntilDate = "laboriosam";
                                                        complianceLevel = PatchComplianceLevelEnum.INFORMATIONAL;
                                                        enableNonSecurity = false;
                                                        patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                            add(new PatchFilter(PatchFilterKeyEnum.PATCH_SET,                 new String[]{{
                                                                                                add("et"),
                                                                                                add("et"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.SECTION;
                                                                                values = new String[]{{
                                                                                    add("rerum"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.RELEASE,                 new String[]{{
                                                                                                add("debitis"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.PATCH_SET;
                                                                                values = new String[]{{
                                                                                    add("perspiciatis"),
                                                                                    add("nostrum"),
                                                                                }};
                                                                            }}),
                                                                            add(new PatchFilter(PatchFilterKeyEnum.VERSION,                 new String[]{{
                                                                                                add("eligendi"),
                                                                                                add("quaerat"),
                                                                                                add("veniam"),
                                                                                                add("perspiciatis"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.CVE_ID;
                                                                                values = new String[]{{
                                                                                    add("excepturi"),
                                                                                    add("quas"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                add(new PatchFilter(PatchFilterKeyEnum.NAME,                 new String[]{{
                                                                                    add("deleniti"),
                                                                                    add("earum"),
                                                                                    add("consequuntur"),
                                                                                    add("enim"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.PATCH_SET;
                                                                    values = new String[]{{
                                                                        add("sequi"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.SEVERITY,                 new String[]{{
                                                                                    add("nostrum"),
                                                                                    add("sint"),
                                                                                    add("doloribus"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.RELEASE;
                                                                    values = new String[]{{
                                                                        add("accusantium"),
                                                                        add("nulla"),
                                                                        add("inventore"),
                                                                        add("omnis"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.SECURITY,                 new String[]{{
                                                                                    add("sint"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.PRODUCT_FAMILY;
                                                                    values = new String[]{{
                                                                        add("natus"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.PRIORITY,                 new String[]{{
                                                                                    add("error"),
                                                                                    add("quaerat"),
                                                                                    add("delectus"),
                                                                                    add("molestiae"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.PATCH_SET;
                                                                    values = new String[]{{
                                                                        add("commodi"),
                                                                        add("impedit"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new PatchRule(                new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.CLASSIFICATION,                 new String[]{{
                                                                                                            add("labore"),
                                                                                                            add("pariatur"),
                                                                                                            add("vel"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.SECTION;
                                                                                            values = new String[]{{
                                                                                                add("occaecati"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.SEVERITY,                 new String[]{{
                                                                                                            add("quas"),
                                                                                                            add("aut"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.CVE_ID;
                                                                                            values = new String[]{{
                                                                                                add("minus"),
                                                                                                add("magni"),
                                                                                                add("mollitia"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.PRIORITY,                 new String[]{{
                                                                                                            add("occaecati"),
                                                                                                            add("enim"),
                                                                                                            add("tempora"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.EPOCH;
                                                                                            values = new String[]{{
                                                                                                add("explicabo"),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new PatchFilter(PatchFilterKeyEnum.PATCH_SET,                 new String[]{{
                                                                                                            add("accusantium"),
                                                                                                        }}) {{
                                                                                            key = PatchFilterKeyEnum.PRIORITY;
                                                                                            values = new String[]{{
                                                                                                add("voluptatibus"),
                                                                                                add("id"),
                                                                                            }};
                                                                                        }}),
                                                                                    }});) {{
                                                        approveAfterDays = 273839L;
                                                        approveUntilDate = "aspernatur";
                                                        complianceLevel = PatchComplianceLevelEnum.HIGH;
                                                        enableNonSecurity = false;
                                                        patchFilterGroup = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                            add(new PatchFilter(PatchFilterKeyEnum.PRIORITY,                 new String[]{{
                                                                                                add("cumque"),
                                                                                                add("in"),
                                                                                                add("a"),
                                                                                            }}) {{
                                                                                key = PatchFilterKeyEnum.MSRC_SEVERITY;
                                                                                values = new String[]{{
                                                                                    add("optio"),
                                                                                    add("itaque"),
                                                                                    add("at"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            patchFilters = new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                                add(new PatchFilter(PatchFilterKeyEnum.PRIORITY,                 new String[]{{
                                                                                    add("distinctio"),
                                                                                    add("minima"),
                                                                                    add("cupiditate"),
                                                                                    add("molestiae"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.ARCH;
                                                                    values = new String[]{{
                                                                        add("atque"),
                                                                    }};
                                                                }}),
                                                                add(new PatchFilter(PatchFilterKeyEnum.ARCH,                 new String[]{{
                                                                                    add("ullam"),
                                                                                    add("molestiae"),
                                                                                }}) {{
                                                                    key = PatchFilterKeyEnum.ADVISORY_ID;
                                                                    values = new String[]{{
                                                                        add("excepturi"),
                                                                        add("deleniti"),
                                                                        add("inventore"),
                                                                        add("perspiciatis"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }};
                                                    }}),
                                                }});;
                                approvedPatches = new String[]{{
                                    add("nesciunt"),
                                    add("commodi"),
                                }};
                                approvedPatchesComplianceLevel = PatchComplianceLevelEnum.LOW;
                                approvedPatchesEnableNonSecurity = false;
                                description = "atque";
                                globalFilters = new PatchFilterGroup(                new org.openapis.openapi.models.shared.PatchFilter[]{{
                                                    add(new PatchFilter(PatchFilterKeyEnum.REPOSITORY,                 new String[]{{
                                                                        add("ab"),
                                                                        add("alias"),
                                                                        add("accusantium"),
                                                                    }}) {{
                                                        key = PatchFilterKeyEnum.MSRC_SEVERITY;
                                                        values = new String[]{{
                                                            add("nemo"),
                                                            add("sequi"),
                                                        }};
                                                    }}),
                                                }});;
                                name = "Stacey Reynolds";
                                rejectedPatches = new String[]{{
                                    add("provident"),
                                    add("dolores"),
                                }};
                                rejectedPatchesAction = PatchActionEnum.ALLOW_AS_DEPENDENCY;
                                replace = false;
                                sources = new org.openapis.openapi.models.shared.PatchSource[]{{
                                    add(new PatchSource("amet", "ex",                 new String[]{{
                                                        add("officia"),
                                                        add("quisquam"),
                                                    }}) {{
                                        configuration = "quod";
                                        name = "Betty Hirthe";
                                        products = new String[]{{
                                            add("eius"),
                                            add("perspiciatis"),
                                        }};
                                    }}),
                                    add(new PatchSource("veniam", "quos",                 new String[]{{
                                                        add("facere"),
                                                        add("eius"),
                                                        add("doloremque"),
                                                    }}) {{
                                        configuration = "rem";
                                        name = "Elbert Bartell";
                                        products = new String[]{{
                                            add("sapiente"),
                                            add("veritatis"),
                                            add("provident"),
                                        }};
                                    }}),
                                    add(new PatchSource("molestiae", "facilis",                 new String[]{{
                                                        add("ipsum"),
                                                        add("itaque"),
                                                        add("cupiditate"),
                                                        add("consequatur"),
                                                    }}) {{
                                        configuration = "vero";
                                        name = "Emily Wisoky";
                                        products = new String[]{{
                                            add("nobis"),
                                            add("est"),
                                            add("quia"),
                                            add("natus"),
                                        }};
                                    }}),
                                    add(new PatchSource("nulla", "nemo",                 new String[]{{
                                                        add("dolore"),
                                                    }}) {{
                                        configuration = "harum";
                                        name = "Jesus Abshire";
                                        products = new String[]{{
                                            add("commodi"),
                                            add("blanditiis"),
                                            add("voluptatibus"),
                                        }};
                                    }}),
                                }};
                            }};, UpdatePatchBaselineXAmzTargetEnum.AMAZON_SSM_UPDATE_PATCH_BASELINE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "impedit";
                xAmzDate = "libero";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "vitae";
            }};            

            UpdatePatchBaselineResponse res = sdk.sdk.updatePatchBaseline(req);

            if (res.updatePatchBaselineResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResourceDataSync

<p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't edit that sync later and choose the <code>Include all accounts from my Organizations configuration</code> option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API operation only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceDataSyncRequest;
import org.openapis.openapi.models.operations.UpdateResourceDataSyncResponse;
import org.openapis.openapi.models.operations.UpdateResourceDataSyncXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResourceDataSyncAwsOrganizationsSource;
import org.openapis.openapi.models.shared.ResourceDataSyncOrganizationalUnit;
import org.openapis.openapi.models.shared.ResourceDataSyncSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateResourceDataSyncRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceDataSyncRequest req = new UpdateResourceDataSyncRequest(                new UpdateResourceDataSyncRequest("numquam",                 new ResourceDataSyncSource(                new String[]{{
                                                                add("quia"),
                                                                add("reiciendis"),
                                                                add("modi"),
                                                            }}, "doloribus") {{
                                                awsOrganizationsSource = new ResourceDataSyncAwsOrganizationsSource("et") {{
                                                    organizationalUnits = new org.openapis.openapi.models.shared.ResourceDataSyncOrganizationalUnit[]{{
                                                        add(new ResourceDataSyncOrganizationalUnit() {{
                                                            organizationalUnitId = "iusto";
                                                        }}),
                                                    }};
                                                }};;
                                                enableAllOpsDataSources = false;
                                                includeFutureRegions = false;
                                            }};, "a");, UpdateResourceDataSyncXAmzTargetEnum.AMAZON_SSM_UPDATE_RESOURCE_DATA_SYNC) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "saepe";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "beatae";
            }};            

            UpdateResourceDataSyncResponse res = sdk.sdk.updateResourceDataSync(req);

            if (res.updateResourceDataSyncResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Update the service setting for the account. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceSettingRequest;
import org.openapis.openapi.models.operations.UpdateServiceSettingResponse;
import org.openapis.openapi.models.operations.UpdateServiceSettingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceSettingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceSettingRequest req = new UpdateServiceSettingRequest(                new UpdateServiceSettingRequest("deleniti", "fugit");, UpdateServiceSettingXAmzTargetEnum.AMAZON_SSM_UPDATE_SERVICE_SETTING) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "sint";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "consequatur";
            }};            

            UpdateServiceSettingResponse res = sdk.sdk.updateServiceSetting(req);

            if (res.updateServiceSettingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
