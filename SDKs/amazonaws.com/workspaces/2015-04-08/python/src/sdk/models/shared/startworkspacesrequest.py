import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startrequest as shared_startrequest


@dataclass_json
@dataclasses.dataclass
class StartWorkspacesRequest:
    start_workspace_requests: list[shared_startrequest.StartRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartWorkspaceRequests') }})
    
