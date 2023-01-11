import dataclasses
from typing import Optional
from ..shared import syslogmsg as shared_syslogmsg


@dataclasses.dataclass
class ProtocolSyslogSendPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    pri: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pri', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSyslogSendRequest:
    path_params: ProtocolSyslogSendPathParams = dataclasses.field()
    request: shared_syslogmsg.SyslogMsg = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProtocolSyslogSendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_syslog_send_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
