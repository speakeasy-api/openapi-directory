import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreReleasePublishLogsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoreReleasePublishLogsGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the realease
     */
    releaseId: string;
    /**
     * The name of the store
     */
    storeName: string;
}
export declare enum StoreReleasePublishLogsGetDefaultApplicationJSONCodeEnum {
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
export declare class StoreReleasePublishLogsGetDefaultApplicationJSON extends SpeakeasyBase {
    code: StoreReleasePublishLogsGetDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class StoreReleasePublishLogsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    storeReleasePublishLogsGetDefaultApplicationJSONObject?: StoreReleasePublishLogsGetDefaultApplicationJSON;
}
