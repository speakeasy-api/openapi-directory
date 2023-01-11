import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class InsightRuleContributorDatapoint:
    r"""InsightRuleContributorDatapoint
    <p>One data point related to one contributor.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html\">GetInsightRuleReport</a> and <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html\">InsightRuleContributor</a>.</p>
    """
    
    approximate_value: float = dataclasses.field()
    timestamp: datetime = dataclasses.field()
    
