import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreReleasesDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoreReleasesDeleteRequest extends SpeakeasyBase {
    requestBody?: string;
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
    releaseId: string;
    /**
     * The name of the store
     */
    storeName: string;
}
export declare enum StoreReleasesDeleteDefaultApplicationJSONCodeEnum {
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
export declare class StoreReleasesDeleteDefaultApplicationJSON extends SpeakeasyBase {
    code: StoreReleasesDeleteDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class StoreReleasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    storeReleasesDeleteDefaultApplicationJSONObject?: StoreReleasesDeleteDefaultApplicationJSON;
}
