import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyOriginCustomHeaders:
    message: Optional[str] = dataclasses.field(default=None)
    
