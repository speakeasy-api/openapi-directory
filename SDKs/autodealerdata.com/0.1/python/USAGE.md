<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVehicleSeenVehicleSeenGetRequest(
    query_params=operations.GetVehicleSeenVehicleSeenGetQueryParams(
        after_date="1973-05-30",
        jwt="praesentium",
        vin="enim",
    ),
)
    
res = s.application_acceleration.get_vehicle_seen_vehicle_seen_get(req)

if res.boolean_resp is not None:
    # handle response
```
<!-- End SDK Example Usage -->