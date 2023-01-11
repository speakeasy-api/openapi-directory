import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema


@dataclasses.dataclass
class GetVehiclesVehicleidSmartchargingpolicyPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidSmartchargingpolicySecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVehiclesVehicleidSmartchargingpolicyRequest:
    path_params: GetVehiclesVehicleidSmartchargingpolicyPathParams = dataclasses.field()
    security: GetVehiclesVehicleidSmartchargingpolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVehiclesVehicleidSmartchargingpolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onevehicles_1_percent_7_bvehicle_id_percent_7_d_1smart_charging_policy_put_request_body_content_application_1json_schema: Optional[shared_onevehicles_1percent_7bvehicleidpercent_7d_1smart_charging_policy_put_requestbody_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema] = dataclasses.field(default=None)
    
