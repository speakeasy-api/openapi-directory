<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetWaybackV1AvailableRequest(
    query_params=operations.GetWaybackV1AvailableQueryParams(
        callback="eum",
        closest="after",
        status_code=2100388220143852559,
        tag="necessitatibus",
        timeout=57.200001,
        timestamp="error",
        url="aliquam",
    ),
)
    
res = s.get_wayback_v1_available(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->