import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyCacheBehaviors:
    r"""TooManyCacheBehaviors
    You cannot create more cache behaviors for the distribution.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
