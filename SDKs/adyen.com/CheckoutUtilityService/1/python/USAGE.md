<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostOriginKeysRequest(
    request="iste",
)
    
res = s.post_origin_keys(req)

if res.checkout_utility_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->