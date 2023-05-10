<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateScalingPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateScalingPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationSource;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Shared\ScalingInstruction;
use \OpenAPI\OpenAPI\Models\Shared\CustomizedLoadMetricSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\MetricStatisticEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredefinedLoadMetricSpecification;
use \OpenAPI\OpenAPI\Models\Shared\LoadMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredictiveScalingMaxCapacityBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredictiveScalingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalingPolicyUpdateBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTrackingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CustomizedScalingMetricSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PredefinedScalingMetricSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ScalingMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScalingPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScalingPlanRequest();
    $request->createScalingPlanRequest = new CreateScalingPlanRequest();
    $request->createScalingPlanRequest->applicationSource = new ApplicationSource();
    $request->createScalingPlanRequest->applicationSource->cloudFormationStackARN = 'corrupti';
    $request->createScalingPlanRequest->applicationSource->tagFilters = [
        new TagFilter(),
        new TagFilter(),
        new TagFilter(),
    ];
    $request->createScalingPlanRequest->scalingInstructions = [
        new ScalingInstruction(),
        new ScalingInstruction(),
        new ScalingInstruction(),
    ];
    $request->createScalingPlanRequest->scalingPlanName = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateScalingPlanXAmzTargetEnum::ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_CREATE_SCALING_PLAN;

    $response = $sdk->createScalingPlan($request);

    if ($response->createScalingPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->