<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.dot_get_available_locales()

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->