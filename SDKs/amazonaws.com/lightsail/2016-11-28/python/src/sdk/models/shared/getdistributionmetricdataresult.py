import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricdatapoint as shared_metricdatapoint
from ..shared import distributionmetricname_enum as shared_distributionmetricname_enum


@dataclass_json
@dataclasses.dataclass
class GetDistributionMetricDataResult:
    metric_data: Optional[list[shared_metricdatapoint.MetricDatapoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricData') }})
    metric_name: Optional[shared_distributionmetricname_enum.DistributionMetricNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    
