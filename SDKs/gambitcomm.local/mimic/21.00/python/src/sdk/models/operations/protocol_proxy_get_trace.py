import dataclasses
from typing import Optional
from ..shared import configproxy as shared_configproxy


@dataclasses.dataclass
class ProtocolProxyGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolProxyGetTraceRequest:
    path_params: ProtocolProxyGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolProxyGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_proxy: Optional[shared_configproxy.ConfigProxy] = dataclasses.field(default=None)
    
