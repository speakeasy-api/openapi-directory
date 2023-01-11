import dataclasses
from typing import Optional
from ..shared import timerscript as shared_timerscript


@dataclasses.dataclass
class ListDaemonTimerScriptsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timer_scripts: Optional[list[shared_timerscript.TimerScript]] = dataclasses.field(default=None)
    
