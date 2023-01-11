import dataclasses
from typing import Optional


@dataclasses.dataclass
class RequestTimeout:
    r"""RequestTimeout
    A timeout occurred when attempting to query the specified domain with specified query expression.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
