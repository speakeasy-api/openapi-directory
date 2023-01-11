import dataclasses
from typing import Optional
from ..shared import configsnmptcp as shared_configsnmptcp


@dataclasses.dataclass
class ProtocolSnmptcpGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmptcpGetConfigRequest:
    path_params: ProtocolSnmptcpGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmptcpGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_snmptcp: Optional[shared_configsnmptcp.ConfigSnmptcp] = dataclasses.field(default=None)
    
