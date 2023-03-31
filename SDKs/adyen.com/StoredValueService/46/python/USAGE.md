<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.StoredValueStatusChangeRequest(
    amount=shared.Amount(
        currency="corrupti",
        value=592845,
    ),
    merchant_account="distinctio",
    payment_method={
        "unde": "nulla",
        "corrupti": "illum",
        "vel": "error",
        "deserunt": "suscipit",
    },
    recurring_detail_reference="iure",
    reference="magnam",
    shopper_interaction="POS",
    shopper_reference="ipsa",
    status="inactive",
    store="tempora",
)
    
res = s.general.post_change_status(req, operations.PostChangeStatusSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.stored_value_status_change_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->