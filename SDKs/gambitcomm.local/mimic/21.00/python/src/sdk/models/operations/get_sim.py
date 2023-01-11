import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetSimPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSimRequest:
    path_params: GetSimPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sim_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
