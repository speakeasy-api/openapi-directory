import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreReleasesGetRealTimeStatusByReleaseIdSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoreReleasesGetRealTimeStatusByReleaseIdRequest extends SpeakeasyBase {
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
export declare enum StoreReleasesGetRealTimeStatusByReleaseIdDefaultApplicationJSONCodeEnum {
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
export declare class StoreReleasesGetRealTimeStatusByReleaseIdDefaultApplicationJSON extends SpeakeasyBase {
    code: StoreReleasesGetRealTimeStatusByReleaseIdDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * Status Data from store
 */
export declare class StoreReleasesGetRealTimeStatusByReleaseId200ApplicationJSONStatus extends SpeakeasyBase {
    /**
     * status from store
     */
    status?: string;
    /**
     * store type
     */
    storetype?: string;
    /**
     * track information from store
     */
    track?: string;
    /**
     * version of the app from store
     */
    version?: string;
}
/**
 * status of the app from store
 */
export declare class StoreReleasesGetRealTimeStatusByReleaseId200ApplicationJSON extends SpeakeasyBase {
    /**
     * app id
     */
    appId?: string;
    /**
     * release id
     */
    releaseId?: string;
    /**
     * Status Data from store
     */
    status?: StoreReleasesGetRealTimeStatusByReleaseId200ApplicationJSONStatus;
}
export declare class StoreReleasesGetRealTimeStatusByReleaseIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    storeReleasesGetRealTimeStatusByReleaseId200ApplicationJSONObject?: StoreReleasesGetRealTimeStatusByReleaseId200ApplicationJSON;
    /**
     * Error
     */
    storeReleasesGetRealTimeStatusByReleaseIdDefaultApplicationJSONObject?: StoreReleasesGetRealTimeStatusByReleaseIdDefaultApplicationJSON;
}
