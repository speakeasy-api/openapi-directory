<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCheckForUpdateRequest(
    is_testflight=548814,
)
    
res = s.get_check_for_update(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->