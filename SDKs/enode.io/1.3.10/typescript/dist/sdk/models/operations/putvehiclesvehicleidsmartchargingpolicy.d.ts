import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutVehiclesVehicleidSmartchargingpolicyPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare class PutVehiclesVehicleidSmartchargingpolicyRequestBody extends SpeakeasyBase {
    deadline?: string;
    isEnabled?: boolean;
}
export declare class PutVehiclesVehicleidSmartchargingpolicySecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class PutVehiclesVehicleidSmartchargingpolicyRequest extends SpeakeasyBase {
    pathParams: PutVehiclesVehicleidSmartchargingpolicyPathParams;
    request?: PutVehiclesVehicleidSmartchargingpolicyRequestBody;
    security: PutVehiclesVehicleidSmartchargingpolicySecurity;
}
export declare class PutVehiclesVehicleidSmartchargingpolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
