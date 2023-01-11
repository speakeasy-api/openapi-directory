import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ExportClientVpnClientConfigurationResult:
    client_configuration: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
