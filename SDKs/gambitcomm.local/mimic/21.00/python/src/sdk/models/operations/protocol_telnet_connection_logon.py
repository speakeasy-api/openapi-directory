import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetConnectionLogonPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    connection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    password: str = dataclasses.field(metadata={'path_param': { 'field_name': 'password', 'style': 'simple', 'explode': False }})
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetConnectionLogonRequest:
    path_params: ProtocolTelnetConnectionLogonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetConnectionLogonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_connection_logon_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
