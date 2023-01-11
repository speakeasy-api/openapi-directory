import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetworkspacestate_enum as shared_targetworkspacestate_enum


@dataclass_json
@dataclasses.dataclass
class ModifyWorkspaceStateRequest:
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceId') }})
    workspace_state: shared_targetworkspacestate_enum.TargetWorkspaceStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceState') }})
    
