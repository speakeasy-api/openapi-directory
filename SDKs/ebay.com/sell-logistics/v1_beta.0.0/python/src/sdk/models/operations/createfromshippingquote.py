import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import createshipmentfromquoterequest as shared_createshipmentfromquoterequest
from ..shared import shipment as shared_shipment


@dataclasses.dataclass
class CreateFromShippingQuoteSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateFromShippingQuoteRequest:
    request: shared_createshipmentfromquoterequest.CreateShipmentFromQuoteRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFromShippingQuoteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateFromShippingQuoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    shipment: Optional[shared_shipment.Shipment] = dataclasses.field(default=None)
    
