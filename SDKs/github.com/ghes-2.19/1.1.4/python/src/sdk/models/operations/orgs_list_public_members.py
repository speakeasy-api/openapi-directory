import dataclasses
from typing import Optional
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class OrgsListPublicMembersPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListPublicMembersQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListPublicMembersRequest:
    path_params: OrgsListPublicMembersPathParams = dataclasses.field()
    query_params: OrgsListPublicMembersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListPublicMembersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
