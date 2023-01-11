import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class PostLocationsRequestBody extends SpeakeasyBase {
    active?: boolean;
    address: PostLocationsRequestBodyAddress;
    chargestations?: any[];
    coordinates: PostLocationsRequestBodyCoordinates;
    operatorName: string;
}
export declare class PostLocations200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostLocationsRequest extends SpeakeasyBase {
    request: PostLocationsRequestBody;
}
export declare class PostLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postLocations200ApplicationJSONObject?: PostLocations200ApplicationJson;
}
