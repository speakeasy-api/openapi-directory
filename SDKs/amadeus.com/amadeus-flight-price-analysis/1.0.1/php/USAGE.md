<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItineraryPriceMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItineraryPriceMetricsRequest();
    $request->currencyCode = 'corrupti';
    $request->departureDate = 'provident';
    $request->destinationIataCode = 'distinctio';
    $request->oneWay = false;
    $request->originIataCode = 'quibusdam';

    $response = $sdk->priceMetrics->getItineraryPriceMetrics($request);

    if ($response->getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->