import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTelnetConnectionSignalPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    connection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    signal_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'signalName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetConnectionSignalRequest:
    path_params: ProtocolTelnetConnectionSignalPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetConnectionSignalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_telnet_connection_signal_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
