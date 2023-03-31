<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdminGetUserRequest(
    id=548814,
)
    
res = s.admin.admin_get_user(req)

if res.admin_get_user_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->