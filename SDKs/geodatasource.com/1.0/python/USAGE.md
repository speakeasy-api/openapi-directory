<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCityRequest(
    format="xml",
    key="provident",
    lat=7151.9,
    lng=8442.66,
)
    
res = s.get_city(req)

if res.get_city_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->