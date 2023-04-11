import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ControlChargerChargingSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
/**
 * Charging action to perform
 */
export declare enum ControlChargerChargingRequestBodyActionEnum {
    Start = "START",
    Stop = "STOP"
}
export declare class ControlChargerChargingRequestBody extends SpeakeasyBase {
    /**
     * Charging action to perform
     */
    action: ControlChargerChargingRequestBodyActionEnum;
}
export declare class ControlChargerChargingRequest extends SpeakeasyBase {
    requestBody?: ControlChargerChargingRequestBody;
    /**
     * ID of the Charger
     */
    chargerId: string;
}
export declare class ControlChargerChargingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
