import dataclasses
from typing import Optional


@dataclasses.dataclass
class StartPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartRequest:
    path_params: StartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    start_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
