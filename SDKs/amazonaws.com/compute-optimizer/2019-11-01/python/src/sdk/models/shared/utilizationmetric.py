import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricname_enum as shared_metricname_enum
from ..shared import metricstatistic_enum as shared_metricstatistic_enum


@dataclass_json
@dataclasses.dataclass
class UtilizationMetric:
    r"""UtilizationMetric
    <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
    """
    
    name: Optional[shared_metricname_enum.MetricNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    statistic: Optional[shared_metricstatistic_enum.MetricStatisticEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
