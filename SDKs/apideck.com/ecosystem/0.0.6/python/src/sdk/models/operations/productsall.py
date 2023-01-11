import dataclasses
from typing import Optional
from ..shared import getproductsresponse as shared_getproductsresponse


@dataclasses.dataclass
class ProductsAllPathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductsAllRequest:
    path_params: ProductsAllPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProductsAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_products_response: Optional[shared_getproductsresponse.GetProductsResponse] = dataclasses.field(default=None)
    
