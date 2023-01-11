import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetDelayPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    delay: int = dataclasses.field(metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetDelayRequest:
    path_params: SetDelayPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetDelayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_delay_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
