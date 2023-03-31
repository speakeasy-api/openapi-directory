<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GsiDispatchRequest(
    key="corrupti",
    zip="provident",
)
    
res = s.dispatch_green_energy_distribution_api.gsi_dispatch(req)

if res.gsi_dispatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->