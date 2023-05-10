<!-- Start SDK Example Usage -->
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
    $request->customerServiceMetricType = 'corrupti';
    $request->evaluationMarketplaceId = 'provident';
    $request->evaluationType = 'distinctio';

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
<!-- End SDK Example Usage -->