import dataclasses
from typing import Optional


@dataclasses.dataclass
class PauseNowPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PauseNowRequest:
    path_params: PauseNowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PauseNowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pause_now_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
