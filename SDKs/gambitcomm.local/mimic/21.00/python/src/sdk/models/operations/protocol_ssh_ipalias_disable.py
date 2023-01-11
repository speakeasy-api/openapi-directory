import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSSHIpaliasDisablePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    ipaddress: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ipaddress', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSSHIpaliasDisableRequest:
    path_params: ProtocolSSHIpaliasDisablePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSSHIpaliasDisableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_ssh_ipalias_disable_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
