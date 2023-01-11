import dataclasses



@dataclasses.dataclass
class CinemaScheduleSearchallReadPathParams:
    param: str = dataclasses.field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CinemaScheduleSearchallReadRequest:
    path_params: CinemaScheduleSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CinemaScheduleSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
