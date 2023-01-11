import dataclasses
from typing import Optional


@dataclasses.dataclass
class PlatformFramework:
    r"""PlatformFramework
    A framework supported by the platform.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    version: Optional[str] = dataclasses.field(default=None)
    
