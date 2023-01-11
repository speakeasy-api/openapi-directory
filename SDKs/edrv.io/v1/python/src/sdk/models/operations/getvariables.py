import dataclasses



@dataclasses.dataclass
class GetVariablesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVariablesRequest:
    path_params: GetVariablesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVariablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
