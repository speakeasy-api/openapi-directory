<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.user.get_user_extensions()

if res.extensions is not None:
    # handle response
```
<!-- End SDK Example Usage -->