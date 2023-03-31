# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GsiDispatchQueryParams;
import org.openapis.openapi.models.operations.GsiDispatchRequest;
import org.openapis.openapi.models.operations.GsiDispatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GsiDispatchRequest req = new GsiDispatchRequest() {{
                queryParams = new GsiDispatchQueryParams() {{
                    key = "corrupti";
                    zip = "provident";
                }};
            }};            

            GsiDispatchResponse res = sdk.dispatchGreenEnergyDistributionAPI.gsiDispatch(req);

            if (res.gsiDispatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### dispatchGreenEnergyDistributionAPI

* `gsiDispatch` - Dispatch (Green Energy Distribution Schedule)

### greenPowerIndexGrunstromIndex

* `gsiBesthour` - Get best hour (with most regional green energy) in a given timeframe.
* `gsiDispatch` - Dispatch (Green Energy Distribution Schedule)
* `gsiMarketdata` - Marketdata
* `gsiPrediction` - Prediction

### meteringDecorator

* `meteringGet` - Meter Reading
* `meteringPost` - Meter Reading

### ocpp

* `ocppSessions` - Last Session Info

### openMETER

* `omActivities` - Public shared smart meters installed in Germany and available for subservices and exploration.
* `omMeters` - Public shared smart meters installed in Germany and available for subservices and exploration.
* `omReadings` - Public shared smart meters installed in Germany and available for subservices and exploration.

### smartHome

* `gsiBesthour` - Get best hour (with most regional green energy) in a given timeframe.

### stromQuittung

* `quittungComit` - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
* `quittungCreate` - Create a receipt for an energy delivery (only valid in Germany).
* `quittungPrepare` - Allows to collect data with several requests (or a single) for a receipt.
* `quittungTSE` - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* `quittungTSEData` - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* `quittungTSEsignature` - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* `quittungZugferd` - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### stromkontoLedger

* `prepareTransaction` - Prepare Transaction
* `stromkontoBalances` - Balances
* `stromkontoChoices` - Selectable Choices for customer
* `stromkontoLogin` - Login (via Mail)
* `stromkontoRegister` - Register (new Stromkonto)

### tse

* `quittungTSE` - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* `quittungTSEData` - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* `quittungTSEsignature` - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* `quittungZugferd` - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### tariffPriceAPI

* `tariffSlph0` - Energy Tariff information
* `tariffcomponents` - Energy Tariff price components

### wiMWechselprozesseImMesswesenStromStatusAPI

* `wimstatus` - WiM Proess Informtion

### easee

* `easeeSessions` - Returns lastSession info for all easee wallboxes (chargers) given user has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
