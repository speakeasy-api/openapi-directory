import dataclasses
from typing import Optional


@dataclasses.dataclass
class MissingParameterException:
    r"""MissingParameterException
    One or more required parameters was missing from the request.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
