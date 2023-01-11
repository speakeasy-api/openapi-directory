import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetHostPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHostRequest:
    path_params: GetHostPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_host_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
