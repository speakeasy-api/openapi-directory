<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteBusinessLinesIDRequest(
    id="corrupti",
)
    
res = s.business_lines.delete_business_lines_id(req, operations.DeleteBusinessLinesIDSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->