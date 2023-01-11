import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResourceInUse:
    message: Optional[str] = dataclasses.field(default=None)
    
