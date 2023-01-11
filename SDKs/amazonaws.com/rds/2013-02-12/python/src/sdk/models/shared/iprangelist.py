import dataclasses
from typing import Optional


@dataclasses.dataclass
class IPRangeList:
    cidrip: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
