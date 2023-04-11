import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVehiclesVehicleidLocationSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class GetVehiclesVehicleidLocationRequest extends SpeakeasyBase {
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
/**
 * Vehicle's GPS coordinates with timestamp
 */
export declare class GetVehiclesVehicleidLocation200ApplicationJSON extends SpeakeasyBase {
    /**
     * ISO8601 UTC timestamp of last received location
     */
    lastUpdated?: Date;
    /**
     * Latitude in degrees
     */
    latitude?: number;
    /**
     * Longitude in degrees
     */
    longitude?: number;
}
export declare class GetVehiclesVehicleidLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Vehicle's GPS coordinates with timestamp
     */
    getVehiclesVehicleidLocation200ApplicationJSONObject?: GetVehiclesVehicleidLocation200ApplicationJSON;
}
