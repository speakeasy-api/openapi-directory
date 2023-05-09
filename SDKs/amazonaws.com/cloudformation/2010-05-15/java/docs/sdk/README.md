# SDK

## Overview

<fullname>CloudFormation</fullname> <p>CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments predictably and repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly reliable, highly scalable, cost-effective applications without creating or configuring the underlying Amazon Web Services infrastructure.</p> <p>With CloudFormation, you declare all your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you.</p> <p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation product page</a>.</p> <p>CloudFormation makes use of other Amazon Web Services products. If you need additional technical information about a specific Amazon Web Services product, you can find the product's technical documentation at <a href="https://docs.aws.amazon.com/"> <code>docs.aws.amazon.com</code> </a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudformation/>
### Available Operations

* [getActivateType](#getactivatetype) - <p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
* [getCancelUpdateStack](#getcancelupdatestack) - <p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>
* [getContinueUpdateRollback](#getcontinueupdaterollback) - <p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>
* [getDeactivateType](#getdeactivatetype) - <p>Deactivates a public extension that was previously activated in this account and region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>
* [getDeleteChangeSet](#getdeletechangeset) - <p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>
* [getDeleteStack](#getdeletestack) - Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.
* [getDeleteStackInstances](#getdeletestackinstances) - Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.
* [getDeleteStackSet](#getdeletestackset) - Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.
* [getDeregisterType](#getderegistertype) - <p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
* [getDescribeAccountLimits](#getdescribeaccountlimits) - Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.
* [getDescribeChangeSet](#getdescribechangeset) - Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.
* [getDescribeChangeSetHooks](#getdescribechangesethooks) - Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.
* [getDescribePublisher](#getdescribepublisher) - <p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>
* [getDescribeStackDriftDetectionStatus](#getdescribestackdriftdetectionstatus) - <p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>
* [getDescribeStackEvents](#getdescribestackevents) - <p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>
* [getDescribeStackInstance](#getdescribestackinstance) - <p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>
* [getDescribeStackResource](#getdescribestackresource) - <p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>
* [getDescribeStackResourceDrifts](#getdescribestackresourcedrifts) - <p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>
* [getDescribeStackResources](#getdescribestackresources) - <p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>
* [getDescribeStackSet](#getdescribestackset) - Returns the description of the specified stack set.
* [getDescribeStackSetOperation](#getdescribestacksetoperation) - Returns the description of the specified stack set operation.
* [getDescribeStacks](#getdescribestacks) - <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>
* [getDescribeType](#getdescribetype) - <p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>
* [getDescribeTypeRegistration](#getdescribetyperegistration) - <p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed information about an extension.</p>
* [getDetectStackDrift](#getdetectstackdrift) - <p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>
* [getDetectStackResourceDrift](#getdetectstackresourcedrift) - <p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
* [getDetectStackSetDrift](#getdetectstacksetdrift) - <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>
* [getExecuteChangeSet](#getexecutechangeset) - <p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>
* [getGETStackPolicy](#getgetstackpolicy) - Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.
* [getGETTemplate](#getgettemplate) - <p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>
* [getGETTemplateSummary](#getgettemplatesummary) - <p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>
* [getImportStacksToStackSet](#getimportstackstostackset) - <p>Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.</p> <note> <p> <code>ImportStacksToStackSet</code> is only supported by self-managed permissions.</p> </note>
* [getListChangeSets](#getlistchangesets) - Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.
* [getListExports](#getlistexports) - <p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>
* [getListImports](#getlistimports) - <p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p>
* [getListStackResources](#getliststackresources) - <p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>
* [getListStackSetOperations](#getliststacksetoperations) - Returns summary information about operations performed on a stack set.
* [getListStackSets](#getliststacksets) - <p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>
* [getListStacks](#getliststacks) - Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).
* [getListTypeRegistrations](#getlisttyperegistrations) - Returns a list of registration tokens for the specified extension(s).
* [getListTypeVersions](#getlisttypeversions) - Returns summary information about the versions of an extension.
* [getListTypes](#getlisttypes) - Returns summary information about extension that have been registered with CloudFormation.
* [getPublishType](#getpublishtype) - <p>Publishes the specified extension to the CloudFormation registry as a public extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
* [getRecordHandlerProgress](#getrecordhandlerprogress) - <p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>
* [getRegisterPublisher](#getregisterpublisher) - <p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>
* [getRegisterType](#getregistertype) - <p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
* [getRollbackStack](#getrollbackstack) - <p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>
* [getSetStackPolicy](#getsetstackpolicy) - Sets a stack policy for a specified stack.
* [getSetTypeConfiguration](#getsettypeconfiguration) - <p>Specifies the configuration data for a registered CloudFormation extension, in the given account and region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>
* [getSetTypeDefaultVersion](#getsettypedefaultversion) - Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.
* [getSignalResource](#getsignalresource) - Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.
* [getStopStackSetOperation](#getstopstacksetoperation) - Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.
* [getTestType](#gettesttype) - <p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>
* [getUpdateTerminationProtection](#getupdateterminationprotection) - <p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>
* [getValidateTemplate](#getvalidatetemplate) - Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.
* [postActivateType](#postactivatetype) - <p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
* [postBatchDescribeTypeConfigurations](#postbatchdescribetypeconfigurations) - <p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
* [postCancelUpdateStack](#postcancelupdatestack) - <p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>
* [postContinueUpdateRollback](#postcontinueupdaterollback) - <p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>
* [postCreateChangeSet](#postcreatechangeset) - <p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make changes until you execute the change set.</p> <p>To create a change set for the entire stack hierarchy, set <code>IncludeNestedStacks</code> to <code>True</code>.</p>
* [postCreateStack](#postcreatestack) - Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the <a>DescribeStacks</a>operation.
* [postCreateStackInstances](#postcreatestackinstances) - Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.
* [postCreateStackSet](#postcreatestackset) - Creates a stack set.
* [postDeactivateType](#postdeactivatetype) - <p>Deactivates a public extension that was previously activated in this account and region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>
* [postDeleteChangeSet](#postdeletechangeset) - <p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>
* [postDeleteStack](#postdeletestack) - Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.
* [postDeleteStackInstances](#postdeletestackinstances) - Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.
* [postDeleteStackSet](#postdeletestackset) - Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.
* [postDeregisterType](#postderegistertype) - <p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
* [postDescribeAccountLimits](#postdescribeaccountlimits) - Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.
* [postDescribeChangeSet](#postdescribechangeset) - Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.
* [postDescribeChangeSetHooks](#postdescribechangesethooks) - Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.
* [postDescribePublisher](#postdescribepublisher) - <p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>
* [postDescribeStackDriftDetectionStatus](#postdescribestackdriftdetectionstatus) - <p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>
* [postDescribeStackEvents](#postdescribestackevents) - <p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>
* [postDescribeStackInstance](#postdescribestackinstance) - <p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>
* [postDescribeStackResource](#postdescribestackresource) - <p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>
* [postDescribeStackResourceDrifts](#postdescribestackresourcedrifts) - <p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>
* [postDescribeStackResources](#postdescribestackresources) - <p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>
* [postDescribeStackSet](#postdescribestackset) - Returns the description of the specified stack set.
* [postDescribeStackSetOperation](#postdescribestacksetoperation) - Returns the description of the specified stack set operation.
* [postDescribeStacks](#postdescribestacks) - <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>
* [postDescribeType](#postdescribetype) - <p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>
* [postDescribeTypeRegistration](#postdescribetyperegistration) - <p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed information about an extension.</p>
* [postDetectStackDrift](#postdetectstackdrift) - <p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>
* [postDetectStackResourceDrift](#postdetectstackresourcedrift) - <p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
* [postDetectStackSetDrift](#postdetectstacksetdrift) - <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>
* [postEstimateTemplateCost](#postestimatetemplatecost) - Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
* [postExecuteChangeSet](#postexecutechangeset) - <p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>
* [postGetStackPolicy](#postgetstackpolicy) - Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.
* [postGetTemplate](#postgettemplate) - <p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>
* [postGetTemplateSummary](#postgettemplatesummary) - <p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>
* [postImportStacksToStackSet](#postimportstackstostackset) - <p>Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.</p> <note> <p> <code>ImportStacksToStackSet</code> is only supported by self-managed permissions.</p> </note>
* [postListChangeSets](#postlistchangesets) - Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.
* [postListExports](#postlistexports) - <p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>
* [postListImports](#postlistimports) - <p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p>
* [postListStackInstances](#postliststackinstances) - Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.
* [postListStackResources](#postliststackresources) - <p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>
* [postListStackSetOperationResults](#postliststacksetoperationresults) - Returns summary information about the results of a stack set operation.
* [postListStackSetOperations](#postliststacksetoperations) - Returns summary information about operations performed on a stack set.
* [postListStackSets](#postliststacksets) - <p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>
* [postListStacks](#postliststacks) - Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).
* [postListTypeRegistrations](#postlisttyperegistrations) - Returns a list of registration tokens for the specified extension(s).
* [postListTypeVersions](#postlisttypeversions) - Returns summary information about the versions of an extension.
* [postListTypes](#postlisttypes) - Returns summary information about extension that have been registered with CloudFormation.
* [postPublishType](#postpublishtype) - <p>Publishes the specified extension to the CloudFormation registry as a public extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
* [postRecordHandlerProgress](#postrecordhandlerprogress) - <p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>
* [postRegisterPublisher](#postregisterpublisher) - <p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>
* [postRegisterType](#postregistertype) - <p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
* [postRollbackStack](#postrollbackstack) - <p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>
* [postSetStackPolicy](#postsetstackpolicy) - Sets a stack policy for a specified stack.
* [postSetTypeConfiguration](#postsettypeconfiguration) - <p>Specifies the configuration data for a registered CloudFormation extension, in the given account and region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>
* [postSetTypeDefaultVersion](#postsettypedefaultversion) - Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.
* [postSignalResource](#postsignalresource) - Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.
* [postStopStackSetOperation](#poststopstacksetoperation) - Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.
* [postTestType](#posttesttype) - <p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>
* [postUpdateStack](#postupdatestack) - <p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>
* [postUpdateStackInstances](#postupdatestackinstances) - <p>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.</p> <p>You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p> <p>During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
* [postUpdateStackSet](#postupdatestackset) - <p>Updates the stack set, and associated stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>
* [postUpdateTerminationProtection](#postupdateterminationprotection) - <p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>
* [postValidateTemplate](#postvalidatetemplate) - Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.

## getActivateType

<p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETActivateTypeActionEnum;
import org.openapis.openapi.models.operations.GETActivateTypeLoggingConfig;
import org.openapis.openapi.models.operations.GETActivateTypeRequest;
import org.openapis.openapi.models.operations.GETActivateTypeResponse;
import org.openapis.openapi.models.operations.GETActivateTypeTypeEnum;
import org.openapis.openapi.models.operations.GETActivateTypeVersionBumpEnum;
import org.openapis.openapi.models.operations.GETActivateTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETActivateTypeRequest req = new GETActivateTypeRequest(GETActivateTypeActionEnum.ACTIVATE_TYPE, GETActivateTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                autoUpdate = false;
                executionRoleArn = "molestiae";
                loggingConfig = new GETActivateTypeLoggingConfig("minus", "placeat");;
                majorVersion = 528895L;
                publicTypeArn = "iusto";
                publisherId = "excepturi";
                type = GETActivateTypeTypeEnum.MODULE;
                typeName = "recusandae";
                typeNameAlias = "temporibus";
                versionBump = GETActivateTypeVersionBumpEnum.MAJOR;
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            GETActivateTypeResponse res = sdk.sdk.getActivateType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCancelUpdateStack

<p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCancelUpdateStackActionEnum;
import org.openapis.openapi.models.operations.GETCancelUpdateStackRequest;
import org.openapis.openapi.models.operations.GETCancelUpdateStackResponse;
import org.openapis.openapi.models.operations.GETCancelUpdateStackVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelUpdateStackRequest req = new GETCancelUpdateStackRequest(GETCancelUpdateStackActionEnum.CANCEL_UPDATE_STACK, "odit", GETCancelUpdateStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                clientRequestToken = "at";
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            GETCancelUpdateStackResponse res = sdk.sdk.getCancelUpdateStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinueUpdateRollback

<p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETContinueUpdateRollbackActionEnum;
import org.openapis.openapi.models.operations.GETContinueUpdateRollbackRequest;
import org.openapis.openapi.models.operations.GETContinueUpdateRollbackResponse;
import org.openapis.openapi.models.operations.GETContinueUpdateRollbackVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETContinueUpdateRollbackRequest req = new GETContinueUpdateRollbackRequest(GETContinueUpdateRollbackActionEnum.CONTINUE_UPDATE_ROLLBACK, "dolorum", GETContinueUpdateRollbackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                clientRequestToken = "dicta";
                resourcesToSkip = new String[]{{
                    add("officia"),
                    add("occaecati"),
                    add("fugit"),
                }};
                roleARN = "deleniti";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            GETContinueUpdateRollbackResponse res = sdk.sdk.getContinueUpdateRollback(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeactivateType

<p>Deactivates a public extension that was previously activated in this account and region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeactivateTypeActionEnum;
import org.openapis.openapi.models.operations.GETDeactivateTypeRequest;
import org.openapis.openapi.models.operations.GETDeactivateTypeResponse;
import org.openapis.openapi.models.operations.GETDeactivateTypeTypeEnum;
import org.openapis.openapi.models.operations.GETDeactivateTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeactivateTypeRequest req = new GETDeactivateTypeRequest(GETDeactivateTypeActionEnum.DEACTIVATE_TYPE, GETDeactivateTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                arn = "impedit";
                type = GETDeactivateTypeTypeEnum.HOOK;
                typeName = "esse";
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ad";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "sed";
            }};            

            GETDeactivateTypeResponse res = sdk.sdk.getDeactivateType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteChangeSet

<p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteChangeSetActionEnum;
import org.openapis.openapi.models.operations.GETDeleteChangeSetRequest;
import org.openapis.openapi.models.operations.GETDeleteChangeSetResponse;
import org.openapis.openapi.models.operations.GETDeleteChangeSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteChangeSetRequest req = new GETDeleteChangeSetRequest(GETDeleteChangeSetActionEnum.DELETE_CHANGE_SET, "dolor", GETDeleteChangeSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                stackName = "natus";
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            GETDeleteChangeSetResponse res = sdk.sdk.getDeleteChangeSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteStack

Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteStackActionEnum;
import org.openapis.openapi.models.operations.GETDeleteStackRequest;
import org.openapis.openapi.models.operations.GETDeleteStackResponse;
import org.openapis.openapi.models.operations.GETDeleteStackVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteStackRequest req = new GETDeleteStackRequest(GETDeleteStackActionEnum.DELETE_STACK, "saepe", GETDeleteStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                clientRequestToken = "quidem";
                retainResources = new String[]{{
                    add("ipsa"),
                }};
                roleARN = "reiciendis";
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            GETDeleteStackResponse res = sdk.sdk.getDeleteStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteStackInstances

Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteStackInstancesActionEnum;
import org.openapis.openapi.models.operations.GETDeleteStackInstancesCallAsEnum;
import org.openapis.openapi.models.operations.GETDeleteStackInstancesDeploymentTargets;
import org.openapis.openapi.models.operations.GETDeleteStackInstancesOperationPreferences;
import org.openapis.openapi.models.operations.GETDeleteStackInstancesRequest;
import org.openapis.openapi.models.operations.GETDeleteStackInstancesResponse;
import org.openapis.openapi.models.operations.GETDeleteStackInstancesVersionEnum;
import org.openapis.openapi.models.shared.AccountFilterTypeEnum;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteStackInstancesRequest req = new GETDeleteStackInstancesRequest(GETDeleteStackInstancesActionEnum.DELETE_STACK_INSTANCES,                 new String[]{{
                                add("omnis"),
                                add("nemo"),
                            }}, false, "minima", GETDeleteStackInstancesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                accounts = new String[]{{
                    add("accusantium"),
                    add("iure"),
                    add("culpa"),
                }};
                callAs = GETDeleteStackInstancesCallAsEnum.DELEGATED_ADMIN;
                deploymentTargets = new GETDeleteStackInstancesDeploymentTargets() {{
                    accountFilterType = AccountFilterTypeEnum.UNION;
                    accounts = new String[]{{
                        add("mollitia"),
                    }};
                    accountsUrl = "dolorem";
                    organizationalUnitIds = new String[]{{
                        add("consequuntur"),
                        add("repellat"),
                        add("mollitia"),
                    }};
                }};;
                operationId = "occaecati";
                operationPreferences = new GETDeleteStackInstancesOperationPreferences() {{
                    failureToleranceCount = 253291L;
                    failureTolerancePercentage = 414369L;
                    maxConcurrentCount = 466311L;
                    maxConcurrentPercentage = 474697L;
                    regionConcurrencyType = RegionConcurrencyTypeEnum.SEQUENTIAL;
                    regionOrder = new String[]{{
                        add("quia"),
                        add("quis"),
                        add("vitae"),
                    }};
                }};;
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            GETDeleteStackInstancesResponse res = sdk.sdk.getDeleteStackInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteStackSet

Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteStackSetActionEnum;
import org.openapis.openapi.models.operations.GETDeleteStackSetCallAsEnum;
import org.openapis.openapi.models.operations.GETDeleteStackSetRequest;
import org.openapis.openapi.models.operations.GETDeleteStackSetResponse;
import org.openapis.openapi.models.operations.GETDeleteStackSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteStackSetRequest req = new GETDeleteStackSetRequest(GETDeleteStackSetActionEnum.DELETE_STACK_SET, "id", GETDeleteStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETDeleteStackSetCallAsEnum.DELEGATED_ADMIN;
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETDeleteStackSetResponse res = sdk.sdk.getDeleteStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeregisterType

<p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeregisterTypeActionEnum;
import org.openapis.openapi.models.operations.GETDeregisterTypeRequest;
import org.openapis.openapi.models.operations.GETDeregisterTypeResponse;
import org.openapis.openapi.models.operations.GETDeregisterTypeTypeEnum;
import org.openapis.openapi.models.operations.GETDeregisterTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeregisterTypeRequest req = new GETDeregisterTypeRequest(GETDeregisterTypeActionEnum.DEREGISTER_TYPE, GETDeregisterTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                arn = "vero";
                type = GETDeregisterTypeTypeEnum.MODULE;
                typeName = "praesentium";
                versionId = "voluptatibus";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            GETDeregisterTypeResponse res = sdk.sdk.getDeregisterType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAccountLimits

Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsRequest;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsResponse;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAccountLimitsRequest req = new GETDescribeAccountLimitsRequest(GETDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, GETDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "maiores";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            GETDescribeAccountLimitsResponse res = sdk.sdk.getDescribeAccountLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeChangeSet

Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeChangeSetActionEnum;
import org.openapis.openapi.models.operations.GETDescribeChangeSetRequest;
import org.openapis.openapi.models.operations.GETDescribeChangeSetResponse;
import org.openapis.openapi.models.operations.GETDescribeChangeSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeChangeSetRequest req = new GETDescribeChangeSetRequest(GETDescribeChangeSetActionEnum.DESCRIBE_CHANGE_SET, "commodi", GETDescribeChangeSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "repudiandae";
                stackName = "quae";
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            GETDescribeChangeSetResponse res = sdk.sdk.getDescribeChangeSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeChangeSetHooks

Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeChangeSetHooksActionEnum;
import org.openapis.openapi.models.operations.GETDescribeChangeSetHooksRequest;
import org.openapis.openapi.models.operations.GETDescribeChangeSetHooksResponse;
import org.openapis.openapi.models.operations.GETDescribeChangeSetHooksVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeChangeSetHooksRequest req = new GETDescribeChangeSetHooksRequest(GETDescribeChangeSetHooksActionEnum.DESCRIBE_CHANGE_SET_HOOKS, "voluptates", GETDescribeChangeSetHooksVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                logicalResourceId = "quasi";
                nextToken = "repudiandae";
                stackName = "sint";
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GETDescribeChangeSetHooksResponse res = sdk.sdk.getDescribeChangeSetHooks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribePublisher

<p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribePublisherActionEnum;
import org.openapis.openapi.models.operations.GETDescribePublisherRequest;
import org.openapis.openapi.models.operations.GETDescribePublisherResponse;
import org.openapis.openapi.models.operations.GETDescribePublisherVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribePublisherRequest req = new GETDescribePublisherRequest(GETDescribePublisherActionEnum.DESCRIBE_PUBLISHER, GETDescribePublisherVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                publisherId = "deserunt";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GETDescribePublisherResponse res = sdk.sdk.getDescribePublisher(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackDriftDetectionStatus

<p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackDriftDetectionStatusActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackDriftDetectionStatusRequest;
import org.openapis.openapi.models.operations.GETDescribeStackDriftDetectionStatusResponse;
import org.openapis.openapi.models.operations.GETDescribeStackDriftDetectionStatusVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackDriftDetectionStatusRequest req = new GETDescribeStackDriftDetectionStatusRequest(GETDescribeStackDriftDetectionStatusActionEnum.DESCRIBE_STACK_DRIFT_DETECTION_STATUS, "perferendis", GETDescribeStackDriftDetectionStatusVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDescribeStackDriftDetectionStatusResponse res = sdk.sdk.getDescribeStackDriftDetectionStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackEvents

<p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackEventsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackEventsRequest;
import org.openapis.openapi.models.operations.GETDescribeStackEventsResponse;
import org.openapis.openapi.models.operations.GETDescribeStackEventsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackEventsRequest req = new GETDescribeStackEventsRequest(GETDescribeStackEventsActionEnum.DESCRIBE_STACK_EVENTS, GETDescribeStackEventsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "facilis";
                stackName = "tempore";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETDescribeStackEventsResponse res = sdk.sdk.getDescribeStackEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackInstance

<p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackInstanceActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackInstanceCallAsEnum;
import org.openapis.openapi.models.operations.GETDescribeStackInstanceRequest;
import org.openapis.openapi.models.operations.GETDescribeStackInstanceResponse;
import org.openapis.openapi.models.operations.GETDescribeStackInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackInstanceRequest req = new GETDescribeStackInstanceRequest(GETDescribeStackInstanceActionEnum.DESCRIBE_STACK_INSTANCE, "necessitatibus", "sint", "officia", GETDescribeStackInstanceVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETDescribeStackInstanceCallAsEnum.SELF;
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            GETDescribeStackInstanceResponse res = sdk.sdk.getDescribeStackInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackResource

<p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackResourceActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackResourceRequest;
import org.openapis.openapi.models.operations.GETDescribeStackResourceResponse;
import org.openapis.openapi.models.operations.GETDescribeStackResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackResourceRequest req = new GETDescribeStackResourceRequest(GETDescribeStackResourceActionEnum.DESCRIBE_STACK_RESOURCE, "dicta", "magnam", GETDescribeStackResourceVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            GETDescribeStackResourceResponse res = sdk.sdk.getDescribeStackResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackResourceDrifts

<p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackResourceDriftsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackResourceDriftsRequest;
import org.openapis.openapi.models.operations.GETDescribeStackResourceDriftsResponse;
import org.openapis.openapi.models.operations.GETDescribeStackResourceDriftsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackResourceDriftStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackResourceDriftsRequest req = new GETDescribeStackResourceDriftsRequest(GETDescribeStackResourceDriftsActionEnum.DESCRIBE_STACK_RESOURCE_DRIFTS, "enim", GETDescribeStackResourceDriftsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = 881736L;
                nextToken = "delectus";
                stackResourceDriftStatusFilters = new org.openapis.openapi.models.shared.StackResourceDriftStatusEnum[]{{
                    add(StackResourceDriftStatusEnum.DELETED),
                    add(StackResourceDriftStatusEnum.DELETED),
                    add(StackResourceDriftStatusEnum.DELETED),
                }};
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            GETDescribeStackResourceDriftsResponse res = sdk.sdk.getDescribeStackResourceDrifts(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackResources

<p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackResourcesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackResourcesRequest;
import org.openapis.openapi.models.operations.GETDescribeStackResourcesResponse;
import org.openapis.openapi.models.operations.GETDescribeStackResourcesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackResourcesRequest req = new GETDescribeStackResourcesRequest(GETDescribeStackResourcesActionEnum.DESCRIBE_STACK_RESOURCES, GETDescribeStackResourcesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                logicalResourceId = "omnis";
                physicalResourceId = "molestiae";
                stackName = "perferendis";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "distinctio";
                xAmzDate = "id";
                xAmzSecurityToken = "labore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "suscipit";
            }};            

            GETDescribeStackResourcesResponse res = sdk.sdk.getDescribeStackResources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackSet

Returns the description of the specified stack set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackSetActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackSetCallAsEnum;
import org.openapis.openapi.models.operations.GETDescribeStackSetRequest;
import org.openapis.openapi.models.operations.GETDescribeStackSetResponse;
import org.openapis.openapi.models.operations.GETDescribeStackSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackSetRequest req = new GETDescribeStackSetRequest(GETDescribeStackSetActionEnum.DESCRIBE_STACK_SET, "nobis", GETDescribeStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETDescribeStackSetCallAsEnum.SELF;
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
            }};            

            GETDescribeStackSetResponse res = sdk.sdk.getDescribeStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStackSetOperation

Returns the description of the specified stack set operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStackSetOperationActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStackSetOperationCallAsEnum;
import org.openapis.openapi.models.operations.GETDescribeStackSetOperationRequest;
import org.openapis.openapi.models.operations.GETDescribeStackSetOperationResponse;
import org.openapis.openapi.models.operations.GETDescribeStackSetOperationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStackSetOperationRequest req = new GETDescribeStackSetOperationRequest(GETDescribeStackSetOperationActionEnum.DESCRIBE_STACK_SET_OPERATION, "quos", "sint", GETDescribeStackSetOperationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETDescribeStackSetOperationCallAsEnum.SELF;
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GETDescribeStackSetOperationResponse res = sdk.sdk.getDescribeStackSetOperation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStacks

<p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStacksActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStacksRequest;
import org.openapis.openapi.models.operations.GETDescribeStacksResponse;
import org.openapis.openapi.models.operations.GETDescribeStacksVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStacksRequest req = new GETDescribeStacksRequest(GETDescribeStacksActionEnum.DESCRIBE_STACKS, GETDescribeStacksVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "nemo";
                stackName = "quasi";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            GETDescribeStacksResponse res = sdk.sdk.getDescribeStacks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeType

<p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTypeActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTypeRequest;
import org.openapis.openapi.models.operations.GETDescribeTypeResponse;
import org.openapis.openapi.models.operations.GETDescribeTypeTypeEnum;
import org.openapis.openapi.models.operations.GETDescribeTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTypeRequest req = new GETDescribeTypeRequest(GETDescribeTypeActionEnum.DESCRIBE_TYPE, GETDescribeTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                arn = "architecto";
                publicVersionNumber = "architecto";
                publisherId = "repudiandae";
                type = GETDescribeTypeTypeEnum.MODULE;
                typeName = "expedita";
                versionId = "nihil";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETDescribeTypeResponse res = sdk.sdk.getDescribeType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTypeRegistration

<p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed information about an extension.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTypeRegistrationActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTypeRegistrationRequest;
import org.openapis.openapi.models.operations.GETDescribeTypeRegistrationResponse;
import org.openapis.openapi.models.operations.GETDescribeTypeRegistrationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTypeRegistrationRequest req = new GETDescribeTypeRegistrationRequest(GETDescribeTypeRegistrationActionEnum.DESCRIBE_TYPE_REGISTRATION, "natus", GETDescribeTypeRegistrationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            GETDescribeTypeRegistrationResponse res = sdk.sdk.getDescribeTypeRegistration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetectStackDrift

<p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetectStackDriftActionEnum;
import org.openapis.openapi.models.operations.GETDetectStackDriftRequest;
import org.openapis.openapi.models.operations.GETDetectStackDriftResponse;
import org.openapis.openapi.models.operations.GETDetectStackDriftVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetectStackDriftRequest req = new GETDetectStackDriftRequest(GETDetectStackDriftActionEnum.DETECT_STACK_DRIFT, "odit", GETDetectStackDriftVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                logicalResourceIds = new String[]{{
                    add("accusantium"),
                    add("ab"),
                }};
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            GETDetectStackDriftResponse res = sdk.sdk.getDetectStackDrift(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetectStackResourceDrift

<p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetectStackResourceDriftActionEnum;
import org.openapis.openapi.models.operations.GETDetectStackResourceDriftRequest;
import org.openapis.openapi.models.operations.GETDetectStackResourceDriftResponse;
import org.openapis.openapi.models.operations.GETDetectStackResourceDriftVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetectStackResourceDriftRequest req = new GETDetectStackResourceDriftRequest(GETDetectStackResourceDriftActionEnum.DETECT_STACK_RESOURCE_DRIFT, "nemo", "voluptatibus", GETDetectStackResourceDriftVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            GETDetectStackResourceDriftResponse res = sdk.sdk.getDetectStackResourceDrift(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetectStackSetDrift

<p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetectStackSetDriftActionEnum;
import org.openapis.openapi.models.operations.GETDetectStackSetDriftCallAsEnum;
import org.openapis.openapi.models.operations.GETDetectStackSetDriftOperationPreferences;
import org.openapis.openapi.models.operations.GETDetectStackSetDriftRequest;
import org.openapis.openapi.models.operations.GETDetectStackSetDriftResponse;
import org.openapis.openapi.models.operations.GETDetectStackSetDriftVersionEnum;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetectStackSetDriftRequest req = new GETDetectStackSetDriftRequest(GETDetectStackSetDriftActionEnum.DETECT_STACK_SET_DRIFT, "nobis", GETDetectStackSetDriftVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETDetectStackSetDriftCallAsEnum.SELF;
                operationId = "quis";
                operationPreferences = new GETDetectStackSetDriftOperationPreferences() {{
                    failureToleranceCount = 521037L;
                    failureTolerancePercentage = 489549L;
                    maxConcurrentCount = 54338L;
                    maxConcurrentPercentage = 338985L;
                    regionConcurrencyType = RegionConcurrencyTypeEnum.SEQUENTIAL;
                    regionOrder = new String[]{{
                        add("perferendis"),
                    }};
                }};;
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quam";
                xAmzDate = "dolor";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "hic";
            }};            

            GETDetectStackSetDriftResponse res = sdk.sdk.getDetectStackSetDrift(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExecuteChangeSet

<p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETExecuteChangeSetActionEnum;
import org.openapis.openapi.models.operations.GETExecuteChangeSetRequest;
import org.openapis.openapi.models.operations.GETExecuteChangeSetResponse;
import org.openapis.openapi.models.operations.GETExecuteChangeSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETExecuteChangeSetRequest req = new GETExecuteChangeSetRequest(GETExecuteChangeSetActionEnum.EXECUTE_CHANGE_SET, "omnis", GETExecuteChangeSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                clientRequestToken = "facilis";
                disableRollback = false;
                stackName = "perspiciatis";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETExecuteChangeSetResponse res = sdk.sdk.getExecuteChangeSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETStackPolicy

Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETStackPolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETStackPolicyRequest;
import org.openapis.openapi.models.operations.GETGETStackPolicyResponse;
import org.openapis.openapi.models.operations.GETGETStackPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETStackPolicyRequest req = new GETGETStackPolicyRequest(GETGETStackPolicyActionEnum.GET_STACK_POLICY, "adipisci", GETGETStackPolicyVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            GETGETStackPolicyResponse res = sdk.sdk.getGETStackPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETTemplate

<p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETTemplateActionEnum;
import org.openapis.openapi.models.operations.GETGETTemplateRequest;
import org.openapis.openapi.models.operations.GETGETTemplateResponse;
import org.openapis.openapi.models.operations.GETGETTemplateTemplateStageEnum;
import org.openapis.openapi.models.operations.GETGETTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETTemplateRequest req = new GETGETTemplateRequest(GETGETTemplateActionEnum.GET_TEMPLATE, GETGETTemplateVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                changeSetName = "nobis";
                stackName = "libero";
                templateStage = GETGETTemplateTemplateStageEnum.PROCESSED;
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            GETGETTemplateResponse res = sdk.sdk.getGETTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETTemplateSummary

<p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETTemplateSummaryActionEnum;
import org.openapis.openapi.models.operations.GETGETTemplateSummaryCallAsEnum;
import org.openapis.openapi.models.operations.GETGETTemplateSummaryRequest;
import org.openapis.openapi.models.operations.GETGETTemplateSummaryResponse;
import org.openapis.openapi.models.operations.GETGETTemplateSummaryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETTemplateSummaryRequest req = new GETGETTemplateSummaryRequest(GETGETTemplateSummaryActionEnum.GET_TEMPLATE_SUMMARY, GETGETTemplateSummaryVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETGETTemplateSummaryCallAsEnum.DELEGATED_ADMIN;
                stackName = "excepturi";
                stackSetName = "cum";
                templateBody = "voluptate";
                templateURL = "dignissimos";
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            GETGETTemplateSummaryResponse res = sdk.sdk.getGETTemplateSummary(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImportStacksToStackSet

<p>Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.</p> <note> <p> <code>ImportStacksToStackSet</code> is only supported by self-managed permissions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETImportStacksToStackSetActionEnum;
import org.openapis.openapi.models.operations.GETImportStacksToStackSetCallAsEnum;
import org.openapis.openapi.models.operations.GETImportStacksToStackSetOperationPreferences;
import org.openapis.openapi.models.operations.GETImportStacksToStackSetRequest;
import org.openapis.openapi.models.operations.GETImportStacksToStackSetResponse;
import org.openapis.openapi.models.operations.GETImportStacksToStackSetVersionEnum;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETImportStacksToStackSetRequest req = new GETImportStacksToStackSetRequest(GETImportStacksToStackSetActionEnum.IMPORT_STACKS_TO_STACK_SET, "odio", GETImportStacksToStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETImportStacksToStackSetCallAsEnum.SELF;
                operationId = "accusamus";
                operationPreferences = new GETImportStacksToStackSetOperationPreferences() {{
                    failureToleranceCount = 696344L;
                    failureTolerancePercentage = 976405L;
                    maxConcurrentCount = 377752L;
                    maxConcurrentPercentage = 617658L;
                    regionConcurrencyType = RegionConcurrencyTypeEnum.SEQUENTIAL;
                    regionOrder = new String[]{{
                        add("sit"),
                        add("fugiat"),
                        add("ab"),
                    }};
                }};;
                organizationalUnitIds = new String[]{{
                    add("dolorum"),
                    add("iusto"),
                    add("voluptate"),
                }};
                stackIds = new String[]{{
                    add("deleniti"),
                    add("omnis"),
                    add("necessitatibus"),
                }};
                stackIdsUrl = "distinctio";
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            GETImportStacksToStackSetResponse res = sdk.sdk.getImportStacksToStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListChangeSets

Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListChangeSetsActionEnum;
import org.openapis.openapi.models.operations.GETListChangeSetsRequest;
import org.openapis.openapi.models.operations.GETListChangeSetsResponse;
import org.openapis.openapi.models.operations.GETListChangeSetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListChangeSetsRequest req = new GETListChangeSetsRequest(GETListChangeSetsActionEnum.LIST_CHANGE_SETS, "perferendis", GETListChangeSetsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "amet";
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "ad";
                xAmzDate = "saepe";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "provident";
            }};            

            GETListChangeSetsResponse res = sdk.sdk.getListChangeSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListExports

<p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListExportsActionEnum;
import org.openapis.openapi.models.operations.GETListExportsRequest;
import org.openapis.openapi.models.operations.GETListExportsResponse;
import org.openapis.openapi.models.operations.GETListExportsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListExportsRequest req = new GETListExportsRequest(GETListExportsActionEnum.LIST_EXPORTS, GETListExportsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "repellendus";
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "similique";
                xAmzCredential = "alias";
                xAmzDate = "at";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "vel";
            }};            

            GETListExportsResponse res = sdk.sdk.getListExports(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListImports

<p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListImportsActionEnum;
import org.openapis.openapi.models.operations.GETListImportsRequest;
import org.openapis.openapi.models.operations.GETListImportsResponse;
import org.openapis.openapi.models.operations.GETListImportsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListImportsRequest req = new GETListImportsRequest(GETListImportsActionEnum.LIST_IMPORTS, "officiis", GETListImportsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "qui";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "a";
                xAmzCredential = "esse";
                xAmzDate = "harum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quisquam";
            }};            

            GETListImportsResponse res = sdk.sdk.getListImports(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListStackResources

<p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListStackResourcesActionEnum;
import org.openapis.openapi.models.operations.GETListStackResourcesRequest;
import org.openapis.openapi.models.operations.GETListStackResourcesResponse;
import org.openapis.openapi.models.operations.GETListStackResourcesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListStackResourcesRequest req = new GETListStackResourcesRequest(GETListStackResourcesActionEnum.LIST_STACK_RESOURCES, "amet", GETListStackResourcesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "tempore";
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "enim";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "nihil";
            }};            

            GETListStackResourcesResponse res = sdk.sdk.getListStackResources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListStackSetOperations

Returns summary information about operations performed on a stack set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListStackSetOperationsActionEnum;
import org.openapis.openapi.models.operations.GETListStackSetOperationsCallAsEnum;
import org.openapis.openapi.models.operations.GETListStackSetOperationsRequest;
import org.openapis.openapi.models.operations.GETListStackSetOperationsResponse;
import org.openapis.openapi.models.operations.GETListStackSetOperationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListStackSetOperationsRequest req = new GETListStackSetOperationsRequest(GETListStackSetOperationsActionEnum.LIST_STACK_SET_OPERATIONS, "expedita", GETListStackSetOperationsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETListStackSetOperationsCallAsEnum.SELF;
                maxResults = 153694L;
                nextToken = "vel";
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            GETListStackSetOperationsResponse res = sdk.sdk.getListStackSetOperations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListStackSets

<p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListStackSetsActionEnum;
import org.openapis.openapi.models.operations.GETListStackSetsCallAsEnum;
import org.openapis.openapi.models.operations.GETListStackSetsRequest;
import org.openapis.openapi.models.operations.GETListStackSetsResponse;
import org.openapis.openapi.models.operations.GETListStackSetsStatusEnum;
import org.openapis.openapi.models.operations.GETListStackSetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListStackSetsRequest req = new GETListStackSetsRequest(GETListStackSetsActionEnum.LIST_STACK_SETS, GETListStackSetsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETListStackSetsCallAsEnum.DELEGATED_ADMIN;
                maxResults = 863856L;
                nextToken = "soluta";
                status = GETListStackSetsStatusEnum.ACTIVE;
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
            }};            

            GETListStackSetsResponse res = sdk.sdk.getListStackSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListStacks

Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListStacksActionEnum;
import org.openapis.openapi.models.operations.GETListStacksRequest;
import org.openapis.openapi.models.operations.GETListStacksResponse;
import org.openapis.openapi.models.operations.GETListStacksVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListStacksRequest req = new GETListStacksRequest(GETListStacksActionEnum.LIST_STACKS, GETListStacksVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "quam";
                stackStatusFilter = new org.openapis.openapi.models.shared.StackStatusEnum[]{{
                    add(StackStatusEnum.IMPORT_COMPLETE),
                    add(StackStatusEnum.ROLLBACK_FAILED),
                    add(StackStatusEnum.ROLLBACK_FAILED),
                }};
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            GETListStacksResponse res = sdk.sdk.getListStacks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTypeRegistrations

Returns a list of registration tokens for the specified extension(s).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTypeRegistrationsActionEnum;
import org.openapis.openapi.models.operations.GETListTypeRegistrationsRegistrationStatusFilterEnum;
import org.openapis.openapi.models.operations.GETListTypeRegistrationsRequest;
import org.openapis.openapi.models.operations.GETListTypeRegistrationsResponse;
import org.openapis.openapi.models.operations.GETListTypeRegistrationsTypeEnum;
import org.openapis.openapi.models.operations.GETListTypeRegistrationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTypeRegistrationsRequest req = new GETListTypeRegistrationsRequest(GETListTypeRegistrationsActionEnum.LIST_TYPE_REGISTRATIONS, GETListTypeRegistrationsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = 765326L;
                nextToken = "soluta";
                registrationStatusFilter = GETListTypeRegistrationsRegistrationStatusFilterEnum.FAILED;
                type = GETListTypeRegistrationsTypeEnum.RESOURCE;
                typeArn = "saepe";
                typeName = "ipsum";
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            GETListTypeRegistrationsResponse res = sdk.sdk.getListTypeRegistrations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTypeVersions

Returns summary information about the versions of an extension.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTypeVersionsActionEnum;
import org.openapis.openapi.models.operations.GETListTypeVersionsDeprecatedStatusEnum;
import org.openapis.openapi.models.operations.GETListTypeVersionsRequest;
import org.openapis.openapi.models.operations.GETListTypeVersionsResponse;
import org.openapis.openapi.models.operations.GETListTypeVersionsTypeEnum;
import org.openapis.openapi.models.operations.GETListTypeVersionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTypeVersionsRequest req = new GETListTypeVersionsRequest(GETListTypeVersionsActionEnum.LIST_TYPE_VERSIONS, GETListTypeVersionsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                arn = "dolore";
                deprecatedStatus = GETListTypeVersionsDeprecatedStatusEnum.LIVE;
                maxResults = 240829L;
                nextToken = "dolorum";
                publisherId = "architecto";
                type = GETListTypeVersionsTypeEnum.RESOURCE;
                typeName = "aut";
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "doloribus";
            }};            

            GETListTypeVersionsResponse res = sdk.sdk.getListTypeVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTypes

Returns summary information about extension that have been registered with CloudFormation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTypesActionEnum;
import org.openapis.openapi.models.operations.GETListTypesDeprecatedStatusEnum;
import org.openapis.openapi.models.operations.GETListTypesFilters;
import org.openapis.openapi.models.operations.GETListTypesProvisioningTypeEnum;
import org.openapis.openapi.models.operations.GETListTypesRequest;
import org.openapis.openapi.models.operations.GETListTypesResponse;
import org.openapis.openapi.models.operations.GETListTypesTypeEnum;
import org.openapis.openapi.models.operations.GETListTypesVersionEnum;
import org.openapis.openapi.models.operations.GETListTypesVisibilityEnum;
import org.openapis.openapi.models.shared.CategoryEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTypesRequest req = new GETListTypesRequest(GETListTypesActionEnum.LIST_TYPES, GETListTypesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                deprecatedStatus = GETListTypesDeprecatedStatusEnum.DEPRECATED;
                filters = new GETListTypesFilters() {{
                    category = CategoryEnum.THIRD_PARTY;
                    publisherId = "qui";
                    typeNamePrefix = "quae";
                }};;
                maxResults = 512393L;
                nextToken = "odio";
                provisioningType = GETListTypesProvisioningTypeEnum.IMMUTABLE;
                type = GETListTypesTypeEnum.HOOK;
                visibility = GETListTypesVisibilityEnum.PRIVATE_;
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
            }};            

            GETListTypesResponse res = sdk.sdk.getListTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublishType

<p>Publishes the specified extension to the CloudFormation registry as a public extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPublishTypeActionEnum;
import org.openapis.openapi.models.operations.GETPublishTypeRequest;
import org.openapis.openapi.models.operations.GETPublishTypeResponse;
import org.openapis.openapi.models.operations.GETPublishTypeTypeEnum;
import org.openapis.openapi.models.operations.GETPublishTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPublishTypeRequest req = new GETPublishTypeRequest(GETPublishTypeActionEnum.PUBLISH_TYPE, GETPublishTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                arn = "tenetur";
                publicVersionNumber = "dignissimos";
                type = GETPublishTypeTypeEnum.HOOK;
                typeName = "distinctio";
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            GETPublishTypeResponse res = sdk.sdk.getPublishType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecordHandlerProgress

<p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRecordHandlerProgressActionEnum;
import org.openapis.openapi.models.operations.GETRecordHandlerProgressCurrentOperationStatusEnum;
import org.openapis.openapi.models.operations.GETRecordHandlerProgressErrorCodeEnum;
import org.openapis.openapi.models.operations.GETRecordHandlerProgressOperationStatusEnum;
import org.openapis.openapi.models.operations.GETRecordHandlerProgressRequest;
import org.openapis.openapi.models.operations.GETRecordHandlerProgressResponse;
import org.openapis.openapi.models.operations.GETRecordHandlerProgressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRecordHandlerProgressRequest req = new GETRecordHandlerProgressRequest(GETRecordHandlerProgressActionEnum.RECORD_HANDLER_PROGRESS, "illum", GETRecordHandlerProgressOperationStatusEnum.PENDING, GETRecordHandlerProgressVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                clientRequestToken = "natus";
                currentOperationStatus = GETRecordHandlerProgressCurrentOperationStatusEnum.FAILED;
                errorCode = GETRecordHandlerProgressErrorCodeEnum.NOT_UPDATABLE;
                resourceModel = "voluptatibus";
                statusMessage = "exercitationem";
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "porro";
                xAmzDate = "maiores";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "eligendi";
            }};            

            GETRecordHandlerProgressResponse res = sdk.sdk.getRecordHandlerProgress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegisterPublisher

<p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRegisterPublisherActionEnum;
import org.openapis.openapi.models.operations.GETRegisterPublisherRequest;
import org.openapis.openapi.models.operations.GETRegisterPublisherResponse;
import org.openapis.openapi.models.operations.GETRegisterPublisherVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRegisterPublisherRequest req = new GETRegisterPublisherRequest(GETRegisterPublisherActionEnum.REGISTER_PUBLISHER, GETRegisterPublisherVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                acceptTermsAndConditions = false;
                connectionArn = "alias";
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "ipsam";
                xAmzDate = "ea";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "possimus";
            }};            

            GETRegisterPublisherResponse res = sdk.sdk.getRegisterPublisher(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegisterType

<p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRegisterTypeActionEnum;
import org.openapis.openapi.models.operations.GETRegisterTypeLoggingConfig;
import org.openapis.openapi.models.operations.GETRegisterTypeRequest;
import org.openapis.openapi.models.operations.GETRegisterTypeResponse;
import org.openapis.openapi.models.operations.GETRegisterTypeTypeEnum;
import org.openapis.openapi.models.operations.GETRegisterTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRegisterTypeRequest req = new GETRegisterTypeRequest(GETRegisterTypeActionEnum.REGISTER_TYPE, "ratione", "ex", GETRegisterTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                clientRequestToken = "laudantium";
                executionRoleArn = "dicta";
                loggingConfig = new GETRegisterTypeLoggingConfig("dolor", "maiores");;
                type = GETRegisterTypeTypeEnum.RESOURCE;
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            GETRegisterTypeResponse res = sdk.sdk.getRegisterType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRollbackStack

<p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRollbackStackActionEnum;
import org.openapis.openapi.models.operations.GETRollbackStackRequest;
import org.openapis.openapi.models.operations.GETRollbackStackResponse;
import org.openapis.openapi.models.operations.GETRollbackStackVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRollbackStackRequest req = new GETRollbackStackRequest(GETRollbackStackActionEnum.ROLLBACK_STACK, "ea", GETRollbackStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                clientRequestToken = "impedit";
                roleARN = "corporis";
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "inventore";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "consectetur";
            }};            

            GETRollbackStackResponse res = sdk.sdk.getRollbackStack(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetStackPolicy

Sets a stack policy for a specified stack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetStackPolicyActionEnum;
import org.openapis.openapi.models.operations.GETSetStackPolicyRequest;
import org.openapis.openapi.models.operations.GETSetStackPolicyResponse;
import org.openapis.openapi.models.operations.GETSetStackPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetStackPolicyRequest req = new GETSetStackPolicyRequest(GETSetStackPolicyActionEnum.SET_STACK_POLICY, "aspernatur", GETSetStackPolicyVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                stackPolicyBody = "minima";
                stackPolicyURL = "eaque";
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "libero";
                xAmzCredential = "aut";
                xAmzDate = "aut";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aliquam";
            }};            

            GETSetStackPolicyResponse res = sdk.sdk.getSetStackPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetTypeConfiguration

<p>Specifies the configuration data for a registered CloudFormation extension, in the given account and region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetTypeConfigurationActionEnum;
import org.openapis.openapi.models.operations.GETSetTypeConfigurationRequest;
import org.openapis.openapi.models.operations.GETSetTypeConfigurationResponse;
import org.openapis.openapi.models.operations.GETSetTypeConfigurationTypeEnum;
import org.openapis.openapi.models.operations.GETSetTypeConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetTypeConfigurationRequest req = new GETSetTypeConfigurationRequest(GETSetTypeConfigurationActionEnum.SET_TYPE_CONFIGURATION, "accusamus", GETSetTypeConfigurationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                configurationAlias = "inventore";
                type = GETSetTypeConfigurationTypeEnum.RESOURCE;
                typeArn = "et";
                typeName = "dolorum";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            GETSetTypeConfigurationResponse res = sdk.sdk.getSetTypeConfiguration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetTypeDefaultVersion

Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetTypeDefaultVersionActionEnum;
import org.openapis.openapi.models.operations.GETSetTypeDefaultVersionRequest;
import org.openapis.openapi.models.operations.GETSetTypeDefaultVersionResponse;
import org.openapis.openapi.models.operations.GETSetTypeDefaultVersionTypeEnum;
import org.openapis.openapi.models.operations.GETSetTypeDefaultVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetTypeDefaultVersionRequest req = new GETSetTypeDefaultVersionRequest(GETSetTypeDefaultVersionActionEnum.SET_TYPE_DEFAULT_VERSION, GETSetTypeDefaultVersionVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                arn = "nulla";
                type = GETSetTypeDefaultVersionTypeEnum.MODULE;
                typeName = "libero";
                versionId = "quasi";
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "explicabo";
                xAmzDate = "provident";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "magnam";
            }};            

            GETSetTypeDefaultVersionResponse res = sdk.sdk.getSetTypeDefaultVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSignalResource

Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSignalResourceActionEnum;
import org.openapis.openapi.models.operations.GETSignalResourceRequest;
import org.openapis.openapi.models.operations.GETSignalResourceResponse;
import org.openapis.openapi.models.operations.GETSignalResourceStatusEnum;
import org.openapis.openapi.models.operations.GETSignalResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSignalResourceRequest req = new GETSignalResourceRequest(GETSignalResourceActionEnum.SIGNAL_RESOURCE, "eius", "esse", GETSignalResourceStatusEnum.SUCCESS, "rem", GETSignalResourceVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "quidem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ut";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "suscipit";
            }};            

            GETSignalResourceResponse res = sdk.sdk.getSignalResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopStackSetOperation

Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStopStackSetOperationActionEnum;
import org.openapis.openapi.models.operations.GETStopStackSetOperationCallAsEnum;
import org.openapis.openapi.models.operations.GETStopStackSetOperationRequest;
import org.openapis.openapi.models.operations.GETStopStackSetOperationResponse;
import org.openapis.openapi.models.operations.GETStopStackSetOperationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopStackSetOperationRequest req = new GETStopStackSetOperationRequest(GETStopStackSetOperationActionEnum.STOP_STACK_SET_OPERATION, "eos", "praesentium", GETStopStackSetOperationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                callAs = GETStopStackSetOperationCallAsEnum.DELEGATED_ADMIN;
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "id";
                xAmzDate = "quidem";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            GETStopStackSetOperationResponse res = sdk.sdk.getStopStackSetOperation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestType

<p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTestTypeActionEnum;
import org.openapis.openapi.models.operations.GETTestTypeRequest;
import org.openapis.openapi.models.operations.GETTestTypeResponse;
import org.openapis.openapi.models.operations.GETTestTypeTypeEnum;
import org.openapis.openapi.models.operations.GETTestTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETTestTypeRequest req = new GETTestTypeRequest(GETTestTypeActionEnum.TEST_TYPE, GETTestTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                arn = "fuga";
                logDeliveryBucket = "eius";
                type = GETTestTypeTypeEnum.RESOURCE;
                typeName = "voluptas";
                versionId = "ab";
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "tempora";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "sequi";
            }};            

            GETTestTypeResponse res = sdk.sdk.getTestType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateTerminationProtection

<p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateTerminationProtectionActionEnum;
import org.openapis.openapi.models.operations.GETUpdateTerminationProtectionRequest;
import org.openapis.openapi.models.operations.GETUpdateTerminationProtectionResponse;
import org.openapis.openapi.models.operations.GETUpdateTerminationProtectionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateTerminationProtectionRequest req = new GETUpdateTerminationProtectionRequest(GETUpdateTerminationProtectionActionEnum.UPDATE_TERMINATION_PROTECTION, false, "esse", GETUpdateTerminationProtectionVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
            }};            

            GETUpdateTerminationProtectionResponse res = sdk.sdk.getUpdateTerminationProtection(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getValidateTemplate

Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETValidateTemplateActionEnum;
import org.openapis.openapi.models.operations.GETValidateTemplateRequest;
import org.openapis.openapi.models.operations.GETValidateTemplateResponse;
import org.openapis.openapi.models.operations.GETValidateTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETValidateTemplateRequest req = new GETValidateTemplateRequest(GETValidateTemplateActionEnum.VALIDATE_TEMPLATE, GETValidateTemplateVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                templateBody = "accusamus";
                templateURL = "aliquam";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETValidateTemplateResponse res = sdk.sdk.getValidateTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postActivateType

<p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTActivateTypeActionEnum;
import org.openapis.openapi.models.operations.POSTActivateTypeRequest;
import org.openapis.openapi.models.operations.POSTActivateTypeResponse;
import org.openapis.openapi.models.operations.POSTActivateTypeVersionEnum;
import org.openapis.openapi.models.shared.ActivateTypeInput;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyTypeEnum;
import org.openapis.openapi.models.shared.VersionBumpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTActivateTypeRequest req = new POSTActivateTypeRequest(POSTActivateTypeActionEnum.ACTIVATE_TYPE, POSTActivateTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "praesentium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTActivateTypeResponse res = sdk.sdk.postActivateType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchDescribeTypeConfigurations

<p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchDescribeTypeConfigurationsActionEnum;
import org.openapis.openapi.models.operations.POSTBatchDescribeTypeConfigurationsRequest;
import org.openapis.openapi.models.operations.POSTBatchDescribeTypeConfigurationsResponse;
import org.openapis.openapi.models.operations.POSTBatchDescribeTypeConfigurationsVersionEnum;
import org.openapis.openapi.models.shared.BatchDescribeTypeConfigurationsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyTypeEnum;
import org.openapis.openapi.models.shared.TypeConfigurationIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchDescribeTypeConfigurationsRequest req = new POSTBatchDescribeTypeConfigurationsRequest(POSTBatchDescribeTypeConfigurationsActionEnum.BATCH_DESCRIBE_TYPE_CONFIGURATIONS, POSTBatchDescribeTypeConfigurationsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "incidunt".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTBatchDescribeTypeConfigurationsResponse res = sdk.sdk.postBatchDescribeTypeConfigurations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCancelUpdateStack

<p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCancelUpdateStackActionEnum;
import org.openapis.openapi.models.operations.POSTCancelUpdateStackRequest;
import org.openapis.openapi.models.operations.POSTCancelUpdateStackResponse;
import org.openapis.openapi.models.operations.POSTCancelUpdateStackVersionEnum;
import org.openapis.openapi.models.shared.CancelUpdateStackInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCancelUpdateStackRequest req = new POSTCancelUpdateStackRequest(POSTCancelUpdateStackActionEnum.CANCEL_UPDATE_STACK, POSTCancelUpdateStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "atque";
                xAmzDate = "et";
                xAmzSecurityToken = "esse";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTCancelUpdateStackResponse res = sdk.sdk.postCancelUpdateStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContinueUpdateRollback

<p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTContinueUpdateRollbackActionEnum;
import org.openapis.openapi.models.operations.POSTContinueUpdateRollbackRequest;
import org.openapis.openapi.models.operations.POSTContinueUpdateRollbackResponse;
import org.openapis.openapi.models.operations.POSTContinueUpdateRollbackVersionEnum;
import org.openapis.openapi.models.shared.ContinueUpdateRollbackInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTContinueUpdateRollbackRequest req = new POSTContinueUpdateRollbackRequest(POSTContinueUpdateRollbackActionEnum.CONTINUE_UPDATE_ROLLBACK, POSTContinueUpdateRollbackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "vel";
            }};            

            POSTContinueUpdateRollbackResponse res = sdk.sdk.postContinueUpdateRollback(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateChangeSet

<p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make changes until you execute the change set.</p> <p>To create a change set for the entire stack hierarchy, set <code>IncludeNestedStacks</code> to <code>True</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateChangeSetActionEnum;
import org.openapis.openapi.models.operations.POSTCreateChangeSetRequest;
import org.openapis.openapi.models.operations.POSTCreateChangeSetResponse;
import org.openapis.openapi.models.operations.POSTCreateChangeSetVersionEnum;
import org.openapis.openapi.models.shared.CapabilityEnum;
import org.openapis.openapi.models.shared.ChangeSetTypeEnum;
import org.openapis.openapi.models.shared.CreateChangeSetInput;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.ResourceToImport;
import org.openapis.openapi.models.shared.RollbackConfiguration;
import org.openapis.openapi.models.shared.RollbackTrigger;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateChangeSetRequest req = new POSTCreateChangeSetRequest(POSTCreateChangeSetActionEnum.CREATE_CHANGE_SET, POSTCreateChangeSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "minima";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "culpa";
            }};            

            POSTCreateChangeSetResponse res = sdk.sdk.postCreateChangeSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateStack

Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the <a>DescribeStacks</a>operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateStackActionEnum;
import org.openapis.openapi.models.operations.POSTCreateStackRequest;
import org.openapis.openapi.models.operations.POSTCreateStackResponse;
import org.openapis.openapi.models.operations.POSTCreateStackVersionEnum;
import org.openapis.openapi.models.shared.CapabilityEnum;
import org.openapis.openapi.models.shared.CreateStackInput;
import org.openapis.openapi.models.shared.OnFailureEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.RollbackConfiguration;
import org.openapis.openapi.models.shared.RollbackTrigger;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateStackRequest req = new POSTCreateStackRequest(POSTCreateStackActionEnum.CREATE_STACK, POSTCreateStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTCreateStackResponse res = sdk.sdk.postCreateStack(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateStackInstances

Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateStackInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTCreateStackInstancesRequest;
import org.openapis.openapi.models.operations.POSTCreateStackInstancesResponse;
import org.openapis.openapi.models.operations.POSTCreateStackInstancesVersionEnum;
import org.openapis.openapi.models.shared.AccountFilterTypeEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.CreateStackInstancesInput;
import org.openapis.openapi.models.shared.DeploymentTargets;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetOperationPreferences;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateStackInstancesRequest req = new POSTCreateStackInstancesRequest(POSTCreateStackInstancesActionEnum.CREATE_STACK_INSTANCES, POSTCreateStackInstancesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "a";
                xAmzCredential = "nulla";
                xAmzDate = "quas";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "a";
            }};            

            POSTCreateStackInstancesResponse res = sdk.sdk.postCreateStackInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateStackSet

Creates a stack set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateStackSetActionEnum;
import org.openapis.openapi.models.operations.POSTCreateStackSetRequest;
import org.openapis.openapi.models.operations.POSTCreateStackSetResponse;
import org.openapis.openapi.models.operations.POSTCreateStackSetVersionEnum;
import org.openapis.openapi.models.shared.AutoDeployment;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.CapabilityEnum;
import org.openapis.openapi.models.shared.CreateStackSetInput;
import org.openapis.openapi.models.shared.ManagedExecution;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.PermissionModelsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateStackSetRequest req = new POSTCreateStackSetRequest(POSTCreateStackSetActionEnum.CREATE_STACK_SET, POSTCreateStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "sint".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "quia";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTCreateStackSetResponse res = sdk.sdk.postCreateStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeactivateType

<p>Deactivates a public extension that was previously activated in this account and region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeactivateTypeActionEnum;
import org.openapis.openapi.models.operations.POSTDeactivateTypeRequest;
import org.openapis.openapi.models.operations.POSTDeactivateTypeResponse;
import org.openapis.openapi.models.operations.POSTDeactivateTypeVersionEnum;
import org.openapis.openapi.models.shared.DeactivateTypeInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeactivateTypeRequest req = new POSTDeactivateTypeRequest(POSTDeactivateTypeActionEnum.DEACTIVATE_TYPE, POSTDeactivateTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "quasi".getBytes();
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "aliquid";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quae";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "vel";
            }};            

            POSTDeactivateTypeResponse res = sdk.sdk.postDeactivateType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteChangeSet

<p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteChangeSetActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteChangeSetRequest;
import org.openapis.openapi.models.operations.POSTDeleteChangeSetResponse;
import org.openapis.openapi.models.operations.POSTDeleteChangeSetVersionEnum;
import org.openapis.openapi.models.shared.DeleteChangeSetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteChangeSetRequest req = new POSTDeleteChangeSetRequest(POSTDeleteChangeSetActionEnum.DELETE_CHANGE_SET, POSTDeleteChangeSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "eius".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTDeleteChangeSetResponse res = sdk.sdk.postDeleteChangeSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteStack

Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteStackActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteStackRequest;
import org.openapis.openapi.models.operations.POSTDeleteStackResponse;
import org.openapis.openapi.models.operations.POSTDeleteStackVersionEnum;
import org.openapis.openapi.models.shared.DeleteStackInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteStackRequest req = new POSTDeleteStackRequest(POSTDeleteStackActionEnum.DELETE_STACK, POSTDeleteStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "aut";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "ex";
            }};            

            POSTDeleteStackResponse res = sdk.sdk.postDeleteStack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteStackInstances

Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteStackInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteStackInstancesRequest;
import org.openapis.openapi.models.operations.POSTDeleteStackInstancesResponse;
import org.openapis.openapi.models.operations.POSTDeleteStackInstancesVersionEnum;
import org.openapis.openapi.models.shared.AccountFilterTypeEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.DeleteStackInstancesInput;
import org.openapis.openapi.models.shared.DeploymentTargets;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetOperationPreferences;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteStackInstancesRequest req = new POSTDeleteStackInstancesRequest(POSTDeleteStackInstancesActionEnum.DELETE_STACK_INSTANCES, POSTDeleteStackInstancesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "itaque".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "omnis";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "at";
                xAmzSignedHeaders = "et";
            }};            

            POSTDeleteStackInstancesResponse res = sdk.sdk.postDeleteStackInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteStackSet

Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteStackSetActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteStackSetRequest;
import org.openapis.openapi.models.operations.POSTDeleteStackSetResponse;
import org.openapis.openapi.models.operations.POSTDeleteStackSetVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.DeleteStackSetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteStackSetRequest req = new POSTDeleteStackSetRequest(POSTDeleteStackSetActionEnum.DELETE_STACK_SET, POSTDeleteStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "consectetur";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "iste";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "accusantium";
            }};            

            POSTDeleteStackSetResponse res = sdk.sdk.postDeleteStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeregisterType

<p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeregisterTypeActionEnum;
import org.openapis.openapi.models.operations.POSTDeregisterTypeRequest;
import org.openapis.openapi.models.operations.POSTDeregisterTypeResponse;
import org.openapis.openapi.models.operations.POSTDeregisterTypeVersionEnum;
import org.openapis.openapi.models.shared.DeregisterTypeInput;
import org.openapis.openapi.models.shared.RegistryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeregisterTypeRequest req = new POSTDeregisterTypeRequest(POSTDeregisterTypeActionEnum.DEREGISTER_TYPE, POSTDeregisterTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "eum";
                xAmzCredential = "mollitia";
                xAmzDate = "ab";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "non";
                xAmzSignedHeaders = "voluptatem";
            }};            

            POSTDeregisterTypeResponse res = sdk.sdk.postDeregisterType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAccountLimits

Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsVersionEnum;
import org.openapis.openapi.models.shared.DescribeAccountLimitsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAccountLimitsRequest req = new POSTDescribeAccountLimitsRequest(POSTDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, POSTDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "occaecati";
                requestBody = "numquam".getBytes();
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "aut";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTDescribeAccountLimitsResponse res = sdk.sdk.postDescribeAccountLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeChangeSet

Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetRequest;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetResponse;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetVersionEnum;
import org.openapis.openapi.models.shared.DescribeChangeSetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeChangeSetRequest req = new POSTDescribeChangeSetRequest(POSTDescribeChangeSetActionEnum.DESCRIBE_CHANGE_SET, POSTDescribeChangeSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTDescribeChangeSetResponse res = sdk.sdk.postDescribeChangeSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeChangeSetHooks

Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetHooksActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetHooksRequest;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetHooksResponse;
import org.openapis.openapi.models.operations.POSTDescribeChangeSetHooksVersionEnum;
import org.openapis.openapi.models.shared.DescribeChangeSetHooksInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeChangeSetHooksRequest req = new POSTDescribeChangeSetHooksRequest(POSTDescribeChangeSetHooksActionEnum.DESCRIBE_CHANGE_SET_HOOKS, POSTDescribeChangeSetHooksVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "officia";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTDescribeChangeSetHooksResponse res = sdk.sdk.postDescribeChangeSetHooks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribePublisher

<p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribePublisherActionEnum;
import org.openapis.openapi.models.operations.POSTDescribePublisherRequest;
import org.openapis.openapi.models.operations.POSTDescribePublisherResponse;
import org.openapis.openapi.models.operations.POSTDescribePublisherVersionEnum;
import org.openapis.openapi.models.shared.DescribePublisherInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribePublisherRequest req = new POSTDescribePublisherRequest(POSTDescribePublisherActionEnum.DESCRIBE_PUBLISHER, POSTDescribePublisherVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "ab";
                xAmzCredential = "adipisci";
                xAmzDate = "fuga";
                xAmzSecurityToken = "id";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "velit";
            }};            

            POSTDescribePublisherResponse res = sdk.sdk.postDescribePublisher(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackDriftDetectionStatus

<p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackDriftDetectionStatusActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackDriftDetectionStatusRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackDriftDetectionStatusResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackDriftDetectionStatusVersionEnum;
import org.openapis.openapi.models.shared.DescribeStackDriftDetectionStatusInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackDriftDetectionStatusRequest req = new POSTDescribeStackDriftDetectionStatusRequest(POSTDescribeStackDriftDetectionStatusActionEnum.DESCRIBE_STACK_DRIFT_DETECTION_STATUS, POSTDescribeStackDriftDetectionStatusVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "est".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "totam";
                xAmzCredential = "fugiat";
                xAmzDate = "vel";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "vel";
            }};            

            POSTDescribeStackDriftDetectionStatusResponse res = sdk.sdk.postDescribeStackDriftDetectionStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackEvents

<p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackEventsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackEventsRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackEventsResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackEventsVersionEnum;
import org.openapis.openapi.models.shared.DescribeStackEventsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackEventsRequest req = new POSTDescribeStackEventsRequest(POSTDescribeStackEventsActionEnum.DESCRIBE_STACK_EVENTS, POSTDescribeStackEventsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "possimus";
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nemo";
            }};            

            POSTDescribeStackEventsResponse res = sdk.sdk.postDescribeStackEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackInstance

<p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackInstanceRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackInstanceResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackInstanceVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.DescribeStackInstanceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackInstanceRequest req = new POSTDescribeStackInstanceRequest(POSTDescribeStackInstanceActionEnum.DESCRIBE_STACK_INSTANCE, POSTDescribeStackInstanceVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "cum";
                xAmzCredential = "consectetur";
                xAmzDate = "in";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "facere";
            }};            

            POSTDescribeStackInstanceResponse res = sdk.sdk.postDescribeStackInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackResource

<p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceVersionEnum;
import org.openapis.openapi.models.shared.DescribeStackResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackResourceRequest req = new POSTDescribeStackResourceRequest(POSTDescribeStackResourceActionEnum.DESCRIBE_STACK_RESOURCE, POSTDescribeStackResourceVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "doloribus".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "quidem";
                xAmzDate = "saepe";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "sunt";
            }};            

            POSTDescribeStackResourceResponse res = sdk.sdk.postDescribeStackResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackResourceDrifts

<p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceDriftsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceDriftsRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceDriftsResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackResourceDriftsVersionEnum;
import org.openapis.openapi.models.shared.DescribeStackResourceDriftsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackResourceDriftStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackResourceDriftsRequest req = new POSTDescribeStackResourceDriftsRequest(POSTDescribeStackResourceDriftsActionEnum.DESCRIBE_STACK_RESOURCE_DRIFTS, POSTDescribeStackResourceDriftsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "adipisci";
                nextToken = "non";
                requestBody = "amet".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "a";
                xAmzDate = "debitis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "harum";
            }};            

            POSTDescribeStackResourceDriftsResponse res = sdk.sdk.postDescribeStackResourceDrifts(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackResources

<p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackResourcesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackResourcesRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackResourcesResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackResourcesVersionEnum;
import org.openapis.openapi.models.shared.DescribeStackResourcesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackResourcesRequest req = new POSTDescribeStackResourcesRequest(POSTDescribeStackResourcesActionEnum.DESCRIBE_STACK_RESOURCES, POSTDescribeStackResourcesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "libero";
                xAmzCredential = "vitae";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "similique";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTDescribeStackResourcesResponse res = sdk.sdk.postDescribeStackResources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackSet

Returns the description of the specified stack set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackSetActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackSetRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackSetResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackSetVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.DescribeStackSetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackSetRequest req = new POSTDescribeStackSetRequest(POSTDescribeStackSetActionEnum.DESCRIBE_STACK_SET, POSTDescribeStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nobis";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "dolores";
            }};            

            POSTDescribeStackSetResponse res = sdk.sdk.postDescribeStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStackSetOperation

Returns the description of the specified stack set operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStackSetOperationActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStackSetOperationRequest;
import org.openapis.openapi.models.operations.POSTDescribeStackSetOperationResponse;
import org.openapis.openapi.models.operations.POSTDescribeStackSetOperationVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.DescribeStackSetOperationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStackSetOperationRequest req = new POSTDescribeStackSetOperationRequest(POSTDescribeStackSetOperationActionEnum.DESCRIBE_STACK_SET_OPERATION, POSTDescribeStackSetOperationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "in".getBytes();
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "officiis";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "cum";
            }};            

            POSTDescribeStackSetOperationResponse res = sdk.sdk.postDescribeStackSetOperation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStacks

<p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStacksActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStacksRequest;
import org.openapis.openapi.models.operations.POSTDescribeStacksResponse;
import org.openapis.openapi.models.operations.POSTDescribeStacksVersionEnum;
import org.openapis.openapi.models.shared.DescribeStacksInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStacksRequest req = new POSTDescribeStacksRequest(POSTDescribeStacksActionEnum.DESCRIBE_STACKS, POSTDescribeStacksVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "quas";
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "corrupti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "totam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "exercitationem";
            }};            

            POSTDescribeStacksResponse res = sdk.sdk.postDescribeStacks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeType

<p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTypeActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTypeRequest;
import org.openapis.openapi.models.operations.POSTDescribeTypeResponse;
import org.openapis.openapi.models.operations.POSTDescribeTypeVersionEnum;
import org.openapis.openapi.models.shared.DescribeTypeInput;
import org.openapis.openapi.models.shared.RegistryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTypeRequest req = new POSTDescribeTypeRequest(POSTDescribeTypeActionEnum.DESCRIBE_TYPE, POSTDescribeTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "sit".getBytes();
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "reiciendis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "voluptate";
            }};            

            POSTDescribeTypeResponse res = sdk.sdk.postDescribeType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTypeRegistration

<p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed information about an extension.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTypeRegistrationActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTypeRegistrationRequest;
import org.openapis.openapi.models.operations.POSTDescribeTypeRegistrationResponse;
import org.openapis.openapi.models.operations.POSTDescribeTypeRegistrationVersionEnum;
import org.openapis.openapi.models.shared.DescribeTypeRegistrationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTypeRegistrationRequest req = new POSTDescribeTypeRegistrationRequest(POSTDescribeTypeRegistrationActionEnum.DESCRIBE_TYPE_REGISTRATION, POSTDescribeTypeRegistrationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "ab".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "laborum";
                xAmzDate = "sed";
                xAmzSecurityToken = "in";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTDescribeTypeRegistrationResponse res = sdk.sdk.postDescribeTypeRegistration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetectStackDrift

<p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetectStackDriftActionEnum;
import org.openapis.openapi.models.operations.POSTDetectStackDriftRequest;
import org.openapis.openapi.models.operations.POSTDetectStackDriftResponse;
import org.openapis.openapi.models.operations.POSTDetectStackDriftVersionEnum;
import org.openapis.openapi.models.shared.DetectStackDriftInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetectStackDriftRequest req = new POSTDetectStackDriftRequest(POSTDetectStackDriftActionEnum.DETECT_STACK_DRIFT, POSTDetectStackDriftVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "suscipit";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "reiciendis";
            }};            

            POSTDetectStackDriftResponse res = sdk.sdk.postDetectStackDrift(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetectStackResourceDrift

<p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetectStackResourceDriftActionEnum;
import org.openapis.openapi.models.operations.POSTDetectStackResourceDriftRequest;
import org.openapis.openapi.models.operations.POSTDetectStackResourceDriftResponse;
import org.openapis.openapi.models.operations.POSTDetectStackResourceDriftVersionEnum;
import org.openapis.openapi.models.shared.DetectStackResourceDriftInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetectStackResourceDriftRequest req = new POSTDetectStackResourceDriftRequest(POSTDetectStackResourceDriftActionEnum.DETECT_STACK_RESOURCE_DRIFT, POSTDetectStackResourceDriftVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "sed";
                xAmzDate = "provident";
                xAmzSecurityToken = "eius";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTDetectStackResourceDriftResponse res = sdk.sdk.postDetectStackResourceDrift(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetectStackSetDrift

<p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetectStackSetDriftActionEnum;
import org.openapis.openapi.models.operations.POSTDetectStackSetDriftRequest;
import org.openapis.openapi.models.operations.POSTDetectStackSetDriftResponse;
import org.openapis.openapi.models.operations.POSTDetectStackSetDriftVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.DetectStackSetDriftInput;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetOperationPreferences;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetectStackSetDriftRequest req = new POSTDetectStackSetDriftRequest(POSTDetectStackSetDriftActionEnum.DETECT_STACK_SET_DRIFT, POSTDetectStackSetDriftVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "tempora";
                xAmzDate = "tempora";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "ex";
            }};            

            POSTDetectStackSetDriftResponse res = sdk.sdk.postDetectStackSetDrift(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEstimateTemplateCost

Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEstimateTemplateCostActionEnum;
import org.openapis.openapi.models.operations.POSTEstimateTemplateCostRequest;
import org.openapis.openapi.models.operations.POSTEstimateTemplateCostResponse;
import org.openapis.openapi.models.operations.POSTEstimateTemplateCostVersionEnum;
import org.openapis.openapi.models.shared.EstimateTemplateCostInput;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEstimateTemplateCostRequest req = new POSTEstimateTemplateCostRequest(POSTEstimateTemplateCostActionEnum.ESTIMATE_TEMPLATE_COST, POSTEstimateTemplateCostVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "non".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "facilis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "debitis";
            }};            

            POSTEstimateTemplateCostResponse res = sdk.sdk.postEstimateTemplateCost(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExecuteChangeSet

<p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTExecuteChangeSetActionEnum;
import org.openapis.openapi.models.operations.POSTExecuteChangeSetRequest;
import org.openapis.openapi.models.operations.POSTExecuteChangeSetResponse;
import org.openapis.openapi.models.operations.POSTExecuteChangeSetVersionEnum;
import org.openapis.openapi.models.shared.ExecuteChangeSetInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTExecuteChangeSetRequest req = new POSTExecuteChangeSetRequest(POSTExecuteChangeSetActionEnum.EXECUTE_CHANGE_SET, POSTExecuteChangeSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "sit".getBytes();
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "error";
                xAmzCredential = "veniam";
                xAmzDate = "minima";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "nulla";
            }};            

            POSTExecuteChangeSetResponse res = sdk.sdk.postExecuteChangeSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetStackPolicy

Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetStackPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetStackPolicyRequest;
import org.openapis.openapi.models.operations.POSTGetStackPolicyResponse;
import org.openapis.openapi.models.operations.POSTGetStackPolicyVersionEnum;
import org.openapis.openapi.models.shared.GetStackPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetStackPolicyRequest req = new POSTGetStackPolicyRequest(POSTGetStackPolicyActionEnum.GET_STACK_POLICY, POSTGetStackPolicyVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "aperiam".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veniam";
                xAmzDate = "in";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTGetStackPolicyResponse res = sdk.sdk.postGetStackPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetTemplate

<p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTGetTemplateRequest;
import org.openapis.openapi.models.operations.POSTGetTemplateResponse;
import org.openapis.openapi.models.operations.POSTGetTemplateVersionEnum;
import org.openapis.openapi.models.shared.GetTemplateInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateStageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetTemplateRequest req = new POSTGetTemplateRequest(POSTGetTemplateActionEnum.GET_TEMPLATE, POSTGetTemplateVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "dolorum";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "error";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "expedita";
            }};            

            POSTGetTemplateResponse res = sdk.sdk.postGetTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetTemplateSummary

<p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetTemplateSummaryActionEnum;
import org.openapis.openapi.models.operations.POSTGetTemplateSummaryRequest;
import org.openapis.openapi.models.operations.POSTGetTemplateSummaryResponse;
import org.openapis.openapi.models.operations.POSTGetTemplateSummaryVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.GetTemplateSummaryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetTemplateSummaryRequest req = new POSTGetTemplateSummaryRequest(POSTGetTemplateSummaryActionEnum.GET_TEMPLATE_SUMMARY, POSTGetTemplateSummaryVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "officia";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "tempora";
            }};            

            POSTGetTemplateSummaryResponse res = sdk.sdk.postGetTemplateSummary(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postImportStacksToStackSet

<p>Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.</p> <note> <p> <code>ImportStacksToStackSet</code> is only supported by self-managed permissions.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTImportStacksToStackSetActionEnum;
import org.openapis.openapi.models.operations.POSTImportStacksToStackSetRequest;
import org.openapis.openapi.models.operations.POSTImportStacksToStackSetResponse;
import org.openapis.openapi.models.operations.POSTImportStacksToStackSetVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.ImportStacksToStackSetInput;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetOperationPreferences;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTImportStacksToStackSetRequest req = new POSTImportStacksToStackSetRequest(POSTImportStacksToStackSetActionEnum.IMPORT_STACKS_TO_STACK_SET, POSTImportStacksToStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "voluptatem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "consequatur";
            }};            

            POSTImportStacksToStackSetResponse res = sdk.sdk.postImportStacksToStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListChangeSets

Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListChangeSetsActionEnum;
import org.openapis.openapi.models.operations.POSTListChangeSetsRequest;
import org.openapis.openapi.models.operations.POSTListChangeSetsResponse;
import org.openapis.openapi.models.operations.POSTListChangeSetsVersionEnum;
import org.openapis.openapi.models.shared.ListChangeSetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListChangeSetsRequest req = new POSTListChangeSetsRequest(POSTListChangeSetsActionEnum.LIST_CHANGE_SETS, POSTListChangeSetsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "ipsam";
                requestBody = "sit".getBytes();
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "repudiandae";
                xAmzDate = "corporis";
                xAmzSecurityToken = "et";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "ex";
            }};            

            POSTListChangeSetsResponse res = sdk.sdk.postListChangeSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListExports

<p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListExportsActionEnum;
import org.openapis.openapi.models.operations.POSTListExportsRequest;
import org.openapis.openapi.models.operations.POSTListExportsResponse;
import org.openapis.openapi.models.operations.POSTListExportsVersionEnum;
import org.openapis.openapi.models.shared.ListExportsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListExportsRequest req = new POSTListExportsRequest(POSTListExportsActionEnum.LIST_EXPORTS, POSTListExportsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "sit";
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "error";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "dolorem";
            }};            

            POSTListExportsResponse res = sdk.sdk.postListExports(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListImports

<p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListImportsActionEnum;
import org.openapis.openapi.models.operations.POSTListImportsRequest;
import org.openapis.openapi.models.operations.POSTListImportsResponse;
import org.openapis.openapi.models.operations.POSTListImportsVersionEnum;
import org.openapis.openapi.models.shared.ListImportsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListImportsRequest req = new POSTListImportsRequest(POSTListImportsActionEnum.LIST_IMPORTS, POSTListImportsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "dicta";
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "labore";
                xAmzCredential = "quidem";
                xAmzDate = "atque";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "tenetur";
            }};            

            POSTListImportsResponse res = sdk.sdk.postListImports(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListStackInstances

Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListStackInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTListStackInstancesRequest;
import org.openapis.openapi.models.operations.POSTListStackInstancesResponse;
import org.openapis.openapi.models.operations.POSTListStackInstancesVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.ListStackInstancesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackInstanceFilter;
import org.openapis.openapi.models.shared.StackInstanceFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListStackInstancesRequest req = new POSTListStackInstancesRequest(POSTListStackInstancesActionEnum.LIST_STACK_INSTANCES, POSTListStackInstancesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "alias";
                nextToken = "amet";
                requestBody = "deserunt".getBytes();
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "unde";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "voluptates";
            }};            

            POSTListStackInstancesResponse res = sdk.sdk.postListStackInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListStackResources

<p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListStackResourcesActionEnum;
import org.openapis.openapi.models.operations.POSTListStackResourcesRequest;
import org.openapis.openapi.models.operations.POSTListStackResourcesResponse;
import org.openapis.openapi.models.operations.POSTListStackResourcesVersionEnum;
import org.openapis.openapi.models.shared.ListStackResourcesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListStackResourcesRequest req = new POSTListStackResourcesRequest(POSTListStackResourcesActionEnum.LIST_STACK_RESOURCES, POSTListStackResourcesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "est";
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "facere";
                xAmzCredential = "fuga";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "voluptatem";
            }};            

            POSTListStackResourcesResponse res = sdk.sdk.postListStackResources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListStackSetOperationResults

Returns summary information about the results of a stack set operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListStackSetOperationResultsActionEnum;
import org.openapis.openapi.models.operations.POSTListStackSetOperationResultsRequest;
import org.openapis.openapi.models.operations.POSTListStackSetOperationResultsResponse;
import org.openapis.openapi.models.operations.POSTListStackSetOperationResultsVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.ListStackSetOperationResultsInput;
import org.openapis.openapi.models.shared.OperationResultFilter;
import org.openapis.openapi.models.shared.OperationResultFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListStackSetOperationResultsRequest req = new POSTListStackSetOperationResultsRequest(POSTListStackSetOperationResultsActionEnum.LIST_STACK_SET_OPERATION_RESULTS, POSTListStackSetOperationResultsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "repudiandae";
                nextToken = "quasi";
                requestBody = "atque".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "totam";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "et";
            }};            

            POSTListStackSetOperationResultsResponse res = sdk.sdk.postListStackSetOperationResults(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListStackSetOperations

Returns summary information about operations performed on a stack set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListStackSetOperationsActionEnum;
import org.openapis.openapi.models.operations.POSTListStackSetOperationsRequest;
import org.openapis.openapi.models.operations.POSTListStackSetOperationsResponse;
import org.openapis.openapi.models.operations.POSTListStackSetOperationsVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.ListStackSetOperationsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListStackSetOperationsRequest req = new POSTListStackSetOperationsRequest(POSTListStackSetOperationsActionEnum.LIST_STACK_SET_OPERATIONS, POSTListStackSetOperationsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "amet";
                nextToken = "assumenda";
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "error";
                xAmzCredential = "officiis";
                xAmzDate = "officiis";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "minima";
            }};            

            POSTListStackSetOperationsResponse res = sdk.sdk.postListStackSetOperations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListStackSets

<p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListStackSetsActionEnum;
import org.openapis.openapi.models.operations.POSTListStackSetsRequest;
import org.openapis.openapi.models.operations.POSTListStackSetsResponse;
import org.openapis.openapi.models.operations.POSTListStackSetsVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.ListStackSetsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListStackSetsRequest req = new POSTListStackSetsRequest(POSTListStackSetsActionEnum.LIST_STACK_SETS, POSTListStackSetsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "ex";
                nextToken = "maiores";
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "error";
                xAmzCredential = "blanditiis";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "atque";
            }};            

            POSTListStackSetsResponse res = sdk.sdk.postListStackSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListStacks

Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListStacksActionEnum;
import org.openapis.openapi.models.operations.POSTListStacksRequest;
import org.openapis.openapi.models.operations.POSTListStacksResponse;
import org.openapis.openapi.models.operations.POSTListStacksVersionEnum;
import org.openapis.openapi.models.shared.ListStacksInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListStacksRequest req = new POSTListStacksRequest(POSTListStacksActionEnum.LIST_STACKS, POSTListStacksVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                nextToken = "recusandae";
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "labore";
                xAmzCredential = "reiciendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "accusantium";
            }};            

            POSTListStacksResponse res = sdk.sdk.postListStacks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTypeRegistrations

Returns a list of registration tokens for the specified extension(s).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTypeRegistrationsActionEnum;
import org.openapis.openapi.models.operations.POSTListTypeRegistrationsRequest;
import org.openapis.openapi.models.operations.POSTListTypeRegistrationsResponse;
import org.openapis.openapi.models.operations.POSTListTypeRegistrationsVersionEnum;
import org.openapis.openapi.models.shared.ListTypeRegistrationsInput;
import org.openapis.openapi.models.shared.RegistrationStatusEnum;
import org.openapis.openapi.models.shared.RegistryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTypeRegistrationsRequest req = new POSTListTypeRegistrationsRequest(POSTListTypeRegistrationsActionEnum.LIST_TYPE_REGISTRATIONS, POSTListTypeRegistrationsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "dolores";
                nextToken = "enim";
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "a";
                xAmzCredential = "molestias";
                xAmzDate = "magnam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTListTypeRegistrationsResponse res = sdk.sdk.postListTypeRegistrations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTypeVersions

Returns summary information about the versions of an extension.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTypeVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTListTypeVersionsRequest;
import org.openapis.openapi.models.operations.POSTListTypeVersionsResponse;
import org.openapis.openapi.models.operations.POSTListTypeVersionsVersionEnum;
import org.openapis.openapi.models.shared.DeprecatedStatusEnum;
import org.openapis.openapi.models.shared.ListTypeVersionsInput;
import org.openapis.openapi.models.shared.RegistryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTypeVersionsRequest req = new POSTListTypeVersionsRequest(POSTListTypeVersionsActionEnum.LIST_TYPE_VERSIONS, POSTListTypeVersionsVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "perspiciatis";
                nextToken = "in";
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "consequuntur";
                xAmzDate = "fugit";
                xAmzSecurityToken = "id";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            POSTListTypeVersionsResponse res = sdk.sdk.postListTypeVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTypes

Returns summary information about extension that have been registered with CloudFormation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTypesActionEnum;
import org.openapis.openapi.models.operations.POSTListTypesRequest;
import org.openapis.openapi.models.operations.POSTListTypesResponse;
import org.openapis.openapi.models.operations.POSTListTypesVersionEnum;
import org.openapis.openapi.models.shared.CategoryEnum;
import org.openapis.openapi.models.shared.DeprecatedStatusEnum;
import org.openapis.openapi.models.shared.ListTypesInput;
import org.openapis.openapi.models.shared.ProvisioningTypeEnum;
import org.openapis.openapi.models.shared.RegistryTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypeFilters;
import org.openapis.openapi.models.shared.VisibilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTypesRequest req = new POSTListTypesRequest(POSTListTypesActionEnum.LIST_TYPES, POSTListTypesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                maxResults = "illo";
                nextToken = "corporis";
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "non";
                xAmzCredential = "vero";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "iure";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "totam";
            }};            

            POSTListTypesResponse res = sdk.sdk.postListTypes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPublishType

<p>Publishes the specified extension to the CloudFormation registry as a public extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPublishTypeActionEnum;
import org.openapis.openapi.models.operations.POSTPublishTypeRequest;
import org.openapis.openapi.models.operations.POSTPublishTypeResponse;
import org.openapis.openapi.models.operations.POSTPublishTypeVersionEnum;
import org.openapis.openapi.models.shared.PublishTypeInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPublishTypeRequest req = new POSTPublishTypeRequest(POSTPublishTypeActionEnum.PUBLISH_TYPE, POSTPublishTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cum";
                xAmzDate = "iure";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "laborum";
            }};            

            POSTPublishTypeResponse res = sdk.sdk.postPublishType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRecordHandlerProgress

<p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRecordHandlerProgressActionEnum;
import org.openapis.openapi.models.operations.POSTRecordHandlerProgressRequest;
import org.openapis.openapi.models.operations.POSTRecordHandlerProgressResponse;
import org.openapis.openapi.models.operations.POSTRecordHandlerProgressVersionEnum;
import org.openapis.openapi.models.shared.HandlerErrorCodeEnum;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.RecordHandlerProgressInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRecordHandlerProgressRequest req = new POSTRecordHandlerProgressRequest(POSTRecordHandlerProgressActionEnum.RECORD_HANDLER_PROGRESS, POSTRecordHandlerProgressVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "voluptatum".getBytes();
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "ad";
                xAmzDate = "repellat";
                xAmzSecurityToken = "alias";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            POSTRecordHandlerProgressResponse res = sdk.sdk.postRecordHandlerProgress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRegisterPublisher

<p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRegisterPublisherActionEnum;
import org.openapis.openapi.models.operations.POSTRegisterPublisherRequest;
import org.openapis.openapi.models.operations.POSTRegisterPublisherResponse;
import org.openapis.openapi.models.operations.POSTRegisterPublisherVersionEnum;
import org.openapis.openapi.models.shared.RegisterPublisherInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRegisterPublisherRequest req = new POSTRegisterPublisherRequest(POSTRegisterPublisherActionEnum.REGISTER_PUBLISHER, POSTRegisterPublisherVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "alias";
                xAmzCredential = "maiores";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "id";
                xAmzSignedHeaders = "minima";
            }};            

            POSTRegisterPublisherResponse res = sdk.sdk.postRegisterPublisher(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRegisterType

<p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRegisterTypeActionEnum;
import org.openapis.openapi.models.operations.POSTRegisterTypeRequest;
import org.openapis.openapi.models.operations.POSTRegisterTypeResponse;
import org.openapis.openapi.models.operations.POSTRegisterTypeVersionEnum;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.RegisterTypeInput;
import org.openapis.openapi.models.shared.RegistryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRegisterTypeRequest req = new POSTRegisterTypeRequest(POSTRegisterTypeActionEnum.REGISTER_TYPE, POSTRegisterTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "quae";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "ex";
            }};            

            POSTRegisterTypeResponse res = sdk.sdk.postRegisterType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRollbackStack

<p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRollbackStackActionEnum;
import org.openapis.openapi.models.operations.POSTRollbackStackRequest;
import org.openapis.openapi.models.operations.POSTRollbackStackResponse;
import org.openapis.openapi.models.operations.POSTRollbackStackVersionEnum;
import org.openapis.openapi.models.shared.RollbackStackInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRollbackStackRequest req = new POSTRollbackStackRequest(POSTRollbackStackActionEnum.ROLLBACK_STACK, POSTRollbackStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "culpa".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "esse";
            }};            

            POSTRollbackStackResponse res = sdk.sdk.postRollbackStack(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetStackPolicy

Sets a stack policy for a specified stack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetStackPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTSetStackPolicyRequest;
import org.openapis.openapi.models.operations.POSTSetStackPolicyResponse;
import org.openapis.openapi.models.operations.POSTSetStackPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetStackPolicyInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetStackPolicyRequest req = new POSTSetStackPolicyRequest(POSTSetStackPolicyActionEnum.SET_STACK_POLICY, POSTSetStackPolicyVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "quis".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "provident";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "animi";
            }};            

            POSTSetStackPolicyResponse res = sdk.sdk.postSetStackPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetTypeConfiguration

<p>Specifies the configuration data for a registered CloudFormation extension, in the given account and region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetTypeConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTSetTypeConfigurationRequest;
import org.openapis.openapi.models.operations.POSTSetTypeConfigurationResponse;
import org.openapis.openapi.models.operations.POSTSetTypeConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetTypeConfigurationInput;
import org.openapis.openapi.models.shared.ThirdPartyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetTypeConfigurationRequest req = new POSTSetTypeConfigurationRequest(POSTSetTypeConfigurationActionEnum.SET_TYPE_CONFIGURATION, POSTSetTypeConfigurationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "animi";
                xAmzDate = "ex";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "repellat";
            }};            

            POSTSetTypeConfigurationResponse res = sdk.sdk.postSetTypeConfiguration(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetTypeDefaultVersion

Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetTypeDefaultVersionActionEnum;
import org.openapis.openapi.models.operations.POSTSetTypeDefaultVersionRequest;
import org.openapis.openapi.models.operations.POSTSetTypeDefaultVersionResponse;
import org.openapis.openapi.models.operations.POSTSetTypeDefaultVersionVersionEnum;
import org.openapis.openapi.models.shared.RegistryTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetTypeDefaultVersionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetTypeDefaultVersionRequest req = new POSTSetTypeDefaultVersionRequest(POSTSetTypeDefaultVersionActionEnum.SET_TYPE_DEFAULT_VERSION, POSTSetTypeDefaultVersionVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "ullam".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "nam";
                xAmzCredential = "earum";
                xAmzDate = "officia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "modi";
            }};            

            POSTSetTypeDefaultVersionResponse res = sdk.sdk.postSetTypeDefaultVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSignalResource

Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSignalResourceActionEnum;
import org.openapis.openapi.models.operations.POSTSignalResourceRequest;
import org.openapis.openapi.models.operations.POSTSignalResourceResponse;
import org.openapis.openapi.models.operations.POSTSignalResourceVersionEnum;
import org.openapis.openapi.models.shared.ResourceSignalStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSignalResourceRequest req = new POSTSignalResourceRequest(POSTSignalResourceActionEnum.SIGNAL_RESOURCE, POSTSignalResourceVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "molestias".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "cumque";
                xAmzDate = "vitae";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "quis";
            }};            

            POSTSignalResourceResponse res = sdk.sdk.postSignalResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStopStackSetOperation

Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStopStackSetOperationActionEnum;
import org.openapis.openapi.models.operations.POSTStopStackSetOperationRequest;
import org.openapis.openapi.models.operations.POSTStopStackSetOperationResponse;
import org.openapis.openapi.models.operations.POSTStopStackSetOperationVersionEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopStackSetOperationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopStackSetOperationRequest req = new POSTStopStackSetOperationRequest(POSTStopStackSetOperationActionEnum.STOP_STACK_SET_OPERATION, POSTStopStackSetOperationVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "quae";
                xAmzCredential = "perferendis";
                xAmzDate = "velit";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "eius";
            }};            

            POSTStopStackSetOperationResponse res = sdk.sdk.postStopStackSetOperation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTestType

<p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTestTypeActionEnum;
import org.openapis.openapi.models.operations.POSTTestTypeRequest;
import org.openapis.openapi.models.operations.POSTTestTypeResponse;
import org.openapis.openapi.models.operations.POSTTestTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestTypeInput;
import org.openapis.openapi.models.shared.ThirdPartyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTestTypeRequest req = new POSTTestTypeRequest(POSTTestTypeActionEnum.TEST_TYPE, POSTTestTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "at".getBytes();
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "eos";
                xAmzCredential = "sapiente";
                xAmzDate = "eum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "beatae";
            }};            

            POSTTestTypeResponse res = sdk.sdk.postTestType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateStack

<p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateStackActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateStackRequest;
import org.openapis.openapi.models.operations.POSTUpdateStackResponse;
import org.openapis.openapi.models.operations.POSTUpdateStackVersionEnum;
import org.openapis.openapi.models.shared.CapabilityEnum;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.RollbackConfiguration;
import org.openapis.openapi.models.shared.RollbackTrigger;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateStackInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateStackRequest req = new POSTUpdateStackRequest(POSTUpdateStackActionEnum.UPDATE_STACK, POSTUpdateStackVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "hic";
                xAmzDate = "illum";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            POSTUpdateStackResponse res = sdk.sdk.postUpdateStack(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateStackInstances

<p>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.</p> <p>You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p> <p>During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateStackInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateStackInstancesRequest;
import org.openapis.openapi.models.operations.POSTUpdateStackInstancesResponse;
import org.openapis.openapi.models.operations.POSTUpdateStackInstancesVersionEnum;
import org.openapis.openapi.models.shared.AccountFilterTypeEnum;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.DeploymentTargets;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetOperationPreferences;
import org.openapis.openapi.models.shared.UpdateStackInstancesInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateStackInstancesRequest req = new POSTUpdateStackInstancesRequest(POSTUpdateStackInstancesActionEnum.UPDATE_STACK_INSTANCES, POSTUpdateStackInstancesVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "porro";
                xAmzCredential = "suscipit";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTUpdateStackInstancesResponse res = sdk.sdk.postUpdateStackInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateStackSet

<p>Updates the stack set, and associated stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateStackSetActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateStackSetRequest;
import org.openapis.openapi.models.operations.POSTUpdateStackSetResponse;
import org.openapis.openapi.models.operations.POSTUpdateStackSetVersionEnum;
import org.openapis.openapi.models.shared.AccountFilterTypeEnum;
import org.openapis.openapi.models.shared.AutoDeployment;
import org.openapis.openapi.models.shared.CallAsEnum;
import org.openapis.openapi.models.shared.CapabilityEnum;
import org.openapis.openapi.models.shared.DeploymentTargets;
import org.openapis.openapi.models.shared.ManagedExecution;
import org.openapis.openapi.models.shared.Parameter;
import org.openapis.openapi.models.shared.PermissionModelsEnum;
import org.openapis.openapi.models.shared.RegionConcurrencyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackSetOperationPreferences;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateStackSetInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateStackSetRequest req = new POSTUpdateStackSetRequest(POSTUpdateStackSetActionEnum.UPDATE_STACK_SET, POSTUpdateStackSetVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "animi".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "consequatur";
                xAmzDate = "quasi";
                xAmzSecurityToken = "et";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "natus";
            }};            

            POSTUpdateStackSetResponse res = sdk.sdk.postUpdateStackSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateTerminationProtection

<p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateTerminationProtectionActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateTerminationProtectionRequest;
import org.openapis.openapi.models.operations.POSTUpdateTerminationProtectionResponse;
import org.openapis.openapi.models.operations.POSTUpdateTerminationProtectionVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTerminationProtectionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateTerminationProtectionRequest req = new POSTUpdateTerminationProtectionRequest(POSTUpdateTerminationProtectionActionEnum.UPDATE_TERMINATION_PROTECTION, POSTUpdateTerminationProtectionVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "suscipit".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "magni";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTUpdateTerminationProtectionResponse res = sdk.sdk.postUpdateTerminationProtection(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postValidateTemplate

Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTValidateTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTValidateTemplateRequest;
import org.openapis.openapi.models.operations.POSTValidateTemplateResponse;
import org.openapis.openapi.models.operations.POSTValidateTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ValidateTemplateInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTValidateTemplateRequest req = new POSTValidateTemplateRequest(POSTValidateTemplateActionEnum.VALIDATE_TEMPLATE, POSTValidateTemplateVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                requestBody = "nihil".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "iusto";
                xAmzDate = "esse";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "reiciendis";
            }};            

            POSTValidateTemplateResponse res = sdk.sdk.postValidateTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
