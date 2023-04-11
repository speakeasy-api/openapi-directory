import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutVehiclesVehicleidSmartchargingpolicySecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class PutVehiclesVehicleidSmartchargingpolicyRequestBody extends SpeakeasyBase {
    /**
     * The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC
     */
    deadline?: string;
    /**
     * When enabled, this vehicle's charging status may be controlled by Smart Charging.
     */
    isEnabled?: boolean;
}
export declare class PutVehiclesVehicleidSmartchargingpolicyRequest extends SpeakeasyBase {
    requestBody?: PutVehiclesVehicleidSmartchargingpolicyRequestBody;
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
export declare class PutVehiclesVehicleidSmartchargingpolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema;
}
