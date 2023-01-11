import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsRequestBody:
    permission: Optional[TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissions403ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsRequest:
    headers: TeamsAddOrUpdateProjectPermissionsHeaders = dataclasses.field()
    path_params: TeamsAddOrUpdateProjectPermissionsPathParams = dataclasses.field()
    request: Optional[TeamsAddOrUpdateProjectPermissionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams_add_or_update_project_permissions_403_application_json_object: Optional[TeamsAddOrUpdateProjectPermissions403ApplicationJSON] = dataclasses.field(default=None)
    
