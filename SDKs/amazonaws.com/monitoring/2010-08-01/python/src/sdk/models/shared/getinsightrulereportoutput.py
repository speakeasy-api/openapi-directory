import dataclasses
from typing import Optional
from ..shared import insightrulecontributor as shared_insightrulecontributor
from ..shared import insightrulemetricdatapoint as shared_insightrulemetricdatapoint


@dataclasses.dataclass
class GetInsightRuleReportOutput:
    aggregate_value: Optional[float] = dataclasses.field(default=None)
    aggregation_statistic: Optional[str] = dataclasses.field(default=None)
    approximate_unique_count: Optional[int] = dataclasses.field(default=None)
    contributors: Optional[list[shared_insightrulecontributor.InsightRuleContributor]] = dataclasses.field(default=None)
    key_labels: Optional[list[str]] = dataclasses.field(default=None)
    metric_datapoints: Optional[list[shared_insightrulemetricdatapoint.InsightRuleMetricDatapoint]] = dataclasses.field(default=None)
    
