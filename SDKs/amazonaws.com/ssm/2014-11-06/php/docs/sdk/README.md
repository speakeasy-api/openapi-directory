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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeForTaggingEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToResourceRequest();
    $request->addTagsToResourceRequest = new AddTagsToResourceRequest();
    $request->addTagsToResourceRequest->resourceId = 'deserunt';
    $request->addTagsToResourceRequest->resourceType = ResourceTypeForTaggingEnum::PARAMETER;
    $request->addTagsToResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AddTagsToResourceXAmzTargetEnum::AMAZON_SSM_ADD_TAGS_TO_RESOURCE;

    $response = $sdk->sdk->addTagsToResource($request);

    if ($response->addTagsToResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateOpsItemRelatedItem

Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateOpsItemRelatedItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateOpsItemRelatedItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateOpsItemRelatedItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateOpsItemRelatedItemRequest();
    $request->associateOpsItemRelatedItemRequest = new AssociateOpsItemRelatedItemRequest();
    $request->associateOpsItemRelatedItemRequest->associationType = 'minus';
    $request->associateOpsItemRelatedItemRequest->opsItemId = 'placeat';
    $request->associateOpsItemRelatedItemRequest->resourceType = 'voluptatum';
    $request->associateOpsItemRelatedItemRequest->resourceUri = 'iusto';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = AssociateOpsItemRelatedItemXAmzTargetEnum::AMAZON_SSM_ASSOCIATE_OPS_ITEM_RELATED_ITEM;

    $response = $sdk->sdk->associateOpsItemRelatedItem($request);

    if ($response->associateOpsItemRelatedItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelCommand

Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelCommandXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelCommandRequest();
    $request->cancelCommandRequest = new CancelCommandRequest();
    $request->cancelCommandRequest->commandId = 'deserunt';
    $request->cancelCommandRequest->instanceIds = [
        'ipsam',
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = CancelCommandXAmzTargetEnum::AMAZON_SSM_CANCEL_COMMAND;

    $response = $sdk->sdk->cancelCommand($request);

    if ($response->cancelCommandResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelMaintenanceWindowExecution

Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelMaintenanceWindowExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelMaintenanceWindowExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelMaintenanceWindowExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelMaintenanceWindowExecutionRequest();
    $request->cancelMaintenanceWindowExecutionRequest = new CancelMaintenanceWindowExecutionRequest();
    $request->cancelMaintenanceWindowExecutionRequest->windowExecutionId = 'molestiae';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CancelMaintenanceWindowExecutionXAmzTargetEnum::AMAZON_SSM_CANCEL_MAINTENANCE_WINDOW_EXECUTION;

    $response = $sdk->sdk->cancelMaintenanceWindowExecution($request);

    if ($response->cancelMaintenanceWindowExecutionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createActivation

<p>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> <note> <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called <i>managed nodes</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateActivationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegistrationMetadataItem;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActivationRequest();
    $request->createActivationRequest = new CreateActivationRequest();
    $request->createActivationRequest->defaultInstanceName = 'nam';
    $request->createActivationRequest->description = 'officia';
    $request->createActivationRequest->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-18T08:27:00.721Z');
    $request->createActivationRequest->iamRole = 'deleniti';
    $request->createActivationRequest->registrationLimit = 944669;
    $request->createActivationRequest->registrationMetadata = [
        new RegistrationMetadataItem(),
        new RegistrationMetadataItem(),
        new RegistrationMetadataItem(),
        new RegistrationMetadataItem(),
    ];
    $request->createActivationRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = CreateActivationXAmzTargetEnum::AMAZON_SSM_CREATE_ACTIVATION;

    $response = $sdk->sdk->createActivation($request);

    if ($response->createActivationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssociation

A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\AssociationComplianceSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceAssociationOutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3OutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\AssociationSyncComplianceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TargetLocation;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssociationRequest();
    $request->createAssociationRequest = new CreateAssociationRequest();
    $request->createAssociationRequest->alarmConfiguration = new AlarmConfiguration();
    $request->createAssociationRequest->alarmConfiguration->alarms = [
        new Alarm(),
        new Alarm(),
    ];
    $request->createAssociationRequest->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->createAssociationRequest->applyOnlyAtCronInterval = false;
    $request->createAssociationRequest->associationName = 'ipsum';
    $request->createAssociationRequest->automationTargetParameterName = 'excepturi';
    $request->createAssociationRequest->calendarNames = [
        'perferendis',
    ];
    $request->createAssociationRequest->complianceSeverity = AssociationComplianceSeverityEnum::HIGH;
    $request->createAssociationRequest->documentVersion = 'natus';
    $request->createAssociationRequest->instanceId = 'sed';
    $request->createAssociationRequest->maxConcurrency = 'iste';
    $request->createAssociationRequest->maxErrors = 'dolor';
    $request->createAssociationRequest->name = 'Lester Welch';
    $request->createAssociationRequest->outputLocation = new InstanceAssociationOutputLocation();
    $request->createAssociationRequest->outputLocation->s3Location = new S3OutputLocation();
    $request->createAssociationRequest->outputLocation->s3Location->outputS3BucketName = 'in';
    $request->createAssociationRequest->outputLocation->s3Location->outputS3KeyPrefix = 'corporis';
    $request->createAssociationRequest->outputLocation->s3Location->outputS3Region = 'iste';
    $request->createAssociationRequest->parameters = [
        'saepe' => [
            'architecto',
            'ipsa',
            'reiciendis',
        ],
        'est' => [
            'laborum',
            'dolores',
            'dolorem',
        ],
    ];
    $request->createAssociationRequest->scheduleExpression = 'corporis';
    $request->createAssociationRequest->scheduleOffset = 128926;
    $request->createAssociationRequest->syncCompliance = AssociationSyncComplianceEnum::MANUAL;
    $request->createAssociationRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createAssociationRequest->targetLocations = [
        new TargetLocation(),
        new TargetLocation(),
        new TargetLocation(),
    ];
    $request->createAssociationRequest->targetMaps = [
        [
            'excepturi' => [
                'iure',
            ],
            'culpa' => [
                'sapiente',
                'architecto',
                'mollitia',
                'dolorem',
            ],
        ],
        [
            'consequuntur' => [
                'mollitia',
                'occaecati',
                'numquam',
                'commodi',
            ],
            'quam' => [
                'velit',
                'error',
            ],
            'quia' => [
                'vitae',
                'laborum',
            ],
        ],
    ];
    $request->createAssociationRequest->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = CreateAssociationXAmzTargetEnum::AMAZON_SSM_CREATE_ASSOCIATION;

    $response = $sdk->sdk->createAssociation($request);

    if ($response->createAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssociationBatch

<p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.</p> <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.</p> <p>If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssociationBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssociationBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssociationBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\AssociationComplianceSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceAssociationOutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3OutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\AssociationSyncComplianceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetLocation;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssociationBatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssociationBatchRequest();
    $request->createAssociationBatchRequest = new CreateAssociationBatchRequest();
    $request->createAssociationBatchRequest->entries = [
        new CreateAssociationBatchRequestEntry(),
        new CreateAssociationBatchRequestEntry(),
        new CreateAssociationBatchRequestEntry(),
        new CreateAssociationBatchRequestEntry(),
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreateAssociationBatchXAmzTargetEnum::AMAZON_SSM_CREATE_ASSOCIATION_BATCH;

    $response = $sdk->sdk->createAssociationBatch($request);

    if ($response->createAssociationBatchResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDocument

Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentsSource;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentsSourceKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentRequires;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDocumentRequest();
    $request->createDocumentRequest = new CreateDocumentRequest();
    $request->createDocumentRequest->attachments = [
        new AttachmentsSource(),
        new AttachmentsSource(),
        new AttachmentsSource(),
        new AttachmentsSource(),
    ];
    $request->createDocumentRequest->content = 'vero';
    $request->createDocumentRequest->displayName = 'nihil';
    $request->createDocumentRequest->documentFormat = DocumentFormatEnum::JSON;
    $request->createDocumentRequest->documentType = DocumentTypeEnum::QUICK_SETUP;
    $request->createDocumentRequest->name = 'Geneva Klein Jr.';
    $request->createDocumentRequest->requires = [
        new DocumentRequires(),
        new DocumentRequires(),
    ];
    $request->createDocumentRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createDocumentRequest->targetType = 'maiores';
    $request->createDocumentRequest->versionName = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = CreateDocumentXAmzTargetEnum::AMAZON_SSM_CREATE_DOCUMENT;

    $response = $sdk->sdk->createDocument($request);

    if ($response->createDocumentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMaintenanceWindow

<p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMaintenanceWindowRequest();
    $request->createMaintenanceWindowRequest = new CreateMaintenanceWindowRequest();
    $request->createMaintenanceWindowRequest->allowUnassociatedTargets = false;
    $request->createMaintenanceWindowRequest->clientToken = 'commodi';
    $request->createMaintenanceWindowRequest->cutoff = 918236;
    $request->createMaintenanceWindowRequest->description = 'quae';
    $request->createMaintenanceWindowRequest->duration = 216822;
    $request->createMaintenanceWindowRequest->endDate = 'quidem';
    $request->createMaintenanceWindowRequest->name = 'Andy Streich';
    $request->createMaintenanceWindowRequest->schedule = 'rem';
    $request->createMaintenanceWindowRequest->scheduleOffset = 916723;
    $request->createMaintenanceWindowRequest->scheduleTimezone = 'quasi';
    $request->createMaintenanceWindowRequest->startDate = 'repudiandae';
    $request->createMaintenanceWindowRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = CreateMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_CREATE_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->createMaintenanceWindow($request);

    if ($response->createMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOpsItem

<p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOpsItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOpsItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemNotification;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemDataValue;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RelatedOpsItem;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateOpsItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOpsItemRequest();
    $request->createOpsItemRequest = new CreateOpsItemRequest();
    $request->createOpsItemRequest->accountId = 'explicabo';
    $request->createOpsItemRequest->actualEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T01:56:50.693Z');
    $request->createOpsItemRequest->actualStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T02:24:27.835Z');
    $request->createOpsItemRequest->category = 'modi';
    $request->createOpsItemRequest->description = 'qui';
    $request->createOpsItemRequest->notifications = [
        new OpsItemNotification(),
        new OpsItemNotification(),
    ];
    $request->createOpsItemRequest->operationalData = [
        'quos' => new OpsItemDataValue(),
        'perferendis' => new OpsItemDataValue(),
        'magni' => new OpsItemDataValue(),
    ];
    $request->createOpsItemRequest->opsItemType = 'assumenda';
    $request->createOpsItemRequest->plannedEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T06:52:02.282Z');
    $request->createOpsItemRequest->plannedStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T14:19:37.294Z');
    $request->createOpsItemRequest->priority = 569618;
    $request->createOpsItemRequest->relatedOpsItems = [
        new RelatedOpsItem(),
        new RelatedOpsItem(),
    ];
    $request->createOpsItemRequest->severity = 'facilis';
    $request->createOpsItemRequest->source = 'tempore';
    $request->createOpsItemRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createOpsItemRequest->title = 'Dr.';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = CreateOpsItemXAmzTargetEnum::AMAZON_SSM_CREATE_OPS_ITEM;

    $response = $sdk->sdk->createOpsItem($request);

    if ($response->createOpsItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOpsMetadata

If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetadataValue;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateOpsMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOpsMetadataRequest();
    $request->createOpsMetadataRequest = new CreateOpsMetadataRequest();
    $request->createOpsMetadataRequest->metadata = [
        'officia' => new MetadataValue(),
        'dolor' => new MetadataValue(),
        'debitis' => new MetadataValue(),
    ];
    $request->createOpsMetadataRequest->resourceId = 'a';
    $request->createOpsMetadataRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = CreateOpsMetadataXAmzTargetEnum::AMAZON_SSM_CREATE_OPS_METADATA;

    $response = $sdk->sdk->createOpsMetadata($request);

    if ($response->createOpsMetadataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPatchBaseline

<p>Creates a patch baseline.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchRuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\PatchRule;
use \OpenAPI\OpenAPI\Models\Shared\PatchComplianceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilterGroup;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilter;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchSource;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePatchBaselineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePatchBaselineRequest();
    $request->createPatchBaselineRequest = new CreatePatchBaselineRequest();
    $request->createPatchBaselineRequest->approvalRules = new PatchRuleGroup();
    $request->createPatchBaselineRequest->approvalRules->patchRules = [
        new PatchRule(),
        new PatchRule(),
        new PatchRule(),
        new PatchRule(),
    ];
    $request->createPatchBaselineRequest->approvedPatches = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->createPatchBaselineRequest->approvedPatchesComplianceLevel = PatchComplianceLevelEnum::HIGH;
    $request->createPatchBaselineRequest->approvedPatchesEnableNonSecurity = false;
    $request->createPatchBaselineRequest->clientToken = 'occaecati';
    $request->createPatchBaselineRequest->description = 'enim';
    $request->createPatchBaselineRequest->globalFilters = new PatchFilterGroup();
    $request->createPatchBaselineRequest->globalFilters->patchFilters = [
        new PatchFilter(),
        new PatchFilter(),
        new PatchFilter(),
        new PatchFilter(),
    ];
    $request->createPatchBaselineRequest->name = 'Abraham McKenzie';
    $request->createPatchBaselineRequest->operatingSystem = OperatingSystemEnum::CENTOS;
    $request->createPatchBaselineRequest->rejectedPatches = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->createPatchBaselineRequest->rejectedPatchesAction = PatchActionEnum::ALLOW_AS_DEPENDENCY;
    $request->createPatchBaselineRequest->sources = [
        new PatchSource(),
        new PatchSource(),
    ];
    $request->createPatchBaselineRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = CreatePatchBaselineXAmzTargetEnum::AMAZON_SSM_CREATE_PATCH_BASELINE;

    $response = $sdk->sdk->createPatchBaseline($request);

    if ($response->createPatchBaselineResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResourceDataSync

<p>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncS3Destination;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncDestinationDataSharing;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncS3FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncSource;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncAwsOrganizationsSource;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncOrganizationalUnit;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceDataSyncXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourceDataSyncRequest();
    $request->createResourceDataSyncRequest = new CreateResourceDataSyncRequest();
    $request->createResourceDataSyncRequest->s3Destination = new ResourceDataSyncS3Destination();
    $request->createResourceDataSyncRequest->s3Destination->awskmsKeyARN = 'labore';
    $request->createResourceDataSyncRequest->s3Destination->bucketName = 'labore';
    $request->createResourceDataSyncRequest->s3Destination->destinationDataSharing = new ResourceDataSyncDestinationDataSharing();
    $request->createResourceDataSyncRequest->s3Destination->destinationDataSharing->destinationDataSharingType = 'suscipit';
    $request->createResourceDataSyncRequest->s3Destination->prefix = 'natus';
    $request->createResourceDataSyncRequest->s3Destination->region = 'nobis';
    $request->createResourceDataSyncRequest->s3Destination->syncFormat = ResourceDataSyncS3FormatEnum::JSON_SER_DE;
    $request->createResourceDataSyncRequest->syncName = 'eum';
    $request->createResourceDataSyncRequest->syncSource = new ResourceDataSyncSource();
    $request->createResourceDataSyncRequest->syncSource->awsOrganizationsSource = new ResourceDataSyncAwsOrganizationsSource();
    $request->createResourceDataSyncRequest->syncSource->awsOrganizationsSource->organizationSourceType = 'vero';
    $request->createResourceDataSyncRequest->syncSource->awsOrganizationsSource->organizationalUnits = [
        new ResourceDataSyncOrganizationalUnit(),
    ];
    $request->createResourceDataSyncRequest->syncSource->enableAllOpsDataSources = false;
    $request->createResourceDataSyncRequest->syncSource->includeFutureRegions = false;
    $request->createResourceDataSyncRequest->syncSource->sourceRegions = [
        'magnam',
    ];
    $request->createResourceDataSyncRequest->syncSource->sourceType = 'et';
    $request->createResourceDataSyncRequest->syncType = 'excepturi';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = CreateResourceDataSyncXAmzTargetEnum::AMAZON_SSM_CREATE_RESOURCE_DATA_SYNC;

    $response = $sdk->sdk->createResourceDataSync($request);

    if ($response->createResourceDataSyncResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteActivation

Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActivationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteActivationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActivationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteActivationRequest();
    $request->deleteActivationRequest = new DeleteActivationRequest();
    $request->deleteActivationRequest->activationId = 'mollitia';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteActivationXAmzTargetEnum::AMAZON_SSM_DELETE_ACTIVATION;

    $response = $sdk->sdk->deleteActivation($request);

    if ($response->deleteActivationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssociation

<p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the <code>Targets</code> parameter, then you must delete the association by using the association ID.</p> <p>When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssociationRequest();
    $request->deleteAssociationRequest = new DeleteAssociationRequest();
    $request->deleteAssociationRequest->associationId = 'iure';
    $request->deleteAssociationRequest->instanceId = 'doloribus';
    $request->deleteAssociationRequest->name = 'Frederick Schoen';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DeleteAssociationXAmzTargetEnum::AMAZON_SSM_DELETE_ASSOCIATION;

    $response = $sdk->sdk->deleteAssociation($request);

    if ($response->deleteAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDocument

<p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDocumentRequest();
    $request->deleteDocumentRequest = new DeleteDocumentRequest();
    $request->deleteDocumentRequest->documentVersion = 'repellat';
    $request->deleteDocumentRequest->force = false;
    $request->deleteDocumentRequest->name = 'Louis Turner Sr.';
    $request->deleteDocumentRequest->versionName = 'praesentium';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = DeleteDocumentXAmzTargetEnum::AMAZON_SSM_DELETE_DOCUMENT;

    $response = $sdk->sdk->deleteDocument($request);

    if ($response->deleteDocumentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInventory

Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventorySchemaDeleteOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInventoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInventoryRequest();
    $request->deleteInventoryRequest = new DeleteInventoryRequest();
    $request->deleteInventoryRequest->clientToken = 'ea';
    $request->deleteInventoryRequest->dryRun = false;
    $request->deleteInventoryRequest->schemaDeleteOption = InventorySchemaDeleteOptionEnum::DELETE_SCHEMA;
    $request->deleteInventoryRequest->typeName = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DeleteInventoryXAmzTargetEnum::AMAZON_SSM_DELETE_INVENTORY;

    $response = $sdk->sdk->deleteInventory($request);

    if ($response->deleteInventoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMaintenanceWindow

Deletes a maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMaintenanceWindowRequest();
    $request->deleteMaintenanceWindowRequest = new DeleteMaintenanceWindowRequest();
    $request->deleteMaintenanceWindowRequest->windowId = 'autem';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = DeleteMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_DELETE_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->deleteMaintenanceWindow($request);

    if ($response->deleteMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOpsMetadata

Delete OpsMetadata related to an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOpsMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOpsMetadataRequest();
    $request->deleteOpsMetadataRequest = new DeleteOpsMetadataRequest();
    $request->deleteOpsMetadataRequest->opsMetadataArn = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DeleteOpsMetadataXAmzTargetEnum::AMAZON_SSM_DELETE_OPS_METADATA;

    $response = $sdk->sdk->deleteOpsMetadata($request);

    if ($response->deleteOpsMetadataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteParameter

Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParameterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteParameterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParameterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteParameterRequest();
    $request->deleteParameterRequest = new DeleteParameterRequest();
    $request->deleteParameterRequest->name = 'Mrs. Deanna Kuhn';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteParameterXAmzTargetEnum::AMAZON_SSM_DELETE_PARAMETER;

    $response = $sdk->sdk->deleteParameter($request);

    if ($response->deleteParameterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteParameters

Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteParametersRequest();
    $request->deleteParametersRequest = new DeleteParametersRequest();
    $request->deleteParametersRequest->names = [
        'hic',
        'recusandae',
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = DeleteParametersXAmzTargetEnum::AMAZON_SSM_DELETE_PARAMETERS;

    $response = $sdk->sdk->deleteParameters($request);

    if ($response->deleteParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePatchBaseline

Deletes a patch baseline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePatchBaselineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePatchBaselineRequest();
    $request->deletePatchBaselineRequest = new DeletePatchBaselineRequest();
    $request->deletePatchBaselineRequest->baselineId = 'error';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeletePatchBaselineXAmzTargetEnum::AMAZON_SSM_DELETE_PATCH_BASELINE;

    $response = $sdk->sdk->deletePatchBaseline($request);

    if ($response->deletePatchBaselineResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourceDataSync

Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceDataSyncXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceDataSyncRequest();
    $request->deleteResourceDataSyncRequest = new DeleteResourceDataSyncRequest();
    $request->deleteResourceDataSyncRequest->syncName = 'iste';
    $request->deleteResourceDataSyncRequest->syncType = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = DeleteResourceDataSyncXAmzTargetEnum::AMAZON_SSM_DELETE_RESOURCE_DATA_SYNC;

    $response = $sdk->sdk->deleteResourceDataSync($request);

    if ($response->deleteResourceDataSyncResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->policyHash = 'quos';
    $request->deleteResourcePolicyRequest->policyId = 'aliquid';
    $request->deleteResourcePolicyRequest->resourceArn = 'dolorem';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::AMAZON_SSM_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterManagedInstance

Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterManagedInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterManagedInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterManagedInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterManagedInstanceRequest();
    $request->deregisterManagedInstanceRequest = new DeregisterManagedInstanceRequest();
    $request->deregisterManagedInstanceRequest->instanceId = 'voluptate';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeregisterManagedInstanceXAmzTargetEnum::AMAZON_SSM_DEREGISTER_MANAGED_INSTANCE;

    $response = $sdk->sdk->deregisterManagedInstance($request);

    if ($response->deregisterManagedInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterPatchBaselineForPatchGroup

Removes a patch group from a patch baseline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterPatchBaselineForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterPatchBaselineForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterPatchBaselineForPatchGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterPatchBaselineForPatchGroupRequest();
    $request->deregisterPatchBaselineForPatchGroupRequest = new DeregisterPatchBaselineForPatchGroupRequest();
    $request->deregisterPatchBaselineForPatchGroupRequest->baselineId = 'ipsa';
    $request->deregisterPatchBaselineForPatchGroupRequest->patchGroup = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeregisterPatchBaselineForPatchGroupXAmzTargetEnum::AMAZON_SSM_DEREGISTER_PATCH_BASELINE_FOR_PATCH_GROUP;

    $response = $sdk->sdk->deregisterPatchBaselineForPatchGroup($request);

    if ($response->deregisterPatchBaselineForPatchGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterTargetFromMaintenanceWindow

Removes a target from a maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTargetFromMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterTargetFromMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTargetFromMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterTargetFromMaintenanceWindowRequest();
    $request->deregisterTargetFromMaintenanceWindowRequest = new DeregisterTargetFromMaintenanceWindowRequest();
    $request->deregisterTargetFromMaintenanceWindowRequest->safe = false;
    $request->deregisterTargetFromMaintenanceWindowRequest->windowId = 'eos';
    $request->deregisterTargetFromMaintenanceWindowRequest->windowTargetId = 'atque';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DeregisterTargetFromMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_DEREGISTER_TARGET_FROM_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->deregisterTargetFromMaintenanceWindow($request);

    if ($response->deregisterTargetFromMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterTaskFromMaintenanceWindow

Removes a task from a maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTaskFromMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterTaskFromMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterTaskFromMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterTaskFromMaintenanceWindowRequest();
    $request->deregisterTaskFromMaintenanceWindowRequest = new DeregisterTaskFromMaintenanceWindowRequest();
    $request->deregisterTaskFromMaintenanceWindowRequest->windowId = 'dolorum';
    $request->deregisterTaskFromMaintenanceWindowRequest->windowTaskId = 'deleniti';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DeregisterTaskFromMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_DEREGISTER_TASK_FROM_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->deregisterTaskFromMaintenanceWindow($request);

    if ($response->deregisterTaskFromMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeActivations

Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActivationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeActivationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeActivationsFilter;
use \OpenAPI\OpenAPI\Models\Shared\DescribeActivationsFilterKeysEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActivationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeActivationsRequest();
    $request->describeActivationsRequest = new DescribeActivationsRequest();
    $request->describeActivationsRequest->filters = [
        new DescribeActivationsFilter(),
        new DescribeActivationsFilter(),
        new DescribeActivationsFilter(),
    ];
    $request->describeActivationsRequest->maxResults = 906418;
    $request->describeActivationsRequest->nextToken = 'eius';
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = DescribeActivationsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_ACTIVATIONS;

    $response = $sdk->sdk->describeActivations($request);

    if ($response->describeActivationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAssociation

Describes the association for the specified target or managed node. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAssociationRequest();
    $request->describeAssociationRequest = new DescribeAssociationRequest();
    $request->describeAssociationRequest->associationId = 'provident';
    $request->describeAssociationRequest->associationVersion = 'minima';
    $request->describeAssociationRequest->instanceId = 'repellendus';
    $request->describeAssociationRequest->name = 'Donnie Abbott';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = DescribeAssociationXAmzTargetEnum::AMAZON_SSM_DESCRIBE_ASSOCIATION;

    $response = $sdk->sdk->describeAssociation($request);

    if ($response->describeAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAssociationExecutionTargets

Views information about a specific execution of a specific association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssociationExecutionTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAssociationExecutionTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociationExecutionTargetsFilter;
use \OpenAPI\OpenAPI\Models\Shared\AssociationExecutionTargetsFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssociationExecutionTargetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAssociationExecutionTargetsRequest();
    $request->describeAssociationExecutionTargetsRequest = new DescribeAssociationExecutionTargetsRequest();
    $request->describeAssociationExecutionTargetsRequest->associationId = 'esse';
    $request->describeAssociationExecutionTargetsRequest->executionId = 'harum';
    $request->describeAssociationExecutionTargetsRequest->filters = [
        new AssociationExecutionTargetsFilter(),
        new AssociationExecutionTargetsFilter(),
    ];
    $request->describeAssociationExecutionTargetsRequest->maxResults = 215507;
    $request->describeAssociationExecutionTargetsRequest->nextToken = 'quisquam';
    $request->maxResults = 'tenetur';
    $request->nextToken = 'amet';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DescribeAssociationExecutionTargetsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_ASSOCIATION_EXECUTION_TARGETS;

    $response = $sdk->sdk->describeAssociationExecutionTargets($request);

    if ($response->describeAssociationExecutionTargetsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAssociationExecutions

Views all executions for a specific association ID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssociationExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAssociationExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociationExecutionFilter;
use \OpenAPI\OpenAPI\Models\Shared\AssociationExecutionFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssociationFilterOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAssociationExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAssociationExecutionsRequest();
    $request->describeAssociationExecutionsRequest = new DescribeAssociationExecutionsRequest();
    $request->describeAssociationExecutionsRequest->associationId = 'nihil';
    $request->describeAssociationExecutionsRequest->filters = [
        new AssociationExecutionFilter(),
    ];
    $request->describeAssociationExecutionsRequest->maxResults = 711584;
    $request->describeAssociationExecutionsRequest->nextToken = 'neque';
    $request->maxResults = 'sed';
    $request->nextToken = 'vel';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DescribeAssociationExecutionsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_ASSOCIATION_EXECUTIONS;

    $response = $sdk->sdk->describeAssociationExecutions($request);

    if ($response->describeAssociationExecutionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAutomationExecutions

Provides details about all active and terminated Automation executions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutomationExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAutomationExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutomationExecutionFilter;
use \OpenAPI\OpenAPI\Models\Shared\AutomationExecutionFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutomationExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAutomationExecutionsRequest();
    $request->describeAutomationExecutionsRequest = new DescribeAutomationExecutionsRequest();
    $request->describeAutomationExecutionsRequest->filters = [
        new AutomationExecutionFilter(),
        new AutomationExecutionFilter(),
        new AutomationExecutionFilter(),
    ];
    $request->describeAutomationExecutionsRequest->maxResults = 807581;
    $request->describeAutomationExecutionsRequest->nextToken = 'pariatur';
    $request->maxResults = 'soluta';
    $request->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = DescribeAutomationExecutionsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_AUTOMATION_EXECUTIONS;

    $response = $sdk->sdk->describeAutomationExecutions($request);

    if ($response->describeAutomationExecutionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAutomationStepExecutions

Information about all active and terminated step executions in an Automation workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutomationStepExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAutomationStepExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StepExecutionFilter;
use \OpenAPI\OpenAPI\Models\Shared\StepExecutionFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutomationStepExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAutomationStepExecutionsRequest();
    $request->describeAutomationStepExecutionsRequest = new DescribeAutomationStepExecutionsRequest();
    $request->describeAutomationStepExecutionsRequest->automationExecutionId = 'aliquid';
    $request->describeAutomationStepExecutionsRequest->filters = [
        new StepExecutionFilter(),
        new StepExecutionFilter(),
    ];
    $request->describeAutomationStepExecutionsRequest->maxResults = 565421;
    $request->describeAutomationStepExecutionsRequest->nextToken = 'temporibus';
    $request->describeAutomationStepExecutionsRequest->reverseOrder = false;
    $request->maxResults = 'qui';
    $request->nextToken = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DescribeAutomationStepExecutionsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_AUTOMATION_STEP_EXECUTIONS;

    $response = $sdk->sdk->describeAutomationStepExecutions($request);

    if ($response->describeAutomationStepExecutionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAvailablePatches

Lists all patches eligible to be included in a patch baseline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAvailablePatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAvailablePatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchOrchestratorFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAvailablePatchesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAvailablePatchesRequest();
    $request->describeAvailablePatchesRequest = new DescribeAvailablePatchesRequest();
    $request->describeAvailablePatchesRequest->filters = [
        new PatchOrchestratorFilter(),
    ];
    $request->describeAvailablePatchesRequest->maxResults = 765326;
    $request->describeAvailablePatchesRequest->nextToken = 'soluta';
    $request->maxResults = 'nobis';
    $request->nextToken = 'et';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeAvailablePatchesXAmzTargetEnum::AMAZON_SSM_DESCRIBE_AVAILABLE_PATCHES;

    $response = $sdk->sdk->describeAvailablePatches($request);

    if ($response->describeAvailablePatchesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDocument

Describes the specified Amazon Web Services Systems Manager document (SSM document).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDocumentRequest();
    $request->describeDocumentRequest = new DescribeDocumentRequest();
    $request->describeDocumentRequest->documentVersion = 'aperiam';
    $request->describeDocumentRequest->name = 'Mike Greenholt';
    $request->describeDocumentRequest->versionName = 'dolorum';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = DescribeDocumentXAmzTargetEnum::AMAZON_SSM_DESCRIBE_DOCUMENT;

    $response = $sdk->sdk->describeDocument($request);

    if ($response->describeDocumentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDocumentPermission

Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentPermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDocumentPermissionRequest();
    $request->describeDocumentPermissionRequest = new DescribeDocumentPermissionRequest();
    $request->describeDocumentPermissionRequest->maxResults = 833038;
    $request->describeDocumentPermissionRequest->name = 'Domingo Grady';
    $request->describeDocumentPermissionRequest->nextToken = 'qui';
    $request->describeDocumentPermissionRequest->permissionType = DocumentPermissionTypeEnum::SHARE;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeDocumentPermissionXAmzTargetEnum::AMAZON_SSM_DESCRIBE_DOCUMENT_PERMISSION;

    $response = $sdk->sdk->describeDocumentPermission($request);

    if ($response->describeDocumentPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEffectiveInstanceAssociations

All associations for the managed node(s).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEffectiveInstanceAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEffectiveInstanceAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEffectiveInstanceAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEffectiveInstanceAssociationsRequest();
    $request->describeEffectiveInstanceAssociationsRequest = new DescribeEffectiveInstanceAssociationsRequest();
    $request->describeEffectiveInstanceAssociationsRequest->instanceId = 'omnis';
    $request->describeEffectiveInstanceAssociationsRequest->maxResults = 338159;
    $request->describeEffectiveInstanceAssociationsRequest->nextToken = 'ipsum';
    $request->maxResults = 'delectus';
    $request->nextToken = 'voluptate';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = DescribeEffectiveInstanceAssociationsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS;

    $response = $sdk->sdk->describeEffectiveInstanceAssociations($request);

    if ($response->describeEffectiveInstanceAssociationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEffectivePatchesForPatchBaseline

Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEffectivePatchesForPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEffectivePatchesForPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEffectivePatchesForPatchBaselineRequest();
    $request->describeEffectivePatchesForPatchBaselineRequest = new DescribeEffectivePatchesForPatchBaselineRequest();
    $request->describeEffectivePatchesForPatchBaselineRequest->baselineId = 'odio';
    $request->describeEffectivePatchesForPatchBaselineRequest->maxResults = 630448;
    $request->describeEffectivePatchesForPatchBaselineRequest->nextToken = 'facilis';
    $request->maxResults = 'vero';
    $request->nextToken = 'ducimus';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum::AMAZON_SSM_DESCRIBE_EFFECTIVE_PATCHES_FOR_PATCH_BASELINE;

    $response = $sdk->sdk->describeEffectivePatchesForPatchBaseline($request);

    if ($response->describeEffectivePatchesForPatchBaselineResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstanceAssociationsStatus

The status of the associations for the managed node(s).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstanceAssociationsStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstanceAssociationsStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstanceAssociationsStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstanceAssociationsStatusRequest();
    $request->describeInstanceAssociationsStatusRequest = new DescribeInstanceAssociationsStatusRequest();
    $request->describeInstanceAssociationsStatusRequest->instanceId = 'voluptatibus';
    $request->describeInstanceAssociationsStatusRequest->maxResults = 347233;
    $request->describeInstanceAssociationsStatusRequest->nextToken = 'nulla';
    $request->maxResults = 'fugit';
    $request->nextToken = 'porro';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DescribeInstanceAssociationsStatusXAmzTargetEnum::AMAZON_SSM_DESCRIBE_INSTANCE_ASSOCIATIONS_STATUS;

    $response = $sdk->sdk->describeInstanceAssociationsStatus($request);

    if ($response->describeInstanceAssociationsStatusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstanceInformation

<p>Describes one or more of your managed nodes, including information about the operating system platform, the version of SSM Agent installed on the managed node, node status, and so on.</p> <p>If you specify one or more managed node IDs, it returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.</p> <note> <p>The <code>IamRole</code> field for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This call doesn't return the IAM role for EC2 instances.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstanceInformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstanceInformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInformationStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInformationFilter;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInformationFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstanceInformationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstanceInformationRequest();
    $request->describeInstanceInformationRequest = new DescribeInstanceInformationRequest();
    $request->describeInstanceInformationRequest->filters = [
        new InstanceInformationStringFilter(),
        new InstanceInformationStringFilter(),
    ];
    $request->describeInstanceInformationRequest->instanceInformationFilterList = [
        new InstanceInformationFilter(),
        new InstanceInformationFilter(),
    ];
    $request->describeInstanceInformationRequest->maxResults = 410492;
    $request->describeInstanceInformationRequest->nextToken = 'aspernatur';
    $request->maxResults = 'vel';
    $request->nextToken = 'possimus';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribeInstanceInformationXAmzTargetEnum::AMAZON_SSM_DESCRIBE_INSTANCE_INFORMATION;

    $response = $sdk->sdk->describeInstanceInformation($request);

    if ($response->describeInstanceInformationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstancePatchStates

Retrieves the high-level patch state of one or more managed nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancePatchStatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstancePatchStatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancePatchStatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstancePatchStatesRequest();
    $request->describeInstancePatchStatesRequest = new DescribeInstancePatchStatesRequest();
    $request->describeInstancePatchStatesRequest->instanceIds = [
        'ex',
    ];
    $request->describeInstancePatchStatesRequest->maxResults = 862192;
    $request->describeInstancePatchStatesRequest->nextToken = 'excepturi';
    $request->maxResults = 'voluptatibus';
    $request->nextToken = 'nostrum';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = DescribeInstancePatchStatesXAmzTargetEnum::AMAZON_SSM_DESCRIBE_INSTANCE_PATCH_STATES;

    $response = $sdk->sdk->describeInstancePatchStates($request);

    if ($response->describeInstancePatchStatesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstancePatchStatesForPatchGroup

Retrieves the high-level patch state for the managed nodes in the specified patch group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancePatchStatesForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstancePatchStatesForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstancePatchStateFilter;
use \OpenAPI\OpenAPI\Models\Shared\InstancePatchStateOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstancePatchStatesForPatchGroupRequest();
    $request->describeInstancePatchStatesForPatchGroupRequest = new DescribeInstancePatchStatesForPatchGroupRequest();
    $request->describeInstancePatchStatesForPatchGroupRequest->filters = [
        new InstancePatchStateFilter(),
        new InstancePatchStateFilter(),
    ];
    $request->describeInstancePatchStatesForPatchGroupRequest->maxResults = 81101;
    $request->describeInstancePatchStatesForPatchGroupRequest->nextToken = 'magnam';
    $request->describeInstancePatchStatesForPatchGroupRequest->patchGroup = 'ea';
    $request->maxResults = 'quo';
    $request->nextToken = 'consectetur';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum::AMAZON_SSM_DESCRIBE_INSTANCE_PATCH_STATES_FOR_PATCH_GROUP;

    $response = $sdk->sdk->describeInstancePatchStatesForPatchGroup($request);

    if ($response->describeInstancePatchStatesForPatchGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInstancePatches

Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancePatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInstancePatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchOrchestratorFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInstancePatchesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInstancePatchesRequest();
    $request->describeInstancePatchesRequest = new DescribeInstancePatchesRequest();
    $request->describeInstancePatchesRequest->filters = [
        new PatchOrchestratorFilter(),
    ];
    $request->describeInstancePatchesRequest->instanceId = 'deleniti';
    $request->describeInstancePatchesRequest->maxResults = 770581;
    $request->describeInstancePatchesRequest->nextToken = 'aliquam';
    $request->maxResults = 'fugit';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = DescribeInstancePatchesXAmzTargetEnum::AMAZON_SSM_DESCRIBE_INSTANCE_PATCHES;

    $response = $sdk->sdk->describeInstancePatches($request);

    if ($response->describeInstancePatchesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInventoryDeletions

Describes a specific delete inventory operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInventoryDeletionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInventoryDeletionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInventoryDeletionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInventoryDeletionsRequest();
    $request->describeInventoryDeletionsRequest = new DescribeInventoryDeletionsRequest();
    $request->describeInventoryDeletionsRequest->deletionId = 'eum';
    $request->describeInventoryDeletionsRequest->maxResults = 420539;
    $request->describeInventoryDeletionsRequest->nextToken = 'nobis';
    $request->maxResults = 'quas';
    $request->nextToken = 'assumenda';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DescribeInventoryDeletionsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_INVENTORY_DELETIONS;

    $response = $sdk->sdk->describeInventoryDeletions($request);

    if ($response->describeInventoryDeletionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindowExecutionTaskInvocations

Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowExecutionTaskInvocationsRequest();
    $request->describeMaintenanceWindowExecutionTaskInvocationsRequest = new DescribeMaintenanceWindowExecutionTaskInvocationsRequest();
    $request->describeMaintenanceWindowExecutionTaskInvocationsRequest->filters = [
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
    ];
    $request->describeMaintenanceWindowExecutionTaskInvocationsRequest->maxResults = 55374;
    $request->describeMaintenanceWindowExecutionTaskInvocationsRequest->nextToken = 'molestiae';
    $request->describeMaintenanceWindowExecutionTaskInvocationsRequest->taskId = 'magnam';
    $request->describeMaintenanceWindowExecutionTaskInvocationsRequest->windowExecutionId = 'odio';
    $request->maxResults = 'eius';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATIONS;

    $response = $sdk->sdk->describeMaintenanceWindowExecutionTaskInvocations($request);

    if ($response->describeMaintenanceWindowExecutionTaskInvocationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindowExecutionTasks

For a given maintenance window execution, lists the tasks that were run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowExecutionTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowExecutionTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowExecutionTasksRequest();
    $request->describeMaintenanceWindowExecutionTasksRequest = new DescribeMaintenanceWindowExecutionTasksRequest();
    $request->describeMaintenanceWindowExecutionTasksRequest->filters = [
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
    ];
    $request->describeMaintenanceWindowExecutionTasksRequest->maxResults = 379927;
    $request->describeMaintenanceWindowExecutionTasksRequest->nextToken = 'assumenda';
    $request->describeMaintenanceWindowExecutionTasksRequest->windowExecutionId = 'eos';
    $request->maxResults = 'praesentium';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASKS;

    $response = $sdk->sdk->describeMaintenanceWindowExecutionTasks($request);

    if ($response->describeMaintenanceWindowExecutionTasksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindowExecutions

Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowExecutionsRequest();
    $request->describeMaintenanceWindowExecutionsRequest = new DescribeMaintenanceWindowExecutionsRequest();
    $request->describeMaintenanceWindowExecutionsRequest->filters = [
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
    ];
    $request->describeMaintenanceWindowExecutionsRequest->maxResults = 681359;
    $request->describeMaintenanceWindowExecutionsRequest->nextToken = 'eius';
    $request->describeMaintenanceWindowExecutionsRequest->windowId = 'eos';
    $request->maxResults = 'voluptas';
    $request->nextToken = 'ab';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = DescribeMaintenanceWindowExecutionsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_EXECUTIONS;

    $response = $sdk->sdk->describeMaintenanceWindowExecutions($request);

    if ($response->describeMaintenanceWindowExecutionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindowSchedule

Retrieves information about upcoming executions of a maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchOrchestratorFilter;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowScheduleRequest();
    $request->describeMaintenanceWindowScheduleRequest = new DescribeMaintenanceWindowScheduleRequest();
    $request->describeMaintenanceWindowScheduleRequest->filters = [
        new PatchOrchestratorFilter(),
        new PatchOrchestratorFilter(),
        new PatchOrchestratorFilter(),
        new PatchOrchestratorFilter(),
    ];
    $request->describeMaintenanceWindowScheduleRequest->maxResults = 459856;
    $request->describeMaintenanceWindowScheduleRequest->nextToken = 'recusandae';
    $request->describeMaintenanceWindowScheduleRequest->resourceType = MaintenanceWindowResourceTypeEnum::INSTANCE;
    $request->describeMaintenanceWindowScheduleRequest->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->describeMaintenanceWindowScheduleRequest->windowId = 'quod';
    $request->maxResults = 'dignissimos';
    $request->nextToken = 'inventore';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DescribeMaintenanceWindowScheduleXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_SCHEDULE;

    $response = $sdk->sdk->describeMaintenanceWindowSchedule($request);

    if ($response->describeMaintenanceWindowScheduleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindowTargets

Lists the targets registered with the maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowTargetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowTargetsRequest();
    $request->describeMaintenanceWindowTargetsRequest = new DescribeMaintenanceWindowTargetsRequest();
    $request->describeMaintenanceWindowTargetsRequest->filters = [
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
    ];
    $request->describeMaintenanceWindowTargetsRequest->maxResults = 174112;
    $request->describeMaintenanceWindowTargetsRequest->nextToken = 'deserunt';
    $request->describeMaintenanceWindowTargetsRequest->windowId = 'molestiae';
    $request->maxResults = 'accusantium';
    $request->nextToken = 'porro';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = DescribeMaintenanceWindowTargetsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_TARGETS;

    $response = $sdk->sdk->describeMaintenanceWindowTargets($request);

    if ($response->describeMaintenanceWindowTargetsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindowTasks

<p>Lists the tasks in a maintenance window.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowTasksRequest();
    $request->describeMaintenanceWindowTasksRequest = new DescribeMaintenanceWindowTasksRequest();
    $request->describeMaintenanceWindowTasksRequest->filters = [
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
    ];
    $request->describeMaintenanceWindowTasksRequest->maxResults = 277596;
    $request->describeMaintenanceWindowTasksRequest->nextToken = 'atque';
    $request->describeMaintenanceWindowTasksRequest->windowId = 'explicabo';
    $request->maxResults = 'minima';
    $request->nextToken = 'nisi';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DescribeMaintenanceWindowTasksXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOW_TASKS;

    $response = $sdk->sdk->describeMaintenanceWindowTasks($request);

    if ($response->describeMaintenanceWindowTasksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindows

Retrieves the maintenance windows in an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowsRequest();
    $request->describeMaintenanceWindowsRequest = new DescribeMaintenanceWindowsRequest();
    $request->describeMaintenanceWindowsRequest->filters = [
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
        new MaintenanceWindowFilter(),
    ];
    $request->describeMaintenanceWindowsRequest->maxResults = 92260;
    $request->describeMaintenanceWindowsRequest->nextToken = 'esse';
    $request->maxResults = 'eveniet';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribeMaintenanceWindowsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOWS;

    $response = $sdk->sdk->describeMaintenanceWindows($request);

    if ($response->describeMaintenanceWindowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMaintenanceWindowsForTarget

Retrieves information about the maintenance window targets or tasks that a managed node is associated with.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowsForTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMaintenanceWindowsForTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMaintenanceWindowsForTargetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMaintenanceWindowsForTargetRequest();
    $request->describeMaintenanceWindowsForTargetRequest = new DescribeMaintenanceWindowsForTargetRequest();
    $request->describeMaintenanceWindowsForTargetRequest->maxResults = 904045;
    $request->describeMaintenanceWindowsForTargetRequest->nextToken = 'vel';
    $request->describeMaintenanceWindowsForTargetRequest->resourceType = MaintenanceWindowResourceTypeEnum::RESOURCE_GROUP;
    $request->describeMaintenanceWindowsForTargetRequest->targets = [
        new Target(),
        new Target(),
    ];
    $request->maxResults = 'rerum';
    $request->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = DescribeMaintenanceWindowsForTargetXAmzTargetEnum::AMAZON_SSM_DESCRIBE_MAINTENANCE_WINDOWS_FOR_TARGET;

    $response = $sdk->sdk->describeMaintenanceWindowsForTarget($request);

    if ($response->describeMaintenanceWindowsForTargetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOpsItems

<p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOpsItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeOpsItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemFilter;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOpsItemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOpsItemsRequest();
    $request->describeOpsItemsRequest = new DescribeOpsItemsRequest();
    $request->describeOpsItemsRequest->maxResults = 766964;
    $request->describeOpsItemsRequest->nextToken = 'consequuntur';
    $request->describeOpsItemsRequest->opsItemFilters = [
        new OpsItemFilter(),
    ];
    $request->maxResults = 'minus';
    $request->nextToken = 'quaerat';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = DescribeOpsItemsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_OPS_ITEMS;

    $response = $sdk->sdk->describeOpsItems($request);

    if ($response->describeOpsItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeParameters

<p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>DescribeParameters</code> retrieves whatever the original key alias was referencing.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParametersFilter;
use \OpenAPI\OpenAPI\Models\Shared\ParametersFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParameterStringFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeParametersRequest();
    $request->describeParametersRequest = new DescribeParametersRequest();
    $request->describeParametersRequest->filters = [
        new ParametersFilter(),
        new ParametersFilter(),
        new ParametersFilter(),
    ];
    $request->describeParametersRequest->maxResults = 457223;
    $request->describeParametersRequest->nextToken = 'quasi';
    $request->describeParametersRequest->parameterFilters = [
        new ParameterStringFilter(),
        new ParameterStringFilter(),
        new ParameterStringFilter(),
        new ParameterStringFilter(),
    ];
    $request->maxResults = 'error';
    $request->nextToken = 'sint';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DescribeParametersXAmzTargetEnum::AMAZON_SSM_DESCRIBE_PARAMETERS;

    $response = $sdk->sdk->describeParameters($request);

    if ($response->describeParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePatchBaselines

Lists the patch baselines in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchBaselinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePatchBaselinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchOrchestratorFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchBaselinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePatchBaselinesRequest();
    $request->describePatchBaselinesRequest = new DescribePatchBaselinesRequest();
    $request->describePatchBaselinesRequest->filters = [
        new PatchOrchestratorFilter(),
    ];
    $request->describePatchBaselinesRequest->maxResults = 94458;
    $request->describePatchBaselinesRequest->nextToken = 'similique';
    $request->maxResults = 'culpa';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DescribePatchBaselinesXAmzTargetEnum::AMAZON_SSM_DESCRIBE_PATCH_BASELINES;

    $response = $sdk->sdk->describePatchBaselines($request);

    if ($response->describePatchBaselinesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePatchGroupState

Returns high-level aggregated patch compliance state information for a patch group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchGroupStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePatchGroupStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchGroupStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePatchGroupStateRequest();
    $request->describePatchGroupStateRequest = new DescribePatchGroupStateRequest();
    $request->describePatchGroupStateRequest->patchGroup = 'illum';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = DescribePatchGroupStateXAmzTargetEnum::AMAZON_SSM_DESCRIBE_PATCH_GROUP_STATE;

    $response = $sdk->sdk->describePatchGroupState($request);

    if ($response->describePatchGroupStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePatchGroups

Lists all patch groups that have been registered with patch baselines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePatchGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchOrchestratorFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePatchGroupsRequest();
    $request->describePatchGroupsRequest = new DescribePatchGroupsRequest();
    $request->describePatchGroupsRequest->filters = [
        new PatchOrchestratorFilter(),
        new PatchOrchestratorFilter(),
    ];
    $request->describePatchGroupsRequest->maxResults = 391774;
    $request->describePatchGroupsRequest->nextToken = 'aut';
    $request->maxResults = 'voluptatum';
    $request->nextToken = 'qui';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribePatchGroupsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_PATCH_GROUPS;

    $response = $sdk->sdk->describePatchGroups($request);

    if ($response->describePatchGroupsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePatchProperties

<p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>DEBIAN</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>MACOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> </p> </dd> <dt>ORACLE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>UBUNTU</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>WINDOWS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> | <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code> </p> </dd> </dl>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePatchPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchSetEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchPropertyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribePatchPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePatchPropertiesRequest();
    $request->describePatchPropertiesRequest = new DescribePatchPropertiesRequest();
    $request->describePatchPropertiesRequest->maxResults = 945302;
    $request->describePatchPropertiesRequest->nextToken = 'quasi';
    $request->describePatchPropertiesRequest->operatingSystem = OperatingSystemEnum::ALMA_LINUX;
    $request->describePatchPropertiesRequest->patchSet = PatchSetEnum::OS;
    $request->describePatchPropertiesRequest->property = PatchPropertyEnum::CLASSIFICATION;
    $request->maxResults = 'ipsa';
    $request->nextToken = 'minima';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = DescribePatchPropertiesXAmzTargetEnum::AMAZON_SSM_DESCRIBE_PATCH_PROPERTIES;

    $response = $sdk->sdk->describePatchProperties($request);

    if ($response->describePatchPropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSessions

Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SessionFilter;
use \OpenAPI\OpenAPI\Models\Shared\SessionFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSessionsRequest();
    $request->describeSessionsRequest = new DescribeSessionsRequest();
    $request->describeSessionsRequest->filters = [
        new SessionFilter(),
    ];
    $request->describeSessionsRequest->maxResults = 513075;
    $request->describeSessionsRequest->nextToken = 'eum';
    $request->describeSessionsRequest->state = SessionStateEnum::HISTORY;
    $request->maxResults = 'ab';
    $request->nextToken = 'corrupti';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DescribeSessionsXAmzTargetEnum::AMAZON_SSM_DESCRIBE_SESSIONS;

    $response = $sdk->sdk->describeSessions($request);

    if ($response->describeSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateOpsItemRelatedItem

Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateOpsItemRelatedItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateOpsItemRelatedItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateOpsItemRelatedItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateOpsItemRelatedItemRequest();
    $request->disassociateOpsItemRelatedItemRequest = new DisassociateOpsItemRelatedItemRequest();
    $request->disassociateOpsItemRelatedItemRequest->associationId = 'voluptas';
    $request->disassociateOpsItemRelatedItemRequest->opsItemId = 'aut';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = DisassociateOpsItemRelatedItemXAmzTargetEnum::AMAZON_SSM_DISASSOCIATE_OPS_ITEM_RELATED_ITEM;

    $response = $sdk->sdk->disassociateOpsItemRelatedItem($request);

    if ($response->disassociateOpsItemRelatedItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationExecution

Get detailed information about a particular Automation execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAutomationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationExecutionRequest();
    $request->getAutomationExecutionRequest = new GetAutomationExecutionRequest();
    $request->getAutomationExecutionRequest->automationExecutionId = 'asperiores';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = GetAutomationExecutionXAmzTargetEnum::AMAZON_SSM_GET_AUTOMATION_EXECUTION;

    $response = $sdk->sdk->getAutomationExecution($request);

    if ($response->getAutomationExecutionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalendarState

<p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p> <p>If you specify more than one calendar in a request, the command returns the status of <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is <code>CLOSED</code>.</p> <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalendarStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCalendarStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCalendarStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalendarStateRequest();
    $request->getCalendarStateRequest = new GetCalendarStateRequest();
    $request->getCalendarStateRequest->atTime = 'dignissimos';
    $request->getCalendarStateRequest->calendarNames = [
        'asperiores',
        'nemo',
        'quae',
    ];
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = GetCalendarStateXAmzTargetEnum::AMAZON_SSM_GET_CALENDAR_STATE;

    $response = $sdk->sdk->getCalendarState($request);

    if ($response->getCalendarStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommandInvocation

<p>Returns detailed information about command execution for an invocation or plugin.</p> <p> <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes, use <a>ListCommands</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommandInvocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCommandInvocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommandInvocationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommandInvocationRequest();
    $request->getCommandInvocationRequest = new GetCommandInvocationRequest();
    $request->getCommandInvocationRequest->commandId = 'id';
    $request->getCommandInvocationRequest->instanceId = 'suscipit';
    $request->getCommandInvocationRequest->pluginName = 'velit';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = GetCommandInvocationXAmzTargetEnum::AMAZON_SSM_GET_COMMAND_INVOCATION;

    $response = $sdk->sdk->getCommandInvocation($request);

    if ($response->getCommandInvocationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectionStatus

Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConnectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionStatusRequest();
    $request->getConnectionStatusRequest = new GetConnectionStatusRequest();
    $request->getConnectionStatusRequest->target = 'quos';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = GetConnectionStatusXAmzTargetEnum::AMAZON_SSM_GET_CONNECTION_STATUS;

    $response = $sdk->sdk->getConnectionStatus($request);

    if ($response->getConnectionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefaultPatchBaseline

<p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you don't specify an operating system value, the default patch baseline for Windows is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDefaultPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDefaultPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDefaultPatchBaselineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDefaultPatchBaselineRequest();
    $request->getDefaultPatchBaselineRequest = new GetDefaultPatchBaselineRequest();
    $request->getDefaultPatchBaselineRequest->operatingSystem = OperatingSystemEnum::REDHAT_ENTERPRISE_LINUX;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = GetDefaultPatchBaselineXAmzTargetEnum::AMAZON_SSM_GET_DEFAULT_PATCH_BASELINE;

    $response = $sdk->sdk->getDefaultPatchBaseline($request);

    if ($response->getDefaultPatchBaselineResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeployablePatchSnapshotForInstance

<p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p> <note> <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the <code>AWS-RunShellScript</code> document or the <code>AWS-RunPowerShellScript</code> document.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeployablePatchSnapshotForInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeployablePatchSnapshotForInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaselineOverride;
use \OpenAPI\OpenAPI\Models\Shared\PatchRuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\PatchRule;
use \OpenAPI\OpenAPI\Models\Shared\PatchComplianceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilterGroup;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilter;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchSource;
use \OpenAPI\OpenAPI\Models\Operations\GetDeployablePatchSnapshotForInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeployablePatchSnapshotForInstanceRequest();
    $request->getDeployablePatchSnapshotForInstanceRequest = new GetDeployablePatchSnapshotForInstanceRequest();
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride = new BaselineOverride();
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->approvalRules = new PatchRuleGroup();
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->approvalRules->patchRules = [
        new PatchRule(),
    ];
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->approvedPatches = [
        'exercitationem',
        'earum',
    ];
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->approvedPatchesComplianceLevel = PatchComplianceLevelEnum::INFORMATIONAL;
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->approvedPatchesEnableNonSecurity = false;
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->globalFilters = new PatchFilterGroup();
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->globalFilters->patchFilters = [
        new PatchFilter(),
        new PatchFilter(),
    ];
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->operatingSystem = OperatingSystemEnum::AMAZON_LINUX2023;
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->rejectedPatches = [
        'reiciendis',
        'quidem',
    ];
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->rejectedPatchesAction = PatchActionEnum::BLOCK;
    $request->getDeployablePatchSnapshotForInstanceRequest->baselineOverride->sources = [
        new PatchSource(),
        new PatchSource(),
        new PatchSource(),
        new PatchSource(),
    ];
    $request->getDeployablePatchSnapshotForInstanceRequest->instanceId = 'dolore';
    $request->getDeployablePatchSnapshotForInstanceRequest->snapshotId = 'sunt';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = GetDeployablePatchSnapshotForInstanceXAmzTargetEnum::AMAZON_SSM_GET_DEPLOYABLE_PATCH_SNAPSHOT_FOR_INSTANCE;

    $response = $sdk->sdk->getDeployablePatchSnapshotForInstance($request);

    if ($response->getDeployablePatchSnapshotForInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocument

Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentRequest();
    $request->getDocumentRequest = new GetDocumentRequest();
    $request->getDocumentRequest->documentFormat = DocumentFormatEnum::TEXT;
    $request->getDocumentRequest->documentVersion = 'consectetur';
    $request->getDocumentRequest->name = 'Dr. Maryann Howe';
    $request->getDocumentRequest->versionName = 'vitae';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = GetDocumentXAmzTargetEnum::AMAZON_SSM_GET_DOCUMENT;

    $response = $sdk->sdk->getDocument($request);

    if ($response->getDocumentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInventory

Query inventory information. This includes managed node status, such as <code>Stopped</code> or <code>Terminated</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventoryAggregator;
use \OpenAPI\OpenAPI\Models\Shared\InventoryGroup;
use \OpenAPI\OpenAPI\Models\Shared\InventoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\InventoryQueryOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResultAttribute;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInventoryRequest();
    $request->getInventoryRequest = new GetInventoryRequest();
    $request->getInventoryRequest->aggregators = [
        new InventoryAggregator(),
        new InventoryAggregator(),
    ];
    $request->getInventoryRequest->filters = [
        new InventoryFilter(),
        new InventoryFilter(),
        new InventoryFilter(),
    ];
    $request->getInventoryRequest->maxResults = 680116;
    $request->getInventoryRequest->nextToken = 'adipisci';
    $request->getInventoryRequest->resultAttributes = [
        new ResultAttribute(),
        new ResultAttribute(),
        new ResultAttribute(),
        new ResultAttribute(),
    ];
    $request->maxResults = 'dolores';
    $request->nextToken = 'blanditiis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = GetInventoryXAmzTargetEnum::AMAZON_SSM_GET_INVENTORY;

    $response = $sdk->sdk->getInventory($request);

    if ($response->getInventoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInventorySchema

Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInventorySchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInventorySchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInventorySchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInventorySchemaRequest();
    $request->getInventorySchemaRequest = new GetInventorySchemaRequest();
    $request->getInventorySchemaRequest->aggregator = false;
    $request->getInventorySchemaRequest->maxResults = 738391;
    $request->getInventorySchemaRequest->nextToken = 'blanditiis';
    $request->getInventorySchemaRequest->subType = false;
    $request->getInventorySchemaRequest->typeName = 'quas';
    $request->maxResults = 'hic';
    $request->nextToken = 'nesciunt';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = GetInventorySchemaXAmzTargetEnum::AMAZON_SSM_GET_INVENTORY_SCHEMA;

    $response = $sdk->sdk->getInventorySchema($request);

    if ($response->getInventorySchemaResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMaintenanceWindow

Retrieves a maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMaintenanceWindowRequest();
    $request->getMaintenanceWindowRequest = new GetMaintenanceWindowRequest();
    $request->getMaintenanceWindowRequest->windowId = 'sit';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = GetMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_GET_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->getMaintenanceWindow($request);

    if ($response->getMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMaintenanceWindowExecution

Retrieves details about a specific a maintenance window execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMaintenanceWindowExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMaintenanceWindowExecutionRequest();
    $request->getMaintenanceWindowExecutionRequest = new GetMaintenanceWindowExecutionRequest();
    $request->getMaintenanceWindowExecutionRequest->windowExecutionId = 'expedita';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = GetMaintenanceWindowExecutionXAmzTargetEnum::AMAZON_SSM_GET_MAINTENANCE_WINDOW_EXECUTION;

    $response = $sdk->sdk->getMaintenanceWindowExecution($request);

    if ($response->getMaintenanceWindowExecutionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMaintenanceWindowExecutionTask

Retrieves the details about a specific task run as part of a maintenance window execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowExecutionTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMaintenanceWindowExecutionTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowExecutionTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMaintenanceWindowExecutionTaskRequest();
    $request->getMaintenanceWindowExecutionTaskRequest = new GetMaintenanceWindowExecutionTaskRequest();
    $request->getMaintenanceWindowExecutionTaskRequest->taskId = 'quidem';
    $request->getMaintenanceWindowExecutionTaskRequest->windowExecutionId = 'explicabo';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'illo';
    $request->xAmzTarget = GetMaintenanceWindowExecutionTaskXAmzTargetEnum::AMAZON_SSM_GET_MAINTENANCE_WINDOW_EXECUTION_TASK;

    $response = $sdk->sdk->getMaintenanceWindowExecutionTask($request);

    if ($response->getMaintenanceWindowExecutionTaskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMaintenanceWindowExecutionTaskInvocation

Retrieves information about a specific task running on a specific target.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowExecutionTaskInvocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMaintenanceWindowExecutionTaskInvocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMaintenanceWindowExecutionTaskInvocationRequest();
    $request->getMaintenanceWindowExecutionTaskInvocationRequest = new GetMaintenanceWindowExecutionTaskInvocationRequest();
    $request->getMaintenanceWindowExecutionTaskInvocationRequest->invocationId = 'reiciendis';
    $request->getMaintenanceWindowExecutionTaskInvocationRequest->taskId = 'perferendis';
    $request->getMaintenanceWindowExecutionTaskInvocationRequest->windowExecutionId = 'corrupti';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum::AMAZON_SSM_GET_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATION;

    $response = $sdk->sdk->getMaintenanceWindowExecutionTaskInvocation($request);

    if ($response->getMaintenanceWindowExecutionTaskInvocationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMaintenanceWindowTask

<p>Retrieves the details of a maintenance window task.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note> <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMaintenanceWindowTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceWindowTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMaintenanceWindowTaskRequest();
    $request->getMaintenanceWindowTaskRequest = new GetMaintenanceWindowTaskRequest();
    $request->getMaintenanceWindowTaskRequest->windowId = 'ea';
    $request->getMaintenanceWindowTaskRequest->windowTaskId = 'occaecati';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = GetMaintenanceWindowTaskXAmzTargetEnum::AMAZON_SSM_GET_MAINTENANCE_WINDOW_TASK;

    $response = $sdk->sdk->getMaintenanceWindowTask($request);

    if ($response->getMaintenanceWindowTaskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOpsItem

<p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOpsItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOpsItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOpsItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOpsItemRequest();
    $request->getOpsItemRequest = new GetOpsItemRequest();
    $request->getOpsItemRequest->opsItemArn = 'sit';
    $request->getOpsItemRequest->opsItemId = 'non';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = GetOpsItemXAmzTargetEnum::AMAZON_SSM_GET_OPS_ITEM;

    $response = $sdk->sdk->getOpsItem($request);

    if ($response->getOpsItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOpsMetadata

View operational metadata related to an application in Application Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOpsMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOpsMetadataRequest();
    $request->getOpsMetadataRequest = new GetOpsMetadataRequest();
    $request->getOpsMetadataRequest->maxResults = 524970;
    $request->getOpsMetadataRequest->nextToken = 'sit';
    $request->getOpsMetadataRequest->opsMetadataArn = 'nobis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = GetOpsMetadataXAmzTargetEnum::AMAZON_SSM_GET_OPS_METADATA;

    $response = $sdk->sdk->getOpsMetadata($request);

    if ($response->getOpsMetadataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOpsSummary

View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOpsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOpsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpsAggregator;
use \OpenAPI\OpenAPI\Models\Shared\OpsFilter;
use \OpenAPI\OpenAPI\Models\Shared\OpsFilterOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpsResultAttribute;
use \OpenAPI\OpenAPI\Models\Operations\GetOpsSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOpsSummaryRequest();
    $request->getOpsSummaryRequest = new GetOpsSummaryRequest();
    $request->getOpsSummaryRequest->aggregators = [
        new OpsAggregator(),
    ];
    $request->getOpsSummaryRequest->filters = [
        new OpsFilter(),
        new OpsFilter(),
        new OpsFilter(),
        new OpsFilter(),
    ];
    $request->getOpsSummaryRequest->maxResults = 253642;
    $request->getOpsSummaryRequest->nextToken = 'veniam';
    $request->getOpsSummaryRequest->resultAttributes = [
        new OpsResultAttribute(),
        new OpsResultAttribute(),
    ];
    $request->getOpsSummaryRequest->syncName = 'officiis';
    $request->maxResults = 'beatae';
    $request->nextToken = 'laudantium';
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = GetOpsSummaryXAmzTargetEnum::AMAZON_SSM_GET_OPS_SUMMARY;

    $response = $sdk->sdk->getOpsSummary($request);

    if ($response->getOpsSummaryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParameter

<p>Get information about a single parameter by specifying the parameter name.</p> <note> <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetParameterRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetParameterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetParameterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParameterRequest();
    $request->getParameterRequest = new GetParameterRequest();
    $request->getParameterRequest->name = 'Rudolph Trantow';
    $request->getParameterRequest->withDecryption = false;
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = GetParameterXAmzTargetEnum::AMAZON_SSM_GET_PARAMETER;

    $response = $sdk->sdk->getParameter($request);

    if ($response->getParameterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParameterHistory

<p>Retrieves the history of all changes to a parameter.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>GetParameterHistory</code> retrieves whatever the original key alias was referencing.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetParameterHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetParameterHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetParameterHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParameterHistoryRequest();
    $request->getParameterHistoryRequest = new GetParameterHistoryRequest();
    $request->getParameterHistoryRequest->maxResults = 148268;
    $request->getParameterHistoryRequest->name = 'Janis Bartell';
    $request->getParameterHistoryRequest->nextToken = 'magnam';
    $request->getParameterHistoryRequest->withDecryption = false;
    $request->maxResults = 'consequatur';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = GetParameterHistoryXAmzTargetEnum::AMAZON_SSM_GET_PARAMETER_HISTORY;

    $response = $sdk->sdk->getParameterHistory($request);

    if ($response->getParameterHistoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParameters

<p>Get information about one or more parameters by specifying multiple parameter names.</p> <note> <p>To get information about a single parameter, you can use the <a>GetParameter</a> operation instead.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetParametersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParametersRequest();
    $request->getParametersRequest = new GetParametersRequest();
    $request->getParametersRequest->names = [
        'ex',
        'sed',
        'sit',
    ];
    $request->getParametersRequest->withDecryption = false;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = GetParametersXAmzTargetEnum::AMAZON_SSM_GET_PARAMETERS;

    $response = $sdk->sdk->getParameters($request);

    if ($response->getParametersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParametersByPath

<p>Retrieve information about one or more parameters in a specific hierarchy. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetParametersByPathRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetParametersByPathRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParameterStringFilter;
use \OpenAPI\OpenAPI\Models\Operations\GetParametersByPathXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParametersByPathRequest();
    $request->getParametersByPathRequest = new GetParametersByPathRequest();
    $request->getParametersByPathRequest->maxResults = 209750;
    $request->getParametersByPathRequest->nextToken = 'harum';
    $request->getParametersByPathRequest->parameterFilters = [
        new ParameterStringFilter(),
    ];
    $request->getParametersByPathRequest->path = 'architecto';
    $request->getParametersByPathRequest->recursive = false;
    $request->getParametersByPathRequest->withDecryption = false;
    $request->maxResults = 'occaecati';
    $request->nextToken = 'labore';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = GetParametersByPathXAmzTargetEnum::AMAZON_SSM_GET_PARAMETERS_BY_PATH;

    $response = $sdk->sdk->getParametersByPath($request);

    if ($response->getParametersByPathResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPatchBaseline

Retrieves information about a patch baseline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPatchBaselineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPatchBaselineRequest();
    $request->getPatchBaselineRequest = new GetPatchBaselineRequest();
    $request->getPatchBaselineRequest->baselineId = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = GetPatchBaselineXAmzTargetEnum::AMAZON_SSM_GET_PATCH_BASELINE;

    $response = $sdk->sdk->getPatchBaseline($request);

    if ($response->getPatchBaselineResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPatchBaselineForPatchGroup

Retrieves the patch baseline that should be used for the specified patch group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPatchBaselineForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPatchBaselineForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPatchBaselineForPatchGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPatchBaselineForPatchGroupRequest();
    $request->getPatchBaselineForPatchGroupRequest = new GetPatchBaselineForPatchGroupRequest();
    $request->getPatchBaselineForPatchGroupRequest->operatingSystem = OperatingSystemEnum::ALMA_LINUX;
    $request->getPatchBaselineForPatchGroupRequest->patchGroup = 'perferendis';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = GetPatchBaselineForPatchGroupXAmzTargetEnum::AMAZON_SSM_GET_PATCH_BASELINE_FOR_PATCH_GROUP;

    $response = $sdk->sdk->getPatchBaselineForPatchGroup($request);

    if ($response->getPatchBaselineForPatchGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicies

Returns an array of the <code>Policy</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePoliciesRequest();
    $request->getResourcePoliciesRequest = new GetResourcePoliciesRequest();
    $request->getResourcePoliciesRequest->maxResults = 333965;
    $request->getResourcePoliciesRequest->nextToken = 'voluptatem';
    $request->getResourcePoliciesRequest->resourceArn = 'quisquam';
    $request->maxResults = 'repudiandae';
    $request->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = GetResourcePoliciesXAmzTargetEnum::AMAZON_SSM_GET_RESOURCE_POLICIES;

    $response = $sdk->sdk->getResourcePolicies($request);

    if ($response->getResourcePoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of <code>false</code>. This means the user can't use this feature unless they change the setting to <code>true</code> and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Query the current service setting for the Amazon Web Services account. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceSettingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSettingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceSettingRequest();
    $request->getServiceSettingRequest = new GetServiceSettingRequest();
    $request->getServiceSettingRequest->settingId = 'et';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = GetServiceSettingXAmzTargetEnum::AMAZON_SSM_GET_SERVICE_SETTING;

    $response = $sdk->sdk->getServiceSetting($request);

    if ($response->getServiceSettingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## labelParameterVersion

<p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LabelParameterVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\LabelParameterVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\LabelParameterVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LabelParameterVersionRequest();
    $request->labelParameterVersionRequest = new LabelParameterVersionRequest();
    $request->labelParameterVersionRequest->labels = [
        'accusamus',
        'natus',
        'minima',
        'aspernatur',
    ];
    $request->labelParameterVersionRequest->name = 'Elisa Little';
    $request->labelParameterVersionRequest->parameterVersion = 502721;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = LabelParameterVersionXAmzTargetEnum::AMAZON_SSM_LABEL_PARAMETER_VERSION;

    $response = $sdk->sdk->labelParameterVersion($request);

    if ($response->labelParameterVersionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociationVersions

Retrieves all versions of an association for a specific association ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssociationVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociationVersionsRequest();
    $request->listAssociationVersionsRequest = new ListAssociationVersionsRequest();
    $request->listAssociationVersionsRequest->associationId = 'repellendus';
    $request->listAssociationVersionsRequest->maxResults = 287119;
    $request->listAssociationVersionsRequest->nextToken = 'reiciendis';
    $request->maxResults = 'doloremque';
    $request->nextToken = 'repudiandae';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = ListAssociationVersionsXAmzTargetEnum::AMAZON_SSM_LIST_ASSOCIATION_VERSIONS;

    $response = $sdk->sdk->listAssociationVersions($request);

    if ($response->listAssociationVersionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociations

Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociationFilter;
use \OpenAPI\OpenAPI\Models\Shared\AssociationFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociationsRequest();
    $request->listAssociationsRequest = new ListAssociationsRequest();
    $request->listAssociationsRequest->associationFilterList = [
        new AssociationFilter(),
        new AssociationFilter(),
        new AssociationFilter(),
        new AssociationFilter(),
    ];
    $request->listAssociationsRequest->maxResults = 562783;
    $request->listAssociationsRequest->nextToken = 'magnam';
    $request->maxResults = 'saepe';
    $request->nextToken = 'consequuntur';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = ListAssociationsXAmzTargetEnum::AMAZON_SSM_LIST_ASSOCIATIONS;

    $response = $sdk->sdk->listAssociations($request);

    if ($response->listAssociationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCommandInvocations

An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. <code>ListCommandInvocations</code> provide status about command execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCommandInvocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCommandInvocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommandFilter;
use \OpenAPI\OpenAPI\Models\Shared\CommandFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCommandInvocationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCommandInvocationsRequest();
    $request->listCommandInvocationsRequest = new ListCommandInvocationsRequest();
    $request->listCommandInvocationsRequest->commandId = 'consequuntur';
    $request->listCommandInvocationsRequest->details = false;
    $request->listCommandInvocationsRequest->filters = [
        new CommandFilter(),
    ];
    $request->listCommandInvocationsRequest->instanceId = 'id';
    $request->listCommandInvocationsRequest->maxResults = 335631;
    $request->listCommandInvocationsRequest->nextToken = 'reprehenderit';
    $request->maxResults = 'error';
    $request->nextToken = 'illo';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = ListCommandInvocationsXAmzTargetEnum::AMAZON_SSM_LIST_COMMAND_INVOCATIONS;

    $response = $sdk->sdk->listCommandInvocations($request);

    if ($response->listCommandInvocationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCommands

Lists the commands requested by users of the Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCommandsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCommandsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommandFilter;
use \OpenAPI\OpenAPI\Models\Shared\CommandFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCommandsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCommandsRequest();
    $request->listCommandsRequest = new ListCommandsRequest();
    $request->listCommandsRequest->commandId = 'ipsa';
    $request->listCommandsRequest->filters = [
        new CommandFilter(),
        new CommandFilter(),
        new CommandFilter(),
    ];
    $request->listCommandsRequest->instanceId = 'quae';
    $request->listCommandsRequest->maxResults = 474668;
    $request->listCommandsRequest->nextToken = 'eveniet';
    $request->maxResults = 'qui';
    $request->nextToken = 'cum';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = ListCommandsXAmzTargetEnum::AMAZON_SSM_LIST_COMMANDS;

    $response = $sdk->sdk->listCommands($request);

    if ($response->listCommandsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComplianceItems

For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComplianceItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComplianceItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceQueryOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListComplianceItemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComplianceItemsRequest();
    $request->listComplianceItemsRequest = new ListComplianceItemsRequest();
    $request->listComplianceItemsRequest->filters = [
        new ComplianceStringFilter(),
        new ComplianceStringFilter(),
    ];
    $request->listComplianceItemsRequest->maxResults = 320565;
    $request->listComplianceItemsRequest->nextToken = 'repellat';
    $request->listComplianceItemsRequest->resourceIds = [
        'corporis',
    ];
    $request->listComplianceItemsRequest->resourceTypes = [
        'nihil',
        'mollitia',
        'voluptas',
    ];
    $request->maxResults = 'alias';
    $request->nextToken = 'maiores';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = ListComplianceItemsXAmzTargetEnum::AMAZON_SSM_LIST_COMPLIANCE_ITEMS;

    $response = $sdk->sdk->listComplianceItems($request);

    if ($response->listComplianceItemsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComplianceSummaries

Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComplianceSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComplianceSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceQueryOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListComplianceSummariesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComplianceSummariesRequest();
    $request->listComplianceSummariesRequest = new ListComplianceSummariesRequest();
    $request->listComplianceSummariesRequest->filters = [
        new ComplianceStringFilter(),
    ];
    $request->listComplianceSummariesRequest->maxResults = 925703;
    $request->listComplianceSummariesRequest->nextToken = 'omnis';
    $request->maxResults = 'quaerat';
    $request->nextToken = 'molestiae';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListComplianceSummariesXAmzTargetEnum::AMAZON_SSM_LIST_COMPLIANCE_SUMMARIES;

    $response = $sdk->sdk->listComplianceSummaries($request);

    if ($response->listComplianceSummariesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocumentMetadataHistory

Information about approval reviews for a version of a change template in Change Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentMetadataHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDocumentMetadataHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentMetadataEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentMetadataHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentMetadataHistoryRequest();
    $request->listDocumentMetadataHistoryRequest = new ListDocumentMetadataHistoryRequest();
    $request->listDocumentMetadataHistoryRequest->documentVersion = 'nemo';
    $request->listDocumentMetadataHistoryRequest->maxResults = 928219;
    $request->listDocumentMetadataHistoryRequest->metadata = DocumentMetadataEnumEnum::DOCUMENT_REVIEWS;
    $request->listDocumentMetadataHistoryRequest->name = 'Sherri Hauck';
    $request->listDocumentMetadataHistoryRequest->nextToken = 'provident';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = ListDocumentMetadataHistoryXAmzTargetEnum::AMAZON_SSM_LIST_DOCUMENT_METADATA_HISTORY;

    $response = $sdk->sdk->listDocumentMetadataHistory($request);

    if ($response->listDocumentMetadataHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocumentVersions

List all versions for a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDocumentVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentVersionsRequest();
    $request->listDocumentVersionsRequest = new ListDocumentVersionsRequest();
    $request->listDocumentVersionsRequest->maxResults = 821719;
    $request->listDocumentVersionsRequest->name = 'Dr. Reginald Hyatt';
    $request->listDocumentVersionsRequest->nextToken = 'ullam';
    $request->maxResults = 'in';
    $request->nextToken = 'nam';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = ListDocumentVersionsXAmzTargetEnum::AMAZON_SSM_LIST_DOCUMENT_VERSIONS;

    $response = $sdk->sdk->listDocumentVersions($request);

    if ($response->listDocumentVersionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocuments

Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentFilter;
use \OpenAPI\OpenAPI\Models\Shared\DocumentFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentKeyValuesFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentsRequest();
    $request->listDocumentsRequest = new ListDocumentsRequest();
    $request->listDocumentsRequest->documentFilterList = [
        new DocumentFilter(),
        new DocumentFilter(),
        new DocumentFilter(),
        new DocumentFilter(),
    ];
    $request->listDocumentsRequest->filters = [
        new DocumentKeyValuesFilter(),
        new DocumentKeyValuesFilter(),
        new DocumentKeyValuesFilter(),
        new DocumentKeyValuesFilter(),
    ];
    $request->listDocumentsRequest->maxResults = 764562;
    $request->listDocumentsRequest->nextToken = 'vitae';
    $request->maxResults = 'rerum';
    $request->nextToken = 'tempora';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = ListDocumentsXAmzTargetEnum::AMAZON_SSM_LIST_DOCUMENTS;

    $response = $sdk->sdk->listDocuments($request);

    if ($response->listDocumentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInventoryEntries

A list of inventory items returned by the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInventoryEntriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInventoryEntriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\InventoryQueryOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListInventoryEntriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInventoryEntriesRequest();
    $request->listInventoryEntriesRequest = new ListInventoryEntriesRequest();
    $request->listInventoryEntriesRequest->filters = [
        new InventoryFilter(),
    ];
    $request->listInventoryEntriesRequest->instanceId = 'eum';
    $request->listInventoryEntriesRequest->maxResults = 260628;
    $request->listInventoryEntriesRequest->nextToken = 'rem';
    $request->listInventoryEntriesRequest->typeName = 'at';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = ListInventoryEntriesXAmzTargetEnum::AMAZON_SSM_LIST_INVENTORY_ENTRIES;

    $response = $sdk->sdk->listInventoryEntries($request);

    if ($response->listInventoryEntriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOpsItemEvents

Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOpsItemEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOpsItemEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemEventFilter;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemEventFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemEventFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOpsItemEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOpsItemEventsRequest();
    $request->listOpsItemEventsRequest = new ListOpsItemEventsRequest();
    $request->listOpsItemEventsRequest->filters = [
        new OpsItemEventFilter(),
        new OpsItemEventFilter(),
        new OpsItemEventFilter(),
    ];
    $request->listOpsItemEventsRequest->maxResults = 589695;
    $request->listOpsItemEventsRequest->nextToken = 'earum';
    $request->maxResults = 'soluta';
    $request->nextToken = 'hic';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = ListOpsItemEventsXAmzTargetEnum::AMAZON_SSM_LIST_OPS_ITEM_EVENTS;

    $response = $sdk->sdk->listOpsItemEvents($request);

    if ($response->listOpsItemEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOpsItemRelatedItems

Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOpsItemRelatedItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOpsItemRelatedItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemRelatedItemsFilter;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemRelatedItemsFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemRelatedItemsFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOpsItemRelatedItemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOpsItemRelatedItemsRequest();
    $request->listOpsItemRelatedItemsRequest = new ListOpsItemRelatedItemsRequest();
    $request->listOpsItemRelatedItemsRequest->filters = [
        new OpsItemRelatedItemsFilter(),
        new OpsItemRelatedItemsFilter(),
        new OpsItemRelatedItemsFilter(),
        new OpsItemRelatedItemsFilter(),
    ];
    $request->listOpsItemRelatedItemsRequest->maxResults = 380335;
    $request->listOpsItemRelatedItemsRequest->nextToken = 'dolorem';
    $request->listOpsItemRelatedItemsRequest->opsItemId = 'fugit';
    $request->maxResults = 'cumque';
    $request->nextToken = 'fuga';
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = ListOpsItemRelatedItemsXAmzTargetEnum::AMAZON_SSM_LIST_OPS_ITEM_RELATED_ITEMS;

    $response = $sdk->sdk->listOpsItemRelatedItems($request);

    if ($response->listOpsItemRelatedItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOpsMetadata

Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpsMetadataFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListOpsMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOpsMetadataRequest();
    $request->listOpsMetadataRequest = new ListOpsMetadataRequest();
    $request->listOpsMetadataRequest->filters = [
        new OpsMetadataFilter(),
        new OpsMetadataFilter(),
    ];
    $request->listOpsMetadataRequest->maxResults = 619183;
    $request->listOpsMetadataRequest->nextToken = 'occaecati';
    $request->maxResults = 'suscipit';
    $request->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = ListOpsMetadataXAmzTargetEnum::AMAZON_SSM_LIST_OPS_METADATA;

    $response = $sdk->sdk->listOpsMetadata($request);

    if ($response->listOpsMetadataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceComplianceSummaries

Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceComplianceSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceComplianceSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceQueryOperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceComplianceSummariesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceComplianceSummariesRequest();
    $request->listResourceComplianceSummariesRequest = new ListResourceComplianceSummariesRequest();
    $request->listResourceComplianceSummariesRequest->filters = [
        new ComplianceStringFilter(),
        new ComplianceStringFilter(),
    ];
    $request->listResourceComplianceSummariesRequest->maxResults = 473190;
    $request->listResourceComplianceSummariesRequest->nextToken = 'dicta';
    $request->maxResults = 'iusto';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = ListResourceComplianceSummariesXAmzTargetEnum::AMAZON_SSM_LIST_RESOURCE_COMPLIANCE_SUMMARIES;

    $response = $sdk->sdk->listResourceComplianceSummaries($request);

    if ($response->listResourceComplianceSummariesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceDataSync

<p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceDataSyncXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceDataSyncRequest();
    $request->listResourceDataSyncRequest = new ListResourceDataSyncRequest();
    $request->listResourceDataSyncRequest->maxResults = 117315;
    $request->listResourceDataSyncRequest->nextToken = 'odio';
    $request->listResourceDataSyncRequest->syncType = 'tempora';
    $request->maxResults = 'esse';
    $request->nextToken = 'ex';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = ListResourceDataSyncXAmzTargetEnum::AMAZON_SSM_LIST_RESOURCE_DATA_SYNC;

    $response = $sdk->sdk->listResourceDataSync($request);

    if ($response->listResourceDataSyncResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Returns a list of the tags assigned to the specified resource.</p> <p>For information about the ID format for each supported resource type, see <a>AddTagsToResource</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeForTaggingEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceId = 'expedita';
    $request->listTagsForResourceRequest->resourceType = ResourceTypeForTaggingEnum::PARAMETER;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AMAZON_SSM_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyDocumentPermission

Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyDocumentPermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyDocumentPermissionRequest();
    $request->modifyDocumentPermissionRequest = new ModifyDocumentPermissionRequest();
    $request->modifyDocumentPermissionRequest->accountIdsToAdd = [
        'ab',
        'error',
        'possimus',
    ];
    $request->modifyDocumentPermissionRequest->accountIdsToRemove = [
        'mollitia',
        'laborum',
        'libero',
        'ad',
    ];
    $request->modifyDocumentPermissionRequest->name = 'Bill Brown';
    $request->modifyDocumentPermissionRequest->permissionType = DocumentPermissionTypeEnum::SHARE;
    $request->modifyDocumentPermissionRequest->sharedDocumentVersion = 'quo';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = ModifyDocumentPermissionXAmzTargetEnum::AMAZON_SSM_MODIFY_DOCUMENT_PERMISSION;

    $response = $sdk->sdk->modifyDocumentPermission($request);

    if ($response->modifyDocumentPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putComplianceItems

<p>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutComplianceItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutComplianceItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceExecutionSummary;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceItemEntry;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceUploadTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutComplianceItemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutComplianceItemsRequest();
    $request->putComplianceItemsRequest = new PutComplianceItemsRequest();
    $request->putComplianceItemsRequest->complianceType = 'aliquid';
    $request->putComplianceItemsRequest->executionSummary = new ComplianceExecutionSummary();
    $request->putComplianceItemsRequest->executionSummary->executionId = 'beatae';
    $request->putComplianceItemsRequest->executionSummary->executionTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-15T09:28:53.005Z');
    $request->putComplianceItemsRequest->executionSummary->executionType = 'veritatis';
    $request->putComplianceItemsRequest->itemContentHash = 'rerum';
    $request->putComplianceItemsRequest->items = [
        new ComplianceItemEntry(),
        new ComplianceItemEntry(),
        new ComplianceItemEntry(),
    ];
    $request->putComplianceItemsRequest->resourceId = 'culpa';
    $request->putComplianceItemsRequest->resourceType = 'voluptatem';
    $request->putComplianceItemsRequest->uploadType = ComplianceUploadTypeEnum::PARTIAL;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = PutComplianceItemsXAmzTargetEnum::AMAZON_SSM_PUT_COMPLIANCE_ITEMS;

    $response = $sdk->sdk->putComplianceItems($request);

    if ($response->putComplianceItemsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putInventory

Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventoryItem;
use \OpenAPI\OpenAPI\Models\Operations\PutInventoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutInventoryRequest();
    $request->putInventoryRequest = new PutInventoryRequest();
    $request->putInventoryRequest->instanceId = 'deleniti';
    $request->putInventoryRequest->items = [
        new InventoryItem(),
        new InventoryItem(),
        new InventoryItem(),
        new InventoryItem(),
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'ratione';
    $request->xAmzTarget = PutInventoryXAmzTargetEnum::AMAZON_SSM_PUT_INVENTORY;

    $response = $sdk->sdk->putInventory($request);

    if ($response->putInventoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putParameter

Add a parameter to the system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutParameterRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutParameterRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutParameterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutParameterRequest();
    $request->putParameterRequest = new PutParameterRequest();
    $request->putParameterRequest->allowedPattern = 'ullam';
    $request->putParameterRequest->dataType = 'perferendis';
    $request->putParameterRequest->description = 'illum';
    $request->putParameterRequest->keyId = 'totam';
    $request->putParameterRequest->name = 'Taylor Reichel';
    $request->putParameterRequest->overwrite = false;
    $request->putParameterRequest->policies = 'dolor';
    $request->putParameterRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->putParameterRequest->tier = ParameterTierEnum::STANDARD;
    $request->putParameterRequest->type = ParameterTypeEnum::STRING_LIST;
    $request->putParameterRequest->value = 'veritatis';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = PutParameterXAmzTargetEnum::AMAZON_SSM_PUT_PARAMETER;

    $response = $sdk->sdk->putParameter($request);

    if ($response->putParameterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->policy = 'ab';
    $request->putResourcePolicyRequest->policyHash = 'laudantium';
    $request->putResourcePolicyRequest->policyId = 'quae';
    $request->putResourcePolicyRequest->resourceArn = 'dolor';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::AMAZON_SSM_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerDefaultPatchBaseline

<p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDefaultPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDefaultPatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDefaultPatchBaselineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDefaultPatchBaselineRequest();
    $request->registerDefaultPatchBaselineRequest = new RegisterDefaultPatchBaselineRequest();
    $request->registerDefaultPatchBaselineRequest->baselineId = 'officiis';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = RegisterDefaultPatchBaselineXAmzTargetEnum::AMAZON_SSM_REGISTER_DEFAULT_PATCH_BASELINE;

    $response = $sdk->sdk->registerDefaultPatchBaseline($request);

    if ($response->registerDefaultPatchBaselineResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerPatchBaselineForPatchGroup

Registers a patch baseline for a patch group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterPatchBaselineForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterPatchBaselineForPatchGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterPatchBaselineForPatchGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterPatchBaselineForPatchGroupRequest();
    $request->registerPatchBaselineForPatchGroupRequest = new RegisterPatchBaselineForPatchGroupRequest();
    $request->registerPatchBaselineForPatchGroupRequest->baselineId = 'vel';
    $request->registerPatchBaselineForPatchGroupRequest->patchGroup = 'voluptatum';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = RegisterPatchBaselineForPatchGroupXAmzTargetEnum::AMAZON_SSM_REGISTER_PATCH_BASELINE_FOR_PATCH_GROUP;

    $response = $sdk->sdk->registerPatchBaselineForPatchGroup($request);

    if ($response->registerPatchBaselineForPatchGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerTargetWithMaintenanceWindow

Registers a target with a maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTargetWithMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterTargetWithMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTargetWithMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterTargetWithMaintenanceWindowRequest();
    $request->registerTargetWithMaintenanceWindowRequest = new RegisterTargetWithMaintenanceWindowRequest();
    $request->registerTargetWithMaintenanceWindowRequest->clientToken = 'recusandae';
    $request->registerTargetWithMaintenanceWindowRequest->description = 'consequuntur';
    $request->registerTargetWithMaintenanceWindowRequest->name = 'Mrs. June Tremblay';
    $request->registerTargetWithMaintenanceWindowRequest->ownerInformation = 'vero';
    $request->registerTargetWithMaintenanceWindowRequest->resourceType = MaintenanceWindowResourceTypeEnum::RESOURCE_GROUP;
    $request->registerTargetWithMaintenanceWindowRequest->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->registerTargetWithMaintenanceWindowRequest->windowId = 'sequi';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = RegisterTargetWithMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_REGISTER_TARGET_WITH_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->registerTargetWithMaintenanceWindow($request);

    if ($response->registerTargetWithMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerTaskWithMaintenanceWindow

Adds a new task to a maintenance window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTaskWithMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterTaskWithMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowTaskCutoffBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoggingInfo;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowTaskInvocationParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowAutomationParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowLambdaParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowRunCommandParameters;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentHashTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowStepFunctionsParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowTaskParameterValueExpression;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterTaskWithMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterTaskWithMaintenanceWindowRequest();
    $request->registerTaskWithMaintenanceWindowRequest = new RegisterTaskWithMaintenanceWindowRequest();
    $request->registerTaskWithMaintenanceWindowRequest->alarmConfiguration = new AlarmConfiguration();
    $request->registerTaskWithMaintenanceWindowRequest->alarmConfiguration->alarms = [
        new Alarm(),
        new Alarm(),
        new Alarm(),
    ];
    $request->registerTaskWithMaintenanceWindowRequest->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->registerTaskWithMaintenanceWindowRequest->clientToken = 'voluptas';
    $request->registerTaskWithMaintenanceWindowRequest->cutoffBehavior = MaintenanceWindowTaskCutoffBehaviorEnum::CONTINUE_TASK;
    $request->registerTaskWithMaintenanceWindowRequest->description = 'nemo';
    $request->registerTaskWithMaintenanceWindowRequest->loggingInfo = new LoggingInfo();
    $request->registerTaskWithMaintenanceWindowRequest->loggingInfo->s3BucketName = 'quos';
    $request->registerTaskWithMaintenanceWindowRequest->loggingInfo->s3KeyPrefix = 'eius';
    $request->registerTaskWithMaintenanceWindowRequest->loggingInfo->s3Region = 'aspernatur';
    $request->registerTaskWithMaintenanceWindowRequest->maxConcurrency = 'ducimus';
    $request->registerTaskWithMaintenanceWindowRequest->maxErrors = 'nesciunt';
    $request->registerTaskWithMaintenanceWindowRequest->name = 'Ms. Armando Gottlieb';
    $request->registerTaskWithMaintenanceWindowRequest->priority = 117380;
    $request->registerTaskWithMaintenanceWindowRequest->serviceRoleArn = 'nisi';
    $request->registerTaskWithMaintenanceWindowRequest->targets = [
        new Target(),
    ];
    $request->registerTaskWithMaintenanceWindowRequest->taskArn = 'consectetur';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters = new MaintenanceWindowTaskInvocationParameters();
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->automation = new MaintenanceWindowAutomationParameters();
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->automation->documentVersion = 'aperiam';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->automation->parameters = [
        'reiciendis' => [
            'alias',
            'omnis',
            'eos',
        ],
        'occaecati' => [
            'magni',
            'inventore',
            'fuga',
        ],
        'accusamus' => [
            'distinctio',
            'omnis',
            'delectus',
            'minima',
        ],
    ];
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->lambda = new MaintenanceWindowLambdaParameters();
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->lambda->clientContext = 'praesentium';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->lambda->payload = 'maxime';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->lambda->qualifier = 'magnam';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand = new MaintenanceWindowRunCommandParameters();
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->cloudWatchOutputConfig = new CloudWatchOutputConfig();
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->cloudWatchOutputConfig->cloudWatchLogGroupName = 'temporibus';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->cloudWatchOutputConfig->cloudWatchOutputEnabled = false;
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->comment = 'quos';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->documentHash = 'commodi';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->documentHashType = DocumentHashTypeEnum::SHA1;
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->documentVersion = 'commodi';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->notificationConfig = new NotificationConfig();
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->notificationConfig->notificationArn = 'totam';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->notificationConfig->notificationEvents = [
        NotificationEventEnum::IN_PROGRESS,
        NotificationEventEnum::CANCELLED,
        NotificationEventEnum::FAILED,
        NotificationEventEnum::ALL,
    ];
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->notificationConfig->notificationType = NotificationTypeEnum::COMMAND;
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->outputS3BucketName = 'vel';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->outputS3KeyPrefix = 'alias';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->parameters = [
        'non' => [
            'enim',
            'sint',
            'nulla',
            'deserunt',
        ],
    ];
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->serviceRoleArn = 'esse';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->runCommand->timeoutSeconds = 364463;
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->stepFunctions = new MaintenanceWindowStepFunctionsParameters();
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->stepFunctions->input = 'reprehenderit';
    $request->registerTaskWithMaintenanceWindowRequest->taskInvocationParameters->stepFunctions->name = 'Alvin Marquardt';
    $request->registerTaskWithMaintenanceWindowRequest->taskParameters = [
        'necessitatibus' => new MaintenanceWindowTaskParameterValueExpression(),
        'asperiores' => new MaintenanceWindowTaskParameterValueExpression(),
        'ex' => new MaintenanceWindowTaskParameterValueExpression(),
        'voluptas' => new MaintenanceWindowTaskParameterValueExpression(),
    ];
    $request->registerTaskWithMaintenanceWindowRequest->taskType = MaintenanceWindowTaskTypeEnum::LAMBDA;
    $request->registerTaskWithMaintenanceWindowRequest->windowId = 'delectus';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = RegisterTaskWithMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_REGISTER_TASK_WITH_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->registerTaskWithMaintenanceWindow($request);

    if ($response->registerTaskWithMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTagsFromResource

Removes tag keys from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeForTaggingEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsFromResourceRequest();
    $request->removeTagsFromResourceRequest = new RemoveTagsFromResourceRequest();
    $request->removeTagsFromResourceRequest->resourceId = 'ipsum';
    $request->removeTagsFromResourceRequest->resourceType = ResourceTypeForTaggingEnum::OPS_METADATA;
    $request->removeTagsFromResourceRequest->tagKeys = [
        'soluta',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = RemoveTagsFromResourceXAmzTargetEnum::AMAZON_SSM_REMOVE_TAGS_FROM_RESOURCE;

    $response = $sdk->sdk->removeTagsFromResource($request);

    if ($response->removeTagsFromResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetServiceSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResetServiceSettingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetServiceSettingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetServiceSettingRequest();
    $request->resetServiceSettingRequest = new ResetServiceSettingRequest();
    $request->resetServiceSettingRequest->settingId = 'neque';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = ResetServiceSettingXAmzTargetEnum::AMAZON_SSM_RESET_SERVICE_SETTING;

    $response = $sdk->sdk->resetServiceSetting($request);

    if ($response->resetServiceSettingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeSession

<p>Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResumeSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResumeSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeSessionRequest();
    $request->resumeSessionRequest = new ResumeSessionRequest();
    $request->resumeSessionRequest->sessionId = 'magnam';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = ResumeSessionXAmzTargetEnum::AMAZON_SSM_RESUME_SESSION;

    $response = $sdk->sdk->resumeSession($request);

    if ($response->resumeSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendAutomationSignal

Sends a signal to an Automation execution to change the current behavior or status of the execution. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendAutomationSignalRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendAutomationSignalRequest;
use \OpenAPI\OpenAPI\Models\Shared\SignalTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendAutomationSignalXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendAutomationSignalRequest();
    $request->sendAutomationSignalRequest = new SendAutomationSignalRequest();
    $request->sendAutomationSignalRequest->automationExecutionId = 'porro';
    $request->sendAutomationSignalRequest->payload = [
        'velit' => [
            'accusantium',
        ],
        'vel' => [
            'beatae',
            'vero',
        ],
    ];
    $request->sendAutomationSignalRequest->signalType = SignalTypeEnum::START_STEP;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = SendAutomationSignalXAmzTargetEnum::AMAZON_SSM_SEND_AUTOMATION_SIGNAL;

    $response = $sdk->sdk->sendAutomationSignal($request);

    if ($response->sendAutomationSignalResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendCommand

Runs commands on one or more managed nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentHashTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\SendCommandXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendCommandRequest();
    $request->sendCommandRequest = new SendCommandRequest();
    $request->sendCommandRequest->alarmConfiguration = new AlarmConfiguration();
    $request->sendCommandRequest->alarmConfiguration->alarms = [
        new Alarm(),
        new Alarm(),
        new Alarm(),
        new Alarm(),
    ];
    $request->sendCommandRequest->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->sendCommandRequest->cloudWatchOutputConfig = new CloudWatchOutputConfig();
    $request->sendCommandRequest->cloudWatchOutputConfig->cloudWatchLogGroupName = 'iste';
    $request->sendCommandRequest->cloudWatchOutputConfig->cloudWatchOutputEnabled = false;
    $request->sendCommandRequest->comment = 'itaque';
    $request->sendCommandRequest->documentHash = 'alias';
    $request->sendCommandRequest->documentHashType = DocumentHashTypeEnum::SHA256;
    $request->sendCommandRequest->documentName = 'itaque';
    $request->sendCommandRequest->documentVersion = 'velit';
    $request->sendCommandRequest->instanceIds = [
        'non',
        'dolor',
        'iusto',
    ];
    $request->sendCommandRequest->maxConcurrency = 'sit';
    $request->sendCommandRequest->maxErrors = 'doloremque';
    $request->sendCommandRequest->notificationConfig = new NotificationConfig();
    $request->sendCommandRequest->notificationConfig->notificationArn = 'consequatur';
    $request->sendCommandRequest->notificationConfig->notificationEvents = [
        NotificationEventEnum::FAILED,
        NotificationEventEnum::SUCCESS,
        NotificationEventEnum::CANCELLED,
    ];
    $request->sendCommandRequest->notificationConfig->notificationType = NotificationTypeEnum::COMMAND;
    $request->sendCommandRequest->outputS3BucketName = 'facilis';
    $request->sendCommandRequest->outputS3KeyPrefix = 'placeat';
    $request->sendCommandRequest->outputS3Region = 'perspiciatis';
    $request->sendCommandRequest->parameters = [
        'deleniti' => [
            'voluptate',
            'ullam',
            'unde',
            'necessitatibus',
        ],
        'animi' => [
            'ipsam',
            'corporis',
            'est',
            'error',
        ],
        'esse' => [
            'veritatis',
            'vero',
        ],
    ];
    $request->sendCommandRequest->serviceRoleArn = 'consectetur';
    $request->sendCommandRequest->targets = [
        new Target(),
    ];
    $request->sendCommandRequest->timeoutSeconds = 81371;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = SendCommandXAmzTargetEnum::AMAZON_SSM_SEND_COMMAND;

    $response = $sdk->sdk->sendCommand($request);

    if ($response->sendCommandResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAssociationsOnce

Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAssociationsOnceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartAssociationsOnceRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAssociationsOnceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAssociationsOnceRequest();
    $request->startAssociationsOnceRequest = new StartAssociationsOnceRequest();
    $request->startAssociationsOnceRequest->associationIds = [
        'rem',
        'dolorum',
        'odio',
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = StartAssociationsOnceXAmzTargetEnum::AMAZON_SSM_START_ASSOCIATIONS_ONCE;

    $response = $sdk->sdk->startAssociationsOnce($request);

    if ($response->startAssociationsOnceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAutomationExecution

Initiates execution of an Automation runbook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAutomationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartAutomationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TargetLocation;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\StartAutomationExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAutomationExecutionRequest();
    $request->startAutomationExecutionRequest = new StartAutomationExecutionRequest();
    $request->startAutomationExecutionRequest->alarmConfiguration = new AlarmConfiguration();
    $request->startAutomationExecutionRequest->alarmConfiguration->alarms = [
        new Alarm(),
    ];
    $request->startAutomationExecutionRequest->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->startAutomationExecutionRequest->clientToken = 'exercitationem';
    $request->startAutomationExecutionRequest->documentName = 'itaque';
    $request->startAutomationExecutionRequest->documentVersion = 'et';
    $request->startAutomationExecutionRequest->maxConcurrency = 'ipsum';
    $request->startAutomationExecutionRequest->maxErrors = 'unde';
    $request->startAutomationExecutionRequest->mode = ExecutionModeEnum::INTERACTIVE;
    $request->startAutomationExecutionRequest->parameters = [
        'maxime' => [
            'quia',
        ],
        'nostrum' => [
            'libero',
            'dicta',
            'id',
        ],
        'libero' => [
            'officia',
            'quos',
            'placeat',
            'sit',
        ],
    ];
    $request->startAutomationExecutionRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->startAutomationExecutionRequest->targetLocations = [
        new TargetLocation(),
    ];
    $request->startAutomationExecutionRequest->targetMaps = [
        [
            'aperiam' => [
                'dolore',
                'eligendi',
                'distinctio',
            ],
        ],
        [
            'autem' => [
                'dolores',
                'assumenda',
            ],
        ],
        [
            'est' => [
                'corrupti',
                'molestiae',
                'provident',
                'accusamus',
            ],
        ],
        [
            'tempore' => [
                'ea',
                'autem',
                'ipsam',
            ],
            'rerum' => [
                'corporis',
                'officiis',
                'voluptatibus',
            ],
            'cum' => [
                'alias',
                'quia',
                'quidem',
                'fuga',
            ],
            'repudiandae' => [
                'expedita',
            ],
        ],
    ];
    $request->startAutomationExecutionRequest->targetParameterName = 'officiis';
    $request->startAutomationExecutionRequest->targets = [
        new Target(),
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = StartAutomationExecutionXAmzTargetEnum::AMAZON_SSM_START_AUTOMATION_EXECUTION;

    $response = $sdk->sdk->startAutomationExecution($request);

    if ($response->startAutomationExecutionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startChangeRequestExecution

Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartChangeRequestExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartChangeRequestExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Runbook;
use \OpenAPI\OpenAPI\Models\Shared\TargetLocation;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\StartChangeRequestExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartChangeRequestExecutionRequest();
    $request->startChangeRequestExecutionRequest = new StartChangeRequestExecutionRequest();
    $request->startChangeRequestExecutionRequest->autoApprove = false;
    $request->startChangeRequestExecutionRequest->changeDetails = 'earum';
    $request->startChangeRequestExecutionRequest->changeRequestName = 'adipisci';
    $request->startChangeRequestExecutionRequest->clientToken = 'recusandae';
    $request->startChangeRequestExecutionRequest->documentName = 'similique';
    $request->startChangeRequestExecutionRequest->documentVersion = 'ut';
    $request->startChangeRequestExecutionRequest->parameters = [
        'quis' => [
            'unde',
        ],
        'molestiae' => [
            'cupiditate',
            'fugit',
            'numquam',
            'numquam',
        ],
        'nesciunt' => [
            'officia',
            'dignissimos',
            'optio',
            'necessitatibus',
        ],
    ];
    $request->startChangeRequestExecutionRequest->runbooks = [
        new Runbook(),
        new Runbook(),
    ];
    $request->startChangeRequestExecutionRequest->scheduledEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-17T06:03:26.436Z');
    $request->startChangeRequestExecutionRequest->scheduledTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-29T05:11:03.916Z');
    $request->startChangeRequestExecutionRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = StartChangeRequestExecutionXAmzTargetEnum::AMAZON_SSM_START_CHANGE_REQUEST_EXECUTION;

    $response = $sdk->sdk->startChangeRequestExecution($request);

    if ($response->startChangeRequestExecutionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSession

<p>Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSessionRequest();
    $request->startSessionRequest = new StartSessionRequest();
    $request->startSessionRequest->documentName = 'corporis';
    $request->startSessionRequest->parameters = [
        'voluptates' => [
            'tempore',
            'aperiam',
            'libero',
            'ratione',
        ],
        'labore' => [
            'occaecati',
            'voluptas',
            'quo',
        ],
    ];
    $request->startSessionRequest->reason = 'velit';
    $request->startSessionRequest->target = 'minus';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = StartSessionXAmzTargetEnum::AMAZON_SSM_START_SESSION;

    $response = $sdk->sdk->startSession($request);

    if ($response->startSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopAutomationExecution

Stop an Automation that is currently running.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopAutomationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopAutomationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StopAutomationExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopAutomationExecutionRequest();
    $request->stopAutomationExecutionRequest = new StopAutomationExecutionRequest();
    $request->stopAutomationExecutionRequest->automationExecutionId = 'odit';
    $request->stopAutomationExecutionRequest->type = StopTypeEnum::CANCEL;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = StopAutomationExecutionXAmzTargetEnum::AMAZON_SSM_STOP_AUTOMATION_EXECUTION;

    $response = $sdk->sdk->stopAutomationExecution($request);

    if ($response->stopAutomationExecutionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateSession

Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminateSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\TerminateSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateSessionRequest();
    $request->terminateSessionRequest = new TerminateSessionRequest();
    $request->terminateSessionRequest->sessionId = 'ducimus';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = TerminateSessionXAmzTargetEnum::AMAZON_SSM_TERMINATE_SESSION;

    $response = $sdk->sdk->terminateSession($request);

    if ($response->terminateSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlabelParameterVersion

Remove a label or labels from a parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnlabelParameterVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnlabelParameterVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnlabelParameterVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlabelParameterVersionRequest();
    $request->unlabelParameterVersionRequest = new UnlabelParameterVersionRequest();
    $request->unlabelParameterVersionRequest->labels = [
        'similique',
        'optio',
        'ex',
        'quaerat',
    ];
    $request->unlabelParameterVersionRequest->name = 'Cecelia Schroeder';
    $request->unlabelParameterVersionRequest->parameterVersion = 463344;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = UnlabelParameterVersionXAmzTargetEnum::AMAZON_SSM_UNLABEL_PARAMETER_VERSION;

    $response = $sdk->sdk->unlabelParameterVersion($request);

    if ($response->unlabelParameterVersionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssociation

<p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call <code>UpdateAssociation</code>, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the <code>Name</code> parameter. Before calling this API action, we recommend that you call the <a>DescribeAssociation</a> API operation and make a note of all optional parameters required for your <code>UpdateAssociation</code> call.</p> <p>In order to call this API operation, a user, group, or role must be granted permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association during the next schedule run.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\AssociationComplianceSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceAssociationOutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3OutputLocation;
use \OpenAPI\OpenAPI\Models\Shared\AssociationSyncComplianceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetLocation;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssociationRequest();
    $request->updateAssociationRequest = new UpdateAssociationRequest();
    $request->updateAssociationRequest->alarmConfiguration = new AlarmConfiguration();
    $request->updateAssociationRequest->alarmConfiguration->alarms = [
        new Alarm(),
        new Alarm(),
        new Alarm(),
    ];
    $request->updateAssociationRequest->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->updateAssociationRequest->applyOnlyAtCronInterval = false;
    $request->updateAssociationRequest->associationId = 'dicta';
    $request->updateAssociationRequest->associationName = 'earum';
    $request->updateAssociationRequest->associationVersion = 'veniam';
    $request->updateAssociationRequest->automationTargetParameterName = 'animi';
    $request->updateAssociationRequest->calendarNames = [
        'nam',
    ];
    $request->updateAssociationRequest->complianceSeverity = AssociationComplianceSeverityEnum::CRITICAL;
    $request->updateAssociationRequest->documentVersion = 'consequuntur';
    $request->updateAssociationRequest->maxConcurrency = 'necessitatibus';
    $request->updateAssociationRequest->maxErrors = 'nobis';
    $request->updateAssociationRequest->name = 'Mr. Dora Wuckert';
    $request->updateAssociationRequest->outputLocation = new InstanceAssociationOutputLocation();
    $request->updateAssociationRequest->outputLocation->s3Location = new S3OutputLocation();
    $request->updateAssociationRequest->outputLocation->s3Location->outputS3BucketName = 'pariatur';
    $request->updateAssociationRequest->outputLocation->s3Location->outputS3KeyPrefix = 'libero';
    $request->updateAssociationRequest->outputLocation->s3Location->outputS3Region = 'excepturi';
    $request->updateAssociationRequest->parameters = [
        'nemo' => [
            'nostrum',
            'doloribus',
        ],
        'eligendi' => [
            'enim',
            'hic',
            'animi',
        ],
        'quas' => [
            'molestias',
            'odio',
            'eaque',
        ],
    ];
    $request->updateAssociationRequest->scheduleExpression = 'saepe';
    $request->updateAssociationRequest->scheduleOffset = 104078;
    $request->updateAssociationRequest->syncCompliance = AssociationSyncComplianceEnum::MANUAL;
    $request->updateAssociationRequest->targetLocations = [
        new TargetLocation(),
        new TargetLocation(),
        new TargetLocation(),
    ];
    $request->updateAssociationRequest->targetMaps = [
        [
            'libero' => [
                'doloremque',
            ],
            'delectus' => [
                'cum',
                'ipsum',
                'adipisci',
                'saepe',
            ],
            'deserunt' => [
                'quis',
            ],
        ],
        [
            'libero' => [
                'cupiditate',
            ],
            'molestiae' => [
                'possimus',
                'non',
                'magnam',
                'itaque',
            ],
        ],
        [
            'asperiores' => [
                'consequuntur',
                'facere',
            ],
        ],
        [
            'odit' => [
                'amet',
                'exercitationem',
                'ab',
                'velit',
            ],
            'facilis' => [
                'nisi',
                'voluptatibus',
                'quaerat',
            ],
            'blanditiis' => [
                'nisi',
                'quis',
                'nisi',
            ],
        ],
    ];
    $request->updateAssociationRequest->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = UpdateAssociationXAmzTargetEnum::AMAZON_SSM_UPDATE_ASSOCIATION;

    $response = $sdk->sdk->updateAssociation($request);

    if ($response->updateAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssociationStatus

<p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.</p> <p> <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the <code>InstanceId</code> legacy parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssociationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAssociationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociationStatus;
use \OpenAPI\OpenAPI\Models\Shared\AssociationStatusNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssociationStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssociationStatusRequest();
    $request->updateAssociationStatusRequest = new UpdateAssociationStatusRequest();
    $request->updateAssociationStatusRequest->associationStatus = new AssociationStatus();
    $request->updateAssociationStatusRequest->associationStatus->additionalInfo = 'consequuntur';
    $request->updateAssociationStatusRequest->associationStatus->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-16T12:42:02.892Z');
    $request->updateAssociationStatusRequest->associationStatus->message = 'rerum';
    $request->updateAssociationStatusRequest->associationStatus->name = AssociationStatusNameEnum::PENDING;
    $request->updateAssociationStatusRequest->instanceId = 'reprehenderit';
    $request->updateAssociationStatusRequest->name = 'Rita Kshlerin';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = UpdateAssociationStatusXAmzTargetEnum::AMAZON_SSM_UPDATE_ASSOCIATION_STATUS;

    $response = $sdk->sdk->updateAssociationStatus($request);

    if ($response->updateAssociationStatusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDocument

Updates one or more values for an SSM document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentsSource;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentsSourceKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDocumentRequest();
    $request->updateDocumentRequest = new UpdateDocumentRequest();
    $request->updateDocumentRequest->attachments = [
        new AttachmentsSource(),
        new AttachmentsSource(),
        new AttachmentsSource(),
    ];
    $request->updateDocumentRequest->content = 'porro';
    $request->updateDocumentRequest->displayName = 'vitae';
    $request->updateDocumentRequest->documentFormat = DocumentFormatEnum::JSON;
    $request->updateDocumentRequest->documentVersion = 'esse';
    $request->updateDocumentRequest->name = 'Leon Collier';
    $request->updateDocumentRequest->targetType = 'iusto';
    $request->updateDocumentRequest->versionName = 'dignissimos';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'illo';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = UpdateDocumentXAmzTargetEnum::AMAZON_SSM_UPDATE_DOCUMENT;

    $response = $sdk->sdk->updateDocument($request);

    if ($response->updateDocumentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDocumentDefaultVersion

<p>Set the default version of a document. </p> <note> <p>If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the <code>apply-only-at-cron-interval</code> parameter.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentDefaultVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDocumentDefaultVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentDefaultVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDocumentDefaultVersionRequest();
    $request->updateDocumentDefaultVersionRequest = new UpdateDocumentDefaultVersionRequest();
    $request->updateDocumentDefaultVersionRequest->documentVersion = 'veniam';
    $request->updateDocumentDefaultVersionRequest->name = 'Johanna Weimann';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'illo';
    $request->xAmzTarget = UpdateDocumentDefaultVersionXAmzTargetEnum::AMAZON_SSM_UPDATE_DOCUMENT_DEFAULT_VERSION;

    $response = $sdk->sdk->updateDocumentDefaultVersion($request);

    if ($response->updateDocumentDefaultVersionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDocumentMetadata

Updates information related to approval reviews for a specific version of a change template in Change Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDocumentMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReviews;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReviewActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReviewCommentSource;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReviewCommentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDocumentMetadataRequest();
    $request->updateDocumentMetadataRequest = new UpdateDocumentMetadataRequest();
    $request->updateDocumentMetadataRequest->documentReviews = new DocumentReviews();
    $request->updateDocumentMetadataRequest->documentReviews->action = DocumentReviewActionEnum::UPDATE_REVIEW;
    $request->updateDocumentMetadataRequest->documentReviews->comment = [
        new DocumentReviewCommentSource(),
        new DocumentReviewCommentSource(),
        new DocumentReviewCommentSource(),
        new DocumentReviewCommentSource(),
    ];
    $request->updateDocumentMetadataRequest->documentVersion = 'aliquam';
    $request->updateDocumentMetadataRequest->name = 'Eduardo Larkin DDS';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = UpdateDocumentMetadataXAmzTargetEnum::AMAZON_SSM_UPDATE_DOCUMENT_METADATA;

    $response = $sdk->sdk->updateDocumentMetadata($request);

    if ($response->updateDocumentMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMaintenanceWindow

<p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMaintenanceWindowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMaintenanceWindowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMaintenanceWindowRequest();
    $request->updateMaintenanceWindowRequest = new UpdateMaintenanceWindowRequest();
    $request->updateMaintenanceWindowRequest->allowUnassociatedTargets = false;
    $request->updateMaintenanceWindowRequest->cutoff = 492361;
    $request->updateMaintenanceWindowRequest->description = 'corporis';
    $request->updateMaintenanceWindowRequest->duration = 873833;
    $request->updateMaintenanceWindowRequest->enabled = false;
    $request->updateMaintenanceWindowRequest->endDate = 'similique';
    $request->updateMaintenanceWindowRequest->name = 'Elmer Emard';
    $request->updateMaintenanceWindowRequest->replace = false;
    $request->updateMaintenanceWindowRequest->schedule = 'commodi';
    $request->updateMaintenanceWindowRequest->scheduleOffset = 12171;
    $request->updateMaintenanceWindowRequest->scheduleTimezone = 'voluptatem';
    $request->updateMaintenanceWindowRequest->startDate = 'ad';
    $request->updateMaintenanceWindowRequest->windowId = 'quae';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = UpdateMaintenanceWindowXAmzTargetEnum::AMAZON_SSM_UPDATE_MAINTENANCE_WINDOW;

    $response = $sdk->sdk->updateMaintenanceWindow($request);

    if ($response->updateMaintenanceWindowResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMaintenanceWindowTarget

<p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field isn't modified.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMaintenanceWindowTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMaintenanceWindowTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMaintenanceWindowTargetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMaintenanceWindowTargetRequest();
    $request->updateMaintenanceWindowTargetRequest = new UpdateMaintenanceWindowTargetRequest();
    $request->updateMaintenanceWindowTargetRequest->description = 'dicta';
    $request->updateMaintenanceWindowTargetRequest->name = 'Ronald Wehner';
    $request->updateMaintenanceWindowTargetRequest->ownerInformation = 'provident';
    $request->updateMaintenanceWindowTargetRequest->replace = false;
    $request->updateMaintenanceWindowTargetRequest->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->updateMaintenanceWindowTargetRequest->windowId = 'necessitatibus';
    $request->updateMaintenanceWindowTargetRequest->windowTargetId = 'provident';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->xAmzTarget = UpdateMaintenanceWindowTargetXAmzTargetEnum::AMAZON_SSM_UPDATE_MAINTENANCE_WINDOW_TARGET;

    $response = $sdk->sdk->updateMaintenanceWindowTarget($request);

    if ($response->updateMaintenanceWindowTargetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMaintenanceWindowTask

<p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p> <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p> </li> <li> <p> <code>ServiceRoleArn</code> </p> </li> <li> <p> <code>TaskInvocationParameters</code> </p> </li> <li> <p> <code>Priority</code> </p> </li> <li> <p> <code>MaxConcurrency</code> </p> </li> <li> <p> <code>MaxErrors</code> </p> </li> </ul> <note> <p>One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for this request. Optional fields that aren't specified are set to null.</p> <important> <p>When you update a maintenance window task that has options specified in <code>TaskInvocationParameters</code>, you must provide again all the <code>TaskInvocationParameters</code> values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified <code>TaskInvocationParameters</code> values for <code>Comment</code>, <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMaintenanceWindowTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMaintenanceWindowTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Alarm;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowTaskCutoffBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoggingInfo;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowTaskInvocationParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowAutomationParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowLambdaParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowRunCommandParameters;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentHashTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowStepFunctionsParameters;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowTaskParameterValueExpression;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMaintenanceWindowTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMaintenanceWindowTaskRequest();
    $request->updateMaintenanceWindowTaskRequest = new UpdateMaintenanceWindowTaskRequest();
    $request->updateMaintenanceWindowTaskRequest->alarmConfiguration = new AlarmConfiguration();
    $request->updateMaintenanceWindowTaskRequest->alarmConfiguration->alarms = [
        new Alarm(),
    ];
    $request->updateMaintenanceWindowTaskRequest->alarmConfiguration->ignorePollAlarmFailure = false;
    $request->updateMaintenanceWindowTaskRequest->cutoffBehavior = MaintenanceWindowTaskCutoffBehaviorEnum::CANCEL_TASK;
    $request->updateMaintenanceWindowTaskRequest->description = 'accusamus';
    $request->updateMaintenanceWindowTaskRequest->loggingInfo = new LoggingInfo();
    $request->updateMaintenanceWindowTaskRequest->loggingInfo->s3BucketName = 'eos';
    $request->updateMaintenanceWindowTaskRequest->loggingInfo->s3KeyPrefix = 'totam';
    $request->updateMaintenanceWindowTaskRequest->loggingInfo->s3Region = 'dicta';
    $request->updateMaintenanceWindowTaskRequest->maxConcurrency = 'voluptatem';
    $request->updateMaintenanceWindowTaskRequest->maxErrors = 'velit';
    $request->updateMaintenanceWindowTaskRequest->name = 'Ashley Wilkinson';
    $request->updateMaintenanceWindowTaskRequest->priority = 539813;
    $request->updateMaintenanceWindowTaskRequest->replace = false;
    $request->updateMaintenanceWindowTaskRequest->serviceRoleArn = 'beatae';
    $request->updateMaintenanceWindowTaskRequest->targets = [
        new Target(),
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->updateMaintenanceWindowTaskRequest->taskArn = 'labore';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters = new MaintenanceWindowTaskInvocationParameters();
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->automation = new MaintenanceWindowAutomationParameters();
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->automation->documentVersion = 'minus';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->automation->parameters = [
        'voluptatem' => [
            'rerum',
        ],
        'ea' => [
            'dignissimos',
        ],
    ];
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->lambda = new MaintenanceWindowLambdaParameters();
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->lambda->clientContext = 'repellat';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->lambda->payload = 'velit';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->lambda->qualifier = 'porro';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand = new MaintenanceWindowRunCommandParameters();
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->cloudWatchOutputConfig = new CloudWatchOutputConfig();
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->cloudWatchOutputConfig->cloudWatchLogGroupName = 'provident';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->cloudWatchOutputConfig->cloudWatchOutputEnabled = false;
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->comment = 'consectetur';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->documentHash = 'eligendi';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->documentHashType = DocumentHashTypeEnum::SHA256;
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->documentVersion = 'consectetur';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->notificationConfig = new NotificationConfig();
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->notificationConfig->notificationArn = 'soluta';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->notificationConfig->notificationEvents = [
        NotificationEventEnum::FAILED,
        NotificationEventEnum::TIMED_OUT,
        NotificationEventEnum::IN_PROGRESS,
    ];
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->notificationConfig->notificationType = NotificationTypeEnum::INVOCATION;
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->outputS3BucketName = 'aspernatur';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->outputS3KeyPrefix = 'quo';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->parameters = [
        'illum' => [
            'dignissimos',
            'vero',
            'qui',
        ],
        'consectetur' => [
            'explicabo',
            'explicabo',
            'exercitationem',
            'nihil',
        ],
        'non' => [
            'illo',
        ],
        'hic' => [
            'delectus',
            'non',
            'distinctio',
        ],
    ];
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->serviceRoleArn = 'in';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->runCommand->timeoutSeconds = 349993;
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->stepFunctions = new MaintenanceWindowStepFunctionsParameters();
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->stepFunctions->input = 'labore';
    $request->updateMaintenanceWindowTaskRequest->taskInvocationParameters->stepFunctions->name = 'Casey Gleason PhD';
    $request->updateMaintenanceWindowTaskRequest->taskParameters = [
        'aperiam' => new MaintenanceWindowTaskParameterValueExpression(),
        'odit' => new MaintenanceWindowTaskParameterValueExpression(),
        'deleniti' => new MaintenanceWindowTaskParameterValueExpression(),
    ];
    $request->updateMaintenanceWindowTaskRequest->windowId = 'enim';
    $request->updateMaintenanceWindowTaskRequest->windowTaskId = 'voluptate';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = UpdateMaintenanceWindowTaskXAmzTargetEnum::AMAZON_SSM_UPDATE_MAINTENANCE_WINDOW_TASK;

    $response = $sdk->sdk->updateMaintenanceWindowTask($request);

    if ($response->updateMaintenanceWindowTaskResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateManagedInstanceRole

Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateManagedInstanceRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateManagedInstanceRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateManagedInstanceRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateManagedInstanceRoleRequest();
    $request->updateManagedInstanceRoleRequest = new UpdateManagedInstanceRoleRequest();
    $request->updateManagedInstanceRoleRequest->iamRole = 'nesciunt';
    $request->updateManagedInstanceRoleRequest->instanceId = 'mollitia';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = UpdateManagedInstanceRoleXAmzTargetEnum::AMAZON_SSM_UPDATE_MANAGED_INSTANCE_ROLE;

    $response = $sdk->sdk->updateManagedInstanceRole($request);

    if ($response->updateManagedInstanceRoleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOpsItem

<p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOpsItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateOpsItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemNotification;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemDataValue;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RelatedOpsItem;
use \OpenAPI\OpenAPI\Models\Shared\OpsItemStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOpsItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOpsItemRequest();
    $request->updateOpsItemRequest = new UpdateOpsItemRequest();
    $request->updateOpsItemRequest->actualEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-26T22:32:30.778Z');
    $request->updateOpsItemRequest->actualStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T05:53:12.433Z');
    $request->updateOpsItemRequest->category = 'odio';
    $request->updateOpsItemRequest->description = 'commodi';
    $request->updateOpsItemRequest->notifications = [
        new OpsItemNotification(),
        new OpsItemNotification(),
    ];
    $request->updateOpsItemRequest->operationalData = [
        'possimus' => new OpsItemDataValue(),
        'voluptate' => new OpsItemDataValue(),
        'consectetur' => new OpsItemDataValue(),
    ];
    $request->updateOpsItemRequest->operationalDataToDelete = [
        'quaerat',
    ];
    $request->updateOpsItemRequest->opsItemArn = 'itaque';
    $request->updateOpsItemRequest->opsItemId = 'minus';
    $request->updateOpsItemRequest->plannedEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T23:20:42.137Z');
    $request->updateOpsItemRequest->plannedStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-11T07:28:15.655Z');
    $request->updateOpsItemRequest->priority = 91728;
    $request->updateOpsItemRequest->relatedOpsItems = [
        new RelatedOpsItem(),
        new RelatedOpsItem(),
        new RelatedOpsItem(),
    ];
    $request->updateOpsItemRequest->severity = 'amet';
    $request->updateOpsItemRequest->status = OpsItemStatusEnum::FAILED;
    $request->updateOpsItemRequest->title = 'Miss';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = UpdateOpsItemXAmzTargetEnum::AMAZON_SSM_UPDATE_OPS_ITEM;

    $response = $sdk->sdk->updateOpsItem($request);

    if ($response->updateOpsItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOpsMetadata

Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateOpsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetadataValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOpsMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOpsMetadataRequest();
    $request->updateOpsMetadataRequest = new UpdateOpsMetadataRequest();
    $request->updateOpsMetadataRequest->keysToDelete = [
        'eaque',
    ];
    $request->updateOpsMetadataRequest->metadataToUpdate = [
        'delectus' => new MetadataValue(),
        'mollitia' => new MetadataValue(),
        'nulla' => new MetadataValue(),
        'officia' => new MetadataValue(),
    ];
    $request->updateOpsMetadataRequest->opsMetadataArn = 'sed';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UpdateOpsMetadataXAmzTargetEnum::AMAZON_SSM_UPDATE_OPS_METADATA;

    $response = $sdk->sdk->updateOpsMetadata($request);

    if ($response->updateOpsMetadataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePatchBaseline

<p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePatchBaselineRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchRuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\PatchRule;
use \OpenAPI\OpenAPI\Models\Shared\PatchComplianceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilterGroup;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilter;
use \OpenAPI\OpenAPI\Models\Shared\PatchFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatchSource;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePatchBaselineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePatchBaselineRequest();
    $request->updatePatchBaselineRequest = new UpdatePatchBaselineRequest();
    $request->updatePatchBaselineRequest->approvalRules = new PatchRuleGroup();
    $request->updatePatchBaselineRequest->approvalRules->patchRules = [
        new PatchRule(),
    ];
    $request->updatePatchBaselineRequest->approvedPatches = [
        'harum',
        'explicabo',
        'beatae',
        'aliquid',
    ];
    $request->updatePatchBaselineRequest->approvedPatchesComplianceLevel = PatchComplianceLevelEnum::HIGH;
    $request->updatePatchBaselineRequest->approvedPatchesEnableNonSecurity = false;
    $request->updatePatchBaselineRequest->baselineId = 'optio';
    $request->updatePatchBaselineRequest->description = 'voluptatibus';
    $request->updatePatchBaselineRequest->globalFilters = new PatchFilterGroup();
    $request->updatePatchBaselineRequest->globalFilters->patchFilters = [
        new PatchFilter(),
        new PatchFilter(),
        new PatchFilter(),
    ];
    $request->updatePatchBaselineRequest->name = 'Randolph Lebsack';
    $request->updatePatchBaselineRequest->rejectedPatches = [
        'impedit',
        'ducimus',
    ];
    $request->updatePatchBaselineRequest->rejectedPatchesAction = PatchActionEnum::ALLOW_AS_DEPENDENCY;
    $request->updatePatchBaselineRequest->replace = false;
    $request->updatePatchBaselineRequest->sources = [
        new PatchSource(),
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = UpdatePatchBaselineXAmzTargetEnum::AMAZON_SSM_UPDATE_PATCH_BASELINE;

    $response = $sdk->sdk->updatePatchBaseline($request);

    if ($response->updatePatchBaselineResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourceDataSync

<p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't edit that sync later and choose the <code>Include all accounts from my Organizations configuration</code> option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API operation only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResourceDataSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncSource;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncAwsOrganizationsSource;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataSyncOrganizationalUnit;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceDataSyncXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceDataSyncRequest();
    $request->updateResourceDataSyncRequest = new UpdateResourceDataSyncRequest();
    $request->updateResourceDataSyncRequest->syncName = 'nisi';
    $request->updateResourceDataSyncRequest->syncSource = new ResourceDataSyncSource();
    $request->updateResourceDataSyncRequest->syncSource->awsOrganizationsSource = new ResourceDataSyncAwsOrganizationsSource();
    $request->updateResourceDataSyncRequest->syncSource->awsOrganizationsSource->organizationSourceType = 'rerum';
    $request->updateResourceDataSyncRequest->syncSource->awsOrganizationsSource->organizationalUnits = [
        new ResourceDataSyncOrganizationalUnit(),
        new ResourceDataSyncOrganizationalUnit(),
        new ResourceDataSyncOrganizationalUnit(),
        new ResourceDataSyncOrganizationalUnit(),
    ];
    $request->updateResourceDataSyncRequest->syncSource->enableAllOpsDataSources = false;
    $request->updateResourceDataSyncRequest->syncSource->includeFutureRegions = false;
    $request->updateResourceDataSyncRequest->syncSource->sourceRegions = [
        'non',
        'rem',
        'quia',
        'ullam',
    ];
    $request->updateResourceDataSyncRequest->syncSource->sourceType = 'quisquam';
    $request->updateResourceDataSyncRequest->syncType = 'dicta';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = UpdateResourceDataSyncXAmzTargetEnum::AMAZON_SSM_UPDATE_RESOURCE_DATA_SYNC;

    $response = $sdk->sdk->updateResourceDataSync($request);

    if ($response->updateResourceDataSyncResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceSetting

<p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Update the service setting for the account. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceSettingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceSettingRequest();
    $request->updateServiceSettingRequest = new UpdateServiceSettingRequest();
    $request->updateServiceSettingRequest->settingId = 'optio';
    $request->updateServiceSettingRequest->settingValue = 'rem';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = UpdateServiceSettingXAmzTargetEnum::AMAZON_SSM_UPDATE_SERVICE_SETTING;

    $response = $sdk->sdk->updateServiceSetting($request);

    if ($response->updateServiceSettingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
