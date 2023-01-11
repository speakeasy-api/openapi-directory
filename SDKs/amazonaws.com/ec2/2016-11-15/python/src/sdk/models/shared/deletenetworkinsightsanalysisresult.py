import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteNetworkInsightsAnalysisResult:
    network_insights_analysis_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
