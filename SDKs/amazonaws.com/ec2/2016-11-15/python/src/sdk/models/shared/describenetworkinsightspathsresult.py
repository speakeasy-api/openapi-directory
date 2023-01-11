import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeNetworkInsightsPathsResult:
    network_insights_paths: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
