<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BalanceSheetOneRequest(
    filter=shared.BalanceSheetFilter(
        end_date="2021-12-31",
        start_date="2021-01-01",
    ),
    pass_through={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    raw=False,
    x_apideck_app_id="illum",
    x_apideck_consumer_id="vel",
    x_apideck_service_id="error",
)
    
res = s.balance_sheet.balance_sheet_one(req, operations.BalanceSheetOneSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_balance_sheet_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->