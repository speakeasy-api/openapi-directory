import dataclasses



@dataclasses.dataclass
class GenreSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenreSearchReadRequest:
    path_params: GenreSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GenreSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
