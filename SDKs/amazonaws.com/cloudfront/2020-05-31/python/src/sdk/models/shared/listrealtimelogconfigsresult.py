import dataclasses
from typing import Optional
from ..shared import realtimelogconfigs as shared_realtimelogconfigs


@dataclasses.dataclass
class ListRealtimeLogConfigsResult:
    realtime_log_configs: Optional[shared_realtimelogconfigs.RealtimeLogConfigs] = dataclasses.field(default=None)
    
