import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AllWorkspaces200ApplicationJSONWorkspaces:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AllWorkspaces200ApplicationJSON:
    workspaces: Optional[list[AllWorkspaces200ApplicationJSONWorkspaces]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaces') }})
    

@dataclasses.dataclass
class AllWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_workspaces_200_application_json_object: Optional[AllWorkspaces200ApplicationJSON] = dataclasses.field(default=None)
    
