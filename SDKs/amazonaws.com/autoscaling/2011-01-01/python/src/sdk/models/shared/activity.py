import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import scalingactivitystatuscode_enum as shared_scalingactivitystatuscode_enum


@dataclasses.dataclass
class Activity:
    r"""Activity
    Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
    """
    
    activity_id: str = dataclasses.field()
    auto_scaling_group_name: str = dataclasses.field()
    cause: str = dataclasses.field()
    start_time: datetime = dataclasses.field()
    status_code: shared_scalingactivitystatuscode_enum.ScalingActivityStatusCodeEnum = dataclasses.field()
    auto_scaling_group_arn: Optional[str] = dataclasses.field(default=None)
    auto_scaling_group_state: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    details: Optional[str] = dataclasses.field(default=None)
    end_time: Optional[datetime] = dataclasses.field(default=None)
    progress: Optional[int] = dataclasses.field(default=None)
    status_message: Optional[str] = dataclasses.field(default=None)
    
