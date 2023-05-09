# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/corrently.io/2.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DispatchGreenEnergyDistributionAPI.GsiDispatch(ctx, operations.GsiDispatchRequest{
        Key: sdk.String("corrupti"),
        Zip: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiDispatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [DispatchGreenEnergyDistributionAPI](docs/dispatchgreenenergydistributionapi/README.md)

* [GsiDispatch](docs/dispatchgreenenergydistributionapi/README.md#gsidispatch) - Dispatch (Green Energy Distribution Schedule)

### [GreenPowerIndexGrunstromIndex](docs/greenpowerindexgrunstromindex/README.md)

* [GsiBesthour](docs/greenpowerindexgrunstromindex/README.md#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.
* [GsiDispatch](docs/greenpowerindexgrunstromindex/README.md#gsidispatch) - Dispatch (Green Energy Distribution Schedule)
* [GsiMarketdata](docs/greenpowerindexgrunstromindex/README.md#gsimarketdata) - Marketdata
* [GsiPrediction](docs/greenpowerindexgrunstromindex/README.md#gsiprediction) - Prediction

### [MeteringDecorator](docs/meteringdecorator/README.md)

* [MeteringGet](docs/meteringdecorator/README.md#meteringget) - Meter Reading
* [MeteringPost](docs/meteringdecorator/README.md#meteringpost) - Meter Reading

### [Ocpp](docs/ocpp/README.md)

* [OcppSessions](docs/ocpp/README.md#ocppsessions) - Last Session Info

### [OpenMETER](docs/openmeter/README.md)

* [OmActivities](docs/openmeter/README.md#omactivities) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [OmMeters](docs/openmeter/README.md#ommeters) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [OmReadings](docs/openmeter/README.md#omreadings) - Public shared smart meters installed in Germany and available for subservices and exploration.

### [SmartHome](docs/smarthome/README.md)

* [GsiBesthour](docs/smarthome/README.md#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.

### [StromQuittung](docs/stromquittung/README.md)

* [QuittungComit](docs/stromquittung/README.md#quittungcomit) - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
* [QuittungCreate](docs/stromquittung/README.md#quittungcreate) - Create a receipt for an energy delivery (only valid in Germany).
* [QuittungPrepare](docs/stromquittung/README.md#quittungprepare) - Allows to collect data with several requests (or a single) for a receipt.
* [QuittungTSE](docs/stromquittung/README.md#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [QuittungTSEData](docs/stromquittung/README.md#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [QuittungTSEsignature](docs/stromquittung/README.md#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [QuittungZugferd](docs/stromquittung/README.md#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### [StromkontoLedger](docs/stromkontoledger/README.md)

* [PrepareTransaction](docs/stromkontoledger/README.md#preparetransaction) - Prepare Transaction
* [StromkontoBalances](docs/stromkontoledger/README.md#stromkontobalances) - Balances
* [StromkontoChoices](docs/stromkontoledger/README.md#stromkontochoices) - Selectable Choices for customer
* [StromkontoLogin](docs/stromkontoledger/README.md#stromkontologin) - Login (via Mail)
* [StromkontoRegister](docs/stromkontoledger/README.md#stromkontoregister) - Register (new Stromkonto)

### [Tse](docs/tse/README.md)

* [QuittungTSE](docs/tse/README.md#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [QuittungTSEData](docs/tse/README.md#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [QuittungTSEsignature](docs/tse/README.md#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [QuittungZugferd](docs/tse/README.md#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### [TariffPriceAPI](docs/tariffpriceapi/README.md)

* [TariffSlph0](docs/tariffpriceapi/README.md#tariffslph0) - Energy Tariff information
* [Tariffcomponents](docs/tariffpriceapi/README.md#tariffcomponents) - Energy Tariff price components

### [WiMWechselprozesseImMesswesenStromStatusAPI](docs/wimwechselprozesseimmesswesenstromstatusapi/README.md)

* [Wimstatus](docs/wimwechselprozesseimmesswesenstromstatusapi/README.md#wimstatus) - WiM Proess Informtion

### [Easee](docs/easee/README.md)

* [EaseeSessions](docs/easee/README.md#easeesessions) - Returns lastSession info for all easee wallboxes (chargers) given user has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
