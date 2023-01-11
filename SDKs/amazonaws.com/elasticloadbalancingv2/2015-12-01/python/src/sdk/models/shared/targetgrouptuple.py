import dataclasses
from typing import Optional


@dataclasses.dataclass
class TargetGroupTuple:
    r"""TargetGroupTuple
    Information about how traffic will be distributed between multiple target groups in a forward rule.
    """
    
    target_group_arn: Optional[str] = dataclasses.field(default=None)
    weight: Optional[int] = dataclasses.field(default=None)
    
