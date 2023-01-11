import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateproductrequest as shared_updateproductrequest
from ..shared import productmodel as shared_productmodel
from ..shared import productmodel_haljson as shared_productmodel_haljson


@dataclasses.dataclass
class UpdateProductPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateProductRequests:
    update_product_request: Optional[shared_updateproductrequest.UpdateProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_product_request1: Optional[shared_updateproductrequest.UpdateProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_product_request2: Optional[shared_updateproductrequest.UpdateProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateProductRequest:
    path_params: UpdateProductPathParams = dataclasses.field()
    request: UpdateProductRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_model: Optional[shared_productmodel.ProductModel] = dataclasses.field(default=None)
    product_model_haljson: Optional[shared_productmodel_haljson.ProductModelHaljson] = dataclasses.field(default=None)
    
