<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest(
    path_params=operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDPathParams(
        log_uuid="recusandae",
        pipeline_uuid="et",
        repo_slug="molestias",
        step_uuid="possimus",
        workspace="earum",
    ),
)
    
res = s.get_repositories_workspace_repo_slug_pipelines_pipeline_uuid_steps_step_uuid_logs_log_uuid_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->