# SDK

## Overview

<fullname>Amazon Simple Workflow Service</fullname> <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a <i>task</i> represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application.</p> <p>Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state.</p> <p>This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the <i> <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a> </i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/swf/>
### Available Operations

* [countClosedWorkflowExecutions](#countclosedworkflowexecutions) - <p>Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [countOpenWorkflowExecutions](#countopenworkflowexecutions) - <p>Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [countPendingActivityTasks](#countpendingactivitytasks) - <p>Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [countPendingDecisionTasks](#countpendingdecisiontasks) - <p>Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [deprecateActivityType](#deprecateactivitytype) - <p>Deprecates the specified <i>activity type</i>. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [deprecateDomain](#deprecatedomain) - <p>Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [deprecateWorkflowType](#deprecateworkflowtype) - <p>Deprecates the specified <i>workflow type</i>. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [describeActivityType](#describeactivitytype) - <p>Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [describeDomain](#describedomain) - <p>Returns information about the specified domain, including description and status.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [describeWorkflowExecution](#describeworkflowexecution) - <p>Returns information about the specified workflow execution including its type and some statistics.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [describeWorkflowType](#describeworkflowtype) - <p>Returns information about the specified <i>workflow type</i>. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [getWorkflowExecutionHistory](#getworkflowexecutionhistory) - <p>Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [listActivityTypes](#listactivitytypes) - <p>Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [listClosedWorkflowExecutions](#listclosedworkflowexecutions) - <p>Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [listDomains](#listdomains) - <p>Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains. The element must be set to <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is the account ID, with no dashes.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [listOpenWorkflowExecutions](#listopenworkflowexecutions) - <p>Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [listTagsForResource](#listtagsforresource) - List tags for a given domain.
* [listWorkflowTypes](#listworkflowtypes) - <p>Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [pollForActivityTask](#pollforactivitytask) - <p>Used by workers to get an <a>ActivityTask</a> from the specified activity <code>taskList</code>. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.</p> <important> <p>Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [pollForDecisionTask](#pollfordecisiontask) - <p>Used by deciders to get a <a>DecisionTask</a> from the specified decision <code>taskList</code>. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task.</p> <p>This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string.</p> <important> <p>Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout).</p> </important> <important> <p>Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the <code>nextPageToken</code> returned by the initial call. Note that you do <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code> again.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [recordActivityTaskHeartbeat](#recordactivitytaskheartbeat) - <p>Used by activity workers to report to the service that the <a>ActivityTask</a> represented by the specified <code>taskToken</code> is still making progress. The worker can also specify details of the progress, for example percent complete, using the <code>details</code> parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned by the service is set to <code>true</code>.</p> <p>This action resets the <code>taskHeartbeatTimeout</code> clock. The <code>taskHeartbeatTimeout</code> is specified in <a>RegisterActivityType</a>.</p> <p>This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a <code>ActivityTaskTimedOut</code> event that contains the information from the last heartbeat generated by the activity worker.</p> <note> <p>The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration of an activity task, regardless of the number of <a>RecordActivityTaskHeartbeat</a> requests received. The <code>taskStartToCloseTimeout</code> is also specified in <a>RegisterActivityType</a>.</p> </note> <note> <p>This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.</p> </note> <important> <p>If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is being attempted. If the worker can cancel the activity, it should respond with <a>RespondActivityTaskCanceled</a>. Otherwise, it should ignore the cancellation request.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [registerActivityType](#registeractivitytype) - <p>Registers a new <i>activity type</i> along with its configuration settings in the specified domain.</p> <important> <p>A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [registerDomain](#registerdomain) - <p>Registers a new domain.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [registerWorkflowType](#registerworkflowtype) - <p>Registers a new <i>workflow type</i> and its configuration settings in the specified domain.</p> <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p> <important> <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [requestCancelWorkflowExecution](#requestcancelworkflowexecution) - <p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> <note> <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.</p> </note> <note> <p>Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of <a>TerminateWorkflowExecution</a> when possible.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [respondActivityTaskCanceled](#respondactivitytaskcanceled) - <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can be provided using the <code>details</code> argument.</p> <p>These <code>details</code> (if provided) appear in the <code>ActivityTaskCanceled</code> event added to the workflow history.</p> <important> <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the activity can be safely undone or abandoned.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [respondActivityTaskCompleted](#respondactivitytaskcompleted) - <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided). The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the workflow history.</p> <important> <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call <a>RespondActivityTaskCanceled</a>.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [respondActivityTaskFailed](#respondactivitytaskfailed) - <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code> event added to the workflow history.</p> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [respondDecisionTaskCompleted](#responddecisiontaskcompleted) - <p>Used by deciders to tell the service that the <a>DecisionTask</a> identified by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument specifies the list of decisions made while processing the task.</p> <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The <code>executionContext</code> specified is attached to the event in the workflow execution history.</p> <p> <b>Access Control</b> </p> <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it can express permissions for the list of decisions in the <code>decisions</code> parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [signalWorkflowExecution](#signalworkflowexecution) - <p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).</p> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>If the specified workflow execution isn't open, this method fails with <code>UnknownResource</code>.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [startWorkflowExecution](#startworkflowexecution) - <p>Starts an execution of the workflow type in the specified domain using the provided <code>workflowId</code> and input data.</p> <p>This action returns the newly started workflow execution.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p> </li> <li> <p> <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p> </li> <li> <p> <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p> </li> <li> <p> <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p> </li> <li> <p> <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p> </li> <li> <p> <code>taskList</code>: String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [tagResource](#tagresource) - <p>Add a tag to a Amazon SWF domain.</p> <note> <p>Amazon SWF supports a maximum of 50 tags per resource.</p> </note>
* [terminateWorkflowExecution](#terminateworkflowexecution) - <p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.</p> <important> <p>If the identified workflow execution was in progress, it is terminated immediately.</p> </important> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>You should consider using <a>RequestCancelWorkflowExecution</a> action instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [undeprecateActivityType](#undeprecateactivitytype) - <p>Undeprecates a previously deprecated <i>activity type</i>. After an activity type has been undeprecated, you can create new tasks of that activity type.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [undeprecateDomain](#undeprecatedomain) - <p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [undeprecateWorkflowType](#undeprecateworkflowtype) - <p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has been undeprecated, you can create new executions of that type. </p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
* [untagResource](#untagresource) - Remove a tag from a Amazon SWF domain.

## countClosedWorkflowExecutions

<p>Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsRequest;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsResponse;
import org.openapis.openapi.models.operations.CountClosedWorkflowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloseStatusEnum;
import org.openapis.openapi.models.shared.CloseStatusFilter;
import org.openapis.openapi.models.shared.CountClosedWorkflowExecutionsInput;
import org.openapis.openapi.models.shared.ExecutionTimeFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.WorkflowExecutionFilter;
import org.openapis.openapi.models.shared.WorkflowTypeFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CountClosedWorkflowExecutionsRequest req = new CountClosedWorkflowExecutionsRequest(                new CountClosedWorkflowExecutionsInput("iusto") {{
                                closeStatusFilter = new CloseStatusFilter(CloseStatusEnum.TERMINATED);;
                                closeTimeFilter = new ExecutionTimeFilter(OffsetDateTime.parse("2022-01-28T03:46:24.500Z")) {{
                                    latestDate = OffsetDateTime.parse("2022-10-15T05:10:19.629Z");
                                }};;
                                executionFilter = new WorkflowExecutionFilter("quis");;
                                startTimeFilter = new ExecutionTimeFilter(OffsetDateTime.parse("2022-05-09T10:00:51.349Z")) {{
                                    latestDate = OffsetDateTime.parse("2022-08-19T14:12:14.246Z");
                                }};;
                                tagFilter = new TagFilter("repellendus");;
                                typeFilter = new WorkflowTypeFilter("sapiente") {{
                                    version = "quo";
                                }};;
                            }};, CountClosedWorkflowExecutionsXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            CountClosedWorkflowExecutionsResponse res = sdk.sdk.countClosedWorkflowExecutions(req);

            if (res.workflowExecutionCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countOpenWorkflowExecutions

<p>Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountOpenWorkflowExecutionsRequest;
import org.openapis.openapi.models.operations.CountOpenWorkflowExecutionsResponse;
import org.openapis.openapi.models.operations.CountOpenWorkflowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CountOpenWorkflowExecutionsInput;
import org.openapis.openapi.models.shared.ExecutionTimeFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.WorkflowExecutionFilter;
import org.openapis.openapi.models.shared.WorkflowTypeFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CountOpenWorkflowExecutionsRequest req = new CountOpenWorkflowExecutionsRequest(                new CountOpenWorkflowExecutionsInput("totam",                 new ExecutionTimeFilter(OffsetDateTime.parse("2020-12-18T15:02:44.758Z")) {{
                                                latestDate = OffsetDateTime.parse("2022-04-12T23:15:28.420Z");
                                            }};) {{
                                executionFilter = new WorkflowExecutionFilter("officia");;
                                tagFilter = new TagFilter("occaecati");;
                                typeFilter = new WorkflowTypeFilter("fugit") {{
                                    version = "deleniti";
                                }};;
                            }};, CountOpenWorkflowExecutionsXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_COUNT_OPEN_WORKFLOW_EXECUTIONS) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            CountOpenWorkflowExecutionsResponse res = sdk.sdk.countOpenWorkflowExecutions(req);

            if (res.workflowExecutionCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countPendingActivityTasks

<p>Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountPendingActivityTasksRequest;
import org.openapis.openapi.models.operations.CountPendingActivityTasksResponse;
import org.openapis.openapi.models.operations.CountPendingActivityTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.CountPendingActivityTasksInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CountPendingActivityTasksRequest req = new CountPendingActivityTasksRequest(                new CountPendingActivityTasksInput("impedit",                 new TaskList("cum"););, CountPendingActivityTasksXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_ACTIVITY_TASKS) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CountPendingActivityTasksResponse res = sdk.sdk.countPendingActivityTasks(req);

            if (res.pendingTaskCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countPendingDecisionTasks

<p>Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountPendingDecisionTasksRequest;
import org.openapis.openapi.models.operations.CountPendingDecisionTasksResponse;
import org.openapis.openapi.models.operations.CountPendingDecisionTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.CountPendingDecisionTasksInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CountPendingDecisionTasksRequest req = new CountPendingDecisionTasksRequest(                new CountPendingDecisionTasksInput("iste",                 new TaskList("dolor"););, CountPendingDecisionTasksXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_DECISION_TASKS) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            CountPendingDecisionTasksResponse res = sdk.sdk.countPendingDecisionTasks(req);

            if (res.pendingTaskCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecateActivityType

<p>Deprecates the specified <i>activity type</i>. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecateActivityTypeRequest;
import org.openapis.openapi.models.operations.DeprecateActivityTypeResponse;
import org.openapis.openapi.models.operations.DeprecateActivityTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivityType;
import org.openapis.openapi.models.shared.DeprecateActivityTypeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeprecateActivityTypeRequest req = new DeprecateActivityTypeRequest(                new DeprecateActivityTypeInput(                new ActivityType("iure", "saepe");, "quidem");, DeprecateActivityTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_ACTIVITY_TYPE) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            DeprecateActivityTypeResponse res = sdk.sdk.deprecateActivityType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecateDomain

<p>Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecateDomainRequest;
import org.openapis.openapi.models.operations.DeprecateDomainResponse;
import org.openapis.openapi.models.operations.DeprecateDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeprecateDomainInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeprecateDomainRequest req = new DeprecateDomainRequest(                new DeprecateDomainInput("corporis");, DeprecateDomainXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_DOMAIN) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "enim";
                xAmzDate = "omnis";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeprecateDomainResponse res = sdk.sdk.deprecateDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecateWorkflowType

<p>Deprecates the specified <i>workflow type</i>. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecateWorkflowTypeRequest;
import org.openapis.openapi.models.operations.DeprecateWorkflowTypeResponse;
import org.openapis.openapi.models.operations.DeprecateWorkflowTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeprecateWorkflowTypeInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkflowType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeprecateWorkflowTypeRequest req = new DeprecateWorkflowTypeRequest(                new DeprecateWorkflowTypeInput("iure",                 new WorkflowType("culpa", "doloribus"););, DeprecateWorkflowTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_WORKFLOW_TYPE) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            DeprecateWorkflowTypeResponse res = sdk.sdk.deprecateWorkflowType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeActivityType

<p>Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeActivityTypeRequest;
import org.openapis.openapi.models.operations.DescribeActivityTypeResponse;
import org.openapis.openapi.models.operations.DescribeActivityTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivityType;
import org.openapis.openapi.models.shared.DescribeActivityTypeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeActivityTypeRequest req = new DescribeActivityTypeRequest(                new DescribeActivityTypeInput(                new ActivityType("occaecati", "numquam");, "commodi");, DescribeActivityTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_ACTIVITY_TYPE) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            DescribeActivityTypeResponse res = sdk.sdk.describeActivityType(req);

            if (res.activityTypeDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDomain

<p>Returns information about the specified domain, including description and status.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDomainRequest;
import org.openapis.openapi.models.operations.DescribeDomainResponse;
import org.openapis.openapi.models.operations.DescribeDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDomainInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDomainRequest req = new DescribeDomainRequest(                new DescribeDomainInput("animi");, DescribeDomainXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_DOMAIN) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            DescribeDomainResponse res = sdk.sdk.describeDomain(req);

            if (res.domainDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkflowExecution

<p>Returns information about the specified workflow execution including its type and some statistics.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkflowExecutionRequest;
import org.openapis.openapi.models.operations.DescribeWorkflowExecutionResponse;
import org.openapis.openapi.models.operations.DescribeWorkflowExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkflowExecutionInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkflowExecution;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkflowExecutionRequest req = new DescribeWorkflowExecutionRequest(                new DescribeWorkflowExecutionInput("aut",                 new WorkflowExecution("quasi", "error"););, DescribeWorkflowExecutionXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_EXECUTION) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            DescribeWorkflowExecutionResponse res = sdk.sdk.describeWorkflowExecution(req);

            if (res.workflowExecutionDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkflowType

<p>Returns information about the specified <i>workflow type</i>. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkflowTypeRequest;
import org.openapis.openapi.models.operations.DescribeWorkflowTypeResponse;
import org.openapis.openapi.models.operations.DescribeWorkflowTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkflowTypeInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkflowType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkflowTypeRequest req = new DescribeWorkflowTypeRequest(                new DescribeWorkflowTypeInput("voluptatibus",                 new WorkflowType("ipsa", "omnis"););, DescribeWorkflowTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_TYPE) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            DescribeWorkflowTypeResponse res = sdk.sdk.describeWorkflowType(req);

            if (res.workflowTypeDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflowExecutionHistory

<p>Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowExecutionHistoryRequest;
import org.openapis.openapi.models.operations.GetWorkflowExecutionHistoryResponse;
import org.openapis.openapi.models.operations.GetWorkflowExecutionHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetWorkflowExecutionHistoryInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkflowExecution;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowExecutionHistoryRequest req = new GetWorkflowExecutionHistoryRequest(                new GetWorkflowExecutionHistoryInput("corporis",                 new WorkflowExecution("dolore", "iusto");) {{
                                maximumPageSize = 118727L;
                                nextPageToken = "harum";
                                reverseOrder = false;
                            }};, GetWorkflowExecutionHistoryXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_GET_WORKFLOW_EXECUTION_HISTORY) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
                maximumPageSize = "molestias";
                nextPageToken = "excepturi";
            }};            

            GetWorkflowExecutionHistoryResponse res = sdk.sdk.getWorkflowExecutionHistory(req);

            if (res.history != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActivityTypes

<p>Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActivityTypesRequest;
import org.openapis.openapi.models.operations.ListActivityTypesResponse;
import org.openapis.openapi.models.operations.ListActivityTypesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListActivityTypesInput;
import org.openapis.openapi.models.shared.RegistrationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListActivityTypesRequest req = new ListActivityTypesRequest(                new ListActivityTypesInput("modi", RegistrationStatusEnum.DEPRECATED) {{
                                maximumPageSize = 523248L;
                                name = "Carl Waelchi DVM";
                                nextPageToken = "incidunt";
                                reverseOrder = false;
                            }};, ListActivityTypesXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_LIST_ACTIVITY_TYPES) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
                maximumPageSize = "quibusdam";
                nextPageToken = "labore";
            }};            

            ListActivityTypesResponse res = sdk.sdk.listActivityTypes(req);

            if (res.activityTypeInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClosedWorkflowExecutions

<p>Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClosedWorkflowExecutionsRequest;
import org.openapis.openapi.models.operations.ListClosedWorkflowExecutionsResponse;
import org.openapis.openapi.models.operations.ListClosedWorkflowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloseStatusEnum;
import org.openapis.openapi.models.shared.CloseStatusFilter;
import org.openapis.openapi.models.shared.ExecutionTimeFilter;
import org.openapis.openapi.models.shared.ListClosedWorkflowExecutionsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.WorkflowExecutionFilter;
import org.openapis.openapi.models.shared.WorkflowTypeFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClosedWorkflowExecutionsRequest req = new ListClosedWorkflowExecutionsRequest(                new ListClosedWorkflowExecutionsInput("qui") {{
                                closeStatusFilter = new CloseStatusFilter(CloseStatusEnum.CANCELED);;
                                closeTimeFilter = new ExecutionTimeFilter(OffsetDateTime.parse("2021-11-23T10:34:02.904Z")) {{
                                    latestDate = OffsetDateTime.parse("2022-11-01T19:07:16.800Z");
                                }};;
                                executionFilter = new WorkflowExecutionFilter("assumenda");;
                                maximumPageSize = 369808L;
                                nextPageToken = "alias";
                                reverseOrder = false;
                                startTimeFilter = new ExecutionTimeFilter(OffsetDateTime.parse("2022-04-28T14:19:37.294Z")) {{
                                    latestDate = OffsetDateTime.parse("2022-06-17T21:27:36.672Z");
                                }};;
                                tagFilter = new TagFilter("facilis");;
                                typeFilter = new WorkflowTypeFilter("tempore") {{
                                    version = "labore";
                                }};;
                            }};, ListClosedWorkflowExecutionsXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_LIST_CLOSED_WORKFLOW_EXECUTIONS) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "eum";
                xAmzCredential = "non";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "provident";
                maximumPageSize = "necessitatibus";
                nextPageToken = "sint";
            }};            

            ListClosedWorkflowExecutionsResponse res = sdk.sdk.listClosedWorkflowExecutions(req);

            if (res.workflowExecutionInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomains

<p>Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains. The element must be set to <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is the account ID, with no dashes.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainsRequest;
import org.openapis.openapi.models.operations.ListDomainsResponse;
import org.openapis.openapi.models.operations.ListDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDomainsInput;
import org.openapis.openapi.models.shared.RegistrationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainsRequest req = new ListDomainsRequest(                new ListDomainsInput(RegistrationStatusEnum.REGISTERED) {{
                                maximumPageSize = 891555L;
                                nextPageToken = "a";
                                reverseOrder = false;
                            }};, ListDomainsXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_LIST_DOMAINS) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "in";
                xAmzCredential = "in";
                xAmzDate = "illum";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "dicta";
                maximumPageSize = "magnam";
                nextPageToken = "cumque";
            }};            

            ListDomainsResponse res = sdk.sdk.listDomains(req);

            if (res.domainInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOpenWorkflowExecutions

<p>Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOpenWorkflowExecutionsRequest;
import org.openapis.openapi.models.operations.ListOpenWorkflowExecutionsResponse;
import org.openapis.openapi.models.operations.ListOpenWorkflowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecutionTimeFilter;
import org.openapis.openapi.models.shared.ListOpenWorkflowExecutionsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.WorkflowExecutionFilter;
import org.openapis.openapi.models.shared.WorkflowTypeFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOpenWorkflowExecutionsRequest req = new ListOpenWorkflowExecutionsRequest(                new ListOpenWorkflowExecutionsInput("ea",                 new ExecutionTimeFilter(OffsetDateTime.parse("2022-04-29T11:09:12.937Z")) {{
                                                latestDate = OffsetDateTime.parse("2022-04-02T11:21:13.260Z");
                                            }};) {{
                                executionFilter = new WorkflowExecutionFilter("occaecati");;
                                maximumPageSize = 313218L;
                                nextPageToken = "accusamus";
                                reverseOrder = false;
                                tagFilter = new TagFilter("delectus");;
                                typeFilter = new WorkflowTypeFilter("quidem") {{
                                    version = "provident";
                                }};;
                            }};, ListOpenWorkflowExecutionsXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_LIST_OPEN_WORKFLOW_EXECUTIONS) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
                maximumPageSize = "nisi";
                nextPageToken = "vel";
            }};            

            ListOpenWorkflowExecutionsResponse res = sdk.sdk.listOpenWorkflowExecutions(req);

            if (res.workflowExecutionInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List tags for a given domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("omnis");, ListTagsForResourceXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflowTypes

<p>Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowTypesRequest;
import org.openapis.openapi.models.operations.ListWorkflowTypesResponse;
import org.openapis.openapi.models.operations.ListWorkflowTypesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWorkflowTypesInput;
import org.openapis.openapi.models.shared.RegistrationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowTypesRequest req = new ListWorkflowTypesRequest(                new ListWorkflowTypesInput("suscipit", RegistrationStatusEnum.DEPRECATED) {{
                                maximumPageSize = 749170L;
                                name = "Mrs. Meghan Collins V";
                                nextPageToken = "ullam";
                                reverseOrder = false;
                            }};, ListWorkflowTypesXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_LIST_WORKFLOW_TYPES) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
                maximumPageSize = "ad";
                nextPageToken = "eum";
            }};            

            ListWorkflowTypesResponse res = sdk.sdk.listWorkflowTypes(req);

            if (res.workflowTypeInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pollForActivityTask

<p>Used by workers to get an <a>ActivityTask</a> from the specified activity <code>taskList</code>. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.</p> <important> <p>Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PollForActivityTaskRequest;
import org.openapis.openapi.models.operations.PollForActivityTaskResponse;
import org.openapis.openapi.models.operations.PollForActivityTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.PollForActivityTaskInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PollForActivityTaskRequest req = new PollForActivityTaskRequest(                new PollForActivityTaskInput("necessitatibus",                 new TaskList("odit");) {{
                                identity = "nemo";
                            }};, PollForActivityTaskXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_ACTIVITY_TASK) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            PollForActivityTaskResponse res = sdk.sdk.pollForActivityTask(req);

            if (res.activityTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pollForDecisionTask

<p>Used by deciders to get a <a>DecisionTask</a> from the specified decision <code>taskList</code>. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task.</p> <p>This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string.</p> <important> <p>Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout).</p> </important> <important> <p>Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the <code>nextPageToken</code> returned by the initial call. Note that you do <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code> again.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PollForDecisionTaskRequest;
import org.openapis.openapi.models.operations.PollForDecisionTaskResponse;
import org.openapis.openapi.models.operations.PollForDecisionTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.PollForDecisionTaskInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PollForDecisionTaskRequest req = new PollForDecisionTaskRequest(                new PollForDecisionTaskInput("in",                 new TaskList("architecto");) {{
                                identity = "architecto";
                                maximumPageSize = 919483L;
                                nextPageToken = "ullam";
                                reverseOrder = false;
                            }};, PollForDecisionTaskXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_DECISION_TASK) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
                maximumPageSize = "accusantium";
                nextPageToken = "consequuntur";
            }};            

            PollForDecisionTaskResponse res = sdk.sdk.pollForDecisionTask(req);

            if (res.decisionTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recordActivityTaskHeartbeat

<p>Used by activity workers to report to the service that the <a>ActivityTask</a> represented by the specified <code>taskToken</code> is still making progress. The worker can also specify details of the progress, for example percent complete, using the <code>details</code> parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned by the service is set to <code>true</code>.</p> <p>This action resets the <code>taskHeartbeatTimeout</code> clock. The <code>taskHeartbeatTimeout</code> is specified in <a>RegisterActivityType</a>.</p> <p>This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a <code>ActivityTaskTimedOut</code> event that contains the information from the last heartbeat generated by the activity worker.</p> <note> <p>The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration of an activity task, regardless of the number of <a>RecordActivityTaskHeartbeat</a> requests received. The <code>taskStartToCloseTimeout</code> is also specified in <a>RegisterActivityType</a>.</p> </note> <note> <p>This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.</p> </note> <important> <p>If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is being attempted. If the worker can cancel the activity, it should respond with <a>RespondActivityTaskCanceled</a>. Otherwise, it should ignore the cancellation request.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecordActivityTaskHeartbeatRequest;
import org.openapis.openapi.models.operations.RecordActivityTaskHeartbeatResponse;
import org.openapis.openapi.models.operations.RecordActivityTaskHeartbeatXAmzTargetEnum;
import org.openapis.openapi.models.shared.RecordActivityTaskHeartbeatInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RecordActivityTaskHeartbeatRequest req = new RecordActivityTaskHeartbeatRequest(                new RecordActivityTaskHeartbeatInput("natus") {{
                                details = "magni";
                            }};, RecordActivityTaskHeartbeatXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_RECORD_ACTIVITY_TASK_HEARTBEAT) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            RecordActivityTaskHeartbeatResponse res = sdk.sdk.recordActivityTaskHeartbeat(req);

            if (res.activityTaskStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerActivityType

<p>Registers a new <i>activity type</i> along with its configuration settings in the specified domain.</p> <important> <p>A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterActivityTypeRequest;
import org.openapis.openapi.models.operations.RegisterActivityTypeResponse;
import org.openapis.openapi.models.operations.RegisterActivityTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterActivityTypeInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterActivityTypeRequest req = new RegisterActivityTypeRequest(                new RegisterActivityTypeInput("ea", "accusantium", "ab") {{
                                defaultTaskHeartbeatTimeout = "maiores";
                                defaultTaskList = new TaskList("quidem");;
                                defaultTaskPriority = "ipsam";
                                defaultTaskScheduleToCloseTimeout = "voluptate";
                                defaultTaskScheduleToStartTimeout = "autem";
                                defaultTaskStartToCloseTimeout = "nam";
                                description = "eaque";
                            }};, RegisterActivityTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_REGISTER_ACTIVITY_TYPE) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            RegisterActivityTypeResponse res = sdk.sdk.registerActivityType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerDomain

<p>Registers a new domain.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDomainRequest;
import org.openapis.openapi.models.operations.RegisterDomainResponse;
import org.openapis.openapi.models.operations.RegisterDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterDomainInput;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterDomainRequest req = new RegisterDomainRequest(                new RegisterDomainInput("corporis", "hic") {{
                                description = "libero";
                                tags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("totam") {{
                                        key = "dolores";
                                        value = "quis";
                                    }}),
                                    add(new ResourceTag("quis") {{
                                        key = "dignissimos";
                                        value = "eaque";
                                    }}),
                                    add(new ResourceTag("perferendis") {{
                                        key = "nesciunt";
                                        value = "eos";
                                    }}),
                                }};
                            }};, RegisterDomainXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_REGISTER_DOMAIN) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quam";
                xAmzDate = "dolor";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "hic";
            }};            

            RegisterDomainResponse res = sdk.sdk.registerDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerWorkflowType

<p>Registers a new <i>workflow type</i> and its configuration settings in the specified domain.</p> <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p> <important> <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterWorkflowTypeRequest;
import org.openapis.openapi.models.operations.RegisterWorkflowTypeResponse;
import org.openapis.openapi.models.operations.RegisterWorkflowTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChildPolicyEnum;
import org.openapis.openapi.models.shared.RegisterWorkflowTypeInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterWorkflowTypeRequest req = new RegisterWorkflowTypeRequest(                new RegisterWorkflowTypeInput("omnis", "facilis", "perspiciatis") {{
                                defaultChildPolicy = ChildPolicyEnum.TERMINATE;
                                defaultExecutionStartToCloseTimeout = "porro";
                                defaultLambdaRole = "consequuntur";
                                defaultTaskList = new TaskList("blanditiis");;
                                defaultTaskPriority = "error";
                                defaultTaskStartToCloseTimeout = "eaque";
                                description = "occaecati";
                            }};, RegisterWorkflowTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_REGISTER_WORKFLOW_TYPE) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            RegisterWorkflowTypeResponse res = sdk.sdk.registerWorkflowType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestCancelWorkflowExecution

<p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> <note> <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.</p> </note> <note> <p>Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of <a>TerminateWorkflowExecution</a> when possible.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestCancelWorkflowExecutionRequest;
import org.openapis.openapi.models.operations.RequestCancelWorkflowExecutionResponse;
import org.openapis.openapi.models.operations.RequestCancelWorkflowExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.RequestCancelWorkflowExecutionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestCancelWorkflowExecutionRequest req = new RequestCancelWorkflowExecutionRequest(                new RequestCancelWorkflowExecutionInput("pariatur", "provident") {{
                                runId = "nobis";
                            }};, RequestCancelWorkflowExecutionXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_REQUEST_CANCEL_WORKFLOW_EXECUTION) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            RequestCancelWorkflowExecutionResponse res = sdk.sdk.requestCancelWorkflowExecution(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## respondActivityTaskCanceled

<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can be provided using the <code>details</code> argument.</p> <p>These <code>details</code> (if provided) appear in the <code>ActivityTaskCanceled</code> event added to the workflow history.</p> <important> <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the activity can be safely undone or abandoned.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RespondActivityTaskCanceledRequest;
import org.openapis.openapi.models.operations.RespondActivityTaskCanceledResponse;
import org.openapis.openapi.models.operations.RespondActivityTaskCanceledXAmzTargetEnum;
import org.openapis.openapi.models.shared.RespondActivityTaskCanceledInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RespondActivityTaskCanceledRequest req = new RespondActivityTaskCanceledRequest(                new RespondActivityTaskCanceledInput("qui") {{
                                details = "ipsum";
                            }};, RespondActivityTaskCanceledXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_CANCELED) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            RespondActivityTaskCanceledResponse res = sdk.sdk.respondActivityTaskCanceled(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## respondActivityTaskCompleted

<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided). The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the workflow history.</p> <important> <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call <a>RespondActivityTaskCanceled</a>.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RespondActivityTaskCompletedRequest;
import org.openapis.openapi.models.operations.RespondActivityTaskCompletedResponse;
import org.openapis.openapi.models.operations.RespondActivityTaskCompletedXAmzTargetEnum;
import org.openapis.openapi.models.shared.RespondActivityTaskCompletedInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RespondActivityTaskCompletedRequest req = new RespondActivityTaskCompletedRequest(                new RespondActivityTaskCompletedInput("numquam") {{
                                result = "veritatis";
                            }};, RespondActivityTaskCompletedXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_COMPLETED) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            RespondActivityTaskCompletedResponse res = sdk.sdk.respondActivityTaskCompleted(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## respondActivityTaskFailed

<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code> event added to the workflow history.</p> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RespondActivityTaskFailedRequest;
import org.openapis.openapi.models.operations.RespondActivityTaskFailedResponse;
import org.openapis.openapi.models.operations.RespondActivityTaskFailedXAmzTargetEnum;
import org.openapis.openapi.models.shared.RespondActivityTaskFailedInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RespondActivityTaskFailedRequest req = new RespondActivityTaskFailedRequest(                new RespondActivityTaskFailedInput("voluptas") {{
                                details = "natus";
                                reason = "eos";
                            }};, RespondActivityTaskFailedXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_FAILED) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            RespondActivityTaskFailedResponse res = sdk.sdk.respondActivityTaskFailed(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## respondDecisionTaskCompleted

<p>Used by deciders to tell the service that the <a>DecisionTask</a> identified by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument specifies the list of decisions made while processing the task.</p> <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The <code>executionContext</code> specified is attached to the event in the workflow execution history.</p> <p> <b>Access Control</b> </p> <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it can express permissions for the list of decisions in the <code>decisions</code> parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RespondDecisionTaskCompletedRequest;
import org.openapis.openapi.models.operations.RespondDecisionTaskCompletedResponse;
import org.openapis.openapi.models.operations.RespondDecisionTaskCompletedXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivityType;
import org.openapis.openapi.models.shared.CancelTimerDecisionAttributes;
import org.openapis.openapi.models.shared.CancelWorkflowExecutionDecisionAttributes;
import org.openapis.openapi.models.shared.ChildPolicyEnum;
import org.openapis.openapi.models.shared.CompleteWorkflowExecutionDecisionAttributes;
import org.openapis.openapi.models.shared.ContinueAsNewWorkflowExecutionDecisionAttributes;
import org.openapis.openapi.models.shared.Decision;
import org.openapis.openapi.models.shared.DecisionTypeEnum;
import org.openapis.openapi.models.shared.FailWorkflowExecutionDecisionAttributes;
import org.openapis.openapi.models.shared.RecordMarkerDecisionAttributes;
import org.openapis.openapi.models.shared.RequestCancelActivityTaskDecisionAttributes;
import org.openapis.openapi.models.shared.RequestCancelExternalWorkflowExecutionDecisionAttributes;
import org.openapis.openapi.models.shared.RespondDecisionTaskCompletedInput;
import org.openapis.openapi.models.shared.ScheduleActivityTaskDecisionAttributes;
import org.openapis.openapi.models.shared.ScheduleLambdaFunctionDecisionAttributes;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalExternalWorkflowExecutionDecisionAttributes;
import org.openapis.openapi.models.shared.StartChildWorkflowExecutionDecisionAttributes;
import org.openapis.openapi.models.shared.StartTimerDecisionAttributes;
import org.openapis.openapi.models.shared.TaskList;
import org.openapis.openapi.models.shared.WorkflowType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RespondDecisionTaskCompletedRequest req = new RespondDecisionTaskCompletedRequest(                new RespondDecisionTaskCompletedInput("dolorum") {{
                                decisions = new org.openapis.openapi.models.shared.Decision[]{{
                                    add(new Decision(DecisionTypeEnum.RECORD_MARKER) {{
                                        cancelTimerDecisionAttributes = new CancelTimerDecisionAttributes("necessitatibus") {{
                                            timerId = "omnis";
                                        }};
                                        cancelWorkflowExecutionDecisionAttributes = new CancelWorkflowExecutionDecisionAttributes() {{
                                            details = "distinctio";
                                        }};
                                        completeWorkflowExecutionDecisionAttributes = new CompleteWorkflowExecutionDecisionAttributes() {{
                                            result = "asperiores";
                                        }};
                                        continueAsNewWorkflowExecutionDecisionAttributes = new ContinueAsNewWorkflowExecutionDecisionAttributes() {{
                                            childPolicy = ChildPolicyEnum.REQUEST_CANCEL;
                                            executionStartToCloseTimeout = "ipsum";
                                            input = "voluptate";
                                            lambdaRole = "id";
                                            tagList = new String[]{{
                                                add("eius"),
                                                add("aspernatur"),
                                                add("perferendis"),
                                                add("amet"),
                                            }};
                                            taskList = new TaskList("deserunt") {{
                                                name = "Tomas Hammes";
                                            }};
                                            taskPriority = "provident";
                                            taskStartToCloseTimeout = "minima";
                                            workflowTypeVersion = "repellendus";
                                        }};
                                        decisionType = DecisionTypeEnum.RECORD_MARKER;
                                        failWorkflowExecutionDecisionAttributes = new FailWorkflowExecutionDecisionAttributes() {{
                                            details = "similique";
                                            reason = "alias";
                                        }};
                                        recordMarkerDecisionAttributes = new RecordMarkerDecisionAttributes("tempora") {{
                                            details = "at";
                                            markerName = "quaerat";
                                        }};
                                        requestCancelActivityTaskDecisionAttributes = new RequestCancelActivityTaskDecisionAttributes("quod") {{
                                            activityId = "vel";
                                        }};
                                        requestCancelExternalWorkflowExecutionDecisionAttributes = new RequestCancelExternalWorkflowExecutionDecisionAttributes("a") {{
                                            control = "officiis";
                                            runId = "qui";
                                            workflowId = "dolorum";
                                        }};
                                        scheduleActivityTaskDecisionAttributes = new ScheduleActivityTaskDecisionAttributes("deserunt",                 new ActivityType("quam", "ipsum");) {{
                                            activityId = "esse";
                                            activityType = new ActivityType("tempore", "accusamus") {{
                                                name = "Tyrone Emard";
                                                version = "amet";
                                            }};
                                            control = "numquam";
                                            heartbeatTimeout = "enim";
                                            input = "dolorem";
                                            scheduleToCloseTimeout = "sapiente";
                                            scheduleToStartTimeout = "totam";
                                            startToCloseTimeout = "nihil";
                                            taskList = new TaskList("libero") {{
                                                name = "Mamie Durgan";
                                            }};
                                            taskPriority = "voluptas";
                                        }};
                                        scheduleLambdaFunctionDecisionAttributes = new ScheduleLambdaFunctionDecisionAttributes("aperiam", "delectus") {{
                                            control = "incidunt";
                                            id = "29cdb1a8-422b-4b67-9d23-22715bf0cbb1";
                                            input = "saepe";
                                            name = "Carolyn Rohan";
                                            startToCloseTimeout = "cupiditate";
                                        }};
                                        signalExternalWorkflowExecutionDecisionAttributes = new SignalExternalWorkflowExecutionDecisionAttributes("architecto", "quae") {{
                                            control = "dolorem";
                                            input = "dolore";
                                            runId = "labore";
                                            signalName = "adipisci";
                                            workflowId = "dolorum";
                                        }};
                                        startChildWorkflowExecutionDecisionAttributes = new StartChildWorkflowExecutionDecisionAttributes("dignissimos",                 new WorkflowType("hic", "distinctio");) {{
                                            childPolicy = ChildPolicyEnum.TERMINATE;
                                            control = "quas";
                                            executionStartToCloseTimeout = "itaque";
                                            input = "consequatur";
                                            lambdaRole = "est";
                                            tagList = new String[]{{
                                                add("porro"),
                                                add("doloribus"),
                                                add("ut"),
                                                add("facilis"),
                                            }};
                                            taskList = new TaskList("occaecati") {{
                                                name = "Alan Bergnaum";
                                            }};
                                            taskPriority = "voluptatibus";
                                            taskStartToCloseTimeout = "quisquam";
                                            workflowId = "vero";
                                            workflowType = new WorkflowType("vero", "tenetur") {{
                                                name = "Tim Erdman";
                                                version = "consectetur";
                                            }};
                                        }};
                                        startTimerDecisionAttributes = new StartTimerDecisionAttributes("facilis", "vero") {{
                                            control = "quod";
                                            startToFireTimeout = "odio";
                                            timerId = "similique";
                                        }};
                                    }}),
                                    add(new Decision(DecisionTypeEnum.CANCEL_TIMER) {{
                                        cancelTimerDecisionAttributes = new CancelTimerDecisionAttributes("quibusdam") {{
                                            timerId = "dolore";
                                        }};
                                        cancelWorkflowExecutionDecisionAttributes = new CancelWorkflowExecutionDecisionAttributes() {{
                                            details = "illum";
                                        }};
                                        completeWorkflowExecutionDecisionAttributes = new CompleteWorkflowExecutionDecisionAttributes() {{
                                            result = "sequi";
                                        }};
                                        continueAsNewWorkflowExecutionDecisionAttributes = new ContinueAsNewWorkflowExecutionDecisionAttributes() {{
                                            childPolicy = ChildPolicyEnum.REQUEST_CANCEL;
                                            executionStartToCloseTimeout = "impedit";
                                            input = "aut";
                                            lambdaRole = "voluptatibus";
                                            tagList = new String[]{{
                                                add("nulla"),
                                                add("fugit"),
                                            }};
                                            taskList = new TaskList("ducimus") {{
                                                name = "Elijah Wyman";
                                            }};
                                            taskPriority = "alias";
                                            taskStartToCloseTimeout = "officia";
                                            workflowTypeVersion = "tempora";
                                        }};
                                        decisionType = DecisionTypeEnum.CANCEL_WORKFLOW_EXECUTION;
                                        failWorkflowExecutionDecisionAttributes = new FailWorkflowExecutionDecisionAttributes() {{
                                            details = "ea";
                                            reason = "aspernatur";
                                        }};
                                        recordMarkerDecisionAttributes = new RecordMarkerDecisionAttributes("magnam") {{
                                            details = "vel";
                                            markerName = "possimus";
                                        }};
                                        requestCancelActivityTaskDecisionAttributes = new RequestCancelActivityTaskDecisionAttributes("ex") {{
                                            activityId = "ratione";
                                        }};
                                        requestCancelExternalWorkflowExecutionDecisionAttributes = new RequestCancelExternalWorkflowExecutionDecisionAttributes("maiores") {{
                                            control = "laudantium";
                                            runId = "dicta";
                                            workflowId = "dolor";
                                        }};
                                        scheduleActivityTaskDecisionAttributes = new ScheduleActivityTaskDecisionAttributes("eaque",                 new ActivityType("a", "libero");) {{
                                            activityId = "quasi";
                                            activityType = new ActivityType("quisquam", "saepe") {{
                                                name = "Freda Marks";
                                                version = "sapiente";
                                            }};
                                            control = "ea";
                                            heartbeatTimeout = "impedit";
                                            input = "corporis";
                                            scheduleToCloseTimeout = "veniam";
                                            scheduleToStartTimeout = "aliquid";
                                            startToCloseTimeout = "inventore";
                                            taskList = new TaskList("aspernatur") {{
                                                name = "Rosemary Ryan";
                                            }};
                                            taskPriority = "minima";
                                        }};
                                        scheduleLambdaFunctionDecisionAttributes = new ScheduleLambdaFunctionDecisionAttributes("ut", "eum") {{
                                            control = "aut";
                                            id = "08c42e14-1aac-4366-88dd-6b1442907474";
                                            input = "esse";
                                            name = "Hilda Paucek";
                                            startToCloseTimeout = "fugiat";
                                        }};
                                        signalExternalWorkflowExecutionDecisionAttributes = new SignalExternalWorkflowExecutionDecisionAttributes("veritatis", "ipsa") {{
                                            control = "suscipit";
                                            input = "assumenda";
                                            runId = "eos";
                                            signalName = "praesentium";
                                            workflowId = "quisquam";
                                        }};
                                        startChildWorkflowExecutionDecisionAttributes = new StartChildWorkflowExecutionDecisionAttributes("totam",                 new WorkflowType("accusamus", "aliquam");) {{
                                            childPolicy = ChildPolicyEnum.REQUEST_CANCEL;
                                            control = "quidem";
                                            executionStartToCloseTimeout = "neque";
                                            input = "quo";
                                            lambdaRole = "illum";
                                            tagList = new String[]{{
                                                add("fuga"),
                                                add("eius"),
                                                add("eos"),
                                                add("voluptas"),
                                            }};
                                            taskList = new TaskList("ipsam") {{
                                                name = "Shelly Altenwerth";
                                            }};
                                            taskPriority = "aspernatur";
                                            taskStartToCloseTimeout = "sequi";
                                            workflowId = "quo";
                                            workflowType = new WorkflowType("inventore", "nihil") {{
                                                name = "Sophie Bayer";
                                                version = "dignissimos";
                                            }};
                                        }};
                                        startTimerDecisionAttributes = new StartTimerDecisionAttributes("sapiente", "dolores") {{
                                            control = "odio";
                                            startToFireTimeout = "occaecati";
                                            timerId = "commodi";
                                        }};
                                    }}),
                                    add(new Decision(DecisionTypeEnum.CANCEL_TIMER) {{
                                        cancelTimerDecisionAttributes = new CancelTimerDecisionAttributes("accusantium") {{
                                            timerId = "molestiae";
                                        }};
                                        cancelWorkflowExecutionDecisionAttributes = new CancelWorkflowExecutionDecisionAttributes() {{
                                            details = "porro";
                                        }};
                                        completeWorkflowExecutionDecisionAttributes = new CompleteWorkflowExecutionDecisionAttributes() {{
                                            result = "eum";
                                        }};
                                        continueAsNewWorkflowExecutionDecisionAttributes = new ContinueAsNewWorkflowExecutionDecisionAttributes() {{
                                            childPolicy = ChildPolicyEnum.REQUEST_CANCEL;
                                            executionStartToCloseTimeout = "praesentium";
                                            input = "consequuntur";
                                            lambdaRole = "deleniti";
                                            tagList = new String[]{{
                                                add("fuga"),
                                            }};
                                            taskList = new TaskList("nisi") {{
                                                name = "Randall Lindgren";
                                            }};
                                            taskPriority = "fugit";
                                            taskStartToCloseTimeout = "sapiente";
                                            workflowTypeVersion = "consequuntur";
                                        }};
                                        decisionType = DecisionTypeEnum.COMPLETE_WORKFLOW_EXECUTION;
                                        failWorkflowExecutionDecisionAttributes = new FailWorkflowExecutionDecisionAttributes() {{
                                            details = "explicabo";
                                            reason = "saepe";
                                        }};
                                        recordMarkerDecisionAttributes = new RecordMarkerDecisionAttributes("et") {{
                                            details = "occaecati";
                                            markerName = "atque";
                                        }};
                                        requestCancelActivityTaskDecisionAttributes = new RequestCancelActivityTaskDecisionAttributes("eveniet") {{
                                            activityId = "esse";
                                        }};
                                        requestCancelExternalWorkflowExecutionDecisionAttributes = new RequestCancelExternalWorkflowExecutionDecisionAttributes("quod") {{
                                            control = "accusamus";
                                            runId = "veritatis";
                                            workflowId = "esse";
                                        }};
                                        scheduleActivityTaskDecisionAttributes = new ScheduleActivityTaskDecisionAttributes("consectetur",                 new ActivityType("esse", "blanditiis");) {{
                                            activityId = "nam";
                                            activityType = new ActivityType("molestiae", "rerum") {{
                                                name = "Gene Botsford";
                                                version = "harum";
                                            }};
                                            control = "occaecati";
                                            heartbeatTimeout = "minima";
                                            input = "distinctio";
                                            scheduleToCloseTimeout = "eligendi";
                                            scheduleToStartTimeout = "sit";
                                            startToCloseTimeout = "culpa";
                                            taskList = new TaskList("quaerat") {{
                                                name = "Chad Runolfsson DDS";
                                            }};
                                            taskPriority = "sapiente";
                                        }};
                                        scheduleLambdaFunctionDecisionAttributes = new ScheduleLambdaFunctionDecisionAttributes("voluptatum", "qui") {{
                                            control = "provident";
                                            id = "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04";
                                            input = "sapiente";
                                            name = "Marion Kihn";
                                            startToCloseTimeout = "aut";
                                        }};
                                        signalExternalWorkflowExecutionDecisionAttributes = new SignalExternalWorkflowExecutionDecisionAttributes("architecto", "omnis") {{
                                            control = "quibusdam";
                                            input = "ex";
                                            runId = "deleniti";
                                            signalName = "itaque";
                                            workflowId = "dolorum";
                                        }};
                                        startChildWorkflowExecutionDecisionAttributes = new StartChildWorkflowExecutionDecisionAttributes("numquam",                 new WorkflowType("impedit", "explicabo");) {{
                                            childPolicy = ChildPolicyEnum.ABANDON;
                                            control = "quasi";
                                            executionStartToCloseTimeout = "at";
                                            input = "et";
                                            lambdaRole = "voluptate";
                                            tagList = new String[]{{
                                                add("minima"),
                                            }};
                                            taskList = new TaskList("accusantium") {{
                                                name = "Edith Ferry";
                                            }};
                                            taskPriority = "rem";
                                            taskStartToCloseTimeout = "aut";
                                            workflowId = "laudantium";
                                            workflowType = new WorkflowType("dolor", "occaecati") {{
                                                name = "Iris Bernhard";
                                                version = "voluptatem";
                                            }};
                                        }};
                                        startTimerDecisionAttributes = new StartTimerDecisionAttributes("dicta", "maiores") {{
                                            control = "voluptas";
                                            startToFireTimeout = "aut";
                                            timerId = "dignissimos";
                                        }};
                                    }}),
                                }};
                                executionContext = "velit";
                            }};, RespondDecisionTaskCompletedXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            RespondDecisionTaskCompletedResponse res = sdk.sdk.respondDecisionTaskCompleted(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signalWorkflowExecution

<p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).</p> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>If the specified workflow execution isn't open, this method fails with <code>UnknownResource</code>.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignalWorkflowExecutionRequest;
import org.openapis.openapi.models.operations.SignalWorkflowExecutionResponse;
import org.openapis.openapi.models.operations.SignalWorkflowExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignalWorkflowExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SignalWorkflowExecutionRequest req = new SignalWorkflowExecutionRequest(                new SignalWorkflowExecutionInput("officia", "maxime", "dignissimos") {{
                                input = "officia";
                                runId = "asperiores";
                            }};, SignalWorkflowExecutionXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_SIGNAL_WORKFLOW_EXECUTION) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quae";
                xAmzCredential = "quaerat";
                xAmzDate = "porro";
                xAmzSecurityToken = "quod";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "ab";
            }};            

            SignalWorkflowExecutionResponse res = sdk.sdk.signalWorkflowExecution(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startWorkflowExecution

<p>Starts an execution of the workflow type in the specified domain using the provided <code>workflowId</code> and input data.</p> <p>This action returns the newly started workflow execution.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p> </li> <li> <p> <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p> </li> <li> <p> <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p> </li> <li> <p> <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p> </li> <li> <p> <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p> </li> <li> <p> <code>taskList</code>: String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartWorkflowExecutionRequest;
import org.openapis.openapi.models.operations.StartWorkflowExecutionResponse;
import org.openapis.openapi.models.operations.StartWorkflowExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChildPolicyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartWorkflowExecutionInput;
import org.openapis.openapi.models.shared.TaskList;
import org.openapis.openapi.models.shared.WorkflowType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartWorkflowExecutionRequest req = new StartWorkflowExecutionRequest(                new StartWorkflowExecutionInput("fuga", "id",                 new WorkflowType("suscipit", "velit");) {{
                                childPolicy = ChildPolicyEnum.REQUEST_CANCEL;
                                executionStartToCloseTimeout = "est";
                                input = "recusandae";
                                lambdaRole = "totam";
                                tagList = new String[]{{
                                    add("vel"),
                                    add("ducimus"),
                                    add("quos"),
                                    add("vel"),
                                }};
                                taskList = new TaskList("labore");;
                                taskPriority = "possimus";
                                taskStartToCloseTimeout = "facilis";
                            }};, StartWorkflowExecutionXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_START_WORKFLOW_EXECUTION) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nemo";
            }};            

            StartWorkflowExecutionResponse res = sdk.sdk.startWorkflowExecution(req);

            if (res.run != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Add a tag to a Amazon SWF domain.</p> <note> <p>Amazon SWF supports a maximum of 50 tags per resource.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("aliquid",                 new org.openapis.openapi.models.shared.ResourceTag[]{{
                                                add(new ResourceTag("in") {{
                                                    key = "cum";
                                                    value = "consectetur";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "earum";
                xAmzCredential = "facere";
                xAmzDate = "numquam";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "reiciendis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateWorkflowExecution

<p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.</p> <important> <p>If the identified workflow execution was in progress, it is terminated immediately.</p> </important> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>You should consider using <a>RequestCancelWorkflowExecution</a> action instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateWorkflowExecutionRequest;
import org.openapis.openapi.models.operations.TerminateWorkflowExecutionResponse;
import org.openapis.openapi.models.operations.TerminateWorkflowExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChildPolicyEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateWorkflowExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateWorkflowExecutionRequest req = new TerminateWorkflowExecutionRequest(                new TerminateWorkflowExecutionInput("saepe", "necessitatibus") {{
                                childPolicy = ChildPolicyEnum.TERMINATE;
                                details = "sunt";
                                reason = "asperiores";
                                runId = "adipisci";
                            }};, TerminateWorkflowExecutionXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_TERMINATE_WORKFLOW_EXECUTION) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "amet";
                xAmzCredential = "beatae";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "a";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "consectetur";
            }};            

            TerminateWorkflowExecutionResponse res = sdk.sdk.terminateWorkflowExecution(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## undeprecateActivityType

<p>Undeprecates a previously deprecated <i>activity type</i>. After an activity type has been undeprecated, you can create new tasks of that activity type.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UndeprecateActivityTypeRequest;
import org.openapis.openapi.models.operations.UndeprecateActivityTypeResponse;
import org.openapis.openapi.models.operations.UndeprecateActivityTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivityType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UndeprecateActivityTypeInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UndeprecateActivityTypeRequest req = new UndeprecateActivityTypeRequest(                new UndeprecateActivityTypeInput(                new ActivityType("harum", "laboriosam");, "ipsa");, UndeprecateActivityTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_ACTIVITY_TYPE) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "libero";
                xAmzCredential = "vitae";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "similique";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "aspernatur";
            }};            

            UndeprecateActivityTypeResponse res = sdk.sdk.undeprecateActivityType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## undeprecateDomain

<p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UndeprecateDomainRequest;
import org.openapis.openapi.models.operations.UndeprecateDomainResponse;
import org.openapis.openapi.models.operations.UndeprecateDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UndeprecateDomainInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UndeprecateDomainRequest req = new UndeprecateDomainRequest(                new UndeprecateDomainInput("voluptas");, UndeprecateDomainXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_DOMAIN) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nobis";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "dolores";
            }};            

            UndeprecateDomainResponse res = sdk.sdk.undeprecateDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## undeprecateWorkflowType

<p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has been undeprecated, you can create new executions of that type. </p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UndeprecateWorkflowTypeRequest;
import org.openapis.openapi.models.operations.UndeprecateWorkflowTypeResponse;
import org.openapis.openapi.models.operations.UndeprecateWorkflowTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UndeprecateWorkflowTypeInput;
import org.openapis.openapi.models.shared.WorkflowType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UndeprecateWorkflowTypeRequest req = new UndeprecateWorkflowTypeRequest(                new UndeprecateWorkflowTypeInput("in",                 new WorkflowType("dolore", "aliquam"););, UndeprecateWorkflowTypeXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_WORKFLOW_TYPE) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ullam";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cum";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "quas";
            }};            

            UndeprecateWorkflowTypeResponse res = sdk.sdk.undeprecateWorkflowType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Remove a tag from a Amazon SWF domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("nesciunt",                 new String[]{{
                                                add("corrupti"),
                                                add("pariatur"),
                                                add("totam"),
                                            }});, UntagResourceXAmzTargetEnum.SIMPLE_WORKFLOW_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nobis";
                xAmzDate = "sit";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
