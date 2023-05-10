# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [shopping](docs/shopping/README.md)

* [getFlightOffers](docs/shopping/README.md#getflightoffers) - Return list of Flight Offers based on searching criteria.
* [searchFlightOffers](docs/shopping/README.md#searchflightoffers) - Return list of Flight Offers based on posted searching criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
