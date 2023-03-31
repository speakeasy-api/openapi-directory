# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/corrently.io/2.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GsiDispatchRequest(
    key="corrupti",
    zip="provident",
)
    
res = s.dispatch_green_energy_distribution_api.gsi_dispatch(req)

if res.gsi_dispatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### dispatch_green_energy_distribution_api

* `gsi_dispatch` - Dispatch (Green Energy Distribution Schedule)

### green_power_index_grunstrom_index

* `gsi_besthour` - Get best hour (with most regional green energy) in a given timeframe.
* `gsi_dispatch` - Dispatch (Green Energy Distribution Schedule)
* `gsi_marketdata` - Marketdata
* `gsi_prediction` - Prediction

### metering_decorator

* `metering_get` - Meter Reading
* `metering_post` - Meter Reading

### ocpp

* `ocpp_sessions` - Last Session Info

### open_meter

* `om_activities` - Public shared smart meters installed in Germany and available for subservices and exploration.
* `om_meters` - Public shared smart meters installed in Germany and available for subservices and exploration.
* `om_readings` - Public shared smart meters installed in Germany and available for subservices and exploration.

### smart_home

* `gsi_besthour` - Get best hour (with most regional green energy) in a given timeframe.

### strom_quittung

* `quittung_comit` - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
* `quittung_create` - Create a receipt for an energy delivery (only valid in Germany).
* `quittung_prepare` - Allows to collect data with several requests (or a single) for a receipt.
* `quittung_tse` - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* `quittung_tse_data` - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* `quittung_ts_esignature` - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* `quittung_zugferd` - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### stromkonto_ledger

* `prepare_transaction` - Prepare Transaction
* `stromkonto_balances` - Balances
* `stromkonto_choices` - Selectable Choices for customer
* `stromkonto_login` - Login (via Mail)
* `stromkonto_register` - Register (new Stromkonto)

### tse

* `quittung_tse` - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* `quittung_tse_data` - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* `quittung_ts_esignature` - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* `quittung_zugferd` - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

### tariff_price_api

* `tariff_slph0` - Energy Tariff information
* `tariffcomponents` - Energy Tariff price components

### wi_m_wechselprozesse_im_messwesen_strom_status_api

* `wimstatus` - WiM Proess Informtion

### easee

* `easee_sessions` - Returns lastSession info for all easee wallboxes (chargers) given user has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
