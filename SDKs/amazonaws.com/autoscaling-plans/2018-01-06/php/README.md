# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createScalingPlan](docs/sdk/README.md#createscalingplan) - Creates a scaling plan. 
* [deleteScalingPlan](docs/sdk/README.md#deletescalingplan) - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* [describeScalingPlanResources](docs/sdk/README.md#describescalingplanresources) - Describes the scalable resources in the specified scaling plan.
* [describeScalingPlans](docs/sdk/README.md#describescalingplans) - Describes one or more of your scaling plans.
* [getScalingPlanResourceForecastData](docs/sdk/README.md#getscalingplanresourceforecastdata) - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* [updateScalingPlan](docs/sdk/README.md#updatescalingplan) - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
