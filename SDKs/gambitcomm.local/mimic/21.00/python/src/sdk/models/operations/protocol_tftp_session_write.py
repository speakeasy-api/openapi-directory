import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTftpSessionWritePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    srcfile: str = dataclasses.field(metadata={'path_param': { 'field_name': 'srcfile', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTftpSessionWriteRequest:
    path_params: ProtocolTftpSessionWritePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTftpSessionWriteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tftp_session_write_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
