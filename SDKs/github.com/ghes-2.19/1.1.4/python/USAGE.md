<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest(
    path_params=operations.ActivityCheckRepoIsStarredByAuthenticatedUserPathParams(
        owner="molestiae",
        repo="atque",
    ),
)
    
res = s.activity.activity_check_repo_is_starred_by_authenticated_user(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->