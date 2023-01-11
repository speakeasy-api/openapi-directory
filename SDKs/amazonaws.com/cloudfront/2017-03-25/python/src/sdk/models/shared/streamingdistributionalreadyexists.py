import dataclasses
from typing import Optional


@dataclasses.dataclass
class StreamingDistributionAlreadyExists:
    message: Optional[str] = dataclasses.field(default=None)
    
