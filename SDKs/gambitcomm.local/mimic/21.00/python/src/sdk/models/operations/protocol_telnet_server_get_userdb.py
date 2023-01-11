import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetServerGetUserdbPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetServerGetUserdbRequest:
    path_params: ProtocolTelnetServerGetUserdbPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetServerGetUserdbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_server_get_userdb_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
