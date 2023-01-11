import dataclasses
from typing import Optional
from ..shared import workflow_run_usage as shared_workflow_run_usage


@dataclasses.dataclass
class ActionsGetWorkflowRunUsagePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetWorkflowRunUsageRequest:
    path_params: ActionsGetWorkflowRunUsagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetWorkflowRunUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    workflow_run_usage: Optional[shared_workflow_run_usage.WorkflowRunUsage] = dataclasses.field(default=None)
    
