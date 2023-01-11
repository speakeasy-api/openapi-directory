<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVehicleDetailsByRegistrationNumberRequest(
    headers=operations.GetVehicleDetailsByRegistrationNumberHeaders(
        x_correlation_id="ducimus",
        x_api_key="repellendus",
    ),
    request=shared.VehicleRequest(
        registration_number="officia",
    ),
)
    
res = s.vehicle.get_vehicle_details_by_registration_number(req)

if res.vehicle is not None:
    # handle response
```
<!-- End SDK Example Usage -->