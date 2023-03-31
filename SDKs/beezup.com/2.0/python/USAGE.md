<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.analytics_global.analytics_index()

if res.analytics_index is not None:
    # handle response
```
<!-- End SDK Example Usage -->