import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidOriginAccessIdentity:
    r"""InvalidOriginAccessIdentity
    The origin access identity is not valid or doesn't exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
