import dataclasses
from typing import Optional


@dataclasses.dataclass
class LaunchConfiguration:
    r"""LaunchConfiguration
    Describes an Auto Scaling launch configuration.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
