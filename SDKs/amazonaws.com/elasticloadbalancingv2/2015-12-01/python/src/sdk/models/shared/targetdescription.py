import dataclasses
from typing import Optional


@dataclasses.dataclass
class TargetDescription:
    r"""TargetDescription
    Information about a target.
    """
    
    id: str = dataclasses.field()
    availability_zone: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    
