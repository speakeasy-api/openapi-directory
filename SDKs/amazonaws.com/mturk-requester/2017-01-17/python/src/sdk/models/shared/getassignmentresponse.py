import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignment as shared_assignment
from ..shared import hit as shared_hit


@dataclass_json
@dataclasses.dataclass
class GetAssignmentResponse:
    assignment: Optional[shared_assignment.Assignment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assignment') }})
    hit: Optional[shared_hit.Hit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HIT') }})
    
