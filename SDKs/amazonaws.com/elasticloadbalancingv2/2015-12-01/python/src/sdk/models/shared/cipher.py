import dataclasses
from typing import Optional


@dataclasses.dataclass
class Cipher:
    r"""Cipher
    Information about a cipher used in a policy.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    priority: Optional[int] = dataclasses.field(default=None)
    
