import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidQueryStringParameters:
    message: Optional[str] = dataclasses.field(default=None)
    
