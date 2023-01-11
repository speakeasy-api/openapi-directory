import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolProxySetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = dataclasses.field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = dataclasses.field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxySetConfigRequest:
    path_params: ProtocolProxySetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxySetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_proxy_set_config_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
