import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehicleChargestatePathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare class GetVehicleChargestateSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare enum GetVehicleChargestate200ApplicationJsonIsChargingReasonsEnum {
    Unknown = "",
    Default = "DEFAULT"
}
export declare class GetVehicleChargestate200ApplicationJson extends SpeakeasyBase {
    batteryCapacity?: number;
    batteryLevel?: number;
    chargeLimit?: number;
    chargeRate?: number;
    chargeTimeRemaining?: number;
    isCharging?: boolean;
    isChargingReasons?: GetVehicleChargestate200ApplicationJsonIsChargingReasonsEnum[];
    isPluggedIn?: boolean;
    range?: number;
}
export declare class GetVehicleChargestateRequest extends SpeakeasyBase {
    pathParams: GetVehicleChargestatePathParams;
    security: GetVehicleChargestateSecurity;
}
export declare class GetVehicleChargestateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVehicleChargestate200ApplicationJSONObject?: GetVehicleChargestate200ApplicationJson;
}
