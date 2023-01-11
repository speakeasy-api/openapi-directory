import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidIfMatchVersion:
    r"""InvalidIfMatchVersion
    The <code>If-Match</code> version is missing or not valid for the distribution.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
