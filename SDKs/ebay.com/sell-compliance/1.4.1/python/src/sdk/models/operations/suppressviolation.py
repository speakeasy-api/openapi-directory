import dataclasses
from ..shared import security as shared_security
from ..shared import suppressviolationrequest as shared_suppressviolationrequest


@dataclasses.dataclass
class SuppressViolationSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SuppressViolationRequest:
    request: shared_suppressviolationrequest.SuppressViolationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: SuppressViolationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SuppressViolationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
