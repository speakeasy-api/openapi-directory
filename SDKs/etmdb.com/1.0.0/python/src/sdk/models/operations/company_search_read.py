import dataclasses



@dataclasses.dataclass
class CompanySearchReadPathParams:
    company_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'company_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanySearchReadRequest:
    path_params: CompanySearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompanySearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
