import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import productsample as shared_productsample


@dataclasses.dataclass
class ImportationGetProductSamplePathParams:
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    product_sample_index: int = dataclasses.field(metadata={'path_param': { 'field_name': 'productSampleIndex', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetProductSampleRequest:
    path_params: ImportationGetProductSamplePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationGetProductSampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    product_sample: Optional[shared_productsample.ProductSample] = dataclasses.field(default=None)
    
