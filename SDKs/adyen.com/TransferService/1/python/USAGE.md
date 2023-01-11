<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostTransfersRequest(
    security=operations.PostTransfersSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request="aut",
)
    
res = s.general.post_transfers(req)

if res.transfer_old is not None:
    # handle response
```
<!-- End SDK Example Usage -->