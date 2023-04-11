import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesDeleteTesterFromDestinationsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesDeleteTesterFromDestinationsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The id of the tester
     */
    testerId: string;
}
export declare enum ReleasesDeleteTesterFromDestinations404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Tester can't be found
 *
 * @remarks
 *
 */
export declare class ReleasesDeleteTesterFromDestinations404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesDeleteTesterFromDestinations404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesDeleteTesterFromDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tester can't be found
     *
     * @remarks
     *
     */
    releasesDeleteTesterFromDestinations404ApplicationJSONObject?: ReleasesDeleteTesterFromDestinations404ApplicationJSON;
}
