import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stoprequest as shared_stoprequest


@dataclass_json
@dataclasses.dataclass
class StopWorkspacesRequest:
    stop_workspace_requests: list[shared_stoprequest.StopRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopWorkspaceRequests') }})
    
