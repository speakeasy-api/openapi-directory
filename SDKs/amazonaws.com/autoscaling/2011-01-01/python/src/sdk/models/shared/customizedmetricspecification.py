import dataclasses
from typing import Optional
from enum import Enum
from ..shared import metricdimension as shared_metricdimension
from ..shared import metricstatistic_enum as shared_metricstatistic_enum


@dataclasses.dataclass
class CustomizedMetricSpecification:
    r"""CustomizedMetricSpecification
    <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html\">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about CloudWatch, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html\">Amazon CloudWatch Concepts</a>.</p>
    """
    
    metric_name: str = dataclasses.field()
    namespace: str = dataclasses.field()
    statistic: shared_metricstatistic_enum.MetricStatisticEnum = dataclasses.field()
    dimensions: Optional[list[shared_metricdimension.MetricDimension]] = dataclasses.field(default=None)
    unit: Optional[str] = dataclasses.field(default=None)
    
