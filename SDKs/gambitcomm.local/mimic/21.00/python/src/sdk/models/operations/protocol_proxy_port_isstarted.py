import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolProxyPortIsstartedPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyPortIsstartedRequest:
    path_params: ProtocolProxyPortIsstartedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyPortIsstartedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_proxy_port_isstarted_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
