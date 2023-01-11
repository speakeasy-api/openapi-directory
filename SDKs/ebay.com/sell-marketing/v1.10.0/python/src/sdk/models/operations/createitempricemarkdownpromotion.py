import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import itempricemarkdown as shared_itempricemarkdown


@dataclasses.dataclass
class CreateItemPriceMarkdownPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateItemPriceMarkdownPromotionRequest:
    security: CreateItemPriceMarkdownPromotionSecurity = dataclasses.field()
    request: Optional[shared_itempricemarkdown.ItemPriceMarkdown] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateItemPriceMarkdownPromotionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_item_price_markdown_promotion_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
