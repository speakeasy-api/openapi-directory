import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreReleasesGetPublishErrorSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoreReleasesGetPublishErrorRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The id of the release
     */
    releaseId: number;
    /**
     * The name of the store
     */
    storeName: string;
}
export declare enum StoreReleasesGetPublishErrorDefaultApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error
 */
export declare class StoreReleasesGetPublishErrorDefaultApplicationJSON extends SpeakeasyBase {
    code: StoreReleasesGetPublishErrorDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * ReleasePublishErrorResponse
 */
export declare class StoreReleasesGetPublishError200ApplicationJSON extends SpeakeasyBase {
    /**
     * boolean property to tell if logs are available for download
     */
    isLogAvailable?: boolean;
    /**
     * error Details
     */
    message?: string;
}
export declare class StoreReleasesGetPublishErrorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    storeReleasesGetPublishError200ApplicationJSONObject?: StoreReleasesGetPublishError200ApplicationJSON;
    /**
     * Error
     */
    storeReleasesGetPublishErrorDefaultApplicationJSONObject?: StoreReleasesGetPublishErrorDefaultApplicationJSON;
}
