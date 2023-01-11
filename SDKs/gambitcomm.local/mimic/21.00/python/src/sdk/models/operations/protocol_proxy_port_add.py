import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolProxyPortAddPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    target: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    target_port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'targetPort', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyPortAddRequest:
    path_params: ProtocolProxyPortAddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyPortAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_proxy_port_add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
