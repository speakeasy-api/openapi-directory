# SDK

## Overview

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p> <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p> <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/datapipeline/>
### Available Operations

* [activatePipeline](#activatepipeline) - <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
* [addTags](#addtags) - Adds or modifies tags for the specified pipeline.
* [createPipeline](#createpipeline) - Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.
* [deactivatePipeline](#deactivatepipeline) - <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>
* [deletePipeline](#deletepipeline) - <p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>
* [describeObjects](#describeobjects) - Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.
* [describePipelines](#describepipelines) - <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
* [evaluateExpression](#evaluateexpression) - Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.
* [getPipelineDefinition](#getpipelinedefinition) - Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.
* [listPipelines](#listpipelines) - Lists the pipeline identifiers for all active pipelines that you have permission to access.
* [pollForTask](#pollfortask) - <p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>
* [putPipelineDefinition](#putpipelinedefinition) - <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>
* [queryObjects](#queryobjects) - Queries the specified pipeline for the names of objects that match the specified set of conditions.
* [removeTags](#removetags) - Removes existing tags from the specified pipeline.
* [reportTaskProgress](#reporttaskprogress) - <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>
* [reportTaskRunnerHeartbeat](#reporttaskrunnerheartbeat) - Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.
* [setStatus](#setstatus) - Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.
* [setTaskStatus](#settaskstatus) - Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.
* [validatePipelineDefinition](#validatepipelinedefinition) - Validates the specified pipeline definition to ensure that it is well formed and can be run without error.

## activatePipeline

<p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivatePipelineRequest;
import org.openapis.openapi.models.operations.ActivatePipelineResponse;
import org.openapis.openapi.models.operations.ActivatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivatePipelineInput;
import org.openapis.openapi.models.shared.ParameterValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivatePipelineRequest req = new ActivatePipelineRequest(                new ActivatePipelineInput("commodi") {{
                                parameterValues = new org.openapis.openapi.models.shared.ParameterValue[]{{
                                    add(new ParameterValue("perferendis", "doloremque") {{
                                        id = "739251aa-52c3-4f5a-9019-da1ffe78f097";
                                        stringValue = "cum";
                                    }}),
                                    add(new ParameterValue("quibusdam", "explicabo") {{
                                        id = "74f15471-b5e6-4e13-b99d-488e1e91e450";
                                        stringValue = "est";
                                    }}),
                                }};
                                startTimestamp = OffsetDateTime.parse("2021-07-27T01:56:50.693Z");
                            }};, ActivatePipelineXAmzTargetEnum.DATA_PIPELINE_ACTIVATE_PIPELINE) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            ActivatePipelineResponse res = sdk.sdk.activatePipeline(req);

            if (res.activatePipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addTags

Adds or modifies tags for the specified pipeline.

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
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsRequest req = new AddTagsRequest(                new AddTagsInput("magni",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("fugit", "dolorum") {{
                                                    key = "ipsam";
                                                    value = "alias";
                                                }}),
                                                add(new Tag("facilis", "tempore") {{
                                                    key = "excepturi";
                                                    value = "tempora";
                                                }}),
                                                add(new Tag("eum", "non") {{
                                                    key = "labore";
                                                    value = "delectus";
                                                }}),
                                                add(new Tag("aliquid", "provident") {{
                                                    key = "eligendi";
                                                    value = "sint";
                                                }}),
                                            }});, AddTagsXAmzTargetEnum.DATA_PIPELINE_ADD_TAGS) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
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

## createPipeline

Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineRequest;
import org.openapis.openapi.models.operations.CreatePipelineResponse;
import org.openapis.openapi.models.operations.CreatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePipelineInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePipelineRequest req = new CreatePipelineRequest(                new CreatePipelineInput("in", "illum") {{
                                description = "maiores";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("cumque", "facere") {{
                                        key = "dicta";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("laborum", "accusamus") {{
                                        key = "ea";
                                        value = "aliquid";
                                    }}),
                                    add(new Tag("enim", "accusamus") {{
                                        key = "non";
                                        value = "occaecati";
                                    }}),
                                }};
                            }};, CreatePipelineXAmzTargetEnum.DATA_PIPELINE_CREATE_PIPELINE) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreatePipelineResponse res = sdk.sdk.createPipeline(req);

            if (res.createPipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivatePipeline

<p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivatePipelineRequest;
import org.openapis.openapi.models.operations.DeactivatePipelineResponse;
import org.openapis.openapi.models.operations.DeactivatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeactivatePipelineInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivatePipelineRequest req = new DeactivatePipelineRequest(                new DeactivatePipelineInput("amet") {{
                                cancelActive = false;
                            }};, DeactivatePipelineXAmzTargetEnum.DATA_PIPELINE_DEACTIVATE_PIPELINE) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeactivatePipelineResponse res = sdk.sdk.deactivatePipeline(req);

            if (res.deactivatePipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePipeline

<p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipelineRequest;
import org.openapis.openapi.models.operations.DeletePipelineResponse;
import org.openapis.openapi.models.operations.DeletePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePipelineInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePipelineRequest req = new DeletePipelineRequest(                new DeletePipelineInput("magnam");, DeletePipelineXAmzTargetEnum.DATA_PIPELINE_DELETE_PIPELINE) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            DeletePipelineResponse res = sdk.sdk.deletePipeline(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeObjects

Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeObjectsRequest;
import org.openapis.openapi.models.operations.DescribeObjectsResponse;
import org.openapis.openapi.models.operations.DescribeObjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeObjectsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeObjectsRequest req = new DescribeObjectsRequest(                new DescribeObjectsInput(                new String[]{{
                                                add("aspernatur"),
                                                add("architecto"),
                                                add("magnam"),
                                                add("et"),
                                            }}, "excepturi") {{
                                evaluateExpressions = false;
                                marker = "ullam";
                            }};, DescribeObjectsXAmzTargetEnum.DATA_PIPELINE_DESCRIBE_OBJECTS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
                marker = "ad";
            }};            

            DescribeObjectsResponse res = sdk.sdk.describeObjects(req);

            if (res.describeObjectsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePipelines

<p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePipelinesRequest;
import org.openapis.openapi.models.operations.DescribePipelinesResponse;
import org.openapis.openapi.models.operations.DescribePipelinesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePipelinesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePipelinesRequest req = new DescribePipelinesRequest(                new DescribePipelinesInput(                new String[]{{
                                                add("necessitatibus"),
                                            }});, DescribePipelinesXAmzTargetEnum.DATA_PIPELINE_DESCRIBE_PIPELINES) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
            }};            

            DescribePipelinesResponse res = sdk.sdk.describePipelines(req);

            if (res.describePipelinesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evaluateExpression

Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvaluateExpressionRequest;
import org.openapis.openapi.models.operations.EvaluateExpressionResponse;
import org.openapis.openapi.models.operations.EvaluateExpressionXAmzTargetEnum;
import org.openapis.openapi.models.shared.EvaluateExpressionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EvaluateExpressionRequest req = new EvaluateExpressionRequest(                new EvaluateExpressionInput("deleniti", "facilis", "in");, EvaluateExpressionXAmzTargetEnum.DATA_PIPELINE_EVALUATE_EXPRESSION) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
            }};            

            EvaluateExpressionResponse res = sdk.sdk.evaluateExpression(req);

            if (res.evaluateExpressionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPipelineDefinition

Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPipelineDefinitionRequest;
import org.openapis.openapi.models.operations.GetPipelineDefinitionResponse;
import org.openapis.openapi.models.operations.GetPipelineDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPipelineDefinitionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPipelineDefinitionRequest req = new GetPipelineDefinitionRequest(                new GetPipelineDefinitionInput("sed") {{
                                version = "saepe";
                            }};, GetPipelineDefinitionXAmzTargetEnum.DATA_PIPELINE_GET_PIPELINE_DEFINITION) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "consequuntur";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "natus";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "sunt";
            }};            

            GetPipelineDefinitionResponse res = sdk.sdk.getPipelineDefinition(req);

            if (res.getPipelineDefinitionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPipelines

Lists the pipeline identifiers for all active pipelines that you have permission to access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPipelinesRequest;
import org.openapis.openapi.models.operations.ListPipelinesResponse;
import org.openapis.openapi.models.operations.ListPipelinesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPipelinesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPipelinesRequest req = new ListPipelinesRequest(                new ListPipelinesInput() {{
                                marker = "illum";
                            }};, ListPipelinesXAmzTargetEnum.DATA_PIPELINE_LIST_PIPELINES) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
                marker = "ab";
            }};            

            ListPipelinesResponse res = sdk.sdk.listPipelines(req);

            if (res.listPipelinesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pollForTask

<p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PollForTaskRequest;
import org.openapis.openapi.models.operations.PollForTaskResponse;
import org.openapis.openapi.models.operations.PollForTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.InstanceIdentity;
import org.openapis.openapi.models.shared.PollForTaskInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PollForTaskRequest req = new PollForTaskRequest(                new PollForTaskInput("quidem") {{
                                hostname = "harmonious-in-joke.info";
                                instanceIdentity = new InstanceIdentity() {{
                                    document = "nam";
                                    signature = "eaque";
                                }};;
                            }};, PollForTaskXAmzTargetEnum.DATA_PIPELINE_POLL_FOR_TASK) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            PollForTaskResponse res = sdk.sdk.pollForTask(req);

            if (res.pollForTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPipelineDefinition

<p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPipelineDefinitionRequest;
import org.openapis.openapi.models.operations.PutPipelineDefinitionResponse;
import org.openapis.openapi.models.operations.PutPipelineDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.ParameterAttribute;
import org.openapis.openapi.models.shared.ParameterObject;
import org.openapis.openapi.models.shared.ParameterValue;
import org.openapis.openapi.models.shared.PipelineObject;
import org.openapis.openapi.models.shared.PutPipelineDefinitionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPipelineDefinitionRequest req = new PutPipelineDefinitionRequest(                new PutPipelineDefinitionInput("corporis",                 new org.openapis.openapi.models.shared.PipelineObject[]{{
                                                add(new PipelineObject(                new org.openapis.openapi.models.shared.Field[]{{
                                                                    add(new Field("voluptate") {{
                                                                        key = "hic";
                                                                        refValue = "excepturi";
                                                                        stringValue = "cum";
                                                                    }}),
                                                                }}, "dignissimos", "reiciendis") {{
                                                    fields = new org.openapis.openapi.models.shared.Field[]{{
                                                        add(new Field("totam") {{
                                                            key = "nobis";
                                                            refValue = "dolores";
                                                            stringValue = "quis";
                                                        }}),
                                                        add(new Field("nesciunt") {{
                                                            key = "dignissimos";
                                                            refValue = "eaque";
                                                            stringValue = "quis";
                                                        }}),
                                                        add(new Field("minus") {{
                                                            key = "eos";
                                                            refValue = "perferendis";
                                                            stringValue = "dolores";
                                                        }}),
                                                    }};
                                                    id = "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48";
                                                    name = "Florence Ebert";
                                                }}),
                                                add(new PipelineObject(                new org.openapis.openapi.models.shared.Field[]{{
                                                                    add(new Field("minima") {{
                                                                        key = "suscipit";
                                                                        refValue = "deserunt";
                                                                        stringValue = "provident";
                                                                    }}),
                                                                    add(new Field("alias") {{
                                                                        key = "repellendus";
                                                                        refValue = "totam";
                                                                        stringValue = "similique";
                                                                    }}),
                                                                    add(new Field("vel") {{
                                                                        key = "at";
                                                                        refValue = "quaerat";
                                                                        stringValue = "tempora";
                                                                    }}),
                                                                    add(new Field("dolorum") {{
                                                                        key = "quod";
                                                                        refValue = "officiis";
                                                                        stringValue = "qui";
                                                                    }}),
                                                                }}, "a", "esse") {{
                                                    fields = new org.openapis.openapi.models.shared.Field[]{{
                                                        add(new Field("ipsa") {{
                                                            key = "dolorum";
                                                            refValue = "numquam";
                                                            stringValue = "veritatis";
                                                        }}),
                                                    }};
                                                    id = "0674ebf6-9280-4d1b-a77a-89ebf737ae42";
                                                    name = "Wendy Rosenbaum";
                                                }}),
                                                add(new PipelineObject(                new org.openapis.openapi.models.shared.Field[]{{
                                                                    add(new Field("nobis") {{
                                                                        key = "voluptatem";
                                                                        refValue = "cumque";
                                                                        stringValue = "soluta";
                                                                    }}),
                                                                    add(new Field("veritatis") {{
                                                                        key = "et";
                                                                        refValue = "saepe";
                                                                        stringValue = "ipsum";
                                                                    }}),
                                                                    add(new Field("cupiditate") {{
                                                                        key = "nobis";
                                                                        refValue = "quos";
                                                                        stringValue = "tempore";
                                                                    }}),
                                                                    add(new Field("dolore") {{
                                                                        key = "aperiam";
                                                                        refValue = "delectus";
                                                                        stringValue = "dolorem";
                                                                    }}),
                                                                }}, "labore", "adipisci") {{
                                                    fields = new org.openapis.openapi.models.shared.Field[]{{
                                                        add(new Field("tenetur") {{
                                                            key = "iusto";
                                                            refValue = "ipsum";
                                                            stringValue = "quisquam";
                                                        }}),
                                                        add(new Field("numquam") {{
                                                            key = "amet";
                                                            refValue = "tempore";
                                                            stringValue = "accusamus";
                                                        }}),
                                                        add(new Field("totam") {{
                                                            key = "enim";
                                                            refValue = "dolorem";
                                                            stringValue = "sapiente";
                                                        }}),
                                                    }};
                                                    id = "70b326b5-a734-429c-9b1a-8422bb679d23";
                                                    name = "Mrs. Louise Kuhlman";
                                                }}),
                                                add(new PipelineObject(                new org.openapis.openapi.models.shared.Field[]{{
                                                                    add(new Field("iusto") {{
                                                                        key = "porro";
                                                                        refValue = "maiores";
                                                                        stringValue = "doloribus";
                                                                    }}),
                                                                }}, "eligendi", "ducimus") {{
                                                    fields = new org.openapis.openapi.models.shared.Field[]{{
                                                        add(new Field("quas") {{
                                                            key = "architecto";
                                                            refValue = "quae";
                                                            stringValue = "aut";
                                                        }}),
                                                        add(new Field("repellendus") {{
                                                            key = "itaque";
                                                            refValue = "consequatur";
                                                            stringValue = "est";
                                                        }}),
                                                        add(new Field("facilis") {{
                                                            key = "porro";
                                                            refValue = "doloribus";
                                                            stringValue = "ut";
                                                        }}),
                                                    }};
                                                    id = "921879fc-e953-4f73-af7f-bc7abd74dd39";
                                                    name = "Richard Wiza";
                                                }}),
                                            }}) {{
                                parameterObjects = new org.openapis.openapi.models.shared.ParameterObject[]{{
                                    add(new ParameterObject(                new org.openapis.openapi.models.shared.ParameterAttribute[]{{
                                                        add(new ParameterAttribute("non", "et") {{
                                                            key = "accusamus";
                                                            stringValue = "inventore";
                                                        }}),
                                                    }}, "dolorum") {{
                                        attributes = new org.openapis.openapi.models.shared.ParameterAttribute[]{{
                                            add(new ParameterAttribute("ea", "aspernatur") {{
                                                key = "tempora";
                                                stringValue = "ipsam";
                                            }}),
                                            add(new ParameterAttribute("magnam", "ratione") {{
                                                key = "vel";
                                                stringValue = "possimus";
                                            }}),
                                            add(new ParameterAttribute("dicta", "dolor") {{
                                                key = "ex";
                                                stringValue = "laudantium";
                                            }}),
                                        }};
                                        id = "f16d9f5f-ce6c-4556-946c-3e250fb008c4";
                                    }}),
                                }};
                                parameterValues = new org.openapis.openapi.models.shared.ParameterValue[]{{
                                    add(new ParameterValue("praesentium", "quisquam") {{
                                        id = "c366c8dd-6b14-4429-8747-4778a7bd466d";
                                        stringValue = "eos";
                                    }}),
                                    add(new ParameterValue("odio", "occaecati") {{
                                        id = "10ab3cdc-a425-4190-8e52-3c7e0bc7178e";
                                        stringValue = "aliquam";
                                    }}),
                                    add(new ParameterValue("veritatis", "esse") {{
                                        id = "6f2a70c6-8828-42aa-8825-62f222e9817e";
                                        stringValue = "accusamus";
                                    }}),
                                }};
                            }};, PutPipelineDefinitionXAmzTargetEnum.DATA_PIPELINE_PUT_PIPELINE_DEFINITION) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "vel";
            }};            

            PutPipelineDefinitionResponse res = sdk.sdk.putPipelineDefinition(req);

            if (res.putPipelineDefinitionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryObjects

Queries the specified pipeline for the names of objects that match the specified set of conditions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryObjectsRequest;
import org.openapis.openapi.models.operations.QueryObjectsResponse;
import org.openapis.openapi.models.operations.QueryObjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Operator;
import org.openapis.openapi.models.shared.OperatorTypeEnum;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryObjectsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Selector;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryObjectsRequest req = new QueryObjectsRequest(                new QueryObjectsInput("molestiae", "rerum") {{
                                limit = 580197L;
                                marker = "minima";
                                query = new Query() {{
                                    selectors = new org.openapis.openapi.models.shared.Selector[]{{
                                        add(new Selector() {{
                                            fieldName = "eligendi";
                                            operator = new Operator() {{
                                                type = OperatorTypeEnum.EQ;
                                                values = new String[]{{
                                                    add("tempore"),
                                                    add("adipisci"),
                                                    add("cumque"),
                                                }};
                                            }};
                                        }}),
                                        add(new Selector() {{
                                            fieldName = "consequuntur";
                                            operator = new Operator() {{
                                                type = OperatorTypeEnum.EQ;
                                                values = new String[]{{
                                                    add("quaerat"),
                                                    add("sapiente"),
                                                    add("consectetur"),
                                                    add("esse"),
                                                }};
                                            }};
                                        }}),
                                        add(new Selector() {{
                                            fieldName = "blanditiis";
                                            operator = new Operator() {{
                                                type = OperatorTypeEnum.LE;
                                                values = new String[]{{
                                                    add("nulla"),
                                                    add("quas"),
                                                    add("esse"),
                                                    add("quasi"),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};, QueryObjectsXAmzTargetEnum.DATA_PIPELINE_QUERY_OBJECTS) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "error";
                xAmzCredential = "sint";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "eveniet";
                limit = "asperiores";
                marker = "facere";
            }};            

            QueryObjectsResponse res = sdk.sdk.queryObjects(req);

            if (res.queryObjectsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTags

Removes existing tags from the specified pipeline.

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
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsRequest req = new RemoveTagsRequest(                new RemoveTagsInput("consequuntur",                 new String[]{{
                                                add("similique"),
                                            }});, RemoveTagsXAmzTargetEnum.DATA_PIPELINE_REMOVE_TAGS) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "tenetur";
                xAmzDate = "quae";
                xAmzSecurityToken = "earum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "in";
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

## reportTaskProgress

<p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportTaskProgressRequest;
import org.openapis.openapi.models.operations.ReportTaskProgressResponse;
import org.openapis.openapi.models.operations.ReportTaskProgressXAmzTargetEnum;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.ReportTaskProgressInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReportTaskProgressRequest req = new ReportTaskProgressRequest(                new ReportTaskProgressInput("libero") {{
                                fields = new org.openapis.openapi.models.shared.Field[]{{
                                    add(new Field("sapiente") {{
                                        key = "soluta";
                                        refValue = "accusantium";
                                        stringValue = "aliquam";
                                    }}),
                                    add(new Field("ullam") {{
                                        key = "dicta";
                                        refValue = "ullam";
                                        stringValue = "reprehenderit";
                                    }}),
                                    add(new Field("qui") {{
                                        key = "nisi";
                                        refValue = "aut";
                                        stringValue = "voluptatum";
                                    }}),
                                    add(new Field("itaque") {{
                                        key = "quibusdam";
                                        refValue = "ex";
                                        stringValue = "deleniti";
                                    }}),
                                }};
                            }};, ReportTaskProgressXAmzTargetEnum.DATA_PIPELINE_REPORT_TASK_PROGRESS) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "omnis";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "at";
                xAmzSignedHeaders = "et";
            }};            

            ReportTaskProgressResponse res = sdk.sdk.reportTaskProgress(req);

            if (res.reportTaskProgressOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reportTaskRunnerHeartbeat

Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportTaskRunnerHeartbeatRequest;
import org.openapis.openapi.models.operations.ReportTaskRunnerHeartbeatResponse;
import org.openapis.openapi.models.operations.ReportTaskRunnerHeartbeatXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReportTaskRunnerHeartbeatInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReportTaskRunnerHeartbeatRequest req = new ReportTaskRunnerHeartbeatRequest(                new ReportTaskRunnerHeartbeatInput("ipsa") {{
                                hostname = "gentle-bladder.biz";
                                workerGroup = "adipisci";
                            }};, ReportTaskRunnerHeartbeatXAmzTargetEnum.DATA_PIPELINE_REPORT_TASK_RUNNER_HEARTBEAT) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "accusantium";
                xAmzDate = "rem";
                xAmzSecurityToken = "aut";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "eum";
            }};            

            ReportTaskRunnerHeartbeatResponse res = sdk.sdk.reportTaskRunnerHeartbeat(req);

            if (res.reportTaskRunnerHeartbeatOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setStatus

Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetStatusRequest;
import org.openapis.openapi.models.operations.SetStatusResponse;
import org.openapis.openapi.models.operations.SetStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetStatusInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetStatusRequest req = new SetStatusRequest(                new SetStatusInput(                new String[]{{
                                                add("corrupti"),
                                            }}, "non", "voluptatem");, SetStatusXAmzTargetEnum.DATA_PIPELINE_SET_STATUS) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "impedit";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "aut";
            }};            

            SetStatusResponse res = sdk.sdk.setStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTaskStatus

Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTaskStatusRequest;
import org.openapis.openapi.models.operations.SetTaskStatusResponse;
import org.openapis.openapi.models.operations.SetTaskStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetTaskStatusInput;
import org.openapis.openapi.models.shared.TaskStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetTaskStatusRequest req = new SetTaskStatusRequest(                new SetTaskStatusInput("dicta", TaskStatusEnum.FALSE) {{
                                errorId = "natus";
                                errorMessage = "velit";
                                errorStackTrace = "voluptatibus";
                            }};, SetTaskStatusXAmzTargetEnum.DATA_PIPELINE_SET_TASK_STATUS) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "aperiam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellendus";
            }};            

            SetTaskStatusResponse res = sdk.sdk.setTaskStatus(req);

            if (res.setTaskStatusOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validatePipelineDefinition

Validates the specified pipeline definition to ensure that it is well formed and can be run without error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidatePipelineDefinitionRequest;
import org.openapis.openapi.models.operations.ValidatePipelineDefinitionResponse;
import org.openapis.openapi.models.operations.ValidatePipelineDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.ParameterAttribute;
import org.openapis.openapi.models.shared.ParameterObject;
import org.openapis.openapi.models.shared.ParameterValue;
import org.openapis.openapi.models.shared.PipelineObject;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ValidatePipelineDefinitionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ValidatePipelineDefinitionRequest req = new ValidatePipelineDefinitionRequest(                new ValidatePipelineDefinitionInput("maxime",                 new org.openapis.openapi.models.shared.PipelineObject[]{{
                                                add(new PipelineObject(                new org.openapis.openapi.models.shared.Field[]{{
                                                                    add(new Field("non") {{
                                                                        key = "sunt";
                                                                        refValue = "asperiores";
                                                                        stringValue = "adipisci";
                                                                    }}),
                                                                    add(new Field("a") {{
                                                                        key = "amet";
                                                                        refValue = "beatae";
                                                                        stringValue = "dignissimos";
                                                                    }}),
                                                                }}, "debitis", "consectetur") {{
                                                    fields = new org.openapis.openapi.models.shared.Field[]{{
                                                        add(new Field("quaerat") {{
                                                            key = "asperiores";
                                                            refValue = "nemo";
                                                            stringValue = "quae";
                                                        }}),
                                                        add(new Field("ab") {{
                                                            key = "porro";
                                                            refValue = "quod";
                                                            stringValue = "labore";
                                                        }}),
                                                        add(new Field("suscipit") {{
                                                            key = "adipisci";
                                                            refValue = "fuga";
                                                            stringValue = "id";
                                                        }}),
                                                    }};
                                                    id = "3aae8d67-864d-4bb6-b5fd-5e60b375ed4f";
                                                    name = "Lela Predovic";
                                                }}),
                                                add(new PipelineObject(                new org.openapis.openapi.models.shared.Field[]{{
                                                                    add(new Field("ab") {{
                                                                        key = "facilis";
                                                                        refValue = "voluptate";
                                                                        stringValue = "expedita";
                                                                    }}),
                                                                    add(new Field("sed") {{
                                                                        key = "iste";
                                                                        refValue = "dolore";
                                                                        stringValue = "laborum";
                                                                    }}),
                                                                    add(new Field("explicabo") {{
                                                                        key = "in";
                                                                        refValue = "commodi";
                                                                        stringValue = "quidem";
                                                                    }}),
                                                                    add(new Field("suscipit") {{
                                                                        key = "voluptas";
                                                                        refValue = "unde";
                                                                        stringValue = "architecto";
                                                                    }}),
                                                                }}, "sapiente", "debitis") {{
                                                    fields = new org.openapis.openapi.models.shared.Field[]{{
                                                        add(new Field("voluptates") {{
                                                            key = "harum";
                                                            refValue = "laboriosam";
                                                            stringValue = "ipsa";
                                                        }}),
                                                        add(new Field("similique") {{
                                                            key = "libero";
                                                            refValue = "vitae";
                                                            stringValue = "accusamus";
                                                        }}),
                                                    }};
                                                    id = "426555ba-3c28-4744-ad53-b88f3a8d8f5c";
                                                    name = "Luz Cormier";
                                                }}),
                                            }}) {{
                                parameterObjects = new org.openapis.openapi.models.shared.ParameterObject[]{{
                                    add(new ParameterObject(                new org.openapis.openapi.models.shared.ParameterAttribute[]{{
                                                        add(new ParameterAttribute("voluptatum", "error") {{
                                                            key = "laboriosam";
                                                            stringValue = "dolorum";
                                                        }}),
                                                        add(new ParameterAttribute("debitis", "neque") {{
                                                            key = "hic";
                                                            stringValue = "expedita";
                                                        }}),
                                                        add(new ParameterAttribute("officia", "dolorum") {{
                                                            key = "dolorum";
                                                            stringValue = "nostrum";
                                                        }}),
                                                    }}, "corrupti") {{
                                        attributes = new org.openapis.openapi.models.shared.ParameterAttribute[]{{
                                            add(new ParameterAttribute("maiores", "incidunt") {{
                                                key = "perferendis";
                                                stringValue = "corrupti";
                                            }}),
                                            add(new ParameterAttribute("eius", "necessitatibus") {{
                                                key = "sed";
                                                stringValue = "provident";
                                            }}),
                                            add(new ParameterAttribute("occaecati", "quos") {{
                                                key = "ipsum";
                                                stringValue = "ea";
                                            }}),
                                            add(new ParameterAttribute("tempora", "voluptate") {{
                                                key = "voluptatibus";
                                                stringValue = "tempora";
                                            }}),
                                        }};
                                        id = "f603e8b4-45e8-40ca-95ef-d20e457e1858";
                                    }}),
                                }};
                                parameterValues = new org.openapis.openapi.models.shared.ParameterValue[]{{
                                    add(new ParameterValue("architecto", "occaecati") {{
                                        id = "4824d0ab-4075-4088-a518-62065e904f3b";
                                        stringValue = "dicta";
                                    }}),
                                    add(new ParameterValue("asperiores", "totam") {{
                                        id = "4b8abf60-3a79-4f9d-be0a-b7da8a50ce18";
                                        stringValue = "reprehenderit";
                                    }}),
                                    add(new ParameterValue("doloremque", "repudiandae") {{
                                        id = "6bc173d6-89ee-4e95-a6f8-d986e881ead4";
                                        stringValue = "reiciendis";
                                    }}),
                                    add(new ParameterValue("iure", "ipsa") {{
                                        id = "1012563f-94e2-49e9-b3e9-22a57a15be3e";
                                        stringValue = "doloremque";
                                    }}),
                                }};
                            }};, ValidatePipelineDefinitionXAmzTargetEnum.DATA_PIPELINE_VALIDATE_PIPELINE_DEFINITION) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "quae";
                xAmzCredential = "molestiae";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "iure";
            }};            

            ValidatePipelineDefinitionResponse res = sdk.sdk.validatePipelineDefinition(req);

            if (res.validatePipelineDefinitionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
