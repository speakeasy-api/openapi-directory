import dataclasses
from typing import Optional


@dataclasses.dataclass
class BatchTooLarge:
    message: Optional[str] = dataclasses.field(default=None)
    
