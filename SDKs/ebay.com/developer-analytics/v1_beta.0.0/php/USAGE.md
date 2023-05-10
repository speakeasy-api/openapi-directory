<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRateLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRateLimitsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRateLimitsRequest();
    $request->apiContext = 'corrupti';
    $request->apiName = 'provident';

    $requestSecurity = new GetRateLimitsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->rateLimit->getRateLimits($request, $requestSecurity);

    if ($response->rateLimitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->