import dataclasses
from typing import Optional


@dataclasses.dataclass
class CannotChangeImmutablePublicKeyFields:
    r"""CannotChangeImmutablePublicKeyFields
    You can't change the value of a public key.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
