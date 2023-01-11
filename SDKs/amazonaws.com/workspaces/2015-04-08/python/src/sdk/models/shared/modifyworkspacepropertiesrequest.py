import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspaceproperties as shared_workspaceproperties


@dataclass_json
@dataclasses.dataclass
class ModifyWorkspacePropertiesRequest:
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceId') }})
    workspace_properties: shared_workspaceproperties.WorkspaceProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceProperties') }})
    
