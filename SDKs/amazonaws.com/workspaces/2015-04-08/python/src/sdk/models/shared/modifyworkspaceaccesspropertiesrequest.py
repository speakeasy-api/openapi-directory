import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspaceaccessproperties as shared_workspaceaccessproperties


@dataclass_json
@dataclasses.dataclass
class ModifyWorkspaceAccessPropertiesRequest:
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    workspace_access_properties: shared_workspaceaccessproperties.WorkspaceAccessProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceAccessProperties') }})
    
