import dataclasses



@dataclasses.dataclass
class CompanyCreditsSearchallReadPathParams:
    param: str = dataclasses.field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyCreditsSearchallReadRequest:
    path_params: CompanyCreditsSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompanyCreditsSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
