import dataclasses
from typing import Optional
from ..shared import activity as shared_activity


@dataclasses.dataclass
class ActivitiesType:
    activities: list[shared_activity.Activity] = dataclasses.field()
    next_token: Optional[str] = dataclasses.field(default=None)
    
