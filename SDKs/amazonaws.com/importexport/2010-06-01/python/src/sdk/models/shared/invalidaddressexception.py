import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidAddressException:
    r"""InvalidAddressException
    The address specified in the manifest is invalid.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
