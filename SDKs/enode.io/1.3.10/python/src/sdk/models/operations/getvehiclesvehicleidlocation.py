import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetVehiclesVehicleidLocationPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidLocationSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetVehiclesVehicleidLocation200ApplicationJSON:
    r"""GetVehiclesVehicleidLocation200ApplicationJSON
    Vehicle's GPS coordinates with timestamp
    """
    
    last_updated: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidLocationRequest:
    path_params: GetVehiclesVehicleidLocationPathParams = dataclasses.field()
    security: GetVehiclesVehicleidLocationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVehiclesVehicleidLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_vehicles_vehicleid_location_200_application_json_object: Optional[GetVehiclesVehicleidLocation200ApplicationJSON] = dataclasses.field(default=None)
    
