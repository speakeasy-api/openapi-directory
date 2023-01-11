import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspaceread as shared_workspaceread


@dataclass_json
@dataclasses.dataclass
class WorkspaceReadList:
    workspaces: list[shared_workspaceread.WorkspaceRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaces') }})
    
