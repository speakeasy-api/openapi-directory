import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema


@dataclasses.dataclass
class PutVehiclesVehicleidSmartchargingpolicyPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutVehiclesVehicleidSmartchargingpolicyRequestBody:
    deadline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadline') }})
    is_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    

@dataclasses.dataclass
class PutVehiclesVehicleidSmartchargingpolicySecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutVehiclesVehicleidSmartchargingpolicyRequest:
    path_params: PutVehiclesVehicleidSmartchargingpolicyPathParams = dataclasses.field()
    security: PutVehiclesVehicleidSmartchargingpolicySecurity = dataclasses.field()
    request: Optional[PutVehiclesVehicleidSmartchargingpolicyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutVehiclesVehicleidSmartchargingpolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onevehicles_1_percent_7_bvehicle_id_percent_7_d_1smart_charging_policy_put_request_body_content_application_1json_schema: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema] = dataclasses.field(default=None)
    
