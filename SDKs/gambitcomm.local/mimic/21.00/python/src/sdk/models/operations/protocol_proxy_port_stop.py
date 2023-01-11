import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolProxyPortStopPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyPortStopRequest:
    path_params: ProtocolProxyPortStopPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyPortStopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_proxy_port_stop_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
