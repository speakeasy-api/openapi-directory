import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import scheduledupdategroupaction as shared_scheduledupdategroupaction


@dataclasses.dataclass
class ScheduledActionsType:
    next_token: Optional[str] = dataclasses.field(default=None)
    scheduled_update_group_actions: Optional[list[shared_scheduledupdategroupaction.ScheduledUpdateGroupAction]] = dataclasses.field(default=None)
    
