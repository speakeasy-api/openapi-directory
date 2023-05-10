<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFlightOffersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFlightOffersTravelClassEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFlightOffersRequest();
    $request->adults = 548814;
    $request->children = 592845;
    $request->currencyCode = 'distinctio';
    $request->departureDate = DateTime::createFromFormat('Y-m-d', '2021-03-11');
    $request->destinationLocationCode = 'nulla';
    $request->excludedAirlineCodes = 'corrupti';
    $request->includedAirlineCodes = 'illum';
    $request->infants = 423655;
    $request->max = 623564;
    $request->maxPrice = 645894;
    $request->nonStop = false;
    $request->originLocationCode = 'suscipit';
    $request->returnDate = DateTime::createFromFormat('Y-m-d', '2022-09-14');
    $request->travelClass = GetFlightOffersTravelClassEnum::FIRST;

    $response = $sdk->shopping->getFlightOffers($request);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->