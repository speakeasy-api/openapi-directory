<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleDetailsByRegistrationNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\VehicleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehicleDetailsByRegistrationNumberRequest();
    $request->vehicleRequest = new VehicleRequest();
    $request->vehicleRequest->registrationNumber = 'corrupti';
    $request->xCorrelationId = 'provident';
    $request->xApiKey = 'distinctio';

    $response = $sdk->vehicle->getVehicleDetailsByRegistrationNumber($request);

    if ($response->vehicle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->