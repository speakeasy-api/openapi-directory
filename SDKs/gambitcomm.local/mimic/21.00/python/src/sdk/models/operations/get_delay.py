import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDelayPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDelayRequest:
    path_params: GetDelayPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDelayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_delay_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
