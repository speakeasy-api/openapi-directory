import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostLocationsRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    streetAndNumber?: string;
}
export declare class PostLocationsRequestBodyCoordinates extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
/**
 * Include location properties to create here
 */
export declare class PostLocationsRequestBody extends SpeakeasyBase {
    active?: boolean;
    address: PostLocationsRequestBodyAddress;
    chargestations?: any[];
    coordinates: PostLocationsRequestBodyCoordinates;
    operatorName: string;
}
/**
 * Returns the newly created location object
 */
export declare class PostLocations200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the newly created location object
     */
    postLocations200ApplicationJSONObject?: PostLocations200ApplicationJSON;
}
