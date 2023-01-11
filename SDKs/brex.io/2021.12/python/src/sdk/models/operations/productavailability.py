import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductAvailabilityPathParams:
    sku: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductAvailabilitySecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductAvailabilityRequest:
    path_params: ProductAvailabilityPathParams = dataclasses.field()
    security: ProductAvailabilitySecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductAvailabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_availability_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_availability_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
