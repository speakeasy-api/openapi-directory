import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolProxyPortStartPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyPortStartRequest:
    path_params: ProtocolProxyPortStartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyPortStartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_proxy_port_start_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
