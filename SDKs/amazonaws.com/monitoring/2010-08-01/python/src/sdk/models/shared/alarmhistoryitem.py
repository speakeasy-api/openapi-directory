import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alarmtype_enum as shared_alarmtype_enum
from ..shared import historyitemtype_enum as shared_historyitemtype_enum


@dataclasses.dataclass
class AlarmHistoryItem:
    r"""AlarmHistoryItem
    Represents the history of a specific alarm.
    """
    
    alarm_name: Optional[str] = dataclasses.field(default=None)
    alarm_type: Optional[shared_alarmtype_enum.AlarmTypeEnum] = dataclasses.field(default=None)
    history_data: Optional[str] = dataclasses.field(default=None)
    history_item_type: Optional[shared_historyitemtype_enum.HistoryItemTypeEnum] = dataclasses.field(default=None)
    history_summary: Optional[str] = dataclasses.field(default=None)
    timestamp: Optional[datetime] = dataclasses.field(default=None)
    
