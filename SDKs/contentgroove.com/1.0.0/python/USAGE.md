<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAPIV1ClipsIDRequest(
    id="corrupti",
)
    
res = s.delete_api_v1_clips_id_(req, operations.DeleteAPIV1ClipsIDSecurity(
    bearer_header="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->