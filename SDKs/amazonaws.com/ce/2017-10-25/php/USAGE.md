<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnomalyMonitor;
use \OpenAPI\OpenAPI\Models\Shared\MonitorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\MonitorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalyMonitorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAnomalyMonitorRequest();
    $request->createAnomalyMonitorRequest = new CreateAnomalyMonitorRequest();
    $request->createAnomalyMonitorRequest->anomalyMonitor = new AnomalyMonitor();
    $request->createAnomalyMonitorRequest->anomalyMonitor->creationDate = 'corrupti';
    $request->createAnomalyMonitorRequest->anomalyMonitor->dimensionalValueCount = 592845;
    $request->createAnomalyMonitorRequest->anomalyMonitor->lastEvaluatedDate = 'distinctio';
    $request->createAnomalyMonitorRequest->anomalyMonitor->lastUpdatedDate = 'quibusdam';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorArn = 'unde';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorDimension = MonitorDimensionEnum::SERVICE;
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorName = 'nulla';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification = new Expression();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->and = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories = new CostCategoryValues();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories->key = 'illum';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories->matchOptions = [
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::CASE_SENSITIVE,
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories->values = [
        'iure',
        'magnam',
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions = new DimensionValues();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions->key = DimensionEnum::AGREEMENT_END_DATE_TIME_BEFORE;
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions->matchOptions = [
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions->values = [
        'suscipit',
        'molestiae',
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->not = new Expression();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->or = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags = new TagValues();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags->key = 'placeat';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags->values = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorType = MonitorTypeEnum::CUSTOM;
    $request->createAnomalyMonitorRequest->resourceTags = [
        new ResourceTag(),
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = CreateAnomalyMonitorXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_CREATE_ANOMALY_MONITOR;

    $response = $sdk->createAnomalyMonitor($request);

    if ($response->createAnomalyMonitorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->