<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.GetContactRequest(
    id="corrupti",
)
    
res = s.contacts.get_contact(req)

if res.student_contact_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->