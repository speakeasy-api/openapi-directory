import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import itempricemarkdown as shared_itempricemarkdown


@dataclasses.dataclass
class GetItemPriceMarkdownPromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemPriceMarkdownPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetItemPriceMarkdownPromotionRequest:
    path_params: GetItemPriceMarkdownPromotionPathParams = dataclasses.field()
    security: GetItemPriceMarkdownPromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetItemPriceMarkdownPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_price_markdown: Optional[shared_itempricemarkdown.ItemPriceMarkdown] = dataclasses.field(default=None)
    
