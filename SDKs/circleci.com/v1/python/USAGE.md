<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DeleteProjectUsernameProjectBuildCacheRequest(
    path_params=operations.DeleteProjectUsernameProjectBuildCachePathParams(
        project="necessitatibus",
        username="quam",
    ),
)
    
res = s.delete_project_username_project_build_cache(req)

if res.delete_project_username_project_build_cache_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->