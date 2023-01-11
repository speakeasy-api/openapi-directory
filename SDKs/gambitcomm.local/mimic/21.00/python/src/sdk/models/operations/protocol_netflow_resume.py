import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowResumePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowResumeRequest:
    path_params: ProtocolNetflowResumePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowResumeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_resume_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
