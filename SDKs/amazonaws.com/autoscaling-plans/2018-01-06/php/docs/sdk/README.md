# SDK

## Overview

<fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources. </p> <p> <b>API Summary</b> </p> <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p> <ul> <li> <p>Create and manage scaling plans</p> </li> <li> <p>Define target tracking scaling policies to dynamically scale your resources based on utilization</p> </li> <li> <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster</p> </li> <li> <p>Set minimum and maximum capacity limits</p> </li> <li> <p>Retrieve information on existing scaling plans</p> </li> <li> <p>Access current forecast data and historical forecast data for up to 56 days previous</p> </li> </ul> <p>To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/autoscaling-plans/>
### Available Operations

* [createScalingPlan](#createscalingplan) - Creates a scaling plan. 
* [deleteScalingPlan](#deletescalingplan) - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* [describeScalingPlanResources](#describescalingplanresources) - Describes the scalable resources in the specified scaling plan.
* [describeScalingPlans](#describescalingplans) - Describes one or more of your scaling plans.
* [getScalingPlanResourceForecastData](#getscalingplanresourceforecastdata) - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* [updateScalingPlan](#updatescalingplan) - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

## createScalingPlan

Creates a scaling plan. 

### Example Usage

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
    $request->createScalingPlanRequest->applicationSource->cloudFormationStackARN = 'suscipit';
    $request->createScalingPlanRequest->applicationSource->tagFilters = [
        new TagFilter(),
        new TagFilter(),
    ];
    $request->createScalingPlanRequest->scalingInstructions = [
        new ScalingInstruction(),
        new ScalingInstruction(),
    ];
    $request->createScalingPlanRequest->scalingPlanName = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = CreateScalingPlanXAmzTargetEnum::ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_CREATE_SCALING_PLAN;

    $response = $sdk->sdk->createScalingPlan($request);

    if ($response->createScalingPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScalingPlan

<p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteScalingPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScalingPlanRequest();
    $request->deleteScalingPlanRequest = new DeleteScalingPlanRequest();
    $request->deleteScalingPlanRequest->scalingPlanName = 'voluptatum';
    $request->deleteScalingPlanRequest->scalingPlanVersion = 479977;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DeleteScalingPlanXAmzTargetEnum::ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DELETE_SCALING_PLAN;

    $response = $sdk->sdk->deleteScalingPlan($request);

    if ($response->deleteScalingPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScalingPlanResources

Describes the scalable resources in the specified scaling plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPlanResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScalingPlanResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPlanResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScalingPlanResourcesRequest();
    $request->describeScalingPlanResourcesRequest = new DescribeScalingPlanResourcesRequest();
    $request->describeScalingPlanResourcesRequest->maxResults = 648172;
    $request->describeScalingPlanResourcesRequest->nextToken = 'perferendis';
    $request->describeScalingPlanResourcesRequest->scalingPlanName = 'ipsam';
    $request->describeScalingPlanResourcesRequest->scalingPlanVersion = 832620;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DescribeScalingPlanResourcesXAmzTargetEnum::ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DESCRIBE_SCALING_PLAN_RESOURCES;

    $response = $sdk->sdk->describeScalingPlanResources($request);

    if ($response->describeScalingPlanResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScalingPlans

Describes one or more of your scaling plans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPlansRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeScalingPlansRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationSource;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScalingPlansXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScalingPlansRequest();
    $request->describeScalingPlansRequest = new DescribeScalingPlansRequest();
    $request->describeScalingPlansRequest->applicationSources = [
        new ApplicationSource(),
        new ApplicationSource(),
        new ApplicationSource(),
        new ApplicationSource(),
    ];
    $request->describeScalingPlansRequest->maxResults = 800911;
    $request->describeScalingPlansRequest->nextToken = 'esse';
    $request->describeScalingPlansRequest->scalingPlanNames = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->describeScalingPlansRequest->scalingPlanVersion = 720633;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DescribeScalingPlansXAmzTargetEnum::ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DESCRIBE_SCALING_PLANS;

    $response = $sdk->sdk->describeScalingPlans($request);

    if ($response->describeScalingPlansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScalingPlanResourceForecastData

<p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScalingPlanResourceForecastDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetScalingPlanResourceForecastDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ForecastDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetScalingPlanResourceForecastDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScalingPlanResourceForecastDataRequest();
    $request->getScalingPlanResourceForecastDataRequest = new GetScalingPlanResourceForecastDataRequest();
    $request->getScalingPlanResourceForecastDataRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T15:33:40.440Z');
    $request->getScalingPlanResourceForecastDataRequest->forecastDataType = ForecastDataTypeEnum::LOAD_FORECAST;
    $request->getScalingPlanResourceForecastDataRequest->resourceId = 'modi';
    $request->getScalingPlanResourceForecastDataRequest->scalableDimension = ScalableDimensionEnum::ECS_SERVICE_DESIRED_COUNT;
    $request->getScalingPlanResourceForecastDataRequest->scalingPlanName = 'impedit';
    $request->getScalingPlanResourceForecastDataRequest->scalingPlanVersion = 736918;
    $request->getScalingPlanResourceForecastDataRequest->serviceNamespace = ServiceNamespaceEnum::EC2;
    $request->getScalingPlanResourceForecastDataRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-07T12:31:06.574Z');
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = GetScalingPlanResourceForecastDataXAmzTargetEnum::ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_GET_SCALING_PLAN_RESOURCE_FORECAST_DATA;

    $response = $sdk->sdk->getScalingPlanResourceForecastData($request);

    if ($response->getScalingPlanResourceForecastDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScalingPlan

<p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScalingPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateScalingPlanRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateScalingPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScalingPlanRequest();
    $request->updateScalingPlanRequest = new UpdateScalingPlanRequest();
    $request->updateScalingPlanRequest->applicationSource = new ApplicationSource();
    $request->updateScalingPlanRequest->applicationSource->cloudFormationStackARN = 'natus';
    $request->updateScalingPlanRequest->applicationSource->tagFilters = [
        new TagFilter(),
        new TagFilter(),
    ];
    $request->updateScalingPlanRequest->scalingInstructions = [
        new ScalingInstruction(),
        new ScalingInstruction(),
        new ScalingInstruction(),
        new ScalingInstruction(),
    ];
    $request->updateScalingPlanRequest->scalingPlanName = 'saepe';
    $request->updateScalingPlanRequest->scalingPlanVersion = 681820;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = UpdateScalingPlanXAmzTargetEnum::ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_UPDATE_SCALING_PLAN;

    $response = $sdk->sdk->updateScalingPlan($request);

    if ($response->updateScalingPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
