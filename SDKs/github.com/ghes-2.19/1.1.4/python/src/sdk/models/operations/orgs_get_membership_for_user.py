import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import org_membership as shared_org_membership


@dataclasses.dataclass
class OrgsGetMembershipForUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsGetMembershipForUserRequest:
    path_params: OrgsGetMembershipForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsGetMembershipForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    org_membership: Optional[shared_org_membership.OrgMembership] = dataclasses.field(default=None)
    
