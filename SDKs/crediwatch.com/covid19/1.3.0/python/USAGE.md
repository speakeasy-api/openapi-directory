<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.StatusCallAPIV1StatusCallGetRequest(
    query_params=operations.StatusCallAPIV1StatusCallGetQueryParams(
        query="provident",
    ),
)
    
res = s.status_call_api_v1_status_call_get(req)

if res.status_call is not None:
    # handle response
```
<!-- End SDK Example Usage -->