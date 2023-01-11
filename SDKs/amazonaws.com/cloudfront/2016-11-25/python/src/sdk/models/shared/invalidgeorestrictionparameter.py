import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidGeoRestrictionParameter:
    message: Optional[str] = dataclasses.field(default=None)
    
