<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetMetricDataRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetMetricDataQuery;
use \OpenAPI\OpenAPI\Models\Shared\MetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricNamespaceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetMetricDataRequest();
    $request->requestBody = new BatchGetMetricDataRequestBody();
    $request->requestBody->queries = [
        new BatchGetMetricDataQuery(),
        new BatchGetMetricDataQuery(),
        new BatchGetMetricDataQuery(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->batchGetMetricData($request);

    if ($response->batchGetMetricDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->