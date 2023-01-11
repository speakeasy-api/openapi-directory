import dataclasses



@dataclasses.dataclass
class CinemaSearchReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CinemaSearchReadRequest:
    path_params: CinemaSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CinemaSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
