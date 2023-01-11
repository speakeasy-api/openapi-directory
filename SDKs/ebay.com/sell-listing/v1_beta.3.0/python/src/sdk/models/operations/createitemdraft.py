import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import itemdraft as shared_itemdraft
from ..shared import itemdraftresponse as shared_itemdraftresponse


@dataclasses.dataclass
class CreateItemDraftHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    content_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Content-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateItemDraftSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateItemDraftRequest:
    headers: CreateItemDraftHeaders = dataclasses.field()
    security: CreateItemDraftSecurity = dataclasses.field()
    request: Optional[shared_itemdraft.ItemDraft] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateItemDraftResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_draft_response: Optional[shared_itemdraftresponse.ItemDraftResponse] = dataclasses.field(default=None)
    
