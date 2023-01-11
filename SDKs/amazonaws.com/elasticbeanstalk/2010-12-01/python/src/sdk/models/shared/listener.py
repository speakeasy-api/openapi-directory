import dataclasses
from typing import Optional


@dataclasses.dataclass
class Listener:
    r"""Listener
    Describes the properties of a Listener for the LoadBalancer.
    """
    
    port: Optional[int] = dataclasses.field(default=None)
    protocol: Optional[str] = dataclasses.field(default=None)
    
