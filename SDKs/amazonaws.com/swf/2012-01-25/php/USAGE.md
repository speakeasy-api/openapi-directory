<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CountClosedWorkflowExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CountClosedWorkflowExecutionsInput;
use \OpenAPI\OpenAPI\Models\Shared\CloseStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\CloseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionTimeFilter;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowExecutionFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowTypeFilter;
use \OpenAPI\OpenAPI\Models\Operations\CountClosedWorkflowExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountClosedWorkflowExecutionsRequest();
    $request->countClosedWorkflowExecutionsInput = new CountClosedWorkflowExecutionsInput();
    $request->countClosedWorkflowExecutionsInput->closeStatusFilter = new CloseStatusFilter();
    $request->countClosedWorkflowExecutionsInput->closeStatusFilter->status = CloseStatusEnum::TERMINATED;
    $request->countClosedWorkflowExecutionsInput->closeTimeFilter = new ExecutionTimeFilter();
    $request->countClosedWorkflowExecutionsInput->closeTimeFilter->latestDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T21:52:56.087Z');
    $request->countClosedWorkflowExecutionsInput->closeTimeFilter->oldestDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');
    $request->countClosedWorkflowExecutionsInput->domain = 'nulla';
    $request->countClosedWorkflowExecutionsInput->executionFilter = new WorkflowExecutionFilter();
    $request->countClosedWorkflowExecutionsInput->executionFilter->workflowId = 'corrupti';
    $request->countClosedWorkflowExecutionsInput->startTimeFilter = new ExecutionTimeFilter();
    $request->countClosedWorkflowExecutionsInput->startTimeFilter->latestDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T02:21:06.409Z');
    $request->countClosedWorkflowExecutionsInput->startTimeFilter->oldestDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-16T11:56:06.019Z');
    $request->countClosedWorkflowExecutionsInput->tagFilter = new TagFilter();
    $request->countClosedWorkflowExecutionsInput->tagFilter->tag = 'suscipit';
    $request->countClosedWorkflowExecutionsInput->typeFilter = new WorkflowTypeFilter();
    $request->countClosedWorkflowExecutionsInput->typeFilter->name = 'Dr. Valerie Toy';
    $request->countClosedWorkflowExecutionsInput->typeFilter->version = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = CountClosedWorkflowExecutionsXAmzTargetEnum::SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS;

    $response = $sdk->countClosedWorkflowExecutions($request);

    if ($response->workflowExecutionCount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->