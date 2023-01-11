import dataclasses
from typing import Any,Optional
from ..shared import workflow_usage as shared_workflow_usage


@dataclasses.dataclass
class ActionsGetWorkflowUsagePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetWorkflowUsageRequest:
    path_params: ActionsGetWorkflowUsagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetWorkflowUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    workflow_usage: Optional[shared_workflow_usage.WorkflowUsage] = dataclasses.field(default=None)
    
