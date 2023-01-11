import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectedmetric as shared_projectedmetric


@dataclass_json
@dataclasses.dataclass
class RecommendedOptionProjectedMetric:
    r"""RecommendedOptionProjectedMetric
    <p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href=\"https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent\">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
    """
    
    projected_metrics: Optional[list[shared_projectedmetric.ProjectedMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedMetrics') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    recommended_instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedInstanceType') }})
    
