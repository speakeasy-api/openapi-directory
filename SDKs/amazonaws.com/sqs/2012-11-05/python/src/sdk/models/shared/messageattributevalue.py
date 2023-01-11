import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class MessageAttributeValue:
    binary_list_values: Optional[dict[str, Any]] = dataclasses.field(default=None)
    binary_value: Optional[str] = dataclasses.field(default=None)
    data_type: Optional[str] = dataclasses.field(default=None)
    string_list_values: Optional[dict[str, Any]] = dataclasses.field(default=None)
    string_value: Optional[str] = dataclasses.field(default=None)
    
