import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTftpSessionStopPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    session_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sessionID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTftpSessionStopRequest:
    path_params: ProtocolTftpSessionStopPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTftpSessionStopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tftp_session_stop_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
