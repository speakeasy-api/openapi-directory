import dataclasses



@dataclasses.dataclass
class MovieCastSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MovieCastSearchReadRequest:
    path_params: MovieCastSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MovieCastSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
