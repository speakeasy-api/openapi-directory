import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BinaryColumnStatisticsData:
    r"""BinaryColumnStatisticsData
    Defines column statistics supported for bit sequence data values.
    """
    
    average_length: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AverageLength') }})
    maximum_length: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumLength') }})
    number_of_nulls: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNulls') }})
    
