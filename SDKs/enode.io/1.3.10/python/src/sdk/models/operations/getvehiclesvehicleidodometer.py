import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetVehiclesVehicleidOdometerPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidOdometerSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetVehiclesVehicleidOdometer200ApplicationJSON:
    r"""GetVehiclesVehicleidOdometer200ApplicationJSON
    Vehicle's odometer with timestamp
    """
    
    distance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    last_updated: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidOdometerRequest:
    path_params: GetVehiclesVehicleidOdometerPathParams = dataclasses.field()
    security: GetVehiclesVehicleidOdometerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVehiclesVehicleidOdometerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_vehicles_vehicleid_odometer_200_application_json_object: Optional[GetVehiclesVehicleidOdometer200ApplicationJSON] = dataclasses.field(default=None)
    
