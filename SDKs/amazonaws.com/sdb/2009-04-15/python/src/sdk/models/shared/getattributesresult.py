import dataclasses
from typing import Optional
from ..shared import attributelist as shared_attributelist


@dataclasses.dataclass
class GetAttributesResult:
    attributes: Optional[list[shared_attributelist.AttributeList]] = dataclasses.field(default=None)
    
