import dataclasses
from typing import Optional
from ..shared import realtimelogconfig as shared_realtimelogconfig


@dataclasses.dataclass
class GetRealtimeLogConfigResult:
    realtime_log_config: Optional[shared_realtimelogconfig.RealtimeLogConfig] = dataclasses.field(default=None)
    
