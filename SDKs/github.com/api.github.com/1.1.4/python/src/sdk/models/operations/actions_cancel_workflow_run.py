import dataclasses



@dataclasses.dataclass
class ActionsCancelWorkflowRunPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsCancelWorkflowRunRequest:
    path_params: ActionsCancelWorkflowRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsCancelWorkflowRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
