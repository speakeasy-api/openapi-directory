import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobbookmarkentry as shared_jobbookmarkentry


@dataclass_json
@dataclasses.dataclass
class GetJobBookmarkResponse:
    job_bookmark_entry: Optional[shared_jobbookmarkentry.JobBookmarkEntry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobBookmarkEntry') }})
    
