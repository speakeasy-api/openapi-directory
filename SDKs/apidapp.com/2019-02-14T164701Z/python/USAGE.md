<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteKeyKeyRequest(
    key="corrupti",
)
    
res = s.delete_key_key_(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->