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