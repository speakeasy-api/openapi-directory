import dataclasses
from typing import Optional


@dataclasses.dataclass
class Trigger:
    r"""Trigger
    Describes a trigger.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
