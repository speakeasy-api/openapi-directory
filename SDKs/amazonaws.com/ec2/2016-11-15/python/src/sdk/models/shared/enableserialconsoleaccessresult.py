import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EnableSerialConsoleAccessResult:
    serial_console_access_enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
