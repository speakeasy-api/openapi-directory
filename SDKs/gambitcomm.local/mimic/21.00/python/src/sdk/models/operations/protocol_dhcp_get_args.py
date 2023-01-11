import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolDhcpGetArgsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolDhcpGetArgsRequest:
    path_params: ProtocolDhcpGetArgsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolDhcpGetArgsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_dhcp_get_args_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
