import dataclasses
from typing import Optional


@dataclasses.dataclass
class PolicyAttributeTypeDescription:
    r"""PolicyAttributeTypeDescription
    Information about a policy attribute type.
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None)
    attribute_type: Optional[str] = dataclasses.field(default=None)
    cardinality: Optional[str] = dataclasses.field(default=None)
    default_value: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    
