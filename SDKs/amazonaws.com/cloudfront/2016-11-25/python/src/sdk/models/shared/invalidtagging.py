import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidTagging:
    message: Optional[str] = dataclasses.field(default=None)
    
