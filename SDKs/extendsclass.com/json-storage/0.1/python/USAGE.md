<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteBinIDRequest(
    id="corrupti",
)
    
res = s.delete_bin_id_(req)

if res.delete_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->