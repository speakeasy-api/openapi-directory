import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafunctionmemorymetricname_enum as shared_lambdafunctionmemorymetricname_enum
from ..shared import lambdafunctionmemorymetricstatistic_enum as shared_lambdafunctionmemorymetricstatistic_enum


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionMemoryProjectedMetric:
    r"""LambdaFunctionMemoryProjectedMetric
    Describes a projected utilization metric of an Lambda function recommendation option.
    """
    
    name: Optional[shared_lambdafunctionmemorymetricname_enum.LambdaFunctionMemoryMetricNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    statistic: Optional[shared_lambdafunctionmemorymetricstatistic_enum.LambdaFunctionMemoryMetricStatisticEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
