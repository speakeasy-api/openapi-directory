import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyInvalidationsInProgress:
    r"""TooManyInvalidationsInProgress
    You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
