import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerlevelmetrics_enum as shared_containerlevelmetrics_enum
from ..shared import metricpolicyrule as shared_metricpolicyrule


@dataclass_json
@dataclasses.dataclass
class MetricPolicy:
    r"""MetricPolicy
    <p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href=\"https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html\">Example Metric Policies</a>.</p>
    """
    
    container_level_metrics: shared_containerlevelmetrics_enum.ContainerLevelMetricsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerLevelMetrics') }})
    metric_policy_rules: Optional[list[shared_metricpolicyrule.MetricPolicyRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricPolicyRules') }})
    
