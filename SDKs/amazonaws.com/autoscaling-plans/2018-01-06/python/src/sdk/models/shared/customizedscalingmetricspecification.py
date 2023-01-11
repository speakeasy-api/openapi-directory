import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricdimension as shared_metricdimension
from ..shared import metricstatistic_enum as shared_metricstatistic_enum


@dataclass_json
@dataclasses.dataclass
class CustomizedScalingMetricSpecification:
    r"""CustomizedScalingMetricSpecification
    <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html\">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html\">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
    """
    
    metric_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    statistic: shared_metricstatistic_enum.MetricStatisticEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statistic') }})
    dimensions: Optional[list[shared_metricdimension.MetricDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
