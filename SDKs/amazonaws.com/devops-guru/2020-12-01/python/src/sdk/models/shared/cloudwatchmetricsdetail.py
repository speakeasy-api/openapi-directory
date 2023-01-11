import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchmetricsdimension as shared_cloudwatchmetricsdimension
from ..shared import cloudwatchmetricsstat_enum as shared_cloudwatchmetricsstat_enum


@dataclass_json
@dataclasses.dataclass
class CloudWatchMetricsDetail:
    r"""CloudWatchMetricsDetail
     Information about an Amazon CloudWatch metric. 
    """
    
    dimensions: Optional[list[shared_cloudwatchmetricsdimension.CloudWatchMetricsDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    metric_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Period') }})
    stat: Optional[shared_cloudwatchmetricsstat_enum.CloudWatchMetricsStatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stat') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
