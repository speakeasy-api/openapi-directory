import dataclasses
from typing import Optional


@dataclasses.dataclass
class Endpoint:
    r"""Endpoint
    Represents the information required for client programs to connect to a cache node.
    """
    
    address: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    
