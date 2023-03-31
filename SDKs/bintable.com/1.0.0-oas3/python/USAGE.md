<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BalanceLookupRequest(
    api_key="corrupti",
)
    
res = s.balance.balance_lookup(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->