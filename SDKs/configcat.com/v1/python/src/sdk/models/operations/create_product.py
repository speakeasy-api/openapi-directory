import dataclasses
from typing import Optional
from ..shared import createproductrequest as shared_createproductrequest
from ..shared import productmodel as shared_productmodel
from ..shared import productmodel_haljson as shared_productmodel_haljson


@dataclasses.dataclass
class CreateProductPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProductRequests:
    create_product_request: Optional[shared_createproductrequest.CreateProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_product_request1: Optional[shared_createproductrequest.CreateProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_product_request2: Optional[shared_createproductrequest.CreateProductRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class CreateProductRequest:
    path_params: CreateProductPathParams = dataclasses.field()
    request: CreateProductRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreateProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_model: Optional[shared_productmodel.ProductModel] = dataclasses.field(default=None)
    product_model_haljson: Optional[shared_productmodel_haljson.ProductModelHaljson] = dataclasses.field(default=None)
    
