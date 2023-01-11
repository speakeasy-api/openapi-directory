import dataclasses



@dataclasses.dataclass
class CinemaSheduleShowtimeSearchallReadPathParams:
    param: str = dataclasses.field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CinemaSheduleShowtimeSearchallReadRequest:
    path_params: CinemaSheduleShowtimeSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CinemaSheduleShowtimeSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
