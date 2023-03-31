<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BalanceTransferRequest(
    amount=shared.Amount(
        currency="corrupti",
        value=592845,
    ),
    description="distinctio",
    from_merchant="quibusdam",
    reference="unde",
    to_merchant="nulla",
    type="credit",
)
    
res = s.general.post_balance_transfer(req, operations.PostBalanceTransferSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.balance_transfer_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->