import dataclasses
from typing import Optional


@dataclasses.dataclass
class BaseException:
    r"""BaseException
    An error occurred while processing the request.
    """
    
    code: Optional[str] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    
