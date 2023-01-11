import dataclasses
from typing import Optional
from ..shared import getproductsrequest as shared_getproductsrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import productlist as shared_productlist


@dataclasses.dataclass
class CatalogGetProductsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetProductsRequest:
    path_params: CatalogGetProductsPathParams = dataclasses.field()
    request: shared_getproductsrequest.GetProductsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CatalogGetProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    product_list: Optional[shared_productlist.ProductList] = dataclasses.field(default=None)
    
