import dataclasses
from typing import Optional


@dataclasses.dataclass
class MissingCustomsException:
    r"""MissingCustomsException
    One or more required customs parameters was missing from the manifest.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
