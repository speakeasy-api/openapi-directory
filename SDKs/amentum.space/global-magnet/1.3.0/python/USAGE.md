<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AppAPIWmmEndpointsWmmMagneticFieldRequest(
    query_params=operations.AppAPIWmmEndpointsWmmMagneticFieldQueryParams(
        altitude=59.099998,
        latitude=93.099998,
        longitude=75.099998,
        year=54.200001,
    ),
)
    
res = s.app_api_wmm_endpoints_wmm_magnetic_field(req)

if res.app_api_wmm_endpoints_wmm_magnetic_field_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->