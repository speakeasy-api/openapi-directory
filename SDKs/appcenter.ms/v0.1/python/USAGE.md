<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.account.users_get_user_metadata()

if res.users_get_user_metadata_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->