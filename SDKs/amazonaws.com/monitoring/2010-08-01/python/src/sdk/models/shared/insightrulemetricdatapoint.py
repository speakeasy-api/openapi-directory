import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class InsightRuleMetricDatapoint:
    r"""InsightRuleMetricDatapoint
    <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html\">GetInsightRuleReport</a>.</p>
    """
    
    timestamp: datetime = dataclasses.field()
    average: Optional[float] = dataclasses.field(default=None)
    max_contributor_value: Optional[float] = dataclasses.field(default=None)
    maximum: Optional[float] = dataclasses.field(default=None)
    minimum: Optional[float] = dataclasses.field(default=None)
    sample_count: Optional[float] = dataclasses.field(default=None)
    sum: Optional[float] = dataclasses.field(default=None)
    unique_contributors: Optional[float] = dataclasses.field(default=None)
    
