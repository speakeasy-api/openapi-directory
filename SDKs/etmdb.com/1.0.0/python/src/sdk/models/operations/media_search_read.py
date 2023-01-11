import dataclasses



@dataclasses.dataclass
class MediaSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MediaSearchReadRequest:
    path_params: MediaSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MediaSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
