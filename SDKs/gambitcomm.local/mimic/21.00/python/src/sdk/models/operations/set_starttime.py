import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetStarttimePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    start: int = dataclasses.field(metadata={'path_param': { 'field_name': 'start', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetStarttimeRequest:
    path_params: SetStarttimePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetStarttimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_starttime_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
