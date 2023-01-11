import dataclasses
from typing import Optional


@dataclasses.dataclass
class Limit:
    r"""Limit
    Information about an Elastic Load Balancing resource limit for your Amazon Web Services account.
    """
    
    max: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    
