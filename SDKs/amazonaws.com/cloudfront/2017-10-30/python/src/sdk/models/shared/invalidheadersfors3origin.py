import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidHeadersForS3Origin:
    message: Optional[str] = dataclasses.field(default=None)
    
