import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody:
    permission: Optional[TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgRequest:
    path_params: TeamsAddOrUpdateProjectPermissionsInOrgPathParams = dataclasses.field()
    request: Optional[TeamsAddOrUpdateProjectPermissionsInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateProjectPermissionsInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams_add_or_update_project_permissions_in_org_403_application_json_object: Optional[TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON] = dataclasses.field(default=None)
    
