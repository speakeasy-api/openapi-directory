import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSerialConsoleAccessStatusResult:
    serial_console_access_enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
