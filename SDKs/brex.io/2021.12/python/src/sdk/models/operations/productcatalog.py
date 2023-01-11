import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductCatalogPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductCatalogSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductCatalogRequest:
    path_params: ProductCatalogPathParams = dataclasses.field()
    security: ProductCatalogSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductCatalogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_catalog_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_catalog_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
