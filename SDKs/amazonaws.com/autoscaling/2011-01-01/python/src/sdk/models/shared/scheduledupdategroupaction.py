import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class ScheduledUpdateGroupAction:
    r"""ScheduledUpdateGroupAction
    Describes a scheduled scaling action.
    """
    
    auto_scaling_group_name: Optional[str] = dataclasses.field(default=None)
    desired_capacity: Optional[int] = dataclasses.field(default=None)
    end_time: Optional[datetime] = dataclasses.field(default=None)
    max_size: Optional[int] = dataclasses.field(default=None)
    min_size: Optional[int] = dataclasses.field(default=None)
    recurrence: Optional[str] = dataclasses.field(default=None)
    scheduled_action_arn: Optional[str] = dataclasses.field(default=None)
    scheduled_action_name: Optional[str] = dataclasses.field(default=None)
    start_time: Optional[datetime] = dataclasses.field(default=None)
    time: Optional[datetime] = dataclasses.field(default=None)
    time_zone: Optional[str] = dataclasses.field(default=None)
    
