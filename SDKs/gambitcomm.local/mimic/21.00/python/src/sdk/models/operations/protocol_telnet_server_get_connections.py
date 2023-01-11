import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetServerGetConnectionsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetServerGetConnectionsRequest:
    path_params: ProtocolTelnetServerGetConnectionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetServerGetConnectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_server_get_connections_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
