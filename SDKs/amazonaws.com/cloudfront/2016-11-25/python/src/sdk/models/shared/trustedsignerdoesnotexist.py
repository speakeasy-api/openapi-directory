import dataclasses
from typing import Optional


@dataclasses.dataclass
class TrustedSignerDoesNotExist:
    r"""TrustedSignerDoesNotExist
    One or more of your trusted signers do not exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
