<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.Rule(
    config="corrupti",
    type="VALIDITY",
)
    
res = s.admin.create_global_rule(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->