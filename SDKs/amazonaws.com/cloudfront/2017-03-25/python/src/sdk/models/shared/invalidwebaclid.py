import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidWebACLID:
    message: Optional[str] = dataclasses.field(default=None)
    
