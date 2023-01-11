import dataclasses
from typing import Optional
from ..shared import configsflow as shared_configsflow


@dataclasses.dataclass
class ProtocolSflowGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSflowGetTraceRequest:
    path_params: ProtocolSflowGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSflowGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_sflow: Optional[shared_configsflow.ConfigSflow] = dataclasses.field(default=None)
    
