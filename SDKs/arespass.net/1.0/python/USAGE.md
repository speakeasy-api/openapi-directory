<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAboutRequest(
    output_format="corrupti",
)
    
res = s.get_about(req)

if res.about is not None:
    # handle response
```
<!-- End SDK Example Usage -->