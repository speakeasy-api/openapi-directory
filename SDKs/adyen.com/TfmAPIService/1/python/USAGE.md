<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.AssignTerminalsRequest(
    company_account="corrupti",
    merchant_account="provident",
    merchant_inventory=False,
    store="distinctio",
    terminals=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
)
    
res = s.general.post_assign_terminals(req, operations.PostAssignTerminalsSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.assign_terminals_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->