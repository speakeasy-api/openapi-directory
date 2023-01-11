import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commit as shared_commit
from ..shared import batchgetcommitserror as shared_batchgetcommitserror


@dataclass_json
@dataclasses.dataclass
class BatchGetCommitsOutput:
    commits: Optional[list[shared_commit.Commit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits') }})
    errors: Optional[list[shared_batchgetcommitserror.BatchGetCommitsError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
