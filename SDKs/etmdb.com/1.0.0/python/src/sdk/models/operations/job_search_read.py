import dataclasses



@dataclasses.dataclass
class JobSearchReadPathParams:
    job_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'job_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JobSearchReadRequest:
    path_params: JobSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class JobSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
