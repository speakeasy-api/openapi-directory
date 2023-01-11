import dataclasses



@dataclasses.dataclass
class CinemaDetailSearchReadPathParams:
    cinema_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cinema_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CinemaDetailSearchReadRequest:
    path_params: CinemaDetailSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CinemaDetailSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
