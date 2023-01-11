import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPrivdirPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPrivdirRequest:
    path_params: GetPrivdirPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPrivdirResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_privdir_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
