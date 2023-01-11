import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductUpdateActionPathParams:
    action: str = dataclasses.field(metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductUpdateActionRequestBody:
    credits: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'credits' }})
    

@dataclasses.dataclass
class ProductUpdateActionSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductUpdateActionRequest:
    path_params: ProductUpdateActionPathParams = dataclasses.field()
    security: ProductUpdateActionSecurity = dataclasses.field()
    request: Optional[ProductUpdateActionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ProductUpdateActionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_update_action_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_update_action_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
