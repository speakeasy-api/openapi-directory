import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductOrderWithOptionPathParams:
    option: str = dataclasses.field(metadata={'path_param': { 'field_name': 'option', 'style': 'simple', 'explode': False }})
    sku: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductOrderWithOptionSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductOrderWithOptionRequest:
    path_params: ProductOrderWithOptionPathParams = dataclasses.field()
    security: ProductOrderWithOptionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductOrderWithOptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_order_with_option_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_order_with_option_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
