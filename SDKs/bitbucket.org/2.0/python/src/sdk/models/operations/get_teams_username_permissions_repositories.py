import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_repository_permissions as shared_paginated_repository_permissions


@dataclasses.dataclass
class GetTeamsUsernamePermissionsRepositoriesPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsUsernamePermissionsRepositoriesQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeamsUsernamePermissionsRepositoriesSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTeamsUsernamePermissionsRepositoriesRequest:
    path_params: GetTeamsUsernamePermissionsRepositoriesPathParams = dataclasses.field()
    query_params: GetTeamsUsernamePermissionsRepositoriesQueryParams = dataclasses.field()
    security: GetTeamsUsernamePermissionsRepositoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsUsernamePermissionsRepositoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_repository_permissions: Optional[shared_paginated_repository_permissions.PaginatedRepositoryPermissions] = dataclasses.field(default=None)
    
