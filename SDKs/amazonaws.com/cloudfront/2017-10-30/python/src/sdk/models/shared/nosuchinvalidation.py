import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchInvalidation:
    r"""NoSuchInvalidation
    The specified invalidation does not exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
