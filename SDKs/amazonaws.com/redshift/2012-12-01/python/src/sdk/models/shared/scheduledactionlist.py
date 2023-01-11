import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import scheduledactionstate_enum as shared_scheduledactionstate_enum
from ..shared import scheduledactiontype as shared_scheduledactiontype


@dataclasses.dataclass
class ScheduledActionList:
    r"""ScheduledActionList
    Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>. 
    """
    
    end_time: Optional[datetime] = dataclasses.field(default=None)
    iam_role: Optional[str] = dataclasses.field(default=None)
    next_invocations: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    schedule: Optional[str] = dataclasses.field(default=None)
    scheduled_action_description: Optional[str] = dataclasses.field(default=None)
    scheduled_action_name: Optional[str] = dataclasses.field(default=None)
    start_time: Optional[datetime] = dataclasses.field(default=None)
    state: Optional[shared_scheduledactionstate_enum.ScheduledActionStateEnum] = dataclasses.field(default=None)
    target_action: Optional[shared_scheduledactiontype.ScheduledActionType] = dataclasses.field(default=None)
    
