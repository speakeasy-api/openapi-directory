<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DonationsCarbonCalculateRequest();
    $request->destinationAddress = 5488.14;
    $request->distanceMi = 5928.45;
    $request->originAddress = 7151.9;
    $request->transportationMethod = GetApiV1DonationsCarbonCalculateTransportationMethodEnum::SEA;
    $request->weightLb = 6027.63;

    $requestSecurity = new GetApiV1DonationsCarbonCalculateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getApiV1DonationsCarbonCalculate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->