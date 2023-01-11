import dataclasses
from typing import Optional
from ..shared import configipmi as shared_configipmi


@dataclasses.dataclass
class ProtocolIpmiGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolIpmiGetConfigRequest:
    path_params: ProtocolIpmiGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolIpmiGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_ipmi: Optional[shared_configipmi.ConfigIpmi] = dataclasses.field(default=None)
    
