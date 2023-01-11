import dataclasses



@dataclasses.dataclass
class MovieSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MovieSearchReadRequest:
    path_params: MovieSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MovieSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
