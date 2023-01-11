import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Position:
    r"""Position
    A position in a policy.
    """
    
    column: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
