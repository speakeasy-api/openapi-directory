import dataclasses
from typing import Optional


@dataclasses.dataclass
class TagList:
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
