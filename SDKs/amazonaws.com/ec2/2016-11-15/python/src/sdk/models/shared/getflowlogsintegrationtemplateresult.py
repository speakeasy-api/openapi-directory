import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetFlowLogsIntegrationTemplateResult:
    result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
