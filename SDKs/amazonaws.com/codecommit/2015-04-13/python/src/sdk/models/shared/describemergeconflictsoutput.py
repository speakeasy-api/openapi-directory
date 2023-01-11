import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflictmetadata as shared_conflictmetadata
from ..shared import mergehunk as shared_mergehunk


@dataclass_json
@dataclasses.dataclass
class DescribeMergeConflictsOutput:
    conflict_metadata: shared_conflictmetadata.ConflictMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictMetadata') }})
    destination_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    merge_hunks: list[shared_mergehunk.MergeHunk] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeHunks') }})
    source_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    base_commit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCommitId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
