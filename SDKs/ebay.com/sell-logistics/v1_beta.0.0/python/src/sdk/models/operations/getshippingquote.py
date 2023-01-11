import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import shippingquote as shared_shippingquote


@dataclasses.dataclass
class GetShippingQuotePathParams:
    shipping_quote_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shippingQuoteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShippingQuoteSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetShippingQuoteRequest:
    path_params: GetShippingQuotePathParams = dataclasses.field()
    security: GetShippingQuoteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShippingQuoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    shipping_quote: Optional[shared_shippingquote.ShippingQuote] = dataclasses.field(default=None)
    
