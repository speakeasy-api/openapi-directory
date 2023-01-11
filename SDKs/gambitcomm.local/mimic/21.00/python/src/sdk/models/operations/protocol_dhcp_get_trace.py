import dataclasses
from typing import Optional
from ..shared import configdhcp as shared_configdhcp


@dataclasses.dataclass
class ProtocolDhcpGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolDhcpGetTraceRequest:
    path_params: ProtocolDhcpGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolDhcpGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_dhcp: Optional[shared_configdhcp.ConfigDhcp] = dataclasses.field(default=None)
    
