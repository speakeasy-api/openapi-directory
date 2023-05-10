<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelShipmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelShipmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelShipmentRequest();
    $request->shipmentId = 'corrupti';

    $requestSecurity = new CancelShipmentSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shipment->cancelShipment($request, $requestSecurity);

    if ($response->shipment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->