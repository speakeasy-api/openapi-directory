# SDK

## Overview

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data.</p> <p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management.</p> <p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/datapipeline/>
### Available Operations

* [ActivatePipeline](#activatepipeline) - <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
* [AddTags](#addtags) - Adds or modifies tags for the specified pipeline.
* [CreatePipeline](#createpipeline) - Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.
* [DeactivatePipeline](#deactivatepipeline) - <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>
* [DeletePipeline](#deletepipeline) - <p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>
* [DescribeObjects](#describeobjects) - Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.
* [DescribePipelines](#describepipelines) - <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
* [EvaluateExpression](#evaluateexpression) - Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.
* [GetPipelineDefinition](#getpipelinedefinition) - Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.
* [ListPipelines](#listpipelines) - Lists the pipeline identifiers for all active pipelines that you have permission to access.
* [PollForTask](#pollfortask) - <p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>
* [PutPipelineDefinition](#putpipelinedefinition) - <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>
* [QueryObjects](#queryobjects) - Queries the specified pipeline for the names of objects that match the specified set of conditions.
* [RemoveTags](#removetags) - Removes existing tags from the specified pipeline.
* [ReportTaskProgress](#reporttaskprogress) - <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>
* [ReportTaskRunnerHeartbeat](#reporttaskrunnerheartbeat) - Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.
* [SetStatus](#setstatus) - Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.
* [SetTaskStatus](#settaskstatus) - Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.
* [ValidatePipelineDefinition](#validatepipelinedefinition) - Validates the specified pipeline definition to ensure that it is well formed and can be run without error.

## ActivatePipeline

<p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>

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
    res, err := s.SDK.ActivatePipeline(ctx, operations.ActivatePipelineRequest{
        ActivatePipelineInput: shared.ActivatePipelineInput{
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "3a2fa946-7739-4251-aa52-c3f5ad019da1",
                    StringValue: "reiciendis",
                },
                shared.ParameterValue{
                    ID: "fe78f097-b007-44f1-9471-b5e6e13b99d4",
                    StringValue: "praesentium",
                },
                shared.ParameterValue{
                    ID: "8e1e91e4-50ad-42ab-9442-69802d502a94",
                    StringValue: "facilis",
                },
            },
            PipelineID: "tempore",
            StartTimestamp: types.MustTimeFromString("2022-01-14T19:13:42.009Z"),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.ActivatePipelineXAmzTargetEnumDataPipelineActivatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivatePipelineOutput != nil {
        // handle response
    }
}
```

## AddTags

Adds or modifies tags for the specified pipeline.

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
    res, err := s.SDK.AddTags(ctx, operations.AddTagsRequest{
        AddTagsInput: shared.AddTagsInput{
            PipelineID: "sint",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolor",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "a",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "in",
                    Value: "in",
                },
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.AddTagsXAmzTargetEnumDataPipelineAddTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsOutput != nil {
        // handle response
    }
}
```

## CreatePipeline

Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.

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
    res, err := s.SDK.CreatePipeline(ctx, operations.CreatePipelineRequest{
        CreatePipelineInput: shared.CreatePipelineInput{
            Description: sdk.String("ea"),
            Name: "Kayla Thompson",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: "delectus",
                },
                shared.Tag{
                    Key: "quidem",
                    Value: "provident",
                },
            },
            UniqueID: "nam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.CreatePipelineXAmzTargetEnumDataPipelineCreatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipelineOutput != nil {
        // handle response
    }
}
```

## DeactivatePipeline

<p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>

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
    res, err := s.SDK.DeactivatePipeline(ctx, operations.DeactivatePipelineRequest{
        DeactivatePipelineInput: shared.DeactivatePipelineInput{
            CancelActive: sdk.Bool(false),
            PipelineID: "vel",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeactivatePipelineXAmzTargetEnumDataPipelineDeactivatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeactivatePipelineOutput != nil {
        // handle response
    }
}
```

## DeletePipeline

<p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>

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
    res, err := s.SDK.DeletePipeline(ctx, operations.DeletePipelineRequest{
        DeletePipelineInput: shared.DeletePipelineInput{
            PipelineID: "id",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeletePipelineXAmzTargetEnumDataPipelineDeletePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeObjects

Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.

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
    res, err := s.SDK.DescribeObjects(ctx, operations.DescribeObjectsRequest{
        DescribeObjectsInput: shared.DescribeObjectsInput{
            EvaluateExpressions: sdk.Bool(false),
            Marker: sdk.String("aspernatur"),
            ObjectIds: []string{
                "magnam",
            },
            PipelineID: "et",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DescribeObjectsXAmzTargetEnumDataPipelineDescribeObjects,
        Marker: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeObjectsOutput != nil {
        // handle response
    }
}
```

## DescribePipelines

<p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>

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
    res, err := s.SDK.DescribePipelines(ctx, operations.DescribePipelinesRequest{
        DescribePipelinesInput: shared.DescribePipelinesInput{
            PipelineIds: []string{
                "ad",
                "eum",
                "dolor",
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.DescribePipelinesXAmzTargetEnumDataPipelineDescribePipelines,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePipelinesOutput != nil {
        // handle response
    }
}
```

## EvaluateExpression

Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.

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
    res, err := s.SDK.EvaluateExpression(ctx, operations.EvaluateExpressionRequest{
        EvaluateExpressionInput: shared.EvaluateExpressionInput{
            Expression: "eius",
            ObjectID: "maxime",
            PipelineID: "deleniti",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.EvaluateExpressionXAmzTargetEnumDataPipelineEvaluateExpression,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EvaluateExpressionOutput != nil {
        // handle response
    }
}
```

## GetPipelineDefinition

Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.

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
    res, err := s.SDK.GetPipelineDefinition(ctx, operations.GetPipelineDefinitionRequest{
        GetPipelineDefinitionInput: shared.GetPipelineDefinitionInput{
            PipelineID: "nihil",
            Version: sdk.String("repellat"),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.GetPipelineDefinitionXAmzTargetEnumDataPipelineGetPipelineDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPipelineDefinitionOutput != nil {
        // handle response
    }
}
```

## ListPipelines

Lists the pipeline identifiers for all active pipelines that you have permission to access.

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
    res, err := s.SDK.ListPipelines(ctx, operations.ListPipelinesRequest{
        ListPipelinesInput: shared.ListPipelinesInput{
            Marker: sdk.String("natus"),
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListPipelinesXAmzTargetEnumDataPipelineListPipelines,
        Marker: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelinesOutput != nil {
        // handle response
    }
}
```

## PollForTask

<p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>

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
    res, err := s.SDK.PollForTask(ctx, operations.PollForTaskRequest{
        PollForTaskInput: shared.PollForTaskInput{
            Hostname: sdk.String("constant-gyro.com"),
            InstanceIdentity: &shared.InstanceIdentity{
                Document: sdk.String("ab"),
                Signature: sdk.String("maiores"),
            },
            WorkerGroup: "quidem",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.PollForTaskXAmzTargetEnumDataPipelinePollForTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PollForTaskOutput != nil {
        // handle response
    }
}
```

## PutPipelineDefinition

<p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>

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
    res, err := s.SDK.PutPipelineDefinition(ctx, operations.PutPipelineDefinitionRequest{
        PutPipelineDefinitionInput: shared.PutPipelineDefinitionInput{
            ParameterObjects: []shared.ParameterObject{
                shared.ParameterObject{
                    Attributes: []shared.ParameterAttribute{
                        shared.ParameterAttribute{
                            Key: "fugiat",
                            StringValue: "amet",
                        },
                    },
                    ID: "0c5fbb25-8705-4320-ac73-d5fe9b90c289",
                },
                shared.ParameterObject{
                    Attributes: []shared.ParameterAttribute{
                        shared.ParameterAttribute{
                            Key: "occaecati",
                            StringValue: "rerum",
                        },
                    },
                    ID: "3fe49a8d-9cbf-4486-b332-3f9b77f3a410",
                },
                shared.ParameterObject{
                    Attributes: []shared.ParameterAttribute{
                        shared.ParameterAttribute{
                            Key: "iure",
                            StringValue: "odio",
                        },
                    },
                    ID: "4ebf6928-0d1b-4a77-a89e-bf737ae4203c",
                },
                shared.ParameterObject{
                    Attributes: []shared.ParameterAttribute{
                        shared.ParameterAttribute{
                            Key: "ad",
                            StringValue: "saepe",
                        },
                        shared.ParameterAttribute{
                            Key: "suscipit",
                            StringValue: "deserunt",
                        },
                        shared.ParameterAttribute{
                            Key: "provident",
                            StringValue: "minima",
                        },
                        shared.ParameterAttribute{
                            Key: "repellendus",
                            StringValue: "totam",
                        },
                    },
                    ID: "a0d446ce-2af7-4a73-8f3b-e453f870b326",
                },
            },
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "5a73429c-db1a-4842-abb6-79d2322715bf",
                    StringValue: "voluptatem",
                },
                shared.ParameterValue{
                    ID: "cbb1e31b-8b90-4f34-83a1-108e0adcf4b9",
                    StringValue: "qui",
                },
                shared.ParameterValue{
                    ID: "1879fce9-53f7-43ef-bfbc-7abd74dd39c0",
                    StringValue: "voluptatibus",
                },
            },
            PipelineID: "exercitationem",
            PipelineObjects: []shared.PipelineObject{
                shared.PipelineObject{
                    Fields: []shared.Field{
                        shared.Field{
                            Key: "porro",
                            RefValue: sdk.String("maiores"),
                            StringValue: sdk.String("doloribus"),
                        },
                    },
                    ID: "7c70a456-26d4-4368-93f1-6d9f5fce6c55",
                    Name: "Stephanie Gutkowski",
                },
                shared.PipelineObject{
                    Fields: []shared.Field{
                        shared.Field{
                            Key: "recusandae",
                            RefValue: sdk.String("aspernatur"),
                            StringValue: sdk.String("minima"),
                        },
                    },
                    ID: "0fb008c4-2e14-41aa-8366-c8dd6b144290",
                    Name: "Megan Kuhlman",
                },
                shared.PipelineObject{
                    Fields: []shared.Field{
                        shared.Field{
                            Key: "rem",
                            RefValue: sdk.String("fuga"),
                            StringValue: sdk.String("reprehenderit"),
                        },
                        shared.Field{
                            Key: "quidem",
                            RefValue: sdk.String("fugiat"),
                            StringValue: sdk.String("ut"),
                        },
                    },
                    ID: "66d28c10-ab3c-4dca-8251-904e523c7e0b",
                    Name: "Cody Blick",
                },
                shared.PipelineObject{
                    Fields: []shared.Field{
                        shared.Field{
                            Key: "aliquam",
                            RefValue: sdk.String("odio"),
                            StringValue: sdk.String("occaecati"),
                        },
                        shared.Field{
                            Key: "commodi",
                            RefValue: sdk.String("sapiente"),
                            StringValue: sdk.String("dolores"),
                        },
                        shared.Field{
                            Key: "deserunt",
                            RefValue: sdk.String("molestiae"),
                            StringValue: sdk.String("accusantium"),
                        },
                        shared.Field{
                            Key: "porro",
                            RefValue: sdk.String("eum"),
                            StringValue: sdk.String("quas"),
                        },
                    },
                    ID: "8282aa48-2562-4f22-ae98-17ee17cbe61e",
                    Name: "Opal Kozey",
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.PutPipelineDefinitionXAmzTargetEnumDataPipelinePutPipelineDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutPipelineDefinitionOutput != nil {
        // handle response
    }
}
```

## QueryObjects

Queries the specified pipeline for the names of objects that match the specified set of conditions.

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
    res, err := s.SDK.QueryObjects(ctx, operations.QueryObjectsRequest{
        QueryObjectsInput: shared.QueryObjectsInput{
            Limit: sdk.Int64(766964),
            Marker: sdk.String("consequuntur"),
            PipelineID: "consequatur",
            Query: &shared.Query{
                Selectors: []shared.Selector{
                    shared.Selector{
                        FieldName: sdk.String("quaerat"),
                        Operator: &shared.Operator{
                            Type: shared.OperatorTypeEnumBetween.ToPointer(),
                            Values: []string{
                                "esse",
                            },
                        },
                    },
                    shared.Selector{
                        FieldName: sdk.String("blanditiis"),
                        Operator: &shared.Operator{
                            Type: shared.OperatorTypeEnumLe.ToPointer(),
                            Values: []string{
                                "nulla",
                                "quas",
                                "esse",
                                "quasi",
                            },
                        },
                    },
                    shared.Selector{
                        FieldName: sdk.String("a"),
                        Operator: &shared.Operator{
                            Type: shared.OperatorTypeEnumGe.ToPointer(),
                            Values: []string{
                                "pariatur",
                                "possimus",
                                "quia",
                            },
                        },
                    },
                    shared.Selector{
                        FieldName: sdk.String("eveniet"),
                        Operator: &shared.Operator{
                            Type: shared.OperatorTypeEnumBetween.ToPointer(),
                            Values: []string{
                                "veritatis",
                                "consequuntur",
                                "quasi",
                                "similique",
                            },
                        },
                    },
                },
            },
            Sphere: "culpa",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.QueryObjectsXAmzTargetEnumDataPipelineQueryObjects,
        Limit: sdk.String("libero"),
        Marker: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryObjectsOutput != nil {
        // handle response
    }
}
```

## RemoveTags

Removes existing tags from the specified pipeline.

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
    res, err := s.SDK.RemoveTags(ctx, operations.RemoveTagsRequest{
        RemoveTagsInput: shared.RemoveTagsInput{
            PipelineID: "soluta",
            TagKeys: []string{
                "aliquam",
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.RemoveTagsXAmzTargetEnumDataPipelineRemoveTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTagsOutput != nil {
        // handle response
    }
}
```

## ReportTaskProgress

<p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>

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
    res, err := s.SDK.ReportTaskProgress(ctx, operations.ReportTaskProgressRequest{
        ReportTaskProgressInput: shared.ReportTaskProgressInput{
            Fields: []shared.Field{
                shared.Field{
                    Key: "qui",
                    RefValue: sdk.String("quibusdam"),
                    StringValue: sdk.String("ex"),
                },
                shared.Field{
                    Key: "deleniti",
                    RefValue: sdk.String("itaque"),
                    StringValue: sdk.String("dolorum"),
                },
                shared.Field{
                    Key: "architecto",
                    RefValue: sdk.String("omnis"),
                    StringValue: sdk.String("tenetur"),
                },
            },
            TaskID: "quasi",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.ReportTaskProgressXAmzTargetEnumDataPipelineReportTaskProgress,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportTaskProgressOutput != nil {
        // handle response
    }
}
```

## ReportTaskRunnerHeartbeat

Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.

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
    res, err := s.SDK.ReportTaskRunnerHeartbeat(ctx, operations.ReportTaskRunnerHeartbeatRequest{
        ReportTaskRunnerHeartbeatInput: shared.ReportTaskRunnerHeartbeatInput{
            Hostname: sdk.String("enormous-orator.org"),
            TaskrunnerID: "accusantium",
            WorkerGroup: sdk.String("rem"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.ReportTaskRunnerHeartbeatXAmzTargetEnumDataPipelineReportTaskRunnerHeartbeat,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportTaskRunnerHeartbeatOutput != nil {
        // handle response
    }
}
```

## SetStatus

Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.

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
    res, err := s.SDK.SetStatus(ctx, operations.SetStatusRequest{
        SetStatusInput: shared.SetStatusInput{
            ObjectIds: []string{
                "dolor",
            },
            PipelineID: "occaecati",
            Status: "numquam",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.SetStatusXAmzTargetEnumDataPipelineSetStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetTaskStatus

Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.

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
    res, err := s.SDK.SetTaskStatus(ctx, operations.SetTaskStatusRequest{
        SetTaskStatusInput: shared.SetTaskStatusInput{
            ErrorID: sdk.String("natus"),
            ErrorMessage: sdk.String("velit"),
            ErrorStackTrace: sdk.String("voluptatibus"),
            TaskID: "voluptas",
            TaskStatus: shared.TaskStatusEnumFalse,
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.SetTaskStatusXAmzTargetEnumDataPipelineSetTaskStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetTaskStatusOutput != nil {
        // handle response
    }
}
```

## ValidatePipelineDefinition

Validates the specified pipeline definition to ensure that it is well formed and can be run without error.

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
    res, err := s.SDK.ValidatePipelineDefinition(ctx, operations.ValidatePipelineDefinitionRequest{
        ValidatePipelineDefinitionInput: shared.ValidatePipelineDefinitionInput{
            ParameterObjects: []shared.ParameterObject{
                shared.ParameterObject{
                    Attributes: []shared.ParameterAttribute{
                        shared.ParameterAttribute{
                            Key: "asperiores",
                            StringValue: "nemo",
                        },
                        shared.ParameterAttribute{
                            Key: "quae",
                            StringValue: "quaerat",
                        },
                        shared.ParameterAttribute{
                            Key: "porro",
                            StringValue: "quod",
                        },
                    },
                    ID: "413aa63a-ae8d-4678-a4db-b675fd5e60b3",
                },
                shared.ParameterObject{
                    Attributes: []shared.ParameterAttribute{
                        shared.ParameterAttribute{
                            Key: "exercitationem",
                            StringValue: "earum",
                        },
                        shared.ParameterAttribute{
                            Key: "facere",
                            StringValue: "numquam",
                        },
                    },
                    ID: "f6fbee41-f333-417f-a35b-60eb1ea42655",
                },
            },
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "ba3c2874-4ed5-43b8-8f3a-8d8f5c0b2f2f",
                    StringValue: "facilis",
                },
                shared.ParameterValue{
                    ID: "7b194a27-6b26-4916-be1f-08f4294e3698",
                    StringValue: "voluptatibus",
                },
            },
            PipelineID: "tempora",
            PipelineObjects: []shared.PipelineObject{
                shared.PipelineObject{
                    Fields: []shared.Field{
                        shared.Field{
                            Key: "reiciendis",
                            RefValue: sdk.String("ex"),
                            StringValue: sdk.String("sit"),
                        },
                        shared.Field{
                            Key: "non",
                            RefValue: sdk.String("officiis"),
                            StringValue: sdk.String("praesentium"),
                        },
                    },
                    ID: "b445e80c-a55e-4fd2-8e45-7e1858b6a89f",
                    Name: "Darrel Doyle",
                },
                shared.PipelineObject{
                    Fields: []shared.Field{
                        shared.Field{
                            Key: "dolorum",
                            RefValue: sdk.String("corrupti"),
                            StringValue: sdk.String("accusamus"),
                        },
                        shared.Field{
                            Key: "tempora",
                            RefValue: sdk.String("atque"),
                            StringValue: sdk.String("fugit"),
                        },
                        shared.Field{
                            Key: "ut",
                            RefValue: sdk.String("fugiat"),
                            StringValue: sdk.String("voluptatem"),
                        },
                    },
                    ID: "ab407508-8e51-4862-865e-904f3b1194b8",
                    Name: "Marco White I",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ValidatePipelineDefinitionXAmzTargetEnumDataPipelineValidatePipelineDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidatePipelineDefinitionOutput != nil {
        // handle response
    }
}
```
