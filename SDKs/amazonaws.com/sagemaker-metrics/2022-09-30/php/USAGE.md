<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMetricsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RawMetricData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutMetricsRequest();
    $request->requestBody = new BatchPutMetricsRequestBody();
    $request->requestBody->metricData = [
        new RawMetricData(),
        new RawMetricData(),
        new RawMetricData(),
    ];
    $request->requestBody->trialComponentName = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->batchPutMetrics($request);

    if ($response->batchPutMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->