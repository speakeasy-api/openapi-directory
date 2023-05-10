<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArrivalsAndDeparturesByCRSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArrivalsAndDeparturesByCRSRequest();
    $request->crs = 'corrupti';
    $request->apiKey = 'provident';
    $request->filterStation = 'distinctio';
    $request->filterType = 'quibusdam';
    $request->numServices = 602763;
    $request->serviceDetails = false;
    $request->timeOffset = 857946;
    $request->timeWindow = 544883;

    $response = $sdk->departuresAndArrivals->getArrivalsAndDeparturesByCRS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->