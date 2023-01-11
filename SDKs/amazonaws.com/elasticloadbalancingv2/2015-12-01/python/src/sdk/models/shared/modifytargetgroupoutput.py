import dataclasses
from typing import Optional
from ..shared import targetgroup as shared_targetgroup


@dataclasses.dataclass
class ModifyTargetGroupOutput:
    target_groups: Optional[list[shared_targetgroup.TargetGroup]] = dataclasses.field(default=None)
    
