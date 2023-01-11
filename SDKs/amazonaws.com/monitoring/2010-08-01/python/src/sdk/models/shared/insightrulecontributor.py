import dataclasses
from ..shared import insightrulecontributordatapoint as shared_insightrulecontributordatapoint


@dataclasses.dataclass
class InsightRuleContributor:
    r"""InsightRuleContributor
    <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html\">GetInsightRuleReport</a>.</p>
    """
    
    approximate_aggregate_value: float = dataclasses.field()
    datapoints: list[shared_insightrulecontributordatapoint.InsightRuleContributorDatapoint] = dataclasses.field()
    keys: list[str] = dataclasses.field()
    
