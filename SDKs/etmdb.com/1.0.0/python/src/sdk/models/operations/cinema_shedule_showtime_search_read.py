import dataclasses



@dataclasses.dataclass
class CinemaSheduleShowtimeSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CinemaSheduleShowtimeSearchReadRequest:
    path_params: CinemaSheduleShowtimeSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CinemaSheduleShowtimeSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
