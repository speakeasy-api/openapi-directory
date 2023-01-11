import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetStatePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    state: int = dataclasses.field(metadata={'path_param': { 'field_name': 'state', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetStateRequest:
    path_params: SetStatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_state_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
