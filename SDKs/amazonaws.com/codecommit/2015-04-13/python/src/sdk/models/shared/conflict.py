import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflictmetadata as shared_conflictmetadata
from ..shared import mergehunk as shared_mergehunk


@dataclass_json
@dataclasses.dataclass
class Conflict:
    r"""Conflict
    Information about conflicts in a merge operation.
    """
    
    conflict_metadata: Optional[shared_conflictmetadata.ConflictMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictMetadata') }})
    merge_hunks: Optional[list[shared_mergehunk.MergeHunk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeHunks') }})
    
