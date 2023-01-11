import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_hook_events as shared_paginated_hook_events

class GetHookEventsSubjectTypeSubjectTypeEnum(str, Enum):
    WORKSPACE = "workspace"
    USER = "user"
    REPOSITORY = "repository"
    TEAM = "team"


@dataclasses.dataclass
class GetHookEventsSubjectTypePathParams:
    subject_type: GetHookEventsSubjectTypeSubjectTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'subject_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHookEventsSubjectTypeSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetHookEventsSubjectTypeRequest:
    path_params: GetHookEventsSubjectTypePathParams = dataclasses.field()
    security: GetHookEventsSubjectTypeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetHookEventsSubjectTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_hook_events: Optional[shared_paginated_hook_events.PaginatedHookEvents] = dataclasses.field(default=None)
    
