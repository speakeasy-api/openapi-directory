import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import createtaskrequest as shared_createtaskrequest


@dataclasses.dataclass
class CreateTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateTaskRequest:
    headers: CreateTaskHeaders = dataclasses.field()
    request: shared_createtaskrequest.CreateTaskRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
