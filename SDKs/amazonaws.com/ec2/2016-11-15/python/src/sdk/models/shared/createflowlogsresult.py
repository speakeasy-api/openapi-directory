import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateFlowLogsResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    flow_log_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unsuccessful: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
