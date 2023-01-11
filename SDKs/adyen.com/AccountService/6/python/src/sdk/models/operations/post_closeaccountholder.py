import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class PostCloseAccountHolderSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PostCloseAccountHolderRequest:
    security: PostCloseAccountHolderSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCloseAccountHolderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    close_account_holder_response: Optional[Any] = dataclasses.field(default=None)
    service_error: Optional[Any] = dataclasses.field(default=None)
    
