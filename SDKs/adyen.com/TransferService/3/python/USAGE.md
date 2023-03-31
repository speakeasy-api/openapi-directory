<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetTransactionsRequest(
    account_holder_id="corrupti",
    balance_account_id="provident",
    balance_platform="distinctio",
    created_since="2021-03-11T23:22:42.658Z",
    created_until="2021-05-14T08:28:11.899Z",
    cursor="illum",
    limit=423655,
    payment_instrument_id="error",
)
    
res = s.transactions.get_transactions(req, operations.GetTransactionsSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.transaction_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->