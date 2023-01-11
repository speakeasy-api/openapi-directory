import dataclasses
from typing import Optional
from ..shared import scalingpolicy as shared_scalingpolicy


@dataclasses.dataclass
class PoliciesType:
    next_token: Optional[str] = dataclasses.field(default=None)
    scaling_policies: Optional[list[shared_scalingpolicy.ScalingPolicy]] = dataclasses.field(default=None)
    
