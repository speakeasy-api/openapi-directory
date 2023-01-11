<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostDisableRequest(
    security=operations.PostDisableSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request="non",
)
    
res = s.general.post_disable(req)

if res.disable_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->