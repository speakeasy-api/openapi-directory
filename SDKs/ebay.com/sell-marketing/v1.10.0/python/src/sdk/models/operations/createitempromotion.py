import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import itempromotion as shared_itempromotion
from ..shared import baseresponse as shared_baseresponse


@dataclasses.dataclass
class CreateItemPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateItemPromotionRequest:
    security: CreateItemPromotionSecurity = dataclasses.field()
    request: Optional[shared_itempromotion.ItemPromotion] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateItemPromotionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    base_response: Optional[shared_baseresponse.BaseResponse] = dataclasses.field(default=None)
    
