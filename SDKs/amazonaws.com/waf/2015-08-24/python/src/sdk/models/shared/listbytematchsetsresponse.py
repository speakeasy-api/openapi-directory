import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bytematchsetsummary as shared_bytematchsetsummary


@dataclass_json
@dataclasses.dataclass
class ListByteMatchSetsResponse:
    byte_match_sets: Optional[list[shared_bytematchsetsummary.ByteMatchSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByteMatchSets') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
