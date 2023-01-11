import dataclasses
from typing import Optional


@dataclasses.dataclass
class StreamingDistributionNotDisabled:
    message: Optional[str] = dataclasses.field(default=None)
    
