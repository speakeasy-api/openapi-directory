<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoPredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAutoPredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalDataset;
use \OpenAPI\OpenAPI\Models\Shared\AttributeConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitorConfig;
use \OpenAPI\OpenAPI\Models\Shared\OptimizationMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TimeAlignmentBoundary;
use \OpenAPI\OpenAPI\Models\Shared\DayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonthEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoPredictorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAutoPredictorRequest();
    $request->createAutoPredictorRequest = new CreateAutoPredictorRequest();
    $request->createAutoPredictorRequest->dataConfig = new DataConfig();
    $request->createAutoPredictorRequest->dataConfig->additionalDatasets = [
        new AdditionalDataset(),
        new AdditionalDataset(),
        new AdditionalDataset(),
    ];
    $request->createAutoPredictorRequest->dataConfig->attributeConfigs = [
        new AttributeConfig(),
        new AttributeConfig(),
        new AttributeConfig(),
    ];
    $request->createAutoPredictorRequest->dataConfig->datasetGroupArn = 'distinctio';
    $request->createAutoPredictorRequest->encryptionConfig = new EncryptionConfig();
    $request->createAutoPredictorRequest->encryptionConfig->kmsKeyArn = 'quibusdam';
    $request->createAutoPredictorRequest->encryptionConfig->roleArn = 'unde';
    $request->createAutoPredictorRequest->explainPredictor = false;
    $request->createAutoPredictorRequest->forecastDimensions = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->createAutoPredictorRequest->forecastFrequency = 'deserunt';
    $request->createAutoPredictorRequest->forecastHorizon = 384382;
    $request->createAutoPredictorRequest->forecastTypes = [
        'magnam',
        'debitis',
    ];
    $request->createAutoPredictorRequest->monitorConfig = new MonitorConfig();
    $request->createAutoPredictorRequest->monitorConfig->monitorName = 'ipsa';
    $request->createAutoPredictorRequest->optimizationMetric = OptimizationMetricEnum::MAPE;
    $request->createAutoPredictorRequest->predictorName = 'tempora';
    $request->createAutoPredictorRequest->referencePredictorArn = 'suscipit';
    $request->createAutoPredictorRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createAutoPredictorRequest->timeAlignmentBoundary = new TimeAlignmentBoundary();
    $request->createAutoPredictorRequest->timeAlignmentBoundary->dayOfMonth = 791725;
    $request->createAutoPredictorRequest->timeAlignmentBoundary->dayOfWeek = DayOfWeekEnum::SATURDAY;
    $request->createAutoPredictorRequest->timeAlignmentBoundary->hour = 528895;
    $request->createAutoPredictorRequest->timeAlignmentBoundary->month = MonthEnum::JUNE;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = CreateAutoPredictorXAmzTargetEnum::AMAZON_FORECAST_CREATE_AUTO_PREDICTOR;

    $response = $sdk->createAutoPredictor($request);

    if ($response->createAutoPredictorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->