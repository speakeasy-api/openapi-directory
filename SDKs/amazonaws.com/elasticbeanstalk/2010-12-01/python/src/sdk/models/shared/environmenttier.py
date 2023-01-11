import dataclasses
from typing import Optional


@dataclasses.dataclass
class EnvironmentTier:
    r"""EnvironmentTier
    Describes the properties of an environment tier
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    type: Optional[str] = dataclasses.field(default=None)
    version: Optional[str] = dataclasses.field(default=None)
    
