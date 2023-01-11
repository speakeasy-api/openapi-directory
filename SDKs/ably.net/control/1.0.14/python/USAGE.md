<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAppsIDRequest(
    security=operations.DeleteAppsIDSecurity(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    path_params=operations.DeleteAppsIDPathParams(
        id="et",
    ),
)
    
res = s.apps.delete_apps_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->