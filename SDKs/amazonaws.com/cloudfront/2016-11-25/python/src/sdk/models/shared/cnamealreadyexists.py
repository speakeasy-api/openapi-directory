import dataclasses
from typing import Optional


@dataclasses.dataclass
class CnameAlreadyExists:
    message: Optional[str] = dataclasses.field(default=None)
    
