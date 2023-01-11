import dataclasses
from typing import Optional
from ..shared import confignetflow as shared_confignetflow


@dataclasses.dataclass
class ProtocolNetflowGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowGetTraceRequest:
    path_params: ProtocolNetflowGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_netflow: Optional[shared_confignetflow.ConfigNetflow] = dataclasses.field(default=None)
    
