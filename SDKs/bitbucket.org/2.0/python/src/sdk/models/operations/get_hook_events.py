import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import subject_types as shared_subject_types


@dataclasses.dataclass
class GetHookEventsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetHookEventsRequest:
    security: GetHookEventsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetHookEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subject_types: Optional[shared_subject_types.SubjectTypes] = dataclasses.field(default=None)
    
