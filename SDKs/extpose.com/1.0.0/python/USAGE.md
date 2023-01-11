<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetUserExtensionsRequest(
    security=operations.GetUserExtensionsSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
)
    
res = s.user.get_user_extensions(req)

if res.extensions is not None:
    # handle response
```
<!-- End SDK Example Usage -->