import dataclasses
from typing import Optional
from ..shared import configssh as shared_configssh


@dataclasses.dataclass
class ProtocolSSHGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSSHGetConfigRequest:
    path_params: ProtocolSSHGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSSHGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_ssh: Optional[shared_configssh.ConfigSSH] = dataclasses.field(default=None)
    
