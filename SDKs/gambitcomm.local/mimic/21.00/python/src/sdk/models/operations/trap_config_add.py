import dataclasses
from typing import Optional


@dataclasses.dataclass
class TrapConfigAddPathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrapConfigAddRequest:
    path_params: TrapConfigAddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TrapConfigAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trap_config_add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
