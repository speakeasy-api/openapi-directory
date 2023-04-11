import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVehiclesVehicleidSmartchargingpolicySecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class GetVehiclesVehicleidSmartchargingpolicyRequest extends SpeakeasyBase {
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
export declare class GetVehiclesVehicleidSmartchargingpolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
