import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rebootrequest as shared_rebootrequest


@dataclass_json
@dataclasses.dataclass
class RebootWorkspacesRequest:
    reboot_workspace_requests: list[shared_rebootrequest.RebootRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RebootWorkspaceRequests') }})
    
