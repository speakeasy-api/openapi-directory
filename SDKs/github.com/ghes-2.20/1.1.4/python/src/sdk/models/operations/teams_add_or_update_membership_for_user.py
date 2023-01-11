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
class TeamsAddOrUpdateMembershipForUserPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserRequest:
    path_params: TeamsAddOrUpdateMembershipForUserPathParams = dataclasses.field()
    request: Optional[TeamsAddOrUpdateMembershipForUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateMembershipForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_membership: Optional[shared_team_membership.TeamMembership] = dataclasses.field(default=None)
    
