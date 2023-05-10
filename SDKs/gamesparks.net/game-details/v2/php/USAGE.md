<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETPrecisionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnalyticsDataUsingGETRequest();
    $request->apiKey = 'corrupti';
    $request->dataType = GETAnalyticsDataUsingGETDataTypeEnum::SESSION_ANALYTIC;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2021-04-24');
    $request->keys = 'unde';
    $request->precision = GETAnalyticsDataUsingGETPrecisionEnum::MONTHLY;
    $request->stage = GETAnalyticsDataUsingGETStageEnum::PREVIEW;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2021-09-24');

    $response = $sdk->analytics->getAnalyticsDataUsingGET($request);

    if ($response->analyticsDataSwaggerModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->