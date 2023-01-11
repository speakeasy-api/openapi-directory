import dataclasses
from typing import Optional


@dataclasses.dataclass
class LaunchTemplate:
    r"""LaunchTemplate
    Describes an Amazon EC2 launch template.
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    
