import dataclasses
from typing import Optional
from ..shared import alarmhistoryitem as shared_alarmhistoryitem


@dataclasses.dataclass
class DescribeAlarmHistoryOutput:
    alarm_history_items: Optional[list[shared_alarmhistoryitem.AlarmHistoryItem]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
