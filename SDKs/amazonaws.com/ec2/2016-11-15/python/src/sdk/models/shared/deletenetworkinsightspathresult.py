import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteNetworkInsightsPathResult:
    network_insights_path_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
