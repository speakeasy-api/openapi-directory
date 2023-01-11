import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1charge_state_get_responses_200_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1charge_state_get_responses_200_content_application_1json_schema
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1information_get_responses_200_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1information_get_responses_200_content_application_1json_schema
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1location_get_responses_200_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1location_get_responses_200_content_application_1json_schema
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1odometer_get_responses_200_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1odometer_get_responses_200_content_application_1json_schema
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema


@dataclasses.dataclass
class GetVehiclesVehicleidPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    
class GetVehiclesVehicleidFieldEnum(str, Enum):
    SMART_CHARGING_POLICY = "smartChargingPolicy"
    CHARGE_STATE = "chargeState"
    LOCATION = "location"
    INFORMATION = "information"
    ODOMETER = "odometer"


@dataclasses.dataclass
class GetVehiclesVehicleidQueryParams:
    field_: Optional[list[GetVehiclesVehicleidFieldEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'field[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token2: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token3: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token4: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token5: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetVehiclesVehicleid200ApplicationJSON:
    charging_location_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargingLocationId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_reachable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReachable') }})
    last_seen: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    charge_state: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1charge_state_get_responses_200_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeState') }})
    information: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1information_get_responses_200_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1informationGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('information') }})
    location: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1location_get_responses_200_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1locationGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    odometer: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1odometer_get_responses_200_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1odometerGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('odometer') }})
    smart_charging_policy: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartChargingPolicy') }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidRequest:
    path_params: GetVehiclesVehicleidPathParams = dataclasses.field()
    query_params: GetVehiclesVehicleidQueryParams = dataclasses.field()
    security: GetVehiclesVehicleidSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVehiclesVehicleidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_vehicles_vehicleid_200_application_json_object: Optional[GetVehiclesVehicleid200ApplicationJSON] = dataclasses.field(default=None)
    
