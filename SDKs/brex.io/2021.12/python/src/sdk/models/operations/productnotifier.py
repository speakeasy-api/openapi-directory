import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductNotifierPathParams:
    notifier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'notifierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductNotifierSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductNotifierRequest:
    path_params: ProductNotifierPathParams = dataclasses.field()
    security: ProductNotifierSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductNotifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_notifier_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_notifier_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
