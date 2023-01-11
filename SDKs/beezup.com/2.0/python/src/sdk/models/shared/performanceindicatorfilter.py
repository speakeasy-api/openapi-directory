import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import performanceindicatortype_enum as shared_performanceindicatortype_enum


@dataclass_json
@dataclasses.dataclass
class PerformanceIndicatorFilter:
    operator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    performance_indicator: shared_performanceindicatortype_enum.PerformanceIndicatorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicator') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
