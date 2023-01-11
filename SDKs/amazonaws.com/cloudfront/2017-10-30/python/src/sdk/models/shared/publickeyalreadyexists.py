import dataclasses
from typing import Optional


@dataclasses.dataclass
class PublicKeyAlreadyExists:
    r"""PublicKeyAlreadyExists
    The specified public key already exists.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
