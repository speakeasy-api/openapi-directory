import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_pullrequests as shared_paginated_pullrequests


@dataclasses.dataclass
class GetPullrequestsSelectedUserPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    
class GetPullrequestsSelectedUserStateEnum(str, Enum):
    MERGED = "MERGED"
    SUPERSEDED = "SUPERSEDED"
    OPEN = "OPEN"
    DECLINED = "DECLINED"


@dataclasses.dataclass
class GetPullrequestsSelectedUserQueryParams:
    state: Optional[GetPullrequestsSelectedUserStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPullrequestsSelectedUserSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPullrequestsSelectedUserRequest:
    path_params: GetPullrequestsSelectedUserPathParams = dataclasses.field()
    query_params: GetPullrequestsSelectedUserQueryParams = dataclasses.field()
    security: GetPullrequestsSelectedUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPullrequestsSelectedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_pullrequests: Optional[shared_paginated_pullrequests.PaginatedPullrequests] = dataclasses.field(default=None)
    
