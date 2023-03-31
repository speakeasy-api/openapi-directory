<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteProjectUsernameProjectBuildCacheRequest(
    project="corrupti",
    username="Larue_Rau85",
)
    
res = s.delete_project_username_project_build_cache(req)

if res.delete_project_username_project_build_cache_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->