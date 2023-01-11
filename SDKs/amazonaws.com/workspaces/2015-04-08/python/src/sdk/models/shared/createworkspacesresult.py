import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failedcreateworkspacerequest as shared_failedcreateworkspacerequest
from ..shared import workspace as shared_workspace


@dataclass_json
@dataclasses.dataclass
class CreateWorkspacesResult:
    failed_requests: Optional[list[shared_failedcreateworkspacerequest.FailedCreateWorkspaceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedRequests') }})
    pending_requests: Optional[list[shared_workspace.Workspace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingRequests') }})
    
