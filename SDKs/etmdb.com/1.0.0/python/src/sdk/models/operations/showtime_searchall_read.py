import dataclasses



@dataclasses.dataclass
class ShowtimeSearchallReadPathParams:
    param: str = dataclasses.field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowtimeSearchallReadRequest:
    path_params: ShowtimeSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowtimeSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
