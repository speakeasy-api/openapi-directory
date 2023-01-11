import dataclasses
from typing import Optional
from ..shared import productmodel as shared_productmodel
from ..shared import productmodel_haljson as shared_productmodel_haljson


@dataclasses.dataclass
class GetProductPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductRequest:
    path_params: GetProductPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_model: Optional[shared_productmodel.ProductModel] = dataclasses.field(default=None)
    product_model_haljson: Optional[shared_productmodel_haljson.ProductModelHaljson] = dataclasses.field(default=None)
    
