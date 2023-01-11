import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetScenPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScenRequest:
    path_params: GetScenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetScenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_scen_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
