import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidCustomsException:
    r"""InvalidCustomsException
    One or more customs parameters was invalid. Please correct and resubmit.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
