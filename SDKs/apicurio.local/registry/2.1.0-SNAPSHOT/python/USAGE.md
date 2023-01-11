<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateGlobalRuleRequest(
    request=shared.Rule(
        config="magnam",
        type="VALIDITY",
    ),
)
    
res = s.admin.create_global_rule(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->