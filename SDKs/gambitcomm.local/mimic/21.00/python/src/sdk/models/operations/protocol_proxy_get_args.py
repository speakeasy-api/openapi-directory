import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolProxyGetArgsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyGetArgsRequest:
    path_params: ProtocolProxyGetArgsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyGetArgsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_proxy_get_args_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
