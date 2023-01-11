import dataclasses
from typing import Optional
from ..shared import configcoap as shared_configcoap


@dataclasses.dataclass
class ProtocolCoapGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolCoapGetTraceRequest:
    path_params: ProtocolCoapGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolCoapGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_coap: Optional[shared_configcoap.ConfigCoap] = dataclasses.field(default=None)
    
