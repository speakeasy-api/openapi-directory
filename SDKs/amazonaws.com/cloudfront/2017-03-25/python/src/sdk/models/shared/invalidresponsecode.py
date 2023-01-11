import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidResponseCode:
    message: Optional[str] = dataclasses.field(default=None)
    
