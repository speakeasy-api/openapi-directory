import dataclasses
from typing import Optional
from ..shared import telnetuser as shared_telnetuser


@dataclasses.dataclass
class ProtocolTelnetServerGetUsersPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetServerGetUsersRequest:
    path_params: ProtocolTelnetServerGetUsersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetServerGetUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    telnet_users: Optional[list[shared_telnetuser.TelnetUser]] = dataclasses.field(default=None)
    
