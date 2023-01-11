<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        oauth=shared.SchemeOauth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.GetContactRequest(
    path_params=operations.GetContactPathParams(
        id="similique",
    ),
)
    
res = s.contacts.get_contact(req)

if res.student_contact_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->