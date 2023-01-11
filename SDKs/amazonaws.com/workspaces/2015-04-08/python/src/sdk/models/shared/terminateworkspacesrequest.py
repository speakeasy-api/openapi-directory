import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import terminaterequest as shared_terminaterequest


@dataclass_json
@dataclasses.dataclass
class TerminateWorkspacesRequest:
    terminate_workspace_requests: list[shared_terminaterequest.TerminateRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminateWorkspaceRequests') }})
    
