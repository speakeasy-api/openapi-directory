import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchmetricsdetail as shared_cloudwatchmetricsdetail


@dataclass_json
@dataclasses.dataclass
class AnomalySourceDetails:
    r"""AnomalySourceDetails
     Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. 
    """
    
    cloud_watch_metrics: Optional[list[shared_cloudwatchmetricsdetail.CloudWatchMetricsDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchMetrics') }})
    
