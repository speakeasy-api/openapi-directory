import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTftpSessionReadPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    srcfile: str = dataclasses.field(metadata={'path_param': { 'field_name': 'srcfile', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTftpSessionReadRequest:
    path_params: ProtocolTftpSessionReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTftpSessionReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tftp_session_read_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
