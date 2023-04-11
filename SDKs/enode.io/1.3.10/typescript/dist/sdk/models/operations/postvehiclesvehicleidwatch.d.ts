import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostVehiclesVehicleidWatchSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
    userAccessToken2?: string;
}
/**
 * Array of vehicle properties to watch
 */
export declare enum PostVehiclesVehicleidWatchRequestBodyPropertiesEnum {
    BatteryLevel = "BATTERY_LEVEL",
    Range = "RANGE",
    IsPluggedIn = "IS_PLUGGED_IN",
    IsCharging = "IS_CHARGING",
    IsChargingReasons = "IS_CHARGING_REASONS",
    Location = "LOCATION"
}
export declare class PostVehiclesVehicleidWatchRequestBody extends SpeakeasyBase {
    /**
     * Array of vehicle properties to watch
     */
    properties?: PostVehiclesVehicleidWatchRequestBodyPropertiesEnum;
}
export declare class PostVehiclesVehicleidWatchRequest extends SpeakeasyBase {
    requestBody?: PostVehiclesVehicleidWatchRequestBody;
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
export declare class PostVehiclesVehicleidWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema?: shared.Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema;
}
