import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVehiclesVehicleidWatchPathParams extends SpeakeasyBase {
    vehicleId: string;
}
export declare enum PostVehiclesVehicleidWatchRequestBodyPropertiesEnum {
    BatteryLevel = "BATTERY_LEVEL",
    Range = "RANGE",
    IsPluggedIn = "IS_PLUGGED_IN",
    IsCharging = "IS_CHARGING",
    IsChargingReasons = "IS_CHARGING_REASONS",
    Location = "LOCATION"
}
export declare class PostVehiclesVehicleidWatchRequestBody extends SpeakeasyBase {
    properties?: PostVehiclesVehicleidWatchRequestBodyPropertiesEnum;
}
export declare class PostVehiclesVehicleidWatchSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
    userAccessToken2?: shared.SchemeUserAccessToken;
}
export declare class PostVehiclesVehicleidWatchRequest extends SpeakeasyBase {
    pathParams: PostVehiclesVehicleidWatchPathParams;
    request?: PostVehiclesVehicleidWatchRequestBody;
    security: PostVehiclesVehicleidWatchSecurity;
}
export declare class PostVehiclesVehicleidWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema;
}
