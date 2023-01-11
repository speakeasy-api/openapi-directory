import dataclasses



@dataclasses.dataclass
class DeleteAgentPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    runmode: str = dataclasses.field(metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAgentRequest:
    path_params: DeleteAgentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
