import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetPasswordDataResult:
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    password_data: Optional[dict[str, Any]] = dataclasses.field(default=None)
    timestamp: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
