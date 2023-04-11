import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesAddStoreSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The release information.
 */
export declare class ReleasesAddStoreRequestBody extends SpeakeasyBase {
    /**
     * Unique id of the release destination
     */
    id: string;
}
export declare class ReleasesAddStoreRequest extends SpeakeasyBase {
    /**
     * The release information.
     */
    requestBody: ReleasesAddStoreRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release
     */
    releaseId: number;
}
export declare enum ReleasesAddStore404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Release not found
 */
export declare class ReleasesAddStore404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesAddStore404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesAddStore400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Failure
 */
export declare class ReleasesAddStore400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesAddStore400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * Created
 */
export declare class ReleasesAddStore201ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique id for the release destination
     */
    id: string;
}
export declare class ReleasesAddStoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    releasesAddStore201ApplicationJSONObject?: ReleasesAddStore201ApplicationJSON;
    /**
     * Failure
     */
    releasesAddStore400ApplicationJSONObject?: ReleasesAddStore400ApplicationJSON;
    /**
     * Release not found
     */
    releasesAddStore404ApplicationJSONObject?: ReleasesAddStore404ApplicationJSON;
}
