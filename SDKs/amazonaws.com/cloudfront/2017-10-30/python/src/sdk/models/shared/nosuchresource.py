import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchResource:
    message: Optional[str] = dataclasses.field(default=None)
    
