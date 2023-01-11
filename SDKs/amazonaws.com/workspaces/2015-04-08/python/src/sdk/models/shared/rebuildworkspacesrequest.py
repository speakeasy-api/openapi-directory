import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rebuildrequest as shared_rebuildrequest


@dataclass_json
@dataclasses.dataclass
class RebuildWorkspacesRequest:
    rebuild_workspace_requests: list[shared_rebuildrequest.RebuildRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RebuildWorkspaceRequests') }})
    
