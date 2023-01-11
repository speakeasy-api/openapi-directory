import dataclasses
from typing import Optional


@dataclasses.dataclass
class DistributionNotDisabled:
    message: Optional[str] = dataclasses.field(default=None)
    
