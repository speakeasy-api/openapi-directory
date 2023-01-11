import dataclasses
from typing import Optional


@dataclasses.dataclass
class AttributeValueList:
    r"""AttributeValueList
    Describes an attribute value.
    """
    
    attribute_value: Optional[str] = dataclasses.field(default=None)
    
