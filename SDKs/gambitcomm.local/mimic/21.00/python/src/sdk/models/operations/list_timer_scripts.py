import dataclasses
from typing import Optional
from ..shared import timerscript as shared_timerscript


@dataclasses.dataclass
class ListTimerScriptsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTimerScriptsRequest:
    path_params: ListTimerScriptsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListTimerScriptsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timer_scripts: Optional[list[shared_timerscript.TimerScript]] = dataclasses.field(default=None)
    
