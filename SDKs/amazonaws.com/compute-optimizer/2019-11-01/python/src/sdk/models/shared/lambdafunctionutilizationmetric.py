import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafunctionmetricname_enum as shared_lambdafunctionmetricname_enum
from ..shared import lambdafunctionmetricstatistic_enum as shared_lambdafunctionmetricstatistic_enum


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionUtilizationMetric:
    r"""LambdaFunctionUtilizationMetric
    Describes a utilization metric of an Lambda function.
    """
    
    name: Optional[shared_lambdafunctionmetricname_enum.LambdaFunctionMetricNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    statistic: Optional[shared_lambdafunctionmetricstatistic_enum.LambdaFunctionMetricStatisticEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
