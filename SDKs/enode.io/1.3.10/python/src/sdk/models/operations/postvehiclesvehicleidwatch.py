import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1watch_post_requestbody_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1watch_post_requestbody_content_application_1json_schema


@dataclasses.dataclass
class PostVehiclesVehicleidWatchPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    
class PostVehiclesVehicleidWatchRequestBodyPropertiesEnum(str, Enum):
    BATTERY_LEVEL = "BATTERY_LEVEL"
    RANGE = "RANGE"
    IS_PLUGGED_IN = "IS_PLUGGED_IN"
    IS_CHARGING = "IS_CHARGING"
    IS_CHARGING_REASONS = "IS_CHARGING_REASONS"
    LOCATION = "LOCATION"


@dataclass_json
@dataclasses.dataclass
class PostVehiclesVehicleidWatchRequestBody:
    properties: Optional[PostVehiclesVehicleidWatchRequestBodyPropertiesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclasses.dataclass
class PostVehiclesVehicleidWatchSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token2: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostVehiclesVehicleidWatchRequest:
    path_params: PostVehiclesVehicleidWatchPathParams = dataclasses.field()
    security: PostVehiclesVehicleidWatchSecurity = dataclasses.field()
    request: Optional[PostVehiclesVehicleidWatchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostVehiclesVehicleidWatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onevehicles_1_percent_7_bvehicle_id_percent_7_d_1watch_post_request_body_content_application_1json_schema: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1watch_post_requestbody_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema] = dataclasses.field(default=None)
    
