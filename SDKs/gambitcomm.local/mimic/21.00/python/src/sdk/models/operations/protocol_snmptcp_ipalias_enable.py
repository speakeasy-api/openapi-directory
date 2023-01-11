import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSnmptcpIpaliasEnablePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    ipaddress: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ipaddress', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmptcpIpaliasEnableRequest:
    path_params: ProtocolSnmptcpIpaliasEnablePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmptcpIpaliasEnableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_snmptcp_ipalias_enable_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
