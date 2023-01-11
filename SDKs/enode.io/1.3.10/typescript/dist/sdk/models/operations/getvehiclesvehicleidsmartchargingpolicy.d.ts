import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehiclesVehicleidSmartchargingpolicyPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare class GetVehiclesVehicleidSmartchargingpolicySecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class GetVehiclesVehicleidSmartchargingpolicyRequest extends SpeakeasyBase {
    pathParams: GetVehiclesVehicleidSmartchargingpolicyPathParams;
    security: GetVehiclesVehicleidSmartchargingpolicySecurity;
}
export declare class GetVehiclesVehicleidSmartchargingpolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
