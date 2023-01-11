import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteItemPromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteItemPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteItemPromotionRequest:
    path_params: DeleteItemPromotionPathParams = dataclasses.field()
    security: DeleteItemPromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteItemPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
