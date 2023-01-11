import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflict as shared_conflict
from ..shared import batchdescribemergeconflictserror as shared_batchdescribemergeconflictserror


@dataclass_json
@dataclasses.dataclass
class BatchDescribeMergeConflictsOutput:
    conflicts: list[shared_conflict.Conflict] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflicts') }})
    destination_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    source_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    base_commit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCommitId') }})
    errors: Optional[list[shared_batchdescribemergeconflictserror.BatchDescribeMergeConflictsError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
