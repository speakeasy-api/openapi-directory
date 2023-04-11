import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesGetSparkleFeedRequest extends SpeakeasyBase {
    /**
     * The secret of the application.
     */
    appSecret: string;
}
export declare enum ReleasesGetSparkleFeedDefaultApplicationJSONCodeEnum {
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
export declare class ReleasesGetSparkleFeedDefaultApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetSparkleFeedDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesGetSparkleFeedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    releasesGetSparkleFeedDefaultApplicationJSONObject?: ReleasesGetSparkleFeedDefaultApplicationJSON;
}
