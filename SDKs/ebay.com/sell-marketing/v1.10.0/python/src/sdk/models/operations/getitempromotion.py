import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import itempromotionresponse as shared_itempromotionresponse


@dataclasses.dataclass
class GetItemPromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetItemPromotionRequest:
    path_params: GetItemPromotionPathParams = dataclasses.field()
    security: GetItemPromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetItemPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_promotion_response: Optional[shared_itempromotionresponse.ItemPromotionResponse] = dataclasses.field(default=None)
    
