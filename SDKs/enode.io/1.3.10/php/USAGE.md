<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ControlChargerChargingRequest();
    $request->requestBody = new ControlChargerChargingRequestBody();
    $request->requestBody->action = ControlChargerChargingRequestBodyActionEnum::START;
    $request->chargerId = 'corrupti';

    $requestSecurity = new ControlChargerChargingSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargers->controlChargerCharging($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->