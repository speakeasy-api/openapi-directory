import dataclasses
from typing import Optional
from enum import Enum
from ..shared import basic_error as shared_basic_error
from ..shared import org_membership as shared_org_membership
from ..shared import validation_error as shared_validation_error

class OrgsListMembershipsForAuthenticatedUserStateEnum(str, Enum):
    ACTIVE = "active"
    PENDING = "pending"


@dataclasses.dataclass
class OrgsListMembershipsForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[OrgsListMembershipsForAuthenticatedUserStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListMembershipsForAuthenticatedUserRequest:
    query_params: OrgsListMembershipsForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListMembershipsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    org_memberships: Optional[list[shared_org_membership.OrgMembership]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
