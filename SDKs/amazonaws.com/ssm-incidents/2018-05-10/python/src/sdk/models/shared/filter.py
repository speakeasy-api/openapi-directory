import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import condition as shared_condition


@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    Filter the selection by using a condition.
    """
    
    condition: shared_condition.Condition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
