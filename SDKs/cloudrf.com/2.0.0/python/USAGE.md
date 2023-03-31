<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.InterferenceRequest(
    name="corrupti",
    network="provident",
)
    
res = s.analyse.interference(req, operations.InterferenceSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->