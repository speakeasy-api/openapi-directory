<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetPayoutRequest(
    x_ebay_c_marketplace_id="corrupti",
    payout_id="provident",
)
    
res = s.payout.get_payout(req, operations.GetPayoutSecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.payout is not None:
    # handle response
```
<!-- End SDK Example Usage -->