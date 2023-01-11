import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSflowResumePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSflowResumeRequest:
    path_params: ProtocolSflowResumePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSflowResumeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_sflow_resume_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
