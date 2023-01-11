import dataclasses
from typing import Any,Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class CatalogGetProductBySkuPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetProductBySkuQueryParams:
    sku: str = dataclasses.field(metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CatalogGetProductBySkuRequest:
    path_params: CatalogGetProductBySkuPathParams = dataclasses.field()
    query_params: CatalogGetProductBySkuQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogGetProductBySkuResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    product: Optional[Any] = dataclasses.field(default=None)
    
