import dataclasses
from typing import Optional
from ..shared import configtod as shared_configtod


@dataclasses.dataclass
class ProtocolTodGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTodGetConfigRequest:
    path_params: ProtocolTodGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTodGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_tod: Optional[shared_configtod.ConfigTod] = dataclasses.field(default=None)
    
