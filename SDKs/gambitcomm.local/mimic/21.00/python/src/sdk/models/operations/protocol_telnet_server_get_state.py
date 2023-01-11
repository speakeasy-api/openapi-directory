import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetServerGetStatePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetServerGetStateRequest:
    path_params: ProtocolTelnetServerGetStatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetServerGetStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_server_get_state_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
