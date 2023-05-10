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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeLoggingConfig;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeVersionBumpEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETActivateTypeRequest();
    $request->action = GETActivateTypeActionEnum::ACTIVATE_TYPE;
    $request->autoUpdate = false;
    $request->executionRoleArn = 'tempora';
    $request->loggingConfig = new GETActivateTypeLoggingConfig();
    $request->loggingConfig->logGroupName = 'suscipit';
    $request->loggingConfig->logRoleArn = 'molestiae';
    $request->majorVersion = 791725;
    $request->publicTypeArn = 'placeat';
    $request->publisherId = 'voluptatum';
    $request->type = GETActivateTypeTypeEnum::MODULE;
    $request->typeName = 'excepturi';
    $request->typeNameAlias = 'nisi';
    $request->version = GETActivateTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->versionBump = GETActivateTypeVersionBumpEnum::MINOR;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getActivateType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCancelUpdateStack

<p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelUpdateStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelUpdateStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCancelUpdateStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCancelUpdateStackRequest();
    $request->action = GETCancelUpdateStackActionEnum::CANCEL_UPDATE_STACK;
    $request->clientRequestToken = 'repellendus';
    $request->stackName = 'sapiente';
    $request->version = GETCancelUpdateStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getCancelUpdateStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinueUpdateRollback

<p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETContinueUpdateRollbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETContinueUpdateRollbackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETContinueUpdateRollbackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETContinueUpdateRollbackRequest();
    $request->action = GETContinueUpdateRollbackActionEnum::CONTINUE_UPDATE_ROLLBACK;
    $request->clientRequestToken = 'quod';
    $request->resourcesToSkip = [
        'totam',
        'porro',
    ];
    $request->roleARN = 'dolorum';
    $request->stackName = 'dicta';
    $request->version = GETContinueUpdateRollbackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getContinueUpdateRollback($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeactivateType

<p>Deactivates a public extension that was previously activated in this account and region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeactivateTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeactivateTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeactivateTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeactivateTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeactivateTypeRequest();
    $request->action = GETDeactivateTypeActionEnum::DEACTIVATE_TYPE;
    $request->arn = 'totam';
    $request->type = GETDeactivateTypeTypeEnum::RESOURCE;
    $request->typeName = 'commodi';
    $request->version = GETDeactivateTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getDeactivateType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteChangeSet

<p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteChangeSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteChangeSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteChangeSetRequest();
    $request->action = GETDeleteChangeSetActionEnum::DELETE_CHANGE_SET;
    $request->changeSetName = 'excepturi';
    $request->stackName = 'aspernatur';
    $request->version = GETDeleteChangeSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDeleteChangeSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteStack

Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteStackRequest();
    $request->action = GETDeleteStackActionEnum::DELETE_STACK;
    $request->clientRequestToken = 'laboriosam';
    $request->retainResources = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->roleARN = 'iste';
    $request->stackName = 'iure';
    $request->version = GETDeleteStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getDeleteStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteStackInstances

Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackInstancesCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackInstancesDeploymentTargets;
use \OpenAPI\OpenAPI\Models\Shared\AccountFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackInstancesOperationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\RegionConcurrencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteStackInstancesRequest();
    $request->accounts = [
        'dolores',
        'dolorem',
        'corporis',
    ];
    $request->action = GETDeleteStackInstancesActionEnum::DELETE_STACK_INSTANCES;
    $request->callAs = GETDeleteStackInstancesCallAsEnum::SELF;
    $request->deploymentTargets = new GETDeleteStackInstancesDeploymentTargets();
    $request->deploymentTargets->accountFilterType = AccountFilterTypeEnum::UNION;
    $request->deploymentTargets->accounts = [
        'omnis',
        'nemo',
    ];
    $request->deploymentTargets->accountsUrl = 'minima';
    $request->deploymentTargets->organizationalUnitIds = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->operationId = 'doloribus';
    $request->operationPreferences = new GETDeleteStackInstancesOperationPreferences();
    $request->operationPreferences->failureToleranceCount = 958950;
    $request->operationPreferences->failureTolerancePercentage = 102044;
    $request->operationPreferences->maxConcurrentCount = 652790;
    $request->operationPreferences->maxConcurrentPercentage = 208876;
    $request->operationPreferences->regionConcurrencyType = RegionConcurrencyTypeEnum::PARALLEL;
    $request->operationPreferences->regionOrder = [
        'repellat',
    ];
    $request->regions = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->retainStacks = false;
    $request->stackSetName = 'quam';
    $request->version = GETDeleteStackInstancesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getDeleteStackInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteStackSet

Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackSetCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteStackSetRequest();
    $request->action = GETDeleteStackSetActionEnum::DELETE_STACK_SET;
    $request->callAs = GETDeleteStackSetCallAsEnum::DELEGATED_ADMIN;
    $request->stackSetName = 'enim';
    $request->version = GETDeleteStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->getDeleteStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeregisterType

<p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeregisterTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeregisterTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeregisterTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeregisterTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeregisterTypeRequest();
    $request->action = GETDeregisterTypeActionEnum::DEREGISTER_TYPE;
    $request->arn = 'aut';
    $request->type = GETDeregisterTypeTypeEnum::RESOURCE;
    $request->typeName = 'error';
    $request->version = GETDeregisterTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->versionId = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getDeregisterType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAccountLimits

Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAccountLimitsRequest();
    $request->action = GETDescribeAccountLimitsActionEnum::DESCRIBE_ACCOUNT_LIMITS;
    $request->nextToken = 'voluptatibus';
    $request->version = GETDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->getDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeChangeSet

Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeChangeSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeChangeSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeChangeSetRequest();
    $request->action = GETDescribeChangeSetActionEnum::DESCRIBE_CHANGE_SET;
    $request->changeSetName = 'ut';
    $request->nextToken = 'maiores';
    $request->stackName = 'dicta';
    $request->version = GETDescribeChangeSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->getDescribeChangeSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeChangeSetHooks

Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeChangeSetHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeChangeSetHooksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeChangeSetHooksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeChangeSetHooksRequest();
    $request->action = GETDescribeChangeSetHooksActionEnum::DESCRIBE_CHANGE_SET_HOOKS;
    $request->changeSetName = 'commodi';
    $request->logicalResourceId = 'repudiandae';
    $request->nextToken = 'quae';
    $request->stackName = 'ipsum';
    $request->version = GETDescribeChangeSetHooksVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->getDescribeChangeSetHooks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribePublisher

<p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePublisherRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePublisherActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePublisherVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribePublisherRequest();
    $request->action = GETDescribePublisherActionEnum::DESCRIBE_PUBLISHER;
    $request->publisherId = 'voluptates';
    $request->version = GETDescribePublisherVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDescribePublisher($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackDriftDetectionStatus

<p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackDriftDetectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackDriftDetectionStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackDriftDetectionStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackDriftDetectionStatusRequest();
    $request->action = GETDescribeStackDriftDetectionStatusActionEnum::DESCRIBE_STACK_DRIFT_DETECTION_STATUS;
    $request->stackDriftDetectionId = 'consequatur';
    $request->version = GETDescribeStackDriftDetectionStatusVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->getDescribeStackDriftDetectionStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackEvents

<p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackEventsRequest();
    $request->action = GETDescribeStackEventsActionEnum::DESCRIBE_STACK_EVENTS;
    $request->nextToken = 'modi';
    $request->stackName = 'qui';
    $request->version = GETDescribeStackEventsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getDescribeStackEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackInstance

<p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackInstanceCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackInstanceRequest();
    $request->action = GETDescribeStackInstanceActionEnum::DESCRIBE_STACK_INSTANCE;
    $request->callAs = GETDescribeStackInstanceCallAsEnum::SELF;
    $request->stackInstanceAccount = 'fugit';
    $request->stackInstanceRegion = 'dolorum';
    $request->stackSetName = 'excepturi';
    $request->version = GETDescribeStackInstanceVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getDescribeStackInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackResource

<p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackResourceRequest();
    $request->action = GETDescribeStackResourceActionEnum::DESCRIBE_STACK_RESOURCE;
    $request->logicalResourceId = 'eligendi';
    $request->stackName = 'sint';
    $request->version = GETDescribeStackResourceVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->getDescribeStackResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackResourceDrifts

<p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourceDriftsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourceDriftsActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StackResourceDriftStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourceDriftsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackResourceDriftsRequest();
    $request->action = GETDescribeStackResourceDriftsActionEnum::DESCRIBE_STACK_RESOURCE_DRIFTS;
    $request->maxResults = 952749;
    $request->nextToken = 'dolorum';
    $request->stackName = 'in';
    $request->stackResourceDriftStatusFilters = [
        StackResourceDriftStatusEnum::NOT_CHECKED,
        StackResourceDriftStatusEnum::NOT_CHECKED,
    ];
    $request->version = GETDescribeStackResourceDriftsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getDescribeStackResourceDrifts($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackResources

<p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackResourcesRequest();
    $request->action = GETDescribeStackResourcesActionEnum::DESCRIBE_STACK_RESOURCES;
    $request->logicalResourceId = 'laborum';
    $request->physicalResourceId = 'accusamus';
    $request->stackName = 'non';
    $request->version = GETDescribeStackResourcesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->getDescribeStackResources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackSet

Returns the description of the specified stack set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackSetRequest();
    $request->action = GETDescribeStackSetActionEnum::DESCRIBE_STACK_SET;
    $request->callAs = GETDescribeStackSetCallAsEnum::DELEGATED_ADMIN;
    $request->stackSetName = 'blanditiis';
    $request->version = GETDescribeStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDescribeStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStackSetOperation

Returns the description of the specified stack set operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetOperationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetOperationCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackSetOperationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStackSetOperationRequest();
    $request->action = GETDescribeStackSetOperationActionEnum::DESCRIBE_STACK_SET_OPERATION;
    $request->callAs = GETDescribeStackSetOperationCallAsEnum::DELEGATED_ADMIN;
    $request->operationId = 'molestiae';
    $request->stackSetName = 'perferendis';
    $request->version = GETDescribeStackSetOperationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->getDescribeStackSetOperation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeStacks

<p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStacksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeStacksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeStacksRequest();
    $request->action = GETDescribeStacksActionEnum::DESCRIBE_STACKS;
    $request->nextToken = 'natus';
    $request->stackName = 'nobis';
    $request->version = GETDescribeStacksVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDescribeStacks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeType

<p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTypeRequest();
    $request->action = GETDescribeTypeActionEnum::DESCRIBE_TYPE;
    $request->arn = 'ullam';
    $request->publicVersionNumber = 'provident';
    $request->publisherId = 'quos';
    $request->type = GETDescribeTypeTypeEnum::MODULE;
    $request->typeName = 'accusantium';
    $request->version = GETDescribeTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->versionId = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getDescribeType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTypeRegistration

<p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed information about an extension.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTypeRegistrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTypeRegistrationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTypeRegistrationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTypeRegistrationRequest();
    $request->action = GETDescribeTypeRegistrationActionEnum::DESCRIBE_TYPE_REGISTRATION;
    $request->registrationToken = 'nemo';
    $request->version = GETDescribeTypeRegistrationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->getDescribeTypeRegistration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetectStackDrift

<p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackDriftRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackDriftActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackDriftVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetectStackDriftRequest();
    $request->action = GETDetectStackDriftActionEnum::DETECT_STACK_DRIFT;
    $request->logicalResourceIds = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->stackName = 'repudiandae';
    $request->version = GETDetectStackDriftVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->getDetectStackDrift($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetectStackResourceDrift

<p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackResourceDriftRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackResourceDriftActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackResourceDriftVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetectStackResourceDriftRequest();
    $request->action = GETDetectStackResourceDriftActionEnum::DETECT_STACK_RESOURCE_DRIFT;
    $request->logicalResourceId = 'pariatur';
    $request->stackName = 'accusantium';
    $request->version = GETDetectStackResourceDriftVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->getDetectStackResourceDrift($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetectStackSetDrift

<p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackSetDriftRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackSetDriftActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackSetDriftCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackSetDriftOperationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\RegionConcurrencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetectStackSetDriftVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetectStackSetDriftRequest();
    $request->action = GETDetectStackSetDriftActionEnum::DETECT_STACK_SET_DRIFT;
    $request->callAs = GETDetectStackSetDriftCallAsEnum::DELEGATED_ADMIN;
    $request->operationId = 'maxime';
    $request->operationPreferences = new GETDetectStackSetDriftOperationPreferences();
    $request->operationPreferences->failureToleranceCount = 411397;
    $request->operationPreferences->failureTolerancePercentage = 569101;
    $request->operationPreferences->maxConcurrentCount = 139972;
    $request->operationPreferences->maxConcurrentPercentage = 407183;
    $request->operationPreferences->regionConcurrencyType = RegionConcurrencyTypeEnum::SEQUENTIAL;
    $request->operationPreferences->regionOrder = [
        'maiores',
    ];
    $request->stackSetName = 'quidem';
    $request->version = GETDetectStackSetDriftVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getDetectStackSetDrift($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExecuteChangeSet

<p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETExecuteChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETExecuteChangeSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETExecuteChangeSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETExecuteChangeSetRequest();
    $request->action = GETExecuteChangeSetActionEnum::EXECUTE_CHANGE_SET;
    $request->changeSetName = 'voluptatibus';
    $request->clientRequestToken = 'perferendis';
    $request->disableRollback = false;
    $request->stackName = 'fugiat';
    $request->version = GETExecuteChangeSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getExecuteChangeSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETStackPolicy

Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETStackPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETStackPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETStackPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETStackPolicyRequest();
    $request->action = GETGETStackPolicyActionEnum::GET_STACK_POLICY;
    $request->stackName = 'dolores';
    $request->version = GETGETStackPolicyVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->getGETStackPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETTemplate

<p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateTemplateStageEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETTemplateRequest();
    $request->action = GETGETTemplateActionEnum::GET_TEMPLATE;
    $request->changeSetName = 'perferendis';
    $request->stackName = 'dolores';
    $request->templateStage = GETGETTemplateTemplateStageEnum::PROCESSED;
    $request->version = GETGETTemplateVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getGETTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETTemplateSummary

<p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateSummaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateSummaryCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateSummaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETTemplateSummaryRequest();
    $request->action = GETGETTemplateSummaryActionEnum::GET_TEMPLATE_SUMMARY;
    $request->callAs = GETGETTemplateSummaryCallAsEnum::DELEGATED_ADMIN;
    $request->stackName = 'perspiciatis';
    $request->stackSetName = 'voluptatem';
    $request->templateBody = 'porro';
    $request->templateURL = 'consequuntur';
    $request->version = GETGETTemplateSummaryVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->getGETTemplateSummary($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImportStacksToStackSet

<p>Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.</p> <note> <p> <code>ImportStacksToStackSet</code> is only supported by self-managed permissions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETImportStacksToStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETImportStacksToStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETImportStacksToStackSetCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETImportStacksToStackSetOperationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\RegionConcurrencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETImportStacksToStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETImportStacksToStackSetRequest();
    $request->action = GETImportStacksToStackSetActionEnum::IMPORT_STACKS_TO_STACK_SET;
    $request->callAs = GETImportStacksToStackSetCallAsEnum::DELEGATED_ADMIN;
    $request->operationId = 'modi';
    $request->operationPreferences = new GETImportStacksToStackSetOperationPreferences();
    $request->operationPreferences->failureToleranceCount = 613966;
    $request->operationPreferences->failureTolerancePercentage = 679091;
    $request->operationPreferences->maxConcurrentCount = 535633;
    $request->operationPreferences->maxConcurrentPercentage = 864282;
    $request->operationPreferences->regionConcurrencyType = RegionConcurrencyTypeEnum::PARALLEL;
    $request->operationPreferences->regionOrder = [
        'libero',
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->organizationalUnitIds = [
        'dolorem',
        'dolorem',
    ];
    $request->stackIds = [
        'qui',
    ];
    $request->stackIdsUrl = 'ipsum';
    $request->stackSetName = 'hic';
    $request->version = GETImportStacksToStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getImportStacksToStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListChangeSets

Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListChangeSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListChangeSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListChangeSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListChangeSetsRequest();
    $request->action = GETListChangeSetsActionEnum::LIST_CHANGE_SETS;
    $request->nextToken = 'numquam';
    $request->stackName = 'veritatis';
    $request->version = GETListChangeSetsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getListChangeSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListExports

<p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListExportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListExportsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListExportsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListExportsRequest();
    $request->action = GETListExportsActionEnum::LIST_EXPORTS;
    $request->nextToken = 'voluptatibus';
    $request->version = GETListExportsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->getListExports($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListImports

<p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListImportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListImportsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListImportsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListImportsRequest();
    $request->action = GETListImportsActionEnum::LIST_IMPORTS;
    $request->exportName = 'soluta';
    $request->nextToken = 'dolorum';
    $request->version = GETListImportsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->getListImports($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListStackResources

<p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackResourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackResourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListStackResourcesRequest();
    $request->action = GETListStackResourcesActionEnum::LIST_STACK_RESOURCES;
    $request->nextToken = 'asperiores';
    $request->stackName = 'nihil';
    $request->version = GETListStackResourcesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getListStackResources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListStackSetOperations

Returns summary information about operations performed on a stack set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetOperationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetOperationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetOperationsCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetOperationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListStackSetOperationsRequest();
    $request->action = GETListStackSetOperationsActionEnum::LIST_STACK_SET_OPERATIONS;
    $request->callAs = GETListStackSetOperationsCallAsEnum::SELF;
    $request->maxResults = 758379;
    $request->nextToken = 'accusamus';
    $request->stackSetName = 'ad';
    $request->version = GETListStackSetOperationsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getListStackSetOperations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListStackSets

<p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetsCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListStackSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListStackSetsRequest();
    $request->action = GETListStackSetsActionEnum::LIST_STACK_SETS;
    $request->callAs = GETListStackSetsCallAsEnum::DELEGATED_ADMIN;
    $request->maxResults = 55;
    $request->nextToken = 'at';
    $request->status = GETListStackSetsStatusEnum::ACTIVE;
    $request->version = GETListStackSetsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->getListStackSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListStacks

Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListStacksActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StackStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListStacksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListStacksRequest();
    $request->action = GETListStacksActionEnum::LIST_STACKS;
    $request->nextToken = 'esse';
    $request->stackStatusFilter = [
        StackStatusEnum::UPDATE_COMPLETE,
        StackStatusEnum::ROLLBACK_FAILED,
        StackStatusEnum::IMPORT_IN_PROGRESS,
    ];
    $request->version = GETListStacksVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getListStacks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTypeRegistrations

Returns a list of registration tokens for the specified extension(s).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeRegistrationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeRegistrationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeRegistrationsRegistrationStatusFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeRegistrationsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeRegistrationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTypeRegistrationsRequest();
    $request->action = GETListTypeRegistrationsActionEnum::LIST_TYPE_REGISTRATIONS;
    $request->maxResults = 957451;
    $request->nextToken = 'totam';
    $request->registrationStatusFilter = GETListTypeRegistrationsRegistrationStatusFilterEnum::IN_PROGRESS;
    $request->type = GETListTypeRegistrationsTypeEnum::RESOURCE;
    $request->typeArn = 'expedita';
    $request->typeName = 'neque';
    $request->version = GETListTypeRegistrationsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getListTypeRegistrations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTypeVersions

Returns summary information about the versions of an extension.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeVersionsDeprecatedStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeVersionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypeVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTypeVersionsRequest();
    $request->action = GETListTypeVersionsActionEnum::LIST_TYPE_VERSIONS;
    $request->arn = 'incidunt';
    $request->deprecatedStatus = GETListTypeVersionsDeprecatedStatusEnum::LIVE;
    $request->maxResults = 586784;
    $request->nextToken = 'maxime';
    $request->publisherId = 'pariatur';
    $request->type = GETListTypeVersionsTypeEnum::HOOK;
    $request->typeName = 'dicta';
    $request->version = GETListTypeVersionsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getListTypeVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTypes

Returns summary information about extension that have been registered with CloudFormation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesDeprecatedStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesFilters;
use \OpenAPI\OpenAPI\Models\Shared\CategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesProvisioningTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTypesVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTypesRequest();
    $request->action = GETListTypesActionEnum::LIST_TYPES;
    $request->deprecatedStatus = GETListTypesDeprecatedStatusEnum::LIVE;
    $request->filters = new GETListTypesFilters();
    $request->filters->category = CategoryEnum::ACTIVATED;
    $request->filters->publisherId = 'molestias';
    $request->filters->typeNamePrefix = 'temporibus';
    $request->maxResults = 183280;
    $request->nextToken = 'neque';
    $request->provisioningType = GETListTypesProvisioningTypeEnum::NON_PROVISIONABLE;
    $request->type = GETListTypesTypeEnum::RESOURCE;
    $request->version = GETListTypesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->visibility = GETListTypesVisibilityEnum::PUBLIC;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->getListTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublishType

<p>Publishes the specified extension to the CloudFormation registry as a public extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPublishTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPublishTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPublishTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPublishTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPublishTypeRequest();
    $request->action = GETPublishTypeActionEnum::PUBLISH_TYPE;
    $request->arn = 'nobis';
    $request->publicVersionNumber = 'et';
    $request->type = GETPublishTypeTypeEnum::HOOK;
    $request->typeName = 'ipsum';
    $request->version = GETPublishTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getPublishType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecordHandlerProgress

<p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordHandlerProgressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordHandlerProgressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordHandlerProgressCurrentOperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordHandlerProgressErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordHandlerProgressOperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRecordHandlerProgressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRecordHandlerProgressRequest();
    $request->action = GETRecordHandlerProgressActionEnum::RECORD_HANDLER_PROGRESS;
    $request->bearerToken = 'dolorem';
    $request->clientRequestToken = 'dolore';
    $request->currentOperationStatus = GETRecordHandlerProgressCurrentOperationStatusEnum::IN_PROGRESS;
    $request->errorCode = GETRecordHandlerProgressErrorCodeEnum::ALREADY_EXISTS;
    $request->operationStatus = GETRecordHandlerProgressOperationStatusEnum::SUCCESS;
    $request->resourceModel = 'architecto';
    $request->statusMessage = 'quae';
    $request->version = GETRecordHandlerProgressVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->getRecordHandlerProgress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegisterPublisher

<p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterPublisherRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterPublisherActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterPublisherVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRegisterPublisherRequest();
    $request->acceptTermsAndConditions = false;
    $request->action = GETRegisterPublisherActionEnum::REGISTER_PUBLISHER;
    $request->connectionArn = 'doloribus';
    $request->version = GETRegisterPublisherVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->getRegisterPublisher($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegisterType

<p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterTypeLoggingConfig;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRegisterTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRegisterTypeRequest();
    $request->action = GETRegisterTypeActionEnum::REGISTER_TYPE;
    $request->clientRequestToken = 'occaecati';
    $request->executionRoleArn = 'voluptatibus';
    $request->loggingConfig = new GETRegisterTypeLoggingConfig();
    $request->loggingConfig->logGroupName = 'quisquam';
    $request->loggingConfig->logRoleArn = 'vero';
    $request->schemaHandlerPackage = 'omnis';
    $request->type = GETRegisterTypeTypeEnum::MODULE;
    $request->typeName = 'ipsum';
    $request->version = GETRegisterTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getRegisterType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRollbackStack

<p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRollbackStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRollbackStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRollbackStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRollbackStackRequest();
    $request->action = GETRollbackStackActionEnum::ROLLBACK_STACK;
    $request->clientRequestToken = 'distinctio';
    $request->roleARN = 'quod';
    $request->stackName = 'odio';
    $request->version = GETRollbackStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->getRollbackStack($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetStackPolicy

Sets a stack policy for a specified stack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetStackPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetStackPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetStackPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetStackPolicyRequest();
    $request->action = GETSetStackPolicyActionEnum::SET_STACK_POLICY;
    $request->stackName = 'sequi';
    $request->stackPolicyBody = 'natus';
    $request->stackPolicyURL = 'impedit';
    $request->version = GETSetStackPolicyVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getSetStackPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetTypeConfiguration

<p>Specifies the configuration data for a registered CloudFormation extension, in the given account and region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeConfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetTypeConfigurationRequest();
    $request->action = GETSetTypeConfigurationActionEnum::SET_TYPE_CONFIGURATION;
    $request->configuration = 'doloribus';
    $request->configurationAlias = 'iusto';
    $request->type = GETSetTypeConfigurationTypeEnum::HOOK;
    $request->typeArn = 'ducimus';
    $request->typeName = 'alias';
    $request->version = GETSetTypeConfigurationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->getSetTypeConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetTypeDefaultVersion

Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeDefaultVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeDefaultVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeDefaultVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetTypeDefaultVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetTypeDefaultVersionRequest();
    $request->action = GETSetTypeDefaultVersionActionEnum::SET_TYPE_DEFAULT_VERSION;
    $request->arn = 'magnam';
    $request->type = GETSetTypeDefaultVersionTypeEnum::RESOURCE;
    $request->typeName = 'ex';
    $request->version = GETSetTypeDefaultVersionVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->versionId = 'laudantium';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getSetTypeDefaultVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSignalResource

Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSignalResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSignalResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSignalResourceStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSignalResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSignalResourceRequest();
    $request->action = GETSignalResourceActionEnum::SIGNAL_RESOURCE;
    $request->logicalResourceId = 'voluptatibus';
    $request->stackName = 'nostrum';
    $request->status = GETSignalResourceStatusEnum::FAILURE;
    $request->uniqueId = 'quisquam';
    $request->version = GETSignalResourceVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->getSignalResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopStackSetOperation

Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStopStackSetOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStopStackSetOperationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStopStackSetOperationCallAsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStopStackSetOperationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStopStackSetOperationRequest();
    $request->action = GETStopStackSetOperationActionEnum::STOP_STACK_SET_OPERATION;
    $request->callAs = GETStopStackSetOperationCallAsEnum::SELF;
    $request->operationId = 'ea';
    $request->stackSetName = 'quo';
    $request->version = GETStopStackSetOperationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->getStopStackSetOperation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestType

<p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETTestTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETTestTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETTestTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETTestTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTestTypeRequest();
    $request->action = GETTestTypeActionEnum::TEST_TYPE;
    $request->arn = 'aut';
    $request->logDeliveryBucket = 'aut';
    $request->type = GETTestTypeTypeEnum::MODULE;
    $request->typeName = 'impedit';
    $request->version = GETTestTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->versionId = 'aliquam';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getTestType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateTerminationProtection

<p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateTerminationProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateTerminationProtectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateTerminationProtectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateTerminationProtectionRequest();
    $request->action = GETUpdateTerminationProtectionActionEnum::UPDATE_TERMINATION_PROTECTION;
    $request->enableTerminationProtection = false;
    $request->stackName = 'placeat';
    $request->version = GETUpdateTerminationProtectionVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->getUpdateTerminationProtection($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getValidateTemplate

Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETValidateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETValidateTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETValidateTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETValidateTemplateRequest();
    $request->action = GETValidateTemplateActionEnum::VALIDATE_TEMPLATE;
    $request->templateBody = 'voluptas';
    $request->templateURL = 'libero';
    $request->version = GETValidateTemplateVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getValidateTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postActivateType

<p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTActivateTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTActivateTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTActivateTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTActivateTypeRequest();
    $request->action = POSTActivateTypeActionEnum::ACTIVATE_TYPE;
    $request->requestBody = 'magnam';
    $request->version = POSTActivateTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->postActivateType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBatchDescribeTypeConfigurations

<p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDescribeTypeConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDescribeTypeConfigurationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTBatchDescribeTypeConfigurationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTBatchDescribeTypeConfigurationsRequest();
    $request->action = POSTBatchDescribeTypeConfigurationsActionEnum::BATCH_DESCRIBE_TYPE_CONFIGURATIONS;
    $request->requestBody = 'quidem';
    $request->version = POSTBatchDescribeTypeConfigurationsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postBatchDescribeTypeConfigurations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCancelUpdateStack

<p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelUpdateStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelUpdateStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCancelUpdateStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCancelUpdateStackRequest();
    $request->action = POSTCancelUpdateStackActionEnum::CANCEL_UPDATE_STACK;
    $request->requestBody = 'quisquam';
    $request->version = POSTCancelUpdateStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->postCancelUpdateStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContinueUpdateRollback

<p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTContinueUpdateRollbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTContinueUpdateRollbackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTContinueUpdateRollbackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTContinueUpdateRollbackRequest();
    $request->action = POSTContinueUpdateRollbackActionEnum::CONTINUE_UPDATE_ROLLBACK;
    $request->requestBody = 'quo';
    $request->version = POSTContinueUpdateRollbackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->postContinueUpdateRollback($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateChangeSet

<p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make changes until you execute the change set.</p> <p>To create a change set for the entire stack hierarchy, set <code>IncludeNestedStacks</code> to <code>True</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateChangeSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateChangeSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateChangeSetRequest();
    $request->action = POSTCreateChangeSetActionEnum::CREATE_CHANGE_SET;
    $request->requestBody = 'tempora';
    $request->version = POSTCreateChangeSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->postCreateChangeSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateStack

Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the <a>DescribeStacks</a>operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateStackRequest();
    $request->action = POSTCreateStackActionEnum::CREATE_STACK;
    $request->requestBody = 'aperiam';
    $request->version = POSTCreateStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postCreateStack($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateStackInstances

Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateStackInstancesRequest();
    $request->action = POSTCreateStackInstancesActionEnum::CREATE_STACK_INSTANCES;
    $request->requestBody = 'aliquam';
    $request->version = POSTCreateStackInstancesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->postCreateStackInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateStackSet

Creates a stack set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateStackSetRequest();
    $request->action = POSTCreateStackSetActionEnum::CREATE_STACK_SET;
    $request->requestBody = 'accusantium';
    $request->version = POSTCreateStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postCreateStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeactivateType

<p>Deactivates a public extension that was previously activated in this account and region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeactivateTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeactivateTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeactivateTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeactivateTypeRequest();
    $request->action = POSTDeactivateTypeActionEnum::DEACTIVATE_TYPE;
    $request->requestBody = 'fuga';
    $request->version = POSTDeactivateTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postDeactivateType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteChangeSet

<p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteChangeSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteChangeSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteChangeSetRequest();
    $request->action = POSTDeleteChangeSetActionEnum::DELETE_CHANGE_SET;
    $request->requestBody = 'sapiente';
    $request->version = POSTDeleteChangeSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->postDeleteChangeSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteStack

Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteStackRequest();
    $request->action = POSTDeleteStackActionEnum::DELETE_STACK;
    $request->requestBody = 'esse';
    $request->version = POSTDeleteStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->postDeleteStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteStackInstances

Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteStackInstancesRequest();
    $request->action = POSTDeleteStackInstancesActionEnum::DELETE_STACK_INSTANCES;
    $request->requestBody = 'aliquid';
    $request->version = POSTDeleteStackInstancesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->postDeleteStackInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteStackSet

Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteStackSetRequest();
    $request->action = POSTDeleteStackSetActionEnum::DELETE_STACK_SET;
    $request->requestBody = 'minima';
    $request->version = POSTDeleteStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->postDeleteStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeregisterType

<p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeregisterTypeRequest();
    $request->action = POSTDeregisterTypeActionEnum::DEREGISTER_TYPE;
    $request->requestBody = 'consequuntur';
    $request->version = POSTDeregisterTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postDeregisterType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAccountLimits

Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAccountLimitsRequest();
    $request->action = POSTDescribeAccountLimitsActionEnum::DESCRIBE_ACCOUNT_LIMITS;
    $request->nextToken = 'provident';
    $request->requestBody = 'a';
    $request->version = POSTDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->postDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeChangeSet

Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeChangeSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeChangeSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeChangeSetRequest();
    $request->action = POSTDescribeChangeSetActionEnum::DESCRIBE_CHANGE_SET;
    $request->requestBody = 'pariatur';
    $request->version = POSTDescribeChangeSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postDescribeChangeSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeChangeSetHooks

Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeChangeSetHooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeChangeSetHooksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeChangeSetHooksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeChangeSetHooksRequest();
    $request->action = POSTDescribeChangeSetHooksActionEnum::DESCRIBE_CHANGE_SET_HOOKS;
    $request->requestBody = 'quasi';
    $request->version = POSTDescribeChangeSetHooksVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postDescribeChangeSetHooks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribePublisher

<p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePublisherRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePublisherActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePublisherVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribePublisherRequest();
    $request->action = POSTDescribePublisherActionEnum::DESCRIBE_PUBLISHER;
    $request->requestBody = 'in';
    $request->version = POSTDescribePublisherVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postDescribePublisher($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackDriftDetectionStatus

<p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackDriftDetectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackDriftDetectionStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackDriftDetectionStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackDriftDetectionStatusRequest();
    $request->action = POSTDescribeStackDriftDetectionStatusActionEnum::DESCRIBE_STACK_DRIFT_DETECTION_STATUS;
    $request->requestBody = 'dicta';
    $request->version = POSTDescribeStackDriftDetectionStatusVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->postDescribeStackDriftDetectionStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackEvents

<p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackEventsRequest();
    $request->action = POSTDescribeStackEventsActionEnum::DESCRIBE_STACK_EVENTS;
    $request->nextToken = 'quibusdam';
    $request->requestBody = 'ex';
    $request->version = POSTDescribeStackEventsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postDescribeStackEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackInstance

<p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackInstanceRequest();
    $request->action = POSTDescribeStackInstanceActionEnum::DESCRIBE_STACK_INSTANCE;
    $request->requestBody = 'at';
    $request->version = POSTDescribeStackInstanceVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postDescribeStackInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackResource

<p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackResourceRequest();
    $request->action = POSTDescribeStackResourceActionEnum::DESCRIBE_STACK_RESOURCE;
    $request->requestBody = 'iste';
    $request->version = POSTDescribeStackResourceVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->postDescribeStackResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackResourceDrifts

<p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourceDriftsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourceDriftsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourceDriftsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackResourceDriftsRequest();
    $request->action = POSTDescribeStackResourceDriftsActionEnum::DESCRIBE_STACK_RESOURCE_DRIFTS;
    $request->maxResults = 'ab';
    $request->nextToken = 'corrupti';
    $request->requestBody = 'non';
    $request->version = POSTDescribeStackResourceDriftsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postDescribeStackResourceDrifts($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackResources

<p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackResourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackResourcesRequest();
    $request->action = POSTDescribeStackResourcesActionEnum::DESCRIBE_STACK_RESOURCES;
    $request->requestBody = 'aut';
    $request->version = POSTDescribeStackResourcesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postDescribeStackResources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackSet

Returns the description of the specified stack set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackSetRequest();
    $request->action = POSTDescribeStackSetActionEnum::DESCRIBE_STACK_SET;
    $request->requestBody = 'asperiores';
    $request->version = POSTDescribeStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->postDescribeStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStackSetOperation

Returns the description of the specified stack set operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackSetOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackSetOperationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStackSetOperationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStackSetOperationRequest();
    $request->action = POSTDescribeStackSetOperationActionEnum::DESCRIBE_STACK_SET_OPERATION;
    $request->requestBody = 'dignissimos';
    $request->version = POSTDescribeStackSetOperationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->postDescribeStackSetOperation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeStacks

<p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStacksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeStacksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeStacksRequest();
    $request->action = POSTDescribeStacksActionEnum::DESCRIBE_STACKS;
    $request->nextToken = 'labore';
    $request->requestBody = 'ab';
    $request->version = POSTDescribeStacksVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->postDescribeStacks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeType

<p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTypeRequest();
    $request->action = POSTDescribeTypeActionEnum::DESCRIBE_TYPE;
    $request->requestBody = 'recusandae';
    $request->version = POSTDescribeTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postDescribeType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTypeRegistration

<p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed information about an extension.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTypeRegistrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTypeRegistrationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTypeRegistrationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTypeRegistrationRequest();
    $request->action = POSTDescribeTypeRegistrationActionEnum::DESCRIBE_TYPE_REGISTRATION;
    $request->requestBody = 'possimus';
    $request->version = POSTDescribeTypeRegistrationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->postDescribeTypeRegistration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetectStackDrift

<p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackDriftRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackDriftActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackDriftVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetectStackDriftRequest();
    $request->action = POSTDetectStackDriftActionEnum::DETECT_STACK_DRIFT;
    $request->requestBody = 'nemo';
    $request->version = POSTDetectStackDriftVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postDetectStackDrift($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetectStackResourceDrift

<p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackResourceDriftRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackResourceDriftActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackResourceDriftVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetectStackResourceDriftRequest();
    $request->action = POSTDetectStackResourceDriftActionEnum::DETECT_STACK_RESOURCE_DRIFT;
    $request->requestBody = 'earum';
    $request->version = POSTDetectStackResourceDriftVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postDetectStackResourceDrift($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetectStackSetDrift

<p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackSetDriftRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackSetDriftActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetectStackSetDriftVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetectStackSetDriftRequest();
    $request->action = POSTDetectStackSetDriftActionEnum::DETECT_STACK_SET_DRIFT;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTDetectStackSetDriftVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postDetectStackSetDrift($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEstimateTemplateCost

Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEstimateTemplateCostRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEstimateTemplateCostActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEstimateTemplateCostVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEstimateTemplateCostRequest();
    $request->action = POSTEstimateTemplateCostActionEnum::ESTIMATE_TEMPLATE_COST;
    $request->requestBody = 'dignissimos';
    $request->version = POSTEstimateTemplateCostVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postEstimateTemplateCost($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExecuteChangeSet

<p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTExecuteChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTExecuteChangeSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTExecuteChangeSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTExecuteChangeSetRequest();
    $request->action = POSTExecuteChangeSetActionEnum::EXECUTE_CHANGE_SET;
    $request->requestBody = 'voluptates';
    $request->version = POSTExecuteChangeSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postExecuteChangeSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetStackPolicy

Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetStackPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetStackPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetStackPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetStackPolicyRequest();
    $request->action = POSTGetStackPolicyActionEnum::GET_STACK_POLICY;
    $request->requestBody = 'voluptas';
    $request->version = POSTGetStackPolicyVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->postGetStackPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetTemplate

<p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetTemplateRequest();
    $request->action = POSTGetTemplateActionEnum::GET_TEMPLATE;
    $request->requestBody = 'blanditiis';
    $request->version = POSTGetTemplateVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postGetTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetTemplateSummary

<p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateSummaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateSummaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetTemplateSummaryRequest();
    $request->action = POSTGetTemplateSummaryActionEnum::GET_TEMPLATE_SUMMARY;
    $request->requestBody = 'cum';
    $request->version = POSTGetTemplateSummaryVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postGetTemplateSummary($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postImportStacksToStackSet

<p>Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.</p> <note> <p> <code>ImportStacksToStackSet</code> is only supported by self-managed permissions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTImportStacksToStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTImportStacksToStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTImportStacksToStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTImportStacksToStackSetRequest();
    $request->action = POSTImportStacksToStackSetActionEnum::IMPORT_STACKS_TO_STACK_SET;
    $request->requestBody = 'totam';
    $request->version = POSTImportStacksToStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postImportStacksToStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListChangeSets

Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListChangeSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListChangeSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListChangeSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListChangeSetsRequest();
    $request->action = POSTListChangeSetsActionEnum::LIST_CHANGE_SETS;
    $request->nextToken = 'explicabo';
    $request->requestBody = 'asperiores';
    $request->version = POSTListChangeSetsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->postListChangeSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListExports

<p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListExportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListExportsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListExportsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListExportsRequest();
    $request->action = POSTListExportsActionEnum::LIST_EXPORTS;
    $request->nextToken = 'sed';
    $request->requestBody = 'in';
    $request->version = POSTListExportsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postListExports($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListImports

<p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListImportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListImportsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListImportsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListImportsRequest();
    $request->action = POSTListImportsActionEnum::LIST_IMPORTS;
    $request->nextToken = 'sapiente';
    $request->requestBody = 'debitis';
    $request->version = POSTListImportsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postListImports($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListStackInstances

Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListStackInstancesRequest();
    $request->action = POSTListStackInstancesActionEnum::LIST_STACK_INSTANCES;
    $request->maxResults = 'provident';
    $request->nextToken = 'eius';
    $request->requestBody = 'necessitatibus';
    $request->version = POSTListStackInstancesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postListStackInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListStackResources

<p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackResourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackResourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListStackResourcesRequest();
    $request->action = POSTListStackResourcesActionEnum::LIST_STACK_RESOURCES;
    $request->nextToken = 'voluptate';
    $request->requestBody = 'reiciendis';
    $request->version = POSTListStackResourcesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->postListStackResources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListStackSetOperationResults

Returns summary information about the results of a stack set operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetOperationResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetOperationResultsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetOperationResultsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListStackSetOperationResultsRequest();
    $request->action = POSTListStackSetOperationResultsActionEnum::LIST_STACK_SET_OPERATION_RESULTS;
    $request->maxResults = 'incidunt';
    $request->nextToken = 'ipsam';
    $request->requestBody = 'debitis';
    $request->version = POSTListStackSetOperationResultsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->postListStackSetOperationResults($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListStackSetOperations

Returns summary information about operations performed on a stack set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetOperationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetOperationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetOperationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListStackSetOperationsRequest();
    $request->action = POSTListStackSetOperationsActionEnum::LIST_STACK_SET_OPERATIONS;
    $request->maxResults = 'reiciendis';
    $request->nextToken = 'nulla';
    $request->requestBody = 'magni';
    $request->version = POSTListStackSetOperationsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postListStackSetOperations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListStackSets

<p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStackSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListStackSetsRequest();
    $request->action = POSTListStackSetsActionEnum::LIST_STACK_SETS;
    $request->maxResults = 'laudantium';
    $request->nextToken = 'exercitationem';
    $request->requestBody = 'praesentium';
    $request->version = POSTListStackSetsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->postListStackSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListStacks

Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStacksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListStacksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListStacksRequest();
    $request->action = POSTListStacksActionEnum::LIST_STACKS;
    $request->nextToken = 'debitis';
    $request->requestBody = 'neque';
    $request->version = POSTListStacksVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postListStacks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTypeRegistrations

Returns a list of registration tokens for the specified extension(s).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypeRegistrationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypeRegistrationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypeRegistrationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTypeRegistrationsRequest();
    $request->action = POSTListTypeRegistrationsActionEnum::LIST_TYPE_REGISTRATIONS;
    $request->maxResults = 'atque';
    $request->nextToken = 'fugit';
    $request->requestBody = 'ut';
    $request->version = POSTListTypeRegistrationsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postListTypeRegistrations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTypeVersions

Returns summary information about the versions of an extension.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypeVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypeVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypeVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTypeVersionsRequest();
    $request->action = POSTListTypeVersionsActionEnum::LIST_TYPE_VERSIONS;
    $request->maxResults = 'ipsam';
    $request->nextToken = 'sit';
    $request->requestBody = 'voluptatum';
    $request->version = POSTListTypeVersionsVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postListTypeVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTypes

Returns summary information about extension that have been registered with CloudFormation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTypesRequest();
    $request->action = POSTListTypesActionEnum::LIST_TYPES;
    $request->maxResults = 'sit';
    $request->nextToken = 'vel';
    $request->requestBody = 'nostrum';
    $request->version = POSTListTypesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->postListTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPublishType

<p>Publishes the specified extension to the CloudFormation registry as a public extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPublishTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPublishTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPublishTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPublishTypeRequest();
    $request->action = POSTPublishTypeActionEnum::PUBLISH_TYPE;
    $request->requestBody = 'dicta';
    $request->version = POSTPublishTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->postPublishType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRecordHandlerProgress

<p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRecordHandlerProgressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRecordHandlerProgressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRecordHandlerProgressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRecordHandlerProgressRequest();
    $request->action = POSTRecordHandlerProgressActionEnum::RECORD_HANDLER_PROGRESS;
    $request->requestBody = 'tenetur';
    $request->version = POSTRecordHandlerProgressVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'unde';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postRecordHandlerProgress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRegisterPublisher

<p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterPublisherRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterPublisherActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterPublisherVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRegisterPublisherRequest();
    $request->action = POSTRegisterPublisherActionEnum::REGISTER_PUBLISHER;
    $request->requestBody = 'provident';
    $request->version = POSTRegisterPublisherVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->postRegisterPublisher($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRegisterType

<p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRegisterTypeRequest();
    $request->action = POSTRegisterTypeActionEnum::REGISTER_TYPE;
    $request->requestBody = 'facere';
    $request->version = POSTRegisterTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postRegisterType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRollbackStack

<p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRollbackStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRollbackStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRollbackStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRollbackStackRequest();
    $request->action = POSTRollbackStackActionEnum::ROLLBACK_STACK;
    $request->requestBody = 'quasi';
    $request->version = POSTRollbackStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->postRollbackStack($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetStackPolicy

Sets a stack policy for a specified stack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetStackPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetStackPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetStackPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetStackPolicyRequest();
    $request->action = POSTSetStackPolicyActionEnum::SET_STACK_POLICY;
    $request->requestBody = 'et';
    $request->version = POSTSetStackPolicyVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'officiis';

    $response = $sdk->sdk->postSetStackPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetTypeConfiguration

<p>Specifies the configuration data for a registered CloudFormation extension, in the given account and region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetTypeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetTypeConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetTypeConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetTypeConfigurationRequest();
    $request->action = POSTSetTypeConfigurationActionEnum::SET_TYPE_CONFIGURATION;
    $request->requestBody = 'officiis';
    $request->version = POSTSetTypeConfigurationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'corrupti';

    $response = $sdk->sdk->postSetTypeConfiguration($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetTypeDefaultVersion

Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetTypeDefaultVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetTypeDefaultVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetTypeDefaultVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetTypeDefaultVersionRequest();
    $request->action = POSTSetTypeDefaultVersionActionEnum::SET_TYPE_DEFAULT_VERSION;
    $request->requestBody = 'at';
    $request->version = POSTSetTypeDefaultVersionVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->postSetTypeDefaultVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSignalResource

Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSignalResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSignalResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSignalResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSignalResourceRequest();
    $request->action = POSTSignalResourceActionEnum::SIGNAL_RESOURCE;
    $request->requestBody = 'recusandae';
    $request->version = POSTSignalResourceVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postSignalResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopStackSetOperation

Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopStackSetOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopStackSetOperationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopStackSetOperationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStopStackSetOperationRequest();
    $request->action = POSTStopStackSetOperationActionEnum::STOP_STACK_SET_OPERATION;
    $request->requestBody = 'accusantium';
    $request->version = POSTStopStackSetOperationVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->postStopStackSetOperation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTestType

<p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTestTypeRequest();
    $request->action = POSTTestTypeActionEnum::TEST_TYPE;
    $request->requestBody = 'magnam';
    $request->version = POSTTestTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postTestType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateStack

<p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateStackRequest();
    $request->action = POSTUpdateStackActionEnum::UPDATE_STACK;
    $request->requestBody = 'eveniet';
    $request->version = POSTUpdateStackVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->postUpdateStack($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateStackInstances

<p>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.</p> <p>You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p> <p>During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateStackInstancesRequest();
    $request->action = POSTUpdateStackInstancesActionEnum::UPDATE_STACK_INSTANCES;
    $request->requestBody = 'illo';
    $request->version = POSTUpdateStackInstancesVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->postUpdateStackInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateStackSet

<p>Updates the stack set, and associated stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateStackSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateStackSetRequest();
    $request->action = POSTUpdateStackSetActionEnum::UPDATE_STACK_SET;
    $request->requestBody = 'ipsa';
    $request->version = POSTUpdateStackSetVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->postUpdateStackSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateTerminationProtection

<p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTerminationProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTerminationProtectionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTerminationProtectionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateTerminationProtectionRequest();
    $request->action = POSTUpdateTerminationProtectionActionEnum::UPDATE_TERMINATION_PROTECTION;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTUpdateTerminationProtectionVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->postUpdateTerminationProtection($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postValidateTemplate

Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTValidateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTValidateTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTValidateTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTValidateTemplateRequest();
    $request->action = POSTValidateTemplateActionEnum::VALIDATE_TEMPLATE;
    $request->requestBody = 'repellat';
    $request->version = POSTValidateTemplateVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->postValidateTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
