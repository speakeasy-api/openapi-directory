import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostBlockedNumbersSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PostBlockedNumbersRequest:
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostBlockedNumbersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostBlockedNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
