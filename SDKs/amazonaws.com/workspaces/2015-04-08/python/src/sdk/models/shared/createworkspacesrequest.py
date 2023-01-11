import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacerequest as shared_workspacerequest


@dataclass_json
@dataclasses.dataclass
class CreateWorkspacesRequest:
    workspaces: list[shared_workspacerequest.WorkspaceRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workspaces') }})
    
