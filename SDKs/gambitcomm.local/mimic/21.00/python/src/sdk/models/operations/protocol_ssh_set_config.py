import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSSHSetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = dataclasses.field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = dataclasses.field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSSHSetConfigRequest:
    path_params: ProtocolSSHSetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSSHSetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_ssh_set_config_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
