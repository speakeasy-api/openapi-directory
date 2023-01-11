import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyRequestedAttributes:
    r"""TooManyRequestedAttributes
    Too many attributes requested.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
