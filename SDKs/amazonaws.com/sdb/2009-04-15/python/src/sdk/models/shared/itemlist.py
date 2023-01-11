import dataclasses
from typing import Any,Optional
from ..shared import attributelist as shared_attributelist


@dataclasses.dataclass
class ItemList:
    attributes: list[shared_attributelist.AttributeList] = dataclasses.field()
    name: str = dataclasses.field()
    alternate_name_encoding: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
