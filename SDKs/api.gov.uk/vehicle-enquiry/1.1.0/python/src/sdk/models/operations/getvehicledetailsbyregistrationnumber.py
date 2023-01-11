import dataclasses
from typing import Optional
from ..shared import vehiclerequest as shared_vehiclerequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import vehicle as shared_vehicle


@dataclasses.dataclass
class GetVehicleDetailsByRegistrationNumberHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    x_correlation_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehicleDetailsByRegistrationNumberRequest:
    headers: GetVehicleDetailsByRegistrationNumberHeaders = dataclasses.field()
    request: shared_vehiclerequest.VehicleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetVehicleDetailsByRegistrationNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    vehicle: Optional[shared_vehicle.Vehicle] = dataclasses.field(default=None)
    
