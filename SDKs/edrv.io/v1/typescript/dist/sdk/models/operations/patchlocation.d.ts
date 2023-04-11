import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchLocationRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    state?: string;
    streetAndNumber?: string;
}
export declare class PatchLocationRequestBodyCoordinates extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
export declare class PatchLocationRequestBodyOpeningHours0 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours1 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours2 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours3 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours4 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours5 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours6 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours extends SpeakeasyBase {
    zero?: PatchLocationRequestBodyOpeningHours0[];
    one?: PatchLocationRequestBodyOpeningHours1[];
    two?: PatchLocationRequestBodyOpeningHours2[];
    three?: PatchLocationRequestBodyOpeningHours3[];
    four?: PatchLocationRequestBodyOpeningHours4[];
    five?: PatchLocationRequestBodyOpeningHours5[];
    six?: PatchLocationRequestBodyOpeningHours6[];
}
/**
 * Include location properties to create here
 */
export declare class PatchLocationRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PatchLocationRequestBodyAddress;
    chargestations?: any[];
    coordinates?: PatchLocationRequestBodyCoordinates;
    openingHours?: PatchLocationRequestBodyOpeningHours;
    operatorName?: string;
    timezone?: string;
}
export declare class PatchLocationRequest extends SpeakeasyBase {
    /**
     * Include location properties to create here
     */
    requestBody: PatchLocationRequestBody;
    /**
     * ID of location that needs to be updated
     */
    id: string;
}
/**
 * Returns the updated location object
 */
export declare class PatchLocation200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PatchLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the updated location object
     */
    patchLocation200ApplicationJSONObject?: PatchLocation200ApplicationJSON;
}
