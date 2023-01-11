import dataclasses
from typing import Optional
from ..shared import activity as shared_activity


@dataclasses.dataclass
class ActivityType:
    activity: Optional[shared_activity.Activity] = dataclasses.field(default=None)
    
