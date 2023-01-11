import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyTrustedSigners:
    r"""TooManyTrustedSigners
    Your request contains more trusted signers than are allowed per distribution.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
