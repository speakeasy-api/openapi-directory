import dataclasses
from typing import Optional


@dataclasses.dataclass
class DelTimerScriptPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    arg: str = dataclasses.field(metadata={'path_param': { 'field_name': 'arg', 'style': 'simple', 'explode': False }})
    interval: int = dataclasses.field(metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    script: str = dataclasses.field(metadata={'path_param': { 'field_name': 'script', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DelTimerScriptRequest:
    path_params: DelTimerScriptPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DelTimerScriptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    del_timer_script_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
