import dataclasses
from typing import Any


@dataclasses.dataclass
class ActionsEnableWorkflowPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsEnableWorkflowRequest:
    path_params: ActionsEnableWorkflowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsEnableWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
