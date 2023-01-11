import dataclasses



@dataclasses.dataclass
class FilmographySearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilmographySearchReadRequest:
    path_params: FilmographySearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FilmographySearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
