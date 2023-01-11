<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest(
    path_params=operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams(
        org="quas",
        repository_id=1032291537367353830,
        runner_group_id=1897604844250369910,
    ),
)
    
res = s.actions.actions_add_repo_access_to_self_hosted_runner_group_in_org(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->