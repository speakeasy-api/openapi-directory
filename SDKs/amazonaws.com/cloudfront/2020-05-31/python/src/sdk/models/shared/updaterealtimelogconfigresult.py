import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import realtimelogconfig as shared_realtimelogconfig


@dataclasses.dataclass
class UpdateRealtimeLogConfigResult:
    realtime_log_config: Optional[shared_realtimelogconfig.RealtimeLogConfig] = dataclasses.field(default=None)
    
