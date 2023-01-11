import dataclasses
from typing import Optional


@dataclasses.dataclass
class TargetGroupAttribute:
    r"""TargetGroupAttribute
    Information about a target group attribute.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
