import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVehiclesVehicleidInformationSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class GetVehiclesVehicleidInformationRequest extends SpeakeasyBase {
    /**
     * ID of the Vehicle
     */
    vehicleId: string;
}
/**
 * Descriptive information about the Vehicle
 */
export declare class GetVehiclesVehicleidInformation200ApplicationJSON extends SpeakeasyBase {
    /**
     * Vehicle brand
     */
    brand?: string;
    /**
     * Vehicle ID
     */
    id?: string;
    /**
     * Vehicle model
     */
    model?: string;
    /**
     * Vehicle production year
     */
    year?: number;
}
export declare class GetVehiclesVehicleidInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Descriptive information about the Vehicle
     */
    getVehiclesVehicleidInformation200ApplicationJSONObject?: GetVehiclesVehicleidInformation200ApplicationJSON;
}
