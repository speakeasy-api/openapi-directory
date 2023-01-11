import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolSSHGetArgsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSSHGetArgsRequest:
    path_params: ProtocolSSHGetArgsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSSHGetArgsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_ssh_get_args_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
