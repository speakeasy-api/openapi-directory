import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyQueryStringParameters:
    message: Optional[str] = dataclasses.field(default=None)
    
