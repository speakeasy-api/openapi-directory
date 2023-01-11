import dataclasses
from typing import Optional
from ..shared import attributevaluelist as shared_attributevaluelist


@dataclasses.dataclass
class AttributeList:
    r"""AttributeList
    A name value pair that describes an aspect of an account. 
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None)
    attribute_values: Optional[list[shared_attributevaluelist.AttributeValueList]] = dataclasses.field(default=None)
    
