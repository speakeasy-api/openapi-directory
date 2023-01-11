import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductOrderUboRequestBody:
    subject_id: str = dataclasses.field(metadata={'form': { 'field_name': 'subjectId' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'callbackUrl' }})
    credits: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'credits' }})
    include_docs: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'includeDocs' }})
    levels: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'levels' }})
    strategy: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'strategy' }})
    

@dataclasses.dataclass
class ProductOrderUboSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductOrderUboRequest:
    security: ProductOrderUboSecurity = dataclasses.field()
    request: Optional[ProductOrderUboRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ProductOrderUboResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_order_ubo_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_order_ubo_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
