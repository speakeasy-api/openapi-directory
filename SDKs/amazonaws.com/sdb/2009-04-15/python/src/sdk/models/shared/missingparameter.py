import dataclasses
from typing import Optional


@dataclasses.dataclass
class MissingParameter:
    r"""MissingParameter
    The request must contain the specified missing parameter.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
