import dataclasses



@dataclasses.dataclass
class FilmographyTypeSearchReadPathParams:
    filmography_description: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filmography_description', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilmographyTypeSearchReadRequest:
    path_params: FilmographyTypeSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FilmographyTypeSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
