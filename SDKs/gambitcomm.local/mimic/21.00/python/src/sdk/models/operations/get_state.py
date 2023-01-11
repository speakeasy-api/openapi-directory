import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetStatePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStateRequest:
    path_params: GetStatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_state_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
