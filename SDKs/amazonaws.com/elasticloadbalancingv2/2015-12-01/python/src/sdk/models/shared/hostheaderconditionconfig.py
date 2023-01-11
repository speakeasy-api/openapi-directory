import dataclasses
from typing import Optional


@dataclasses.dataclass
class HostHeaderConditionConfig:
    r"""HostHeaderConditionConfig
    Information about a host header condition.
    """
    
    values: Optional[list[str]] = dataclasses.field(default=None)
    
