import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyHeadersInForwardedValues:
    message: Optional[str] = dataclasses.field(default=None)
    
