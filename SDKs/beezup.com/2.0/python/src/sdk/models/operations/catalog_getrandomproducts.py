import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import randomproductlist as shared_randomproductlist


@dataclasses.dataclass
class CatalogGetRandomProductsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetRandomProductsRequest:
    path_params: CatalogGetRandomProductsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogGetRandomProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    random_product_list: Optional[shared_randomproductlist.RandomProductList] = dataclasses.field(default=None)
    
