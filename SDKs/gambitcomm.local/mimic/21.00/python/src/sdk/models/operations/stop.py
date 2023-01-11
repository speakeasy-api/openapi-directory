import dataclasses
from typing import Optional


@dataclasses.dataclass
class StopPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopRequest:
    path_params: StopPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stop_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
