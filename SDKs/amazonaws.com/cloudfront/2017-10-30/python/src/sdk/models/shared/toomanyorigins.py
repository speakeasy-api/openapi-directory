import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyOrigins:
    r"""TooManyOrigins
    You cannot create more origins for the distribution.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
