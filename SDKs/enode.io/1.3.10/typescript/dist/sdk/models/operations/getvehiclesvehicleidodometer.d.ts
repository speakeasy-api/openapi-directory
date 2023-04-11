import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVehiclesVehicleidOdometerSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class GetVehiclesVehicleidOdometerRequest extends SpeakeasyBase {
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
/**
 * Vehicle's odometer with timestamp
 */
export declare class GetVehiclesVehicleidOdometer200ApplicationJSON extends SpeakeasyBase {
    /**
     * Odometer in kilometers
     */
    distance?: number;
    /**
     * ISO8601 UTC timestamp of last received odometer update
     */
    lastUpdated?: Date;
}
export declare class GetVehiclesVehicleidOdometerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Vehicle's odometer with timestamp
     */
    getVehiclesVehicleidOdometer200ApplicationJSONObject?: GetVehiclesVehicleidOdometer200ApplicationJSON;
}
