import dataclasses
from typing import Optional
from ..shared import scheduledactionlist as shared_scheduledactionlist


@dataclasses.dataclass
class ScheduledActionsMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    scheduled_actions: Optional[list[shared_scheduledactionlist.ScheduledActionList]] = dataclasses.field(default=None)
    
