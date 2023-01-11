import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_membership as shared_team_membership


@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserInOrgRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON:
    errors: Optional[list[TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserInOrgRequest:
    path_params: TeamsAddOrUpdateMembershipForUserInOrgPathParams = dataclasses.field()
    request: Optional[TeamsAddOrUpdateMembershipForUserInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_membership: Optional[shared_team_membership.TeamMembership] = dataclasses.field(default=None)
    teams_add_or_update_membership_for_user_in_org_422_application_json_object: Optional[TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON] = dataclasses.field(default=None)
    
