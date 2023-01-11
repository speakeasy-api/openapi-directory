import dataclasses
from typing import Optional


@dataclasses.dataclass
class TargetGroupStickinessConfig:
    r"""TargetGroupStickinessConfig
    Information about the target group stickiness for a rule.
    """
    
    duration_seconds: Optional[int] = dataclasses.field(default=None)
    enabled: Optional[bool] = dataclasses.field(default=None)
    
