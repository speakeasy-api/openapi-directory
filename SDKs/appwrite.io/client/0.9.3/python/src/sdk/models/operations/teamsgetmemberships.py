import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import membershiplist as shared_membershiplist


@dataclasses.dataclass
class TeamsGetMembershipsPathParams:
    team_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetMembershipsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsGetMembershipsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TeamsGetMembershipsRequest:
    path_params: TeamsGetMembershipsPathParams = dataclasses.field()
    query_params: TeamsGetMembershipsQueryParams = dataclasses.field()
    security: TeamsGetMembershipsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetMembershipsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    membership_list: Optional[shared_membershiplist.MembershipList] = dataclasses.field(default=None)
    
