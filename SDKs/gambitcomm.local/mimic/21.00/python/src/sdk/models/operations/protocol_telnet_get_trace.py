import dataclasses
from typing import Optional
from ..shared import configtelnet as shared_configtelnet


@dataclasses.dataclass
class ProtocolTelnetGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTelnetGetTraceRequest:
    path_params: ProtocolTelnetGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTelnetGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_telnet: Optional[shared_configtelnet.ConfigTelnet] = dataclasses.field(default=None)
    
