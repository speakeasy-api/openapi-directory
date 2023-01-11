import dataclasses
from typing import Optional


@dataclasses.dataclass
class MissingBody:
    r"""MissingBody
    This operation requires a body. Ensure that the body is present and the Content-Type header is set.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
