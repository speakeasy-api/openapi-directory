import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetVehiclesVehicleidInformationPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidInformationSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetVehiclesVehicleidInformation200ApplicationJSON:
    r"""GetVehiclesVehicleidInformation200ApplicationJSON
    Descriptive information about the Vehicle
    """
    
    brand: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidInformationRequest:
    path_params: GetVehiclesVehicleidInformationPathParams = dataclasses.field()
    security: GetVehiclesVehicleidInformationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVehiclesVehicleidInformationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_vehicles_vehicleid_information_200_application_json_object: Optional[GetVehiclesVehicleidInformation200ApplicationJSON] = dataclasses.field(default=None)
    
