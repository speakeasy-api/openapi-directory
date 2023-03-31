<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.AccessAddRequest(
    agents="corrupti",
    mask="provident",
    user="distinctio",
)
    
res = s.access.access_add(req)

if res.access_add_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->