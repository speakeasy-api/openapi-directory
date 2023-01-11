import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResumePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResumeRequest:
    path_params: ResumePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ResumeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resume_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
