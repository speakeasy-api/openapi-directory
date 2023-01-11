import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidTTLOrder:
    message: Optional[str] = dataclasses.field(default=None)
    
