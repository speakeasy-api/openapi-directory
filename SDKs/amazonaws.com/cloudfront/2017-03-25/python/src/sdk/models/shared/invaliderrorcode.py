import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidErrorCode:
    message: Optional[str] = dataclasses.field(default=None)
    
