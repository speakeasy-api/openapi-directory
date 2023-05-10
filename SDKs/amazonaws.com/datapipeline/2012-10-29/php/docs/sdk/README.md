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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivatePipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\ParameterValue;
use \OpenAPI\OpenAPI\Models\Operations\ActivatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivatePipelineRequest();
    $request->activatePipelineInput = new ActivatePipelineInput();
    $request->activatePipelineInput->parameterValues = [
        new ParameterValue(),
        new ParameterValue(),
    ];
    $request->activatePipelineInput->pipelineId = 'iure';
    $request->activatePipelineInput->startTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T12:04:06.508Z');
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = ActivatePipelineXAmzTargetEnum::DATA_PIPELINE_ACTIVATE_PIPELINE;

    $response = $sdk->sdk->activatePipeline($request);

    if ($response->activatePipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTags

Adds or modifies tags for the specified pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsRequest();
    $request->addTagsInput = new AddTagsInput();
    $request->addTagsInput->pipelineId = 'voluptatum';
    $request->addTagsInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = AddTagsXAmzTargetEnum::DATA_PIPELINE_ADD_TAGS;

    $response = $sdk->sdk->addTags($request);

    if ($response->addTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPipeline

Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineRequest();
    $request->createPipelineInput = new CreatePipelineInput();
    $request->createPipelineInput->description = 'deserunt';
    $request->createPipelineInput->name = 'Roberta Sipes';
    $request->createPipelineInput->tags = [
        new Tag(),
    ];
    $request->createPipelineInput->uniqueId = 'at';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = CreatePipelineXAmzTargetEnum::DATA_PIPELINE_CREATE_PIPELINE;

    $response = $sdk->sdk->createPipeline($request);

    if ($response->createPipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivatePipeline

<p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeactivatePipelineInput;
use \OpenAPI\OpenAPI\Models\Operations\DeactivatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivatePipelineRequest();
    $request->deactivatePipelineInput = new DeactivatePipelineInput();
    $request->deactivatePipelineInput->cancelActive = false;
    $request->deactivatePipelineInput->pipelineId = 'porro';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DeactivatePipelineXAmzTargetEnum::DATA_PIPELINE_DEACTIVATE_PIPELINE;

    $response = $sdk->sdk->deactivatePipeline($request);

    if ($response->deactivatePipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePipeline

<p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePipelineInput;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineRequest();
    $request->deletePipelineInput = new DeletePipelineInput();
    $request->deletePipelineInput->pipelineId = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DeletePipelineXAmzTargetEnum::DATA_PIPELINE_DELETE_PIPELINE;

    $response = $sdk->sdk->deletePipeline($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeObjects

Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeObjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeObjectsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeObjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeObjectsRequest();
    $request->describeObjectsInput = new DescribeObjectsInput();
    $request->describeObjectsInput->evaluateExpressions = false;
    $request->describeObjectsInput->marker = 'impedit';
    $request->describeObjectsInput->objectIds = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->describeObjectsInput->pipelineId = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DescribeObjectsXAmzTargetEnum::DATA_PIPELINE_DESCRIBE_OBJECTS;
    $request->marker = 'laboriosam';

    $response = $sdk->sdk->describeObjects($request);

    if ($response->describeObjectsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePipelines

<p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePipelinesInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePipelinesRequest();
    $request->describePipelinesInput = new DescribePipelinesInput();
    $request->describePipelinesInput->pipelineIds = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = DescribePipelinesXAmzTargetEnum::DATA_PIPELINE_DESCRIBE_PIPELINES;

    $response = $sdk->sdk->describePipelines($request);

    if ($response->describePipelinesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evaluateExpression

Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateExpressionRequest;
use \OpenAPI\OpenAPI\Models\Shared\EvaluateExpressionInput;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateExpressionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvaluateExpressionRequest();
    $request->evaluateExpressionInput = new EvaluateExpressionInput();
    $request->evaluateExpressionInput->expression = 'est';
    $request->evaluateExpressionInput->objectId = 'mollitia';
    $request->evaluateExpressionInput->pipelineId = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = EvaluateExpressionXAmzTargetEnum::DATA_PIPELINE_EVALUATE_EXPRESSION;

    $response = $sdk->sdk->evaluateExpression($request);

    if ($response->evaluateExpressionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPipelineDefinition

Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPipelineDefinitionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPipelineDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPipelineDefinitionRequest();
    $request->getPipelineDefinitionInput = new GetPipelineDefinitionInput();
    $request->getPipelineDefinitionInput->pipelineId = 'nemo';
    $request->getPipelineDefinitionInput->version = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = GetPipelineDefinitionXAmzTargetEnum::DATA_PIPELINE_GET_PIPELINE_DEFINITION;

    $response = $sdk->sdk->getPipelineDefinition($request);

    if ($response->getPipelineDefinitionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelines

Lists the pipeline identifiers for all active pipelines that you have permission to access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPipelinesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelinesRequest();
    $request->listPipelinesInput = new ListPipelinesInput();
    $request->listPipelinesInput->marker = 'mollitia';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = ListPipelinesXAmzTargetEnum::DATA_PIPELINE_LIST_PIPELINES;
    $request->marker = 'commodi';

    $response = $sdk->sdk->listPipelines($request);

    if ($response->listPipelinesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pollForTask

<p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PollForTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\PollForTaskInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceIdentity;
use \OpenAPI\OpenAPI\Models\Operations\PollForTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PollForTaskRequest();
    $request->pollForTaskInput = new PollForTaskInput();
    $request->pollForTaskInput->hostname = 'kind-ironclad.biz';
    $request->pollForTaskInput->instanceIdentity = new InstanceIdentity();
    $request->pollForTaskInput->instanceIdentity->document = 'error';
    $request->pollForTaskInput->instanceIdentity->signature = 'quia';
    $request->pollForTaskInput->workerGroup = 'quis';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = PollForTaskXAmzTargetEnum::DATA_PIPELINE_POLL_FOR_TASK;

    $response = $sdk->sdk->pollForTask($request);

    if ($response->pollForTaskOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPipelineDefinition

<p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPipelineDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPipelineDefinitionInput;
use \OpenAPI\OpenAPI\Models\Shared\ParameterObject;
use \OpenAPI\OpenAPI\Models\Shared\ParameterAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\PipelineObject;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Operations\PutPipelineDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPipelineDefinitionRequest();
    $request->putPipelineDefinitionInput = new PutPipelineDefinitionInput();
    $request->putPipelineDefinitionInput->parameterObjects = [
        new ParameterObject(),
        new ParameterObject(),
        new ParameterObject(),
        new ParameterObject(),
    ];
    $request->putPipelineDefinitionInput->parameterValues = [
        new ParameterValue(),
        new ParameterValue(),
    ];
    $request->putPipelineDefinitionInput->pipelineId = 'id';
    $request->putPipelineDefinitionInput->pipelineObjects = [
        new PipelineObject(),
        new PipelineObject(),
        new PipelineObject(),
        new PipelineObject(),
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = PutPipelineDefinitionXAmzTargetEnum::DATA_PIPELINE_PUT_PIPELINE_DEFINITION;

    $response = $sdk->sdk->putPipelineDefinition($request);

    if ($response->putPipelineDefinitionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryObjects

Queries the specified pipeline for the names of objects that match the specified set of conditions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryObjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryObjectsInput;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\Selector;
use \OpenAPI\OpenAPI\Models\Shared\Operator;
use \OpenAPI\OpenAPI\Models\Shared\OperatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryObjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryObjectsRequest();
    $request->queryObjectsInput = new QueryObjectsInput();
    $request->queryObjectsInput->limit = 976460;
    $request->queryObjectsInput->marker = 'vero';
    $request->queryObjectsInput->pipelineId = 'nihil';
    $request->queryObjectsInput->query = new Query();
    $request->queryObjectsInput->query->selectors = [
        new Selector(),
        new Selector(),
        new Selector(),
    ];
    $request->queryObjectsInput->sphere = 'voluptatibus';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = QueryObjectsXAmzTargetEnum::DATA_PIPELINE_QUERY_OBJECTS;
    $request->limit = 'ut';
    $request->marker = 'maiores';

    $response = $sdk->sdk->queryObjects($request);

    if ($response->queryObjectsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTags

Removes existing tags from the specified pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsInput;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsRequest();
    $request->removeTagsInput = new RemoveTagsInput();
    $request->removeTagsInput->pipelineId = 'dicta';
    $request->removeTagsInput->tagKeys = [
        'dolore',
        'iusto',
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = RemoveTagsXAmzTargetEnum::DATA_PIPELINE_REMOVE_TAGS;

    $response = $sdk->sdk->removeTags($request);

    if ($response->removeTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reportTaskProgress

<p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReportTaskProgressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportTaskProgressInput;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Operations\ReportTaskProgressXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportTaskProgressRequest();
    $request->reportTaskProgressInput = new ReportTaskProgressInput();
    $request->reportTaskProgressInput->fields = [
        new Field(),
    ];
    $request->reportTaskProgressInput->taskId = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = ReportTaskProgressXAmzTargetEnum::DATA_PIPELINE_REPORT_TASK_PROGRESS;

    $response = $sdk->sdk->reportTaskProgress($request);

    if ($response->reportTaskProgressOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reportTaskRunnerHeartbeat

Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReportTaskRunnerHeartbeatRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportTaskRunnerHeartbeatInput;
use \OpenAPI\OpenAPI\Models\Operations\ReportTaskRunnerHeartbeatXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportTaskRunnerHeartbeatRequest();
    $request->reportTaskRunnerHeartbeatInput = new ReportTaskRunnerHeartbeatInput();
    $request->reportTaskRunnerHeartbeatInput->hostname = 'bronze-trafficker.name';
    $request->reportTaskRunnerHeartbeatInput->taskrunnerId = 'veritatis';
    $request->reportTaskRunnerHeartbeatInput->workerGroup = 'itaque';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ReportTaskRunnerHeartbeatXAmzTargetEnum::DATA_PIPELINE_REPORT_TASK_RUNNER_HEARTBEAT;

    $response = $sdk->sdk->reportTaskRunnerHeartbeat($request);

    if ($response->reportTaskRunnerHeartbeatOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setStatus

Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetStatusInput;
use \OpenAPI\OpenAPI\Models\Operations\SetStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetStatusRequest();
    $request->setStatusInput = new SetStatusInput();
    $request->setStatusInput->objectIds = [
        'quibusdam',
        'labore',
        'modi',
    ];
    $request->setStatusInput->pipelineId = 'qui';
    $request->setStatusInput->status = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = SetStatusXAmzTargetEnum::DATA_PIPELINE_SET_STATUS;

    $response = $sdk->sdk->setStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTaskStatus

Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetTaskStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetTaskStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetTaskStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTaskStatusRequest();
    $request->setTaskStatusInput = new SetTaskStatusInput();
    $request->setTaskStatusInput->errorId = 'fugit';
    $request->setTaskStatusInput->errorMessage = 'dolorum';
    $request->setTaskStatusInput->errorStackTrace = 'excepturi';
    $request->setTaskStatusInput->taskId = 'tempora';
    $request->setTaskStatusInput->taskStatus = TaskStatusEnum::FALSE;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = SetTaskStatusXAmzTargetEnum::DATA_PIPELINE_SET_TASK_STATUS;

    $response = $sdk->sdk->setTaskStatus($request);

    if ($response->setTaskStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validatePipelineDefinition

Validates the specified pipeline definition to ensure that it is well formed and can be run without error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidatePipelineDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ValidatePipelineDefinitionInput;
use \OpenAPI\OpenAPI\Models\Shared\ParameterObject;
use \OpenAPI\OpenAPI\Models\Shared\ParameterAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\PipelineObject;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Operations\ValidatePipelineDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidatePipelineDefinitionRequest();
    $request->validatePipelineDefinitionInput = new ValidatePipelineDefinitionInput();
    $request->validatePipelineDefinitionInput->parameterObjects = [
        new ParameterObject(),
        new ParameterObject(),
    ];
    $request->validatePipelineDefinitionInput->parameterValues = [
        new ParameterValue(),
        new ParameterValue(),
        new ParameterValue(),
    ];
    $request->validatePipelineDefinitionInput->pipelineId = 'necessitatibus';
    $request->validatePipelineDefinitionInput->pipelineObjects = [
        new PipelineObject(),
        new PipelineObject(),
        new PipelineObject(),
    ];
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ValidatePipelineDefinitionXAmzTargetEnum::DATA_PIPELINE_VALIDATE_PIPELINE_DEFINITION;

    $response = $sdk->sdk->validatePipelineDefinition($request);

    if ($response->validatePipelineDefinitionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
