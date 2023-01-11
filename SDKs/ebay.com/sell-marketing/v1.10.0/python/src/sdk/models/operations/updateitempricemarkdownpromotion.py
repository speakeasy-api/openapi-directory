import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import itempricemarkdown as shared_itempricemarkdown


@dataclasses.dataclass
class UpdateItemPriceMarkdownPromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateItemPriceMarkdownPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateItemPriceMarkdownPromotionRequest:
    path_params: UpdateItemPriceMarkdownPromotionPathParams = dataclasses.field()
    security: UpdateItemPriceMarkdownPromotionSecurity = dataclasses.field()
    request: Optional[shared_itempricemarkdown.ItemPriceMarkdown] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateItemPriceMarkdownPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_item_price_markdown_promotion_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
