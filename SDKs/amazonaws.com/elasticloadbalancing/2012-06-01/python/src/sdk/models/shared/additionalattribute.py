import dataclasses
from typing import Optional


@dataclasses.dataclass
class AdditionalAttribute:
    r"""AdditionalAttribute
    Information about additional load balancer attributes.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
