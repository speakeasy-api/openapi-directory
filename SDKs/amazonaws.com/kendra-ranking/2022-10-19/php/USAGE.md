<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityUnitsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRescoreExecutionPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRescoreExecutionPlanRequest();
    $request->createRescoreExecutionPlanRequest = new CreateRescoreExecutionPlanRequest();
    $request->createRescoreExecutionPlanRequest->capacityUnits = new CapacityUnitsConfiguration();
    $request->createRescoreExecutionPlanRequest->capacityUnits->rescoreCapacityUnits = 548814;
    $request->createRescoreExecutionPlanRequest->clientToken = 'provident';
    $request->createRescoreExecutionPlanRequest->description = 'distinctio';
    $request->createRescoreExecutionPlanRequest->name = 'Stuart Stiedemann';
    $request->createRescoreExecutionPlanRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = CreateRescoreExecutionPlanXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_CREATE_RESCORE_EXECUTION_PLAN;

    $response = $sdk->createRescoreExecutionPlan($request);

    if ($response->createRescoreExecutionPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->