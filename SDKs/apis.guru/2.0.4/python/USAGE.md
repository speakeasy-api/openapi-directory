<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.ap_is.get_metrics()

if res.metrics is not None:
    # handle response
```
<!-- End SDK Example Usage -->