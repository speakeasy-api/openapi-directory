<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetFlightOffersRequest(
    query_params=operations.GetFlightOffersQueryParams(
        adults=4814861198247358488,
        children=4975249678507640420,
        currency_code="expedita",
        departure_date="1989-07-02",
        destination_location_code="qui",
        excluded_airline_codes="modi",
        included_airline_codes="nihil",
        infants=1011676084465510524,
        max=8764227983217623240,
        max_price=4745905187492708501,
        non_stop=False,
        origin_location_code="sit",
        return_date="2001-11-04",
        travel_class="BUSINESS",
    ),
)
    
res = s.shopping.get_flight_offers(req)

if res.success is not None:
    # handle response
```
<!-- End SDK Example Usage -->