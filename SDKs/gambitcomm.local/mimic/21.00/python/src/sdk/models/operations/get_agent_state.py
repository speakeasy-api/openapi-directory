import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAgentStatePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentStateRequest:
    path_params: GetAgentStatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_agent_state_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
