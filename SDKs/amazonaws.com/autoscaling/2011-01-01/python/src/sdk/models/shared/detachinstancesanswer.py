import dataclasses
from typing import Optional
from ..shared import activity as shared_activity


@dataclasses.dataclass
class DetachInstancesAnswer:
    activities: Optional[list[shared_activity.Activity]] = dataclasses.field(default=None)
    
