import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import decimalnumber as shared_decimalnumber


@dataclass_json
@dataclasses.dataclass
class DecimalColumnStatisticsData:
    r"""DecimalColumnStatisticsData
    Defines column statistics supported for fixed-point number data columns.
    """
    
    number_of_distinct_values: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfDistinctValues') }})
    number_of_nulls: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNulls') }})
    maximum_value: Optional[shared_decimalnumber.DecimalNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumValue') }})
    minimum_value: Optional[shared_decimalnumber.DecimalNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumValue') }})
    
