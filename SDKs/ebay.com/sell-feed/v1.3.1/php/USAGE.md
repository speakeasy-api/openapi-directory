<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceMetricsTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerServiceMetricsFilterCriteria;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomerServiceMetricTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomerServiceMetricTaskRequest();
    $request->createServiceMetricsTaskRequest = new CreateServiceMetricsTaskRequest();
    $request->createServiceMetricsTaskRequest->feedType = 'corrupti';
    $request->createServiceMetricsTaskRequest->filterCriteria = new CustomerServiceMetricsFilterCriteria();
    $request->createServiceMetricsTaskRequest->filterCriteria->customerServiceMetricType = 'provident';
    $request->createServiceMetricsTaskRequest->filterCriteria->evaluationMarketplaceId = 'distinctio';
    $request->createServiceMetricsTaskRequest->filterCriteria->listingCategories = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->createServiceMetricsTaskRequest->filterCriteria->shippingRegions = [
        'error',
        'deserunt',
    ];
    $request->createServiceMetricsTaskRequest->schemaVersion = 'suscipit';
    $request->acceptLanguage = 'iure';

    $requestSecurity = new CreateCustomerServiceMetricTaskSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerServiceMetricTask->createCustomerServiceMetricTask($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->