import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsoleOutputResult:
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    timestamp: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
