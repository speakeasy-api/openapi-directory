import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ControlChargerChargingPathParams extends SpeakeasyBase {
    chargerId: string;
}
export declare enum ControlChargerChargingRequestBodyActionEnum {
    Start = "START",
    Stop = "STOP"
}
export declare class ControlChargerChargingRequestBody extends SpeakeasyBase {
    action: ControlChargerChargingRequestBodyActionEnum;
}
export declare class ControlChargerChargingSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class ControlChargerChargingRequest extends SpeakeasyBase {
    pathParams: ControlChargerChargingPathParams;
    request?: ControlChargerChargingRequestBody;
    security: ControlChargerChargingSecurity;
}
export declare class ControlChargerChargingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
