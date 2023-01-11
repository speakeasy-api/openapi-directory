import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoalMetricCurrentValueRequestInput:
    r"""GoalMetricCurrentValueRequestInput
    A generic Asana Resource, containing a globally unique identifier.
    """
    
    current_number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_number_value') }})
    
