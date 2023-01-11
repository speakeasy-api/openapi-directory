<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.AccessAddRequest(
    path_params=operations.AccessAddPathParams(
        agents="quas",
        mask="qui",
        user="ut",
    ),
)
    
res = s.access.access_add(req)

if res.access_add_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->