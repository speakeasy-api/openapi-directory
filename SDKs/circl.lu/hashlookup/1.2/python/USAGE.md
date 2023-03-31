<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetChildrenRequest(
    count=548814,
    cursor="provident",
    sha1="distinctio",
)
    
res = s.default.get_children(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->