import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ActionsReRunWorkflowPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsReRunWorkflowRequest:
    path_params: ActionsReRunWorkflowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsReRunWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_re_run_workflow_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
