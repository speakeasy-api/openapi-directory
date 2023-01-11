import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTftpSessionStartPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTftpSessionStartRequest:
    path_params: ProtocolTftpSessionStartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTftpSessionStartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tftp_session_start_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
