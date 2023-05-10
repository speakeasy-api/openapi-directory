# SDK

## Overview

<fullname>Step Functions</fullname> <p>Step Functions is a service that lets you coordinate the components of distributed applications and microservices using visual workflows.</p> <p>You can use Step Functions to build applications from individual components, each of which performs a discrete function, or <i>task</i>, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues.</p> <p>Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API. For more information about Step Functions, see the <i> <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a> </i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/states/>
### Available Operations

* [createActivity](#createactivity) - <p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency check is based on the activity <code>name</code>. If a following request has different <code>tags</code> values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* [createStateMachine](#createstatemachine) - <p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the Step Functions User Guide.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, <code>LoggingConfiguration</code> and <code>TracingConfiguration</code>. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>
* [deleteActivity](#deleteactivity) - Deletes an activity.
* [deleteStateMachine](#deletestatemachine) - <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. </p> <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>For <code>EXPRESS</code> state machines, the deletion will happen eventually (usually less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>
* [describeActivity](#describeactivity) - <p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* [describeExecution](#describeexecution) - <p>Provides all information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run ARN if the execution was dispatched by a Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machine executions unless they were dispatched by a Map Run.</p>
* [describeMapRun](#describemaprun) - Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.
* [describeStateMachine](#describestatemachine) - <p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. If the state machine ARN is a qualified state machine ARN, the response returned includes the <code>Map</code> state's label.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* [describeStateMachineForExecution](#describestatemachineforexecution) - <p>Provides information about a state machine's definition, its execution role ARN, and configuration. If an execution was dispatched by a Map Run, the Map Run is returned in the response. Additionally, the state machine returned will be the state machine associated with the Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* [getActivityTask](#getactivitytask) - <p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <note> <p>This API action isn't logged in CloudTrail.</p> </note> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>
* [getExecutionHistory](#getexecutionhistory) - <p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* [listActivities](#listactivities) - <p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* [listExecutions](#listexecutions) - <p>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN.</p> <p>Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* [listMapRuns](#listmapruns) - Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.
* [listStateMachines](#liststatemachines) - <p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* [listTagsForResource](#listtagsforresource) - <p>List tags for a given resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
* [sendTaskFailure](#sendtaskfailure) - Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> failed.
* [sendTaskHeartbeat](#sendtaskheartbeat) - <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval for heartbeats.</p> </note>
* [sendTaskSuccess](#sendtasksuccess) - Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> completed successfully.
* [startExecution](#startexecution) - <p>Starts a state machine execution. If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p> <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a <code>STANDARD</code> workflow, if <code>StartExecution</code> is called with the same name and input as a running execution, the call will succeed and return the same response as the original request. If the execution is closed or if the input is different, it will return a <code>400 ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p> <p> <code>StartExecution</code> is not idempotent for <code>EXPRESS</code> workflows. </p> </note>
* [startSyncExecution](#startsyncexecution) - <p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code> is not available for <code>STANDARD</code> workflows.</p> <note> <p> <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. </p> </note> <note> <p>This API action isn't logged in CloudTrail.</p> </note>
* [stopExecution](#stopexecution) - <p>Stops an execution.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* [tagResource](#tagresource) - <p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
* [untagResource](#untagresource) - Remove a tag from a Step Functions resource
* [updateMapRun](#updatemaprun) - Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.
* [updateStateMachine](#updatestatemachine) - <p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>All <code>StartExecution</code> calls within a few seconds will use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after calling <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>

## createActivity

<p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency check is based on the activity <code>name</code>. If a following request has different <code>tags</code> values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateActivityInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActivityRequest();
    $request->createActivityInput = new CreateActivityInput();
    $request->createActivityInput->name = 'Raquel Bednar';
    $request->createActivityInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = CreateActivityXAmzTargetEnum::AWS_STEP_FUNCTIONS_CREATE_ACTIVITY;

    $response = $sdk->sdk->createActivity($request);

    if ($response->createActivityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStateMachine

<p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the Step Functions User Guide.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, <code>LoggingConfiguration</code> and <code>TracingConfiguration</code>. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStateMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStateMachineInput;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsLogGroup;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TracingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StateMachineTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStateMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStateMachineRequest();
    $request->createStateMachineInput = new CreateStateMachineInput();
    $request->createStateMachineInput->definition = 'recusandae';
    $request->createStateMachineInput->loggingConfiguration = new LoggingConfiguration();
    $request->createStateMachineInput->loggingConfiguration->destinations = [
        new LogDestination(),
        new LogDestination(),
        new LogDestination(),
        new LogDestination(),
    ];
    $request->createStateMachineInput->loggingConfiguration->includeExecutionData = false;
    $request->createStateMachineInput->loggingConfiguration->level = LogLevelEnum::ALL;
    $request->createStateMachineInput->name = 'Mrs. Marie O'Connell';
    $request->createStateMachineInput->roleArn = 'sapiente';
    $request->createStateMachineInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createStateMachineInput->tracingConfiguration = new TracingConfiguration();
    $request->createStateMachineInput->tracingConfiguration->enabled = false;
    $request->createStateMachineInput->type = StateMachineTypeEnum::STANDARD;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = CreateStateMachineXAmzTargetEnum::AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE;

    $response = $sdk->sdk->createStateMachine($request);

    if ($response->createStateMachineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteActivity

Deletes an activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteActivityInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActivityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteActivityRequest();
    $request->deleteActivityInput = new DeleteActivityInput();
    $request->deleteActivityInput->activityArn = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = DeleteActivityXAmzTargetEnum::AWS_STEP_FUNCTIONS_DELETE_ACTIVITY;

    $response = $sdk->sdk->deleteActivity($request);

    if ($response->deleteActivityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStateMachine

<p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. </p> <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>For <code>EXPRESS</code> state machines, the deletion will happen eventually (usually less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStateMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStateMachineInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStateMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStateMachineRequest();
    $request->deleteStateMachineInput = new DeleteStateMachineInput();
    $request->deleteStateMachineInput->stateMachineArn = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteStateMachineXAmzTargetEnum::AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE;

    $response = $sdk->sdk->deleteStateMachine($request);

    if ($response->deleteStateMachineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeActivity

<p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeActivityInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActivityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeActivityRequest();
    $request->describeActivityInput = new DescribeActivityInput();
    $request->describeActivityInput->activityArn = 'qui';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DescribeActivityXAmzTargetEnum::AWS_STEP_FUNCTIONS_DESCRIBE_ACTIVITY;

    $response = $sdk->sdk->describeActivity($request);

    if ($response->describeActivityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExecution

<p>Provides all information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run ARN if the execution was dispatched by a Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machine executions unless they were dispatched by a Map Run.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExecutionRequest();
    $request->describeExecutionInput = new DescribeExecutionInput();
    $request->describeExecutionInput->executionArn = 'ad';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DescribeExecutionXAmzTargetEnum::AWS_STEP_FUNCTIONS_DESCRIBE_EXECUTION;

    $response = $sdk->sdk->describeExecution($request);

    if ($response->describeExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMapRun

Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMapRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMapRunInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMapRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMapRunRequest();
    $request->describeMapRunInput = new DescribeMapRunInput();
    $request->describeMapRunInput->mapRunArn = 'saepe';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DescribeMapRunXAmzTargetEnum::AWS_STEP_FUNCTIONS_DESCRIBE_MAP_RUN;

    $response = $sdk->sdk->describeMapRun($request);

    if ($response->describeMapRunOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStateMachine

<p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. If the state machine ARN is a qualified state machine ARN, the response returned includes the <code>Map</code> state's label.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStateMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStateMachineInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStateMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStateMachineRequest();
    $request->describeStateMachineInput = new DescribeStateMachineInput();
    $request->describeStateMachineInput->stateMachineArn = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeStateMachineXAmzTargetEnum::AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE;

    $response = $sdk->sdk->describeStateMachine($request);

    if ($response->describeStateMachineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStateMachineForExecution

<p>Provides information about a state machine's definition, its execution role ARN, and configuration. If an execution was dispatched by a Map Run, the Map Run is returned in the response. Additionally, the state machine returned will be the state machine associated with the Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStateMachineForExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStateMachineForExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStateMachineForExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStateMachineForExecutionRequest();
    $request->describeStateMachineForExecutionInput = new DescribeStateMachineForExecutionInput();
    $request->describeStateMachineForExecutionInput->executionArn = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeStateMachineForExecutionXAmzTargetEnum::AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION;

    $response = $sdk->sdk->describeStateMachineForExecution($request);

    if ($response->describeStateMachineForExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActivityTask

<p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <note> <p>This API action isn't logged in CloudTrail.</p> </note> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActivityTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetActivityTaskInput;
use \OpenAPI\OpenAPI\Models\Operations\GetActivityTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActivityTaskRequest();
    $request->getActivityTaskInput = new GetActivityTaskInput();
    $request->getActivityTaskInput->activityArn = 'accusantium';
    $request->getActivityTaskInput->workerName = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = GetActivityTaskXAmzTargetEnum::AWS_STEP_FUNCTIONS_GET_ACTIVITY_TASK;

    $response = $sdk->sdk->getActivityTask($request);

    if ($response->getActivityTaskOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExecutionHistory

<p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExecutionHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetExecutionHistoryInput;
use \OpenAPI\OpenAPI\Models\Operations\GetExecutionHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExecutionHistoryRequest();
    $request->getExecutionHistoryInput = new GetExecutionHistoryInput();
    $request->getExecutionHistoryInput->executionArn = 'consequuntur';
    $request->getExecutionHistoryInput->includeExecutionData = false;
    $request->getExecutionHistoryInput->maxResults = 995300;
    $request->getExecutionHistoryInput->nextToken = 'mollitia';
    $request->getExecutionHistoryInput->reverseOrder = false;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = GetExecutionHistoryXAmzTargetEnum::AWS_STEP_FUNCTIONS_GET_EXECUTION_HISTORY;
    $request->maxResults = 'quia';
    $request->nextToken = 'quis';

    $response = $sdk->sdk->getExecutionHistory($request);

    if ($response->getExecutionHistoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActivities

<p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListActivitiesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListActivitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActivitiesRequest();
    $request->listActivitiesInput = new ListActivitiesInput();
    $request->listActivitiesInput->maxResults = 110375;
    $request->listActivitiesInput->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListActivitiesXAmzTargetEnum::AWS_STEP_FUNCTIONS_LIST_ACTIVITIES;
    $request->maxResults = 'id';
    $request->nextToken = 'possimus';

    $response = $sdk->sdk->listActivities($request);

    if ($response->listActivitiesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExecutions

<p>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN.</p> <p>Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExecutionsInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExecutionsRequest();
    $request->listExecutionsInput = new ListExecutionsInput();
    $request->listExecutionsInput->mapRunArn = 'aut';
    $request->listExecutionsInput->maxResults = 97101;
    $request->listExecutionsInput->nextToken = 'error';
    $request->listExecutionsInput->stateMachineArn = 'temporibus';
    $request->listExecutionsInput->statusFilter = ExecutionStatusEnum::TIMED_OUT;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListExecutionsXAmzTargetEnum::AWS_STEP_FUNCTIONS_LIST_EXECUTIONS;
    $request->maxResults = 'ipsa';
    $request->nextToken = 'omnis';

    $response = $sdk->sdk->listExecutions($request);

    if ($response->listExecutionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMapRuns

Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMapRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMapRunsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListMapRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMapRunsRequest();
    $request->listMapRunsInput = new ListMapRunsInput();
    $request->listMapRunsInput->executionArn = 'voluptate';
    $request->listMapRunsInput->maxResults = 739264;
    $request->listMapRunsInput->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = ListMapRunsXAmzTargetEnum::AWS_STEP_FUNCTIONS_LIST_MAP_RUNS;
    $request->maxResults = 'iusto';
    $request->nextToken = 'dicta';

    $response = $sdk->sdk->listMapRuns($request);

    if ($response->listMapRunsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStateMachines

<p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStateMachinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStateMachinesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListStateMachinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStateMachinesRequest();
    $request->listStateMachinesInput = new ListStateMachinesInput();
    $request->listStateMachinesInput->maxResults = 688661;
    $request->listStateMachinesInput->nextToken = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = ListStateMachinesXAmzTargetEnum::AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES;
    $request->maxResults = 'excepturi';
    $request->nextToken = 'pariatur';

    $response = $sdk->sdk->listStateMachines($request);

    if ($response->listStateMachinesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>List tags for a given resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->resourceArn = 'modi';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_STEP_FUNCTIONS_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendTaskFailure

Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendTaskFailureRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendTaskFailureInput;
use \OpenAPI\OpenAPI\Models\Operations\SendTaskFailureXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTaskFailureRequest();
    $request->sendTaskFailureInput = new SendTaskFailureInput();
    $request->sendTaskFailureInput->cause = 'itaque';
    $request->sendTaskFailureInput->error = 'incidunt';
    $request->sendTaskFailureInput->taskToken = 'enim';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = SendTaskFailureXAmzTargetEnum::AWS_STEP_FUNCTIONS_SEND_TASK_FAILURE;

    $response = $sdk->sdk->sendTaskFailure($request);

    if ($response->sendTaskFailureOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendTaskHeartbeat

<p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval for heartbeats.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendTaskHeartbeatRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendTaskHeartbeatInput;
use \OpenAPI\OpenAPI\Models\Operations\SendTaskHeartbeatXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTaskHeartbeatRequest();
    $request->sendTaskHeartbeatInput = new SendTaskHeartbeatInput();
    $request->sendTaskHeartbeatInput->taskToken = 'labore';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = SendTaskHeartbeatXAmzTargetEnum::AWS_STEP_FUNCTIONS_SEND_TASK_HEARTBEAT;

    $response = $sdk->sdk->sendTaskHeartbeat($request);

    if ($response->sendTaskHeartbeatOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendTaskSuccess

Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> completed successfully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendTaskSuccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendTaskSuccessInput;
use \OpenAPI\OpenAPI\Models\Operations\SendTaskSuccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTaskSuccessRequest();
    $request->sendTaskSuccessInput = new SendTaskSuccessInput();
    $request->sendTaskSuccessInput->output = 'assumenda';
    $request->sendTaskSuccessInput->taskToken = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = SendTaskSuccessXAmzTargetEnum::AWS_STEP_FUNCTIONS_SEND_TASK_SUCCESS;

    $response = $sdk->sdk->sendTaskSuccess($request);

    if ($response->sendTaskSuccessOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startExecution

<p>Starts a state machine execution. If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p> <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a <code>STANDARD</code> workflow, if <code>StartExecution</code> is called with the same name and input as a running execution, the call will succeed and return the same response as the original request. If the execution is closed or if the input is different, it will return a <code>400 ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p> <p> <code>StartExecution</code> is not idempotent for <code>EXPRESS</code> workflows. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\StartExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartExecutionRequest();
    $request->startExecutionInput = new StartExecutionInput();
    $request->startExecutionInput->input = 'labore';
    $request->startExecutionInput->name = 'Andre Franey';
    $request->startExecutionInput->stateMachineArn = 'aliquid';
    $request->startExecutionInput->traceHeader = 'provident';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = StartExecutionXAmzTargetEnum::AWS_STEP_FUNCTIONS_START_EXECUTION;

    $response = $sdk->sdk->startExecution($request);

    if ($response->startExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSyncExecution

<p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code> is not available for <code>STANDARD</code> workflows.</p> <note> <p> <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. </p> </note> <note> <p>This API action isn't logged in CloudTrail.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSyncExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSyncExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\StartSyncExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSyncExecutionRequest();
    $request->startSyncExecutionInput = new StartSyncExecutionInput();
    $request->startSyncExecutionInput->input = 'in';
    $request->startSyncExecutionInput->name = 'Angel Wolff II';
    $request->startSyncExecutionInput->stateMachineArn = 'cumque';
    $request->startSyncExecutionInput->traceHeader = 'facere';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = StartSyncExecutionXAmzTargetEnum::AWS_STEP_FUNCTIONS_START_SYNC_EXECUTION;

    $response = $sdk->sdk->startSyncExecution($request);

    if ($response->startSyncExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopExecution

<p>Stops an execution.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\StopExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopExecutionRequest();
    $request->stopExecutionInput = new StopExecutionInput();
    $request->stopExecutionInput->cause = 'accusamus';
    $request->stopExecutionInput->error = 'delectus';
    $request->stopExecutionInput->executionArn = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = StopExecutionXAmzTargetEnum::AWS_STEP_FUNCTIONS_STOP_EXECUTION;

    $response = $sdk->sdk->stopExecution($request);

    if ($response->stopExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceArn = 'deserunt';
    $request->tagResourceInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_STEP_FUNCTIONS_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Remove a tag from a Step Functions resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceArn = 'distinctio';
    $request->untagResourceInput->tagKeys = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_STEP_FUNCTIONS_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMapRun

Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMapRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMapRunInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMapRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMapRunRequest();
    $request->updateMapRunInput = new UpdateMapRunInput();
    $request->updateMapRunInput->mapRunArn = 'et';
    $request->updateMapRunInput->maxConcurrency = 569965;
    $request->updateMapRunInput->toleratedFailureCount = 354047;
    $request->updateMapRunInput->toleratedFailurePercentage = 5908.73;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = UpdateMapRunXAmzTargetEnum::AWS_STEP_FUNCTIONS_UPDATE_MAP_RUN;

    $response = $sdk->sdk->updateMapRun($request);

    if ($response->updateMapRunOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStateMachine

<p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>All <code>StartExecution</code> calls within a few seconds will use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after calling <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStateMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStateMachineInput;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsLogGroup;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\TracingConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStateMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStateMachineRequest();
    $request->updateStateMachineInput = new UpdateStateMachineInput();
    $request->updateStateMachineInput->definition = 'eum';
    $request->updateStateMachineInput->loggingConfiguration = new LoggingConfiguration();
    $request->updateStateMachineInput->loggingConfiguration->destinations = [
        new LogDestination(),
    ];
    $request->updateStateMachineInput->loggingConfiguration->includeExecutionData = false;
    $request->updateStateMachineInput->loggingConfiguration->level = LogLevelEnum::OFF;
    $request->updateStateMachineInput->roleArn = 'odit';
    $request->updateStateMachineInput->stateMachineArn = 'nemo';
    $request->updateStateMachineInput->tracingConfiguration = new TracingConfiguration();
    $request->updateStateMachineInput->tracingConfiguration->enabled = false;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = UpdateStateMachineXAmzTargetEnum::AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE;

    $response = $sdk->sdk->updateStateMachine($request);

    if ($response->updateStateMachineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
