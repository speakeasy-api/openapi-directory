import dataclasses
from typing import Optional


@dataclasses.dataclass
class PolicyAttributeDescription:
    r"""PolicyAttributeDescription
    Information about a policy attribute.
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None)
    attribute_value: Optional[str] = dataclasses.field(default=None)
    
