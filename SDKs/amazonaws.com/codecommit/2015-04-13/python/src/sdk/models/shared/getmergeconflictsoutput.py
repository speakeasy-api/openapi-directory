import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflictmetadata as shared_conflictmetadata


@dataclass_json
@dataclasses.dataclass
class GetMergeConflictsOutput:
    conflict_metadata_list: list[shared_conflictmetadata.ConflictMetadata] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictMetadataList') }})
    destination_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    mergeable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeable') }})
    source_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    base_commit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCommitId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
