import dataclasses
from typing import Optional
from ..shared import configproxy as shared_configproxy


@dataclasses.dataclass
class ProtocolProxyGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyGetConfigRequest:
    path_params: ProtocolProxyGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_proxy: Optional[shared_configproxy.ConfigProxy] = dataclasses.field(default=None)
    
