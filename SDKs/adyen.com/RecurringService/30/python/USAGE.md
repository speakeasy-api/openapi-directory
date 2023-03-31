<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.DisableRequest(
    contract="corrupti",
    merchant_account="provident",
    recurring_detail_reference="distinctio",
    shopper_reference="quibusdam",
)
    
res = s.general.post_disable(req, operations.PostDisableSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.disable_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->