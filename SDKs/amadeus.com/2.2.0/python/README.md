# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amadeus.com/2.2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetFlightOffersRequest(
    adults=548814,
    children=592845,
    currency_code="distinctio",
    departure_date="2021-03-11",
    destination_location_code="nulla",
    excluded_airline_codes="corrupti",
    included_airline_codes="illum",
    infants=423655,
    max=623564,
    max_price=645894,
    non_stop=False,
    origin_location_code="suscipit",
    return_date="2022-09-14",
    travel_class="FIRST",
)
    
res = s.shopping.get_flight_offers(req)

if res.success is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### shopping

* `get_flight_offers` - Return list of Flight Offers based on searching criteria.
* `search_flight_offers` - Return list of Flight Offers based on posted searching criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
