import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mailboxexportjob as shared_mailboxexportjob


@dataclass_json
@dataclasses.dataclass
class ListMailboxExportJobsResponse:
    jobs: Optional[list[shared_mailboxexportjob.MailboxExportJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Jobs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
