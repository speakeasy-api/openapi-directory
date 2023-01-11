import dataclasses
from typing import Optional
from ..shared import configsnmpv3 as shared_configsnmpv3


@dataclasses.dataclass
class ProtocolSnmpv3GetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmpv3GetConfigRequest:
    path_params: ProtocolSnmpv3GetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmpv3GetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_snm_pv3: Optional[shared_configsnmpv3.ConfigSnmPv3] = dataclasses.field(default=None)
    
