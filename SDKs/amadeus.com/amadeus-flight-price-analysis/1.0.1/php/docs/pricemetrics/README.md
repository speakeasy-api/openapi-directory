# priceMetrics

### Available Operations

* [getItineraryPriceMetrics](#getitinerarypricemetrics) - GET itinerary price metric

## getItineraryPriceMetrics

GET itinerary price metric

### Example Usage

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
    $request->currencyCode = 'unde';
    $request->departureDate = 'nulla';
    $request->destinationIataCode = 'corrupti';
    $request->oneWay = false;
    $request->originIataCode = 'illum';

    $response = $sdk->priceMetrics->getItineraryPriceMetrics($request);

    if ($response->getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
