import dataclasses
from typing import Optional


@dataclasses.dataclass
class SupportedPlatformsList:
    r"""SupportedPlatformsList
    A list of supported platforms for orderable clusters.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
