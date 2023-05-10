<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AirtravelCoordinatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AirtravelCoordinatesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AirtravelCoordinatesRequest();
    $request->contentType = 'application/x-www-form-urlencoded';
    $request->requestBody = new AirtravelCoordinatesRequestBody();
    $request->requestBody->apiKeyL1 = 'd95fead6-e8a6-4547-9fb9-7835101a3960';
    $request->requestBody->apiKeyL2 = 'c60f8db5-7204-4427-960d-27400c38b166';
    $request->requestBody->destinationAirportLatitude = 24.9056;
    $request->requestBody->destinationAirportLongitude = 67.1569;
    $request->requestBody->numberOfPassengers = 2;
    $request->requestBody->originAirportLatitude = 31.5208;
    $request->requestBody->originAirportLongitude = 74.4028;
    $request->requestBody->travelClass = 'Economy';
    $request->requestBody->travelMode = 'round trip';

    $response = $sdk->airtravelCoordinates->airtravelCoordinates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->