import dataclasses
from typing import Optional
from ..shared import productmodel_haljson as shared_productmodel_haljson
from ..shared import productmodel as shared_productmodel


@dataclasses.dataclass
class GetProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_model_haljsons: Optional[list[shared_productmodel_haljson.ProductModelHaljson]] = dataclasses.field(default=None)
    product_models: Optional[list[shared_productmodel.ProductModel]] = dataclasses.field(default=None)
    
