# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/climatekuul.com/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AirtravelCoordinatesRequest(
    content_type="application/x-www-form-urlencoded",
    request_body=operations.AirtravelCoordinatesRequestBody(
        api_key_l1="d95fead6-e8a6-4547-9fb9-7835101a3960",
        api_key_l2="c60f8db5-7204-4427-960d-27400c38b166",
        destination_airport_latitude=24.9056,
        destination_airport_longitude=67.1569,
        number_of_passengers=2,
        origin_airport_latitude=31.5208,
        origin_airport_longitude=74.4028,
        travel_class="Economy",
        travel_mode="round trip",
    ),
)
    
res = s.airtravel_coordinates.airtravel_coordinates(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### airtravel_coordinates

* `airtravel_coordinates` - airtravelCoordinates
* `confirm_carbon_offset4` - confirmCarbonOffset
* `confirm_payment4` - confirmPayment
* `confirm_payment_of_transaction4` - confirmTransaction
* `confirms_planting4` - confirmPlanting

### ecommerce_delivery

* `confirm_carbon_offset1` - confirmCarbonOffset
* `confirm_payment1` - confirmPayment
* `confirm_payment_of_transaction1` - confirmTransaction
* `confirms_planting2` - confirmPlanting
* `ecommerce_delivery` - ecommerceDelivery

### request_api_key

* `request_api_key` - requestApiKey

### road_distance

* `confirm_carbon_offset5` - confirmCarbonOffset
* `confirm_payment5` - confirmPayment
* `confirm_payment_of_transaction5` - confirmTransaction
* `confirms_planting5` - confirmPlanting
* `road_distance` - RoadDistance

### urban_delivery

* `confirm_carbon_offset` - confirmCarbonOffset
* `confirm_payment` - confirmPayment
* `confirm_payment_of_transaction` - confirmTransaction
* `confirms_planting` - confirmPlanting
* `urban_delivery` - urbanDelivery

### airtravel_multileg

* `airtravel_multileg` - airtravelMultileg
* `confirm_carbon_offset3` - confirmCarbonOffset
* `confirm_payment3` - confirmPayment
* `confirm_payment_of_transaction3` - confirmTransaction
* `confirms_planting3` - confirmPlanting
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
