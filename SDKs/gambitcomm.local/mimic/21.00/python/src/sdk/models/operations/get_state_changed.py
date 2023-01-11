import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetStateChangedPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStateChangedRequest:
    path_params: GetStateChangedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStateChangedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_state_changed_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
