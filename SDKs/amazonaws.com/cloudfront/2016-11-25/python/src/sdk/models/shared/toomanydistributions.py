import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyDistributions:
    r"""TooManyDistributions
    Processing your request would cause you to exceed the maximum number of distributions allowed.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
