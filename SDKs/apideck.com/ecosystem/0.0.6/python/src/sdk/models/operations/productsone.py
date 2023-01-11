import dataclasses
from typing import Optional
from ..shared import getproductresponse as shared_getproductresponse


@dataclasses.dataclass
class ProductsOnePathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductsOneRequest:
    path_params: ProductsOnePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProductsOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_product_response: Optional[shared_getproductresponse.GetProductResponse] = dataclasses.field(default=None)
    
