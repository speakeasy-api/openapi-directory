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