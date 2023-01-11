import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetServerGetRulesdbPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetServerGetRulesdbRequest:
    path_params: ProtocolTelnetServerGetRulesdbPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetServerGetRulesdbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_server_get_rulesdb_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
