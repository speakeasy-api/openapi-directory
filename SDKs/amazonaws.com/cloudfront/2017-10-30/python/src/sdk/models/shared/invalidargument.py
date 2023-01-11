import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidArgument:
    r"""InvalidArgument
    The argument is invalid.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
