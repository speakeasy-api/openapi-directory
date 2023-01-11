<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostRequestRequest(
    request="reprehenderit",
)
    
res = s.post_request(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->