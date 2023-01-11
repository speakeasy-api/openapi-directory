import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import itempromotion as shared_itempromotion
from ..shared import baseresponse as shared_baseresponse


@dataclasses.dataclass
class UpdateItemPromotionPathParams:
    promotion_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateItemPromotionSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateItemPromotionRequest:
    path_params: UpdateItemPromotionPathParams = dataclasses.field()
    security: UpdateItemPromotionSecurity = dataclasses.field()
    request: Optional[shared_itempromotion.ItemPromotion] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateItemPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    base_response: Optional[shared_baseresponse.BaseResponse] = dataclasses.field(default=None)
    
