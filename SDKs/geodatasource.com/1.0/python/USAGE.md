<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetCityRequest(
    query_params=operations.GetCityQueryParams(
        format="json",
        key="ex",
        lat=12.200000,
        lng=33.200001,
    ),
)
    
res = s.get_city(req)

if res.get_city_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->