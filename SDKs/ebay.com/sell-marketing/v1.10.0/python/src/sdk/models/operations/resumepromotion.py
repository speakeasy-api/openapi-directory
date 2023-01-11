import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class ResumePromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResumePromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ResumePromotionRequest:
    path_params: ResumePromotionPathParams = dataclasses.field()
    security: ResumePromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ResumePromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
