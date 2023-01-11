import dataclasses



@dataclasses.dataclass
class GenreTypeSearchReadPathParams:
    genre_description: str = dataclasses.field(metadata={'path_param': { 'field_name': 'genre_description', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenreTypeSearchReadRequest:
    path_params: GenreTypeSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GenreTypeSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
