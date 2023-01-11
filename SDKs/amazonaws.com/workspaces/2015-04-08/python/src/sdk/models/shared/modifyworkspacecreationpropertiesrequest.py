import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacecreationproperties as shared_workspacecreationproperties


@dataclass_json
@dataclasses.dataclass
class ModifyWorkspaceCreationPropertiesRequest:
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    workspace_creation_properties: shared_workspacecreationproperties.WorkspaceCreationProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceCreationProperties') }})
    
