import dataclasses
from typing import Optional
from ..shared import configweb as shared_configweb


@dataclasses.dataclass
class ProtocolWebGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolWebGetTraceRequest:
    path_params: ProtocolWebGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolWebGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_web: Optional[shared_configweb.ConfigWeb] = dataclasses.field(default=None)
    
