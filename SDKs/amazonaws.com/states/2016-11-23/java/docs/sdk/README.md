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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityResponse;
import org.openapis.openapi.models.operations.CreateActivityXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateActivityInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateActivityRequest req = new CreateActivityRequest(                new CreateActivityInput("tempora") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "molestiae";
                                        value = "minus";
                                    }}),
                                    add(new Tag() {{
                                        key = "placeat";
                                        value = "voluptatum";
                                    }}),
                                }};
                            }};, CreateActivityXAmzTargetEnum.AWS_STEP_FUNCTIONS_CREATE_ACTIVITY) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            CreateActivityResponse res = sdk.sdk.createActivity(req);

            if (res.createActivityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStateMachine

<p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the Step Functions User Guide.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, <code>LoggingConfiguration</code> and <code>TracingConfiguration</code>. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStateMachineRequest;
import org.openapis.openapi.models.operations.CreateStateMachineResponse;
import org.openapis.openapi.models.operations.CreateStateMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsLogGroup;
import org.openapis.openapi.models.shared.CreateStateMachineInput;
import org.openapis.openapi.models.shared.LogDestination;
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.LoggingConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StateMachineTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TracingConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStateMachineRequest req = new CreateStateMachineRequest(                new CreateStateMachineInput("deserunt", "perferendis", "ipsam") {{
                                loggingConfiguration = new LoggingConfiguration() {{
                                    destinations = new org.openapis.openapi.models.shared.LogDestination[]{{
                                        add(new LogDestination() {{
                                            cloudWatchLogsLogGroup = new CloudWatchLogsLogGroup() {{
                                                logGroupArn = "sapiente";
                                            }};
                                        }}),
                                        add(new LogDestination() {{
                                            cloudWatchLogsLogGroup = new CloudWatchLogsLogGroup() {{
                                                logGroupArn = "quo";
                                            }};
                                        }}),
                                        add(new LogDestination() {{
                                            cloudWatchLogsLogGroup = new CloudWatchLogsLogGroup() {{
                                                logGroupArn = "odit";
                                            }};
                                        }}),
                                        add(new LogDestination() {{
                                            cloudWatchLogsLogGroup = new CloudWatchLogsLogGroup() {{
                                                logGroupArn = "at";
                                            }};
                                        }}),
                                    }};
                                    includeExecutionData = false;
                                    level = LogLevelEnum.OFF;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "molestiae";
                                        value = "quod";
                                    }}),
                                    add(new Tag() {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new Tag() {{
                                        key = "totam";
                                        value = "porro";
                                    }}),
                                    add(new Tag() {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                }};
                                tracingConfiguration = new TracingConfiguration() {{
                                    enabled = false;
                                }};;
                                type = StateMachineTypeEnum.EXPRESS;
                            }};, CreateStateMachineXAmzTargetEnum.AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            CreateStateMachineResponse res = sdk.sdk.createStateMachine(req);

            if (res.createStateMachineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteActivity

Deletes an activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteActivityRequest;
import org.openapis.openapi.models.operations.DeleteActivityResponse;
import org.openapis.openapi.models.operations.DeleteActivityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteActivityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteActivityRequest req = new DeleteActivityRequest(                new DeleteActivityInput("commodi");, DeleteActivityXAmzTargetEnum.AWS_STEP_FUNCTIONS_DELETE_ACTIVITY) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }};            

            DeleteActivityResponse res = sdk.sdk.deleteActivity(req);

            if (res.deleteActivityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStateMachine

<p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. </p> <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>For <code>EXPRESS</code> state machines, the deletion will happen eventually (usually less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStateMachineRequest;
import org.openapis.openapi.models.operations.DeleteStateMachineResponse;
import org.openapis.openapi.models.operations.DeleteStateMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteStateMachineInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStateMachineRequest req = new DeleteStateMachineRequest(                new DeleteStateMachineInput("aspernatur");, DeleteStateMachineXAmzTargetEnum.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteStateMachineResponse res = sdk.sdk.deleteStateMachine(req);

            if (res.deleteStateMachineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeActivity

<p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeActivityRequest;
import org.openapis.openapi.models.operations.DescribeActivityResponse;
import org.openapis.openapi.models.operations.DescribeActivityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeActivityInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeActivityRequest req = new DescribeActivityRequest(                new DescribeActivityInput("hic");, DescribeActivityXAmzTargetEnum.AWS_STEP_FUNCTIONS_DESCRIBE_ACTIVITY) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            DescribeActivityResponse res = sdk.sdk.describeActivity(req);

            if (res.describeActivityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExecution

<p>Provides all information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run ARN if the execution was dispatched by a Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machine executions unless they were dispatched by a Map Run.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExecutionRequest;
import org.openapis.openapi.models.operations.DescribeExecutionResponse;
import org.openapis.openapi.models.operations.DescribeExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExecutionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExecutionRequest req = new DescribeExecutionRequest(                new DescribeExecutionInput("architecto");, DescribeExecutionXAmzTargetEnum.AWS_STEP_FUNCTIONS_DESCRIBE_EXECUTION) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            DescribeExecutionResponse res = sdk.sdk.describeExecution(req);

            if (res.describeExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMapRun

Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMapRunRequest;
import org.openapis.openapi.models.operations.DescribeMapRunResponse;
import org.openapis.openapi.models.operations.DescribeMapRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMapRunInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMapRunRequest req = new DescribeMapRunRequest(                new DescribeMapRunInput("explicabo");, DescribeMapRunXAmzTargetEnum.AWS_STEP_FUNCTIONS_DESCRIBE_MAP_RUN) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            DescribeMapRunResponse res = sdk.sdk.describeMapRun(req);

            if (res.describeMapRunOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStateMachine

<p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. If the state machine ARN is a qualified state machine ARN, the response returned includes the <code>Map</code> state's label.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStateMachineRequest;
import org.openapis.openapi.models.operations.DescribeStateMachineResponse;
import org.openapis.openapi.models.operations.DescribeStateMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStateMachineInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStateMachineRequest req = new DescribeStateMachineRequest(                new DescribeStateMachineInput("culpa");, DescribeStateMachineXAmzTargetEnum.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DescribeStateMachineResponse res = sdk.sdk.describeStateMachine(req);

            if (res.describeStateMachineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStateMachineForExecution

<p>Provides information about a state machine's definition, its execution role ARN, and configuration. If an execution was dispatched by a Map Run, the Map Run is returned in the response. Additionally, the state machine returned will be the state machine associated with the Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStateMachineForExecutionRequest;
import org.openapis.openapi.models.operations.DescribeStateMachineForExecutionResponse;
import org.openapis.openapi.models.operations.DescribeStateMachineForExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStateMachineForExecutionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStateMachineForExecutionRequest req = new DescribeStateMachineForExecutionRequest(                new DescribeStateMachineForExecutionInput("mollitia");, DescribeStateMachineForExecutionXAmzTargetEnum.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            DescribeStateMachineForExecutionResponse res = sdk.sdk.describeStateMachineForExecution(req);

            if (res.describeStateMachineForExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActivityTask

<p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <note> <p>This API action isn't logged in CloudTrail.</p> </note> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActivityTaskRequest;
import org.openapis.openapi.models.operations.GetActivityTaskResponse;
import org.openapis.openapi.models.operations.GetActivityTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetActivityTaskInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetActivityTaskRequest req = new GetActivityTaskRequest(                new GetActivityTaskInput("quis") {{
                                workerName = "vitae";
                            }};, GetActivityTaskXAmzTargetEnum.AWS_STEP_FUNCTIONS_GET_ACTIVITY_TASK) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            GetActivityTaskResponse res = sdk.sdk.getActivityTask(req);

            if (res.getActivityTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExecutionHistory

<p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExecutionHistoryRequest;
import org.openapis.openapi.models.operations.GetExecutionHistoryResponse;
import org.openapis.openapi.models.operations.GetExecutionHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetExecutionHistoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExecutionHistoryRequest req = new GetExecutionHistoryRequest(                new GetExecutionHistoryInput("id") {{
                                includeExecutionData = false;
                                maxResults = 820994L;
                                nextToken = "aut";
                                reverseOrder = false;
                            }};, GetExecutionHistoryXAmzTargetEnum.AWS_STEP_FUNCTIONS_GET_EXECUTION_HISTORY) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
                maxResults = "vero";
                nextToken = "nihil";
            }};            

            GetExecutionHistoryResponse res = sdk.sdk.getExecutionHistory(req);

            if (res.getExecutionHistoryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActivities

<p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActivitiesRequest;
import org.openapis.openapi.models.operations.ListActivitiesResponse;
import org.openapis.openapi.models.operations.ListActivitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListActivitiesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListActivitiesRequest req = new ListActivitiesRequest(                new ListActivitiesInput() {{
                                maxResults = 976762L;
                                nextToken = "ipsa";
                            }};, ListActivitiesXAmzTargetEnum.AWS_STEP_FUNCTIONS_LIST_ACTIVITIES) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "cum";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ut";
                maxResults = "maiores";
                nextToken = "dicta";
            }};            

            ListActivitiesResponse res = sdk.sdk.listActivities(req);

            if (res.listActivitiesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExecutions

<p>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN.</p> <p>Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExecutionsRequest;
import org.openapis.openapi.models.operations.ListExecutionsResponse;
import org.openapis.openapi.models.operations.ListExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecutionStatusEnum;
import org.openapis.openapi.models.shared.ListExecutionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExecutionsRequest req = new ListExecutionsRequest(                new ListExecutionsInput() {{
                                mapRunArn = "dolore";
                                maxResults = 480894L;
                                nextToken = "dicta";
                                stateMachineArn = "harum";
                                statusFilter = ExecutionStatusEnum.SUCCEEDED;
                            }};, ListExecutionsXAmzTargetEnum.AWS_STEP_FUNCTIONS_LIST_EXECUTIONS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
                maxResults = "excepturi";
                nextToken = "pariatur";
            }};            

            ListExecutionsResponse res = sdk.sdk.listExecutions(req);

            if (res.listExecutionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMapRuns

Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMapRunsRequest;
import org.openapis.openapi.models.operations.ListMapRunsResponse;
import org.openapis.openapi.models.operations.ListMapRunsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMapRunsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMapRunsRequest req = new ListMapRunsRequest(                new ListMapRunsInput("praesentium") {{
                                maxResults = 523248L;
                                nextToken = "voluptates";
                            }};, ListMapRunsXAmzTargetEnum.AWS_STEP_FUNCTIONS_LIST_MAP_RUNS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "sint";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "enim";
                maxResults = "consequatur";
                nextToken = "est";
            }};            

            ListMapRunsResponse res = sdk.sdk.listMapRuns(req);

            if (res.listMapRunsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStateMachines

<p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStateMachinesRequest;
import org.openapis.openapi.models.operations.ListStateMachinesResponse;
import org.openapis.openapi.models.operations.ListStateMachinesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListStateMachinesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStateMachinesRequest req = new ListStateMachinesRequest(                new ListStateMachinesInput() {{
                                maxResults = 131797L;
                                nextToken = "deserunt";
                            }};, ListStateMachinesXAmzTargetEnum.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
                maxResults = "quos";
                nextToken = "perferendis";
            }};            

            ListStateMachinesResponse res = sdk.sdk.listStateMachines(req);

            if (res.listStateMachinesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>List tags for a given resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>

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
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("assumenda");, ListTagsForResourceXAmzTargetEnum.AWS_STEP_FUNCTIONS_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
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

## sendTaskFailure

Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTaskFailureRequest;
import org.openapis.openapi.models.operations.SendTaskFailureResponse;
import org.openapis.openapi.models.operations.SendTaskFailureXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendTaskFailureInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendTaskFailureRequest req = new SendTaskFailureRequest(                new SendTaskFailureInput("labore") {{
                                cause = "delectus";
                                error = "eum";
                            }};, SendTaskFailureXAmzTargetEnum.AWS_STEP_FUNCTIONS_SEND_TASK_FAILURE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
            }};            

            SendTaskFailureResponse res = sdk.sdk.sendTaskFailure(req);

            if (res.sendTaskFailureOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendTaskHeartbeat

<p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval for heartbeats.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTaskHeartbeatRequest;
import org.openapis.openapi.models.operations.SendTaskHeartbeatResponse;
import org.openapis.openapi.models.operations.SendTaskHeartbeatXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendTaskHeartbeatInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendTaskHeartbeatRequest req = new SendTaskHeartbeatRequest(                new SendTaskHeartbeatInput("dolor");, SendTaskHeartbeatXAmzTargetEnum.AWS_STEP_FUNCTIONS_SEND_TASK_HEARTBEAT) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            SendTaskHeartbeatResponse res = sdk.sdk.sendTaskHeartbeat(req);

            if (res.sendTaskHeartbeatOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendTaskSuccess

Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> completed successfully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTaskSuccessRequest;
import org.openapis.openapi.models.operations.SendTaskSuccessResponse;
import org.openapis.openapi.models.operations.SendTaskSuccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendTaskSuccessInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendTaskSuccessRequest req = new SendTaskSuccessRequest(                new SendTaskSuccessInput("dicta", "magnam");, SendTaskSuccessXAmzTargetEnum.AWS_STEP_FUNCTIONS_SEND_TASK_SUCCESS) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            SendTaskSuccessResponse res = sdk.sdk.sendTaskSuccess(req);

            if (res.sendTaskSuccessOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startExecution

<p>Starts a state machine execution. If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p> <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a <code>STANDARD</code> workflow, if <code>StartExecution</code> is called with the same name and input as a running execution, the call will succeed and return the same response as the original request. If the execution is closed or if the input is different, it will return a <code>400 ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p> <p> <code>StartExecution</code> is not idempotent for <code>EXPRESS</code> workflows. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartExecutionRequest;
import org.openapis.openapi.models.operations.StartExecutionResponse;
import org.openapis.openapi.models.operations.StartExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartExecutionRequest req = new StartExecutionRequest(                new StartExecutionInput("enim") {{
                                input = "accusamus";
                                name = "Abraham McKenzie";
                                traceHeader = "blanditiis";
                            }};, StartExecutionXAmzTargetEnum.AWS_STEP_FUNCTIONS_START_EXECUTION) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            StartExecutionResponse res = sdk.sdk.startExecution(req);

            if (res.startExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSyncExecution

<p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code> is not available for <code>STANDARD</code> workflows.</p> <note> <p> <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. </p> </note> <note> <p>This API action isn't logged in CloudTrail.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSyncExecutionRequest;
import org.openapis.openapi.models.operations.StartSyncExecutionResponse;
import org.openapis.openapi.models.operations.StartSyncExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSyncExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSyncExecutionRequest req = new StartSyncExecutionRequest(                new StartSyncExecutionInput("molestiae") {{
                                input = "perferendis";
                                name = "Megan Rau";
                                traceHeader = "labore";
                            }};, StartSyncExecutionXAmzTargetEnum.AWS_STEP_FUNCTIONS_START_SYNC_EXECUTION) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            StartSyncExecutionResponse res = sdk.sdk.startSyncExecution(req);

            if (res.startSyncExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopExecution

<p>Stops an execution.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopExecutionRequest;
import org.openapis.openapi.models.operations.StopExecutionResponse;
import org.openapis.openapi.models.operations.StopExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopExecutionRequest req = new StopExecutionRequest(                new StopExecutionInput("et") {{
                                cause = "excepturi";
                                error = "ullam";
                            }};, StopExecutionXAmzTargetEnum.AWS_STEP_FUNCTIONS_STOP_EXECUTION) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            StopExecutionResponse res = sdk.sdk.stopExecution(req);

            if (res.stopExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("eum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "necessitatibus";
                                                    value = "odit";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_STEP_FUNCTIONS_TAG_RESOURCE) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Remove a tag from a Step Functions resource

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
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("facilis",                 new String[]{{
                                                add("architecto"),
                                                add("architecto"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_STEP_FUNCTIONS_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMapRun

Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMapRunRequest;
import org.openapis.openapi.models.operations.UpdateMapRunResponse;
import org.openapis.openapi.models.operations.UpdateMapRunXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMapRunInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMapRunRequest req = new UpdateMapRunRequest(                new UpdateMapRunInput("pariatur") {{
                                maxConcurrency = 37559L;
                                toleratedFailureCount = 162493L;
                                toleratedFailurePercentage = 5083.15;
                            }};, UpdateMapRunXAmzTargetEnum.AWS_STEP_FUNCTIONS_UPDATE_MAP_RUN) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            UpdateMapRunResponse res = sdk.sdk.updateMapRun(req);

            if (res.updateMapRunOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStateMachine

<p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <note> <p>All <code>StartExecution</code> calls within a few seconds will use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after calling <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStateMachineRequest;
import org.openapis.openapi.models.operations.UpdateStateMachineResponse;
import org.openapis.openapi.models.operations.UpdateStateMachineXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsLogGroup;
import org.openapis.openapi.models.shared.LogDestination;
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.LoggingConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TracingConfiguration;
import org.openapis.openapi.models.shared.UpdateStateMachineInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStateMachineRequest req = new UpdateStateMachineRequest(                new UpdateStateMachineInput("excepturi") {{
                                definition = "odit";
                                loggingConfiguration = new LoggingConfiguration() {{
                                    destinations = new org.openapis.openapi.models.shared.LogDestination[]{{
                                        add(new LogDestination() {{
                                            cloudWatchLogsLogGroup = new CloudWatchLogsLogGroup() {{
                                                logGroupArn = "accusantium";
                                            }};
                                        }}),
                                        add(new LogDestination() {{
                                            cloudWatchLogsLogGroup = new CloudWatchLogsLogGroup() {{
                                                logGroupArn = "ab";
                                            }};
                                        }}),
                                    }};
                                    includeExecutionData = false;
                                    level = LogLevelEnum.OFF;
                                }};;
                                roleArn = "quidem";
                                tracingConfiguration = new TracingConfiguration() {{
                                    enabled = false;
                                }};;
                            }};, UpdateStateMachineXAmzTargetEnum.AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            UpdateStateMachineResponse res = sdk.sdk.updateStateMachine(req);

            if (res.updateStateMachineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
