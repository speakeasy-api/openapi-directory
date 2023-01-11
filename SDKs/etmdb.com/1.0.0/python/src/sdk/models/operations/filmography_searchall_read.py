import dataclasses



@dataclasses.dataclass
class FilmographySearchallReadPathParams:
    param: str = dataclasses.field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilmographySearchallReadRequest:
    path_params: FilmographySearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FilmographySearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
