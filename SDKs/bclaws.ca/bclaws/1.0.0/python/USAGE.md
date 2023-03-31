<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetContentAspectIDRequest(
    aspect_id="oic",
)
    
res = s.content.get_content_aspect_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->