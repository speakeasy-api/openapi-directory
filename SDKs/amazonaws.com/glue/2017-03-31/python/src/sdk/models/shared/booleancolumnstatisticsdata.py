import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BooleanColumnStatisticsData:
    r"""BooleanColumnStatisticsData
    Defines column statistics supported for Boolean data columns.
    """
    
    number_of_falses: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfFalses') }})
    number_of_nulls: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNulls') }})
    number_of_trues: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrues') }})
    
