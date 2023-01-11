import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import org_membership as shared_org_membership
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class OrgsSetMembershipForUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class OrgsSetMembershipForUserRequestBodyRoleEnum(str, Enum):
    ADMIN = "admin"
    MEMBER = "member"


@dataclass_json
@dataclasses.dataclass
class OrgsSetMembershipForUserRequestBody:
    role: Optional[OrgsSetMembershipForUserRequestBodyRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclasses.dataclass
class OrgsSetMembershipForUserRequest:
    path_params: OrgsSetMembershipForUserPathParams = dataclasses.field()
    request: Optional[OrgsSetMembershipForUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OrgsSetMembershipForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    org_membership: Optional[shared_org_membership.OrgMembership] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
