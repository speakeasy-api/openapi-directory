import dataclasses
from typing import Optional


@dataclasses.dataclass
class AutoScalingGroup:
    r"""AutoScalingGroup
    Describes an Auto Scaling launch configuration.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
