import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import joblistentry as shared_joblistentry


@dataclass_json
@dataclasses.dataclass
class ListJobsResult:
    job_list_entries: Optional[list[shared_joblistentry.JobListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobListEntries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
