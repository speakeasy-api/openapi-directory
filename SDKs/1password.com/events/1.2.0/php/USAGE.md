<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetCursor();
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');
    $request->limit = 5928.45;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');

    $requestSecurity = new GetAuditEventsSecurity();
    $requestSecurity->jwtsa = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apiV1->getAuditEvents($request, $requestSecurity);

    if ($response->getAuditEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->