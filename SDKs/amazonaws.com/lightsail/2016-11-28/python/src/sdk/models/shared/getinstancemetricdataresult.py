import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricdatapoint as shared_metricdatapoint
from ..shared import instancemetricname_enum as shared_instancemetricname_enum


@dataclass_json
@dataclasses.dataclass
class GetInstanceMetricDataResult:
    metric_data: Optional[list[shared_metricdatapoint.MetricDatapoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricData') }})
    metric_name: Optional[shared_instancemetricname_enum.InstanceMetricNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    
