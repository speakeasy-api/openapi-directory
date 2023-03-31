<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.user.get_user()

if res.user_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->