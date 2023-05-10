# vehicle

### Available Operations

* [getVehicleDetailsByRegistrationNumber](#getvehicledetailsbyregistrationnumber) - Get vehicle details by registration number

## getVehicleDetailsByRegistrationNumber

Returns vehicle details based on registration number

### Example Usage

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
    $request->vehicleRequest->registrationNumber = 'quibusdam';
    $request->xCorrelationId = 'unde';
    $request->xApiKey = 'nulla';

    $response = $sdk->vehicle->getVehicleDetailsByRegistrationNumber($request);

    if ($response->vehicle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
