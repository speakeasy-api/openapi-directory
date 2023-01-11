import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_repositories as shared_paginated_repositories

class GetRepositoriesRoleEnum(str, Enum):
    ADMIN = "admin"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"
    OWNER = "owner"


@dataclasses.dataclass
class GetRepositoriesQueryParams:
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[GetRepositoriesRoleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesRequest:
    query_params: GetRepositoriesQueryParams = dataclasses.field()
    security: GetRepositoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_repositories: Optional[shared_paginated_repositories.PaginatedRepositories] = dataclasses.field(default=None)
    
