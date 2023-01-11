import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTftpSessionGetParameterPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    parameter: str = dataclasses.field(metadata={'path_param': { 'field_name': 'parameter', 'style': 'simple', 'explode': False }})
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTftpSessionGetParameterRequest:
    path_params: ProtocolTftpSessionGetParameterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTftpSessionGetParameterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tftp_session_get_parameter_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
