import dataclasses
from typing import Optional
from ..shared import configdhcp as shared_configdhcp


@dataclasses.dataclass
class ProtocolDhcpGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolDhcpGetConfigRequest:
    path_params: ProtocolDhcpGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolDhcpGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_dhcp: Optional[shared_configdhcp.ConfigDhcp] = dataclasses.field(default=None)
    
