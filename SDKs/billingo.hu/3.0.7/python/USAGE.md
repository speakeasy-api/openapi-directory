<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateBankAccountRequest(
    request=shared.BankAccountInput(
        account_number="temporibus",
        account_number_iban="aut",
        currency="JPY",
        name="odit",
        need_qr=False,
        swift="nihil",
    ),
)
    
res = s.bank_account.create_bank_account(req)

if res.bank_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->