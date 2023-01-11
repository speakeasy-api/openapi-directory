import dataclasses
from typing import Optional


@dataclasses.dataclass
class Alarm:
    r"""Alarm
    Describes an alarm.
    """
    
    alarm_arn: Optional[str] = dataclasses.field(default=None)
    alarm_name: Optional[str] = dataclasses.field(default=None)
    
