<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAdvertisingEligibilityRequest(
    x_ebay_c_marketplace_id="corrupti",
    program_types="provident",
)
    
res = s.advertising_eligibility.get_advertising_eligibility(req, operations.GetAdvertisingEligibilitySecurity(
    api_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.seller_eligibility_multi_program_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->