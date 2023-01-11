import dataclasses
from typing import Optional


@dataclasses.dataclass
class AdjustmentType:
    r"""AdjustmentType
    Describes a policy adjustment type.
    """
    
    adjustment_type: Optional[str] = dataclasses.field(default=None)
    
