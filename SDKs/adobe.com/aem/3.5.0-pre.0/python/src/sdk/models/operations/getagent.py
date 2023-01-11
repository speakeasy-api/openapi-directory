import dataclasses



@dataclasses.dataclass
class GetAgentPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    runmode: str = dataclasses.field(metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentRequest:
    path_params: GetAgentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
