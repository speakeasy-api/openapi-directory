import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import shipment as shared_shipment


@dataclasses.dataclass
class CancelShipmentPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelShipmentSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CancelShipmentRequest:
    path_params: CancelShipmentPathParams = dataclasses.field()
    security: CancelShipmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CancelShipmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    shipment: Optional[shared_shipment.Shipment] = dataclasses.field(default=None)
    
