import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteItemPriceMarkdownPromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteItemPriceMarkdownPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteItemPriceMarkdownPromotionRequest:
    path_params: DeleteItemPriceMarkdownPromotionPathParams = dataclasses.field()
    security: DeleteItemPriceMarkdownPromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteItemPriceMarkdownPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
