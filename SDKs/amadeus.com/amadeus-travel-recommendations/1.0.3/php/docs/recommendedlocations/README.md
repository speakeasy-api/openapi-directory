# recommendedLocations

### Available Operations

* [getRecommendedLocation](#getrecommendedlocation) - GET recommended destinations

## getRecommendedLocation

GET recommended destinations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendedLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendedLocationRequest();
    $request->cityCodes = 'quibusdam';
    $request->destinationCountryCodes = 'unde';
    $request->travelerCountryCode = 'nulla';

    $response = $sdk->recommendedLocations->getRecommendedLocation($request);

    if ($response->getRecommendedLocation200ApplicationVndAmadeusPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
