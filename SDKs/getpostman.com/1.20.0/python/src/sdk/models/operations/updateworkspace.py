import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateWorkspacePathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceRequestBodyWorkspaceCollections:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceRequestBodyWorkspaceEnvironments:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceRequestBodyWorkspaceMocks:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceRequestBodyWorkspaceMonitors:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceRequestBodyWorkspace:
    collections: Optional[list[UpdateWorkspaceRequestBodyWorkspaceCollections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environments: Optional[list[UpdateWorkspaceRequestBodyWorkspaceEnvironments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    mocks: Optional[list[UpdateWorkspaceRequestBodyWorkspaceMocks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mocks') }})
    monitors: Optional[list[UpdateWorkspaceRequestBodyWorkspaceMonitors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitors') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceRequestBody:
    workspace: Optional[UpdateWorkspaceRequestBodyWorkspace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspace200ApplicationJSONWorkspace:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspace200ApplicationJSON:
    workspace: Optional[UpdateWorkspace200ApplicationJSONWorkspace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspace403ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspace403ApplicationJSON:
    error: Optional[UpdateWorkspace403ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspace404ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspace404ApplicationJSON:
    error: Optional[UpdateWorkspace404ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class UpdateWorkspaceRequest:
    path_params: UpdateWorkspacePathParams = dataclasses.field()
    request: Optional[UpdateWorkspaceRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_workspace_200_application_json_object: Optional[UpdateWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    update_workspace_403_application_json_object: Optional[UpdateWorkspace403ApplicationJSON] = dataclasses.field(default=None)
    update_workspace_404_application_json_object: Optional[UpdateWorkspace404ApplicationJSON] = dataclasses.field(default=None)
    
