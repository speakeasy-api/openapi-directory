import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import createinventorytaskrequest as shared_createinventorytaskrequest


@dataclasses.dataclass
class CreateInventoryTaskHeaders:
    x_ebay_c_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateInventoryTaskSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateInventoryTaskRequest:
    headers: CreateInventoryTaskHeaders = dataclasses.field()
    request: shared_createinventorytaskrequest.CreateInventoryTaskRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateInventoryTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateInventoryTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
