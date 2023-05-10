<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderRequest();
    $request->fieldGroups = 'corrupti';
    $request->orderId = 'provident';

    $requestSecurity = new GetOrderSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->order->getOrder($request, $requestSecurity);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->