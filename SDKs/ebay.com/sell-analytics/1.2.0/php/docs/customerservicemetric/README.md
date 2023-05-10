# customerServiceMetric

### Available Operations

* [getCustomerServiceMetric](#getcustomerservicemetric) - Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.

## getCustomerServiceMetric

Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerServiceMetricSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerServiceMetricRequest();
    $request->customerServiceMetricType = 'quibusdam';
    $request->evaluationMarketplaceId = 'unde';
    $request->evaluationType = 'nulla';

    $requestSecurity = new GetCustomerServiceMetricSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customerServiceMetric->getCustomerServiceMetric($request, $requestSecurity);

    if ($response->getCustomerServiceMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
