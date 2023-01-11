import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetServerGetKeymapPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetServerGetKeymapRequest:
    path_params: ProtocolTelnetServerGetKeymapPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetServerGetKeymapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_server_get_keymap_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
