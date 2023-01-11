import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteWorkspacePathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteWorkspace200ApplicationJSONWorkspace:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteWorkspace200ApplicationJSON:
    workspace: Optional[DeleteWorkspace200ApplicationJSONWorkspace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclasses.dataclass
class DeleteWorkspaceRequest:
    path_params: DeleteWorkspacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_workspace_200_application_json_object: Optional[DeleteWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
