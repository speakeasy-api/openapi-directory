import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolDhcpParamsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolDhcpParamsRequest:
    path_params: ProtocolDhcpParamsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolDhcpParamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_dhcp_params_200_application_json_objects: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
