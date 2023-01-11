import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidOriginKeepaliveTimeout:
    message: Optional[str] = dataclasses.field(default=None)
    
