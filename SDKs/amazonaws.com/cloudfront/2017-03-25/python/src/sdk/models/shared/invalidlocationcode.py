import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidLocationCode:
    message: Optional[str] = dataclasses.field(default=None)
    
