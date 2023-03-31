<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetItineraryPriceMetricsRequest(
    currency_code="corrupti",
    departure_date="provident",
    destination_iata_code="distinctio",
    one_way=False,
    origin_iata_code="quibusdam",
)
    
res = s.price_metrics.get_itinerary_price_metrics(req)

if res.get_itinerary_price_metrics_200_application_vnd_amadeus_plus_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->