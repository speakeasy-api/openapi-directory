import dataclasses
from typing import Optional


@dataclasses.dataclass
class PublicKeyInUse:
    r"""PublicKeyInUse
    The specified public key is in use. 
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
