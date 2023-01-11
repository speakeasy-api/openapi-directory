import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolProxyPortListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyPortListRequest:
    path_params: ProtocolProxyPortListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyPortListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_proxy_port_list_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
