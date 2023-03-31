<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteRiddleRequest(
    id="corrupti",
)
    
res = s.private_riddles.delete_riddle(req, operations.DeleteRiddleSecurity(
    x_fungenerators_api_secret="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->