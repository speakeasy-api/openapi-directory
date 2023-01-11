import dataclasses



@dataclasses.dataclass
class CompanyCreditsSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyCreditsSearchReadRequest:
    path_params: CompanyCreditsSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompanyCreditsSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
