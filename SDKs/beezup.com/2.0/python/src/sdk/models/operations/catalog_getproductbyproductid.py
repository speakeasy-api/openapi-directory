import dataclasses
from typing import Any,Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class CatalogGetProductByProductIDPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetProductByProductIDRequest:
    path_params: CatalogGetProductByProductIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogGetProductByProductIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    product: Optional[Any] = dataclasses.field(default=None)
    
