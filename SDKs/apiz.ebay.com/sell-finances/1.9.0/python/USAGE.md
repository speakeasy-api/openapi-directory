<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetPayoutRequest(
    security=operations.GetPayoutSecurity(
        api_auth=shared.SchemeAPIAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetPayoutPathParams(
        payout_id="quo",
    ),
)
    
res = s.payout.get_payout(req)

if res.payout is not None:
    # handle response
```
<!-- End SDK Example Usage -->