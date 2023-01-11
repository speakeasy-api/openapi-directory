import dataclasses
from typing import Optional
from ..shared import insightrule as shared_insightrule


@dataclasses.dataclass
class DescribeInsightRulesOutput:
    insight_rules: Optional[list[shared_insightrule.InsightRule]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
