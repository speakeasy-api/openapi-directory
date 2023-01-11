import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZone:
    name: Optional[str] = dataclasses.field(default=None)
    
