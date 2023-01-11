import dataclasses



@dataclasses.dataclass
class JobSearchallReadPathParams:
    company_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'company_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JobSearchallReadRequest:
    path_params: JobSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class JobSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
