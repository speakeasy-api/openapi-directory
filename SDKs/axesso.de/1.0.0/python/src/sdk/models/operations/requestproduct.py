import dataclasses
from typing import Optional
from ..shared import productdetailsresponse as shared_productdetailsresponse


@dataclasses.dataclass
class RequestProductQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RequestProductRequest:
    query_params: RequestProductQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RequestProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_details_response: Optional[shared_productdetailsresponse.ProductDetailsResponse] = dataclasses.field(default=None)
    
