import dataclasses
from typing import Any,Optional
from ..shared import workflow as shared_workflow


@dataclasses.dataclass
class ActionsGetWorkflowPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetWorkflowRequest:
    path_params: ActionsGetWorkflowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    workflow: Optional[shared_workflow.Workflow] = dataclasses.field(default=None)
    
