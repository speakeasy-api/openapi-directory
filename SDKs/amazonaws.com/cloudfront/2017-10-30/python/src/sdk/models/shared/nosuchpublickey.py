import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchPublicKey:
    r"""NoSuchPublicKey
    The specified public key doesn't exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
