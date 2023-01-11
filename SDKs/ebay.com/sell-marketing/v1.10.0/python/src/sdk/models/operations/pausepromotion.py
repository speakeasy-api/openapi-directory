import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PausePromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PausePromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PausePromotionRequest:
    path_params: PausePromotionPathParams = dataclasses.field()
    security: PausePromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PausePromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
