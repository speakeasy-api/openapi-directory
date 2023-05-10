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
use \OpenAPI\OpenAPI\Models\Operations\GsiDispatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GsiDispatchRequest();
    $request->key = 'corrupti';
    $request->zip = 'provident';

    $response = $sdk->dispatchGreenEnergyDistributionAPI->gsiDispatch($request);

    if ($response->gsiDispatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [dispatchGreenEnergyDistributionAPI](docs/dispatchgreenenergydistributionapi/README.md)

* [gsiDispatch](docs/dispatchgreenenergydistributionapi/README.md#gsidispatch) - Dispatch (Green Energy Distribution Schedule)

### [greenPowerIndexGrunstromIndex](docs/greenpowerindexgrunstromindex/README.md)

* [gsiBesthour](docs/greenpowerindexgrunstromindex/README.md#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.
* [gsiDispatch](docs/greenpowerindexgrunstromindex/README.md#gsidispatch) - Dispatch (Green Energy Distribution Schedule)
* [gsiMarketdata](docs/greenpowerindexgrunstromindex/README.md#gsimarketdata) - Marketdata
* [gsiPrediction](docs/greenpowerindexgrunstromindex/README.md#gsiprediction) - Prediction

### [meteringDecorator](docs/meteringdecorator/README.md)

* [meteringGet](docs/meteringdecorator/README.md#meteringget) - Meter Reading
* [meteringPost](docs/meteringdecorator/README.md#meteringpost) - Meter Reading

### [ocpp](docs/ocpp/README.md)

* [ocppSessions](docs/ocpp/README.md#ocppsessions) - Last Session Info

### [openMETER](docs/openmeter/README.md)

* [omActivities](docs/openmeter/README.md#omactivities) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [omMeters](docs/openmeter/README.md#ommeters) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [omReadings](docs/openmeter/README.md#omreadings) - Public shared smart meters installed in Germany and available for subservices and exploration.

### [smartHome](docs/smarthome/README.md)

* [gsiBesthour](docs/smarthome/README.md#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.

### [stromQuittung](docs/stromquittung/README.md)

* [quittungComit](docs/stromquittung/README.md#quittungcomit) - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
* [quittungCreate](docs/stromquittung/README.md#quittungcreate) - Create a receipt for an energy delivery (only valid in Germany).
* [quittungPrepare](docs/stromquittung/README.md#quittungprepare) - Allows to collect data with several requests (or a single) for a receipt.
* [quittungTSE](docs/stromquittung/README.md#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [quittungTSEData](docs/stromquittung/README.md#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [quittungTSEsignature](docs/stromquittung/README.md#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [quittungZugferd](docs/stromquittung/README.md#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### [stromkontoLedger](docs/stromkontoledger/README.md)

* [prepareTransaction](docs/stromkontoledger/README.md#preparetransaction) - Prepare Transaction
* [stromkontoBalances](docs/stromkontoledger/README.md#stromkontobalances) - Balances
* [stromkontoChoices](docs/stromkontoledger/README.md#stromkontochoices) - Selectable Choices for customer
* [stromkontoLogin](docs/stromkontoledger/README.md#stromkontologin) - Login (via Mail)
* [stromkontoRegister](docs/stromkontoledger/README.md#stromkontoregister) - Register (new Stromkonto)

### [tse](docs/tse/README.md)

* [quittungTSE](docs/tse/README.md#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [quittungTSEData](docs/tse/README.md#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [quittungTSEsignature](docs/tse/README.md#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [quittungZugferd](docs/tse/README.md#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### [tariffPriceAPI](docs/tariffpriceapi/README.md)

* [tariffSlph0](docs/tariffpriceapi/README.md#tariffslph0) - Energy Tariff information
* [tariffcomponents](docs/tariffpriceapi/README.md#tariffcomponents) - Energy Tariff price components

### [wiMWechselprozesseImMesswesenStromStatusAPI](docs/wimwechselprozesseimmesswesenstromstatusapi/README.md)

* [wimstatus](docs/wimwechselprozesseimmesswesenstromstatusapi/README.md#wimstatus) - WiM Proess Informtion

### [easee](docs/easee/README.md)

* [easeeSessions](docs/easee/README.md#easeesessions) - Returns lastSession info for all easee wallboxes (chargers) given user has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
