import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AttributeList:
    name: str = dataclasses.field()
    value: str = dataclasses.field()
    alternate_name_encoding: Optional[dict[str, Any]] = dataclasses.field(default=None)
    alternate_value_encoding: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
