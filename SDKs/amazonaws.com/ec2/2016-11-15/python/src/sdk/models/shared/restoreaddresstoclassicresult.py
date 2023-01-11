import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RestoreAddressToClassicResult:
    public_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
