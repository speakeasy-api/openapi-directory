# shopping

### Available Operations

* [getFlightOffers](#getflightoffers) - Return list of Flight Offers based on searching criteria.
* [searchFlightOffers](#searchflightoffers) - Return list of Flight Offers based on posted searching criteria.

## getFlightOffers

Return list of Flight Offers based on searching criteria.

### Example Usage

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
    $request->adults = 56713;
    $request->children = 963663;
    $request->currencyCode = 'tempora';
    $request->departureDate = DateTime::createFromFormat('Y-m-d', '2022-07-10');
    $request->destinationLocationCode = 'minus';
    $request->excludedAirlineCodes = 'placeat';
    $request->includedAirlineCodes = 'voluptatum';
    $request->infants = 479977;
    $request->max = 568045;
    $request->maxPrice = 392785;
    $request->nonStop = false;
    $request->originLocationCode = 'recusandae';
    $request->returnDate = DateTime::createFromFormat('Y-m-d', '2022-10-15');
    $request->travelClass = GetFlightOffersTravelClassEnum::PREMIUM_ECONOMY;

    $response = $sdk->shopping->getFlightOffers($request);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchFlightOffers

Return list of Flight Offers based on posted searching criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFlightOffersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFlightOffersQuery;
use \OpenAPI\OpenAPI\Models\Shared\OriginDestination;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\SearchCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SearchCriteriaAdditionalInformation;
use \OpenAPI\OpenAPI\Models\Shared\SearchCriteriaFlightFilters;
use \OpenAPI\OpenAPI\Models\Shared\SearchCriteriaFlightFiltersCabinRestriction;
use \OpenAPI\OpenAPI\Models\Shared\TravelClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\CoverageEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchCriteriaFlightFiltersCarrierRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\SearchCriteriaFlightFiltersConnectionRestriction;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedPricingOptions;
use \OpenAPI\OpenAPI\Models\Shared\FlightOfferSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Traveler;
use \OpenAPI\OpenAPI\Models\Shared\TravelerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFlightOffersRequest();
    $request->getFlightOffersQuery = new GetFlightOffersQuery();
    $request->getFlightOffersQuery->currencyCode = 'EUR';
    $request->getFlightOffersQuery->originDestinations = [
        new OriginDestination(),
    ];
    $request->getFlightOffersQuery->searchCriteria = new SearchCriteria();
    $request->getFlightOffersQuery->searchCriteria->addOneWayOffers = true;
    $request->getFlightOffersQuery->searchCriteria->additionalInformation = new SearchCriteriaAdditionalInformation();
    $request->getFlightOffersQuery->searchCriteria->additionalInformation->brandedFares = true;
    $request->getFlightOffersQuery->searchCriteria->additionalInformation->chargeableCheckedBags = true;
    $request->getFlightOffersQuery->searchCriteria->allowAlternativeFareOptions = true;
    $request->getFlightOffersQuery->searchCriteria->excludeAllotments = false;
    $request->getFlightOffersQuery->searchCriteria->flightFilters = new SearchCriteriaFlightFilters();
    $request->getFlightOffersQuery->searchCriteria->flightFilters->busSegmentAllowed = true;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->cabinRestrictions = [
        new SearchCriteriaFlightFiltersCabinRestriction(),
        new SearchCriteriaFlightFiltersCabinRestriction(),
        new SearchCriteriaFlightFiltersCabinRestriction(),
    ];
    $request->getFlightOffersQuery->searchCriteria->flightFilters->carrierRestrictions = new SearchCriteriaFlightFiltersCarrierRestrictions();
    $request->getFlightOffersQuery->searchCriteria->flightFilters->carrierRestrictions->blacklistedInEUAllowed = false;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->carrierRestrictions->excludedCarrierCodes = [
        'ipsam',
    ];
    $request->getFlightOffersQuery->searchCriteria->flightFilters->carrierRestrictions->includedCarrierCodes = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->getFlightOffersQuery->searchCriteria->flightFilters->connectionRestriction = new SearchCriteriaFlightFiltersConnectionRestriction();
    $request->getFlightOffersQuery->searchCriteria->flightFilters->connectionRestriction->airportChangeAllowed = false;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->connectionRestriction->maxNumberOfConnections = 2;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->connectionRestriction->technicalStopsAllowed = true;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->crossBorderAllowed = false;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->maxFlightTime = 200;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->moreOvernightsAllowed = false;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->railSegmentAllowed = true;
    $request->getFlightOffersQuery->searchCriteria->flightFilters->returnToDepartureAirport = false;
    $request->getFlightOffersQuery->searchCriteria->maxFlightOffers = 250;
    $request->getFlightOffersQuery->searchCriteria->maxPrice = 100;
    $request->getFlightOffersQuery->searchCriteria->oneFlightOfferPerDay = true;
    $request->getFlightOffersQuery->searchCriteria->pricingOptions = new ExtendedPricingOptions();
    $request->getFlightOffersQuery->searchCriteria->pricingOptions->includedCheckedBagsOnly = true;
    $request->getFlightOffersQuery->sources = [
        FlightOfferSourceEnum::GDS,
        FlightOfferSourceEnum::GDS,
        FlightOfferSourceEnum::GDS,
        FlightOfferSourceEnum::GDS,
    ];
    $request->getFlightOffersQuery->travelers = [
        new Traveler(),
        new Traveler(),
        new Traveler(),
        new Traveler(),
    ];
    $request->xHTTPMethodOverride = 'molestiae';

    $response = $sdk->shopping->searchFlightOffers($request);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
