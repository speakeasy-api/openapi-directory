import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZoneList:
    name: Optional[str] = dataclasses.field(default=None)
    
