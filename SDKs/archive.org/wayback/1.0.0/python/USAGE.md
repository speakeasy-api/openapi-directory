<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetWaybackV1AvailableRequest(
    callback="corrupti",
    closest="before",
    status_code="421",
    tag="quibusdam",
    timeout=6027.63,
    timestamp="nulla",
    url="corrupti",
)
    
res = s.get_wayback_v1_available(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->