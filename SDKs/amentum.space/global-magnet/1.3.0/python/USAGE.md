<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AppAPIWMMEndpointsWMMMagneticFieldRequest(
    altitude=10,
    latitude=80,
    longitude=100,
    year=2020.5,
)
    
res = s.app_api_wmm_endpoints_wmm_magnetic_field(req)

if res.app_api_wmm_endpoints_wmm_magnetic_field_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->