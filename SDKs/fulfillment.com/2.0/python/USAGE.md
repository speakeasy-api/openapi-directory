<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccountingRequest(
    from_date="corrupti",
    hydrate=[
        "items",
        "items",
        "items",
    ],
    limit=715190,
    order_ids=[
        602763,
        857946,
        544883,
        847252,
    ],
    page=423655,
    to_date="error",
    warehouse_ids=[
        384382,
        437587,
        297534,
    ],
)
    
res = s.accounting.get_accounting(req, operations.GetAccountingSecurity(
    fdc_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.accounting_array_v2 is not None:
    # handle response
```
<!-- End SDK Example Usage -->