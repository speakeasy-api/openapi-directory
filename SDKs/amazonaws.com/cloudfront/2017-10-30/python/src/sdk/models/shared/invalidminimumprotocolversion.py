import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidMinimumProtocolVersion:
    message: Optional[str] = dataclasses.field(default=None)
    
