import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failedworkspacechangerequest as shared_failedworkspacechangerequest


@dataclass_json
@dataclasses.dataclass
class StartWorkspacesResult:
    failed_requests: Optional[list[shared_failedworkspacechangerequest.FailedWorkspaceChangeRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedRequests') }})
    
