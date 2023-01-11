<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostDisableRequest(
    request="commodi",
)
    
res = s.post_disable(req)

if res.disable_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->