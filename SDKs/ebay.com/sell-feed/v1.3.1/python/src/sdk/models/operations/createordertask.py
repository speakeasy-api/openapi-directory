import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import createordertaskrequest as shared_createordertaskrequest


@dataclasses.dataclass
class CreateOrderTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateOrderTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateOrderTaskRequest:
    headers: CreateOrderTaskHeaders = dataclasses.field()
    request: shared_createordertaskrequest.CreateOrderTaskRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateOrderTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateOrderTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
