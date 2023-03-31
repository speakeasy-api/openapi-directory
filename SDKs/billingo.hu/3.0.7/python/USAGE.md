<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = shared.BankAccountInput(
    account_number="corrupti",
    account_number_iban="provident",
    currency="PLN",
    name="quibusdam",
    need_qr=False,
    swift="unde",
)
    
res = s.bank_account.create_bank_account(req)

if res.bank_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->