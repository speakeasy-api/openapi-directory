<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AirtravelCoordinatesRequest(
    headers=operations.AirtravelCoordinatesHeaders(
        content_type="et",
    ),
    request=operations.AirtravelCoordinatesRequestBody(
        api_key_l1="laudantium",
        api_key_l2="voluptatibus",
        destination_airport_latitude=16.200001,
        destination_airport_longitude=65.199997,
        number_of_passengers=5496595919472461343,
        origin_airport_latitude=88.199997,
        origin_airport_longitude=31.200001,
        travel_class="necessitatibus",
        travel_mode="aspernatur",
    ),
)
    
res = s.airtravel_coordinates.airtravel_coordinates(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->