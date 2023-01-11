import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import shippingquoterequest as shared_shippingquoterequest
from ..shared import shippingquote as shared_shippingquote


@dataclasses.dataclass
class CreateShippingQuoteSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateShippingQuoteRequest:
    request: shared_shippingquoterequest.ShippingQuoteRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShippingQuoteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateShippingQuoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    shipping_quote: Optional[shared_shippingquote.ShippingQuote] = dataclasses.field(default=None)
    
