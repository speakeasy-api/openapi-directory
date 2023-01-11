import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import membership as shared_membership


@dataclasses.dataclass
class TeamsUpdateMembershipRolesPathParams:
    membership_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    team_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsUpdateMembershipRolesRequestBody:
    roles: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

@dataclasses.dataclass
class TeamsUpdateMembershipRolesSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TeamsUpdateMembershipRolesRequest:
    path_params: TeamsUpdateMembershipRolesPathParams = dataclasses.field()
    security: TeamsUpdateMembershipRolesSecurity = dataclasses.field()
    request: Optional[TeamsUpdateMembershipRolesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsUpdateMembershipRolesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    membership: Optional[shared_membership.Membership] = dataclasses.field(default=None)
    
