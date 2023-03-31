<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConfigConfigGetRequest(
    authorization="corrupti",
)
    
res = s.config_config_get(req)

if res.config is not None:
    # handle response
```
<!-- End SDK Example Usage -->