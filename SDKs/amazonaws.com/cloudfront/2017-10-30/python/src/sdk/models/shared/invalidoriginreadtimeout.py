import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidOriginReadTimeout:
    message: Optional[str] = dataclasses.field(default=None)
    
