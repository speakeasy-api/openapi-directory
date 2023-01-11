import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sizeconstraintsetsummary as shared_sizeconstraintsetsummary


@dataclass_json
@dataclasses.dataclass
class ListSizeConstraintSetsResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    size_constraint_sets: Optional[list[shared_sizeconstraintsetsummary.SizeConstraintSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeConstraintSets') }})
    
