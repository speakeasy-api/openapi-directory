import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetConnectionRequestPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    command: str = dataclasses.field(metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    connection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetConnectionRequestRequest:
    path_params: ProtocolTelnetConnectionRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetConnectionRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_connection_request_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
