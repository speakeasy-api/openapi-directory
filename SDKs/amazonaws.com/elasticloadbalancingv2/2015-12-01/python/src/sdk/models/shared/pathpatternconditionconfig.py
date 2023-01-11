import dataclasses
from typing import Optional


@dataclasses.dataclass
class PathPatternConditionConfig:
    r"""PathPatternConditionConfig
    Information about a path pattern condition.
    """
    
    values: Optional[list[str]] = dataclasses.field(default=None)
    
