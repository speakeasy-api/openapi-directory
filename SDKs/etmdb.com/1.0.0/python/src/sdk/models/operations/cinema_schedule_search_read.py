import dataclasses



@dataclasses.dataclass
class CinemaScheduleSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CinemaScheduleSearchReadRequest:
    path_params: CinemaScheduleSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CinemaScheduleSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
