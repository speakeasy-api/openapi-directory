import dataclasses



@dataclasses.dataclass
class MovieCastSearchallReadPathParams:
    param: str = dataclasses.field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MovieCastSearchallReadRequest:
    path_params: MovieCastSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MovieCastSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
