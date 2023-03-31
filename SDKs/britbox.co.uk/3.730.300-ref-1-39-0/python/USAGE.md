<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddPaymentMethodRequest(
    add_payment_method_request=shared.AddPaymentMethodRequest(
        make_default=False,
        token="corrupti",
        type="Card",
    ),
    ff=[
        "cas",
        "lrl",
        "rpt",
    ],
    lang="nulla",
)
    
res = s.account.add_payment_method(req, operations.AddPaymentMethodSecurity(
    account_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.payment_method is not None:
    # handle response
```
<!-- End SDK Example Usage -->