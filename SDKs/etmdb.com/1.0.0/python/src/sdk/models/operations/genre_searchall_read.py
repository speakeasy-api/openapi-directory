import dataclasses



@dataclasses.dataclass
class GenreSearchallReadPathParams:
    movie_genre_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_genre_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenreSearchallReadRequest:
    path_params: GenreSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GenreSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
