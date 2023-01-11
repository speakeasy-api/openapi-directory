import dataclasses
from typing import Optional


@dataclasses.dataclass
class Endpoint:
    address: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    
