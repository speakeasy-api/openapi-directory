<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.addon.delete_addon()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->