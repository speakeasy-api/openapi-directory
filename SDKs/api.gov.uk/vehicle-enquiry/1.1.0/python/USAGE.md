<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetVehicleDetailsByRegistrationNumberRequest(
    vehicle_request=shared.VehicleRequest(
        registration_number="corrupti",
    ),
    x_correlation_id="provident",
    x_api_key="distinctio",
)
    
res = s.vehicle.get_vehicle_details_by_registration_number(req)

if res.vehicle is not None:
    # handle response
```
<!-- End SDK Example Usage -->