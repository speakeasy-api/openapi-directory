import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import position as shared_position


@dataclass_json
@dataclasses.dataclass
class Span:
    r"""Span
    A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
    """
    
    end: shared_position.Position = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: shared_position.Position = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
