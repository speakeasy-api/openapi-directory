import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductSearchPathParams:
    subject_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductSearchSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductSearchRequest:
    path_params: ProductSearchPathParams = dataclasses.field()
    security: ProductSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_search_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    product_search_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
